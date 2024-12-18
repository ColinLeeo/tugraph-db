"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7731],{57777:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(74848),c=n(28453);const s={},i="\u591a\u5c42\u7ea7\u63a5\u53e3",o={id:"introduction/characteristics/multi-level-Interfaces",title:"\u591a\u5c42\u7ea7\u63a5\u53e3",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u591a\u5c42\u7ea7\u63a5\u53e3\u7684\u8bbe\u8ba1\u7406\u5ff5\u3002",source:"@site/versions/version-4.3.0/zh-CN/source/2.introduction/5.characteristics/2.multi-level-Interfaces.md",sourceDirName:"2.introduction/5.characteristics",slug:"/introduction/characteristics/multi-level-Interfaces",permalink:"/tugraph-db/en-US/zh/4.3.0/introduction/characteristics/multi-level-Interfaces",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u4f18\u5148",permalink:"/tugraph-db/en-US/zh/4.3.0/introduction/characteristics/performance-oriented"},next:{title:"HTAP",permalink:"/tugraph-db/en-US/zh/4.3.0/introduction/characteristics/htap"}},h={},l=[{value:"1.\u7b80\u4ecb",id:"1\u7b80\u4ecb",level:2},{value:"2.\u5ba2\u6237\u7aef\u63a5\u53e3",id:"2\u5ba2\u6237\u7aef\u63a5\u53e3",level:2},{value:"3.\u670d\u52a1\u7aef\u63a5\u53e3",id:"3\u670d\u52a1\u7aef\u63a5\u53e3",level:2}];function d(e){const r={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"\u591a\u5c42\u7ea7\u63a5\u53e3",children:"\u591a\u5c42\u7ea7\u63a5\u53e3"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u591a\u5c42\u7ea7\u63a5\u53e3\u7684\u8bbe\u8ba1\u7406\u5ff5\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"1\u7b80\u4ecb",children:"1.\u7b80\u4ecb"}),"\n",(0,t.jsx)(r.p,{children:"\u591a\u5c42\u7ea7\u63a5\u53e3\u662f TuGraph \u9488\u5bf9\u591a\u4e30\u5bcc\u7684\u4f7f\u7528\u573a\u666f\uff0c\u5728\u6613\u7528\u6027\u548c\u9ad8\u6027\u4e2d\u4f5c\u51fa\u7684\u5e73\u8861\u3002\u6bd4\u5982\u63cf\u8ff0\u5f0f\u56fe\u67e5\u8be2\u8bed\u8a00 Cypher \u80fd\u591f\u62b9\u53bb\u56fe\u6570\u636e\u5e93\u5b9e\u73b0\u7684\u7ec6\u8282\uff0c\u57fa\u4e8e\u56fe\u6a21\u578b\u7684\u62bd\u8c61\u6765\u8fdb\u884c\u8868\u8fbe\u3002Cypher \u8fc7\u4e8e\u9ad8\u5c42\u7684\u8868\u8ff0\uff0c\u65e0\u6cd5\u9ad8\u6548\u8f6c\u5316\u6210\u5e95\u5c42\u7684\u6267\u884c\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86 Procedure API \u7684\u8fc7\u7a0b\u5f0f\u8bed\u8a00\uff0c\u6765\u53d1\u6325\u56fe\u6570\u636e\u5e93\u7684\u6700\u4f73\u6027\u80fd\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u63a5\u53e3\u53ef\u4ee5\u5927\u81f4\u5206\u4e3a\u5ba2\u6237\u7aef\u63a5\u53e3\u548c\u670d\u52a1\u7aef\u63a5\u53e3\uff0c\u5927\u90e8\u5206\u64cd\u4f5c\u90fd\u5728\u670d\u52a1\u7aef\u5b8c\u6210\uff0c\u5ba2\u6237\u7aef\u53ea\u505a\u6570\u636e\u7684\u5c01\u88c5\u548c\u89e3\u6790\u3002\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u901a\u8fc7\u7f51\u7edc\u8fde\u63a5\uff0cTuGraph \u652f\u6301\u66f4\u52a0\u7075\u6d3b\u7684\u77ed\u8fde\u63a5 REST \u534f\u8bae\uff0c\u4ee5\u53ca\u66f4\u52a0\u9ad8\u6548\u7684\u957f\u94fe\u63a5 RPC \u534f\u8bae\uff0c\u53ef\u6839\u636e\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u6765\u9009\u62e9\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u670d\u52a1\u7aef\u63a5\u53e3\u5747\u5904\u5728\u8ba1\u7b97\u5c42\uff0c\u548c\u56fe\u6570\u636e\u5b58\u50a8\u95f4\u7528\u4e00\u5c42 Core API \u5728\u903b\u8f91\u4e0a\u9694\u5f00\u3002"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"\u591a\u5c42\u7ea7\u63a5\u53e3\u67b6\u6784",src:n(19910).A+"",width:"740",height:"478"})}),"\n",(0,t.jsx)(r.h2,{id:"2\u5ba2\u6237\u7aef\u63a5\u53e3",children:"2.\u5ba2\u6237\u7aef\u63a5\u53e3"}),"\n",(0,t.jsx)(r.p,{children:"\u5ba2\u6237\u7aef\u63a5\u53e3\u6307\u5728\u5ba2\u6237\u7aef\u6267\u884c\u7684\u63a5\u53e3\uff0c\u901a\u5e38\u7528\u4e8e\u96c6\u6210\u5230\u8f6f\u4ef6\u5e94\u7528\u4e2d\u3002TuGraph \u7684\u5ba2\u6237\u7aef\u7684\u63a5\u53e3\u6bd4\u8f83\u7b80\u5355\uff0c\u5305\u62ec\u767b\u5f55\u767b\u51fa\u3001\u6570\u636e\u5bfc\u5165\u5bfc\u51fa\u3001\u5b58\u50a8\u8fc7\u7a0b\u52a0\u8f7d\u8c03\u7528\u3001Cypher\u64cd\u4f5c\u7b49\u3002\u5176\u4e2d Cypher \u4e2d\u96c6\u6210\u4e86\u5927\u90e8\u5206\u7684\u529f\u80fd\uff0c\u5305\u62ec\u6570\u636e\u64cd\u4f5c\u3001\u56fe\u6a21\u578b\u64cd\u4f5c\u3001\u8fd0\u7ef4\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u7b49\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u7531\u4e8e Cypher \u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\u90fd\u662f\u5b57\u7b26\u4e32\uff0cJAVA OGM \u662f\u5bf9 Cypher \u7684\u7ed3\u6784\u5316\u5c01\u88c5\uff0c\u5373\u67e5\u8be2\u7ed3\u679c\u80fd\u591f\u88ab\u5c01\u88c5\u4e3a\u4e00\u4e2a\u6709\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"3\u670d\u52a1\u7aef\u63a5\u53e3",children:"3.\u670d\u52a1\u7aef\u63a5\u53e3"}),"\n",(0,t.jsx)(r.p,{children:"\u670d\u52a1\u7aef\u63a5\u53e3\u5305\u62ec\u63cf\u8ff0\u5f0f\u56fe\u67e5\u8be2\u8bed\u8a00 Cypher\u3001\u8fc7\u7a0b\u5f0f\u56fe\u67e5\u8be2\u8bed\u8a00 Procedure API\u3001\u56fe\u5206\u6790\u7f16\u7a0b\u6846\u67b6 OLAP API \u548c\u56fe\u795e\u7ecf\u7f51\u7edc\u7f16\u7a0b\u6846\u67b6 GNN PI\uff0c\u4e3a\u56fe\u4e8b\u52a1\u5f15\u64ce\u3001\u56fe\u5206\u6790\u5f15\u64ce\u3001\u56fe\u795e\u7ecf\u7f51\u7edc\u5f15\u64ce\u63d0\u4f9b\u670d\u52a1\uff0c\u4e0b\u9762\u5148\u5c55\u5f00\u4ecb\u7ecd\u5404\u4e2a\u63a5\u53e3\u7684\u7279\u70b9\u3002"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u63cf\u8ff0\u5f0f\u56fe\u67e5\u8be2\u8bed\u8a00"})," \u662f\u5bf9\u67e5\u8be2\u903b\u8f91\u7684\u62bd\u8c61\u63cf\u8ff0\uff0c\u800c\u4e0e\u6267\u884c\u903b\u8f91\u65e0\u5173\uff0c\u5bf9\u56fe\u6570\u636e\u5e93\u5e94\u7528\u8005\u6bd4\u8f83\u53cb\u597d\uff0c\u7c7b\u6bd4\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684 SQL \u8bed\u8a00\u3002TuGraph \u7684 Cypher \u8bed\u8a00\u4e3b\u8981\u4f9d\u7167 Neo4j \u5f00\u6e90\u7684 OpenCypher \u67e5\u8be2\u6807\u51c6\uff0c\u540c\u65f6\u5bf9\u8fd0\u7ef4\u7ba1\u7406\u7b49\u8f85\u52a9\u529f\u80fd\u8fdb\u884c\u4e86\u6269\u5c55\uff0c\u5728\u529f\u80fd\u4e0a\u56ca\u62ec\u4e86 TuGraph \u7684\u5927\u90e8\u5206\u64cd\u4f5c\u3002\u63cf\u8ff0\u5f0f\u56fe\u67e5\u8be2\u8bed\u8a00\u4f1a\u6210\u4e3a\u56fe\u6570\u636e\u5e93\u7684\u4e3b\u8981\u6570\u636e\u64cd\u4f5c\u65b9\u5f0f\uff0c\u4f46\u7531\u4e8e\u63cf\u8ff0\u5230\u6267\u884c\u4e4b\u95f4\u9700\u8981\u751f\u6210\u6267\u884c\u8ba1\u5212\uff08Execution Plan\uff09\uff0c\u751f\u6210\u6700\u4f18\u6267\u884c\u8ba1\u5212\u5728\u5b66\u672f\u754c\u548c\u5de5\u4e1a\u754c\u5747\u6709\u5f88\u957f\u7684\u8def\u8981\u8d70\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u8fc7\u7a0b\u5f0f\u56fe\u67e5\u8be2\u8bed\u8a00"})," \u662f\u4e3a\u4e86\u89e3\u51b3\u63cf\u8ff0\u5f0f\u56fe\u67e5\u8be2\u8bed\u8a00\u4e0e\u6700\u4f18\u6027\u80fd\u95f4\u7684\u9e3f\u6c9f\u3002TuGraph\u7684 Procedure API \u662f\u5728 Core API \u4e0a\u505a\u4e86\u4e00\u5c42\u7b80\u5355\u7684\u5c01\u88c5\uff0cC++ Procedure API\u7684\u7075\u6d3b\u6027\u548c\u9ad8\u6548\u6027\u80fd\u591f\u5145\u5206\u53d1\u6325\u5b58\u50a8\u7684\u6781\u81f4\u6027\u80fd\uff0c\u4e5f\u662f Cypher \u4f18\u5316\u7684\u4e0a\u9650\u6027\u80fd\u3002Python Procedure API \u662f C++ Procedure API \u4e0a\u7684\u4e00\u5c42\u8de8\u8bed\u8a00\u5c01\u88c5\uff0c\u7ffb\u8bd1\u8fc7\u7a0b\u4e2d\u503c\u7684\u62f7\u8d1d\u4f1a\u5e26\u6765\u4e00\u5b9a\u7684\u6027\u80fd\u635f\u5931\uff0c\u4f18\u52bf\u5219\u4e3b\u8981\u662f python \u8bed\u8a00\u672c\u8eab\u7684\u6613\u7528\u6027\u3002raversal API \u662f\u5e76\u884c\u6267\u884c\u7684 Procedure \u63a5\u53e3\uff0c\u63cf\u8ff0\u4e0a\u66f4\u63a5\u8fd1\u4e8e\u96c6\u5408\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u6269\u5c55\u70b9\u96c6\u5408\u6240\u6709\u51fa\u5ea6\u90bb\u5c45\uff0c\u83b7\u5f97\u4e00\u4e2a\u65b0\u7684\u70b9\u96c6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u56fe\u5206\u6790\u7f16\u7a0b\u6846\u67b6"})," \u5c5e\u4e8e \u2018\u56fe\u8ba1\u7b97\u7cfb\u7edf\u2019 \u7684\u8303\u7574\uff0c\u4f1a\u5c06\u56fe\u6570\u636e\u4ece\u652f\u6301\u589e\u5220\u6539\u67e5\u7684\u5b58\u50a8\u4e2d\u5bfc\u51fa\u5feb\u7167\uff0c\u4ee5\u66f4\u7d27\u51d1\u7684\u6570\u636e\u5b58\u50a8\u683c\u5f0f\u6765\u652f\u6301\u53ea\u8bfb\u7684\u590d\u6742\u56fe\u5206\u6790\uff0c\u8fd9\u91cc\u53eb\u505aOLAP API\u3002OLAP API \u5c01\u88c5\u4e86\u9ad8\u5e76\u53d1\u6267\u884c\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5305\u62ec Vector\u3001Bitmap\u7b49\uff0c\u4ee5\u53ca\u57fa\u4e8e CSR \u683c\u5f0f\u7684\u56fe\u5feb\u7167\u6570\u636e\u7ed3\u6784\uff0c\u7136\u540e\u63d0\u4f9b\u4e00\u5957\u5e76\u53d1\u7684\u5feb\u901f\u70b9\u8fb9\u64cd\u4f5c\u6846\u67b6\u3002\u5728\u56fe\u5206\u6790\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u6570\u636e\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u5199\u56de\u56fe\u6570\u636e\u5e93\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u56fe\u795e\u7ecf\u7f51\u7edc\u7f16\u7a0b\u6846\u67b6"})," \u4e3b\u8981\u63d0\u4f9b\u4e86\u56fe\u795e\u7ecf\u7f51\u7edc\u5e94\u7528\u7f16\u7a0b\u6240\u9700\u8981\u7684\u63a5\u53e3\uff0c\u80fd\u591f\u5bf9\u63a5PyTorch \u7b49\u673a\u5668\u5b66\u4e60\u6846\u67b6\u3002TuGraph \u7684\u56fe\u795e\u7ecf\u7f51\u7edc\u7f16\u7a0b\u6846\u67b6\u4e3b\u8981\u96c6\u6210\u4e86 DGL\uff0c\u5728 Python \u7684\u8bed\u8a00\u73af\u5883\u4e2d\u5b8c\u6210\u4ece\u56fe\u5b58\u50a8\u5230\u56fe\u795e\u7ecf\u7f51\u7edc\u5e94\u7528\u7684\u5b8c\u6574\u6d41\u7a0b\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u9664\u4e86 Cypher \u662f\u89e3\u91ca\u6267\u884c\u5916\uff0c\u5176\u4f59\u670d\u52a1\u7aef\u63a5\u53e3\u90fd\u662f\u7f16\u8bd1\u6267\u884c\uff0c\u5373\u9700\u8981\u5c06\u5bf9\u5e94\u4ee3\u7801\u4f20\u5230\u670d\u52a1\u7aef\u540e\uff0c\u8fdb\u884c\u7f16\u8bd1\uff08\u53ef\u80fd\u4f1a\u6709\u65f6\u95f4\u5f00\u9500\uff09\uff0c\u518d\u5728\u670d\u52a1\u7aef\u6267\u884c\u3002\u6240\u4ee5\u901a\u5e38\u9700\u8981\u5148\u52a0\u8f7d\uff0c\u7136\u540e\u518d\u5df2\u52a0\u8f7d\u7684\u5e94\u7528\u5217\u8868\u4e2d\u627e\u5230\u7a0b\u5e8f\uff0c\u4f20\u8f93\u5165\u53c2\u6570\u540e\u6267\u884c\u3002"})]})}function a(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19910:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/multi-level-Interfaces-8ff5e9f00b26371a33f6de384bc2d9cb.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const c={},s=t.createContext(c);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);