/*! For license information please see 12.d6086aba.chunk.js.LICENSE.txt */
(this.webpackJsonpATS=this.webpackJsonpATS||[]).push([[12],{609:function(e,t,n){"use strict";var i=n(0),s=n.n(i),a=n(72),r=n(30),l=n(13),o=n(3),c=n.n(o),m=n(610),u=n.n(m),d=n(602),h=({item:e,linkClassNames:t,subMenuClassNames:n,activatedMenuItemIds:i})=>{var r=e.icon||null;return s.a.createElement("li",{className:c()("side-nav-item",{"mm-active":i.indexOf(e.id)>=0})},s.a.createElement(a.b,{to:"/",className:c()("side-sub-nav-link",t),"aria-expanded":i.indexOf(e.id)>=0},e.icon&&s.a.createElement(r,null),e.badge&&s.a.createElement("span",{className:"badge badge-".concat(e.badge.variant," float-right")},e.badge.text),s.a.createElement("span",null," ",e.name," "),s.a.createElement("span",{className:"menu-arrow"})),s.a.createElement("ul",{className:c()(n,"mm-collapse",{"mm-collapsed mm-show":i.indexOf(e.id)>=0}),"aria-expanded":i.indexOf(e.id)>=0},e.children.map((e,t)=>s.a.createElement(s.a.Fragment,{key:t},e.children?s.a.createElement(h,{item:e,linkClassNames:"",activatedMenuItemIds:i,subMenuClassNames:"side-nav-third-level"}):s.a.createElement(v,{item:e,className:c()({active:i.indexOf(e.id)>=0}),linkClassName:""})))))},v=({item:e,className:t,linkClassName:n})=>s.a.createElement("li",{className:c()("side-nav-item",t)},s.a.createElement(p,{item:e,className:n})),p=({item:e,className:t})=>{var n=e.icon||null;return s.a.createElement(a.b,{to:e.path,className:c()("side-nav-link-ref","side-sub-nav-link",t)},e.icon&&s.a.createElement(n,null),e.badge&&s.a.createElement("span",{className:"font-size-12 badge badge-".concat(e.badge.variant," float-right")},e.badge.text),s.a.createElement("span",null," ",e.name," "))};class g extends i.Component{constructor(...e){super(...e),this.menuRef=null,this.componentDidMount=()=>{this.props.menu.menuItems?this.initMenu():this.props.initMenu(),this.props.history.listen((e,t)=>{document.body.classList.remove("sidebar-enable"),this.props.changeActiveMenuFromLocation()})},this.componentDidUpdate=e=>{(!e.menu.menuItems||e.menu.menuItems&&e.menu.menuItems!==this.props.menu.menuItems)&&this.initMenu(),this.props.menu.activatedMenuItemIds||this.props.changeActiveMenuFromLocation()}}initMenu(){if("horizontal"===this.props.mode)var e=this.menuRef=new u.a("#menu-bar").on("shown.metisMenu",(function(t){window.addEventListener("click",(function n(i){t.target.contains(i.target)||(e.hide(t.detail.shownElement),window.removeEventListener("click",n))}))}));else this.menuRef=new u.a("#menu-bar")}render(){var e="horizontal"===this.props.mode,t=e?[]:this.props.menu?this.props.menu.activatedMenuItemIds?this.props.menu.activatedMenuItemIds:[]:[]||!1;return s.a.createElement(s.a.Fragment,null,this.props.menu&&this.props.menu.menuItems&&s.a.createElement("ul",{className:"metismenu",id:"menu-bar"},this.props.menu.menuItems.map((n,i)=>s.a.createElement(s.a.Fragment,{key:n.id},n.header&&!e&&s.a.createElement("li",{className:"menu-title",key:i+"-el"},n.header),n.children?s.a.createElement(h,{item:n,subMenuClassNames:"nav-second-level",activatedMenuItemIds:t,linkClassNames:"side-nav-link"}):s.a.createElement(v,{item:n,className:c()({"mm-active":t.indexOf(n.id)>=0}),linkClassName:"side-nav-link"})))))}}g.defaultProps={mode:"vertical"};t.a=Object(r.g)(Object(l.b)(e=>({menu:e.AppMenu}),{initMenu:d.g,changeActiveMenuFromLocation:d.a})(g))},610:function(e,t,n){e.exports=function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},t={parentTrigger:"li",subMenu:"ul",toggle:!0,triggerElement:"a"},n="mm-active",i="mm-collapse",s="mm-collapsed",a="mm-collapsing",r="metismenu",l="mm-show";function o(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}function c(e,t){if(e.closest)return e.closest(t);for(var n=e;n;){if(o(n,t))return n;n=n.parentElement}return null}return function(){function o(n,i){this.element=o.isElement(n)?n:document.querySelector(n),this.config=e(e({},t),i),this.disposed=!1,this.triggerArr=[],this.init()}return o.attach=function(e,t){return new o(e,t)},o.prototype.init=function(){var e=this,t=r,s=n,a=i;this.element.classList.add(t),[].slice.call(this.element.querySelectorAll(this.config.subMenu)).forEach((function(t){t.classList.add(a);var n=c(t,e.config.parentTrigger);(null===n||void 0===n?void 0:n.classList.contains(s))?e.show(t):e.hide(t);var i=null===n||void 0===n?void 0:n.querySelector(e.config.triggerElement);"true"!==(null===i||void 0===i?void 0:i.getAttribute("aria-disabled"))&&(null===i||void 0===i||i.setAttribute("aria-expanded","false"),null===i||void 0===i||i.addEventListener("click",e.clickEvent.bind(e)),e.triggerArr.push(i))}))},o.prototype.clickEvent=function(e){if(!this.disposed){var t=null===e||void 0===e?void 0:e.currentTarget;t&&"A"===t.tagName&&e.preventDefault();var n=c(t,this.config.parentTrigger),i=null===n||void 0===n?void 0:n.querySelector(this.config.subMenu);this.toggle(i)}},o.prototype.update=function(){this.disposed=!1,this.init()},o.prototype.dispose=function(){var e=this;this.triggerArr.forEach((function(t){t.removeEventListener("click",e.clickEvent.bind(e))})),this.disposed=!0},o.prototype.on=function(e,t,n){return this.element.addEventListener(e,t,n),this},o.prototype.off=function(e,t,n){return this.element.removeEventListener(e,t,n),this},o.prototype.emit=function(e,t,n){var i;return void 0===n&&(n=!1),"function"===typeof CustomEvent?i=new CustomEvent(e,{bubbles:n,detail:t}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,n,!1,t),this.element.dispatchEvent(i),this},o.prototype.toggle=function(e){var t=c(e,this.config.parentTrigger);(null===t||void 0===t?void 0:t.classList.contains(n))?this.hide(e):this.show(e)},o.prototype.show=function(e){var t,r=this,o=e,m=n,u=i,d=s,h=a,v=l;if(!this.isTransitioning&&!o.classList.contains(h)){var p=c(o,this.config.parentTrigger);null===p||void 0===p||p.classList.add(m);var g=null===p||void 0===p?void 0:p.querySelector(this.config.triggerElement);null===g||void 0===g||g.setAttribute("aria-expanded","true"),null===g||void 0===g||g.classList.remove(d),o.style.height="0px",o.classList.remove(u),o.classList.remove(v),o.classList.add(h);var f=[].slice.call(null===(t=null===p||void 0===p?void 0:p.parentNode)||void 0===t?void 0:t.children).filter((function(e){return e!==p}));this.config.toggle&&f.length>0&&f.forEach((function(e){var t=e.querySelector(r.config.subMenu);t&&r.hide(t)})),this.setTransitioning(!0),o.classList.add(u),o.classList.add(v),o.style.height=o.scrollHeight+"px",this.emit("show.metisMenu",{showElement:o}),o.addEventListener("transitionend",(function e(){o.classList.remove(h),o.style.height="",o.removeEventListener("transitionend",e),r.setTransitioning(!1),r.emit("shown.metisMenu",{shownElement:o})}))}},o.prototype.hide=function(e){var t=this,r=n,o=i,m=s,u=a,d=l,h=e;if(!this.isTransitioning&&h.classList.contains(d)){this.emit("hide.metisMenu",{hideElement:h});var v=c(h,this.config.parentTrigger);null===v||void 0===v||v.classList.remove(r),h.style.height=h.getBoundingClientRect().height+"px",h.style.height=h.offsetHeight+"px",h.classList.add(u),h.classList.remove(o),h.classList.remove(d),this.setTransitioning(!0),h.addEventListener("transitionend",(function e(){h.classList.remove(u),h.classList.add(o),h.style.height="",h.removeEventListener("transitionend",e),t.setTransitioning(!1),t.emit("hidden.metisMenu",{hiddenElement:h})})),h.style.height="0px";var p=null===v||void 0===v?void 0:v.querySelector(this.config.triggerElement);null===p||void 0===p||p.setAttribute("aria-expanded","false"),null===p||void 0===p||p.classList.add(m)}},o.prototype.setTransitioning=function(e){this.isTransitioning=e},o.isElement=function(e){return Boolean(e.classList)},o}()}()},624:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(609),r=n(136);t.default=e=>s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"topnav shadow-sm"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("nav",{className:"navbar navbar-light navbar-expand-lg topbar-nav"},s.a.createElement(r.a,{isOpen:e.isMenuOpened,className:"navbar-collapse",id:"topnav-menu-content"},s.a.createElement(a.a,{mode:"horizontal"}))))))}}]);
//# sourceMappingURL=12.d6086aba.chunk.js.map