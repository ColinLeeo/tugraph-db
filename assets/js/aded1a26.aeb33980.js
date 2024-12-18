"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[85269],{83743:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(74848),s=r(28453);const i={},a="Tugraph Running",d={id:"developer-manual/running/tugraph-running",title:"Tugraph Running",description:"This document describes the operation mode of the TuGraph service, starting, stopping, and restarting operations.And TuGraph's service configuration parameters, configuration file format, and command-line configuration parameters.",source:"@site/versions/version-3.5.1/en-US/source/5.developer-manual/2.running/2.tugraph-running.md",sourceDirName:"5.developer-manual/2.running",slug:"/developer-manual/running/tugraph-running",permalink:"/tugraph-db/en/3.5.1/developer-manual/running/tugraph-running",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compile",permalink:"/tugraph-db/en/3.5.1/developer-manual/running/compile"},next:{title:"High Availability mode",permalink:"/tugraph-db/en/3.5.1/developer-manual/running/high-availability-mode"}},l={},o=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2.The operation mode",id:"2the-operation-mode",level:2},{value:"2.1.Running a normal process",id:"21running-a-normal-process",level:3},{value:"2.2.Run process daemon mode",id:"22run-process-daemon-mode",level:3},{value:"3.Service operation",id:"3service-operation",level:2},{value:"3.1.Start the service",id:"31start-the-service",level:3},{value:"3.2.Stop the service",id:"32stop-the-service",level:3},{value:"3.3.Restart the service",id:"33restart-the-service",level:3},{value:"4.Service configuration",id:"4service-configuration",level:2},{value:"4.1.Configuration parameters",id:"41configuration-parameters",level:3},{value:"4.2.Server configuration file",id:"42server-configuration-file",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",nobr:"nobr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tugraph-running",children:"Tugraph Running"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This document describes the operation mode of the TuGraph service, starting, stopping, and restarting operations.And TuGraph's service configuration parameters, configuration file format, and command-line configuration parameters."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-prerequisites",children:"1. Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["TuGraph has the following prerequisites for its execution: a correct ",(0,t.jsx)(n.a,{href:"/tugraph-db/en/3.5.1/developer-manual/installation/environment",children:"installation of TuGraph"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'TuGraph execution requires ensuring that the library file "liblgraph.so" is located in the environment variable LD_LIBRARY_PATH.'}),"\n",(0,t.jsx)(n.p,{children:"The user running the TuGraph process does not need superuser privileges. However, they need read permissions for the configuration file (usually lgraph.json) and any files referenced within it. Additionally, they should have write permissions for data folders, log files, etc."}),"\n",(0,t.jsx)(n.h2,{id:"2the-operation-mode",children:"2.The operation mode"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph can be started as a normal process in the foreground or as a daemon in the background."}),"\n",(0,t.jsx)(n.p,{children:"When running as a normal process, TuGraph can print logs directly to the terminal, which is handy when debugging server configurations. However, because the foreground process is terminated after the terminal exits, the user must ensure that the terminal remains open while the TuGraph server is running. In daemon mode, on the other hand, the TuGraph server can continue to run even if the terminal that started it exits. If TuGraph needs to run for a long time, it is recommended to start the TuGraph server in daemon mode."}),"\n",(0,t.jsx)(n.h3,{id:"21running-a-normal-process",children:"2.1.Running a normal process"}),"\n",(0,t.jsx)(n.p,{children:"The 'lgraph_server -d run' command runs TuGraph as a normal process. Normal processes depend on the command line terminal, so when the terminal ends, the TuGraph process is automatically terminated. Normal process mode with '--log_dir \"\"' can output the process log directly to the terminal, so it is easier to debug."}),"\n",(0,t.jsx)(n.p,{children:"Start the command\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ ./lgraph_server -c lgraph_standalone.json --log_dir ""\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example of running output in normal mode\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"20200508120723.039: **********************************************************************\n20200508120723.039: *                  TuGraph Graph Database v3.1.0                     *\n20200508120723.040: *                                                                    *\n20200508120723.041: *        Copyright(C) 2018 Ant Group. All rights reserved.           *\n20200508120723.041: *                                                                    *\n20200508120723.044: *             Licensed host: hostname      threads:0, ha:0           *\n20200508120723.044: **********************************************************************\n20200508120723.044: Server is configured with the following parameters:\n20200508120723.045:   data directory:    ./lgraph_db\n20200508120723.045:   license:           ./fma.lic\n20200508120723.046:   enable ha:          0\n20200508120723.046:   async:              0\n20200508120723.047:   host:               127.0.0.1\n20200508120723.047:   REST port:          7071\n20200508120723.048:   RPC port:           9091\n20200508120723.048:   enable rpc:         0\n20200508120723.051:   optimistic txn:     0\n20200508120723.059:   verbose:            1\n20200508120723.074:   log_dir:\n20200508120723.074:   ssl_auth:           0\n20200508120723.075:   resource dir:       ./resource\n\n20200508120723.077: Loading DB state from disk\n20200508120723.110: [RestServer] Listening for REST on port 7090\n20200508120723.110: [LGraphService] Server started.\n"})}),"\n",(0,t.jsx)(n.p,{children:"In normal process mode, the user can prematurely terminate the TuGraph process by pressing 'CTRL+C'."}),"\n",(0,t.jsx)(n.h3,{id:"22run-process-daemon-mode",children:"2.2.Run process daemon mode"}),"\n",(0,t.jsx)(n.p,{children:"Start the command\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ ./lgraph_server -d start -c lgraph_daemon.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example output from running in daemon mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Starting lgraph...\nThe service process is started at pid 12109.\n"})}),"\n",(0,t.jsx)(n.p,{children:"The TuGraph server process started by this command is a daemon process that loads the relevant configuration from the file 'lgraph_daemon.json'. After the server starts, it will start printing logs in a log file that can then be used to determine the status of the server."}),"\n",(0,t.jsx)(n.h2,{id:"3service-operation",children:"3.Service operation"}),"\n",(0,t.jsx)(n.h3,{id:"31start-the-service",children:"3.1.Start the service"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph needs to be started using the 'lgraph_server -d start' command line. The following is an example of the command to start TuGraph:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ ./lgraph_server -d start -c lgraph_daemon.json\nStarting lgraph...\nThe service process is started at pid 12109.\n"})}),"\n",(0,t.jsx)(n.p,{children:"The TuGraph server process started by this command is a daemon process that loads the relevant configuration from the file 'lgraph_daemon.json'. After the server starts, it will start printing logs in a log file that can then be used to determine the status of the server."}),"\n",(0,t.jsx)(n.h3,{id:"32stop-the-service",children:"3.2.Stop the service"}),"\n",(0,t.jsx)(n.p,{children:"You can stop the TuGraph daemon using the 'kill' command and the 'lgraph_server -d stop' command. Since it is possible to run multiple TuGraph server processes on the same computer, we distinguish between the different server processes using the '.pid 'file, which is written to the working directory where the process was started. Therefore, you need to run the command 'lgraph_server-d stop' in the same working directory to stop the correct server process."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"user@host:~/tugraph$ ./lgraph_server -d start -c lgraph_standalone.json\n20200508122306.378: Starting lgraph...\n20200508122306.379: The service process is started at pid 93.\n\nuser@host:~/tugraph$ cat ./lgraph.pid\n93\n\nuser@host:~/tugraph$ ./lgraph_server -d stop -c lgraph_standalone.json\n20200508122334.857: Stopping lgraph...\n20200508122334.857: Process stopped.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"33restart-the-service",children:"3.3.Restart the service"}),"\n",(0,t.jsx)(n.p,{children:"Users can also restart the TuGraph service by 'lgraph_server -d restart' :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ ./lgraph_server -d restart\nStopping lgraph...\nProcess stopped.\nStarting lgraph...\nThe service process is started at pid 20899.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4service-configuration",children:"4.Service configuration"}),"\n",(0,t.jsx)(n.p,{children:"The TuGraph server loads configurations from the configuration file and command line options at startup, and if different values are specified for the same option in the configuration file and command line, the value specified in the command line will be used preferentially."}),"\n",(0,t.jsx)(n.h3,{id:"41configuration-parameters",children:"4.1.Configuration parameters"}),"\n",(0,t.jsx)(n.p,{children:"The parameters and their types are described as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter names"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.nobr,{children:"Type"})})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Instructions"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"license"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Path of the authorization file. The default value is /var/lib/lgraph/fma.lic."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"directory"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Directory where data files are stored. If the directory does not exist, it is automatically created. The default directory is /var/lib/lgraph/data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"async"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to use asynchronous mode. Asynchronous mode can reduce disk I/O overhead, but data can be lost in extreme cases such as machine power outages. The default value is false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"host"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"The IP address on which the REST server listens. The default address is 0.0.0.0."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"port"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"The Port on which the REST server listens. The default port is 7070."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enable_rpc"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to use RPC services. The default value is 0."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rpc_port"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"Port used by RPC and HA services. The default port number is 9090."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enable_ha"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to enable the HA mode. The default value is false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ha_log_dir"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"HA log directory. The HA mode needs to be enabled. The default value is null."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"master"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Initialize a node based on host1:port1 and host2:port2. The default value is null."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"verbose"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"Detail level of log output information. The value can be 0,1,2. The larger the value, the more detailed the output information. The default value is 1."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"log_dir"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Directory where log files are stored. The default directory is /var/log/lgraph/."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ssl_auth"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to use SSL authentication. When HTTPS is enabled, only the HTTPS service is enabled on the REST server. The default value is false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"web"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"The directory where the web files (including the visual part) are located. The default directory is/usr/local/share/lgraph/resource."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server_cert"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"certificate file path used by the server when SSL authentication is enabled. The default path is/usr/local/etc/lgraph/server - cert.pem."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server_key"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"The public key file used by the server when SSL authentication is enabled. The default directory is/usr/local/etc/lgraph/server - key.pem\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enable_audit_log"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to enable audit logs. The default value is false."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"audit_log_expire"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"When audit logs are enabled, the validity period (hours) of audit logs is automatically cleared upon timeout. If the value is 0, the logs are not cleared. The default value is 0."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"audit_log_dir"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Specifies the directory for storing log files when audit logs are enabled. The default directory is $directory/",(0,t.jsx)(n.em,{children:"audit_log"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"load_plugins"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Import all stored procedures when starting the service. The default value is 1."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"optimistic_txn"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Enable optimistic multithreaded write transactions for Cypher. The default is 0."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"disable_auth"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Disable REST authentication. The default is 0."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snapshot_interval"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"Snapshot interval (in seconds) The default value is 86400."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"heartbeat_interval_ms"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"Heartbeat interval in milliseconds. The default value is 1000."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"heartbeat_failure_duration_ms"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"The heartbeat times out and the interval (in milliseconds) between nodes going offline. The default value is 60000."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"node_dead_duration_ms"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"The interval (in milliseconds) at which a node is considered completely dead and removed from the list. The default value is 120000."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enable_ip_check"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Allow IP address whitelists. The default value is 0\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"idle_seconds"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"The maximum number of seconds a child process can be idle. The default value is 600."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enable_backup_log"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to enable backup logging. The default value is 0."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"backup_log_dir"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"The directory where backup files are stored. The default value is null."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snapshot_dir"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Directory where snapshot files are stored. The default value is null."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"thread_limit"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"The maximum number of threads that can be used simultaneously. The default value is 0, which means that no restriction is imposed. The license file prevails."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"unlimited_token"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to set the link token to be infinite. The default value is 0 and the validity period is 24 hours."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"help"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Print the help message. The default value is 0."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"42server-configuration-file",children:"4.2.Server configuration file"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph's configuration file is stored in JSON format. It is recommended that most configuration be stored in configuration files and that some configuration parameters be modified only temporarily using command-line options when needed."}),"\n",(0,t.jsx)(n.p,{children:"A typical configuration file looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "directory": "/var/lib/lgraph/data",\n  "license": "/var/lib/lgraph/fma.lic",\n\n  "port": 7090,\n  "rpc_port": 9090,\n  "enable_ha": false,\n\n  "verbose": 1,\n  "log_dir": "/var/log/lgraph/",\n\n  "ssl_auth": false,\n  "server_key": "/usr/local/etc/lgraph/server-key.pem",\n  "server_cert": "/usr/local/etc/lgraph/server-cert.pem"\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);