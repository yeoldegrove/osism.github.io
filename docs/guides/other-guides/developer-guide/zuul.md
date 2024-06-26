---
sidebar_label: Zuul CI
---

# Zuul CI

:::note

We use Zuul CI as a CI service for OSISM. The service is not required for
the use of OSISM itself. However, as we deploy and provide Zuul CI ourselves,
the documentation for this is also included in the OSISM Developer Guide.

Our Zuul CI instance is available at
[zuul.services.betacloud.xyz](https://zuul.services.betacloud.xyz/t/osism/status).

:::

`osism.services.zuul` is the Ansible role to set up Zuul CI as a single-node
installation with Docker Compose.

## The `zuul` label

On CI jobs that consume a lot of resources and have long runtimes we use a label
`zuul` to run these jobs.

These CI jobs run in the [label pipeline](https://zuul.services.betacloud.xyz/t/osism/buildsets?pipeline=label)
and are only started once after the label has been assigned. If changes are made
to a PR, the label must first be removed and then reassigned for a new run of the
CI jobs.

The `zuul` label is usable in the following repositories:

* [osism/container-images-kolla](https://github.com/osism/container-images-kolla)
* [osism/testbed](https://github.com/osism/testbed)

## Installation

### Server preparation

Set up a server (VM) with Ubuntu Server 22.04 LTS and make
sure that these packages are installed:

* docker.io
* docker-compose
* python3-docker
* python3-openstackclient

Also configure your deploy user to be in the docker group and set up the
account for the zuul user. TCP-Ports 80 and 443 should be accessible
from the internet, port 22 for management via SSH will also often be
useful, but not required.

If you have an OpenStack tenant where you want to deploy the Zuul
server, you can download and adapt this example
playbook:

```yaml
---
- name: Setup zuul server
  hosts: localhost
  vars:
    cloud: mycloud
    flavor: myflavor
    image: Ubuntu 22.04
    keypair: mykeypair
    network: myprivatenet
    project: myproject
    zuul_domain: mydomain.xyz.
    zuul_fqdn: "zuul01.services.{{ zuul_domain }}"
    zuul_host: zuul01

  tasks:
    - name: Create security group
      openstack.cloud.security_group:
        cloud: "{{ cloud }}"
        name: "{{ project }}-zuul"
        description: "Default security group for {{ project }}-zuul"

    - name: Create security group rule (icmp)
      openstack.cloud.security_group_rule:
        cloud: "{{ cloud }}"
        security_group: "{{ project }}-zuul"
        protocol: icmp
        remote_ip_prefix: 0.0.0.0/0

    - name: Create security group rules (tcp)
      openstack.cloud.security_group_rule:
        cloud: "{{ cloud }}"
        security_group: "{{ project }}-zuul"
        protocol: tcp
        remote_ip_prefix: 0.0.0.0/0
        port_range_min: "{{ item }}"
        port_range_max: "{{ item }}"
      loop:
        - 22
        - 80
        - 443

    - name: Create zuul server
      openstack.cloud.server:
        cloud: "{{ cloud }}"
        flavor: "{{ flavor }}"
        image: "{{ image }}"
        key_name: "{{ keypair }}"
        name: "{{ zuul_host }}"
        network: "{{ network }}"
        security_groups:
          - default
          - "{{ project }}-zuul"
        meta:
          hostname: "{{ zuul_host }}"
      register: zuul_server

    - name: Add host
      ansible.builtin.add_host:
        name: "{{ zuul_server.openstack.accessIPv4 }}"
        groups: zuul
        ansible_user: ubuntu

- name: Initialize zuul server
  hosts: zuul
  gather_facts: false
  vars:
    zuul_user: zuul

  tasks:
    - name: Wait for system to become reachable
      ansible.builtin.wait_for_connection:

    - name: Update all packages
      ansible.builtin.apt:
        update_cache: true
        name: '*'
        state: latest
      become: true

    - name: Install required packages
      ansible.builtin.apt:
        name:
          - docker.io
          - docker-compose
          - python3-docker
          - python3-openstackclient
      become: true

    - name: Add user to docker group
      ansible.builtin.user:
        name: "{{ ansible_ssh_user }}"
        groups: docker
        append: true
      become: true

    - name: Add group
      ansible.builtin.group:
        name: "{{ zuul_user }}"
      become: true

    - name: Add user
      ansible.builtin.user:
        name: "{{ zuul_user }}"
        uid: 10001
        shell: /bin/bash
        group: "{{ zuul_user }}"
        groups: sudo
        append: true
        home: "/home/{{ zuul_user }}"
      become: true
```

### Define secrets

There need to be some secrets handed to the deployment, the suggested
method is to have a dedicated file that contains them, which will be
included in the example playbook below via a `vars_files` statement.
This allows you to easily protect all your secrets by applying
`ansible-vault encrypt` to that file. The contents of this file should
look like:

```yaml
---
zuul_auth_secret: secret used for zuul web auth
webhook_token: token defined for github webhooks
db_user_pass: DB password for the zuul user
db_root_pass: DB root password
```

In addition you need to prepare some further data that needs to be
placed into a `files` directory in order to be consumed by the zuul
role. These are:

1. A `clouds.yaml` file for nodepool. This will be used by
   `nodepool-builder` to upload the newly created images and by
   `nodepool-launcher` to start instances running these images, these
   will then be handed over to Zuul as CI nodes.
2. An SSH private key in the file `nodepool` and the matching public
   key in `nodepool.pub`. These will be used by nodepool and zuul to
   access the CI nodes via SSH.
3. An SSL private key and certificate pasted together in a file
   named `server.crt`. This file will be used in the https setup by
   the webserver. The certificate should cover both `zuul_webserver_fqdn`
   and `zuul_logserver_fqdn`.

### Github App setup

In order for zuul to be able to interact with repositories hosted on
github, you need to set up a github application. Follow the instructions
at https://zuul-ci.org/docs/zuul/latest/drivers/github.html#application
to do this. The webhook token to use is the one defined in the
pervious section. Use `github` in place of `<connection-name>` for the
Webhook URL in the app configuration. After the app has been created,
place the PEM files that you downloaded into a
directory named `pem-files`:

```
$ mkdir -p pem-files
$ cp ~/Downloads/my-org-zuul.*.private-key.pem pem-files/my-org-zuul.pem
```

Now add the information about your github app to `vars.yml`:

```
github_app_id: 000000
github_pem_name: my-org-zuul
```

### Example Playbook

Save this file as `main.yaml`:

```yaml
---
- name: Set up zuul
  hosts: zuul.example.com
  vars_files:
    - vars.yml
  pre_tasks:
    - name: Create /etc/openstack/
      ansible.builtin.file:
        state: directory
        path: /etc/openstack
        owner: root
        group: root
        mode: 0755
      become: true

    - name: Deploy clouds.yaml file
      ansible.builtin.copy:
        src: clouds.yaml
        dest: /etc/openstack/clouds.yaml
        owner: root
        group: zuul
        mode: '0640'
      become: true

    - name: Create keypair in the cloud
      openstack.cloud.keypair:
        cloud: osism-ci
        name: osism-zuul
        public_key: "{{ lookup('file', 'nodepool.pub') }}"
      become: true

  roles:
    - name: Execute zuul role
      role: zuul
      vars:
        zuul_connections:
          github:
            driver: github
            webhook_token: "{{ webhook_token }}"
            app_id: "{{ github_app_id }}"
            app_key: "/etc/zuul/pem-files/{{ github_pem_name }}.pem"
          opendevorg:
            name: opendev
            driver: git
            baseurl: https://opendev.org
        zuul_tenants:
          - tenant:
              name: my-tenant-name
              source:
                opendevorg:
                  untrusted-projects:
                    - zuul/zuul-jobs:
                        include:
                          - job
                github:
                  config-projects:
                    - my-org/zuul_demo_config:
                        load-branch: main
                  untrusted-projects:
                    - my-org/zuul_demo_repo
      become: true
```

Create an `inventory` file containing the login information for your zuul
server, it might look like:

```
zuul.example.com ansible_host=192.0.2.2 ansible_user=ubuntu
```

Then you can deploy your zuul server by running:

```
ansible-playbook -i inventory main.yaml
```

This will deploy a simple zuul setup with sample example repos being
referenced. You can fork the example repos from the
https://github.com/osism tenant or just use them as a guide for how
to build your own.

For further information about how to tune this setup for
you specific environment, have a look at the sections covering
nodepool and tenant configuration.

## Troubleshooting

### Your git repos are not displayed?

Have you thought of naming your repos with the prefix of your organization? `release` should be `osism/release` for example.

### Your git repos are using the wrong branch?

For `config-projects` you set this value in the tenant-configuration with the `load-branch` stanza.
For `untrusted-projects` you set this value in the config-projects `project` sections AND in EVERY `untrusted-project`.
Each `project` section needs to have the `default-branch` stanza.

### Your logs are not displayed in the web-UI?

Check, if the IP of the logfile server is really correct. In combination with GitHub there is a
bug which keeps the GitHub App posting to the old IP even if the webhook IP was changed. Current
workaround: Delete the old GitHub App and create a new one.

### Hanging jobs in a pipeline?

Sometimes jobs get stuck in a pipeline and are never scheduled. They must then be removed manually
so that they do not block other jobs.

![Hanging jobs in a pipeline](./images/zuul-hanging-jobs-in-a-pipeline.png)

First create a local `.zuul.conf` configuration file in your home directory.

```ini title="$HOME/.zuul.conf"
```
[osism]
url=https://zuul.services.betacloud.xyz/
auth_token=TOKEN
tenant=osism
```

The required auth token can be generated on the Zuul control node with the `zuul-admin` client.

```
docker exec -it zuul_scheduler zuul-admin create-auth-token --user USER --tenant osism --expires-in 3600 --auth-config zuul_operator
```

With the [zuul-client](https://zuul-ci.org/docs/zuul-client/index.html) it is possible to
remove the two hanging jobs from the screenshot.

```
zuul-client --use-config osism dequeue --pipeline periodic-daily --project osism/k8s-capi-images --ref refs/heads/main
zuul-client --use-config osism dequeue --pipeline periodic-daily --project osism/cfg-generics --ref refs/heads/main
```

## Important daily CI jobs

* [osism/container-image-ceph-ansible](https://zuul.services.betacloud.xyz/t/osism/builds?project=osism%2Fcontainer-image-ceph-ansible&pipeline=periodic-daily&skip=0)
* [osism/container-image-kolla-ansible](https://zuul.services.betacloud.xyz/t/osism/builds?project=osism%2Fcontainer-image-kolla-ansible&pipeline=periodic-daily&skip=0)
* [osism/container-image-osism-ansible](https://zuul.services.betacloud.xyz/t/osism/builds?project=osism%2Fcontainer-image-osism-ansible&pipeline=periodic-daily&skip=0)
* [osism/container-images-kolla](https://zuul.services.betacloud.xyz/t/osism/builds?project=osism%2Fcontainer-images-kolla&pipeline=periodic-midnight&skip=0)
* [osism/testbed](https://zuul.services.betacloud.xyz/t/osism/builds?project=osism%2Ftestbed&pipeline=periodic-daily&skip=0)
