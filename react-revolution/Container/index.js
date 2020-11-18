module.exports=(()=>{var e={438:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>w});var n=i(221),r=i.n(n),a=i(924),o=i.n(a),s=i(946),d=i.n(s),c=i(33),l=i.n(c),f=i(491),u=i.n(f),S=i(22),m=i.n(S),p=i(246),M=i.n(p),b=i(323),y=i.n(b);const h=require("react");var v=i.n(h);const g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return e.map((function(e){i[e]!==t[e]&&(n=!0)})),n};var B="https://react-revolution.j.pl/";const x=function(e,t,i){var n="".concat(B,"public/react-revolution/").concat("v3.0.5","/css/").concat(i,".css"),r="".concat(B,"public/react-revolution/").concat("v3.0.5","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var o=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var s="react-revolution-".concat(i);null==document.getElementById(s)&&(a.setAttribute("id",s),a.setAttribute("href",n),o())}if(t){var d="react-revolution-react-revolution";null==document.getElementById(d)&&(a.setAttribute("id",d),a.setAttribute("href",r),o())}};function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=y()(e);if(t){var r=y()(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return M()(this,i)}}const w=function(e){m()(i,e);var t=C(i);function i(e){var n;return d()(this,i),(n=t.call(this,e)).getClassNamesContent=n.getClassNamesContent.bind(u()(n)),n.getClassNamesSidebar=n.getClassNamesSidebar.bind(u()(n)),n.sideBar=n.sideBar.bind(u()(n)),n.resizeView=n.resizeView.bind(u()(n)),n.handleClick=n.handleClick.bind(u()(n)),n.state={href:window.location.href,minifiedSecondSideBar:!0,moduleStyle:o()(!0)==o()(e.moduleStyle)&&e.moduleStyle,globalStyle:o()(!0)==o()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&o()("8")==o()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&o()("8")==o()(e.defaultClass)?e.defaultClass:"rr-container",id:e.id&&o()("8")==o()(e.id)?e.id:"",moduleSidebar:e.moduleSidebar&&o()({})==o()(e.moduleSidebar)?e.moduleSidebar:void 0,persistUserSelection:o()(!0)==o()(e.persistUserSelection)?e.persistUserSelection:void 0,clearPersistUserSelection:o()(!0)==o()(e.clearPersistUserSelection)?e.clearPersistUserSelection:void 0,sidebarMinifiedAt:o()(8)==o()(e.sidebarMinifiedAt)?e.sidebarMinifiedAt:720,sidebarMaxifiedAt:o()(8)==o()(e.sidebarMaxifiedAt)?e.sidebarMaxifiedAt:1024,displayMinifyMaxifyIcon:o()(!0)==o()(e.displayMinifyMaxifyIcon)?e.displayMinifyMaxifyIcon:void 0,minify:o()(!0)==o()(e.minify)&&e.minify,headerProps:e.headerProps&&o()({})==o()(e.headerProps)?e.headerProps:{},headerData:e.headerData&&o()({})==o()(e.headerData)?e.headerData:void 0,contentProps:e.contentProps&&o()({})==o()(e.contentProps)?e.contentProps:{},contentData:e.contentData?e.contentData:void 0,footerData:e.footerData?e.footerData:void 0,footerProps:e.footerProps&&o()({})==o()(e.footerProps)?e.footerProps:{},autopilot:o()(!0)==o()(e.autopilot)&&e.autopilot,closeMenuHtml:e.closeMenuHtml?e.closeMenuHtml:void 0,toggleMenuHtml:e.toggleMenuHtml?e.toggleMenuHtml:void 0,isMinified:o()(!0)==o()(e.isMinified)&&e.isMinified,sidebarMin:o()(!0)==o()(e.sidebarMin)&&e.sidebarMin,contentMin:o()(!0)==o()(e.contentMin)&&e.contentMin,align:e.align&&o()("8")==o()(e.align)?e.align:"left"},n.nodeSideBar=v().createRef(),n}return l()(i,[{key:"componentDidMount",value:function(){x(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var e=this.state.clearPersistUserSelection;(e||void 0===e)&&localStorage.removeItem("persistUserSelection"),window.addEventListener("resize",this.resizeView),window.addEventListener("mousedown",this.handleClick),this.resizeView()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeView),window.removeEventListener("mousedown",this.handleClick)}},{key:"handleClick",value:function(e){var t=this,i=this.state,n=i.minifiedSecondSideBar,r=i.href,a=i.sidebarMaxifiedAt;this.nodeSideBar&&this.nodeSideBar.current&&!this.nodeSideBar.current.contains(e.target)&&this.nodeSideBar.current.classList&&this.nodeSideBar.current.classList.contains("SidebarMinified")&&(this.nodeSideBar.current.classList.remove("opened"),n||setTimeout((function(){t.setState({minifiedSecondSideBar:!0})}),100)),setTimeout((function(){a&&a>=document.documentElement.getBoundingClientRect().width&&t.resizeView(),t.nodeSideBar&&t.nodeSideBar.current&&t.nodeSideBar.current.classList&&t.nodeSideBar.current.classList.contains("SidebarMinified")&&r!==window.location.href&&(t.setState({href:window.location.href}),n||t.setState({minifiedSecondSideBar:!0}))}),300)}},{key:"resizeView",value:function(){var e=this.state,t=e.autopilot,i=e.persistUserSelection,n=e.sidebarMinifiedAt,r=e.sidebarMaxifiedAt,a=e.minify;if(i&&null!==localStorage.getItem("persistUserSelection"))try{var o=JSON.parse(localStorage.getItem("persistUserSelection")),s=o.sidebarMin,d=o.contentMin,c=o.isMinified,l=o.minifiedSecondSideBar;return this.setState({sidebarMin:s,contentMin:d,isMinified:c,minifiedSecondSideBar:l})}catch(e){}if(a)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!0});var f=document.documentElement.getBoundingClientRect().width;if(t){if(f<=n){if(f>r)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!1,minifiedSecondSideBar:!0});if(f<r)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!0})}if(f>=r)return this.setState({sidebarMin:!1,contentMin:!1,isMinified:!1,minifiedSecondSideBar:!0})}else{if(f>=r)return this.setState({sidebarMin:!1,contentMin:!1,isMinified:!1,minifiedSecondSideBar:!0});if(f<=n)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!0});if(f<r)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!1,minifiedSecondSideBar:!0})}return null}},{key:"getClassNamesSidebar",value:function(){var e=this.state,t=e.sidebarMin;return e.contentMin||t?"SideBar SideBar-min":"SideBar"}},{key:"getClassNamesContent",value:function(){var e=this.state,t=e.contentMin,i=e.sidebarMin;return this.state.isMinified?this.state.minifiedSecondSideBar?"Content minified":"Content minified opened":t||i?"Content Content-min":"Content"}},{key:"sideBar",value:function(){var e=this;this.state.isMinified?this.setState({minifiedSecondSideBar:!this.state.minifiedSecondSideBar},(function(){var t=e.state,i=t.sidebarMin,n=t.contentMin,r=t.isMinified,a=t.minifiedSecondSideBar;t.persistUserSelection&&localStorage.setItem("persistUserSelection",JSON.stringify({sidebarMin:i,contentMin:n,isMinified:r,minifiedSecondSideBar:a}))})):this.setState({sidebarMin:!this.state.sidebarMin,contentMin:!this.state.contentMin},(function(){var t=e.state,i=t.sidebarMin,n=t.contentMin,r=t.isMinified,a=t.minifiedSecondSideBar;t.persistUserSelection&&localStorage.setItem("persistUserSelection",JSON.stringify({sidebarMin:i,contentMin:n,isMinified:r,minifiedSecondSideBar:a}))}))}},{key:"render",value:function(){var e=this,t=this.state,i=t.addClass,n=t.defaultClass,a=t.id,o=t.moduleSidebar,s=t.toggleMenuHtml,d=t.closeMenuHtml,c=t.headerData,l=t.headerProps,f=t.contentData,u=t.contentProps,S=t.displayMinifyMaxifyIcon,m=t.footerData,p=t.footerProps,M=t.isMinified,b=t.align,y=this.getClassNamesSidebar(),h=this.getClassNamesContent(),g="".concat(M?this.state.minifiedSecondSideBar?"SideBar SidebarMinified":"SideBar SidebarMinified opened":y),B=["left","right"].includes(b)?b:"left";return v().createElement("div",{id:a,className:"".concat(n," ").concat(B," ").concat(i)},v().createElement("div",{ref:this.nodeSideBar,className:g},M&&v().createElement("span",{className:"close-side-bar action-icon",onClick:function(t){return e.sideBar()}},d),o&&o),v().createElement("div",r()({className:h},u),v().createElement("div",r()({className:"data-header"},l),S&&v().createElement("span",{className:"minify-menu",onClick:function(t){return e.sideBar()}},s),c&&c),f&&v().createElement("div",{className:"data-content"},f),m&&v().createElement("div",r()({className:"data-footer"},p),m)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(g(["moduleSidebar","headerData","contentData","persistUserSelection","sidebarMinifiedAt","sidebarMaxifiedAt","displayMinifyMaxifyIcon","minify","footerData","isMinified","sidebarMin","contentMin","align"],e,t)){if(t.persistUserSelection&&null!==localStorage.getItem("persistUserSelection"))try{var i=JSON.parse(localStorage.getItem("persistUserSelection"));return{sidebarMin:i.sidebarMin,contentMin:i.contentMin,isMinified:i.isMinified,minifiedSecondSideBar:i.minifiedSecondSideBar}}catch(e){}return t.minify!==e.minify?e.minify?{sidebarMin:!0,contentMin:!0,isMinified:!0,minify:!0,minifiedSecondSideBar:!0}:{sidebarMin:!1,contentMin:!1,isMinified:!1,minify:!1}:{moduleSidebar:e.moduleSidebar&&o()({})==o()(e.moduleSidebar)?e.moduleSidebar:void 0,headerData:e.headerData&&o()({})==o()(e.headerData)?e.headerData:void 0,contentData:e.contentData&&o()({})==o()(e.contentData)?e.contentData:void 0,persistUserSelection:o()(!0)==o()(e.persistUserSelection)?e.persistUserSelection:void 0,clearPersistUserSelection:o()(!0)==o()(e.clearPersistUserSelection)?e.clearPersistUserSelection:void 0,sidebarMinifiedAt:o()(8)==o()(e.sidebarMinifiedAt)?e.sidebarMinifiedAt:720,sidebarMaxifiedAt:o()(8)==o()(e.sidebarMaxifiedAt)?e.sidebarMaxifiedAt:1024,displayMinifyMaxifyIcon:o()(!0)==o()(e.displayMinifyMaxifyIcon)?e.displayMinifyMaxifyIcon:void 0,minify:e.minify,footerData:e.footerData,align:e.align&&o()("8")==o()(e.align)?e.align:"left"}}return null}}]),i}(v().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(i){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(i)}e.exports=t},22:(e,t,i)=>{var n=i(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},246:(e,t,i)=>{var n=i(924),r=i(491);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},596:e=>{function t(i,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(i,n)}e.exports=t},924:e=>{function t(i){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(i)}e.exports=t}},t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}return i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(438)})();