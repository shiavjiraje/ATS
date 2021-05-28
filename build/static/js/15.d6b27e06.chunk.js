(this.webpackJsonpATS=this.webpackJsonpATS||[]).push([[15],{625:function(e,t,a){"use strict";var s=a(103);a.d(t,"h",(function(){return s.c})),a.d(t,"i",(function(){return s.e})),a.d(t,"j",(function(){return s.f}));var i=a(112);a.d(t,"b",(function(){return i.a})),a.d(t,"c",(function(){return i.b})),a.d(t,"d",(function(){return i.c})),a.d(t,"e",(function(){return i.d})),a.d(t,"f",(function(){return i.e})),a.d(t,"k",(function(){return i.f}));var l=a(170);a.d(t,"a",(function(){return l.a})),a.d(t,"g",(function(){return l.c}));a(101),a(110),a(100),a(167),a(92),a(56),a(33),a(131),a(128),a(171),a(102),a(69),a(111),a(57),a(168),a(129),a(130),a(132),a(169)},629:function(e,t,a){"use strict";var s=a(0),i=a.n(s),l=a(13),n=a(625),c=a(73);class o extends s.Component{constructor(e){super(e),this.componentDidMount=()=>{this._loadStateFromProps()},this.componentDidUpdate=(e,t)=>{e!==this.props&&this._loadStateFromProps()},this.handleClose=e=>{e.preventDefault(),this.props.hideRightSidebar()},this.changeLayout=e=>{switch(e.currentTarget.value){case"horizontal":this.setState({isHorizontalLayout:!this.state.isHorizontalLayout,isCondensed:!1,isDetachedLayout:!1}),this.props.changeLayout(c.a);break;default:this.setState({isHorizontalLayout:!1,isCondensed:!1,isDetachedLayout:!1}),this.props.changeLayout(c.b)}},this.changeWidthMode=e=>{switch(e.currentTarget.value){case"boxed":this.setState({isBoxed:!0}),this.props.changeLayoutWidth(c.c);break;default:this.setState({isBoxed:!1}),this.props.changeLayoutWidth(c.d)}},this.changeTheme=e=>{switch(e.currentTarget.value){case"dark":this.setState({isLight:!1,isDark:!0}),this.props.changeSidebarTheme(c.e);break;default:this.setState({isLight:!0,isDark:!1}),this.props.changeSidebarTheme(c.f)}},this.changeLeftSiderbarType=e=>{switch(e.currentTarget.value){case"condensed":this.setState({isCondensed:!0,isSidebarScrollable:!1,isLight:!1,isDark:!1}),this.props.changeSidebarType(c.g);break;case"scrollable":this.setState({isCondensed:!1,isSidebarScrollable:!0}),this.props.changeSidebarType(c.i);break;default:this.setState({isCondensed:!1,isSidebarScrollable:!1}),this.props.changeSidebarType(c.h)}},this.handleClose=this.handleClose.bind(this),this.changeLayout=this.changeLayout.bind(this),this.changeWidthMode=this.changeWidthMode.bind(this),this.changeTheme=this.changeTheme.bind(this),this.changeLeftSiderbarType=this.changeLeftSiderbarType.bind(this),this.state={isHorizontalLayout:!1,isBoxed:!1,isSidebarScrollable:!1,isCondensed:!1,isLight:!1,isDark:!1}}_loadStateFromProps(){this.setState({isHorizontalLayout:this.props.layoutType===c.a,isBoxed:this.props.layoutWidth===c.c,isSidebarScrollable:this.props.leftSideBarType===c.i,isCondensed:this.props.leftSideBarType===c.g,isDark:this.props.leftSideBarTheme===c.e})}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2 p-2"},i.a.createElement("div",{className:"alert alert-primary",role:"alert"},i.a.createElement("strong",null,"Customize the layout, sidebar menu, etc"))),i.a.createElement("h5",{className:"pl-3 font-size-15"},"Layout"),i.a.createElement("div",{className:"pl-3"},i.a.createElement("div",{className:"pt-2"},i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"layout",value:"vertical",id:"vertical-check",onChange:this.changeLayout,checked:!this.state.isHorizontalLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"vertical-check"},"Vertical Layout (Default)")),i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"layout",value:"horizontal",id:"horizontal-check",onChange:this.changeLayout,checked:this.state.isHorizontalLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"horizontal-check"},"Horizontal Layout")))),i.a.createElement("h5",{className:"pl-3 pt-3 border-top font-size-15"},"Width"),i.a.createElement("div",{className:"mt-2 pl-3"},i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"width",value:"fluid",id:"fluid-check",checked:!this.state.isBoxed,onChange:this.changeWidthMode,disabled:this.state.isDetachedLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"fluid-check"},"Fluid")),i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"width",value:"boxed",id:"boxed-check",checked:this.state.isBoxed,onChange:this.changeWidthMode,disabled:this.state.isDetachedLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"boxed-check"},"Boxed"))),i.a.createElement("hr",{className:"mb-0"}),i.a.createElement("h5",{className:"pl-3 pt-3 font-size-15"},"Left Sidebar"),i.a.createElement("div",{className:"pl-3"},i.a.createElement("div",{className:"pt-2"},i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"theme",value:"default",id:"default-theme-check",checked:!this.state.isDark,onChange:this.changeTheme,disabled:this.state.isDetachedLayout||this.state.isHorizontalLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"default-theme-check"},"Default")),i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"theme",value:"dark",id:"dark-theme-check",onChange:this.changeTheme,checked:this.state.isDark,disabled:this.state.isDetachedLayout||this.state.isHorizontalLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"dark-theme-check"},"Dark")))),i.a.createElement("div",{className:"pl-3"},i.a.createElement("div",{className:"pt-2"},i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"left-sidebar-width",value:"fixed",id:"left-sidebar-width-fixed",checked:!this.state.isCondensed&&!this.state.isSidebarScrollable,onChange:this.changeLeftSiderbarType,disabled:this.state.isDetachedLayout||this.state.isHorizontalLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"left-sidebar-width-fixed"},"Fixed (Default)")),i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"left-sidebar-width",value:"condensed",id:"left-sidebar-width-condensed",onChange:this.changeLeftSiderbarType,checked:this.state.isCondensed,disabled:this.state.isHorizontalLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"left-sidebar-width-condensed"},"Condensed")),i.a.createElement("div",{className:"custom-control custom-switch mb-1"},i.a.createElement("input",{type:"radio",className:"custom-control-input",name:"left-sidebar-width",value:"scrollable",id:"left-sidebar-width-scrollable",onChange:this.changeLeftSiderbarType,checked:this.state.isSidebarScrollable,disabled:this.state.isHorizontalLayout}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"left-sidebar-width-scrollable"},"Scrollable")))))}}t.a=Object(l.b)(e=>({showRightSidebar:e.Layout.showRightSidebar,layoutType:e.Layout.layoutType,layoutWidth:e.Layout.layoutWidth,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType}),{hideRightSidebar:n.f,changeLayout:n.b,changeLayoutWidth:n.c,changeSidebarType:n.e,changeSidebarTheme:n.d})(o)},653:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),l=a(289),n=a(13),c=a(625),o=a(73),r=a(629),d=i.a.lazy(()=>Promise.all([a.e(0),a.e(16),a.e(11)]).then(a.bind(null,644))),h=i.a.lazy(()=>Promise.all([a.e(0),a.e(1)]).then(a.bind(null,639))),m=i.a.lazy(()=>a.e(4).then(a.bind(null,638))),u=i.a.lazy(()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,640))),p=()=>i.a.createElement("div",null);class b extends s.Component{constructor(e){super(e),this.openLeftMenu=()=>{document.body&&(document.body.classList.contains("sidebar-enable")?(document.body.classList.remove("sidebar-enable"),this.props.changeSidebarType(o.g)):(document.body.classList.contains("left-side-menu-condensed")&&document.body.classList.remove("left-side-menu-condensed"),document.body.classList.add("sidebar-enable")))},this.componentDidMount=()=>{window.innerWidth>=768&&window.innerWidth<=1028&&this.props.changeSidebarType(o.g)},this.openLeftMenu=this.openLeftMenu.bind(this)}render(){var e=this.props.children||null,t=this.props.layout.leftSideBarType===o.g,a=this.props.layout.leftSideBarTheme===o.f;return i.a.createElement("div",{className:"app"},i.a.createElement("div",{id:"wrapper"},i.a.createElement(s.Suspense,{fallback:p()},i.a.createElement(d,Object.assign({isCondensed:t,isLight:a},this.props))),i.a.createElement("div",{className:"content-page"},i.a.createElement(s.Suspense,{fallback:p()},i.a.createElement(h,Object.assign({openLeftMenuCallBack:this.openLeftMenu},this.props))),i.a.createElement("div",{className:"content"},i.a.createElement(l.a,{fluid:!0},i.a.createElement(s.Suspense,{fallback:i.a.createElement("div",{className:"text-center"})},e))),i.a.createElement(s.Suspense,{fallback:p()},i.a.createElement(m,this.props)))),i.a.createElement(s.Suspense,{fallback:p()},i.a.createElement(u,Object.assign({title:"Setting"},this.props),i.a.createElement(r.a,null))))}}t.default=Object(n.b)(e=>({layout:e.Layout}),{changeSidebarTheme:c.d,changeSidebarType:c.e})(b)}}]);
//# sourceMappingURL=15.d6b27e06.chunk.js.map