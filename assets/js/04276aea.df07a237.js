"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[9863],{5879:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(5893),c=a(1151);const o={sidebar_label:"Resource Manager",sidebar_position:52},d="Resource Manager",s={id:"guides/operations-guide/openstack/tools/resource-manager",title:"Resource Manager",description:"Preparations",source:"@site/docs/guides/operations-guide/openstack/tools/resource-manager.md",sourceDirName:"guides/operations-guide/openstack/tools",slug:"/guides/operations-guide/openstack/tools/resource-manager",permalink:"/docs/guides/operations-guide/openstack/tools/resource-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/operations-guide/openstack/tools/resource-manager.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_label:"Resource Manager",sidebar_position:52},sidebar:"tutorialSidebar",previous:{title:"Flavor Manager",permalink:"/docs/guides/operations-guide/openstack/tools/flavor-manager"},next:{title:"Project Manager",permalink:"/docs/guides/operations-guide/openstack/tools/project-manager"}},t={},i=[{value:"Preparations",id:"preparations",level:2},{value:"Nova",id:"nova",level:2},{value:"Live migration",id:"live-migration",level:3},{value:"Evacuation",id:"evacuation",level:3},{value:"Octavia",id:"octavia",level:2},{value:"Amphora rotation",id:"amphora-rotation",level:3},{value:"Cinder",id:"cinder",level:2},{value:"Orphans",id:"orphans",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"resource-manager",children:"Resource Manager"}),"\n",(0,r.jsx)(n.h2,{id:"preparations",children:"Preparations"}),"\n",(0,r.jsx)(n.p,{children:"Prepare use of the OpenStack Resource Manager."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/osism/openstack-resource-manager\ncd openstack-resource-manager\npipenv install\npipenv shell\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Prepare cloud profile ",(0,r.jsx)(n.code,{children:"admin"})," in ",(0,r.jsx)(n.code,{children:"clouds.yml"})," and ",(0,r.jsx)(n.code,{children:"secure.yml"})," (use ",(0,r.jsx)(n.code,{children:"clouds.yml.sample"})," and ",(0,r.jsx)(n.code,{children:"secure.yml.sample"}),"\nin the ",(0,r.jsx)(n.a,{href:"https://github.com/osism/openstack-resource-manager",children:"openstack-resource-manager"})," repository as sample files)."]}),"\n",(0,r.jsx)(n.h2,{id:"nova",children:"Nova"}),"\n",(0,r.jsx)(n.h3,{id:"live-migration",children:"Live migration"}),"\n",(0,r.jsxs)(n.p,{children:["Live migrate all instances from compute node ",(0,r.jsx)(n.code,{children:"SOURCE"})," to compute node ",(0,r.jsx)(n.code,{children:"TARGET"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 src/host-action.py --yes --disable --action live-migrate --host SOURCE --input TARGET\n"})}),"\n",(0,r.jsx)(n.h3,{id:"evacuation",children:"Evacuation"}),"\n",(0,r.jsxs)(n.p,{children:["Evacuate all instances from compute node ",(0,r.jsx)(n.code,{children:"SOURCE"})," to compute node ",(0,r.jsx)(n.code,{children:"TARGET"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 src/host-action.py --yes --action evacutate --host SOURCE --input TARGET\n"})}),"\n",(0,r.jsx)(n.h2,{id:"octavia",children:"Octavia"}),"\n",(0,r.jsx)(n.h3,{id:"amphora-rotation",children:"Amphora rotation"}),"\n",(0,r.jsx)(n.p,{children:"Rotation of amphorae older than 30 days."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ python3 src/amphora.py --rotate\n2023-10-12 21:00:38 | INFO     | Amphora 95a07c43-c0f9-44d2-bde8-a989e52427fa is older than 30 days\n2023-10-12 21:00:38 | INFO     | Amphora 95a07c43-c0f9-44d2-bde8-a989e52427fa of loadbalancer 9008d3d7-f593-4bc3-941c-a740c178148d is rotated by a loadbalancer failover\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cinder",children:"Cinder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ python3 src/volume.py\n2023-12-11 23:09:44 | INFO     | Volume ad848454-ba1f-4c28-b9a8-edada17948b0 hangs in CREATING status for more than 2 hours\nDelete volume ad848454-ba1f-4c28-b9a8-edada17948b0 [yes/no]:\n"})}),"\n",(0,r.jsx)(n.h2,{id:"orphans",children:"Orphans"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ python3 src/orphan.py\n2023-12-11 23:11:16 | INFO     | Checking nova / server\n2023-12-11 23:11:21 | INFO     | Checking neutron / port\n2023-12-11 23:11:23 | INFO     | Checking neutron / router\n2023-12-11 23:11:23 | INFO     | Checking neutron / network\n2023-12-11 23:11:24 | INFO     | Checking neutron / subnet\n2023-12-11 23:11:24 | INFO     | Checking neutron / floatingip\n2023-12-11 23:11:24 | INFO     | Checking neutron / rbacpolicy\n2023-12-11 23:11:24 | INFO     | Checking neutron / securitygroup\n2023-12-11 23:11:26 | INFO     | Checking neutron / securitygrouprule\n2023-12-11 23:11:27 | INFO     | Checking glance / image\n2023-12-11 23:11:30 | INFO     | Checking glance / imagemember\n[...]\n+---------------+-------------------+--------------------------------------+----------------------------------+\n| servicename   | resourcename      | resource_id                          | project_id                       |\n|---------------+-------------------+--------------------------------------+----------------------------------|\n| neutron       | port              | 561f8f76-18b0-470a-92cd-4336346b4b18 | 3cfa8679f5d8429382b95d4d2dd80f79 |\n| neutron       | port              | 6d1986e4-1e6d-4d4a-961d-97d372945bb1 | 3cfa8679f5d8429382b95d4d2dd80f79 |\n| neutron       | port              | 74f9bddc-9bfa-4d06-a147-ca87127e501e | 8268b05ef24b41d8806c0fe417576610 |\n| neutron       | port              | f630a66b-7725-4a68-868b-caebbaf1c003 | 8268b05ef24b41d8806c0fe417576610 |\n| neutron       | router            | c0c4e4aa-53ee-4fd1-8f53-84d52cf6c60b | 3cfa8679f5d8429382b95d4d2dd80f79 |\n| neutron       | router            | c8f9a13b-adcd-4a8e-942b-338bcf4dde7c | 8268b05ef24b41d8806c0fe417576610 |\n| neutron       | network           | 62d6ad2a-0cda-4d45-9325-963b8eb67000 | 8268b05ef24b41d8806c0fe417576610 |\n| neutron       | network           | 63b8fea6-7d7b-40c3-9c31-bee4404a92d6 | 3cfa8679f5d8429382b95d4d2dd80f79 |\n| neutron       | subnet            | 0cd16262-330a-44ad-9160-daef84aded2d | 3cfa8679f5d8429382b95d4d2dd80f79 |\n| neutron       | subnet            | 690dee14-ac12-464d-a911-a873c27ec818 | d33b0d15fd474131a335207216297a2a |\n| neutron       | subnet            | 854e7c55-62e2-4679-9b18-805460b998ce | 8268b05ef24b41d8806c0fe417576610 |\n| neutron       | rbacpolicy        | 00d7c2a2-6674-4f40-9f95-176a7858fcca | c8e4393b6d064a26a31014f82939172f |\n| neutron       | rbacpolicy        | 0608c701-5b81-4712-989b-ba03cdcc255d | c8e4393b6d064a26a31014f82939172f |\n[...]\n| neutron       | securitygrouprule | fd3c553f-168e-4c24-ab40-09aa934bab86 | 3a96207b719643ae9ea9a81d95116e9e |\n| neutron       | securitygrouprule | fdf337be-971c-4d5d-88ca-d90cdb468e88 | 3cfa8679f5d8429382b95d4d2dd80f79 |\n| neutron       | securitygrouprule | ff8162fe-f053-49c9-8659-078061ce3e23 | d0b0add9ede0452791f71cb900e35242 |\n| glance        | imagemember       | c7f2cb0c25d34c5d886ecaf483e5fda6     | c7f2cb0c25d34c5d886ecaf483e5fda6 |\n| glance        | imagemember       | d4d0a161f9024fc8b517b0375eb97c89     | d4d0a161f9024fc8b517b0375eb97c89 |\n| glance        | imagemember       | 150688b82efa44a5ac452d2b937f16e5     | 150688b82efa44a5ac452d2b937f16e5 |\n| glance        | imagemember       | 150688b82efa44a5ac452d2b937f16e5     | 150688b82efa44a5ac452d2b937f16e5 |\n| glance        | imagemember       | d33b0d15fd474131a335207216297a2a     | d33b0d15fd474131a335207216297a2a |\n| cinder        | volume            | e7c4b05c-b76a-40cc-8381-03262e57eb94 | 9b5f7f8ed70d410c81e3f45bf4e36498 |\n+---------------+-------------------+--------------------------------------+----------------------------------+\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>d});var r=a(7294);const c={},o=r.createContext(c);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);