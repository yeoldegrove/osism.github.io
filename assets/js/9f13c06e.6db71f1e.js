"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[2606],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3278:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_label:"Infrastructure",sidebar_position:30},i="Infrastructure",u={unversionedId:"guides/upgrade-guides/infrastructure",id:"guides/upgrade-guides/infrastructure",title:"Infrastructure",description:"Cron, Fluentd & Kolla Toolbox",source:"@site/docs/guides/upgrade-guides/infrastructure.md",sourceDirName:"guides/upgrade-guides",slug:"/guides/upgrade-guides/infrastructure",permalink:"/docs/guides/upgrade-guides/infrastructure",draft:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/upgrade-guides/infrastructure.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_label:"Infrastructure",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/guides/upgrade-guides/docker"},next:{title:"Logging & Monitoring",permalink:"/docs/guides/upgrade-guides/logging-monitoring"}},l={},s=[{value:"Cron, Fluentd &amp; Kolla Toolbox",id:"cron-fluentd--kolla-toolbox",level:2}],c={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"infrastructure"},"Infrastructure"),(0,o.kt)("h2",{id:"cron-fluentd--kolla-toolbox"},"Cron, Fluentd & Kolla Toolbox"),(0,o.kt)("p",null,"The common role of Kolla is used to manage the services ",(0,o.kt)("inlineCode",{parentName:"p"},"cron"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fluentd"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"kolla-toolbox"),"."),(0,o.kt)("p",null,"It is important to do this upgrade before any other upgrades in the Kolla\nenvironment, as parts of the other upgrades depend on the ",(0,o.kt)("inlineCode",{parentName:"p"},"kolla-toolbox"),"\nservice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"osism apply -a pull common\nosism apply -a upgrade common\n")))}d.isMDXComponent=!0}}]);