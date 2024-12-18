"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7151],{98527:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=t(74848),i=t(28453);const s={},r="What is a graph database",o={id:"introduction/what-is-gdbms",title:"What is a graph database",description:"This document mainly introduce what is a graph database, the advantages of graph database compared with relational database, and the comparison between graph database and relational database",source:"@site/versions/version-4.3.1/en-US/source/2.introduction/2.what-is-gdbms.md",sourceDirName:"2.introduction",slug:"/introduction/what-is-gdbms",permalink:"/tugraph-db/en/4.3.1/introduction/what-is-gdbms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is Graph",permalink:"/tugraph-db/en/4.3.1/introduction/what-is-graph"},next:{title:"What is TuGraph",permalink:"/tugraph-db/en/4.3.1/introduction/what-is-tugraph"}},d={},h=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Advantages of graph databases over relational databases",id:"2-advantages-of-graph-databases-over-relational-databases",level:2},{value:"2.1 Performance",id:"21-performance",level:3},{value:"2.2 Compatibility",id:"22-compatibility",level:3},{value:"2.3 Intuitive",id:"23-intuitive",level:3},{value:"3. Comparison between graph database and relational database",id:"3-comparison-between-graph-database-and-relational-database",level:2}];function l(a){const e={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"what-is-a-graph-database",children:"What is a graph database"})}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"This document mainly introduce what is a graph database, the advantages of graph database compared with relational database, and the comparison between graph database and relational database"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,n.jsx)(e.p,{children:"Graph database is a database based on graph model. The main function of graph database is to manage graph data, so it needs to support efficient vertex/edge query and update; To facilitate user use, it is usually necessary to add transaction support to ensure the normal operation of concurrent operations."}),"\n",(0,n.jsx)(e.h2,{id:"2-advantages-of-graph-databases-over-relational-databases",children:"2. Advantages of graph databases over relational databases"}),"\n",(0,n.jsx)(e.p,{children:"The function of graph database is an extension of traditional relational database. Compared with relational database, the graph structure supported by graph data is more flexible. Graph database is different from other databases in terms of data addition, deletion, query and modification based on graph. On the operation abstraction of graph data, a vertex-based perspective is adopted, for example, a vertex accesses its neighboring vertices through all its outgoing edges. This kind of operation is also the core of the design of graph database system."}),"\n",(0,n.jsx)(e.p,{children:"The uniqueness of graph database can be reflected in the following three aspects:"}),"\n",(0,n.jsx)(e.h3,{id:"21-performance",children:"2.1 Performance"}),"\n",(0,n.jsx)(e.p,{children:"Handling the relationship between data, it is inevitable to use table JOIN operation in relational database, which has a great impact on performance. Graph database is a direct access, similar to pointer access, which is more efficient operation of associated data, compared with relational database performance improvement of 2 to 4 orders of magnitude."}),"\n",(0,n.jsx)(e.h3,{id:"22-compatibility",children:"2.2 Compatibility"}),"\n",(0,n.jsx)(e.p,{children:"In reality, the process of a project is often evolutionary. The content and even the format of the data are constantly changing. In a relational database, this means that a change in the table structure, or the creation of multiple new tables, significantly changes the source data. In the graph database, you simply add new vertices, edges, and attributes, and set them to the corresponding types. In essence, a table represents a type of data, and a vertex represents a specific data, meaning that relational databases pay more attention to the type of data, while graph databases pay more attention to the individuals of data and identify their association relationships."}),"\n",(0,n.jsx)(e.h3,{id:"23-intuitive",children:"2.3 Intuitive"}),"\n",(0,n.jsx)(e.p,{children:"Using graphs (or nets) to express real-world relationships is more straightforward and natural, especially in the Internet of Things era. If relational data used, a high degree of abstract thinking required to build a table of characters first, then a table of relations, and finally a map of data. When analyzing and querying the graph data, you can also intuitively find the desired data interactively through the point-edge connection topology, without any professional knowledge."}),"\n",(0,n.jsx)(e.h2,{id:"3-comparison-between-graph-database-and-relational-database",children:"3. Comparison between graph database and relational database"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"classification"}),(0,n.jsx)(e.th,{children:"model"}),(0,n.jsx)(e.th,{children:"advantage"}),(0,n.jsx)(e.th,{children:"disadvantage"}),(0,n.jsx)(e.th,{children:"example"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Relational database"}),(0,n.jsx)(e.td,{children:"Table structure"}),(0,n.jsx)(e.td,{children:"Data is highly structured, consistent, and software maturity is high"}),(0,n.jsx)(e.td,{children:"The multi-hop association query is inefficient or not supported"}),(0,n.jsx)(e.td,{children:"MySQL\u3001Oracle"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Graph database"}),(0,n.jsx)(e.td,{children:"graph structure"}),(0,n.jsx)(e.td,{children:"Modeling and manipulating associations is very efficient"}),(0,n.jsx)(e.td,{children:"Highly structured data processing is not as powerful as relational databases"}),(0,n.jsx)(e.td,{children:"Neo4j\u3001TuGraph"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"In a word, in the face of massive data storage and processing problems, the traditional relational database has been unable to meet most of the daily data storage needs. Graph database technology can store relational information as entities and expand data model flexibly. Because it provides the most direct expression of related data, and the graph model is naturally tolerant to heterogeneous data. In the future, graph database technology will become one of the most popular technologies, which will provide powerful support for enterprises to store and analyze large-scale graph data."})]})}function c(a={}){const{wrapper:e}={...(0,i.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(l,{...a})}):l(a)}},28453:(a,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function r(a){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function o(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:r(a.components),n.createElement(s.Provider,{value:e},a.children)}}}]);