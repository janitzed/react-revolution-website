module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){var r=n(11),o=n(12),a=n(13),s=n(14);e.exports=function(e){return r(e)||o(e)||a(e)||s()}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(15);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(0),o=n(2);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t,n){var r=n(6);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var r=n(6);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(4),s=n.n(a),c=n(0),i=n.n(c),l=n(7),u=n.n(l),f=n(8),p=n.n(f),m=n(2),d=n.n(m),v=n(9),y=n.n(v),h=n(10),g=n.n(h),b=n(5),x=n.n(b),S=n(1),O=n.n(S),k=void 0,M=function e(){var t="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return k!==t?(k=t,t):e()},E="https://react-revolution.j.pl/";var j=function(e,t,n){var r="".concat(E,"public/react-revolution/").concat("v3.0.1","/css/").concat(n,".css"),o="".concat(E,"public/react-revolution/").concat("v3.0.1","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var s=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var c="react-revolution-".concat(n);null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",r),s())}if(t){var i="react-revolution-react-revolution";null==document.getElementById(i)&&(a.setAttribute("id",i),a.setAttribute("href",o),s())}};function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x()(e);if(t){var o=x()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g()(this,n)}}var I=function(e){y()(n,e);var t=A(n);function n(e){var r;return u()(this,n),(r=t.call(this,e)).checkLocation=r.checkLocation.bind(d()(r)),r.state={messagesApp:[],moduleStyle:i()(!0)==i()(e.moduleStyle)&&e.moduleStyle,globalStyle:i()(!0)==i()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&i()("8")==i()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&i()("8")==i()(e.defaultClass)?e.defaultClass:"rr-global-messages",id:e.id&&i()("8")==i()(e.id)?e.id:"",messageKey:e.messageKey&&i()("8")==i()(e.messageKey)?e.messageKey:"",codeMapping:e.codeMapping&&i()({})===i()(e.codeMapping)?e.codeMapping:{},timer:e.timer&&i()(8)==i()(e.timer)?e.timer:2500,empty:i()(!0)!=i()(e.empty)||e.empty},r.removeMessage=r.removeMessage.bind(d()(r)),r.setIntervaller=r.setIntervaller.bind(d()(r)),r.href=window.location.href,r}return p()(n,[{key:"componentDidMount",value:function(){j(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.clearStore(!0);var e=this.state,t=e.messageKey;e.empty&&this.setOnClickEventListenerToTheDom(),""!==t&&this.setIntervaller()}},{key:"componentWillUnmount",value:function(){this.state.empty&&document.removeEventListener("click",this.checkLocation),clearInterval(this.globalMessagesIntervaller)}},{key:"setOnClickEventListenerToTheDom",value:function(){document.removeEventListener("click",this.checkLocation),document.addEventListener("click",this.checkLocation)}},{key:"checkLocation",value:function(){var e=this,t=5;clearInterval(n);var n=setInterval((function(){return e.href!==window.location.href&&t>0?(e.href=window.location.href,e.clearStore(!0),clearInterval(n)):t?void t--:clearInterval(n)}),100)}},{key:"readStore",value:function(){var e=this.state.messageKey;return null!==sessionStorage.getItem(e)?JSON.parse(sessionStorage.getItem(e)):[]}},{key:"clearStore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.state.messageKey;sessionStorage.removeItem(t),e&&this.setState({messagesApp:[]})}},{key:"setIntervaller",value:function(){var e=this,t=this.state.timer;clearInterval(this.globalMessagesIntervaller),this.globalMessagesIntervaller=setInterval((function(){var t=e.state.messagesApp,n=e.readStore();if(0!==n.length){e.clearStore(!1);for(var r=function(t){n[t].unique="".concat(M()),n[t].disappear&&i()(8)==i()(n[t].disappear)&&setTimeout((function(){e.setState({messagesApp:e.state.messagesApp.filter((function(e){return n[t].unique!==e.unique}))})}),n[t].disappear)},o=0;o<=n.length-1;o++)r(o);e.setState({messagesApp:[].concat(s()(t),s()(n))})}}),t)}},{key:"removeMessage",value:function(e){this.setState({messagesApp:this.state.messagesApp.filter((function(t){return e!==t.unique}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.addClass,r=t.codeMapping,a=t.messagesApp,s=t.defaultClass,c=t.id,l=Object.getOwnPropertyNames(r);return O.a.createElement("div",{className:"".concat(s," ").concat(n),id:c},a.map((function(t){var n=t.errorCode,a=t.errorMessage,s=t.unique;if(n=JSON.stringify(n),l.includes(n)&&void 0!==r[n]){var c=r[n],u=c.title,f=c.displayErrorCode,p=c.text,m=c.close,d=c.link,v={},y={},h={};return p&&i()({})===i()(p)&&p.props&&i()({})===i()(p.props)&&(v=p.props),d&&i()({})===i()(d)&&d.props&&i()({})===i()(d.props)&&(y=d.props),m&&i()({})===i()(m)&&m.props&&i()({})===i()(m.props)&&(h=m.props),O.a.createElement("div",{className:"single-error",key:M()},u&&i()("000")===i()(u)&&O.a.createElement("h1",null,"".concat(u," ").concat(f?n:"")),u&&i()({})===i()(u)&&O.a.createElement("h1",null,u," ".concat(f?n:"")),O.a.createElement("div",o()({className:"text"},v),"".concat(p.prefix?"".concat(p.prefix," "):""," ").concat(a?"".concat(a," "):""," ").concat(p.suffix?"".concat(p.suffix):"")),O.a.createElement("div",{className:"options"},O.a.createElement("div",o()({onClick:function(t){return e.removeMessage(s)},className:"single-option"},h),"".concat(m.text?"".concat(m.text," "):"")),d&&i()({})===i()(d)&&d.text&&i()("000")===i()(d.text)&&O.a.createElement("div",{className:"single-option"},O.a.createElement("a",o()({rel:"noopener noreferrer",href:"".concat(d.href?d.href:"")},y),d.text))))}return null})))}}]),n}(O.a.Component);t.default=I}]);