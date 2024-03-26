"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[186],{6362:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>h,default:()=>x,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var s=l(4848),r=l(8453),c=l(4007),d=l(1090),i=l(8811);const a={},h="\u4e00\u62ec\u914d\u4fe1\uff08Bulk\uff09\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9",p={id:"php/bulk",title:"\u4e00\u62ec\u914d\u4fe1\uff08Bulk\uff09\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9",description:"\u8907\u6570\u306e\u5b9b\u5148\u306b\u5bfe\u3057\u3066\u4e00\u62ec\u914d\u4fe1\u3092\u884c\u3046\u969b\u306b\u306fBulk\u30af\u30e9\u30b9\u3092\u5229\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/php/2_bulk.mdx",sourceDirName:"php",slug:"/php/bulk",permalink:"/docs/docs/php/bulk",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/2_bulk.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5373\u6642\u914d\u4fe1\uff08Transaction\uff09\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9",permalink:"/docs/docs/php/transaction"},next:{title:"\u5373\u6642\u914d\u4fe1\u30fb\u4e00\u62ec\u914d\u4fe1\u3092\u517c\u306d\u5099\u3048\u305fMail\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9",permalink:"/docs/docs/php/mail"}},t={},o=[{value:"\u5229\u7528\u7528\u9014",id:"\u5229\u7528\u7528\u9014",level:2},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"Bulk\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u4f5c\u6210\u3068\u8a2d\u5b9a",id:"bulk\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u4f5c\u6210\u3068\u8a2d\u5b9a",level:3},{value:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b",id:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b",level:4},{value:"\u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b",id:"\u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b",level:4},{value:"\u4e00\u5ea6\u4fdd\u5b58\u3059\u308b",id:"\u4e00\u5ea6\u4fdd\u5b58\u3059\u308b",level:3},{value:"\u5b9b\u5148\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u5b9b\u5148\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"1. \u30b3\u30fc\u30c9\u3067\u6307\u5b9a\u3059\u308b",id:"1-\u30b3\u30fc\u30c9\u3067\u6307\u5b9a\u3059\u308b",level:4},{value:"2. CSV\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",id:"2-csv\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",level:4},{value:"\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b",id:"\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b",level:3},{value:"\u5373\u6642\u914d\u4fe1\u3059\u308b",id:"\u5373\u6642\u914d\u4fe1\u3059\u308b",level:4},{value:"\u914d\u4fe1\u4e88\u7d04\u3059\u308b",id:"\u914d\u4fe1\u4e88\u7d04\u3059\u308b",level:4},{value:"\u914d\u4fe1\u72b6\u6cc1\u3092\u77e5\u308b",id:"\u914d\u4fe1\u72b6\u6cc1\u3092\u77e5\u308b",level:3},{value:"\u914d\u4fe1\u3092\u505c\u6b62\u3059\u308b",id:"\u914d\u4fe1\u3092\u505c\u6b62\u3059\u308b",level:3},{value:"\u914d\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b",id:"\u914d\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4e00\u62ec\u914d\u4fe1bulk\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9",children:"\u4e00\u62ec\u914d\u4fe1\uff08Bulk\uff09\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9"}),"\n",(0,s.jsx)(n.p,{children:"\u8907\u6570\u306e\u5b9b\u5148\u306b\u5bfe\u3057\u3066\u4e00\u62ec\u914d\u4fe1\u3092\u884c\u3046\u969b\u306b\u306fBulk\u30af\u30e9\u30b9\u3092\u5229\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5229\u7528\u7528\u9014",children:"\u5229\u7528\u7528\u9014"}),"\n",(0,s.jsx)(n.p,{children:"Bulk\u30af\u30e9\u30b9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7528\u9014\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30e1\u30fc\u30eb\u30de\u30ac\u30b8\u30f3\u306e\u914d\u4fe1"}),"\n",(0,s.jsx)(n.li,{children:"\u30cb\u30e5\u30fc\u30b9\u30ec\u30bf\u30fc\u306e\u914d\u4fe1"}),"\n",(0,s.jsx)(n.li,{children:"\u305d\u306e\u4ed6\u3001\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u7cfb\u30e1\u30fc\u30eb\u306e\u914d\u4fe1"}),"\n",(0,s.jsx)(n.li,{children:"\u9867\u5ba2\u5411\u3051\u306e\u4e00\u6589\u914d\u4fe1"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u3044\u65b9",children:"\u4f7f\u3044\u65b9"}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"bulk\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u4f5c\u6210\u3068\u8a2d\u5b9a",children:"Bulk\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u4f5c\u6210\u3068\u8a2d\u5b9a"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u62ec\u914d\u4fe1\u3067\u306f ",(0,s.jsx)(n.code,{children:"Blastengine\\Bulk"})," \u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u3001\u7d9a\u3051\u3066\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'// \u30d0\u30eb\u30af\uff08\u4e00\u62ec\u767a\u9001\uff09\u30e1\u30fc\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\n$bulk = new Blastengine\\Bulk();\n// \u4ef6\u540d\u306e\u8a2d\u5b9a\n$bulk->subject("\u30e1\u30fc\u30eb\u306e\u4ef6\u540d");\n// \u30c6\u30ad\u30b9\u30c8\u672c\u6587\u306e\u8a2d\u5b9a\u3002 __name__ \u306f\u7f6e\u304d\u63db\u3048\u3089\u308c\u308b\u6587\u5b57\u5217\n$bulk->text_part("\u30c6\u30ad\u30b9\u30c8\u672c\u6587 __name__");\n// \u9001\u4fe1\u5143\u306e\u8a2d\u5b9a\u30022\u3064\u76ee\u306e\u5f15\u6570\uff08\u540d\u524d\uff09\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\n$bulk->fromAddress("info@example.jp", "\u7ba1\u7406\u8005");\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b",children:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306f attachment \u30e1\u30bd\u30c3\u30c9\u3067\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u8907\u6570\u306e\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001\u8907\u6570\u56de\u547c\u3073\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'// \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u5834\u5408\n$bulk->attachment("./test.py");\n$bulk->attachment("./image.png");\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b",children:"\u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u30e1\u30fc\u30eb\u30de\u30ac\u30b8\u30f3\u306a\u3069\u306e\u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af ",(0,s.jsx)(n.code,{children:"Unsubscribe-List"})," \u30d8\u30c3\u30c0\u30fc\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001",(0,s.jsx)(n.code,{children:"unsubscribe"})," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'// \u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b\uff08URL\u3001Email\u4e21\u65b9\u3042\u308a\uff09\n$bulk->unsubscribe(array("url" => "https://example.com/unsubscribe/__hash__", "email" => "unsubscrie+__hash__@example.com"));\n// \u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b\uff08URL\u306e\u307f\uff09\n$bulk->unsubscribe(array("url" => "http://example.com/unsubscribe/__hash__"));\n// \u8cfc\u8aad\u89e3\u9664\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b\uff08Email\u306e\u307f\uff09\n$bulk->unsubscribe(array("email" => "unsubscrie+__hash__@example.com"));\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u6642\u306e ",(0,s.jsx)(n.code,{children:"__hash__"})," \u306f\u3001 ",(0,s.jsx)(n.code,{children:"to"})," \u30e1\u30bd\u30c3\u30c9\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'$bulk->to("user1@example.com", array("hash" => "12345", "name" => "User 1"));\n$bulk->to("user2@example.com", array("hash" => "67890", "name" => "User 2"));\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e00\u5ea6\u4fdd\u5b58\u3059\u308b",children:"\u4e00\u5ea6\u4fdd\u5b58\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30e1\u30fc\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u3067\u304d\u305f\u6bb5\u968e\u3067\u4e00\u5ea6\u4fdd\u5b58\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$bulk->save();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9b\u5148\u3092\u8a2d\u5b9a\u3059\u308b",children:"\u5b9b\u5148\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u6b21\u306b\u5b9b\u5148\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u5b9b\u5148\u306e\u6307\u5b9a\u65b9\u6cd5\u306f\u3001\u4ee5\u4e0b\u306e2\u3064\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"1-\u30b3\u30fc\u30c9\u3067\u6307\u5b9a\u3059\u308b",children:"1. \u30b3\u30fc\u30c9\u3067\u6307\u5b9a\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u6642\u3001\u7f6e\u304d\u63db\u3048\u6587\u5b57\u5217\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'$bulk->to("user1@example.com", array("__name__" => "User1"));\n$bulk->to("user2@example.com", array("__name__" => "User2"));\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5b9b\u5148\u3092\u8a2d\u5b9a\u3057\u305f\u3089\u3001\u4fdd\u5b58\u3092\u884c\u3044\u307e\u3059\u3002\u4fdd\u5b58\u3059\u308b\u3068\u5b9b\u5148\u306e\u30ea\u30b9\u30c8\u306f\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$bulk->update();\n"})}),"\n",(0,s.jsx)(n.h4,{id:"2-csv\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",children:"2. CSV\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["CSV\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u3067\u5b9b\u5148\u306e\u30ea\u30b9\u30c8\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u3001CSV\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u4fbf\u5229\u3067\u3059\u3002",(0,s.jsx)(n.a,{href:"https://blastengine.jp/documents/example.csv",children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3053\u3061\u3089\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),"\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:"email,__prop1__,__prop2__,__prop3__\ntest@example.jp,\u30c6\u30b9\u30c8,\u30c6\u30b9\u30c8\u592a\u90ce,20200101\nsample1@example.com,\u30b5\u30f3\u30d7\u30eb,\u30b5\u30f3\u30d7\u30eb\u6b21\u90ce,20210101\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u3092Bulk\u30af\u30e9\u30b9\u306e ",(0,s.jsx)(n.code,{children:"import"})," \u30e1\u30bd\u30c3\u30c9\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3068Job\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'job = $bulk->import("./example.csv");\nvar_dump(job.job_id);\n// => 50\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306eCSV\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306f\u975e\u540c\u671f\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u5b8c\u4e86\u307e\u3067\u5f85\u3061\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"while ($job->finished() == false) {\n\tsleep(1);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u4e86\u3057\u305f\u3089\u3001\u53d6\u308a\u8fbc\u307f\u30a8\u30e9\u30fc\u304c\u3042\u3063\u305f\u304b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"var_dump(job.total_count);\n// => 200\nvar_dump(job.success_count);\n// => 198\nvar_dump(job.failed_count);\n// => 2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3082\u3057\u30a8\u30e9\u30fc\u304c\u3042\u308c\u3070\u3001\u305d\u306e\u539f\u56e0\u3092\u8a18\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u5185\u5bb9\u306fZip\u30b3\u30f3\u30c6\u30f3\u30c4\u306a\u306e\u3067\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u5148\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u306f ",(0,s.jsx)(n.code,{children:".zip"})," \u306b\u3057\u3066\u304a\u304f\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"if ($job->error) {\n\t// \u30a8\u30e9\u30fc\u304c\u3042\u308b\u5834\u5408\n\t$report = $job->error_report();\n\tvar_dump($report);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:'"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8","email","__prop1__","__prop2__","__prop3__"\n"[email: [sample1@example: \u7121\u52b9\u306aE\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5f62\u5f0f\u3067\u3059\u3002]]","sample1@example","\u30b5\u30f3\u30d7\u30eb","\u30b5\u30f3\u30d7\u30eb\u6b21\u90ce","20210101"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b",children:"\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u9001\u4fe1\u306f ",(0,s.jsx)(n.code,{children:"send"})," \u30e1\u30bd\u30c3\u30c9\u306b\u306a\u308a\u307e\u3059\u3002\u8fd4\u5024\u306f\u30c7\u30ea\u30d0\u30ea\u30fcID\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u30c7\u30ea\u30d0\u30ea\u30fcID\u3067\u3001\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u72b6\u6cc1\u3084\u914d\u4fe1\u505c\u6b62\u306a\u3069\u3092\u884c\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u5373\u6642\u914d\u4fe1\u3059\u308b",children:"\u5373\u6642\u914d\u4fe1\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"send"})," \u30e1\u30bd\u30c3\u30c9\u3092\u5f15\u6570\u306a\u3057\u3067\u5b9f\u884c\u3059\u308c\u3070\u3001\u30e1\u30fc\u30eb\u306f\u5373\u6642\u914d\u4fe1\u6e96\u5099\u306b\u5165\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"try {\n\t$bulk->send();\n} catch (\\Exception $e) {\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u914d\u4fe1\u4e88\u7d04\u3059\u308b",children:"\u914d\u4fe1\u4e88\u7d04\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u914d\u4fe1\u3092\u4e88\u7d04\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,s.jsx)(n.code,{children:"send"})," \u30e1\u30bd\u30c3\u30c9\u306b\u3066\u914d\u4fe1\u65e5\u6642\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4ee5\u4e0b\u306f10\u5206\u5f8c\u306b\u914d\u4fe1\u3059\u308b\u4f8b\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'$date = date("c", strtotime("+10 minutes"));\n$bulk->send(new \\DateTime($date));\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u4fe1\u72b6\u6cc1\u3092\u77e5\u308b",children:"\u914d\u4fe1\u72b6\u6cc1\u3092\u77e5\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u3082\u3057\u914d\u4fe1\u72b6\u6cc1\u304c\u77e5\u308a\u305f\u3044\u5834\u5408\u306b\u306f ",(0,s.jsx)(n.code,{children:"get"})," \u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u3067\u30e1\u30fc\u30eb\u306e\u914d\u4fe1\u72b6\u6cc1\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u3059\u3067\u306b\u914d\u4fe1\u4e88\u7d04\u306b\u306a\u3063\u3066\u3044\u308b\u3068 ",(0,s.jsx)(n.code,{children:"RESERVE"})," \u3068\u3044\u3063\u305f\u6587\u5b57\u5217\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$bulk->get();\nvar_dump($bulk->status);\n// => RESERVE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u4fe1\u3092\u505c\u6b62\u3059\u308b",children:"\u914d\u4fe1\u3092\u505c\u6b62\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u3082\u3057\u914d\u4fe1\u3092\u505c\u6b62\u3057\u305f\u3044\u5834\u5408\u306b\u306f ",(0,s.jsx)(n.code,{children:"delete"})," \u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u3067\u8a72\u5f53\u30e1\u30fc\u30eb\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$bulk->delete();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b",children:"\u914d\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u914d\u4fe1\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u3068\u3001 ",(0,s.jsx)(n.code,{children:"RESERVE"})," \u304b\u3089 ",(0,s.jsx)(n.code,{children:"EDIT"})," \u306b\u623b\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$bulk->cancel();\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8811:(e,n,l)=>{l.d(n,{Ay:()=>d});var s=l(4848),r=l(8453);function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u30a4\u30f3\u30dd\u30fc\u30c8",children:"\u30a4\u30f3\u30dd\u30fc\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"autoloader\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"require __DIR__ . '/vendor/autoload.php';\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1090:(e,n,l)=>{l.d(n,{Ay:()=>d});var s=l(4848),r=l(8453);function c(e){const n={br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"sdk\u306e\u521d\u671f\u5316",children:"SDK\u306e\u521d\u671f\u5316"}),"\n",(0,s.jsxs)(n.p,{children:["Blastengine\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002",(0,s.jsx)(n.code,{children:"USER_NAME"})," \u3068 ",(0,s.jsx)(n.code,{children:"API_KEY"})," \u306f\u3001blastengine\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"// \u521d\u671f\u5316\nBlastengine\\Client::initialize('USER_NAME', 'API_KEY');\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["USER_NAME",(0,s.jsx)(n.br,{}),"\n","blastengine\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u305f\u3081\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"API_KEY\nblastengine\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u304b\u3089\u53d6\u5f97\u3067\u304d\u308bAPI\u30ad\u30fc\u3067\u3059\u3002"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4007:(e,n,l)=>{l.d(n,{Ay:()=>d});var s=l(4848),r=l(8453);function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"blastengine-php-sdk\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"blastengine PHP SDK\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,s.jsx)(n.p,{children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306fcomposer\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"composer install blastengine/blastengine\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>i});var s=l(6540);const r={},c=s.createContext(r);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);