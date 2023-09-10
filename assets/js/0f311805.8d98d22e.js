"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[2010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Cloud in a Box",sidebar_position:10},r="Cloud in a Box",l={unversionedId:"advanced-guides/cloud-in-a-box",id:"advanced-guides/cloud-in-a-box",title:"Cloud in a Box",description:"\ud83d\udca1 Cloud in a Box is a single node installation of OSISM. Everything you need to work with Kubernetes is included.",source:"@site/docs/advanced-guides/cloud-in-a-box.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/cloud-in-a-box",permalink:"/docs/advanced-guides/cloud-in-a-box",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced-guides/cloud-in-a-box.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Cloud in a Box",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Advanced Guides",permalink:"/docs/advanced-guides/"},next:{title:"Testbed",permalink:"/docs/advanced-guides/testbed"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"VPN access",id:"vpn-access",level:3},{value:"Webinterfaces",id:"webinterfaces",level:2},{value:"Command-line interfaces",id:"command-line-interfaces",level:2},{value:"Import of additional images",id:"import-of-additional-images",level:3},{value:"Upgrade",id:"upgrade",level:2},{value:"Customisations",id:"customisations",level:2},{value:"Use of 2nd NIC for external network",id:"use-of-2nd-nic-for-external-network",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cloud-in-a-box"},"Cloud in a Box"),(0,i.kt)("p",null,"\ud83d\udca1 Cloud in a Box is a single node installation of OSISM. Everything you need to work with Kubernetes is included.\nIt is well suited for development and for use as an edge cloud in special cases."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"In the moment the secrets are stored in plain text in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/osism/cloud-in-a-box"},"osism/cloud-in-a-box"),"\nrepository and are not secure. Do not use for public accessible systems. In the future, the secrets will be generated automatically.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first blockdevice is available as ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/sda")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/nvme0n1"),"."),(0,i.kt)("li",{parentName:"ul"},"USB stick with at least 2 GByte capacity."),(0,i.kt)("li",{parentName:"ul"},"CPU: at least 1 socket with 4 cores"),(0,i.kt)("li",{parentName:"ul"},"RAM: at least 32 GByte"),(0,i.kt)("li",{parentName:"ul"},"Storage: at least 1 TByte"),(0,i.kt)("li",{parentName:"ul"},"Network: 1 network interface (optional: 2nd network interface for external connectivity)")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download one of the Cloud in a Box images."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://swift.services.a.regiocloud.tech/swift/v1/AUTH_b182637428444b9aa302bb8d5a5a418c/osism-node-image/ubuntu-autoinstall-cloud-in-a-box-1.iso"},"ubuntu-autoinstall-cloud-in-a-box-1.iso")," (with ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/sda"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://swift.services.a.regiocloud.tech/swift/v1/AUTH_b182637428444b9aa302bb8d5a5a418c/osism-node-image/ubuntu-autoinstall-cloud-in-a-box-2.iso"},"ubuntu-autoinstall-cloud-in-a-box-2.iso")," (with ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/nvme0n1"),")"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use a tool like ",(0,i.kt)("a",{parentName:"p",href:"https://etcher.balena.io"},"balenaEtcher")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dd")," to create a bootable USB stick with the Cloud\nin a Box image.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Boot from the USB stick. Make sure that the boot from USB is activated in the BIOS."),(0,i.kt)("admonition",{parentName:"li",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"When booting from this USB stick, all data on the hard disks will be destroyed\nwithout confirmation."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The installation of the operating system (Ubuntu 22.04)  will start and take a few minutes. After that the system\nwill shutdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove the USB stick and start the system again. The USB stick is only needed again if the\nCloud in a Box system is to be fully reinstalled.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The deployment will start. This takes some time and the system will shutdown when the\ndeployment is finished. This takes roughly an hour, possibly longer depending on the\nhardware and internet connection.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"System is ready for use, by default DHCP is tried on the first network device.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login via SSH. Use the user ",(0,i.kt)("inlineCode",{parentName:"p"},"dragon")," with the password ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh dragon@IP_FROM_YOUR_SERVER\n")))),(0,i.kt)("h3",{id:"vpn-access"},"VPN access"),(0,i.kt)("p",null,"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/dragon/wireguard-client.conf")," file to your workstation. This is necessary\nfor using the web endpoints on your workstation. Rename the wireguard config file to something\nlike ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-in-a-box.conf"),"."),(0,i.kt)("p",null,"If you want to connect to the Cloud in a Box system from multiple clients, change the client IP\naddress in the config file to be different on each client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scp dragon@IP_FROM_YOUR_SERVER:/home/dragon/wireguard-client.conf /home/ubuntu/cloud-in-a-box.conf\n")),(0,i.kt)("p",null,"Install wireguard on your workstation, if you have not done this before. For instructions how to do\nit on your workstation, please have a look on the documentation of your used distribution. The\nwireguard documentation you will find ",(0,i.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"here"),"."),(0,i.kt)("p",null,"Start the wireguard tunnel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wg-quick up /home/ubuntu/cloud-in-a-box.conf\n")),(0,i.kt)("h2",{id:"webinterfaces"},"Webinterfaces"),(0,i.kt)("p",null,"If you want to access the services please choose the URL from the following list:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Username"),(0,i.kt)("th",{parentName:"tr",align:null},"Password"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ARA"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ara.services.in-a-box.cloud"},"https://ara.services.in-a-box.cloud")),(0,i.kt)("td",{parentName:"tr",align:null},"ara"),(0,i.kt)("td",{parentName:"tr",align:null},"password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flower"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://flower.services.in-a-box.cloud"},"https://flower.services.in-a-box.cloud")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.in-a-box.cloud:3000"},"https://api.in-a-box.cloud:3000")),(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null},"password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Homer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://homer.services.in-a-box.cloud"},"https://homer.services.in-a-box.cloud")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Horizon - admin project"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.in-a-box.cloud"},"https://api.in-a-box.cloud")),(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null},"password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Horizon - test project"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.in-a-box.cloud"},"https://api.in-a-box.cloud")),(0,i.kt)("td",{parentName:"tr",align:null},"test"),(0,i.kt)("td",{parentName:"tr",align:null},"test")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OpenSearch Dashboards"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.in-a-box.cloud:5601"},"https://api.in-a-box.cloud:5601")),(0,i.kt)("td",{parentName:"tr",align:null},"opensearch"),(0,i.kt)("td",{parentName:"tr",align:null},"password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Netbox"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://netbox.services.in-a-box.cloud"},"https://netbox.services.in-a-box.cloud")),(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null},"password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Netdata"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://manager.systems.in-a-box.cloud:19999"},"http://manager.systems.in-a-box.cloud:19999")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"phpMyAdmin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://phpmyadmin.services.in-a-box.cloud"},"https://phpmyadmin.services.in-a-box.cloud")),(0,i.kt)("td",{parentName:"tr",align:null},"root"),(0,i.kt)("td",{parentName:"tr",align:null},"password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RabbitMQ"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.in-a-box.cloud:15672"},"https://api.in-a-box.cloud:15672")),(0,i.kt)("td",{parentName:"tr",align:null},"openstack"),(0,i.kt)("td",{parentName:"tr",align:null},"password")))),(0,i.kt)("h2",{id:"command-line-interfaces"},"Command-line interfaces"),(0,i.kt)("p",null,"Select one of the preconfigured environments ",(0,i.kt)("inlineCode",{parentName:"p"},"system"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),"\nby exporting the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"OS_CLOUD"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export OS_CLOUD=admin\n")),(0,i.kt)("p",null,"The OpenStack CLI is then usable via the command ",(0,i.kt)("inlineCode",{parentName:"p"},"openstack"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openstack server list\n")),(0,i.kt)("h3",{id:"import-of-additional-images"},"Import of additional images"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/osism/openstack-image-manager/"},"OpenStack Image Manager")," is used to manage images.\nIn the example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Garden Linux")," image is imported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export OS_CLOUD=admin\nosism manage images --filter 'Garden Linux'\n")),(0,i.kt)("p",null,"All available images: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/osism/openstack-image-manager/tree/main/etc/images"},"https://github.com/osism/openstack-image-manager/tree/main/etc/images")),(0,i.kt)("h2",{id:"upgrade"},"Upgrade"),(0,i.kt)("p",null,"It is best to execute the commands within a screen session, it takes some time. Please note\nthat you cannot update the Ceph deployment at the moment. This will be enabled in the future."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osism apply configuration\n/opt/configuration/upgrade.sh\ndocker system prune -a\n")),(0,i.kt)("h2",{id:"customisations"},"Customisations"),(0,i.kt)("h3",{id:"use-of-2nd-nic-for-external-network"},"Use of 2nd NIC for external network"),(0,i.kt)("p",null,"In the default configuration, the Cloud in a Box is built in such a way that an internal\nVLAN101 is used as an simulated external network and this is made usable via the 1st network\ninterface using masquerading. This makes it possible for instances running on the Cloud\nin a Box to reach the internet. The disadvantage of this is that the instances themselves\ncan only be reached via floating IP addresses from the Cloud in a Box system itself or\nvia the Wireguard tunnel. Especially in edge environments, however, one would usually like\nto have this differently and the instances should be directly accessible via the local\nnetwork."),(0,i.kt)("p",null,"To make this work, first identify the name of a 2nd network card to be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dragon@manager:~$ sudo lshw -class network -short\nH/W path          Device          Class          Description\n============================================================\n/0/100/2.2/0      eno7            network        Ethernet Connection X552 10 GbE SFP+\n/0/100/2.2/0.1    eno8            network        Ethernet Connection X552 10 GbE SFP+\n/0/100/1c/0       eno1            network        I210 Gigabit Network Connection\n/0/100/1c.1/0     eno2            network        I210 Gigabit Network Connection\n/0/100/1c.4/0     eno3            network        I350 Gigabit Network Connection\n/0/100/1c.4/0.1   eno4            network        I350 Gigabit Network Connection\n/0/100/1c.4/0.2   eno5            network        I350 Gigabit Network Connection\n/0/100/1c.4/0.3   eno6            network        I350 Gigabit Network Connection\n")),(0,i.kt)("p",null,"In the following we use ",(0,i.kt)("inlineCode",{parentName:"p"},"eno7"),". Activate the device manually with  ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo ip link set up dev eno7"),".\nThen check that a link is actually present."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dragon@manager:~$ ethtool eno7\nSettings for eno7:\n    Supported ports: [ FIBRE ]\n    Supported link modes:   10000baseT/Full\n[...]\n    Link detected: yes\n")),(0,i.kt)("p",null,"Now this device is made permanently known in the network configuration. Select the MTU\naccordingly. For 1 GBit rather ",(0,i.kt)("inlineCode",{parentName:"p"},"1500")," than ",(0,i.kt)("inlineCode",{parentName:"p"},"9100"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/opt/configuration/inventory/group_vars/generic/network.yml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/opt/configuration/environments/manager/group_vars/manager.yml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"network_ethernets:\n  eno1:\n    dhcp4: true\n  eno7:\n    mtu: 9100\n")),(0,i.kt)("p",null,"Then, this change is deployed and applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osism apply network\nsudo netplan apply\n")),(0,i.kt)("p",null,"Now the configuration for Neutron and OVN is prepared. ",(0,i.kt)("inlineCode",{parentName:"p"},"network_workload_interface"),"\nis expanded by the 2nd network interface. The order is not random, first ",(0,i.kt)("inlineCode",{parentName:"p"},"vlan101"),"\nthen ",(0,i.kt)("inlineCode",{parentName:"p"},"eno7"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"neutron_bridge_name")," is added."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/opt/configuration/inventory/group_vars/generic/network.yml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/opt/configuration/environments/manager/group_vars/manager.yml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'network_workload_interface: "vlan101,eno7"\nneutron_bridge_name: "br-ex,br-add"\n')),(0,i.kt)("p",null,"Then, this change is deployed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osism reconciler sync\nosism apply openvswitch\nosism apply ovn\nosism apply neutron\n")),(0,i.kt)("p",null,"Now segments and/or subnets can be configured. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"eno7")," is configured as an\nuntagged port on the remote side."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/opt/configuration/environments/openstack/playbook-additional-public-network.yml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Create additional public network\n  hosts: localhost\n  connection: local\n\n  tasks:\n    - name: Create additional public network\n      openstack.cloud.network:\n        cloud: admin\n        state: present\n        name: public-add\n        external: true\n        provider_network_type: flat\n        provider_physical_network: physnet2\n\n    - name: Create additional public subnet\n      openstack.cloud.subnet:\n        cloud: admin\n        state: present\n        name: subnet-public-add\n        network_name: public-add\n        cidr: 192.168.23.0/24\n        enable_dhcp: false\n        allocation_pool_start: 192.168.23.100\n        allocation_pool_end: 192.168.23.200\n        gateway_ip: 192.168.23.1\n        dns_nameservers:\n          - 8.8.8.8\n          - 9.9.9.9\n")),(0,i.kt)("p",null,"The additional public network can now be made known with\n",(0,i.kt)("inlineCode",{parentName:"p"},"osism apply -e openstack additional-public-network"),"."),(0,i.kt)("p",null,"There is now a 2nd floating IP address pool with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"public-add"),"\navailable for use. If instances are to be started directly in this network,\n",(0,i.kt)("inlineCode",{parentName:"p"},"enable_dhcp: true")," must be set. In this case, it should be clarified in\nadvance with the provider of the external network whether the use of DHCP\nis permitted there."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Broken disk setup",src:n(7649).Z,width:"2020",height:"1194"})),(0,i.kt)("p",null,"This error means that your disk setup is broken. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"cfdisk")," and delete all partitions on\nthe system on which you want to install the Cloud in a Box image."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"lsblk")," you can verify if the partitions are empty."))}m.isMDXComponent=!0},7649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot1-c880f78ba33fc0577dce811dc2e42724.png"}}]);