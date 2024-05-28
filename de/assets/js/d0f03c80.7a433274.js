"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[366],{2052:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>p});var i=s(5893),r=s(1151);const a={sidebar_label:"OpenStack",sidebar_position:40},o="OpenStack",t={id:"guides/upgrade-guide/openstack",title:"OpenStack",description:"When upgrade the different OpenStack services, all containers must be",source:"@site/docs/guides/upgrade-guide/openstack.md",sourceDirName:"guides/upgrade-guide",slug:"/guides/upgrade-guide/openstack",permalink:"/de/docs/guides/upgrade-guide/openstack",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/upgrade-guide/openstack.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_label:"OpenStack",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Logging & Monitoring",permalink:"/de/docs/guides/upgrade-guide/logging-monitoring"},next:{title:"Configuration Guide",permalink:"/de/docs/guides/configuration-guide/"}},d={},p=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"openstack",children:"OpenStack"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"When upgrade the different OpenStack services, all containers must be\nrestarted. When restarting the API services, there is a short downtime\nof the APIs. This downtime is usually less than 1 minute."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"OpenStack client"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply openstackclient\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Keystone"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull keystone\nosism apply -a upgrade keystone\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Glance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull glance\nosism apply -a upgrade glance\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Designate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull designate\nosism apply -a upgrade designate\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Placement"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull placement\nosism apply -a upgrade placement\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cinder"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull cinder\nosism apply -a upgrade cinder\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Neutron"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull neutron\nosism apply -a upgrade neutron\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Nova"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull nova\nosism apply -a upgrade nova\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Octavia"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull octavia\nosism apply -a upgrade octavia\n"})}),"\n",(0,i.jsx)(n.p,{children:"9.1. Update amphora image"}),"\n",(0,i.jsx)(n.p,{children:"This step is only necessary if the Amphora Driver is used. If OVN is used as the driver,\nthis step is not necessary."}),"\n",(0,i.jsxs)(n.p,{children:["We provide regularly updated images for Octavia in\n",(0,i.jsx)(n.a,{href:"https://github.com/osism/openstack-octavia-amphora-image",children:"osism/openstack-octavia/amphora-image"}),".\nThe OSISM CLI can be used to upload the correct image depending on the OpenStack release\nused."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism manage image octavia\n"})}),"\n",(0,i.jsx)(n.p,{children:"9.2. Amphora rotation"}),"\n",(0,i.jsx)(n.p,{children:"This step is only necessary if the Amphora driver is used. If OVN is used as the driver,\nthis step is not necessary."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Horizon"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull horizon\nosism apply -a upgrade horizon\n"})}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>o});var i=s(7294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);