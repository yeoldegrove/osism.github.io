"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[5093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_label:"Ceph",sidebar_position:20},i="Ceph",p={unversionedId:"guides/deploy-guide/ceph",id:"guides/deploy-guide/ceph",title:"Ceph",description:"RGW service",source:"@site/docs/guides/deploy-guide/ceph.md",sourceDirName:"guides/deploy-guide",slug:"/guides/deploy-guide/ceph",permalink:"/docs/guides/deploy-guide/ceph",draft:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/deploy-guide/ceph.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Ceph",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/docs/guides/deploy-guide/network"},next:{title:"OpenStack",permalink:"/docs/guides/deploy-guide/openstack"}},s={},l=[{value:"RGW service",id:"rgw-service",level:2}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ceph"},"Ceph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"osism apply ceph-mons\nosism apply ceph-mgrs\nosism apply ceph-osds\nosism apply ceph-crash\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"osism apply copy-ceph-keys\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"osism apply cephclient\n")),(0,o.kt)("h2",{id:"rgw-service"},"RGW service"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add following configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/ceph/configuration.yml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'ceph_conf_overrides:\n  "client.rgw.{{ hostvars[inventory_hostname][\'ansible_hostname\'] }}.rgw0":\n    "rgw content length compat": "true"\n    "rgw enable apis": "swift, s3, swift_auth, admin"\n    "rgw keystone accepted roles": "_member_, member, admin"\n    "rgw keystone accepted admin roles": "admin"\n    "rgw keystone admin domain": "default"\n    "rgw keystone admin password": "{{ ceph_rgw_keystone_password }}"\n    "rgw keystone admin project": "service"\n    "rgw keystone admin tenant": "service"\n    "rgw keystone admin user": "ceph_rgw"\n    "rgw keystone api version": "3"\n    "rgw keystone url": "https://api-int.testbed.osism.xyz:5000"\n    "rgw keystone verify ssl": "false"\n    "rgw keystone implicit tenants": "true"\n    "rgw s3 auth use keystone": "true"\n    "rgw swift account in url": "true"\n    "rgw swift versioning enabled": "true"\n    "rgw verify ssl": "true"\n    "rgw enforce swift acls": "true"\n')),(0,o.kt)("p",{parentName:"li"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph_conf_overrides")," parameter already exists in ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/ceph/configuration.yml"),",\nexpand it and do not overwrite it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph_rgw_keystone_password")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/kolla/secrets.yml")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"environments/ceph/secrets.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add following configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/kolla/configuration.yml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"enable_ceph_rgw: true\nenable_swift: false\n\nenable_ceph_rgw_keystone: true\nenable_ceph_rgw_loadbalancer: true\nenable_swift_s3api: true\n\nceph_rgw_swift_compatibility: false\nceph_rgw_swift_account_in_url: true\n\nceph_rgw_hosts:\n  - host: testbed-node-0\n    ip: 192.168.16.10\n    port: 8081\n  - host: testbed-node-1\n    ip: 192.168.16.11\n    port: 8081\n  - host: testbed-node-2\n    ip: 192.168.16.12\n    port: 8081\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply roles ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-rgws")," to deploy the Ceph RGW services and ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-rgw")," to prepare the OpenStack endpoints."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"osism apply ceph-rgws\nosism apply ceph-rgw\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply roles ",(0,o.kt)("inlineCode",{parentName:"p"},"loadbalancer")," (HAProxy endpoints) and ",(0,o.kt)("inlineCode",{parentName:"p"},"horizon"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"osism apply loadbalancer\nosism apply horizon\n")))))}m.isMDXComponent=!0}}]);