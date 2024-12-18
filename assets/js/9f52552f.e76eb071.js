"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[76005],{620:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=i(74848),t=i(28453);const r={},s="Python Olap API",c={id:"developer-manual/interface/olap/python-api",title:"Python Olap API",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd OlapBase OlapOnDB \u548c OlapOnDisk \u5728Python\u4e2d\u7684API\u7528\u6cd5",source:"@site/versions/version-3.6.0/zh-CN/source/5.developer-manual/6.interface/2.olap/5.python-api.md",sourceDirName:"5.developer-manual/6.interface/2.olap",slug:"/developer-manual/interface/olap/python-api",permalink:"/tugraph-db/zh/3.6.0/developer-manual/interface/olap/python-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OlapOnDisk API",permalink:"/tugraph-db/zh/3.6.0/developer-manual/interface/olap/olap-on-disk-api"},next:{title:"\u5185\u7f6e\u7b97\u6cd5",permalink:"/tugraph-db/zh/3.6.0/developer-manual/interface/olap/algorithms"}},o={},d=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. \u914d\u7f6e\u8981\u6c42",id:"2-\u914d\u7f6e\u8981\u6c42",level:2},{value:"3. Cython",id:"3-cython",level:2},{value:"4. Olap API",id:"4-olap-api",level:2},{value:"\u539f\u5b50\u64cd\u4f5c",id:"\u539f\u5b50\u64cd\u4f5c",level:3},{value:"\u70b9\u96c6\u5408\u7c7bParallelBitset",id:"\u70b9\u96c6\u5408\u7c7bparallelbitset",level:3},{value:"\u70b9\u6570\u7ec4\u7c7bParallelVector",id:"\u70b9\u6570\u7ec4\u7c7bparallelvector",level:3},{value:"\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784",id:"\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784",level:3},{value:"\u56fe\u7c7bOlapBase",id:"\u56fe\u7c7bolapbase",level:3},{value:"\u56fe\u7c7bOlapOnDB:",id:"\u56fe\u7c7bolapondb",level:3},{value:"\u56fe\u7c7bOlapOnDisk",id:"\u56fe\u7c7bolapondisk",level:3},{value:"ConfigBase\uff1a",id:"configbase",level:4},{value:"5. lgraph_db API",id:"5-lgraph_db-api",level:2},{value:"VertexIndexIterator",id:"vertexindexiterator",level:3},{value:"Galaxy",id:"galaxy",level:3},{value:"GraphDB\uff1a",id:"graphdb",level:3},{value:"Transaction\uff1a",id:"transaction",level:3},{value:"PyGalaxy:",id:"pygalaxy",level:3},{value:"PyGraphDB:",id:"pygraphdb",level:3},{value:"6. \u7b97\u6cd5\u63d2\u4ef6\u793a\u4f8b",id:"6-\u7b97\u6cd5\u63d2\u4ef6\u793a\u4f8b",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"python-olap-api",children:"Python Olap API"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd OlapBase OlapOnDB \u548c OlapOnDisk \u5728Python\u4e2d\u7684API\u7528\u6cd5"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"1-\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u624b\u518c\u5c06\u4ecb\u7ecd\u4f7f\u7528TuGraph\u56fe\u8ba1\u7b97\u7cfb\u7edfPython\u63a5\u53e3\u9700\u8981\u7684\u7b80\u5355\u914d\u7f6e\uff0c\u540c\u65f6\u7ed3\u5408\u4ee3\u7801\u5bf9TuGraph Python API\u8fdb\u884c\u89e3\u91ca\u3002\u5173\u4e8eParallelBitset\u3001OlapBase\u5404\u7c7b\u7684\u4f5c\u7528\uff0c\u8be6\u89c1olap-base-api.md\uff0colap-on-db-api.md\u548colap-on-disk-api.md"}),"\n",(0,l.jsx)(n.h2,{id:"2-\u914d\u7f6e\u8981\u6c42",children:"2. \u914d\u7f6e\u8981\u6c42"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u8981\u4f7f\u7528TuGraph\u56fe\u8ba1\u7b97\u7f16\u5199\u4ee5\u53ca\u7f16\u8bd1\u81ea\u5df1\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u9700\u8981\u7684\u914d\u7f6e\u8981\u6c42\u4e3a\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"linux\u64cd\u4f5c\u7cfb\u7edf\uff0c\u76ee\u524d\u5728Ubuntu16.04, Ubuntu18.04, Ubuntu20.04\u548cCentos7, Centos8\u7cfb\u7edf\u4e0a\u53ef\u6210\u529f\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301C++17\u7684\u7f16\u8bd1\u5668\uff0c\u8981\u6c42GCC\u7248\u672c\u4e3a8.4.0\u6216\u66f4\u65b0\u7684\u7248\u672c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"Cython\uff0c\u7248\u672c\u8981\u6c423.0.0\u4ee5\u4e0a\uff0c\u5df2\u6d4b\u8bd5\u53ef\u8fd0\u884c\u7248\u672c\u4e3a3.0.0a11"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"3-cython",children:"3. Cython"}),"\n",(0,l.jsx)(n.p,{children:"Cython\u662f\u4e00\u79cd\u9ad8\u6548\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u662fPython\u7684\u8d85\u96c6\u3002Cython\u80fd\u5c06py\u6587\u4ef6\u7ffb\u8bd1\u4e3aC/C++\u4ee3\u7801\u540e\u7f16\u8bd1\u4e3aPython\u62d3\u5c55\u7c7b\uff0c\u5728Python\u4e2d\u901a\u8fc7import\u8c03\u7528\u3002\u5728TuGraph\u4e2d\uff0c\u6240\u6709\u7684Python plugin\u90fd\u7531Cython\u7f16\u8bd1\u4e3aPython\u62d3\u5c55\u7c7b\u540e\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Cython\u7684Pure Python\u6a21\u5f0f\u5728\u4fdd\u8bc1Python\u8bed\u6cd5\u7684\u540c\u65f6\u5177\u6709C/C++\u7684\u6027\u80fd\uff0cTuGraph Python\u63a5\u53e3\u5747\u4f7f\u7528Cython\u5b9e\u73b0\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://cython.readthedocs.io/en/latest/index.html",children:"Cython \u6587\u6863"})}),"\n",(0,l.jsx)(n.h2,{id:"4-olap-api",children:"4. Olap API"}),"\n",(0,l.jsxs)(n.p,{children:["\u89c1plugins/cython/olap_base.pxd\u6587\u4ef6\uff0c\u7528\u6cd5\u4e0e\u529f\u80fd\u57fa\u672c\u4e0eC++\u63a5\u53e3\u76f8\u540c\uff0colap_base.pxd\u4e2d\u58f0\u660e\u7684\u63a5\u53e3\u90fd\u7531C++\u5b9e\u73b0\uff0c\u5728py\u6587\u4ef6\u4e2d\u5fc5\u987b\u901a\u8fc7",(0,l.jsx)(n.code,{children:"from cython.cimports.olap_base import *"}),"\u7684\u65b9\u5f0f\u5bfc\u5165\uff0c\u7531Cython\u7f16\u8bd1py\u6587\u4ef6\u540e\u624d\u80fd\u8fd0\u884c\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u539f\u5b50\u64cd\u4f5c",children:"\u539f\u5b50\u64cd\u4f5c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cas[T](ptr: cython.pointer(T), oldv: T, newv: T)-> cython.bint"}),"\uff1a\u5982\u679cptr\u6307\u5411\u7684\u503c\u7b49\u4e8eoldv\uff0c\u5219\u5c06ptr\u6307\u5411\u7684\u503c\u8d4b\u4e3anewv\u5e76\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"write_min[T](a: cython.pointer(T), b: T)-> cython.bint"}),"\uff1a\u5982\u679cb\u6bd4a\u6307\u5411\u7684\u503c\u66f4\u5c0f\uff0c\u90a3\u4e48\u5c06a\u6307\u5411\u7684\u503c\u8d4b\u4e3ab\u5e76\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"write_max[T](a: cython.pointer(T), b: T)-> cython.bint"}),"\uff1a\u5982\u679cb\u6bd4a\u6307\u5411\u7684\u503c\u66f4\u5927\uff0c\u90a3\u4e48\u5c06a\u6307\u5411\u7684\u503c\u8d4b\u4e3ab\u5e76\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"write_add[T](a: cython.pointer(T), b: T)-> cython.bint"}),"\uff1a\u5c06b\u7684\u503c\u52a0\u5230a\u6307\u5411\u7684\u503c\u4e0a\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"write_sub[T](a: cython.pointer(T), b: T)-> cython.bint"}),"\uff1a\u5c06a\u6307\u5411\u7684\u503c\u51cf\u53bbb\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u70b9\u96c6\u5408\u7c7bparallelbitset",children:"\u70b9\u96c6\u5408\u7c7bParallelBitset"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Size()-> size_t"}),"\uff1a\u8868\u793aBitmap\u4e2d\u7684\u70b9\u4e2a\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ParallelBitset(size: size_t)"}),"\uff1a\u521d\u59cb\u5316size\u548cdata\uff0cdata\u957f\u5ea6\u4e3a(size >> 6)+1"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Clear()-> cython.void"}),"\uff1a\u6e05\u7a7a\u96c6\u5408"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Fill()-> cython.void"}),"\uff1a\u5c06\u6240\u6709\u70b9\u52a0\u5165\u96c6\u5408"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Has(size_t i)-> cython.bint"}),"\uff1a\u68c0\u67e5\u70b9i\u662f\u5426\u5728\u96c6\u5408\u4e2d"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Add(size_t i)-> cython.bint"}),"\uff1a\u5c06\u70b9i\u52a0\u5165\u96c6\u5408\u4e2d"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Swap(ParallelBitset &other)-> cython.void"}),"\uff1a\u548c\u53e6\u4e00\u7ec4ParallelBitset\u96c6\u5408\u4ea4\u6362\u5143\u7d20"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u70b9\u6570\u7ec4\u7c7bparallelvector",children:"\u70b9\u6570\u7ec4\u7c7bParallelVector"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ParallelVector[T](size_t capacity)"})," \u6784\u5efaParallelVector\uff0ccapacity\u4e3a\u70b9\u6570\u7ec4\u7684\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"operator[](i: size_t)-> T"}),"\uff1a\u4e0b\u6807\u4e3ai\u7684\u6570\u636e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"begin()-> cython.pointer(T)"}),"\uff1aParallelVector\u7684\u8d77\u59cb\u6307\u9488"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"end()-> cython.pointer(T)"}),"\uff1aParallelVector\u7684\u7ed3\u675f\u6307\u9488\u3002begin\u548cend\u7684\u7528\u6cd5\u7c7b\u4f3c\u4e8evector\u5bb9\u5668\u7684begin\u548cend\u6307\u9488\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e24\u4e2a\u6307\u9488\u5bf9\u6570\u7ec4\u8fdb\u884c\u987a\u5e8f\u8bbf\u95ee"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Back()-> T"}),"\uff1aParallelVector\u6700\u540e\u4e00\u4e2a\u6570\u636e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Data()-> cython.pointer(T)"}),"\uff1a\u8868\u793a\u6570\u7ec4\u672c\u8eab\u6570\u636e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Destroy()-> cython.void"}),"\uff1a\u6e05\u7a7aParallelVector\u6570\u7ec4\u5185\u6570\u636e\u5e76\u5220\u9664\u6570\u7ec4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Size()-> size_t"}),"\uff1a\u8868\u793aParallelVector\u4e2d\u7684\u6570\u636e\u4e2a\u6570"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Resize(size: size_t)-> cython.void"}),"\uff1a\u66f4\u6539ParallelVector\u4e3asize\u5927\u5c0f\uff0c\u8be5size\u5e94\u5927\u4e8e\u7b49\u4e8e\u66f4\u6539\u524d\u7684\u5927\u5c0f\u4e14\u5c0f\u4e8ecapacity"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Clear()-> cython.void"}),"\uff1a\u6e05\u7a7aParallelVector\u5185\u6570\u636e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ReAlloc(capacity: size_t)-> cython.void"}),"\uff1a\u7ed9ParallelVector\u5206\u914d\u65b0\u7684\u5bb9\u91cf\u5927\u5c0f\uff0c\u82e5\u6570\u7ec4\u6709\u6570\u636e\u5219\u5c06\u6570\u636e\u8fc1\u79fb\u81f3\u65b0\u5185\u5b58"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Fill(elem: T)-> cython.void"}),"\uff1a\u4e3aParallelVector\u7684\u5168\u90e8\u6570\u636e\u8d4b\u503c\u4e3aelem"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Append(elem: T, atomic: cython.bint = true)-> cython.void"}),"\uff1a\u5411ParallelVector\u7ed3\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u6570\u636e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Swap(other: ParallelVector[T])-> cython.void"}),"\uff1a\u548c\u5176\u4ed6\u7684ParallelVector\u4ea4\u6362\u6570\u636e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Copy()-> ParallelVector[T]"}),"\uff1a\u590d\u5236\u5f53\u524d\u7684ParallelVector\u6570\u636e\u5b58\u81f3Copy\u6570\u7ec4\u4e2d"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784",children:"\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Empty"}),"\uff1a\u5185\u5bb9\u4e3a\u7a7a\u7684\u7279\u6b8a\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"EdgeUnit[EdgeData]"}),"\uff1a\u8868\u793a\u6743\u503c\u7c7b\u578b\u4e3aEdgeData\u7684\u8fb9\uff0c\u7528\u4e8e\u89e3\u6790\u8f93\u5165\u6587\u4ef6\uff0c\u5305\u542b\u4e09\u4e2a\u6210\u5458\u53d8\u91cf\uff1a\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"src: size_t"}),"\uff1a\u8fb9\u7684\u8d77\u59cb\u70b9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dst: size_t"}),"\uff1a\u8fb9\u7684\u7ec8\u70b9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"edge_data: EdgeData"}),"\uff1a\u8fb9\u7684\u6743\u503c"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"AdjUnit[EdgeData]"}),"\uff1a\u8868\u793a\u6743\u503c\u7c7b\u578b\u4e3aEdgeData\u7684\u8fb9\uff0c\u7528\u4e8e\u6279\u5904\u7406\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\uff0c\u5305\u542b\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\uff1a\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"neighbour: size_t"}),"\uff1a\u8fb9\u7684\u90bb\u5c45\u70b9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"edge_data: EdgeData"}),"\uff1a\u8fb9\u7684\u6743\u503c"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"AdjList[EdgeData]"}),"\uff1a\u6743\u503c\u7c7b\u578b\u4e3aEdgeData\u7684\u70b9\u7684\u90bb\u63a5\u8868\uff0c\u5e38\u7528\u4e8e\u8868\u793a\u70b9\u7684\u5165\u8fb9\u548c\u51fa\u8fb9\u96c6\u5408\uff0c\u5305\u542b\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\uff1a\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"begin()-> cython.pointer(AdjUnit[T])"}),"\uff1a\u5217\u8868\u7684\u8d77\u59cb\u6307\u9488"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"end()-> cython.pointer(AdjUnit[T])"}),"\uff1a\u5217\u8868\u7684\u7ed3\u675f\u6307\u9488\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"operator[](i: size_t)-> AdjUnit[EdgeData]"}),": \u4e0b\u6807\u4e3ai\u7684\u6570\u636e"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u56fe\u7c7bolapbase",children:"\u56fe\u7c7bOlapBase"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NumVertices()-> size_t"}),"\uff1a\u83b7\u53d6\u70b9\u6570"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NumEdges()-> size_t"}),"\uff1a\u83b7\u53d6\u8fb9\u6570"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"OutDegree(size_t vid)-> size_t"}),"\uff1a\u70b9vid\u7684\u51fa\u5ea6"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"InDegree(size_t vid)-> size_t"}),"\uff1a\u70b9vid\u7684\u5165\u5ea6"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AllocVertexArray[VertexData]() ->ParallelVector[VertexData]"}),"\uff1a\u5206\u914d\u4e00\u4e2a\u7c7b\u578b\u4e3aVertexData\u7684\u6570\u7ec4\uff0c\u5927\u5c0f\u4e3a\u70b9\u4e2a\u6570"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AllocVertexSubset()-> ParallelBitset"}),"\uff1a\u5206\u914d\u4e00\u4e2aParallelBitset\u96c6\u5408\uff0c\u7528\u4e8e\u8868\u793a\u6240\u6709\u70b9\u7684\u72b6\u6001\u662f\u5426\u6fc0\u6d3b"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"OutEdges(vid: size_t)-> AdjList[EdgeData]"}),"\uff1a\u83b7\u53d6\u70b9v\u7684\u6240\u6709\u51fa\u8fb9\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"InEdges(vid: size_t)-> AdjList[EdgeData]"}),"\uff1a\u83b7\u53d6\u70b9v\u7684\u6240\u6709\u5165\u8fb9\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Transpose()-> cython.void"}),"\uff1a\u5bf9\u6709\u5411\u56fe\u8fdb\u884c\u56fe\u53cd\u8f6c"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"LoadFromArray(edge_array: cython.p_char, input_vertices: size_t, input_edges: size_t, edge_direction_policy: EdgeDirectionPolicy)"}),"\uff1a\u4ece\u6570\u7ec4\u4e2d\u52a0\u8f7d\u56fe\u6570\u636e\uff0c\u5305\u542b\u56db\u4e2a\u53c2\u6570\uff0c\u5176\u542b\u4e49\u5206\u522b\u8868\u793a\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"edge_array"}),"\uff1a\u5c06\u8be5\u6570\u7ec4\u4e2d\u7684\u6570\u636e\u8bfb\u5165\u56fe\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u8be5\u6570\u7ec4\u5305\u542b\u591a\u6761\u8fb9\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"input_vertices"}),"\uff1a\u6307\u5b9a\u6570\u7ec4\u8bfb\u5165\u56fe\u7684\u70b9\u4e2a\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"input_edges"}),"\uff1a\u6307\u5b9a\u6570\u7ec4\u8bfb\u5165\u56fe\u7684\u8fb9\u7684\u6761\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"edge_direction_policy"}),"\uff1a\u6307\u5b9a\u56fe\u4e3a\u6709\u5411\u6216\u65e0\u5411\uff0c\u5305\u542b\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3aDUAL_DIRECTION\u3001MAKE_SYMMETRIC\u4ee5\u53caINPUT_SYMMETRIC\u3002\u5bf9\u5e94\u7684\u8be6\u7ec6\u4ecb\u7ecd\u89c1include/lgraph/olap_base.h\u6587\u4ef6\u7684",(0,l.jsx)(n.code,{children:"enum EdgeDirectionPolicy"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AcquireVertexLock(vid: size_t)-> cython.void"}),"\uff1a\u5bf9\u70b9vid\u52a0\u9501\uff0c\u7981\u6b62\u5176\u5b83\u7ebf\u7a0b\u5bf9\u8be5\u9501\u5bf9\u5e94\u7684\u70b9\u6570\u636e\u8fdb\u884c\u8bbf\u5b58"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"void ReleaseVertexLock(vid: size_t)-> cython.void"}),"\uff1a\u5bf9\u70b9vid\u89e3\u9501\uff0c\u6240\u6709\u7ebf\u7a0b\u5747\u53ef\u8bbf\u5b58\u8be5\u9501\u5bf9\u5e94\u7684\u70b9\u6570\u636e"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"TuGraph\u63d0\u4f9b\u4e86\u4e24\u4e2a\u6279\u5904\u7406\u64cd\u4f5c\u6765\u5e76\u884c\u5730\u8fdb\u884c\u4ee5\u70b9\u4e3a\u4e2d\u5fc3\u7684\u6279\u5904\u7406\u8fc7\u7a0b\uff0c\u5728Python\u4e2d\u4e0eC++\u4f7f\u7528\u65b9\u6cd5\u7a0d\u6709\u4e0d\u540c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'# \u51fd\u6570\u540d\u79f0:ProcessVertexInRange[ReducedSum, Algorithm](\n#           work: (algo: Algorithm, vi: size_t)-> ReducedSum,\n#           lower: size_t, upper: size_t,\n#           algo: Algorithm,\n#           zero: ReducedSum = 0,\n#           reduce: (a: ReducedSum, b: ReducedSum)-> ReducedSum = reduce_plus[ReducedSum])\n#\n#     \u51fd\u6570\u7528\u9014:\u5bf9Graph\u4e2d\u8282\u70b9\u7f16\u53f7\u4ecb\u4e8elower\u548cupper\u4e4b\u95f4\u7684\u8282\u70b9\u6267\u884cwork\u51fd\u6570\u3002\u7b2c\u56db\u4e2a\u53c2\u6570\u8868\u793a\u7d2f\u52a0\u7684\u57fa\u6570\uff0c\u9ed8\u8ba4\u4e3a0\uff1b\n#     \u7b2c\u4e94\u4e2a\u53c2\u6570\u8868\u793a\u5bf9\u6bcf\u4e2awork\u5904\u7406\u540e\u7684\u8282\u70b9\u8fd4\u56de\u503c\u8fdb\u884c\u8fed\u4ee3reduce\u51fd\u6570\u64cd\u4f5c\uff0c\u9ed8\u8ba4\u4e3a\u7d2f\u52a0\u64cd\u4f5c\u3002\n#     \u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003include/lgraph/olap_base.h\u4e2d\u5177\u4f53\u4ee3\u7801\n#\n#     \u4f7f\u7528\u793a\u4f8b:\u7edf\u8ba1\u6570\u7ec4parent\u6570\u7ec4\u4e2d\u6709\u51fa\u8fb9\u7684\u70b9\u4e2a\u6570\n\nimport cython\nfrom cython.cimports.olap_base import *\n\n\n@cython.cclass\nclass CountCore:\n    graph: cython. pointer(OlapBase[Empty])\n    parent: ParallelVector[size_t]\n\n    @cython.cfunc\n    @cython.nogil\n    def Work(self, vi: size_t) -> size_t:\n        if self.graph.OutDegree(self.parent[vi]) > 0:\n            return 1\n        return 0\n\n    def run(self, pointer_g: cython. pointer(OlapBase[Empty])):\n        self.graph = pointer_g\n        self.parent = self.graph.AllocVertexArray[size_t]()\n        vertex_num: size_t\n        vertex_num = self.graph.ProcessVertexInRange[size_t, CountCore](self.Work, 0, self.parent.Size(), self)\n        print("the number is", vertex_num)\n\nif __name__ == "__main__":\n    count_core = CountCore()\n    count_core.run(cython.address(g))\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4e2dg\u4e3a\u56fe\u7c7bOlapBase\u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'# \u51fd\u6570\u540d\u79f0:ProcessVertexActive[ReducedSum, Algorithm](\n#           work: (algo: Algorithm, vi: size_t)-> ReducedSum,\n#           active: ParallelBitset,\n#           algo: Algorithm,\n#           zero: ReducedSum = 0,\n#           reduce: (a: ReducedSum, b: ReducedSum)-> ReducedSum = reduce_plus[ReducedSum])\n#\n#   \u51fd\u6570\u7528\u9014:\u5bf9active_vertices\u4e2d\u5bf9\u5e94\u4e3a1\u7684\u8282\u70b9\u6267\u884cwork\u51fd\u6570\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u8868\u793a\u7d2f\u52a0\u7684\u57fa\u6570\uff0c\u9ed8\u8ba4\u4e3a0\uff1b\n#   \u7b2c\u56db\u4e2a\u53c2\u6570\u8868\u793a\u5bf9\u6bcf\u4e2awork\u5904\u7406\u540e\u7684\u8282\u70b9\u8fd4\u56de\u503c\u8fdb\u884c\u8fed\u4ee3reduce\u51fd\u6570\u64cd\u4f5c\uff0c\u9ed8\u8ba4\u4e3a\u7d2f\u52a0\u64cd\u4f5c\u3002\n#   \u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003/include/lgraph/olap_base.h\u4e2d\u5177\u4f53\u4ee3\u7801\n#\n# \u4f7f\u7528\u793a\u4f8b:\u8f93\u51faGraph\u4e2d\u8282\u70b91\uff0c2\uff0c3\u7684\u6240\u6709\u51fa\u5ea6\u90bb\u5c45\uff0c\u5e76\u7edf\u8ba1\u8fd9\u4e09\u4e2a\u8282\u70b9\u7684\u603b\u51fa\u5ea6\n\nimport cython\nfrom cython.cimports.olap_base import *\nfrom cython.cimports.libc.stdio import printf\n\n\n@cython.cclass\nclass NeighborCore:\n    graph: cython.pointer(OlapBase[Empty])\n    active_in: ParallelBitset\n\n    @cython.cfunc\n    @cython.nogil\n    def Work(self, vi: size_t) -> size_t:\n        degree = self.graph.OutDegree(vi)\n        dst: size_t\n        edges = self.graph.OutEdges(vi)\n        local_out_degree: size_t\n        for i in range(degree):\n            dst = edges[i].neighbour\n            printf("node %lu has neighbour %lu\\n", vi, dst)\n            local_out_degree += 1\n        return local_out_degree\n\n    def run(self, pointer_g: cython.pointer(OlapBase[Empty])):\n        self.graph = pointer_g\n        self.active_in = self.graph.AllocVertexSubset()\n        self. active_in. Add(1)\n        self. active_in. Add(2)\n        self. active_in. Add(3)\n        total_outdegree = cython.declare(\n            size_t,\n            self.graph.ProcessVertexActive[size_t, CountCore](self.Work, self.active_in, self))\n        printf("total outdegree of node1,2,3 is %lu\\n",total_outdegree)\n\nif __name__ == "__main__":\n    neighbor_core = NeighborCore()\n    neighbor_core.run(cython.address(g))\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u4e0a\u9762\u4e24\u4e2a\u4f8b\u5b50\u6240\u5c55\u793a\uff0c\u5728Python\u4e2dProcessVertexActive\u4e0eProcessVertexInRange\u6bd4\u5728C++\u4e2d\u989d\u5916\u9700\u8981\u4e00\u4e2a\u7b97\u6cd5\u7c7b\u6307\u9488\u53c2\u6570\uff0cWork\u51fd\u6570\u4e00\u822c\u4e5f\u4f5c\u4e3a\u8be5\u7b97\u6cd5\u7c7b\u7684\u6210\u5458\u51fd\u6570\uff0c\u6ee1\u8db3Work\u51fd\u6570\u8bbf\u95ee\u6210\u5458\u53d8\u91cf\u7684\u9700\u6c42\uff08\u5982\u56fegraph\uff0c\u70b9\u6570\u7ec4parent\uff09\uff0c\u5728\u8c03\u7528\u6279\u5904\u7406\u51fd\u6570\u65f6\u5c06Work\u51fd\u6570\u548c\u7b97\u6cd5\u7c7b\u7684self\u6307\u9488\u4f20\u5165\u6279\u5904\u7406\u51fd\u6570\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4e2dWork\u51fd\u6570\u4f1a\u5728\u591a\u7ebf\u7a0b\u4e2d\u8c03\u7528\uff0c\u56e0\u6b64\u52a0\u4e0a\u4fee\u9970\u5668",(0,l.jsx)(n.code,{children:"@cython.nogil"}),"\u91ca\u653ePython\u5168\u5c40\u89e3\u91ca\u9501\uff0c\u5728\u591a\u7ebf\u7a0b\u6267\u884c\u7684\u4ee3\u7801\u4e2d\uff08\u4f8b\u5982\u6279\u5904\u7406\u51fd\u6570\u4e2d\u7684Work\u51fd\u6570\uff0c",(0,l.jsx)(n.code,{children:"cython.parallel.prange"}),"\u4e2d\uff09\uff0c\u4e0d\u80fd\u5305\u542bPython\u5bf9\u8c61\uff0c\u6700\u597d\u901a\u8fc7",(0,l.jsx)(n.code,{children:"dst: type"}),"\u6216\u8005",(0,l.jsx)(n.code,{children:"dst = cython.declare(type)"}),"\u7684\u65b9\u5f0f\u58f0\u660e\u53d8\u91cf\u4e3aC/C++\u7c7b\u578b\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u56fe\u7c7bolapondb",children:"\u56fe\u7c7bOlapOnDB:"}),"\n",(0,l.jsx)(n.p,{children:"\u5e76\u884c\u5316\u521b\u5efa\u6709\u5411\u56fe\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"olapondb = OlapOnDB[Empty](db, txn, SNAPSHOT_PARALLEL)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5e76\u884c\u5316\u521b\u5efa\u65e0\u5411\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"olapondb = OlapOnDB[Empty](db, txn, SNAPSHOT_PARALLEL | SNAPSHOT_UNDIRECTED)\n"})}),"\n",(0,l.jsx)(n.p,{children:"ID_MAPPING\u521b\u5efa\u6709\u5411\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"olapondb = OlapOnDB[Empty](db, txn, SNAPSHOT_PARALLEL | SNAPSHOT_IDMAPPING)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u56fe\u7c7bolapondisk",children:"\u56fe\u7c7bOlapOnDisk"}),"\n",(0,l.jsx)(n.h4,{id:"configbase",children:"ConfigBase\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ConfigBase()"}),": \u6784\u9020\u51fd\u6570"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"std::string input_dir"}),": \u56fe\u8fb9\u8868\u6570\u636e\u8def\u5f84"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"std::string output_dir"}),": \u8f93\u51fa\u7ed3\u679c\u8def\u5f84"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Load(config: ConfigBase[EdgeData], edge_direction_policy: EdgeDirectionPolicy)-> void"}),": \u8bfb\u5165\u56fe\u6570\u636e"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"5-lgraph_db-api",children:"5. lgraph_db API"}),"\n",(0,l.jsx)(n.p,{children:"\u89c1plugins/cython/lgraph_db.pxd\u4e0elgraph_db_python.py\u6587\u4ef6\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["lgraph_db.pxd\u4e2d\u63a5\u53e3\u7528\u6cd5\u4e0e\u529f\u80fd\u57fa\u672c\u4e0eC++\u63a5\u53e3\u76f8\u540c\uff0clgraph_db.pxd\u4e2d\u58f0\u660e\u7684\u63a5\u53e3\u90fd\u7531C++\u5b9e\u73b0\uff0c\u5728py\u6587\u4ef6\u4e2d\u5fc5\u987b\u901a\u8fc7",(0,l.jsx)(n.code,{children:"from cython.cimports.olap_base import *"}),"\u7684\u65b9\u5f0f\u5bfc\u5165\uff0c\u7531Cython\u7f16\u8bd1py\u6587\u4ef6\u540e\u624d\u80fd\u8fd0\u884c\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"vertexindexiterator",children:"VertexIndexIterator"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"GetVid()-> int64_t"}),": \u83b7\u53d6\u70b9\u7684vid"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"galaxy",children:"Galaxy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Galaxy(dir_path: std::string)"}),": \u6784\u9020\u51fd\u6570\uff0cdir_path\u4e3adb\u8def\u5f84"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SetCurrentUser(user: std::string, password: std::string)-> cython.void"}),": \u8bbe\u7f6e\u7528\u6237"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SetUser(user: std::string)-> cython.void"}),": \u8bbe\u7f6e\u7528\u6237"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"OpenGraph(graph: std::string, read_only: bint)-> GraphDB"}),": \u521b\u5efaGraphDB"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"graphdb",children:"GraphDB\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CreateReadTxn()-> Transaction"}),": \u521b\u5efa\u53ea\u8bfb\u4e8b\u52a1"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CreateWriteTxn()-> Transaction"}),": \u521b\u5efa\u5199\u4e8b\u52a1"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ForkTxn(txn: Transaction)-> Transaction"}),": \u590d\u5236\u4e8b\u52a1\uff0c\u53ea\u80fd\u590d\u5236\u8bfb\u4e8b\u52a1"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"transaction",children:"Transaction\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"GetVertexIndexIterator(\n                label: std::string,\n                field: std::string,\n                key_start: std::string,\n                key_end: std::string)-> VertexIndexIterator\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u83b7\u53d6\u7d22\u5f15\u8fed\u4ee3\u5668\u3002\u8fed\u4ee3\u5668\u7684field\u503c\u4e3a [key_start, key_end]\u3002\u6240\u4ee5\u5728key_start=key_end=v\u65f6\uff0c\u8fd4\u56de\u6307\u5411field\u503c\u4e3av\u7684\u70b9\u7684\u8fed\u4ee3\u5668"}),"\n",(0,l.jsxs)(n.p,{children:["lgraph_db_python.py\u662flgraph_db.pxd\u4e2dC++\u7c7b Galaxy\u4e0eGraphDB\u7684\u5305\u88c5\uff0c\u5c06C++\u7c7b\u5305\u88c5\u4e3aPython\u7c7b\uff0c\u5c06lgraph_db_python.py\u7f16\u8bd1\u4e3aPython\u62d3\u5c55\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728Python\u6587\u4ef6\u6216Python\u547d\u4ee4\u884c\u4e2d",(0,l.jsx)(n.code,{children:"import lgraph_db_python"}),"\u8bbf\u95eelgraph_db_python.PyGraphDB\u4e0ePyGraphDB.PyGalaxy\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"pygalaxy",children:"PyGalaxy:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"PyGalaxy(self, dir_path: str)"}),": \u6784\u9020\u51fd\u6570\uff0cdir_path\u4e3adb\u8def\u5f84"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SetCurrentUser(self, user: str password: str)-> void"}),": \u8bbe\u7f6e\u7528\u6237"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SetUser(self, user: std::string)-> void"}),": \u8bbe\u7f6e\u7528\u6237"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"OpenGraph(self, graph: str, read_only: bool)-> PyGraphDB"}),": \u521b\u5efaPyGraphDB"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"pygraphdb",children:"PyGraphDB:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"get_pointer(self)-> cython.Py_ssize_t"}),": C++ \u7c7bGraphDB\u7684\u5730\u5740"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"6-\u7b97\u6cd5\u63d2\u4ef6\u793a\u4f8b",children:"6. \u7b97\u6cd5\u63d2\u4ef6\u793a\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0b\u9762\u4e3aPython\u5b9e\u73b0\u7684BFS\u7b97\u6cd5\u7684\u4ee3\u7801\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'# cython: language_level=3, cpp_locals=True, boundscheck=False, wraparound=False, initializedcheck=False\n# distutils: language = c++\n\n# \u6ce8\u91ca\u4f5c\u7528\u5982\u4e0b\uff1a\n# language_level=3: \u4f7f\u7528Python3\n# cpp_locals=True: \u9700\u8981c++17\uff0c\u4f7f\u7528std::optional\u7ba1\u7406Python\u4ee3\u7801\u4e2d\u7684C++\u5bf9\u8c61\uff0c\u53ef\u4ee5\u907f\u514dC++\u5bf9\u8c61\u7684\u62f7\u8d1d\u6784\u9020\n# boundscheck=False: \u5173\u95ed\u7d22\u5f15\u7684\u8fb9\u754c\u68c0\u67e5\n# wraparound=False: \u5173\u95ed\u8d1f\u6570\u4e0b\u6807\u7684\u5904\u7406\uff08\u7c7b\u4f3cPython List\uff09\n# initializedcheck=False: \u5173\u95ed\u68c0\u67e5\u5185\u5b58\u662f\u5426\u521d\u59cb\u5316\uff0c\u5173\u95ed\u68c0\u67e5\u540e\u8fd0\u884c\u6027\u80fd\u66f4\u5feb\n# language = c++: \u5c06\u6b64py\u6587\u4ef6\u7ffb\u8bd1\u4e3aC++\u800c\u4e0d\u662fC\u6587\u4ef6\uff0cTuGraph\u4f7f\u7528\u5927\u91cf\u6a21\u677f\u51fd\u6570\uff0c\u6240\u4ee5\u90fd\u5e94\u8be5\u4f7f\u7528C++\n\nimport json\n\nimport cython\nfrom cython.cimports.olap_base import *\nfrom cython.cimports.lgraph_db import *\n# \u4eceplugins/cython/ \u4e2dcimportolap_base.pxd\u4e0elgraph_db.pxd, \u7c7b\u4f3cC++\u4e2d#include "xxx.h"\n\nfrom cython.cimports.libc.stdio import printf\n# \u7c7b\u4f3cC++\u4e2d#include <stdio.h>\n# \u5176\u4ed6\u5e38\u89c1\u7684\u8fd8\u6709cython.cimports.libcpp.unordered_map\u7b49\n\nimport time\nimport lgraph_db_python\n\n\n@cython.cclass\n# cython.cclass \u8868\u793aBFSCore\u4e3aC\u7c7b\u578b\u7684Class\nclass BFSCore:\n    graph: cython.pointer(OlapBase[Empty])\n    # cython.pointer(OlapBase[Empty])\u8868\u793aOlapBase[Empty]\u7684\u6307\u9488\uff0c\u7c7b\u4f3cC++\u4e2dOlapBase[Empty]*\n    # cython\u63d0\u4f9b\u4e86\u5e38\u89c1\u7c7b\u578b\u7684\u6307\u9488\uff0c\u5982cython.p_int, cython.p_char\u7b49\uff0c\u8868\u793aint*, char*, ...\n    parent: ParallelVector[size_t]\n    active_in: ParallelBitset\n    active_out: ParallelBitset\n    root: size_t\n    # root: size_t \u58f0\u660eroot\u4e3aC++ size_t\u7c7b\u578b\u53d8\u91cf\uff0c\u7b49\u6548\u4e8eroot = cython.declare(size_t)\n    # \u4e0d\u58f0\u660e\u7c7b\u578b\u7684\u53d8\u91cf\u4e3aPython object\u7c7b\u578b\n    # \u58f0\u660e\u53d8\u91cf\u7c7b\u578b\u4f1a\u5927\u5e45\u63d0\u9ad8\u6027\u80fd\uff0c\u540c\u65f6\u5728\u591a\u7ebf\u7a0b\u90e8\u5206\uff0c\u53ea\u6709C/C++\u7c7b\u578b\u7684\u53d8\u91cf\u53ef\u4ee5\u8bbf\u95ee\n\n    @cython.cfunc\n    # cython.cfunc \u8868\u793aWork\u4e3aC\u7c7b\u578b\u7684\u51fd\u6570\uff0c\u53c2\u6570\u4e0e\u8fd4\u56de\u503c\u5e94\u58f0\u660e\n    # cfunc\u6027\u80fd\u597d\uff0c\u80fd\u63a5\u53d7C/C++\u5bf9\u8c61\u4e3a\u53c2\u6570\u3001\u8fd4\u56de\u503c\uff0c\u4f46\u662f\u4e0d\u80fd\u5728\u5176\u4ed6python\u6587\u4ef6\u4e2d\u8c03\u7528\n    # \u7c7b\u4f3c\u7684\u6709cython.ccall\uff0c\u5982Standalone\u51fd\u6570\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6python\u6587\u4ef6\u4e2d\u8c03\u7528\n    @cython.nogil\n    # cython.nogil \u8868\u793a\u91ca\u653ePython\u5168\u5c40\u89e3\u91ca\u9501\uff0c\u5728nogil\u4fee\u9970\u7684\u90e8\u5206\uff0c\u4e0d\u80fd\u8bbf\u95eePython\u5bf9\u8c61\n    # \u5728\u591a\u7ebf\u7a0b\u90e8\u5206\uff0c\u90fd\u5e94\u6709nogil\u4fee\u9970\u5668\n    @cython.exceptval(check=False)\n    # cython.exceptval(check=False) \u8868\u793a\u7981\u7528\u5f02\u5e38\u4f20\u64ad\uff0c\u5c06\u5ffd\u7565\u51fd\u6570\u5185\u90e8\u5f15\u53d1\u7684Python\u5f02\u5e38\n    def Work(self, vi: size_t) -> size_t:\n        degree = cython.declare(size_t, self.graph.OutDegree(vi))\n        out_edges = cython.declare(AdjList[Empty], self.graph.OutEdges(vi))\n        i = cython.declare(size_t, 0)\n        local_num_activations = cython.declare(size_t, 0)\n        dst: size_t\n        for i in range(degree):\n            dst = out_edges[i].neighbour\n            if self.parent[dst] == cython.cast(size_t, -1):\n                # parent[dst] == -1 \u8868\u793adst\u6ca1\u6709\u88abbfs\u8bbf\u95ee\u8fc7\n                if self.active_out.Add(dst):\n                    # \u5c06dst\u8bbe\u7f6e\u4e3a\u4e3a\u6d3b\u8dc3\u8282\u70b9\uff1bParallelBitmap.Add\u4e3a\u539f\u5b50\u64cd\u4f5c\uff0c\u9632\u6b62\u91cd\u590d\u8ba1\u7b97\n                    self.parent[dst] = vi\n                    local_num_activations += 1\n        return local_num_activations\n\n    @cython.cfunc\n    @cython.nogil\n    @cython.exceptval(check=False)\n    def run(self, g: cython.pointer(OlapBase[Empty]), r: size_t) -> cython.size_t:\n        self.graph = g\n        self.root = r\n        self.active_in = g.AllocVertexSubset()\n        self.active_out = g.AllocVertexSubset()\n        self.parent = g.AllocVertexArray[size_t]()\n        self.parent.Fill(-1)\n        num_vertices = cython.declare(size_t, self.graph.NumVertices())\n        printf("num_vertices = %lu\\n", num_vertices)\n        self.parent[self.root] = self.root\n        num_activations = cython.declare(size_t, 1)\n        discovered_vertices = cython.declare(size_t, num_activations)\n        self.active_in.Add(self.root)\n        while num_activations > 0:\n            self.active_out.Clear()\n            num_activations = g.ProcessVertexActive[size_t, BFSCore](self.Work, self.active_in, self)\n            discovered_vertices += num_activations\n            self.active_out.Swap(self.active_in)\n            printf("num_activations = %lu\\n", num_activations)\n        return discovered_vertices\n\n\n@cython.cfunc\ndef procedure_process(db: cython.pointer(GraphDB), request: dict, response: dict) -> cython.bint:\n    cost = time.time()\n    root_id = "0"\n    label = "node"\n    field = "id"\n    if "root" in request:\n        root_id = request["root"]\n    if "label" in request:\n        label = request["label"]\n    if "field" in request:\n        field = request["field"]\n\n    txn = db.CreateReadTxn()\n    olapondb = OlapOnDB[Empty](db[0], txn, SNAPSHOT_PARALLEL)\n    # \u5e76\u884c\u521b\u5efaOlapOnDB\n    # Cython\u4e0d\u652f\u6301\u5982 *db \u7684\u89e3\u5f15\u7528\u64cd\u4f5c\uff0c\u901a\u8fc7db[0]\u6765\u89e3\u5f15\u7528\n    root_vid = txn.GetVertexIndexIterator(\n        label.encode(\'utf-8\'), field.encode(\'utf-8\'),\n        root_id.encode(\'utf-8\'), root_id.encode(\'utf-8\')\n    ).GetVid()\n    # \u901a\u8fc7 GetVertexIndexIterator \u6839\u636eroot\u8282\u70b9label\u540d\u548cfiled\u540d\u4e0efiled\u503c\uff08root_id\uff09\n    # \u83b7\u53d6root\u8282\u70b9\u7684\u8fed\u4ee3\u5668\uff0c\u901a\u8fc7\u8fed\u4ee3\u5668\u83b7\u53d6vid\uff0c\u5728\u65e0ID_MAPPING\u65f6\uff0c\u8be5vid\u4e0eOlapOnDB\u4e2d\u7684id\u76f8\u540c\n    cost = time.time() - cost\n    printf("prepare_cost = %lf s\\n", cython.cast(cython.double, cost))\n    a = BFSCore()\n    cost = time.time()\n    count = a.run(cython.address(olapondb), root_vid)\n    cost = time.time() - cost\n    printf("core_cost = %lf s\\n", cython.cast(cython.double, cost))\n    response["found_vertices"] = count\n    response["num_vertices"] = olapondb.NumVertices()\n    response["num_edges"] = olapondb.NumEdges()\n    return True\n\n\n@cython.ccall\ndef Standalone(input_dir: str, root: size_t):\n    # Standalone\u4e3aStandalone\u6a21\u5f0f\u4e0b\u63d2\u4ef6\u5165\u53e3\uff0c\u7528cython.ccall\u4fee\u9970\n    # \u53ef\u4ee5\u4efb\u610f\u8bbe\u7f6e\u53c2\u6570\uff0c\u76f8\u5e94\u4fee\u6539plugins/cython/standalone_main.py\u5373\u53ef\n    cost = time.time()\n    graph = OlapOnDisk[Empty]()\n    config = ConfigBase[Empty]()\n    config.input_dir = input_dir.encode("utf-8")\n    # config\u4e3aC++\u7c7b\uff0cconfig.input_dir\u4e3astd::string\uff0cPython str\u9700\u8981encode\u624d\u80fd\u4f20\u7ed9std::string\n    graph.Load(config, DUAL_DIRECTION)\n    # \u8bfb\u5165\u56fe\n    cost = time.time() - cost\n    printf("load_cost = %lf s\\n", cython.cast(cython.double, cost))\n\n    cost = time.time()\n    a = BFSCore()\n    count = a.run(cython.address(graph), root)\n    # cython.address(graph)\uff0c\u53d6\u5740\uff0c\u7c7b\u4f3cC++\u4e2d&graph\n    cost = time.time() - cost\n    printf("core_cost = %lf s\\n", cython.cast(cython.double, cost))\n    print("find {} vertices".format(count))\n\n\n@cython.ccall\ndef Process(db: lgraph_db_python.PyGraphDB, inp: bytes):\n    # Process\u4e3aembed\u6a21\u5f0f\u548cprocedure\u6a21\u5f0f\u4e0b\u63d2\u4ef6\u5165\u53e3\uff0c\u7528cython.ccall\u4fee\u9970\n    # Process\u51fd\u6570\u5fc5\u987b\u540d\u4e3aProcess\uff0c\u53c2\u6570\u4e3algraph_db_python.PyGraphDB\u4e0ebytes\n    # \u8fd4\u56de\u503c\u5fc5\u987b\u4e3a(bool, str)\n    _inp = inp.decode("utf-8")\n    request = json.loads(_inp)\n    response = {}\n    addr = cython.declare(cython.Py_ssize_t, db.get_pointer())\n    # \u83b7\u53d6PyGraphDB\u4e2dGraphDB\u5bf9\u8c61\u7684\u5730\u5740\uff0c\u8f6c\u6362\u4e3a\u6307\u9488\u540e\u4f20\u9012\n    procedure_process(cython.cast(cython.pointer(GraphDB), addr),\n                      request, response)\n    return (True, json.dumps(response))\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var l=i(96540);const t={},r=l.createContext(t);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);