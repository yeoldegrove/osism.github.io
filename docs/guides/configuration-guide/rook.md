---
sidebar_label: Ceph via Rook (technical preview)
sidebar_position: 31
---

# Ceph via Rook (technical preview)

The official Ceph documentation is located on https://docs.ceph.com/en/latest/rados/configuration/

It is **strongly advised** to use the documentation for the version being used.

* Quincy - https://docs.ceph.com/en/quincy/rados/configuration/
* Reef - https://docs.ceph.com/en/reef/rados/configuration/


## Unique Identifier

The File System ID is a unique identifier for the cluster.
~The identifier is set via the parameter `fsid` in `environments/ceph/configuration.yml`~
~and must be unique. It can be generated with `uuidgen`.~

```yaml title="environments/ceph/configuration.yml"
~fsid: c2120a4a-669c-4769-a32c-b7e9d7b848f4~
```

It is generated automatically by the [Rook Deployment](../deploy-guide/services/rook.md).

TODO: To evaluate if we want and can pass a `fsid`. This is no out-of-the-box Rook feature, though.


## Client

~The `client.admin` keyring is placed in the file `environments/infrastructure/files/ceph/ceph.client.admin.keyring`.~
There is no real Ceph client installed on the manager node, but a wrapper to enter the Rook Toolbox can be installed.

```
osism apply rook-cephclient
```


## Network configuration

Some useful ansible variables for the options from the [Rook Network Configuration Settings](https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/?h=#network-configuration-settings) are available.

### Configuring `addressRanges`

```yaml title="environments/ceph/configuration.yml"
rook_network_public: "192.168.16.0/24"
rook_network_cluster: "192.168.17.0/24"
```

### Configuring encryption, compression, msgr2

```yaml title="environments/ceph/configuration.yml"
rook_network_encryption: true
rook_network_compression: true
rook_network_require_msgr2: false
```


## RGW service

:::info

OpenStack integration between Keystone/Swift and Rook is currently missing upstream in Rook. Please have a look at [#1027](https://github.com/orgs/SovereignCloudStack/projects/18/views/1?layout=board&pane=issue&itemId=63889060) to get the current status of the integration in OSISM.

:::


## Extra pools

Extra pools can be defined via the `rook_cephblockpools` parameter. Be sure to also include the default pools.
They will use the default values from the `rook_cephblockpool_default_*` namespace.

```yaml title="environments/rook/configuration.yml"
rook_cephblockpools:
  # defauklt pools
  - backups
  - volumes
  - images
  - metrics
  - vms
  # extra pools
  - extra1
  - extra2
  - extra3

rook_cephblockpool_default_size: 3
rook_cephblockpool_default_min_size: 0
rook_cephblockpool_default_pg_num: 64
```

If you want complete flexibility, just create [custom CRDs](#custom-crds).


## Storage configuration

In the default setup, no OSD will be deployed (conservative approach). You have to pass a storage configuration via `environments/rook/configuration.yml`.

Some useful ansible variables for the options from the [Rook Storage Selection Settings](https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/#storage-selection-settings) are available.

### Deploy OSDs on all nodes and found devices

```yaml title="environments/rook/configuration.yml"
rook_storage_useallnodes: true
rook_storage_usealldevices: true
```

### Deploy OSDs on specific nodes and devices based on a device filter

```yaml title="environments/rook/configuration.yml"
rook_storage_devicefilter: "^sd[b-c]"
rook_storage_nodes:
 - name: "testbed-node-0"
 - name: "testbed-node-1"
 - name: "testbed-node-2"
```

### Deploy OSDs on specific nodes and devices based on device names

```yaml title="environments/rook/configuration.yml"
rook_storage_nodes:
 - name: "testbed-node-0"
   devices:
     - name: "/dev/ceph-47370c3e-6e02-44de-975b-78a140eeb12b/osd-block-59992a8e-6d8f-4eaf-ad96-1ef9b59aceba"
     - name: "/dev/ceph-47370c3e-6e02-44de-975b-78a140eeb12b/osd-block-863e836c-b6d1-4ce6-8330-066866f5b000"
     - name: "/dev/ceph-bce95a3f-7ac4-4c5d-aba5-e0c2a4da37b7/osd-block-3622b95b-b247-4fc1-8334-e51a38045c60"
     - name: "/dev/ceph-bce95a3f-7ac4-4c5d-aba5-e0c2a4da37b7/osd-block-c9fda146-038c-4b49-9d6b-75935cfa99e2"
 - name: "testbed-node-1"
   devices:
     - name: "/dev/ceph-7c435e32-d97d-4b00-a58f-790a1f6253d4/osd-block-cfdfc2e8-3897-4ad0-8f6b-6d528efc4c53"
     - name: "/dev/ceph-7c435e32-d97d-4b00-a58f-790a1f6253d4/osd-block-e0a9cd56-3735-4550-b40d-8c9f36568d66"
     - name: "/dev/ceph-e37e28c3-9162-4bd9-9880-330f99a2f005/osd-block-07bb3f04-259e-4c3c-a75c-8881476b96b4"
     - name: "/dev/ceph-e37e28c3-9162-4bd9-9880-330f99a2f005/osd-block-d33ffe11-3bdc-43aa-94c7-35ad5d2f8e26"
 - name: "testbed-node-2"
   devices:
     - name: "/dev/ceph-a6d1e63b-51eb-4762-b02c-cd5b2e90a89a/osd-block-800a028c-d9bb-4f2b-96b7-38cdd482d044"
     - name: "/dev/ceph-a6d1e63b-51eb-4762-b02c-cd5b2e90a89a/osd-block-a8e0ad59-0fa5-45e4-a3a5-ae4502a300d1"
     - name: "/dev/ceph-ccd37cbd-5a9e-4ea9-aa9f-4c3db2e88799/osd-block-65f2fd93-4f83-4641-958c-e96e1b7ddc4c"
     - name: "/dev/ceph-ccd37cbd-5a9e-4ea9-aa9f-4c3db2e88799/osd-block-c532ce2b-2a9c-45f0-ad40-545d50ffb333"
```

If you want complete flexibility, just create [custom CRDs](#custom-crds).

### Encrypted OSDs

OSDs are encrypted by default. Rook creates a LUKS on LVM setup for this. Encryption keys are managed by Ceph, as usual.

:::info

Provisioning LUKS on already existing logical volumes is not supported currently by Rook.

:::

Have a look at the [Ceph documentation on LVM encryption](https://docs.ceph.com/en/latest/ceph-volume/lvm/encryption/) and the [Rook OSD Configuration Settings](https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/?h=#osd-configuration-settings) for details.

If you want complete flexibility, just create [custom CRDs](#custom-crds).

## Dashboard

Password for the admin user of the Ceph dashboard is automatically generated by rook and can be retrieved like this:

```
kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o jsonpath="{['data']['password']}" | base64 --decode && echo
```

Have a look at the [Rook Ceph Dashboard Documentation](https://rook.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-dashboard/) for details.

Some useful ansible variables for the options from the [Rook Ceph Dashboard Documentation](https://rook.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-dashboard/) are available.

### enable dashboard and configure ssl and ports

The Ceph dashboard is deployed by default and also an LoadBalancer Service is created in Kubernetes.

```yaml title="environments/ceph/configuration.yml"
rook_dashboard_enabled: true
rook_dashboard_ssl: true
rook_dashboard_port: 7000
rook_dashboard_port_external: 443
```

## Second Ceph cluster

In theory, this is completely customizable by using [custom CRDs](#custom-crds). No evaluation has been done so far, though.

## Custom CRDs

The [OSISM Rook role](https://github.com/osism/ansible-collection-services/tree/main/roles/rook) is an opinionated and sane default configuration. If you reach the limits of what is customizable via ansible variables or have a very custom setup, you can pass any [Rook CRD](https://rook.io/docs/rook/latest-release/CRDs/specification/) to the role and it will be jinja2 templated and roled out to the kubernetes cluster.

Just overwrite `rook_configuration_directory` and place any `*.yml.j2` files that you want to apply there.

```yaml title="environments/ceph/configuration.yml"
rook_template_directory: "{{ configuration_directory }}/environments/rook/files"
```

It can also make sense to also include the default templates and change them (to e.g. use already existing ansible variables) add your custom settings on top.

Get the default templates from the `osism-ansible` container or download them from github.

```
mkdir /opt/configuration/environments/rook/files
cd /opt/configuration/environments/rook/files
for file in 01_CephCluster.yml.j2 02_Toolbox.yml.j2 03_CephBlockPool.yml.j2 04_CephFilesystem.yml.j2 05_CephObjectStore.yml.j2 06_CephClient.yml.j2; do
  curl -O "https://raw.githubusercontent.com/osism/ansible-collection-services/main/roles/rook/templates/${file}"
done
```
