module.exports=(()=>{var e={47:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var o=n(924),l=n.n(o),a=n(946),c=n.n(a),s=n(33),i=n.n(s),r=n(491),u=n.n(r),d=n(22),f=n.n(d),m=n(246),y=n.n(m),p=n(323),v=n.n(p);const b=require("react");const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1;return e.map((function(e){n[e]!==t[e]&&(o=!0)})),o};const C=function(){null!==document.getElementsByTagName("html")&&void 0!==document.getElementsByTagName("html")[0]&&(document.getElementsByTagName("html")[0].classList.add("overflow-hidden"),document.getElementsByTagName("html")[0].style.overflow="hidden")};const k=function(){null!==document.getElementsByTagName("html")&&void 0!==document.getElementsByTagName("html")[0]&&(document.getElementsByTagName("html")[0].removeAttribute("class"),document.getElementsByTagName("html")[0].removeAttribute("style"))};var g="https://react-revolution.j.pl/";const E=function(e,t,n){var o="".concat(g,"public/react-revolution/").concat("v3.0.5","/css/").concat(n,".css"),l="".concat(g,"public/react-revolution/").concat("v3.0.5","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var c=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var s="react-revolution-".concat(n);null==document.getElementById(s)&&(a.setAttribute("id",s),a.setAttribute("href",o),c())}if(t){var i="react-revolution-react-revolution";null==document.getElementById(i)&&(a.setAttribute("id",i),a.setAttribute("href",l),c())}};function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v()(e);if(t){var l=v()(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return y()(this,n)}}const S=function(e){f()(n,e);var t=O(n);function n(e){var o;return c()(this,n),(o=t.call(this,e)).closeClick=o.closeClick.bind(u()(o)),o.EscListener=o.EscListener.bind(u()(o)),o.fadeOut=o.fadeOut.bind(u()(o)),o.state={moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-full-screen-overlay",id:e.id&&l()("8")==l()(e.id)?e.id:"",closeOnClick:l()(!0)!=l()(e.closeOnClick)||e.closeOnClick,closeOnEsc:l()(!0)!=l()(e.closeOnEsc)||e.closeOnEsc,data:e.data?e.data:"",animation:e.animation&&l()("8")==l()(e.animation)?e.animation:"",callbackClose:"function"==typeof e.callbackClose?e.callbackClose:void 0,display:l()(!0)==l()(e.display)&&e.display,iconClose:e.iconClose?e.iconClose:void 0,dimmed:l()(!0)==l()(e.dimmed)&&e.dimmed,disableScroll:l()(!0)==l()(e.disableScroll)&&e.disableScroll},o.animationBack=!1,o}return i()(n,[{key:"componentDidMount",value:function(){E(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var e=this.state,t=e.closeOnEsc,n=e.disableScroll,o=e.display;t&&window.addEventListener("keydown",this.EscListener,!1),o&&n&&C()}},{key:"componentWillUnmount",value:function(){k(),window.removeEventListener("keydown",this.EscListener,!1)}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.closeOnEsc,n=e.disableScroll;if(e.display)return t&&window.addEventListener("keydown",this.EscListener,!1),n&&C(),void(n&&k());k(),window.removeEventListener("keydown",this.EscListener,!1)}},{key:"EscListener",value:function(e){if(27===e.keyCode){var t=this.state.callbackClose;t&&"function"==typeof t&&(k(),window.removeEventListener("keydown",this.EscListener,!1),this.fadeOut())}}},{key:"closeClick",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.state,o=n.closeOnClick,l=n.callbackClose;(t||o&&l&&"function"==typeof l&&this.contentReference&&!e.target.contains(this.contentReference))&&(k(),window.removeEventListener("keydown",this.EscListener,!1),this.fadeOut())}},{key:"fadeOut",value:function(){var e=this,t=this.state,n=t.callbackClose,o=t.animation?300:0;this.animationBack=!0,this.setState({},(function(){setTimeout((function(){n(),e.animationBack=!1}),o)}))}},{key:"getDefaultClass",value:function(){var e=this.state,t=e.animation,n=e.defaultClass,o=this.animationBack?"back":"";return t&&("scale"==t&&(n="".concat(n," rr-full-screen-overlay-scale")),"left"==t&&(n="".concat(n," rr-full-screen-overlay-left")),"top"==t&&(n="".concat(n," rr-full-screen-overlay-top")),"right"==t&&(n="".concat(n," rr-full-screen-overlay-right")),"bottom"==t&&(n="".concat(n," rr-full-screen-overlay-bottom"))),"".concat(n," ").concat(o)}},{key:"render",value:function(){var e=this,t=this.state,n=t.addClass,o=t.display,l=t.iconClose,a=t.data,c=t.dimmed,s=t.id,i=this.getDefaultClass();return o?b.createElement("div",{className:"".concat(i," ").concat(n),id:s},l&&b.createElement("div",{className:"icon-close",onClick:function(t){return e.closeClick(t,!0)}},l),c&&b.createElement("div",{className:"dimmed",onClick:function(t){return e.closeClick(t)}}),b.createElement("div",{ref:function(t){return e.contentReference=t},className:"content"},a)):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return h(["defaultClass","id","disableScroll","callbackClose","animation","closeOnClick","closeOnEsc","data","iconClose","display"],e,t)?{addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-full-screen-overlay",id:e.id&&l()("8")==l()(e.id)?e.id:"",closeOnClick:l()(!0)!=l()(e.closeOnClick)||e.closeOnClick,closeOnEsc:l()(!0)!=l()(e.closeOnEsc)||e.closeOnEsc,data:e.data?e.data:"",animation:e.animation&&l()("8")==l()(e.animation)?e.animation:"",callbackClose:"function"==typeof e.callbackClose?e.callbackClose:void 0,display:l()(!0)==l()(e.display)&&e.display,iconClose:e.iconClose?e.iconClose:void 0,dimmed:l()(!0)!=l()(e.dimmed)||e.dimmed,disableScroll:l()(!0)!=l()(e.disableScroll)||e.disableScroll}:null}}]),n}(b.Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}},323:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},22:(e,t,n)=>{var o=n(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},246:(e,t,n)=>{var o=n(924),l=n(491);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?l(e):t}},596:e=>{function t(n,o){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,o)}e.exports=t},924:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}},t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(47)})();