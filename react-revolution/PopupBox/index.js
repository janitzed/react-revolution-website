module.exports=(()=>{var t={751:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>B});var n=o(924),a=o.n(n),i=o(946),r=o.n(i),l=o(33),s=o.n(l),c=o(491),u=o.n(c),d=o(22),f=o.n(d),p=o(246),m=o.n(p),y=o(323),b=o.n(y);const v=require("react");var h=o.n(v);const x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return t.map((function(t){o[t]!==e[t]&&(n=!0)})),n};var C="https://react-revolution.j.pl/";const g=function(t,e,o){var n="".concat(C,"public/react-revolution/").concat("v4.0.1","/css/").concat(o,".css"),a="".concat(C,"public/react-revolution/").concat("v4.0.1","/css/react-revolution.css"),i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css");var r=function(){document.getElementsByTagName("head")[0].prepend(i)};if(t){var l="react-revolution-".concat(o);null==document.getElementById(l)&&(i.setAttribute("id",l),i.setAttribute("href",n),r())}if(e){var s="react-revolution-react-revolution";null==document.getElementById(s)&&(i.setAttribute("id",s),i.setAttribute("href",a),r())}};function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=b()(t);if(e){var a=b()(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return m()(this,o)}}const B=function(t){f()(o,t);var e=k(o);function o(t){var n;r()(this,o),(n=e.call(this,t)).fadePopupBoxOut=n.fadePopupBoxOut.bind(u()(n)),n.handleMouseDown=n.handleMouseDown.bind(u()(n)),n.togglePopupBox=n.togglePopupBox.bind(u()(n)),n.checkLocation=n.checkLocation.bind(u()(n));return n.state={displayBox:!1,displayBoxClassNames:"box",moduleStyle:a()(!0)==a()(t.moduleStyle)&&t.moduleStyle,globalStyle:a()(!0)==a()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&a()("8")==a()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&a()("8")==a()(t.defaultClass)?t.defaultClass:"rr-popupbox",id:t.id&&a()("8")==a()(t.id)?t.id:"",data:t.data?t.data:"",icon:t.icon?t.icon:"",iconCallback:t.iconCallback&&"function"==typeof t.iconCallback?t.iconCallback:void 0,animationTime:t.animationTime&&a()(8)==a()(t.animationTime)?t.animationTime:300,animation:t.animation&&a()("8")==a()(t.animation)&&["top-left","top-right","bottom-left","bottom-right"].includes(t.animation)?t.animation:"top-left"},n}return s()(o,[{key:"componentDidMount",value:function(){g(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.oldHref=window.location.href,document.addEventListener("mousedown",this.handleMouseDown)}},{key:"componentWillUnmount",value:function(){clearInterval(this.odHrefInterval),document.removeEventListener("mousedown",this.handleMouseDown)}},{key:"handleMouseDown",value:function(t){this.nodeData&&!this.nodeData.contains(t.target)&&this.fadePopupBoxOut(),this.checkLocation()}},{key:"checkLocation",value:function(){var t=this;clearInterval(this.odHrefInterval);this.odHrefInterval=setInterval((function(){t.oldHref!==window.location.href&&(t.oldHref=window.location.href,clearInterval(t.odHrefInterval),t.setState({displayBox:!1,displayBoxClassNames:"box"}))}),50)}},{key:"togglePopupBox",value:function(){var t=this.state.iconCallback;if(t&&t(),this.state.displayBox)return this.fadePopupBoxOut();this.setState({displayBox:!0,displayBoxClassNames:"box"})}},{key:"fadePopupBoxOut",value:function(){var t=this,e=this.state,o=e.displayBoxClassNames,n=e.animationTime;this.setState({displayBoxClassNames:"".concat(o," fade-out")},(function(){setTimeout((function(){t.setState({displayBox:!1,displayBoxClassNames:"box"})}),n)}))}},{key:"render",value:function(){var t=this,e=this.state,o=e.addClass,n=e.defaultClass,a=e.id,i=e.displayBoxClassNames,r=e.animation,l=e.icon,s=e.displayBox,c=e.data;return h().createElement("span",{ref:function(e){return t.nodeData=e},id:a,className:"".concat(n," ").concat(o)},h().createElement("span",{className:"icon",onClick:function(e){return t.togglePopupBox()}},l),s&&h().createElement("div",{className:"".concat(i," ").concat(r)},c))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return x(["defaultClass","id","data","icon","iconCallback","animationTime","animation"],t,e)?{addClass:t.addClass&&a()("8")==a()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&a()("8")==a()(t.defaultClass)?t.defaultClass:"rr-popupbox",id:t.id&&a()("8")==a()(t.id)?t.id:"",data:t.data?t.data:"",icon:t.icon?t.icon:"",iconCallback:t.iconCallback&&"function"==typeof t.iconCallback?t.iconCallback:void 0,animationTime:t.animationTime&&a()(8)==a()(t.animationTime)?t.animationTime:300,animation:t.animation&&a()("8")==a()(t.animation)&&["top-left","top-right","bottom-left","bottom-right"].includes(t.animation)?t.animation:"top-left"}:null}}]),o}(h().Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}},323:t=>{function e(o){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(o)}t.exports=e},22:(t,e,o)=>{var n=o(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},246:(t,e,o)=>{var n=o(924),a=o(491);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e}},596:t=>{function e(o,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(o,n)}t.exports=e},924:t=>{function e(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(o)}t.exports=e}},e={};function o(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}return o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(751)})();