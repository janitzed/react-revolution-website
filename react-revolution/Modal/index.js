module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(9);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,n){var o=n(0),r=n(2);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o),a=n(0),l=n.n(a),c=n(5),u=n.n(c),s=n(6),i=n.n(s),d=n(2),f=n.n(d),p=n(7),y=n.n(p),v=n(8),m=n.n(v),b=n(3),h=n.n(b),C=n(1),k=n.n(C),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1;return e.map((function(e){n[e]!==t[e]&&(o=!0)})),o},g="https://react-revolution.j.pl/";var x=function(e,t,n){var o="".concat(g,"public/react-revolution/").concat("v3.0.1","/css/").concat(n,".css"),r="".concat(g,"public/react-revolution/").concat("v3.0.1","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var c="react-revolution-".concat(n);null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",o),l())}if(t){var u="react-revolution-react-revolution";null==document.getElementById(u)&&(a.setAttribute("id",u),a.setAttribute("href",r),l())}};function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m()(this,n)}}var E=function(e){y()(n,e);var t=S(n);function n(e){var o;return u()(this,n),(o=t.call(this,e)).removeHandlers=o.removeHandlers.bind(f()(o)),o.setHandlers=o.setHandlers.bind(f()(o)),o.close=o.close.bind(f()(o)),o.onKeyUpCapture=o.onKeyUpCapture.bind(f()(o)),o.state={moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-modal",id:e.id&&l()("8")==l()(e.id)?e.id:"",data:e.data?e.data:void 0,close:e.close?e.close:void 0,display:l()(!0)==l()(e.display)&&e.display,callback:e.callback&&"function"==typeof e.callback?e.callback:void 0,closeOnKeyDown:l()(!0)!=l()(e.closeOnKeyDown)||e.closeOnKeyDown,closeOnClickDimmed:l()(!0)!=l()(e.closeOnClickDimmed)||e.closeOnClickDimmed},o.ref=k.a.createRef(),o}return i()(n,[{key:"componentDidMount",value:function(){x(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.state.closeOnKeyDown&&this.setHandlers()}},{key:"componentWllUnmount",value:function(){this.state.closeOnKeyDown&&this.removeHandlers()}},{key:"setHandlers",value:function(){this.removeHandlers(),document.addEventListener("keyup",this.onKeyUpCapture),document.addEventListener("touchstart",this.onKeyUpCapture),document.addEventListener("touchend",this.onKeyUpCapture),document.addEventListener("touch",this.onKeyUpCapture)}},{key:"removeHandlers",value:function(){document.removeEventListener("keyup",this.onKeyUpCapture),document.removeEventListener("touchstart",this.onKeyUpCapture),document.removeEventListener("touchend",this.onKeyUpCapture),document.removeEventListener("touch",this.onKeyUpCapture)}},{key:"onKeyUpCapture",value:function(e){e.preventDefault(),e.stopPropagation();var t=this.state.callback;t&&e.keyCode&&27==e.keyCode&&t(e)}},{key:"close",value:function(e){var t=this.state.callback;t&&t(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.display,o=t.addClass,a=t.defaultClass,l=t.id,c=t.data,u=t.callback,s=t.close,i=t.closeOnClickDimmed;return n&&u?k.a.createElement("div",{ref:this.ref,className:"".concat(a," ").concat(o),id:l},k.a.createElement("div",r()({className:"holder"},i&&{onClick:function(t){return e.close(t)}})),k.a.createElement("div",{className:"content"},c&&c,s&&k.a.createElement("div",{className:"close",onClick:function(t){return e.close(t)}},s))):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return O(["defaultClass","id","data","display","callback"],e,t)?{addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-modal",id:e.id&&l()("8")==l()(e.id)?e.id:"",data:e.data?e.data:void 0,display:l()(!0)==l()(e.display)&&e.display,callback:e.callback&&"function"==typeof e.callback?e.callback:void 0}:null}}]),n}(k.a.Component);t.default=E}]);