module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=o=function(t){return typeof t}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}t.exports=o},function(t,e){t.exports=require("react")},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(e)}t.exports=o},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,o){var n=o(8);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,o){var n=o(0),a=o(2);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e}},function(t,e){function o(e,n){return t.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(4),l=o.n(r),s=o(5),i=o.n(s),c=o(2),u=o.n(c),d=o(6),f=o.n(d),g=o(7),p=o.n(g),y=o(3),m=o.n(y),b=o(1),v=o.n(b),h="https://react-revolution.j.pl/";var S=function(t,e,o){var n="".concat(h,"public/react-revolution/").concat("v3.0.4","/css/").concat(o,".css"),a="".concat(h,"public/react-revolution/").concat("v3.0.4","/css/react-revolution.css"),r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(r)};if(t){var s="react-revolution-".concat(o);null==document.getElementById(s)&&(r.setAttribute("id",s),r.setAttribute("href",n),l())}if(e){var i="react-revolution-react-revolution";null==document.getElementById(i)&&(r.setAttribute("id",i),r.setAttribute("href",a),l())}},w=void 0,C=function t(){var e="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return w!==e?(w=e,e):t()},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return t.map((function(t){o[t]!==e[t]&&(n=!0)})),n};function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=m()(t);if(e){var a=m()(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return p()(this,o)}}var O=function(t){f()(o,t);var e=k(o);function o(t){var n;return l()(this,o),(n=e.call(this,t)).toggle=n.toggle.bind(u()(n)),n.state={classList:"",toggled:!1,moduleStyle:a()(!0)==a()(t.moduleStyle)&&t.moduleStyle,globalStyle:a()(!0)==a()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&a()("8")==a()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&a()("8")==a()(t.defaultClass)?t.defaultClass:"rr-read-more",id:t.id&&a()("8")==a()(t.id)?t.id:"",animation:t.animation&&a()("8")==a()(t.animation)?t.animation:void 0,toggleForwards:t.toggleForwards?t.toggleForwards:"...",toggleBackwards:t.toggleBackwards?t.toggleBackwards:void 0,data:t.data?t.data:"",dataToggle:t.dataToggle?t.dataToggle:""},n}return i()(o,[{key:"componentDidMount",value:function(){S(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"toggle",value:function(){var t=this,e=this.state,o=e.animation,n=e.toggled,a=this.state.classList;return o&&!n?(this.setState({classList:"toggling animation-".concat(o),toggled:!0}),setTimeout((function(){t.setState({classList:"toggled animation-".concat(o)})}),300)):o&&n?(this.setState({classList:"".concat(a," animation-").concat(o,"-back")}),setTimeout((function(){t.setState({toggled:!1})}),300)):void this.setState({toggled:!this.state.toggled,classList:""})}},{key:"render",value:function(){var t=this,e=this.state,o=e.addClass,n=e.defaultClass,a=e.id,r=e.data,l=e.dataToggle,s=e.toggled,i=e.toggleForwards,c=e.toggleBackwards,u=e.classList;return v.a.createElement("span",{className:"".concat(n," ").concat(o),id:a},r&&v.a.createElement("span",{className:"text"},r),!s&&i&&v.a.createElement("span",{className:"toggle-forwards",onClick:function(e){return t.toggle(e)}},i),l&&s&&v.a.createElement("span",{key:C(),className:u},l),s&&c&&v.a.createElement("span",{className:"toggle-back",onClick:function(e){return t.toggle(e)}},c))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return x(["moduleStyle","globalStyle","addClass","defaultClass","id","animation","toggleForwards","toggleBackwards","data","dataToggle"],t,e)?{moduleStyle:a()(!0)==a()(t.moduleStyle)&&t.moduleStyle,globalStyle:a()(!0)==a()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&a()("8")==a()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&a()("8")==a()(t.defaultClass)?t.defaultClass:"rr-read-more-callback",id:t.id&&a()("8")==a()(t.id)?t.id:"",animation:t.animation&&a()("8")==a()(t.animation)?t.animation:void 0,toggleForwards:t.toggleForwards?t.toggleForwards:"...",toggleBackwards:t.toggleBackwards?t.toggleBackwards:void 0,data:t.data?t.data:"",dataToggle:t.dataToggle?t.dataToggle:""}:null}}]),o}(v.a.Component);e.default=O}]);