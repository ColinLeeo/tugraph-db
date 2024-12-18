"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39261],{29763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(74848),r=a(28453);const i={},s="HTAP",o={id:"introduction/characteristics/htap",title:"HTAP",description:"This document mainly introduces the design philosophy of TuGraph's HTAP.",source:"@site/versions/version-3.6.0/en-US/source/2.introduction/4.characteristics/3.htap.md",sourceDirName:"2.introduction/4.characteristics",slug:"/introduction/characteristics/htap",permalink:"/tugraph-db/en/3.6.0/introduction/characteristics/htap",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi Level Interfaces",permalink:"/tugraph-db/en/3.6.0/introduction/characteristics/multi-level-Interfaces"},next:{title:"Architecture",permalink:"/tugraph-db/en/3.6.0/introduction/architecture"}},h={},c=[{value:"1.Introduction",id:"1introduction",level:2},{value:"2.Design",id:"2design",level:2}];function l(e){const t={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"htap",children:"HTAP"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"This document mainly introduces the design philosophy of TuGraph's HTAP."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"1introduction",children:"1.Introduction"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"htap",src:a(49442).A+"",width:"952",height:"566"})}),"\n",(0,n.jsx)(t.p,{children:"There are different ways to implement HTAP in architecture: one is to use two different copies to handle OLTP and OLAP tasks separately, with the core being data consistency synchronization and additional resource overhead; the other is to use the same data storage at all times, but this implementation has memory bloat in its data structure and needs further work for industrialization. In TuGraph's design, simple OLAP and OLTP operations share the same data, while complex OLAP operations are exported and handled separately as snapshots."}),"\n",(0,n.jsx)(t.h2,{id:"2design",children:"2.Design"}),"\n",(0,n.jsx)(t.p,{children:"In TuGraph, OLTP is the graph transaction engine, corresponding to transaction operations in Figure; OLAP is the graph analysis engine, corresponding to simple graph analysis operations (such as SPSP) and complex graph analysis operations (such as PageRank), the former of which can be executed directly on the graph storage, while the latter requires exporting a snapshot for execution."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Transaction operations, measured by the graph transaction engine, are local graph add, delete, query and modify operations, typically used for K-hop access."}),"\n",(0,n.jsx)(t.li,{children:"Simple analysis operations are the simpler part of the graph analysis engine, usually local graph analysis operations, such as the shortest path algorithm SPSP and Jaccard algorithm."}),"\n",(0,n.jsx)(t.li,{children:"Complex analysis operations are the more complex part of the graph analysis engine, usually involving multi-round data iteration operations across the entire graph, such as the PageRank algorithm for webpage ranking and the Louvain algorithm for community discovery."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As shown in Figure , external storage is added to the architecture diagram, making the data source for graph analysis not limited to the graph database and can be directly read from text files."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Graph storage, which is the storage in the graph database, has carefully designed data structures that can perform real-time add, delete, query and modify operations."}),"\n",(0,n.jsx)(t.li,{children:"External storage, which can be an RDBMS or text file, is stored in a simple way as an edge table, only for one-time batch reading and batch result writing. In the calculation layer, it corresponds to the interface in the overall architecture diagram."}),"\n",(0,n.jsx)(t.li,{children:"Cypher, the declarative graph query language, can be executed concurrently."}),"\n",(0,n.jsx)(t.li,{children:"Procedure API, the procedural graph query language, is flexible and can support both transaction operations and graph analysis operations, but its efficiency is not sufficient to complete complex graph analysis operations, and it can be executed concurrently."}),"\n",(0,n.jsx)(t.li,{children:"OLAP API, for multi-round iteration of complex graph analysis. Applications need to first export the graph data in storage into a snapshot in memory, which is only used for fast access and does not need to consider the write support of ACID, so it can be arranged more compactly, and the read efficiency of CSR arrangement is much higher than that of graph storage data arrangement. OLAP API can only be executed serially, and each operation uses full CPU resources."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"OLAP API snapshots can be created from external storage, where the edge table data is formatted as CSR, or from the graph storage. It should be noted that OLAP API requires that the IDs of the vertices be consecutive natural numbers, which may require additional ID mapping. This step can be mapped to a specified attribute when creating a snapshot or directly using the attribute value as the ID."}),"\n",(0,n.jsx)(t.p,{children:"Corresponding to the calculation interface and storage, there are four operating modes."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Transaction mode, each operation corresponds to a Cypher statement, which is a transaction by default."}),"\n",(0,n.jsx)(t.li,{children:"Plugin mode, call through plugins, after the calculation logic is loaded on the server, also known as stored procedures."}),"\n",(0,n.jsx)(t.li,{children:"Embed mode, which has the same interface as Plugin mode but the graph database service does not need to be started and can directly call the data in the database through the interface. This mode is usually used for debugging Procedure API and OLAP API code, and the debugging information and operation steps are more friendly than Plugin mode."}),"\n",(0,n.jsx)(t.li,{children:"Standalone mode, which maximally separates from the graph database, is more direct when only using the graph analysis engine for data analysis. Standalone mode will directly use the data of the external storage."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The use of the graph neural network engine is similar to the 'complex graph analysis operation', which calls part of the OLAP API and GNN API at the same time, which is not elaborated here."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},49442:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/htap-en-b02eec1489b053469011ccdc046b8780.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);