---
sidebar_label: Ceph via Rook (technical preview)
sidebar_position: 51
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ceph via Rook (technical preview)

:::warning

This is a technical preview and not recommended for production use yet.

:::

In OSISM it is also possible to integrate and use existing Ceph clusters. It
is not necessary to deploy Ceph with OSISM. If Ceph is deployed with OSISM, it
should be noted that OSISM does not claim to provide all possible features of Ceph.
Ceph provided with OSISM is intended to provide the storage for Glance, Nova, Cinder
and Manila. In a specific way that has been implemented by OSISM for years. It
should be checked in advance whether the way in OSISM the Ceph deployment and the
provided features are sufficient. If this is not the case, it is recommended to
deploy Ceph in a different way directly and independently of OSISM. For possible
open source projects, please refer to
[cephadm](https://docs.ceph.com/en/latest/cephadm/index.html) and
[Rook](https://rook.io).

:::warning

Before starting the Ceph deployment, the configuration and creation of the necessary LVM2
volumes must be completed. The steps that are required for this can be found in the
[Ceph Configuration Guide](../../configuration-guide/ceph#lvm-devices).

:::

1. Deploy services.

When using rook, all services are deployed at the same time by default. This could be altered by passing custom CRDs. See [Rook Configuration Guide](../../configuration-guide/rook).


   * Install [Kubernetes Cluster](../../deploy-guide/kubernetes)

   * Deploy [Rook Operator Helm Chart](https://rook.io/docs/rook/latest/Helm-Charts/operator-chart/)

     ```
     osism apply rook-operator
     ```

   * Deploy complete Rook Ceph Cluster

     ```
     osism apply rook
     ```

   * Copy ceph keyrings to kolla directories (if deploying OpenStack)

     ```
     osism apply rook-fetch-keys
     ```


2. Get ceph keyrings. This places the necessary keys in `/opt/configuration`.

   ```
   osism apply rook-fetch-keys
   ```

   After run, these keys must be permanently added to the configuration repository
   via Git.

   ```
   environments/infrastructure/files/ceph/ceph.client.admin.keyring
   environments/kolla/files/overlays/gnocchi/ceph.client.gnocchi.keyring
   environments/kolla/files/overlays/nova/ceph.client.cinder.keyring
   environments/kolla/files/overlays/nova/ceph.client.nova.keyring
   environments/kolla/files/overlays/cinder/cinder-backup/ceph.client.cinder.keyring
   environments/kolla/files/overlays/cinder/cinder-backup/ceph.client.cinder-backup.keyring
   environments/kolla/files/overlays/cinder/cinder-volume/ceph.client.cinder.keyring
   environments/kolla/files/overlays/manila/ceph.client.manila.keyring
   environments/kolla/files/overlays/glance/ceph.client.glance.keyring
   ```

   You can also overwrite the `rook_cephclients` parameter to skip
   these keys.

   ```yaml title="environments/rook/configuration.yml"
   rook_cephclients: {}
   ```

3. A Ceph client (a wrapper on the manager for entering the rook toolbox) can be deployed.

   ```
   osism apply rook-cephclient
   ```

4. After getting the Ceph Keyrings, the [OpenStack Deployment](../../deploy-guide/services/openstack.md) can optionally be done.

## RGW service

Deployment of the Ceph RGW Service is enabled by default in rook. This is done by creating a default [CephObjectStore CRD](https://rook.io/docs/rook/latest-release/CRDs/Object-Storage/ceph-object-store-crd/). How the Ceph RGW service can be deployed and integrated into OpenStack is described here.

:::info

OpenStack integration between Keystone/Swift and Rook is currently missing upstream in Rook. Please have a look at [#1027](https://github.com/orgs/SovereignCloudStack/projects/18/views/1?layout=board&pane=issue&itemId=63889060) to get the current status of the integration in OSISM.

:::

## Cleanup

:::warning

This will permanently delete all your data in the Ceph Cluster. Be sure you know what you are doing before proceeding.

:::

If you want to cleanup/delete the whole cluster, you can do that by enabling `rook_cleanup`.


   ```yaml title="environments/rook/configuration.yml"
   rook_cleanup: true
   ```

And running the `rook-cleanup` role.

  ```
  osism apply rook-cleanup
  ```
