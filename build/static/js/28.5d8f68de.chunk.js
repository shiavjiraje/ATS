(this.webpackJsonpATS=this.webpackJsonpATS||[]).push([[28],{672:function(e,a,t){"use strict";t.r(a);var l=t(18),n=t(0),r=t.n(n),c=t(162),m=t(163),s=t(107),o=t(255),u=t(256),b=t(257),i=t(258),E=t(259),p=t(6),d=t.n(p),g=t(77),v=t(13),y=t(299),N=t(300),O=t(303),j=t(208),S=t(100),f=t(129),h=()=>{var e=Object(v.c)(),a=Object(n.useState)([]),t=Object(l.a)(a,2),s=t[0],o=t[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),i=b[0],E=b[1],p=Object(n.useState)(""),d=Object(l.a)(p,2),g=d[0],h=d[1],C=Object(n.useState)(""),x=Object(l.a)(C,2),A=x[0],k=x[1],J=Object(n.useState)(""),q=Object(l.a)(J,2),D=q[0],w=q[1],M=Object(n.useState)(""),F=Object(l.a)(M,2),T=F[0],P=F[1],I=Object(n.useState)(""),R=Object(l.a)(I,2),B=R[0],G=R[1],U=Object(n.useState)(""),Y=Object(l.a)(U,2),V=Y[0],z=Y[1],H=Object(n.useState)(""),K=Object(l.a)(H,2),L=K[0],Q=K[1],W=Object(n.useState)(""),X=Object(l.a)(W,2),Z=X[0],$=X[1],_=Object(n.useState)(""),ee=Object(l.a)(_,2),ae=ee[0],te=ee[1],le=r.a.useState([{label:"January",value:"January"},{label:"February",value:"February"},{label:"March",value:"March"},{label:"April",value:"April"},{label:"May",value:"May"},{label:"June",value:"June"},{label:"July",value:"July"},{label:"August",value:"August"},{label:"September",value:"September"},{label:"October",value:"October"},{label:"November",value:"November"},{label:"December",value:"December"}]),ne=Object(l.a)(le,1)[0],re=Object(v.d)(e=>e.Client.clients||[]);return Object(n.useEffect)(()=>{e(Object(S.c)())},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onSubmit:a=>{a.preventDefault();var t={srmonth:s,srattrition:i,srbd:g,srclient:A,srtotgp:D,sractualstart:T,sravggpadded:B,srnettotgp:V,srstart:L,srnettotgpadded:Z,srtypeofemployement:ae};e(Object(f.c)(t))}},r.a.createElement(c.a,null,r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Select Month ",r.a.createElement("span",{className:"redspan"},"*")),r.a.createElement("select",{className:"form-control style-input",required:!0,name:"srmonth",id:"srmonth",onChange:e=>{o(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0,value:""},"Select"),ne.map(e=>r.a.createElement("option",{key:e.value,value:e.value},e.label))))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Attrition"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"srattrition",name:"srattrition",onChange:e=>{E(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Select Client ",r.a.createElement("span",{className:"redspan"},"*")),r.a.createElement("select",{className:"form-control style-input",required:!0,name:"srclient",id:"srclient",onChange:e=>{k(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0,value:""},"Select"),re.map(e=>r.a.createElement("option",{key:e.cid,value:e.cid},e.cname)))))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"BD "),r.a.createElement(j.a,{type:"text",required:!0,className:"style-input",id:"srbd",name:"srbd",onChange:e=>{h(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Total GP "),r.a.createElement(j.a,{type:"text",required:!0,className:"style-input",id:"srtotgp",name:"srtotgp",onChange:e=>{w(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Actual Start"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"sractualstart",name:"sractualstart",onChange:e=>{P(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Avg GP Added ",r.a.createElement("span",{className:"redspan"},"*")),r.a.createElement(j.a,{type:"text",required:!0,className:"style-input",id:"sravggpadded",name:"sravggpadded",onChange:e=>{G(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Net Total GP "),r.a.createElement(j.a,{type:"text",required:!0,className:"style-input",id:"srnettotgp",name:"srnettotgp",onChange:e=>{z(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Start "),r.a.createElement(j.a,{type:"date",required:!0,className:"style-input",id:"srstart",name:"srstart",onChange:e=>{Q(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Net Total GP Added "),r.a.createElement(j.a,{type:"text",className:"style-input",id:"srnettotgpadded",name:"srnettotgpadded",onChange:e=>{$(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Type Of Employement"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"srtypeofemployement",name:"srtypeofemployement",onChange:e=>{te(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:12},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"),r.a.createElement("button",{className:"btn btn-secondary ml-3"},"Cancel")))))},C=t(130),x=()=>{var e=Object(v.c)(),a=Object(n.useState)(""),t=Object(l.a)(a,2),s=t[0],o=t[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),i=b[0],E=b[1],p=Object(n.useState)(""),d=Object(l.a)(p,2),g=d[0],f=d[1],h=Object(n.useState)(""),x=Object(l.a)(h,2),A=x[0],k=x[1],J=Object(n.useState)(""),q=Object(l.a)(J,2),D=q[0],w=q[1],M=Object(n.useState)(""),F=Object(l.a)(M,2),T=F[0],P=F[1],I=Object(n.useState)(""),R=Object(l.a)(I,2),B=R[0],G=R[1],U=Object(n.useState)(""),Y=Object(l.a)(U,2),V=Y[0],z=Y[1],H=Object(n.useState)(""),K=Object(l.a)(H,2),L=K[0],Q=K[1],W=Object(n.useState)(""),X=Object(l.a)(W,2),Z=X[0],$=X[1],_=Object(n.useState)(""),ee=Object(l.a)(_,2),ae=ee[0],te=ee[1],le=Object(n.useState)(""),ne=Object(l.a)(le,2),re=ne[0],ce=ne[1],me=Object(n.useState)(""),se=Object(l.a)(me,2),oe=se[0],ue=se[1],be=Object(n.useState)(""),ie=Object(l.a)(be,2),Ee=ie[0],pe=ie[1],de=Object(n.useState)(""),ge=Object(l.a)(de,2),ve=ge[0],ye=ge[1],Ne=Object(n.useState)([]),Oe=Object(l.a)(Ne,2),je=Oe[0],Se=Oe[1],fe=Object(n.useState)(""),he=Object(l.a)(fe,2),Ce=he[0],xe=he[1],Ae=Object(n.useState)(""),ke=Object(l.a)(Ae,2),Je=ke[0],qe=ke[1],De=Object(v.d)(e=>e.Client.clients||[]);Object(n.useEffect)(()=>{e(Object(S.c)())},[]);var we=r.a.useState([{label:"January",value:"January"},{label:"February",value:"February"},{label:"March",value:"March"},{label:"April",value:"April"},{label:"May",value:"May"},{label:"June",value:"June"},{label:"July",value:"July"},{label:"August",value:"August"},{label:"September",value:"September"},{label:"October",value:"October"},{label:"November",value:"November"},{label:"December",value:"December"}]),Me=Object(l.a)(we,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onSubmit:a=>{a.preventDefault();var t={months:s,years:i,bd:g,join:A,client:D,position:T,passthrough:B,business:V,bulkdeal:L,submission:Z,poextend:ae,intreceived:re,totrevenue:oe,attrition:Ee,feedbackpending:ve,noshow:je,remark:Ce,offer:Je};e(Object(C.c)(t))}},r.a.createElement(c.a,null,r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Select Month ",r.a.createElement("span",{className:"redspan"},"*")),r.a.createElement("select",{className:"form-control style-input",required:!0,name:"months",id:"months",onChange:e=>{o(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0,value:""},"Select"),Me.map(e=>r.a.createElement("option",{key:e.value,value:e.value},e.label))))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Select Year ",r.a.createElement("span",{className:"redspan"},"*")),r.a.createElement("select",{className:"form-control style-input",required:!0,name:"years",id:"years",onChange:e=>{E(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0,value:""},"Select"),(()=>{var e=(new Date).getFullYear();return Array.from(new Array(50),(a,t)=>r.a.createElement("option",{key:t,value:e+t},e+t))})()))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"BD"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"bd",name:"bd",onChange:e=>{f(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Select Client ",r.a.createElement("span",{className:"redspan"},"*")),r.a.createElement("select",{className:"form-control style-input",required:!0,name:"client",id:"client",onChange:e=>{w(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0,value:""},"Select"),De.map(e=>r.a.createElement("option",{key:e.cid,value:e.cid},e.cname))))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Join"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"join",name:"join",onChange:e=>{k(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Open Position "),r.a.createElement(j.a,{type:"text",className:"style-input",id:"position",name:"position",onChange:e=>{P(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Passthrough"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"passthrough",name:"passthrough",onChange:e=>{G(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Business Recieved"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"business",name:"business",onChange:e=>{z(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Bulkdeal"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"bulkdeal",name:"bulkdeal",onChange:e=>{Q(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"No. Of Submission "),r.a.createElement(j.a,{type:"text",required:!0,className:"style-input",id:"submission",name:"submission",onChange:e=>{$(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"PO Extend "),r.a.createElement(j.a,{type:"text",className:"style-input",id:"poextend",name:"poextend",onChange:e=>{te(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Interview Recieved"),r.a.createElement(j.a,{type:"text",id:"intreceived",className:"style-input",name:"intreceived",onChange:e=>{ce(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Attrition Saved"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"attrition",name:"attrition",onChange:e=>{pe(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Feedback Pending"),r.a.createElement(j.a,{type:"text",id:"feedbackpending",className:"style-input",name:"feedbackpending",onChange:e=>{ye(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Total Revenue"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"totrevenue",name:"totrevenue",onChange:e=>{ue(e.target.value)}})))),r.a.createElement(c.a,{className:"mt-3"},r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"No Show"),r.a.createElement(j.a,{type:"text",id:"noshow",className:"style-input",name:"noshow",onChange:e=>{Se(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Remark"),r.a.createElement(j.a,{type:"text",className:"style-input",id:"remark",name:"remark",onChange:e=>{xe(e.target.value)}}))),r.a.createElement(m.a,{lg:4},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoNombre"},"Offer"),r.a.createElement(j.a,{type:"text",id:"offer",className:"style-input",name:"offer",onChange:e=>{qe(e.target.value)}})))),r.a.createElement(c.a,null,r.a.createElement(m.a,{lg:12},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"),r.a.createElement("button",{className:"btn btn-secondary ml-3"},"Cancel")))))},A=t(132),k=()=>{var e=Object(v.d)(e=>e.Client.clients||[]),a=Object(v.d)(e=>e.Auth.user||[]).Username,t=Object(n.useState)(""),s=Object(l.a)(t,2),o=s[0],u=s[1],b=Object(n.useState)(""),i=Object(l.a)(b,2),E=i[0],p=i[1],d=Object(n.useState)(""),g=Object(l.a)(d,2),j=g[0],f=g[1],h=Object(n.useState)(""),C=Object(l.a)(h,2),x=C[0],k=C[1],J=Object(v.c)();Object(n.useEffect)(()=>{J(Object(S.c)())},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onSubmit:e=>{e.preventDefault();var t={dt:o,client:E,poc:j,agenda:x,username:a};J(Object(A.b)(t))}},r.a.createElement(c.a,null,r.a.createElement(m.a,{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card p-5",style:{height:"600px"}},r.a.createElement("h5",{className:"text-uppercase  text-center"},"Create Team"),r.a.createElement(c.a,null,r.a.createElement(m.a,{lg:12},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Call Date"),r.a.createElement("input",{type:"date",name:"dt",className:"form-control",id:"dt",onChange:e=>{u(e.target.value)}}))),r.a.createElement(m.a,{lg:12},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Select Client"),r.a.createElement("select",{className:"form-control",name:"client",id:"client",onChange:e=>{p(e.target.value)}},r.a.createElement("option",{selected:!0,desabled:!0},"Select"),e.map(e=>r.a.createElement("option",{key:e.cid,value:e.cid},e.cname))))),r.a.createElement(m.a,{lg:12},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"POC"),r.a.createElement("input",{type:"text",name:"poc",className:"form-control",id:"poc",onChange:e=>{f(e.target.value)}}))),r.a.createElement(m.a,{lg:12},r.a.createElement(N.a,null,r.a.createElement(O.a,{for:"empleadoApellidos"},"Agenda"),r.a.createElement("input",{type:"text",name:"agenda",className:"form-control",id:"agenda",onChange:e=>{k(e.target.value)}})))),r.a.createElement(c.a,null,r.a.createElement(m.a,{lg:12},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("button",{className:"btn btn-secondary ml-3"},"Cancel"))))))))};a.default=e=>{var a=Object(n.useState)("1"),t=Object(l.a)(a,2),p=t[0],v=t[1],y=e=>{p!==e&&v(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:"page-title"},r.a.createElement(m.a,{md:6},r.a.createElement(g.a,{breadCrumbItems:[{label:"Salry Slip",path:"/salryslip",active:!0}]})),r.a.createElement(m.a,{md:6,className:"text-right"},r.a.createElement(s.a,{color:"primary"},r.a.createElement("i",{className:"uil uil-plus"}),"ADD ITEM"))),r.a.createElement(o.a,{tabs:!0,className:"requirement-tab pt-3 pb-3 nav nav-tabs row bg-white"},r.a.createElement(u.a,{className:"col-sm-4"},r.a.createElement(b.a,{className:d()({active:"1"===p}),onClick:()=>{y("1")}},"Upload Salary Sheet Arche Softronix")),r.a.createElement(u.a,{className:"col-sm-4"},r.a.createElement(b.a,{className:d()({active:"2"===p}),onClick:()=>{y("2")}},"Upload Salary Sheet Reyna")),r.a.createElement(u.a,{className:"col-sm-4"},r.a.createElement(b.a,{className:d()({active:"3"===p}),onClick:()=>{y("3")}},"View Salary Slip"))),r.a.createElement(i.a,{className:"req-tab-content",activeTab:p},r.a.createElement(E.a,{tabId:"1"},r.a.createElement(h,null)),r.a.createElement(E.a,{tabId:"2"},r.a.createElement(x,null)),r.a.createElement(E.a,{tabId:"3"},r.a.createElement(k,null))))}}}]);
//# sourceMappingURL=28.5d8f68de.chunk.js.map