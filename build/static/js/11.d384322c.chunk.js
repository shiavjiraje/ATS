(this.webpackJsonpATS=this.webpackJsonpATS||[]).push([[11],{626:function(e,a,t){e.exports=t.p+"static/media/logo.d67de05f.png"},632:function(e,a,t){"use strict";var n=t(0),s=t.n(n),i=t(91),m=t(32),l=t(13),r=t(6),c=t.n(r),o=t(633),d=t.n(o),u=t(625),h=({item:e,linkClassNames:a,subMenuClassNames:t,activatedMenuItemIds:n})=>{var m=e.icon||null;return s.a.createElement("li",{className:c()("side-nav-item",{"mm-active":n.indexOf(e.id)>=0})},s.a.createElement(i.b,{to:"/",className:c()("side-sub-nav-link",a),"aria-expanded":n.indexOf(e.id)>=0},e.icon&&s.a.createElement(m,null),e.badge&&s.a.createElement("span",{className:"badge badge-".concat(e.badge.variant," float-right")},e.badge.text),s.a.createElement("span",null," ",e.name," "),s.a.createElement("span",{className:"menu-arrow"})),s.a.createElement("ul",{className:c()(t,"mm-collapse",{"mm-collapsed mm-show":n.indexOf(e.id)>=0}),"aria-expanded":n.indexOf(e.id)>=0},e.children.map((e,a)=>s.a.createElement(s.a.Fragment,{key:a},e.children?s.a.createElement(h,{item:e,linkClassNames:"",activatedMenuItemIds:n,subMenuClassNames:"side-nav-third-level"}):s.a.createElement(p,{item:e,className:c()({active:n.indexOf(e.id)>=0}),linkClassName:""})))))},p=({item:e,className:a,linkClassName:t})=>s.a.createElement("li",{className:c()("side-nav-item",a)},s.a.createElement(v,{item:e,className:t})),v=({item:e,className:a})=>{var t=e.icon||null;return s.a.createElement(i.b,{to:e.path,className:c()("side-nav-link-ref","side-sub-nav-link",a)},e.icon&&s.a.createElement(t,null),e.badge&&s.a.createElement("span",{className:"font-size-12 badge badge-".concat(e.badge.variant," float-right")},e.badge.text),s.a.createElement("span",null," ",e.name," "))};class E extends n.Component{constructor(...e){super(...e),this.menuRef=null,this.componentDidMount=()=>{this.props.menu.menuItems?this.initMenu():this.props.initMenu(),this.props.history.listen((e,a)=>{document.body.classList.remove("sidebar-enable"),this.props.changeActiveMenuFromLocation()})},this.componentDidUpdate=e=>{(!e.menu.menuItems||e.menu.menuItems&&e.menu.menuItems!==this.props.menu.menuItems)&&this.initMenu(),this.props.menu.activatedMenuItemIds||this.props.changeActiveMenuFromLocation()}}initMenu(){if("horizontal"===this.props.mode)var e=this.menuRef=new d.a("#menu-bar").on("shown.metisMenu",(function(a){window.addEventListener("click",(function t(n){a.target.contains(n.target)||(e.hide(a.detail.shownElement),window.removeEventListener("click",t))}))}));else this.menuRef=new d.a("#menu-bar")}render(){var e="horizontal"===this.props.mode,a=e?[]:this.props.menu?this.props.menu.activatedMenuItemIds?this.props.menu.activatedMenuItemIds:[]:[]||!1;return s.a.createElement(s.a.Fragment,null,this.props.menu&&this.props.menu.menuItems&&s.a.createElement("ul",{className:"metismenu",id:"menu-bar"},this.props.menu.menuItems.map((t,n)=>s.a.createElement(s.a.Fragment,{key:t.id},t.header&&!e&&s.a.createElement("li",{className:"menu-title",key:n+"-el"},t.header),t.children?s.a.createElement(h,{item:t,subMenuClassNames:"nav-second-level",activatedMenuItemIds:a,linkClassNames:"side-nav-link"}):s.a.createElement(p,{item:t,className:c()({"mm-active":a.indexOf(t.id)>=0}),linkClassName:"side-nav-link"})))))}}E.defaultProps={mode:"vertical"};a.a=Object(m.g)(Object(l.b)(e=>({menu:e.AppMenu}),{initMenu:u.g,changeActiveMenuFromLocation:u.a})(E))},634:function(e,a,t){e.exports=t.p+"static/media/avatar-7.2e9c7d8f.jpg"},644:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(91),m=t(13),l=t(645),r=t(630),c=t.n(r),o=(t(631),t(632)),d=t(634),u=t.n(d),h=t(626),p=t.n(h),v=t(103),E=()=>s.a.createElement("div",{className:"sidebar-content"},s.a.createElement("div",{id:"sidebar-menu"},s.a.createElement(o.a,null)));class b extends n.Component{constructor(e){super(e),this.componentDidMount=()=>{document.addEventListener("mousedown",this.handleOtherClick,!1)},this.componentWillUnmount=()=>{document.removeEventListener("mousedown",this.handleOtherClick,!1)},this.handleOtherClick=e=>{this.menuNodeRef.contains(e.target)||document.body&&l.isMobileOnly&&document.body.classList.remove("sidebar-enable")},this.handleClick=this.handleClick.bind(this),this.handleOtherClick=this.handleOtherClick.bind(this)}handleClick(e){console.log(e)}render(){var e=this.props.isCondensed||!1;console.log("left side bar",this.props.user.Username);var a=this.props.user.Username;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"left-side-menu",ref:e=>this.menuNodeRef=e},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{background:"#e5e5e5",padding:"8px 0px"}},s.a.createElement(i.b,{to:"/",className:""},s.a.createElement("span",{className:"logo-lg ml-2"},s.a.createElement("img",{src:p.a,alt:"",height:"47"})))),s.a.createElement("div",{className:"media user-profile mt-2 mb-2"},s.a.createElement("div",null,s.a.createElement("img",{src:u.a,className:"avatar-sm rounded-circle mr-2",alt:""})),s.a.createElement("div",{className:"media-body"},s.a.createElement("h6",{className:"pro-user-name mt-0 mb-0"},a),s.a.createElement("a",{className:"text-dark",href:"/account/logout"},"Sign Out")))),!e&&s.a.createElement(c.a,null,s.a.createElement(E,null)),e&&s.a.createElement(E,null)))}}a.default=Object(m.b)(e=>{var a=e.Auth;return{user:a.user,loading:a.loading,error:a.error}},{loginUser:v.c})(b)}}]);
//# sourceMappingURL=11.d384322c.chunk.js.map