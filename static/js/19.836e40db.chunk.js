(this.webpackJsonpATS=this.webpackJsonpATS||[]).push([[19],{616:function(e,a,t){"use strict";function l(e,a,t,l,r,n,c){try{var s=e[n](c),m=s.value}catch(i){return void t(i)}s.done?a(m):Promise.resolve(m).then(l,r)}function r(e){return function(){var a=this,t=arguments;return new Promise((function(r,n){var c=e.apply(a,t);function s(e){l(c,r,n,s,m,"next",e)}function m(e){l(c,r,n,s,m,"throw",e)}s(void 0)}))}}t.d(a,"a",(function(){return r}))},647:function(e,a,t){"use strict";t.r(a);var l=t(10),r=t(0),n=t.n(r),c=t(155),s=t(156),m=t(100),i=t(255),o=t(256),d=t(257),u=t(279),E=t(280),p=t(5),b=t.n(p),v=t(58),N=t(12),g=t(197),x=t(19),F=t.n(x),P=t(15),f=t.n(P),h=t(20),S=t.n(h),O=(t(34),t(51)),y=[{dataField:"id",order:"asc"}],j=({options:e,currSizePerPage:a,onSizePerPageChange:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"d-inline mr-1"},"Show"),n.a.createElement(g.a,{type:"select",name:"select",id:"no-entries",className:"custom-select custom-select-sm d-inline col-2",defaultValue:a,onChange:e=>t(e.target.value)},e.map((e,a)=>n.a.createElement("option",{key:a},e.text))),n.a.createElement("label",{className:"d-inline ml-1"},"Entry")),w=e=>{var a=P.Search.SearchBar,t=Object(r.useState)([]),m=Object(l.a)(t,2),i=m[0],o=m[1],d={onDoubleClick:e=>{alert(),o(a=>[...a,e]),console.log("rowdata",i)}},u=()=>n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"}));return n.a.createElement(f.a,{bootstrap4:!0,keyField:"ROW_NUMBER",data:e.records,columns:e.columns,search:!0},e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,{md:6,className:""},n.a.createElement(a,e.searchProps))),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(s.a,{md:3,className:""},n.a.createElement("input",{type:"date",className:"form-control style-input"})),n.a.createElement(s.a,{md:3,className:""},n.a.createElement("input",{type:"date",className:"form-control style-input"})),n.a.createElement(s.a,{md:3,className:""},n.a.createElement("button",{className:"btn btn-primary"},"Search"))),n.a.createElement(F.a,Object.assign({},e.baseProps,{bordered:!1,defaultSorted:y,rowEvents:d,noDataIndication:()=>n.a.createElement(u,null),pagination:S()({sizePerPage:10,sizePerPageRenderer:j,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"Todos",value:e.records?e.records.length:0}]})}))))},C=()=>{var e=Object(N.c)(),a=Object(N.d)(e=>e.Report.revenureport);Object(r.useEffect)(()=>{e(Object(O.d)())},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(w,{records:a,columns:[{dataField:"id",text:"ID",hidden:!0},{dataField:"Name",text:"Name."},{dataField:"Client",text:"Client",sort:!0},{dataField:"Location",text:"Location"},{dataField:"Skill",text:"Skill"},{dataField:"Type",text:"Type"},{dataField:"CTC",text:"CTC"},{dataField:"DR",text:"DR"},{dataField:"PR",text:"PR"},{dataField:"GP",text:"GP"},{dataField:"GPM",text:"GPM"},{dataField:"Recruiter",text:"Recruiter"}]}))))},k=t(45),R=[{dataField:"id",order:"asc"}],z=({options:e,currSizePerPage:a,onSizePerPageChange:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"d-inline mr-1"},"Show"),n.a.createElement(g.a,{type:"select",name:"select",id:"no-entries",className:"custom-select custom-select-sm d-inline col-2",defaultValue:a,onChange:e=>t(e.target.value)},e.map((e,a)=>n.a.createElement("option",{key:a},e.text))),n.a.createElement("label",{className:"d-inline ml-1"},"Entry")),D=e=>{var a=P.Search.SearchBar,t=Object(r.useState)([]),m=Object(l.a)(t,2),i=m[0],o=m[1],d={onDoubleClick:e=>{alert(),o(a=>[...a,e]),console.log("rowdata",i)}},u=()=>n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"}));return n.a.createElement(f.a,{bootstrap4:!0,keyField:"ROW_NUMBER",data:e.records,columns:e.columns,search:!0},e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,{md:6,className:""},n.a.createElement(a,e.searchProps))),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(s.a,{md:3,className:""},n.a.createElement("select",{className:"form-control style-input"},n.a.createElement("option",{selected:!0},"Select Name Here"))),n.a.createElement(s.a,{md:3,className:""},n.a.createElement("input",{type:"date",className:"form-control style-input"})),n.a.createElement(s.a,{md:3,className:""},n.a.createElement("input",{type:"date",className:"form-control style-input"})),n.a.createElement(s.a,{md:3,className:""},n.a.createElement("button",{className:"btn btn-primary"},"Search"))),n.a.createElement(F.a,Object.assign({},e.baseProps,{bordered:!1,defaultSorted:R,rowEvents:d,noDataIndication:()=>n.a.createElement(u,null),pagination:S()({sizePerPage:10,sizePerPageRenderer:z,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"Todos",value:e.records?e.records.length:0}]})}))))},I=()=>{var e=Object(N.c)(),a=Object(N.d)(e=>e.Users.users);Object(r.useEffect)(()=>{e(Object(k.b)())},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(D,{records:a,columns:[{dataField:"id",text:"ID",hidden:!0},{dataField:"ECode",text:"Name."},{dataField:"EFullname",text:"Submission",sort:!0},{dataField:"ECompany_Name",text:"Interview"},{dataField:"EDesignation",text:"Offer"},{dataField:"ELocation",text:"Start"}]}))))},T=[{dataField:"id",order:"asc"}],B=({options:e,currSizePerPage:a,onSizePerPageChange:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"d-inline mr-1"},"Show"),n.a.createElement(g.a,{type:"select",name:"select",id:"no-entries",className:"custom-select custom-select-sm d-inline col-2",defaultValue:a,onChange:e=>t(e.target.value)},e.map((e,a)=>n.a.createElement("option",{key:a},e.text))),n.a.createElement("label",{className:"d-inline ml-1"},"Entry")),L=e=>{var a=P.Search.SearchBar,t=Object(r.useState)([]),m=Object(l.a)(t,2),i=m[0],o=m[1],d={onDoubleClick:e=>{alert(),o(a=>[...a,e]),console.log("rowdata",i)}},u=()=>n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"}));return n.a.createElement(f.a,{bootstrap4:!0,keyField:"ROW_NUMBER",data:e.records,columns:e.columns,search:!0},e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,{md:6,className:""},n.a.createElement(a,e.searchProps))),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(s.a,{md:3,className:""},n.a.createElement("input",{type:"date",className:"form-control style-input"})),n.a.createElement(s.a,{md:3,className:""},n.a.createElement("input",{type:"date",className:"form-control style-input"})),n.a.createElement(s.a,{md:3,className:""},n.a.createElement("button",{className:"btn btn-primary"},"Search"))),n.a.createElement(F.a,Object.assign({},e.baseProps,{bordered:!1,defaultSorted:T,rowEvents:d,noDataIndication:()=>n.a.createElement(u,null),pagination:S()({sizePerPage:10,sizePerPageRenderer:B,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"Todos",value:e.records?e.records.length:0}]})}))))},U=()=>{var e=Object(N.c)(),a=Object(N.d)(e=>e.Report.datewsiereport);Object(r.useEffect)(()=>{e(Object(O.a)())},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(L,{records:a,columns:[{dataField:"id",text:"ID",hidden:!0},{dataField:"name",text:"Name."},{dataField:"submission",text:"Submission",sort:!0},{dataField:"interview",text:"Interview"},{dataField:"offer",text:"Offer"},{dataField:"start",text:"Start"}]}))))},M=[{dataField:"id",order:"asc"}],V=({options:e,currSizePerPage:a,onSizePerPageChange:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"d-inline mr-1"},"Show"),n.a.createElement(g.a,{type:"select",name:"select",id:"no-entries",className:"custom-select custom-select-sm d-inline col-2",defaultValue:a,onChange:e=>t(e.target.value)},e.map((e,a)=>n.a.createElement("option",{key:a},e.text))),n.a.createElement("label",{className:"d-inline ml-1"},"Entry")),_=e=>{var a=P.Search.SearchBar,t=Object(r.useState)([]),m=Object(l.a)(t,2),i=m[0],o=m[1],d={onDoubleClick:e=>{alert(),o(a=>[...a,e]),console.log("rowdata",i)}},u=()=>n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"}));return n.a.createElement(f.a,{bootstrap4:!0,keyField:"ROW_NUMBER",data:e.records,columns:e.columns,search:!0},e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,{md:6,className:""},n.a.createElement(a,e.searchProps))),n.a.createElement(F.a,Object.assign({},e.baseProps,{bordered:!1,defaultSorted:M,rowEvents:d,noDataIndication:()=>n.a.createElement(u,null),pagination:S()({sizePerPage:10,sizePerPageRenderer:V,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"Todos",value:e.records?e.records.length:0}]})}))))},q=()=>{var e=Object(N.c)(),a=Object(N.d)(e=>e.Report.monthcountreport);Object(r.useEffect)(()=>{e(Object(O.b)())},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(_,{records:a,columns:[{dataField:"id",text:"ID",hidden:!0},{dataField:"name",text:"Name."},{dataField:"submission",text:"Submission",sort:!0},{dataField:"interview",text:"Interview"},{dataField:"offer",text:"Offer"},{dataField:"start",text:"Start"}]}))))},W=[{dataField:"id",order:"asc"}],G=({options:e,currSizePerPage:a,onSizePerPageChange:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"d-inline mr-1"},"Show"),n.a.createElement(g.a,{type:"select",name:"select",id:"no-entries",className:"custom-select custom-select-sm d-inline col-2",defaultValue:a,onChange:e=>t(e.target.value)},e.map((e,a)=>n.a.createElement("option",{key:a},e.text))),n.a.createElement("label",{className:"d-inline ml-1"},"Entry")),A=e=>{var a=P.Search.SearchBar,t=Object(r.useState)([]),m=Object(l.a)(t,2),i=m[0],o=m[1],d={onDoubleClick:e=>{alert(),o(a=>[...a,e]),console.log("rowdata",i)}},u=()=>n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"}));return n.a.createElement(f.a,{bootstrap4:!0,keyField:"ROW_NUMBER",data:e.records,columns:e.columns,search:!0},e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,{md:6,className:""},n.a.createElement(a,e.searchProps))),n.a.createElement(F.a,Object.assign({},e.baseProps,{bordered:!1,defaultSorted:W,rowEvents:d,noDataIndication:()=>n.a.createElement(u,null),pagination:S()({sizePerPage:10,sizePerPageRenderer:G,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"Todos",value:e.records?e.records.length:0}]})}))))},J=()=>{var e=Object(N.c)(),a=Object(N.d)(e=>e.Report.todayrepoert);Object(r.useEffect)(()=>{e(Object(O.e)())},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(A,{records:a,columns:[{dataField:"id",text:"ID",hidden:!0},{dataField:"name",text:"Name."},{dataField:"submission",text:"Submission",sort:!0},{dataField:"interview",text:"Interview"},{dataField:"offer",text:"Offer"},{dataField:"start",text:"Start"}]}))))},H=e=>{var a=Object(r.useState)("1"),t=Object(l.a)(a,2),c=t[0],s=t[1],m=e=>{c!==e&&s(e)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{tabs:!0,className:"second-level-tab nav nav-tabs justify-content-end"},n.a.createElement(o.a,null,n.a.createElement(d.a,{className:b()({active:"1"===c}),onClick:()=>{m("1")}},"Team Leadwise")),n.a.createElement(o.a,null,n.a.createElement(d.a,{className:b()({active:"2"===c}),onClick:()=>{m("2")}},"Datewise")),n.a.createElement(o.a,null,n.a.createElement(d.a,{className:b()({active:"3"===c}),onClick:()=>{m("3")}},"Monthcount")),n.a.createElement(o.a,null,n.a.createElement(d.a,{className:b()({active:"4"===c}),onClick:()=>{m("4")}},"Today"))),n.a.createElement(u.a,{className:"req-tab-content",activeTab:c},n.a.createElement(E.a,{tabId:"1"},n.a.createElement(I,null)),n.a.createElement(E.a,{tabId:"2"},n.a.createElement(U,null)),n.a.createElement(E.a,{tabId:"3"},n.a.createElement(q,null)),n.a.createElement(E.a,{tabId:"4"},n.a.createElement(J,null))))},X=t(4),K=t.n(X),Q=t(616),Y=t(281),Z=t(308),$=t(259),ee=t(602),ae=t(147),te=t.n(ae),le=t(309),re=t(271),ne=t(272),ce=t(273),se=[{dataField:"id",order:"asc"}],me=P.CSVExport.ExportCSVButton,ie=({options:e,currSizePerPage:a,onSizePerPageChange:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"d-inline mr-1"},"Show"),n.a.createElement(g.a,{type:"select",name:"select",id:"no-entries",className:"custom-select custom-select-sm d-inline col-2",defaultValue:a,onChange:e=>t(e.target.value)},e.map((e,a)=>n.a.createElement("option",{key:a},e.text))),n.a.createElement("label",{className:"d-inline ml-1"},"Entry")),oe=e=>{var a=P.Search.SearchBar,t=()=>n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"})),i=e.className,o=Object(r.useState)(!1),d=Object(l.a)(o,2),u=d[0],E=d[1],p=Object(r.useState)(null),b=Object(l.a)(p,2),v=b[0],N=b[1],g=()=>E(!u),x=function(){var e=Object(Q.a)(K.a.mark((function e(a){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,h(v);case 3:t=e.sent,console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(Q.a)(K.a.mark((function e(a){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("avatar",a),e.next=4,te.a.post("http://144.48.250.235:98/api/UploadFile",t,{headers:{"content-type":"multipart/form-data"}});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),O=e=>{console.log(e.target.files[0]),N(e.target.files[0])};return n.a.createElement(f.a,{bootstrap4:!0,keyField:"ROW_NUMBER",data:e.records,columns:e.columns,search:!0},e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,{md:6,className:""},n.a.createElement(a,e.searchProps)),n.a.createElement(s.a,{md:6,className:"text-right"},n.a.createElement(Y.a,{className:" profile-dropdown-menu"},n.a.createElement("button",{className:"btn btn-secondary bg-secondary upbtn  mr-0",onClick:g},"Upload New"),n.a.createElement(Z.a,{"data-toggle":"dropdown",tag:"button",className:"btn btn-secondary dropdown-toggle bg-secondary  mr-0"},"Download ",n.a.createElement(ee.a,null)),n.a.createElement($.a,{right:!0,className:"topbar-dropdown-menu profile-dropdown-items"},n.a.createElement("div",{className:"dropdown-item notify-item p1"},n.a.createElement(me,Object.assign({className:"btn-link"},e.csvProps),"Export CSV")),n.a.createElement("div",{className:"dropdown-item notify-item p1"},n.a.createElement(me,Object.assign({className:"btn-link"},e.csvProps),"Export PDF")),n.a.createElement("div",{className:"dropdown-item notify-item p1"},n.a.createElement(me,Object.assign({className:"btn-link"},e.csvProps),"Export EXCEL")))),n.a.createElement(le.a,{isOpen:u,toggle:g,className:i},n.a.createElement("form",{onSubmit:x},n.a.createElement(re.a,{toggle:g},"Upload "),n.a.createElement(ne.a,null,n.a.createElement(c.a,null,n.a.createElement("input",{type:"file",className:"form-control",onChange:O}))),n.a.createElement(ce.a,null,n.a.createElement(m.a,{color:"primary",type:"submit"},"Upload File")," ",n.a.createElement(m.a,{color:"secondary",onClick:g},"Cancel")))))),n.a.createElement("div",{class:"table-responsive"},n.a.createElement(F.a,Object.assign({},e.baseProps,{bordered:!1,defaultSorted:se,noDataIndication:()=>n.a.createElement(t,null),pagination:S()({sizePerPage:10,sizePerPageRenderer:ie,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"Todos",value:e.records?e.records.length:0}]})})))))},de=e=>{var a=Object(N.c)(),t=Object(N.d)(e=>e.Report.reqreport);console.log(t,"requirement"),Object(r.useEffect)(()=>{a(Object(O.c)())},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(oe,{records:t,columns:[{dataField:"jobcode",text:"Job Code."},{dataField:"client",text:"Client Name"},{dataField:"skill",text:"Skill"},{dataField:"position",text:"Position"},{dataField:"location",text:"Location"},{dataField:"type",text:"Type"},{dataField:"status",text:"Status"},{dataField:"createdon",text:"Created On"},{dataField:"submission",text:"Submission"},{dataField:"interview",text:"Interview"},{dataField:"offer",text:"Offer"},{dataField:"hire",text:"Hire"},{dataField:"bd",text:"BD"}]}))))};a.default=e=>{var a=Object(r.useState)("1"),t=Object(l.a)(a,2),p=t[0],N=t[1],g=e=>{p!==e&&N(e)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{className:"page-title"},n.a.createElement(s.a,{md:6},n.a.createElement(v.a,{breadCrumbItems:[{label:"Report",path:"/report",active:!0}]})),n.a.createElement(s.a,{md:6,className:"text-right"},n.a.createElement(m.a,{color:"primary"},n.a.createElement("i",{className:"uil uil-plus"}),"ADD ITEM"))),n.a.createElement(i.a,{tabs:!0,className:"requirement-tab pt-3 pb-3 nav nav-tabs row bg-white"},n.a.createElement(o.a,{className:"col-sm-4"},n.a.createElement(d.a,{className:b()({active:"1"===p}),onClick:()=>{g("1")}},"Client Report")),n.a.createElement(o.a,{className:"col-sm-4"},n.a.createElement(d.a,{className:b()({active:"2"===p}),onClick:()=>{g("2")}},"Revenue")),n.a.createElement(o.a,{className:"col-sm-4"},n.a.createElement(d.a,{className:b()({active:"3"===p}),onClick:()=>{g("3")}},"Requirement"))),n.a.createElement(u.a,{className:"req-tab-content",activeTab:p},n.a.createElement(E.a,{tabId:"1"},n.a.createElement(H,null)),n.a.createElement(E.a,{tabId:"2"},n.a.createElement(C,null)),n.a.createElement(E.a,{tabId:"3"},n.a.createElement(de,null))))}}}]);
//# sourceMappingURL=19.836e40db.chunk.js.map