module.exports=(()=>{var t={78:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>O});var a=n(924),i=n.n(a),o=n(946),r=n.n(o),s=n(33),l=n.n(s),d=n(491),u=n.n(d),c=n(22),f=n.n(c),p=n(246),y=n.n(p),m=n(323),v=n.n(m);const h=require("react");var b=n.n(h),k=void 0;const g=function t(){var e=Math.floor(Date.now()/1e3),n="".concat(e).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(k!==n)return k=n,n;t()};const x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!1;return t.map((function(t){n[t]!==e[t]&&(a=!0)})),a};var M="https://react-revolution.j.pl/";const C=function(t,e,n){var a="".concat(M,"public/react-revolution/").concat("v3.0.5","/css/").concat(n,".css"),i="".concat(M,"public/react-revolution/").concat("v3.0.5","/css/react-revolution.css"),o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css");var r=function(){document.getElementsByTagName("head")[0].prepend(o)};if(t){var s="react-revolution-".concat(n);null==document.getElementById(s)&&(o.setAttribute("id",s),o.setAttribute("href",a),r())}if(e){var l="react-revolution-react-revolution";null==document.getElementById(l)&&(o.setAttribute("id",l),o.setAttribute("href",i),r())}};function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=v()(t);if(e){var i=v()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return y()(this,n)}}const O=function(t){f()(n,t);var e=S(n);function n(t){var a;return r()(this,n),(a=e.call(this,t)).buildData=a.buildData.bind(u()(a)),a.resize=a.resize.bind(u()(a)),a.state={dataJsx:[],isMinified:!1,moduleStyle:i()(!0)==i()(t.moduleStyle)&&t.moduleStyle,globalStyle:i()(!0)==i()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&i()("8")==i()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&i()("8")==i()(t.defaultClass)?t.defaultClass:"rr-table",id:t.id&&i()("8")==i()(t.id)?t.id:"",title:t.title&&i()([])==i()(t.title)?t.title:void 0,data:t.data&&i()([])==i()(t.data)?t.data:void 0,mediaBreak:t.mediaBreak&&i()(8)==i()(t.mediaBreak)?t.mediaBreak:void 0,keysToRead:t.keysToRead&&i()([])==i()(t.keysToRead)?t.keysToRead:void 0,titleOnMinified:i()(!0)!=i()(t.titleOnMinified)||t.titleOnMinified},a}return l()(n,[{key:"componentDidMount",value:function(){C(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var t=this.state.mediaBreak;this.buildData(),t&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var t=this.state,e=t.mediaBreak,n=t.isMinified;document.documentElement.getBoundingClientRect().width<=e?n||this.setState({isMinified:!0},this.buildData):n&&this.setState({isMinified:!1},this.buildData)}},{key:"buildData",value:function(){var t=this.state,e=t.data,n=t.isMinified,a=t.title,o=t.keysToRead,r=t.titleOnMinified,s=[],l="".concat(n?"flex-column isMinified":"flex-row");if(e&&e.length){var d=[];a&&a.length&&(a.map((function(t,e){t&&i()("8")==i()(t)&&d.push(b().createElement("span",{key:g(),className:"span span-".concat(e+1)},t))})),d.length&&s.push(b().createElement("li",{key:g(),className:"".concat(l," title")},d))),e.map((function(t){if(o&&o.length){var e=[];o.map((function(i,o){if(void 0!==t[i]){var s=t[i]?t[i]:"";n&&r&&a&&0!==a.length&&void 0!==a[o]&&e.push(b().createElement("span",{key:g(),className:"span-title"},a[o])),e.push(b().createElement("span",{key:g(),className:"span span-".concat(o+1)},s))}})),e&&e.length&&(s.push(b().createElement("li",{key:g(),className:l},e)),e=[])}})),this.setState({dataJsx:s})}}},{key:"render",value:function(){var t=this.state,e=t.addClass,n=t.defaultClass,a=t.id,i=t.dataJsx;return b().createElement("ul",{className:"".concat(n," ").concat(e),id:a},i&&i.length&&i.map((function(t){return t})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return x(["addClass","defaultClass","id","data","mediaBreak","title","keysToRead","titleOnMinified"],t,e)?{addClass:t.addClass&&i()("8")==i()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&i()("8")==i()(t.defaultClass)?t.defaultClass:"rr-table",id:t.id&&i()("8")==i()(t.id)?t.id:"",title:t.title&&i()([])==i()(t.title)?t.title:void 0,data:t.data&&i()([])==i()(t.data)?t.data:void 0,mediaBreak:t.mediaBreak&&i()(8)==i()(t.mediaBreak)?t.mediaBreak:void 0,keysToRead:t.keysToRead&&i()([])==i()(t.keysToRead)?t.keysToRead:void 0,dataJsx:e.dataJsx,titleOnMinified:i()(!0)!=i()(t.titleOnMinified)||t.titleOnMinified}:null}}]),n}(b().Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}t.exports=function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}},323:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},22:(t,e,n)=>{var a=n(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}},246:(t,e,n)=>{var a=n(924),i=n(491);t.exports=function(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?i(t):e}},596:t=>{function e(n,a){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,a)}t.exports=e},924:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}},e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(78)})();