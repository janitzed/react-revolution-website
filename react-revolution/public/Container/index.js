module.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([function(e,t){function i(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=i=function(e){return typeof e}:e.exports=i=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(t)}e.exports=i},function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function i(){return e.exports=i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},i.apply(this,arguments)}e.exports=i},function(e,t){function i(t){return e.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(t)}e.exports=i},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},function(e,t,i){var n=i(9);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,i){var n=i(0),r=i(2);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},function(e,t){function i(t,n){return e.exports=i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(t,n)}e.exports=i},function(e,t,i){"use strict";i.r(t);var n=i(3),r=i.n(n),o=i(0),a=i.n(o),s=i(5),d=i.n(s),c=i(6),l=i.n(c),f=i(2),u=i.n(f),S=i(7),m=i.n(S),p=i(8),M=i.n(p),b=i(4),y=i.n(b),h=i(1),v=i.n(h),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return e.map((function(e){i[e]!==t[e]&&(n=!0)})),n},B="https://react-revolution.j.pl/";var x=function(e,t,i){var n="".concat(B,"/public/react-revolution/").concat("v2.0.0","/css/").concat(i,".css"),r="".concat(B,"/public/react-revolution/").concat("v2.0.0","/css/react-revolution.css"),o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css");var a=function(){document.getElementsByTagName("head")[0].prepend(o)};if(e){var s="react-revolution-".concat(i);null==document.getElementById(s)&&(o.setAttribute("id",s),o.setAttribute("href",n),a())}if(t){var d="react-revolution-react-revolution";null==document.getElementById(d)&&(o.setAttribute("id",d),o.setAttribute("href",r),a())}};function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=y()(e);if(t){var r=y()(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return M()(this,i)}}var w=function(e){m()(i,e);var t=C(i);function i(e){var n;return d()(this,i),(n=t.call(this,e)).getClassNamesContent=n.getClassNamesContent.bind(u()(n)),n.getClassNamesSidebar=n.getClassNamesSidebar.bind(u()(n)),n.sideBar=n.sideBar.bind(u()(n)),n.resizeView=n.resizeView.bind(u()(n)),n.handleClick=n.handleClick.bind(u()(n)),n.state={href:window.location.href,minifiedSecondSideBar:!0,moduleStyle:a()(!0)==a()(e.moduleStyle)&&e.moduleStyle,globalStyle:a()(!0)==a()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&a()("8")==a()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&a()("8")==a()(e.defaultClass)?e.defaultClass:"rr-container",id:e.id&&a()("8")==a()(e.id)?e.id:"",moduleSidebar:e.moduleSidebar&&a()({})==a()(e.moduleSidebar)?e.moduleSidebar:void 0,persistUserSelection:a()(!0)==a()(e.persistUserSelection)?e.persistUserSelection:void 0,clearPersistUserSelection:a()(!0)==a()(e.clearPersistUserSelection)?e.clearPersistUserSelection:void 0,sidebarMinifiedAt:a()(8)==a()(e.sidebarMinifiedAt)?e.sidebarMinifiedAt:720,sidebarMaxifiedAt:a()(8)==a()(e.sidebarMaxifiedAt)?e.sidebarMaxifiedAt:1024,displayMinifyMaxifyIcon:a()(!0)==a()(e.displayMinifyMaxifyIcon)?e.displayMinifyMaxifyIcon:void 0,minify:a()(!0)==a()(e.minify)&&e.minify,headerProps:e.headerProps&&a()({})==a()(e.headerProps)?e.headerProps:{},headerData:e.headerData&&a()({})==a()(e.headerData)?e.headerData:void 0,contentProps:e.contentProps&&a()({})==a()(e.contentProps)?e.contentProps:{},contentData:e.contentData?e.contentData:void 0,footerData:e.footerData?e.footerData:void 0,footerProps:e.footerProps&&a()({})==a()(e.footerProps)?e.footerProps:{},autopilot:a()(!0)==a()(e.autopilot)&&e.autopilot,closeMenuHtml:e.closeMenuHtml?e.closeMenuHtml:"",toggleMenuHtml:e.toggleMenuHtml?e.toggleMenuHtml:""},n}return l()(i,[{key:"componentDidMount",value:function(){x(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var e=this.state.clearPersistUserSelection;(e||void 0===e)&&localStorage.removeItem("persistUserSelection"),window.addEventListener("resize",this.resizeView),window.addEventListener("mousedown",this.handleClick),this.resizeView()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeView),window.removeEventListener("mousedown",this.handleClick)}},{key:"handleClick",value:function(e){var t=this,i=this.state,n=i.minifiedSecondSideBar,r=i.href,o=i.sidebarMaxifiedAt;this.nodeSideBar&&!this.nodeSideBar.contains(e.target)&&this.nodeSideBar.classList&&this.nodeSideBar.classList.contains("SidebarMinified")&&(this.nodeSideBar.classList.remove("opened"),n||setTimeout((function(){t.setState({minifiedSecondSideBar:!0})}),100)),setTimeout((function(){o&&o>=document.documentElement.getBoundingClientRect().width&&t.resizeView(),t.nodeSideBar&&t.nodeSideBar.classList&&t.nodeSideBar.classList.contains("SidebarMinified")&&r!==window.location.href&&(t.setState({href:window.location.href}),n||setTimeout((function(){t.setState({minifiedSecondSideBar:!0})}),0))}),300)}},{key:"resizeView",value:function(){var e=this.state,t=e.autopilot,i=e.persistUserSelection,n=e.sidebarMinifiedAt,r=e.sidebarMaxifiedAt,o=e.minify;if(i&&null!==localStorage.getItem("persistUserSelection"))try{var a=JSON.parse(localStorage.getItem("persistUserSelection")),s=a.sidebarMin,d=a.contentMin,c=a.isMinified,l=a.minifiedSecondSideBar;return this.setState({sidebarMin:s,contentMin:d,isMinified:c,minifiedSecondSideBar:l})}catch(e){}if(o)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!0});var f=document.documentElement.getBoundingClientRect().width;if(t){if(f<=n){if(f>r)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!1,minifiedSecondSideBar:!0});if(f<r)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!0})}if(f>=r)return this.setState({sidebarMin:!1,contentMin:!1,isMinified:!1,minifiedSecondSideBar:!0})}else{if(f>=r)return this.setState({sidebarMin:!1,contentMin:!1,isMinified:!1,minifiedSecondSideBar:!0});if(f<=n)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!0});if(f<r)return this.setState({sidebarMin:!0,contentMin:!0,isMinified:!1,minifiedSecondSideBar:!0})}return null}},{key:"getClassNamesSidebar",value:function(){var e=this.state,t=e.sidebarMin;return e.contentMin||t?"SideBar SideBar-min":"SideBar"}},{key:"getClassNamesContent",value:function(){var e=this.state,t=e.contentMin,i=e.sidebarMin;return this.state.isMinified?this.state.minifiedSecondSideBar?"Content minified":"Content minified opened":t||i?"Content Content-min":"Content"}},{key:"sideBar",value:function(){var e=this;this.state.isMinified?this.setState({minifiedSecondSideBar:!this.state.minifiedSecondSideBar},(function(){var t=e.state,i=t.sidebarMin,n=t.contentMin,r=t.isMinified,o=t.minifiedSecondSideBar;t.persistUserSelection&&localStorage.setItem("persistUserSelection",JSON.stringify({sidebarMin:i,contentMin:n,isMinified:r,minifiedSecondSideBar:o}))})):this.setState({sidebarMin:!this.state.sidebarMin,contentMin:!this.state.contentMin},(function(){var t=e.state,i=t.sidebarMin,n=t.contentMin,r=t.isMinified,o=t.minifiedSecondSideBar;t.persistUserSelection&&localStorage.setItem("persistUserSelection",JSON.stringify({sidebarMin:i,contentMin:n,isMinified:r,minifiedSecondSideBar:o}))}))}},{key:"render",value:function(){var e=this,t=this.state,i=t.addClass,n=t.defaultClass,o=t.id,a=t.moduleSidebar,s=t.toggleMenuHtml,d=t.closeMenuHtml,c=t.headerData,l=t.headerProps,f=t.contentData,u=t.contentProps,S=t.displayMinifyMaxifyIcon,m=t.footerData,p=(t.footerProps,this.getClassNamesSidebar()),M=this.getClassNamesContent(),b="".concat(this.state.isMinified?this.state.minifiedSecondSideBar?"SideBar SidebarMinified":"SideBar SidebarMinified opened":p);return v.a.createElement("div",{id:o,className:"".concat(n," ").concat(i)},v.a.createElement("div",{ref:function(t){return e.nodeSideBar=t},className:b},this.state.isMinified&&v.a.createElement("span",{className:"close-side-bar action-icon",onClick:function(t){return e.sideBar()}},d),a&&a),v.a.createElement("div",r()({className:M},u),v.a.createElement("div",r()({className:"header"},l),S&&v.a.createElement("span",{className:"minify-menu",onClick:function(t){return e.sideBar()}},s),c&&c),f&&v.a.createElement("div",{className:"content"},f),m&&v.a.createElement("div",{className:"footer"},m)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(g(["moduleSidebar","headerData","contentData","persistUserSelection","sidebarMinifiedAt","sidebarMaxifiedAt","displayMinifyMaxifyIcon","minify","footerData"],e,t)){if(t.persistUserSelection&&null!==localStorage.getItem("persistUserSelection"))try{var i=localStorage.getItem("persistUserSelection");return{sidebarMin:i.sidebarMin,contentMin:i.contentMin,isMinified:i.isMinified,minifiedSecondSideBar:i.minifiedSecondSideBar}}catch(e){}return t.minify!==e.minify?e.minify?{sidebarMin:!0,contentMin:!0,isMinified:!0,minify:!0,minifiedSecondSideBar:!0}:{sidebarMin:!1,contentMin:!1,isMinified:!1,minify:!1}:{moduleSidebar:e.moduleSidebar&&a()({})==a()(e.moduleSidebar)?e.moduleSidebar:void 0,headerData:e.headerData&&a()({})==a()(e.headerData)?e.headerData:void 0,contentData:e.contentData&&a()({})==a()(e.contentData)?e.contentData:void 0,persistUserSelection:a()(!0)==a()(e.persistUserSelection)?e.persistUserSelection:void 0,clearPersistUserSelection:a()(!0)==a()(e.clearPersistUserSelection)?e.clearPersistUserSelection:void 0,sidebarMinifiedAt:a()(8)==a()(e.sidebarMinifiedAt)?e.sidebarMinifiedAt:720,sidebarMaxifiedAt:a()(8)==a()(e.sidebarMaxifiedAt)?e.sidebarMaxifiedAt:1024,displayMinifyMaxifyIcon:a()(!0)==a()(e.displayMinifyMaxifyIcon)?e.displayMinifyMaxifyIcon:void 0,minify:e.minify,footerData:e.footerData}}return null}}]),i}(v.a.Component);t.default=w}]);