module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([function(e,t){e.exports=require("react")},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t,r){e.exports=r(12)()},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t,r){"use strict";e.exports=function(e,t,r,n,a,o,c,l){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,a,o,c,l],u=0;(i=new Error(t.replace(/%s/g,(function(){return s[u++]})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(10);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(1),a=r(11);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){"use strict";var n=r(13);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,c){if(c!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),o=r(1),c=r.n(o),l=r(6),i=r.n(l),s=r(7),u=r.n(s),f=r(8),p=r.n(f),d=r(9),m=r.n(d),h=r(4),v=r.n(h),y=r(0),b=r.n(y),x=r(2),E=r.n(x),g=r(5),O=r.n(g);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function N(e){return"/"===e.charAt(0)}function j(e,t){for(var r=t,n=r+1,a=e.length;n<a;r+=1,n+=1)e[r]=e[n];e.pop()}var k=function(e,t){void 0===t&&(t="");var r,n=e&&e.split("/")||[],a=t&&t.split("/")||[],o=e&&N(e),c=t&&N(t),l=o||c;if(e&&N(e)?a=n:n.length&&(a.pop(),a=a.concat(n)),!a.length)return"/";if(a.length){var i=a[a.length-1];r="."===i||".."===i||""===i}else r=!1;for(var s=0,u=a.length;u>=0;u--){var f=a[u];"."===f?j(a,u):".."===f?(j(a,u),s++):s&&(j(a,u),s--)}if(!l)for(;s--;s)a.unshift("..");!l||""===a[0]||a[0]&&N(a[0])||a.unshift("");var p=a.join("/");return r&&"/"!==p.substr(-1)&&(p+="/"),p};function R(e,t,r,n){var a;"string"==typeof e?(a=function(e){var t=e||"/",r="",n="",a=t.indexOf("#");-1!==a&&(n=t.substr(a),t=t.substr(0,a));var o=t.indexOf("?");return-1!==o&&(r=t.substr(o),t=t.substr(0,o)),{pathname:t,search:"?"===r?"":r,hash:"#"===n?"":n}}(e)).state=t:(void 0===(a=w({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return r&&(a.key=r),n?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=k(a.pathname,n.pathname)):a.pathname=n.pathname:a.pathname||(a.pathname="/"),a}"undefined"==typeof window||!window.document||window.document.createElement;var C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},T=function(e){function t(){var r,n;P(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return r=n=_(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!S(e)){e.preventDefault();var t=n.context.router.history,r=n.props,a=r.replace,o=r.to;a?t.replace(o):t.push(o)}},_(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);O()(this.context.router,"You should not use <Link> outside a <Router>"),O()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,o="string"==typeof t?R(t,null,null,a.location):t,c=a.createHref(o);return b.a.createElement("a",C({},n,{onClick:this.handleClick,href:c,ref:r}))},t}(b.a.Component);T.propTypes={onClick:E.a.func,target:E.a.string,replace:E.a.bool,to:E.a.oneOfType([E.a.string,E.a.object]).isRequired,innerRef:E.a.oneOfType([E.a.string,E.a.func])},T.defaultProps={replace:!1},T.contextTypes={router:E.a.shape({history:E.a.shape({push:E.a.func.isRequired,replace:E.a.func.isRequired,createHref:E.a.func.isRequired}).isRequired}).isRequired};var A=T,I="https://react-revolution.j.pl/";var q=function(e,t,r){var n="".concat(I,"public/react-revolution/").concat("v3.0.1","/css/").concat(r,".css"),a="".concat(I,"public/react-revolution/").concat("v3.0.1","/css/react-revolution.css"),o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css");var c=function(){document.getElementsByTagName("head")[0].prepend(o)};if(e){var l="react-revolution-".concat(r);null==document.getElementById(l)&&(o.setAttribute("id",l),o.setAttribute("href",n),c())}if(t){var i="react-revolution-react-revolution";null==document.getElementById(i)&&(o.setAttribute("id",i),o.setAttribute("href",a),c())}};function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var a=v()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return m()(this,r)}}var M=function(e){p()(r,e);var t=D(r);function r(e){var n;return i()(this,r),(n=t.call(this,e)).state={moduleStyle:c()(!0)==c()(e.moduleStyle)&&e.moduleStyle,globalStyle:c()(!0)==c()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-clouds-404",id:e.id&&c()("8")==c()(e.id)?e.id:"",reactRouter:c()(!0)==c()(e.reactRouter)&&e.reactRouter,link:e.link&&c()({})==c()(e.link)?e.link:{},text404:e.text404&&c()("8")==c()(e.text404)?e.text404:"404",text1:e.text1&&c()("8")==c()(e.text1)?e.text1:"requested page",text2:e.text2&&c()("8")==c()(e.text2)?e.text2:"was not found",bad:c()(!0)==c()(e.bad)&&e.bad},n}return u()(r,[{key:"componentDidMount",value:function(){q(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"callback",value:function(e){var t=this.state.link;if(t){var r=t.callback;r&&"function"==typeof r&&r(e)}}},{key:"render",value:function(){var e=this,t=this.state,r=t.reactRouter,n=t.text404,o=t.text1,l=t.text2,i=t.bad,s=t.addClass,u=t.defaultClass,f=t.id,p=t.link,d=p.href,m=p.text,h=p.props;return b.a.createElement("div",{className:"".concat(u," ").concat(s),id:f},b.a.createElement("div",{className:"holder-404"},b.a.createElement("div",{className:"cloud cloud-1"}),b.a.createElement("div",{className:"cloud cloud-2"}),1==i&&b.a.createElement("div",{className:"cloud cloud-3 bad-cloud-3"},b.a.createElement("div",{className:"bolt bolt-1"},b.a.createElement("div",{className:"bolt-part-1"},b.a.createElement("div",{className:"bolt-part-2"},b.a.createElement("div",{className:"bolt-part-3"})))),b.a.createElement("div",{className:"bolt bolt-2"},b.a.createElement("div",{className:"bolt-part-1"},b.a.createElement("div",{className:"bolt-part-2"},b.a.createElement("div",{className:"bolt-part-3"}))))),0==i&&b.a.createElement("div",{className:"cloud cloud-3"}),b.a.createElement("div",{className:"cloud cloud-4"}),1==i&&b.a.createElement("div",{className:"cloud cloud-5 bad-cloud-5"},b.a.createElement("div",{className:"bolt bolt-3"},b.a.createElement("div",{className:"bolt-part-1"},b.a.createElement("div",{className:"bolt-part-2"},b.a.createElement("div",{className:"bolt-part-3"})))),b.a.createElement("div",{className:"bolt bolt-4"},b.a.createElement("div",{className:"bolt-part-1"},b.a.createElement("div",{className:"bolt-part-2"},b.a.createElement("div",{className:"bolt-part-3"}))))),0==i&&b.a.createElement("div",{className:"cloud cloud-5"}),b.a.createElement("div",{className:"cloud cloud-6"})),b.a.createElement("div",{className:"content-404"},b.a.createElement("div",{className:"text-404"},n),b.a.createElement("hr",null),b.a.createElement("div",{className:"text-1"},o),b.a.createElement("div",{className:"text-2"},l),d&&c()("8")==c()(d)&&1==r&&b.a.createElement(A,a()({className:"button-navigation",to:d},h,{onClick:function(t){return e.callback(t)}}),m),d&&c()("8")==c()(d)&&!1===r&&b.a.createElement("a",a()({className:"button-navigation",href:d},h,{onClick:function(t){return e.callback(t)}}),m)))}}]),r}(y.Component);t.default=M}]);