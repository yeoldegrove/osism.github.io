"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[2614],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Flavor Manager",sidebar_position:51},i="Flavor Manager",l={unversionedId:"guides/operations-guide/openstack/flavor-manager",id:"guides/operations-guide/openstack/flavor-manager",title:"Flavor Manager",description:"Overview",source:"@site/docs/guides/operations-guide/openstack/flavor-manager.md",sourceDirName:"guides/operations-guide/openstack",slug:"/guides/operations-guide/openstack/flavor-manager",permalink:"/docs/guides/operations-guide/openstack/flavor-manager",draft:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/operations-guide/openstack/flavor-manager.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_label:"Flavor Manager",sidebar_position:51},sidebar:"tutorialSidebar",previous:{title:"Image Manager",permalink:"/docs/guides/operations-guide/openstack/image-manager"},next:{title:"Resource Manager",permalink:"/docs/guides/operations-guide/openstack/resource-manager"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Flavor definitions",id:"flavor-definitions",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flavor-manager"},"Flavor Manager"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The openstack-flavour-manager operates as a facilitator that orchestrates VM compute flavors in alignment\nwith the SCS OpenStack cloud standard, utilizing standardized YAML files supplied by SCS.\nThis service oversees the creation, modification, and removal of flavors within the\nOpenStack environment."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"OpenStack flavor and compute service"),(0,r.kt)("p",null,'The "flavor" and "compute" services in OpenStack are integrated components of the Nova service.\nInstalling the Nova service is a prerequisite for utilizing the flavor management functionality.'),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"First, you need to install the openstack-flavor-manager. You can either use pip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install openstack-flavor-manager\n")),(0,r.kt)("p",null,"Or you can clone the repository from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/osism/openstack-flavor-manager"},"https://github.com/osism/openstack-flavor-manager")," and run the installation\nfrom the source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tox -- --help\n")),(0,r.kt)("p",null,"Please note: If you opt for the tox installation, ensure you add both the clouds.yaml and secure.yml\nfiles to the root directory of the cloned repository."),(0,r.kt)("p",null,"After installation, you maybe have to also reload your shell."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Usage: python -m openstack_flavor_manager.main ","[OPTIONS]"),(0,r.kt)("p",null,"--name               TEXT  Name of flavor definitions. ","[default: scs]"," \\\n--debug                    Enable debug logging.\\\n--cloud              TEXT  Cloud name in clouds.yaml. ","[default: admin]","\\\n--recommended              Create recommended flavors.\\\n--help                     Show this message and exit."),(0,r.kt)("p",null,"For example, if you want to deploy the recommended SCS flavors, you can simply run:"),(0,r.kt)("p",null,"Only install mandatory flavors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~$ openstack-flavor-manager\n")),(0,r.kt)("p",null,"Also install SCS-recommended flavors if required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~$ openstack-flavor-manager --recommended\n")),(0,r.kt)("p",null,"the Output should look like this on success:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2023-09-20 13:03:14 | INFO     | Flavor 'SCS-1V-4' created.\n2023-09-20 13:03:14 | INFO     | Flavor 'SCS-2V-8' created.\n2023-09-20 13:03:14 | INFO     | Flavor 'SCS-4V-16' created.\n2023-09-20 13:03:14 | INFO     | Flavor 'SCS-8V-32' created.\n...\n")),(0,r.kt)("p",null,"All recommended flavors should now be available in your OpenStack cloud environment.\nCheck yourself by running: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack flavor list\n")),(0,r.kt)("p",null,'The --cloud parameter is optional. If you have multiple clouds configured in your clouds.yaml,\nyou can specify the cloud to connect to using this parameter.\nBy default, the "admin" cloud is used if no other is specified.'),(0,r.kt)("p",null,"The clouds.yaml file is a configuration file that contains credentials and endpoint information for connecting\nto OpenStack clouds. The openstack.connect(cloud=cloud) function reads this file to establish a connection to the\nspecified OpenStack cloud environment."),(0,r.kt)("h2",{id:"flavor-definitions"},"Flavor definitions"),(0,r.kt)("p",null,'There are two different configuration available by default.\nOne for "scs" and one for "osism." Each has its own "Mandatory" and "Recommended" flavor set.\nIf you run the program with a specific configuration (either "scs" or "osism"), using the --name parameter,\nthe list of flavors to install changes.'),(0,r.kt)("p",null,"Also have a look on how to flavor yaml files are structured to get a better understanding\non how flavor definitions are made up:"),(0,r.kt)("p",null,'SCS:"',(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/SovereignCloudStack/standards/main/Tests/iaas/SCS-Spec.MandatoryFlavors.verbose.yaml%22"},'https://raw.githubusercontent.com/SovereignCloudStack/standards/main/Tests/iaas/SCS-Spec.MandatoryFlavors.verbose.yaml"'),'\nOSISM: "',(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/osism/openstack-flavor-manager/main/flavors.yaml%22"},'https://raw.githubusercontent.com/osism/openstack-flavor-manager/main/flavors.yaml"')))}d.isMDXComponent=!0}}]);