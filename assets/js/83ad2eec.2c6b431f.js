"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,k=m["".concat(d,".").concat(p)]||m[p]||l[p]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[m]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Docker",sidebar_position:20},i="Docker",u={unversionedId:"guides/upgrade-guides/docker",id:"guides/upgrade-guides/docker",title:"Docker",description:"The Docker version used is defined via the parameter docker_version in the file",source:"@site/docs/guides/upgrade-guides/docker.md",sourceDirName:"guides/upgrade-guides",slug:"/guides/upgrade-guides/docker",permalink:"/docs/guides/upgrade-guides/docker",draft:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/upgrade-guides/docker.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Docker",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Manager",permalink:"/docs/guides/upgrade-guides/manager"},next:{title:"Configuration Guides",permalink:"/docs/guides/configuration-guides/"}},d={},c=[{value:"Restart behaviour",id:"restart-behaviour",level:2}],s={toc:c},m="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker"},"Docker"),(0,r.kt)("p",null,"The Docker version used is defined via the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_version")," in the file\n",(0,r.kt)("inlineCode",{parentName:"p"},"environments/configuration.yml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"docker_version: '5:20.10.24'\n")),(0,r.kt)("p",null,"All installable versions can be displayed with ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-cache madison docker-ce"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ apt-cache madison docker-ce\n docker-ce | 5:24.0.6-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:24.0.5-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:24.0.4-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:24.0.3-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:24.0.2-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:24.0.1-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:24.0.0-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:23.0.6-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:23.0.5-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:23.0.4-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:23.0.3-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:23.0.2-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:23.0.1-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:23.0.0-1~ubuntu.22.04~jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.24~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.23~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.22~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.21~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.20~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.19~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.18~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.17~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.16~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.15~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.14~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n docker-ce | 5:20.10.13~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n")),(0,r.kt)("p",null,"If, for example, you want to change the Docker version from ",(0,r.kt)("inlineCode",{parentName:"p"},"20.10.24")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"24.0.6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_version")," in\n",(0,r.kt)("inlineCode",{parentName:"p"},"environments/configuration.yml")," is changed accordingly. The ",(0,r.kt)("inlineCode",{parentName:"p"},"5:")," prefix is placed in front of the version."),(0,r.kt)("p",null,"The upgrade of Docker is then done with the OSISM CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"osism apply docker\n")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"serial")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," so that the the hosts are upgrade one after the other.\nTo adjust this, either use the ",(0,r.kt)("inlineCode",{parentName:"p"},"osism_serial")," dictionary in the ",(0,r.kt)("inlineCode",{parentName:"p"},"environments/configuration.yml")," file\nto change the value in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," or append ",(0,r.kt)("inlineCode",{parentName:"p"},"-e serial=10%")," to upgrade, for example, 10%\nwith each iteration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"osism_serial:\n  docker: 10%\n")),(0,r.kt)("h2",{id:"restart-behaviour"},"Restart behaviour"),(0,r.kt)("p",null,"When upgrading, the Docker service is restarted. As a result, it can come to a restart of the\nrunning containers. This can lead to interruptions in individual services. A change in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," due to a new configuration parameter etc. can also result in a\nrequired restart."),(0,r.kt)("p",null,"Whether the containers are restarted when the Docker Service is restarted depends on whether the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/live-restore/"},"Live Restore feature")," is used.\nThis can be configured via the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_live_restore"),". Live restore is enabled by default."),(0,r.kt)("p",null,"But even if the Live Restore feature is enabled, certain upgrades will cause running containers\nto be restarted:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Live restore allows you to keep containers running across Docker daemon updates, but is only\nsupported when installing patch releases (",(0,r.kt)("inlineCode",{parentName:"p"},"YY.MM.x"),"), not for major (",(0,r.kt)("inlineCode",{parentName:"p"},"YY.MM"),") daemon upgrades.")),(0,r.kt)("p",null,"There are two ways to prevent a restart of the Docker service during an upgrade."),(0,r.kt)("p",null,"If the restart behaviour of the Docker service is changed, always make sure to restart the\nDocker service manually afterwards (e.g. by a system reboot)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A host group can be defined via the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_ignore_restart_groupname"),". The\nrestart of the Docker service is not triggered for all hosts in this group. By default,\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker_ignore_restart_groupname")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"manager"),". The parameter is best set in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"environments/configuration.yml")," file when making an adjustment. For example, to prevent\nthe restart on all hosts, ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_ignore_restart_groupname")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"generic"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"docker_ignore_restart_groupname: generic\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_allow_restart"),", the restart of the Docker service can be\nprevented. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_allow_restart")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". It is recommended to set\nthis parameter only at runtime. Otherwise, the best place for the parameter is the\n",(0,r.kt)("inlineCode",{parentName:"p"},"environments/configuration.yml")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"osism apply docker -e docker_allow_restart=false\n")))))}l.isMDXComponent=!0}}]);