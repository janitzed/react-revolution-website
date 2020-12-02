module.exports=(()=>{var e={867:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var n=r(221),o=r.n(n),a=r(918),s=r.n(a),i=r(924),l=r.n(i),c=r(946),u=r.n(c),p=r(33),f=r.n(p),d=r(491),m=r.n(d),v=r(22),y=r.n(v),g=r(246),h=r.n(g),b=r(323),S=r.n(b);const x=require("react");var C=r.n(x),k=void 0;const M=function e(){var t=Math.floor(Date.now()/1e3),r="".concat(t).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(k!==r)return k=r,r;e()};var O="https://react-revolution.j.pl/";const A=function(e,t,r){var n="".concat(O,"public/react-revolution/").concat("v4.0.4","/css/").concat(r,".css"),o="".concat(O,"public/react-revolution/").concat("v4.0.4","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var s=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var i="react-revolution-".concat(r);null==document.getElementById(i)&&(a.setAttribute("id",i),a.setAttribute("href",n),s())}if(t){var l="react-revolution-react-revolution";null==document.getElementById(l)&&(a.setAttribute("id",l),a.setAttribute("href",o),s())}};const E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return e.map((function(e){r[e]!==t[e]&&(n=!0)})),n};function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S()(e);if(t){var o=S()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}const w=function(e){y()(r,e);var t=I(r);function r(e){var n;return u()(this,r),(n=t.call(this,e)).checkLocation=n.checkLocation.bind(m()(n)),n.state={messagesApp:[],moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-global-messages",id:e.id&&l()("8")==l()(e.id)?e.id:"",messageKey:e.messageKey&&l()("8")==l()(e.messageKey)?e.messageKey:"",codeMapping:e.codeMapping&&l()({})===l()(e.codeMapping)?e.codeMapping:{},timer:e.timer&&l()(8)==l()(e.timer)?e.timer:2500,empty:l()(!0)!=l()(e.empty)||e.empty},n.removeMessage=n.removeMessage.bind(m()(n)),n.setIntervaller=n.setIntervaller.bind(m()(n)),n.href=window.location.href,n}return f()(r,[{key:"componentDidMount",value:function(){A(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.clearStore(!0);var e=this.state,t=e.messageKey;e.empty&&this.setOnClickEventListenerToTheDom(),""!==t&&this.setIntervaller()}},{key:"componentWillUnmount",value:function(){this.state.empty&&document.removeEventListener("click",this.checkLocation),clearInterval(this.globalMessagesIntervaller)}},{key:"setOnClickEventListenerToTheDom",value:function(){document.removeEventListener("click",this.checkLocation),document.addEventListener("click",this.checkLocation)}},{key:"checkLocation",value:function(){var e=this,t=5;clearInterval(r);var r=setInterval((function(){return e.href!==window.location.href&&t>0?(e.href=window.location.href,e.clearStore(!0),clearInterval(r)):t?void t--:clearInterval(r)}),100)}},{key:"readStore",value:function(){var e=this.state.messageKey;return null!==sessionStorage.getItem(e)?JSON.parse(sessionStorage.getItem(e)):[]}},{key:"clearStore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.state.messageKey;sessionStorage.removeItem(t),e&&this.setState({messagesApp:[]})}},{key:"setIntervaller",value:function(){var e=this,t=this.state.timer;clearInterval(this.globalMessagesIntervaller),this.globalMessagesIntervaller=setInterval((function(){var t=e.state.messagesApp,r=e.readStore();if(0!==r.length){e.clearStore(!1);for(var n=void 0,o=!1,a=0;a<=r.length-1;a++){var i=r[a],c=i.clearStack,u=i.persistCurrentMessage;if(void 0!==c&&l()(!0)===l()(c)&&1==c){n=r[a],o=u;break}}if(n)return void 0!==o&&l()(!0)==l()(o)&&1==o?e.setState({messagesApp:[n]}):e.setState({messagesApp:[]});for(var p=void 0,f=[],d=function(e){var o=r[e],a=o.clearStack,i=o.persistCurrentMessage;if(void 0!==a&&l()(8)===l()(a))return p=!0,n=r[e],f=(f=[].concat(s()(t),s()(r))).filter((function(e){return void 0!==e.errorCode&&l()(8)===l()(e.errorCode)&&e.errorCode!==a})),void 0!==i&&l()(!0)==l()(i)&&1==i&&f.push(n),"break"},m=0;m<=r.length-1;m++){if("break"===d(m))break}if(p)return e.setState({messagesApp:f});for(var v=function(t){r[t].unique="".concat(M()),r[t].disappear&&l()(8)==l()(r[t].disappear)&&setTimeout((function(){e.setState({messagesApp:e.state.messagesApp.filter((function(e){return r[t].unique!==e.unique}))})}),r[t].disappear)},y=0;y<=r.length-1;y++)v(y);e.setState({messagesApp:[].concat(s()(t),s()(r))})}}),t)}},{key:"removeMessage",value:function(e){this.setState({messagesApp:this.state.messagesApp.filter((function(t){return e!==t.unique}))})}},{key:"render",value:function(){var e=this,t=this.state,r=t.addClass,n=t.codeMapping,a=t.messagesApp,s=t.defaultClass,i=t.id,c=Object.getOwnPropertyNames(n);return C().createElement("div",{className:"".concat(s," ").concat(r),id:i},a.map((function(t){var r=t.errorCode,a=t.errorMessage,s=t.unique;if(r=JSON.stringify(r),c.includes(r)&&void 0!==n[r]){var i=n[r],u=i.title,p=i.displayErrorCode,f=i.text,d=i.close,m=i.link,v={},y={},g={};return f&&l()({})===l()(f)&&f.props&&l()({})===l()(f.props)&&(v=f.props),m&&l()({})===l()(m)&&m.props&&l()({})===l()(m.props)&&(y=m.props),d&&l()({})===l()(d)&&d.props&&l()({})===l()(d.props)&&(g=d.props),C().createElement("div",{className:"single-error",key:M()},u&&l()("000")===l()(u)&&C().createElement("h1",null,"".concat(u," ").concat(p?r:"")),u&&l()({})===l()(u)&&C().createElement("h1",null,u," ".concat(p?r:"")),C().createElement("div",o()({className:"text"},v),"".concat(f&&f.prefix?"".concat(f.prefix," "):""," ").concat(a?"".concat(a," "):""," ").concat(f&&f.suffix?"".concat(f.suffix):"")),C().createElement("div",{className:"options"},C().createElement("div",o()({onClick:function(t){return e.removeMessage(s)},className:"single-option"},g),"".concat(d&&d.text?"".concat(d.text," "):"")),m&&l()({})===l()(m)&&m.text&&l()("000")===l()(m.text)&&C().createElement("div",{className:"single-option"},C().createElement("a",o()({rel:"noopener noreferrer",href:"".concat(m.href?m.href:"")},y),m.text))))}return null})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return E(["moduleStyle","globalStyle","addClass","defaultClass","id","messageKey","codeMapping","timer","empty"],e,t)?{moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-global-messages",id:e.id&&l()("8")==l()(e.id)?e.id:"",messageKey:e.messageKey&&l()("8")==l()(e.messageKey)?e.messageKey:"",codeMapping:e.codeMapping&&l()({})===l()(e.codeMapping)?e.codeMapping:{},timer:e.timer&&l()(8)==l()(e.timer)?e.timer:2500,empty:l()(!0)!=l()(e.empty)||e.empty}:null}}]),r}(C().Component)},849:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},168:(e,t,r)=>{var n=r(849);e.exports=function(e){if(Array.isArray(e))return n(e)}},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},22:(e,t,r)=>{var n=r(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},26:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},2:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},246:(e,t,r)=>{var n=r(924),o=r(491);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},596:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},918:(e,t,r)=>{var n=r(168),o=r(26),a=r(288),s=r(2);e.exports=function(e){return n(e)||o(e)||a(e)||s()}},924:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},288:(e,t,r)=>{var n=r(849);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(867)})();