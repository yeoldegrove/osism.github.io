"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[2753],{7952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(5893),i=t(1151);const o={sidebar_label:"Network",sidebar_position:15},r="Network",d={id:"guides/deploy-guide/services/network",title:"Network",description:"1. Open vSwitch (OVS)",source:"@site/docs/guides/deploy-guide/services/network.md",sourceDirName:"guides/deploy-guide/services",slug:"/guides/deploy-guide/services/network",permalink:"/docs/guides/deploy-guide/services/network",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/deploy-guide/services/network.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_label:"Network",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/guides/deploy-guide/services/kubernetes"},next:{title:"Logging & Monitoring",permalink:"/docs/guides/deploy-guide/services/logging-monitoring"}},c={},l=[];function p(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"network",children:"Network"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open vSwitch (OVS)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply -a pull openvswitch\nosism apply openvswitch\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open Virtual Network (OVN)"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"environments/kolla/configuration.yml"})," the parameter ",(0,s.jsx)(n.code,{children:"neutron_plugin_agent"})," is set to\n",(0,s.jsx)(n.code,{children:"ovn"})," if OVN is used as a network plugin. The parameter is set to ",(0,s.jsx)(n.code,{children:"ovn"})," by default in the\nCookiecutter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/kolla/configuration.yml"',children:'# neutron\nneutron_plugin_agent: "ovn"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise the network plugin is set to ",(0,s.jsx)(n.code,{children:"openvswitch"}),".\nIf the ",(0,s.jsx)(n.code,{children:"neutron_plugin_agent"})," is set to ",(0,s.jsx)(n.code,{children:"openvswitch"}),", this step does not need to be done."]}),"\n",(0,s.jsx)(n.p,{children:"Before the deployment of OVN, the deployment of Open vSwitch must already have been done."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply -a pull ovn\nosism apply ovn\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);