module.exports=(()=>{var e={760:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var o=n(221),r=n.n(o),a=n(924),l=n.n(a),s=n(946),c=n.n(s),i=n(33),u=n.n(i),d=n(491),p=n.n(d),f=n(22),y=n.n(f),v=n(246),m=n.n(v),b=n(323),h=n.n(b);const C=require("react");var k=n.n(C);const O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1;return e.map((function(e){n[e]!==t[e]&&(o=!0)})),o};var g="https://react-revolution.j.pl/";const x=function(e,t,n){var o="".concat(g,"public/react-revolution/").concat("v4.0.8","/css/").concat(n,".css"),r="".concat(g,"public/react-revolution/").concat("v4.0.8","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var s="react-revolution-".concat(n);null==document.getElementById(s)&&(a.setAttribute("id",s),a.setAttribute("href",o),l())}if(t){var c="react-revolution-react-revolution";null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",r),l())}};function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m()(this,n)}}const E=function(e){y()(n,e);var t=S(n);function n(e){var o;return c()(this,n),(o=t.call(this,e)).removeHandlers=o.removeHandlers.bind(p()(o)),o.setHandlers=o.setHandlers.bind(p()(o)),o.close=o.close.bind(p()(o)),o.onKeyUpCapture=o.onKeyUpCapture.bind(p()(o)),o.state={moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-modal",id:e.id&&l()("8")==l()(e.id)?e.id:"",data:e.data?e.data:void 0,close:e.close?e.close:void 0,display:l()(!0)==l()(e.display)&&e.display,callback:e.callback&&"function"==typeof e.callback?e.callback:void 0,closeOnKeyDown:l()(!0)!=l()(e.closeOnKeyDown)||e.closeOnKeyDown,closeOnClickDimmed:l()(!0)!=l()(e.closeOnClickDimmed)||e.closeOnClickDimmed},o.ref=k().createRef(),o}return u()(n,[{key:"componentDidMount",value:function(){x(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.state.closeOnKeyDown&&this.setHandlers()}},{key:"componentWllUnmount",value:function(){this.state.closeOnKeyDown&&this.removeHandlers()}},{key:"setHandlers",value:function(){this.removeHandlers(),document.addEventListener("keyup",this.onKeyUpCapture),document.addEventListener("touchstart",this.onKeyUpCapture),document.addEventListener("touchend",this.onKeyUpCapture),document.addEventListener("touch",this.onKeyUpCapture)}},{key:"removeHandlers",value:function(){document.removeEventListener("keyup",this.onKeyUpCapture),document.removeEventListener("touchstart",this.onKeyUpCapture),document.removeEventListener("touchend",this.onKeyUpCapture),document.removeEventListener("touch",this.onKeyUpCapture)}},{key:"onKeyUpCapture",value:function(e){e.preventDefault(),e.stopPropagation();var t=this.state.callback;t&&e.keyCode&&27==e.keyCode&&t(e)}},{key:"close",value:function(e){var t=this.state.callback;t&&t(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.display,o=t.addClass,a=t.defaultClass,l=t.id,s=t.data,c=t.callback,i=t.close,u=t.closeOnClickDimmed;return n&&c?k().createElement("div",{ref:this.ref,className:"".concat(a," ").concat(o),id:l},k().createElement("div",r()({className:"holder"},u&&{onClick:function(t){return e.close(t)}})),k().createElement("div",{className:"content"},s&&s,i&&k().createElement("div",{className:"close",onClick:function(t){return e.close(t)}},i))):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return O(["defaultClass","id","data","display","callback"],e,t)?{addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-modal",id:e.id&&l()("8")==l()(e.id)?e.id:"",data:e.data?e.data:void 0,display:l()(!0)==l()(e.display)&&e.display,callback:e.callback&&"function"==typeof e.callback?e.callback:void 0}:null}}]),n}(k().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},22:(e,t,n)=>{var o=n(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},246:(e,t,n)=>{var o=n(924),r=n(491);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},596:e=>{function t(n,o){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,o)}e.exports=t},924:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(760)})();