"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70620],{67783:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=t(74848),l=t(28453);const i={},d="\u73af\u5883\u51c6\u5907",s={id:"developer-manual/installation/environment",title:"\u73af\u5883\u51c6\u5907",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u90e8\u7f72\u65f6\u6240\u9700\u7684\u8f6f\u786c\u4ef6\u73af\u5883\u3002",source:"@site/versions/version-3.6.0/zh-CN/source/5.developer-manual/1.installation/1.environment.md",sourceDirName:"5.developer-manual/1.installation",slug:"/developer-manual/installation/environment",permalink:"/tugraph-db/zh/3.6.0/developer-manual/installation/environment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u89c6\u5316\u64cd\u4f5c\u624b\u518c\uff08\u65e7\u7248\uff09",permalink:"/tugraph-db/zh/3.6.0/user-guide/tugraph-browser-legacy"},next:{title:"\u73af\u5883\u5206\u7c7b",permalink:"/tugraph-db/zh/3.6.0/developer-manual/installation/environment-mode"}},h={},a=[{value:"1.\u786c\u4ef6\u73af\u5883",id:"1\u786c\u4ef6\u73af\u5883",level:2},{value:"1.1. CPU",id:"11-cpu",level:3},{value:"1.2. \u5185\u5b58",id:"12-\u5185\u5b58",level:3},{value:"1.3. \u5916\u5b58",id:"13-\u5916\u5b58",level:3},{value:"2.\u8f6f\u4ef6\u73af\u5883",id:"2\u8f6f\u4ef6\u73af\u5883",level:2},{value:"2.1. \u64cd\u4f5c\u7cfb\u7edf",id:"21-\u64cd\u4f5c\u7cfb\u7edf",level:3},{value:"2.2. \u7cfb\u7edf\u5e93",id:"22-\u7cfb\u7edf\u5e93",level:3},{value:"3.\u5178\u578b\u914d\u7f6e\u63a8\u8350",id:"3\u5178\u578b\u914d\u7f6e\u63a8\u8350",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u90e8\u7f72\u65f6\u6240\u9700\u7684\u8f6f\u786c\u4ef6\u73af\u5883\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"1\u786c\u4ef6\u73af\u5883",children:"1.\u786c\u4ef6\u73af\u5883"}),"\n",(0,r.jsx)(e.h3,{id:"11-cpu",children:"1.1. CPU"}),"\n",(0,r.jsx)(e.p,{children:"TuGraph \u65e0\u8bba\u662f\u7269\u7406\u3001\u865a\u62df\u8fd8\u662f\u5bb9\u5668\u5316\u73af\u5883\uff0c\u5747\u652f\u6301 X86_64 \u548c ARM64 \u67b6\u6784\u7684\u786c\u4ef6\u5e73\u53f0\uff0c\u6d4b\u8bd5\u8ba4\u8bc1\u8fc7\u7684\u786c\u4ef6\u5e73\u53f0\u5305\u62ec Intel\u3001AMD\u3001Kunpeng\u3001Hygon\u3001\u98de\u817e\u7b49\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"12-\u5185\u5b58",children:"1.2. \u5185\u5b58"}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u5efa\u8bae\u5185\u5b58\u5bb9\u91cf\u4e0d\u5c0f\u4e8e\u5b9e\u9645\u7684\u6570\u636e\u5927\u5c0f\u3002\u5982\u679c\u6700\u6c42\u6781\u81f4\u7684\u6027\u80fd\uff0c\u628a\u6240\u6709\u7684\u6570\u636e\u7f13\u5b58\u5230\u5185\u5b58\u91cc\u662f\u6700\u7406\u60f3\u7684\u3002\u5728\u6570\u636e\u8bbf\u95ee\u7684\u5c40\u90e8\u6027\u4e0a\uff0c\u56fe\u6570\u636e\u5e93\u7684\u5c40\u90e8\u6027\u8981\u6bd4\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5dee\uff0c\u56e0\u6b64\u5982\u679c\u6570\u636e\u5728\u5185\u5b58\u4e2d\u653e\u4e0d\u4e0b\uff0c\u901a\u5e38\u4f1a\u9891\u7e41\u5730\u6362\u5165\u6362\u51fa\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"13-\u5916\u5b58",children:"1.3. \u5916\u5b58"}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u7528\u6237\u4f7f\u7528 NVMe SSD \u4f5c\u4e3a\u5916\u5b58\uff0c\u6570\u636e\u5e93\u6709\u5927\u91cf\u7684\u5199\u64cd\u4f5c\u9700\u8981\u540c\u6b65\u7684\u5916\u5b58\uff0c\u901a\u5e38\u4e3a\u968f\u673a\u5199\uff0c\u5916\u5b58\u7684\u8bfb\u5199\u6027\u80fd\u5f88\u5bb9\u6613\u6210\u4e3a\u6574\u4f53\u6570\u636e\u5e93\u8fd0\u884c\u7684\u6027\u80fd\u74f6\u9888\u3002\u56e0\u6b64\uff0c\u9ad8IOPS\u3001\u4f4e\u5ef6\u8fdf\u7684 NVMe SSD \u662f\u6700\u4f18\u7684\u9009\u62e9\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u73b0\u5b9e\u6761\u4ef6\u53ea\u80fd\u4f7f\u7528 SATA\u63a5\u53e3\u7684SSD\uff0c\u6216\u8005\u4e91\u4e0a\u7684\u7f51\u76d8\uff0c\u6027\u80fd\u867d\u7136\u4f1a\u53d7\u5230\u5f71\u54cd\uff0c\u4f46 TuGraph \u4f9d\u7136\u80fd\u6b63\u786e\u7684\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5916\u5b58\u5927\u5c0f\u5efa\u8bae\u4e3a\u5b9e\u9645\u6570\u636e\u5927\u5c0f\u76844\u500d\uff0c\u6bd4\u5982\u6570\u636e\u4e3a1TB\uff0c\u5219\u51c6\u59074TB\u7684\u786c\u76d8\u4f1a\u6bd4\u8f83\u7a33\u59a5\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"2\u8f6f\u4ef6\u73af\u5883",children:"2.\u8f6f\u4ef6\u73af\u5883"}),"\n",(0,r.jsx)(e.h3,{id:"21-\u64cd\u4f5c\u7cfb\u7edf",children:"2.1. \u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,r.jsx)(e.p,{children:"TuGraph \u80fd\u591f\u517c\u5bb9\u4e3b\u6d41\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5305\u62ecUbuntu\u3001CentOS\u3001SUSE\u3001\u94f6\u6cb3\u9e92\u9e9f\u3001 \u4e2d\u6807\u9e92\u9e9f\u3001UOS\u7b49\uff0c\u5747\u901a\u8fc7\u6d4b\u8bd5\u8ba4\u8bc1\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u4e2d\u6700\u7a33\u5b9a\u4f7f\u7528\u7684\u7cfb\u7edf\u7248\u672c\u662f Ubuntu 18.04\u3001CentOS 7\u3001CentOS 8\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"22-\u7cfb\u7edf\u5e93",children:"2.2. \u7cfb\u7edf\u5e93"}),"\n",(0,r.jsxs)(e.p,{children:["\u7f16\u8bd1\u73af\u5883\u548c\u8fd0\u884c\u73af\u5883\u5bf9\u7cfb\u7edf\u5e93\u7684\u8981\u6c42\u4e0d\u4e00\u6837\uff0c\u5177\u4f53\u8bf7\u53c2\u8003",(0,r.jsx)(e.a,{href:"/tugraph-db/zh/3.6.0/developer-manual/installation/environment-mode",children:"\u73af\u5883\u5206\u7c7b"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"3\u5178\u578b\u914d\u7f6e\u63a8\u8350",children:"3.\u5178\u578b\u914d\u7f6e\u63a8\u8350"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u786c\u4ef6"}),(0,r.jsx)(e.th,{children:"\u6700\u4f4e\u914d\u7f6e"}),(0,r.jsx)(e.th,{children:"\u5efa\u8bae\u914d\u7f6e"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CPU"}),(0,r.jsx)(e.td,{children:"4 Cores"}),(0,r.jsx)(e.td,{children:"64 Cores"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5185\u5b58"}),(0,r.jsx)(e.td,{children:"4GB"}),(0,r.jsx)(e.td,{children:"512GB"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5916\u5b58"}),(0,r.jsx)(e.td,{children:"100GB"}),(0,r.jsx)(e.td,{children:"2TB NVMe SSD"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"OS"}),(0,r.jsx)(e.td,{children:"Linux 4.9"}),(0,r.jsx)(e.td,{children:"CentOS 7.3"})]})]})]})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>s});var r=t(96540);const l={},i=r.createContext(l);function d(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);