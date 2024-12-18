"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[98271],{87815:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=r(74848),t=r(28453);const l={},i="RPC API",c={id:"client-tools/rpc-api",title:"RPC API",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684 RPC API \u7684\u8c03\u7528\u8be6\u60c5\u3002",source:"@site/versions/version-4.5.1/zh-CN/source/7.client-tools/8.rpc-api.md",sourceDirName:"7.client-tools",slug:"/client-tools/rpc-api",permalink:"/tugraph-db/en-US/zh/4.5.1/client-tools/rpc-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RESTful API",permalink:"/tugraph-db/en-US/zh/4.5.1/client-tools/restful-api"},next:{title:"RESTful API Legacy",permalink:"/tugraph-db/en-US/zh/4.5.1/client-tools/restful-api-legacy"}},u={},a=[{value:"1.\u7b80\u4ecb",id:"1\u7b80\u4ecb",level:2},{value:"2.\u8bf7\u6c42",id:"2\u8bf7\u6c42",level:2},{value:"2.1.\u5efa\u7acb\u8fde\u63a5",id:"21\u5efa\u7acb\u8fde\u63a5",level:3},{value:"2.2.\u8bf7\u6c42\u7c7b\u578b",id:"22\u8bf7\u6c42\u7c7b\u578b",level:3},{value:"3.\u767b\u5f55",id:"3\u767b\u5f55",level:2},{value:"4.\u67e5\u8be2",id:"4\u67e5\u8be2",level:2},{value:"5.\u5b58\u50a8\u8fc7\u7a0b",id:"5\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"5.1.\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b",id:"51\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b",level:3},{value:"5.2.\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b",id:"52\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b",level:3},{value:"5.3.\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b",id:"53\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b",level:3},{value:"5.4.\u5217\u4e3e\u5b58\u50a8\u8fc7\u7a0b",id:"54\u5217\u4e3e\u5b58\u50a8\u8fc7\u7a0b",level:3}];function p(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"rpc-api",children:"RPC API"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684 RPC API \u7684\u8c03\u7528\u8be6\u60c5\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1\u7b80\u4ecb",children:"1.\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"TuGraph \u63d0\u4f9b\u4e30\u5bcc\u7684 RPC API\uff0c\u4ee5\u4f9b\u5f00\u53d1\u8005\u901a\u8fc7 RPC \u8bf7\u6c42\u8fdc\u7a0b\u8c03\u7528 TuGraph \u63d0\u4f9b\u7684\u670d\u52a1\u3002"}),"\n",(0,s.jsx)(n.p,{children:"RPC\uff08\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff09\u662f\u4e00\u79cd\u901a\u8fc7\u7f51\u7edc\u4ece\u8fdc\u7a0b\u8ba1\u7b97\u673a\u7a0b\u5e8f\u4e0a\u8bf7\u6c42\u670d\u52a1\uff0c\u800c\u4e0d\u9700\u8981\u4e86\u89e3\u5e95\u5c42\u7f51\u7edc\u6280\u672f\u7684\u534f\u8bae\u3002\n\u76f8\u6bd4REST\uff0cRPC \u9762\u5411\u65b9\u6cd5\uff0c\u4e3b\u8981\u7528\u4e8e\u51fd\u6570\u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u53ef\u4ee5\u9002\u5408\u66f4\u590d\u6742\u901a\u4fe1\u9700\u6c42\u7684\u573a\u666f\uff0c\u4e14\u6027\u80fd\u66f4\u9ad8\u3002\nbrpc\u662f\u7528c++\u8bed\u8a00\u7f16\u5199\u7684\u5de5\u4e1a\u7ea7RPC\u6846\u67b6\uff0c\u57fa\u4e8ebrpc\uff0cTuGraph \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684RPC API\uff0c\u672c\u6587\u6863\u63cf\u8ff0\nTuGraph \u7684 RPC API \u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"2\u8bf7\u6c42",children:"2.\u8bf7\u6c42"}),"\n",(0,s.jsx)(n.h3,{id:"21\u5efa\u7acb\u8fde\u63a5",children:"2.1.\u5efa\u7acb\u8fde\u63a5"}),"\n",(0,s.jsx)(n.p,{children:"\u5f00\u53d1\u8005\u5411TuGraph\u670d\u52a1\u53d1\u9001RPC\u8bf7\u6c42\uff0c\u9996\u5148\u8981\u5efa\u7acb\u8fde\u63a5\u3002\u4ee5C++\u8bed\u8a00\u4e3a\u4f8b\uff0c\u5f00\u53d1\u8005\u521b\u5efa\u6307\u5b9aurl\u7684\u901a\u9053\uff08channel\uff09\uff0c\n\u7531\u901a\u9053\u521b\u5efa\u6307\u5b9a\u7684\u670d\u52a1\u5b58\u6839\uff08LGraphRPCService_Stub\uff09\uff0c\u540e\u7eed\u5373\u53ef\u901a\u8fc7\u5b58\u6839\u50cf\u8c03\u7528\u672c\u5730\u65b9\u6cd5\u4e00\u6837\u5411\u8fdc\u7a0b\n\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C++",children:'    std::shared_ptr<lgraph_rpc::m_channel_options> options = std::make_shared<lgraph_rpc::m_channel_options>();\n    options->protocol = "baidu_std";\n    options->connection_type = "";\n    options->timeout_ms = 60 * 60 * 1000 /*milliseconds*/;\n    options->max_retry = 3;\n    std::string load_balancer = "";\n    std::shared_ptr<lgraph_rpc::m_channel> channel = std::make_shared<lgraph_rpc::m_channel>();\n    if (channel->Init(url.c_str(), load_balancer, options.get()) != 0)\n        throw RpcException("Fail to initialize channel");\n    LGraphRPCService_Stub stub(channel.get());\n'})}),"\n",(0,s.jsx)(n.h3,{id:"22\u8bf7\u6c42\u7c7b\u578b",children:"2.2.\u8bf7\u6c42\u7c7b\u578b"}),"\n",(0,s.jsx)(n.p,{children:"TuGraph\u652f\u630110\u79cdRPC\u8bf7\u6c42\uff0c\u5176\u4e2d\u6bcf\u79cd\u8bf7\u6c42\u7684\u529f\u80fd\u5982\u4e0b\u8868\u6240\u793a\uff1a"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8bf7\u6c42"}),(0,s.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GraphApiRequest"}),(0,s.jsx)(n.td,{children:"\u70b9\u8fb9\u7d22\u5f15\u64cd\u4f5c\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CypherRequest"}),(0,s.jsx)(n.td,{children:"cypher\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PluginRequest"}),(0,s.jsx)(n.td,{children:"\u5b58\u50a8\u8fc7\u7a0b\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HARequest"}),(0,s.jsx)(n.td,{children:"\u9ad8\u53ef\u7528\u6a21\u5f0f\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ImportRequest"}),(0,s.jsx)(n.td,{children:"\u6570\u636e\u5bfc\u5165\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GraphRequest"}),(0,s.jsx)(n.td,{children:"\u5b50\u56fe\u64cd\u4f5c\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AclRequest"}),(0,s.jsx)(n.td,{children:"\u6743\u9650\u7ba1\u7406\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ConfigRequest"}),(0,s.jsx)(n.td,{children:"\u914d\u7f6e\u7ba1\u7406\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RestoreRequest"}),(0,s.jsx)(n.td,{children:"\u5907\u4efd\u8bf7\u6c42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SchemaRequest"}),(0,s.jsx)(n.td,{children:"schema\u7ba1\u7406\u8bf7\u6c42"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u9700\u8981\u4f20\u5165\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["client_version: \u53ef\u9009\u53c2\u6570\uff0cHA\u6a21\u5f0f\u4e0b\u53ef\u901a\u8fc7\u5bf9\u6bd4",(0,s.jsx)(n.code,{children:"client_version"}),"\u548c",(0,s.jsx)(n.code,{children:"server_version"}),"\u9632\u6b62\u54cd\u5e94\u8fc7\u65f6\u7684\u8bf7\u6c42"]}),"\n",(0,s.jsx)(n.li,{children:"token: \u5fc5\u8981\u53c2\u6570\uff0c\u5ba2\u6237\u7aef\u767b\u9646\u4e4b\u540e\u83b7\u5f97token\uff0c\u6bcf\u6b21\u8bf7\u6c42\u4f20\u5165token\u4ee5\u6821\u9a8c\u7528\u6237\u8eab\u4efd"}),"\n",(0,s.jsx)(n.li,{children:"is_write_op: \u53ef\u9009\u53c2\u6570\uff0c\u6807\u5fd7\u8bf7\u6c42\u662f\u5426\u662f\u5199\u8bf7\u6c42"}),"\n",(0,s.jsx)(n.li,{children:"user: \u53ef\u9009\u53c2\u6570\uff0cHA\u6a21\u5f0f\u4e0b\u4e3b\u4ece\u4e4b\u95f4\u540c\u6b65\u8bf7\u6c42\u65f6\u8bbe\u7f6euser\uff0c\u4e0d\u9700\u9a8c\u8bc1token"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u670d\u52a1\u5904\u7406\u5b8cRPC\u8bf7\u6c42\u4e4b\u540e\u53d1\u56de\u54cd\u5e94\uff0c\u54cd\u5e94\u6d88\u606f\u4e2d\u9664\u4e86\u5305\u542b\u6bcf\u4e2a\u8bf7\u6c42\u7684\u5355\u72ec\u54cd\u5e94\u4fe1\u606f\u4e4b\u5916\uff0c\u8fd8\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"error_code: \u5fc5\u8981\u53c2\u6570\uff0c\u6807\u5fd7\u8bf7\u6c42\u5904\u7406\u72b6\u6001"}),"\n",(0,s.jsx)(n.li,{children:"redirect: \u53ef\u9009\u53c2\u6570\uff0cHA\u6a21\u5f0f\u4e0b\u5411follower\u53d1\u9001\u5199\u8bf7\u6c42\u65f6\u5904\u7406\u5931\u8d25\uff0c\u8bbe\u7f6eredirect\u4e3a\u8bf7\u6c42\u8f6c\u53d1\u5730\u5740\uff0c\u5373leader\u5730\u5740"}),"\n",(0,s.jsx)(n.li,{children:"error: \u53ef\u9009\u53c2\u6570\uff0c\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}),"\n",(0,s.jsxs)(n.li,{children:["server_version: \u53ef\u9009\u53c2\u6570\uff0cHA\u6a21\u5f0f\u7684\u8bf7\u6c42\u54cd\u5e94\u4e2d\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"server_version"}),"\u4ee5\u907f\u514dclient\u8bfb\u53d6\u6570\u636e\u65f6\u53d1\u751f\u53cd\u5411\u65f6\u95f4\u65c5\u884c\u95ee\u9898"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f  ",(0,s.jsx)(n.strong,{children:"\u9664CypherRequest\u3001PluginRequest\u3001HARequest\u548cAclRequest\u5916\uff0c\u5176\u4f59RPC\u63a5\u53e3\u5c06\u9010\u6b65\u5e9f\u5f03\uff0c\u5176\u529f\u80fd\u7edf\u4e00\u81f3CypherRequest\u63a5\u53e3\u3002"})]}),"\n",(0,s.jsx)(n.h2,{id:"3\u767b\u5f55",children:"3.\u767b\u5f55"}),"\n",(0,s.jsx)(n.p,{children:"\u767b\u5f55\u8bf7\u6c42\u4fe1\u606f\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"user: \u5fc5\u8981\u53c2\u6570\uff0c\u7528\u6237\u540d"}),"\n",(0,s.jsx)(n.li,{children:"pass: \u5fc5\u8981\u53c2\u6570\uff0c\u5bc6\u7801\n\u4ee5C++\u4e3a\u4f8b\uff0c\u7528\u6237\u4f7f\u7528\u6784\u5efa\u597d\u7684\u670d\u52a1\u5b58\u6839\u53d1\u9001\u767b\u5f55\u8bf7\u6c42\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C++",children:"    auto* req = request.mutable_acl_request();\n    auto* auth = req->mutable_auth_request()->mutable_login();\n    auth->set_user(user);\n    auth->set_password(pass);\n    // send data\n    cntl->Reset();\n    cntl->request_attachment().append(FLAGS_attachment);\n    req->set_client_version(server_version);\n    req->set_token(token);\n    LGraphRPCService_Stub stub(channel.get());\n    LGraphResponse res;\n    stub.HandleRequest(cntl.get(), req, &resp, nullptr);\n    if (cntl->Failed()) throw RpcConnectionException(cntl->ErrorText());\n    server_version = std::max(server_version, res.server_version());\n    if (res.error_code() != LGraphResponse::SUCCESS) throw RpcStatusException(res.error());\n    token = res.acl_response().auth_response().token();\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u767b\u5f55\u54cd\u5e94\u4fe1\u606f\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"token: \u5fc5\u8981\u53c2\u6570\uff0c\u767b\u5f55\u6210\u529f\u4f1a\u6536\u5230\u5e26\u6709\u7b7e\u540d\u7684\u4ee4\u724c\uff0c\u5373 Json Web Token\uff0c\u5ba2\u6237\u7aef\u50a8\u5b58\u8be5\u4ee4\u724c\uff0c\u5e76\u4e14\u7528\u4e8e\u4ee5\u540e\u7684\u6bcf\u6b21\u53d1\u9001\u8bf7\u6c42\u3002\n\u5982\u679c\u767b\u5f55\u5931\u8d25\u4f1a\u6536\u5230\u201cAuthentication failed\u201d\u9519\u8bef\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4\u67e5\u8be2",children:"4.\u67e5\u8be2"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7Cypher\u67e5\u8be2\u548cTuGraph\u8fdb\u884c\u7edd\u5927\u591a\u6570\u7684\u4ea4\u4e92\uff0cCypher\u8bf7\u6c42\u4fe1\u606f\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"query: \u5fc5\u8981\u53c2\u6570\uff0cCypher\u67e5\u8be2\u8bed\u53e5"}),"\n",(0,s.jsx)(n.li,{children:"param_names: \u53ef\u9009\u53c2\u6570\uff0c\u53c2\u6570\u540d"}),"\n",(0,s.jsx)(n.li,{children:"param_values: \u53ef\u9009\u53c2\u6570\uff0c\u53c2\u6570\u503c"}),"\n",(0,s.jsx)(n.li,{children:"result_in_json_format: \u5fc5\u8981\u53c2\u6570\uff0c\u67e5\u8be2\u7ed3\u679c\u662f\u5426\u4ee5JSON\u683c\u5f0f\u8fd4\u56de"}),"\n",(0,s.jsx)(n.li,{children:"graph: \u53ef\u9009\u53c2\u6570\uff0cCypher\u8bed\u53e5\u6267\u884c\u7684\u5b50\u56fe\u540d\u79f0"}),"\n",(0,s.jsx)(n.li,{children:"timeout: \u53ef\u9009\u53c2\u6570\uff0cCypher\u8bed\u53e5\u6267\u884c\u7684\u8d85\u65f6\u65f6\u95f4"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5C++\u4e3a\u4f8b\uff0c\u7528\u6237\u53d1\u9001Cypher\u8bf7\u6c42\u7684\u65b9\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C++",children:"    LGraphResponse res;\n    cntl->Reset();\n    cntl->request_attachment().append(FLAGS_attachment);\n    LGraphRequest req;\n    req.set_client_version(server_version);\n    req.set_token(token);\n    lgraph::CypherRequest* cypher_req = req.mutable_cypher_request();\n    cypher_req->set_graph(graph);\n    cypher_req->set_query(query);\n    cypher_req->set_timeout(timeout);\n    cypher_req->set_result_in_json_format(true);\n    LGraphRPCService_Stub stub(channel.get());\n    stub.HandleRequest(cntl.get(), &req, &res, nullptr);\n    if (cntl->Failed()) throw RpcConnectionException(cntl->ErrorText());\n    if (res.error_code() != LGraphResponse::SUCCESS) throw RpcStatusException(res.error());\n    server_version = std::max(server_version, res.server_version());\n    CypherResponse cypher_res = res.cypher_response();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Cypher\u8bf7\u6c42\u54cd\u5e94\u4e3a\u4ee5\u4e0b\u4e24\u4e2a\u53c2\u6570\u4e4b\u4e00\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"json_result: JSON\u683c\u5f0f\u7684cypher\u67e5\u8be2\u7ed3\u679c"}),"\n",(0,s.jsx)(n.li,{children:"binary_result: CypherResult\u683c\u5f0f\u7684cypher\u67e5\u8be2\u7ed3\u679c"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5\u5b58\u50a8\u8fc7\u7a0b",children:"5.\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u6ee1\u8db3\u7528\u6237\u8f83\u4e3a\u590d\u6742\u7684\u67e5\u8be2/\u66f4\u65b0\u903b\u8f91\uff0cTuGraph\u652f\u6301 C \u8bed\u8a00\u548c Python \u8bed\u8a00\u7f16\u5199\u7684\u5b58\u50a8\u8fc7\u7a0b\u3002\n\u7528\u6237\u53ef\u4ee5\u4f7f\u7528RPC\u8bf7\u6c42\u5bf9\u5b58\u50a8\u8fc7\u7a0b\u8fdb\u884c\u589e\u5220\u6539\u67e5\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"51\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b",children:"5.1.\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b\u7684\u8bf7\u6c42\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"name: \u5fc5\u8981\u53c2\u6570\uff0c\u5b58\u50a8\u8fc7\u7a0b\u540d\u79f0"}),"\n",(0,s.jsx)(n.li,{children:"read_only: \u5fc5\u8981\u53c2\u6570\uff0c\u662f\u5426\u53ea\u8bfb"}),"\n",(0,s.jsx)(n.li,{children:"code: \u5fc5\u8981\u53c2\u6570\uff0c\u5b58\u50a8\u8fc7\u7a0b\u6587\u4ef6\u8bfb\u5165\u751f\u6210\u7684ByteString"}),"\n",(0,s.jsx)(n.li,{children:"desc: \u53ef\u9009\u53c2\u6570\uff0c\u5b58\u50a8\u8fc7\u7a0b\u63cf\u8ff0"}),"\n",(0,s.jsx)(n.li,{children:"code_type: \u53ef\u9009\u53c2\u6570\uff0c\u5b58\u50a8\u8fc7\u7a0b\u4ee3\u7801\u7c7b\u578b\uff0cPY\u3001SO\u3001CPP\u3001ZIP\u56db\u8005\u4e4b\u4e00"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5C++\u4e3a\u4f8b\uff0c\u7528\u6237\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b\u7684\u65b9\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C++",children:'    std::string content;\n    if (!FieldSpecSerializer::FileReader(source_file, content)) {\n        std::swap(content, result);\n        return false;\n    }\n    LGraphRequest req;\n    req.set_is_write_op(true);\n    lgraph::PluginRequest* pluginRequest = req.mutable_plugin_request();\n    pluginRequest->set_graph(graph);\n    pluginRequest->set_type(procedure_type == "CPP" ? lgraph::PluginRequest::CPP\n                                                    : lgraph::PluginRequest::PYTHON);\n    pluginRequest->set_version(version);\n    lgraph::LoadPluginRequest* loadPluginRequest = pluginRequest->mutable_load_plugin_request();\n    loadPluginRequest->set_code_type([](const std::string& type) {\n        std::unordered_map<std::string, lgraph::LoadPluginRequest_CodeType> um{\n            {"SO", lgraph::LoadPluginRequest::SO},\n            {"PY", lgraph::LoadPluginRequest::PY},\n            {"ZIP", lgraph::LoadPluginRequest::ZIP},\n            {"CPP", lgraph::LoadPluginRequest::CPP}};\n        return um[type];\n    }(code_type));\n    loadPluginRequest->set_name(procedure_name);\n    loadPluginRequest->set_desc(procedure_description);\n    loadPluginRequest->set_read_only(read_only);\n    loadPluginRequest->set_code(content);\n    cntl->Reset();\n    cntl->request_attachment().append(FLAGS_attachment);\n    req.set_client_version(server_version);\n    req.set_token(token);\n    LGraphRPCService_Stub stub(channel.get());\n    LGraphResponse res;\n    stub.HandleRequest(cntl.get(), &req, &res, nullptr);\n    if (cntl->Failed()) throw RpcConnectionException(cntl->ErrorText());\n    server_version = std::max(server_version, res.server_version());\n    if (res.error_code() != LGraphResponse::SUCCESS) throw RpcStatusException(res.error());\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b\u7684\u54cd\u5e94\u4e0d\u5305\u542b\u53c2\u6570\uff0c\u5982\u679c\u52a0\u8f7d\u5931\u8d25\u5219\u629b\u51faBadInput\u5f02\u5e38"}),"\n",(0,s.jsx)(n.h3,{id:"52\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b",children:"5.2.\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u7684\u8bf7\u6c42\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"name: \u5fc5\u8981\u53c2\u6570\uff0c\u5b58\u50a8\u8fc7\u7a0b\u540d\u79f0"}),"\n",(0,s.jsx)(n.li,{children:"param: \u5fc5\u8981\u53c2\u6570\uff0c\u5b58\u50a8\u8fc7\u7a0b\u53c2\u6570"}),"\n",(0,s.jsx)(n.li,{children:"result_in_json_format: \u53ef\u9009\u53c2\u6570\uff0c\u8c03\u7528\u7ed3\u679c\u662f\u5426\u4ee5JSON\u683c\u5f0f\u8fd4\u56de"}),"\n",(0,s.jsx)(n.li,{children:"in_process: \u53ef\u9009\u53c2\u6570\uff0c\u672a\u6765\u652f\u6301"}),"\n",(0,s.jsx)(n.li,{children:"timeout: \u53ef\u9009\u53c2\u6570\uff0c\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u7684\u8d85\u65f6\u65f6\u95f4"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5C++\u4e3a\u4f8b\uff0c\u7528\u6237\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u7684\u65b9\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C++",children:'    LGraphRequest req;\n    lgraph::PluginRequest* pluginRequest = req.mutable_plugin_request();\n    pluginRequest->set_graph(graph);\n    pluginRequest->set_type(procedure_type == "CPP" ? lgraph::PluginRequest::CPP\n                                                    : lgraph::PluginRequest::PYTHON);\n    lgraph::CallPluginRequest *cpRequest = pluginRequest->mutable_call_plugin_request();\n    cpRequest->set_name(procedure_name);\n    cpRequest->set_in_process(in_process);\n    cpRequest->set_param(param);\n    cpRequest->set_timeout(procedure_time_out);\n    cpRequest->set_result_in_json_format(json_format);\n    LGraphResponse res;\n    cntl->Reset();\n    cntl->request_attachment().append(FLAGS_attachment);\n    req.set_client_version(server_version);\n    req.set_token(token);\n    LGraphRPCService_Stub stub(channel.get());\n    stub.HandleRequest(cntl.get(), &req, &res, nullptr);\n    if (cntl->Failed()) throw RpcConnectionException(cntl->ErrorText());\n    server_version = std::max(server_version, res.server_version());\n    if (res.error_code() != LGraphResponse::SUCCESS) throw RpcStatusException(res.error());\n    if (json_format) {\n        result = res.mutable_plugin_response()->mutable_call_plugin_response()->json_result();\n    } else {\n        result = res.mutable_plugin_response()->mutable_call_plugin_response()->reply();\n    }\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u7684\u54cd\u5e94\u4e3a\u4ee5\u4e0b\u4e24\u4e2a\u53c2\u6570\u4e4b\u4e00\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"reply: ByteString\u683c\u5f0f\u7684\u5b58\u50a8\u8fc7\u7a0b\u8c03\u7528\u7ed3\u679c"}),"\n",(0,s.jsx)(n.li,{children:"json_result: JSON\u683c\u5f0f\u7684\u5b58\u50a8\u8fc7\u7a0b\u8c03\u7528\u7ed3\u679c"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b",children:"5.3.\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b\u7684\u8bf7\u6c42\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"name: \u5fc5\u8981\u53c2\u6570\uff0c\u5b58\u50a8\u8fc7\u7a0b\u540d\u79f0"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5C++\u4e3a\u4f8b\uff0c\u7528\u6237\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b\u7684\u65b9\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C++",children:'    LGraphRequest req;\n    req.set_is_write_op(true);\n    lgraph::PluginRequest* pluginRequest = req.mutable_plugin_request();\n    pluginRequest->set_graph(graph);\n    pluginRequest->set_type(procedure_type == "CPP" ? lgraph::PluginRequest::CPP\n                                                    : lgraph::PluginRequest::PYTHON);\n    lgraph::DelPluginRequest* dpRequest = pluginRequest->mutable_del_plugin_request();\n    dpRequest->set_name(procedure_name);\n    cntl->Reset();\n    cntl->request_attachment().append(FLAGS_attachment);\n    req.set_client_version(server_version);\n    req.set_token(token);\n    LGraphRPCService_Stub stub(channel.get());\n    LGraphResponse res;\n    stub.HandleRequest(cntl.get(), &req, &res, nullptr);\n    if (cntl->Failed()) throw RpcConnectionException(cntl->ErrorText());\n    server_version = std::max(server_version, res.server_version());\n    if (res.error_code() != LGraphResponse::SUCCESS) throw RpcStatusException(res.error());\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b\u7684\u54cd\u5e94\u4e0d\u5305\u542b\u53c2\u6570\uff0c\u5982\u679c\u5220\u9664\u5931\u8d25\u5219\u629b\u51faBadInput\u5f02\u5e38"}),"\n",(0,s.jsx)(n.h3,{id:"54\u5217\u4e3e\u5b58\u50a8\u8fc7\u7a0b",children:"5.4.\u5217\u4e3e\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u4e3e\u5b58\u50a8\u8fc7\u7a0b\u8bf7\u6c42\u4e0d\u9700\u8981\u53c2\u6570\uff0c\u4ee5C++\u4e3a\u4f8b\uff0c\u7528\u6237\u5217\u4e3e\u5b58\u50a8\u8fc7\u7a0b\u7684\u65b9\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C++",children:'    LGraphRequest req;\n    req.set_is_write_op(false);\n    lgraph::PluginRequest* pluginRequest = req.mutable_plugin_request();\n    pluginRequest->set_graph(graph);\n    pluginRequest->set_type(procedure_type == "CPP" ? lgraph::PluginRequest::CPP\n                                                    : lgraph::PluginRequest::PYTHON);\n    pluginRequest->mutable_list_plugin_request();\n    cntl->Reset();\n    cntl->request_attachment().append(FLAGS_attachment);\n    req.set_client_version(server_version);\n    req.set_token(token);\n    LGraphRPCService_Stub stub(channel.get());\n    LGraphResponse res;\n    stub.HandleRequest(cntl.get(), &req, &res, nullptr);\n    if (cntl->Failed()) throw RpcConnectionException(cntl->ErrorText());\n    server_version = std::max(server_version, res.server_version());\n    if (res.error_code() != LGraphResponse::SUCCESS) throw RpcStatusException(res.error());\n    result = res.mutable_plugin_response()->mutable_list_plugin_response()->reply();\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u4e3e\u5b58\u50a8\u8fc7\u7a0b\u7684\u54cd\u5e94\u7684\u53c2\u6570\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"reply: JSON\u683c\u5f0f\u7684procedure\u5217\u8868"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(96540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);