module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=require("react")},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(7);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(0),o=n(8);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),u=n(3),l=n.n(u),a=n(4),i=n.n(a),c=n(5),s=n.n(c),f=n(6),d=n.n(f),p=n(1),y=n.n(p),b=n(2),v=n.n(b),m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;return t.map((function(t){n[t]!==e[t]&&(r=!0)})),r},x="https://react-revolution.j.pl/";var h=function(t,e,n){var r="".concat(x,"public/react-revolution/").concat("v3.0.0","/css/").concat(n,".css"),o="".concat(x,"public/react-revolution/").concat("v3.0.0","/css/react-revolution.css"),u=document.createElement("link");u.setAttribute("rel","stylesheet"),u.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(u)};if(t){var a="react-revolution-".concat(n);null==document.getElementById(a)&&(u.setAttribute("id",a),u.setAttribute("href",r),l())}if(e){var i="react-revolution-react-revolution";null==document.getElementById(i)&&(u.setAttribute("id",i),u.setAttribute("href",o),l())}};function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y()(t);if(e){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var C=function(t){s()(n,t);var e=g(n);function n(t){var r;return l()(this,n),(r=e.call(this,t)).state={moduleStyle:o()(!0)==o()(t.moduleStyle)&&t.moduleStyle,globalStyle:o()(!0)==o()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&o()("8")==o()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&o()("8")==o()(t.defaultClass)?t.defaultClass:"rr-loading-box-top",id:t.id&&o()("8")==o()(t.id)?t.id:"",text:t.text&&o()("8")==o()(t.text)?t.text:"",display:o()(!0)==o()(t.display)&&t.display},r}return i()(n,[{key:"componentDidMount",value:function(){h(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"render",value:function(){var t=this.state,e=t.addClass,n=t.text,r=t.defaultClass,o=t.id;return t.display?v.a.createElement("div",{className:"".concat(r," ").concat(e),id:o},n):null}}],[{key:"getDerivedStateFromProps",value:function(t,e){return m(["defaultClass","id","text","display"],t,e)?{addClass:t.addClass&&o()("8")==o()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&o()("8")==o()(t.defaultClass)?t.defaultClass:"rr-loading-box-top",id:t.id&&o()("8")==o()(t.id)?t.id:"",text:t.text&&o()("8")==o()(t.text)?t.text:"",display:o()(!0)==o()(t.display)&&t.display}:null}}]),n}(v.a.Component);e.default=C}]);