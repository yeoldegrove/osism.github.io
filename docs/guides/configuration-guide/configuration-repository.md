---
sidebar_label: Configuration repository
sidebar_position: 10
---

# Configuration Repository

The entire configuration required for OSISM is stored in a single Git monorepo.

## Configuration repository layout

A configuration repository is always composed of the same basic layout.

* `gilt.yml` & `requirements.txt` files
* `environments` directory
* `inventory` directory
* `netbox` directory (optional)

### `gilt.yml` & `requirements.txt` files

[Gilt](https://gilt.readthedocs.io) is a Git layering tool. We use Gilt to maintain the image versions,
Ansible configuration and scripts within the `environments/manager` directory.

The [current gilt.yml](https://github.com/osism/cfg-generics/blob/main/gilt.yml) file is always
located in the [osism/cfg-generics](https://github.com/osism/cfg-generics) repository.

```yaml title="gilt.yml (date of this example: 2023-10-09)"
---
- git: https://github.com/osism/cfg-generics.git
  version: main
  files:
    - src: src/render-images.py
      dst: ./environments/manager/render-images.py
    - src: gilt.yml
      dst: ./gilt.yml
    - src: requirements.txt
      dst: ./requirements.txt
    - src: environments/manager/images.yml
      dst: environments/manager/images.yml
    - src: environments/manager/run.sh
      dst: environments/manager/run.sh
    - src: environments/manager/ansible.cfg
      dst: environments/manager/ansible.cfg
    - src: environments/manager/requirements.*
      dst: environments/manager/
      post_commands:
        - python3 render-images.py
        - rm render-images.py
```


In the `requirements.txt` the necessary dependencies are listed to be able to execute Gilt.

To use Gilt the dependencies are installed first.

```
pip3 install -r requirements.txt
```

After that you can update the manager environment in `environments/manager`. Since the `gilt.yml`
itself is updated with Gilt it is always important to run the command twice.

```
gilt overlay
gilt overlay
```

If a stable OSISM release is used, the version to be used is specified by `MANAGER_VERSION`.
In the example, OSISM release 6.0.0 is used. More detail about this in
[Configuration Guides > Manager > Stable release](manager#stable-release).

```
MANAGER_VERSION=6.0.0 gilt overlay
MANAGER_VERSION=6.0.0 gilt overlay
```

### `environments` directory

### `inventory` directory

### `netbox` directory

## Creating a new configuration repository

The initial content for this repository is generated using the
[cookiecutter](https://github.com/osism/cfg-cookiecutter).

The content generated by the cookiecutter in the `output/configuration` directory is
committed to a new Git repository. By default, it is assumed that the configuration
repository is stored on GitHub. This can also be GitLab or an internal Git service
as well.

Host and path to the Git repository are specified via the `git_` parameters: The
`git_` parameters do not specify the path to the cookiecutter to use.

```
  [8/20] git_host (github.com):
  [9/20] git_port (22):
  [10/20] git_repository (YOUR_ORG/YOUR_NEW_CONFIGURATION_REPOSITORY): osism/new-environment
  [11/20] git_username (git):
  [12/20] git_version (main):
```

In this case, the generated configuration in the `output/configuration` directory is
stored on GitHub in the `osism/new-environment` repository.

When you want to use a stable release this is done via the parameter `manager_version`
By default, this is always set to `latest`. If, for example, the stable release `6.0.0`
is to be used, the value for this parameter is set to `6.0.0`.

```
manager_version [latest]: 6.0.0
```

If the `manager_version` parameter is set to a stable release then it is no longer necessary
to set the `ceph_version` and `openstack_version` parameters. These are then no longer needed
and are ignored The used versions result from the `manager_version`.

```
$ mkdir output
$ docker run --rm -v $(pwd)/output:/output -it quay.io/osism/cookiecutter
  [1/20] with_ceph (1):
  [2/20] ceph_network_backend (192.168.80.0/20):
  [3/20] ceph_network_frontend (192.168.64.0/20):
  [4/20] ceph_version (quincy):
  [5/20] domain (osism.xyz):
  [6/20] fqdn_external (api.osism.xyz):
  [7/20] fqdn_internal (api-int.osism.xyz):
  [8/20] git_host (github.com):
  [9/20] git_port (22):
  [10/20] git_repository (YOUR_ORG/YOUR_NEW_CONFIGURATION_REPOSITORY):
  [11/20] git_username (git):
  [12/20] git_version (main):
  [13/20] ip_external (192.168.96.9):
  [14/20] ip_internal (192.168.32.9):
  [15/20] manager_version (latest):
  [16/20] name_server (149.112.112.112):
  [17/20] ntp_server (de.pool.ntp.org):
  [18/20] openstack_version (2023.1):
  [19/20] project_name (configuration):
[...]
```

Since we run the cookiecutter inside a container, the user rights are not correct
afterwards and have to be changed with `sudo chown -R $USER: output/`.

The content is now committed to the previously created Git repository.

```
$ git clone git@github.com:YOUR_ORG/YOUR_NEW_CONFIGURATION_REPOSITORY.git YOUR_NEW_CONFIGURATION_REPOSITORY
$ cp -r output/configuration/* output/configuration/.gitignore YOUR_NEW_CONFIGURATION_REPOSITORY
$ cd YOUR_NEW_CONFIGURATION_REPOSITORY
$ git add .gitignore *
$ git commit -m "Initial commit"
$ git push
```

The `secrets` directory is not stored in the Git repository. Its contents can be
stored in a suitable location.

The `secrets` directory contains an SSH key pair which is used as a deploy key to
make the configuration repository available on the manager node later. The public
SSH key is stored in the file `secrets/id_rsa.configuration.pub`.

How to add a deploy key on GitHub is documented in
[Managing deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys).

### Post-processing

The configuration repository that is initially created with the Cookiecutter is not directly usable.
For example, the inventory needs to be built. All further information can be found in the
[Configuration Guides](./).

### Notes

* The password for Ansible Vault encrypted files, ist stored at `secrets/vaultpass`.
* The password of the generated Keepass file is `password`. This has to be changed.

### Parameters

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>ceph_network_backend</code></td>
    <td>Address range for ceph's backend network</td>
    <td><code>192.168.80.0/20</code></td>
  </tr>
  <tr>
    <td><code>ceph_network_frontend</code></td>
    <td>Address range for ceph's frontend network</td>
    <td><code>192.168.64.0/20</code></td>
  </tr>
  <tr>
    <td><code>ceph_version</code></td>
    <td>The version of Ceph. When using a stable OSISM release (<code>manager_version != latest</code>), this value is ignored.</td>
    <td><code>quincy</code></td>
  </tr>
  <tr>
    <td><code>domain</code></td>
    <td>The domain used by hostnames</td>
    <td><code>osism.xyz</code></td>
  </tr>
  <tr>
    <td><code>fqdn_external</code></td>
    <td>External API FQDN</td>
    <td><code>api.osism.xyz</code></td>
  </tr>
  <tr>
    <td><code>fqdn_internal</code></td>
    <td>Internal API FQDN</td>
    <td><code>api-int.osism.xyz</code></td>
  </tr>
  <tr>
    <td><code>git_host</code></td>
    <td>Address of the used Git server</td>
    <td><code>github.com</code></td>
  </tr>
  <tr>
    <td><code>git_port</code></td>
    <td>Port of the used Git server</td>
    <td><code>22</code></td>
  </tr>
  <tr>
    <td><code>git_repository</code></td>
    <td>Path to the git configuration repository</td>
    <td><code>YOUR_ORG/YOUR_NEW_CONFIGURATION_REPOSITORY</code></td>
  </tr>
  <tr>
    <td><code>git_username</code></td>
    <td>Username of the git repository</td>
    <td><code>git</code></td>
  </tr>
  <tr>
    <td><code>git_version</code></td>
    <td>Git branch name</td>
    <td><code>main</code></td>
  </tr>
  <tr>
    <td><code>ip_external</code></td>
    <td>The external IP address of the API</td>
    <td><code>192.168.96.9</code></td>
  </tr>
  <tr>
    <td><code>ip_internal</code></td>
    <td>The internal IP address of the API</td>
    <td><code>192.168.32.9</code></td>
  </tr>
  <tr>
    <td><code>manager_version</code></td>
    <td>The version of OSISM. An overview of available OSISM releases can be found on <a href="https://release.osism.tech">release.osism.tech</a>.</td>
    <td><code>latest</code></td>
  </tr>
  <tr>
    <td><code>name_server</code></td>
    <td>Nameserver. Only one nameserver is set here because the query of multiple values in Cooiecutter is weird. Add more nameservers afterwards.</td>
    <td><code>149.112.112.112</code></td>
  </tr>
  <tr>
    <td><code>ntp_server</code></td>
    <td>NTP server. Only one NTP server is set here because the query of multiple values in Cooiecutter is weird. Add more NTP servers afterwards.</td>
    <td><code>de.pool.ntp.org</code></td>
  </tr>
  <tr>
    <td><code>openstack_version</code></td>
    <td>The version of OpenStack. When using a stable OSISM release (<code>manager_version != latest</code>), this value is ignored.</td>
    <td><code>2023.1</code></td>
  </tr>
  <tr>
    <td><code>project_name</code></td>
    <td>Name of the configuration repository directory</td>
    <td><code>configuration</code></td>
  </tr>
  <tr>
    <td><code>with_ceph</code></td>
    <td>1 to use Ceph, 0 to not use Ceph</td>
    <td><code>1</code></td>
  </tr>
</table>