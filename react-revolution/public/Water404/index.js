module.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=14)}([function(e,t){e.exports=require("react")},function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},function(e,t,a){e.exports=a(12)()},function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},function(e,t,a){"use strict";e.exports=function(e,t,a,n,r,o,i,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[a,n,r,o,i,c],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},function(e,t,a){var n=a(10);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,a){var n=a(1),r=a(11);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,a){"use strict";var n=a(13);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,o,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),o=a(1),i=a.n(o),c=a(6),s=a.n(c),l=a(7),u=a.n(l),f=a(8),m=a.n(f),p=a(9),d=a.n(p),v=a(4),h=a.n(v),y=a(0),b=a.n(y),E=a(2),N=a.n(E),x=a(5),w=a.n(x);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e){return"/"===e.charAt(0)}function j(e,t){for(var a=t,n=a+1,r=e.length;n<r;a+=1,n+=1)e[a]=e[n];e.pop()}var k=function(e,t){void 0===t&&(t="");var a,n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&O(e),i=t&&O(t),c=o||i;if(e&&O(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";if(r.length){var s=r[r.length-1];a="."===s||".."===s||""===s}else a=!1;for(var l=0,u=r.length;u>=0;u--){var f=r[u];"."===f?j(r,u):".."===f?(j(r,u),l++):l&&(j(r,u),l--)}if(!c)for(;l--;l)r.unshift("..");!c||""===r[0]||r[0]&&O(r[0])||r.unshift("");var m=r.join("/");return a&&"/"!==m.substr(-1)&&(m+="/"),m};function R(e,t,a,n){var r;"string"==typeof e?(r=function(e){var t=e||"/",a="",n="",r=t.indexOf("#");-1!==r&&(n=t.substr(r),t=t.substr(0,r));var o=t.indexOf("?");return-1!==o&&(a=t.substr(o),t=t.substr(0,o)),{pathname:t,search:"?"===a?"":a,hash:"#"===n?"":n}}(e)).state=t:(void 0===(r=g({},e)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==t&&void 0===r.state&&(r.state=t));try{r.pathname=decodeURI(r.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return a&&(r.key=a),n?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=k(r.pathname,n.pathname)):r.pathname=n.pathname:r.pathname||(r.pathname="/"),r}"undefined"==typeof window||!window.document||window.document.createElement;var C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},T=function(e){function t(){var a,n;P(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=_(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!S(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},_(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);w()(this.context.router,"You should not use <Link> outside a <Router>"),w()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"==typeof t?R(t,null,null,r.location):t,i=r.createHref(o);return b.a.createElement("a",C({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(b.a.Component);T.propTypes={onClick:N.a.func,target:N.a.string,replace:N.a.bool,to:N.a.oneOfType([N.a.string,N.a.object]).isRequired,innerRef:N.a.oneOfType([N.a.string,N.a.func])},T.defaultProps={replace:!1},T.contextTypes={router:N.a.shape({history:N.a.shape({push:N.a.func.isRequired,replace:N.a.func.isRequired,createHref:N.a.func.isRequired}).isRequired}).isRequired};var A=T,I="https://react-revolution.j.pl/";var q=function(e,t,a){var n="".concat(I,"/public/react-revolution/").concat("v2.0.0","/css/").concat(a,".css"),r="".concat(I,"/public/react-revolution/").concat("v2.0.0","/css/react-revolution.css"),o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css");var i=function(){document.getElementsByTagName("head")[0].prepend(o)};if(e){var c="react-revolution-".concat(a);null==document.getElementById(c)&&(o.setAttribute("id",c),o.setAttribute("href",n),i())}if(t){var s="react-revolution-react-revolution";null==document.getElementById(s)&&(o.setAttribute("id",s),o.setAttribute("href",r),i())}};function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=h()(e);if(t){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var M=function(e){m()(a,e);var t=D(a);function a(e){var n;return s()(this,a),(n=t.call(this,e)).state={moduleStyle:i()(!0)==i()(e.moduleStyle)&&e.moduleStyle,globalStyle:i()(!0)==i()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&i()("8")==i()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&i()("8")==i()(e.defaultClass)?e.defaultClass:"rr-water-404",id:e.id&&i()("8")==i()(e.id)?e.id:"",reactRouter:!!n.props.reactRouter&&n.props.reactRouter,link:e.link&&i()({})==i()(e.link)?e.link:{},text404:e.text404&&i()("8")==i()(e.text404)?e.text404:"404",text1:e.text1&&i()("8")==i()(e.text1)?e.text1:"requested page",text2:e.text2&&i()("8")==i()(e.text2)?e.text2:"was not found",bad:i()(!0)==i()(e.bad)&&e.bad,shipName:e.shipName&&i()("8")==i()(e.shipName)?e.shipName:""},n}return u()(a,[{key:"componentDidMount",value:function(){q(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"callback",value:function(e){var t=this.state.link;if(t){var a=t.callback;a&&"function"==typeof a&&a(e)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.reactRouter,n=t.link,o=t.text404,c=t.text1,s=t.text2,l=t.shipName,u=t.bad,f=t.addClass,m=t.defaultClass,p=t.id,d=n.href,v=n.text,h=n.props;return b.a.createElement("div",{className:"".concat(m," ").concat(f),id:p},b.a.createElement("div",{className:"holder-404"},b.a.createElement("div",{className:"water"},b.a.createElement("div",{className:"box"},b.a.createElement("div",{className:"ship-move"},b.a.createElement("div",{className:"ship"},b.a.createElement("p",{className:"ship-name"},l),b.a.createElement("div",{className:"box box-1"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-2"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-3"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-4"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-5"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-6"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-7"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-8"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-9"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"box box-10"},b.a.createElement("div",{className:"point-x"}),b.a.createElement("div",{className:"point-y"})),b.a.createElement("div",{className:"ship-bottom"},b.a.createElement("div",{className:"spin"},b.a.createElement("div",{className:"spin-end"},b.a.createElement("div",{className:"spin-1"}),b.a.createElement("div",{className:"spin-2"})),b.a.createElement("span",{className:"air-move"},b.a.createElement("div",{className:"air air-1"}),b.a.createElement("div",{className:"air air-2"}),b.a.createElement("div",{className:"air air-3"})))))),b.a.createElement("div",{className:"water-holder"},b.a.createElement("div",{className:"wave water-1"}),b.a.createElement("div",{className:"wave water-2"}),b.a.createElement("div",{className:"wave water-3"}),b.a.createElement("div",{className:"wave water-4"}),b.a.createElement("div",{className:"wave water-5"}),b.a.createElement("div",{className:"wave water-6"}),b.a.createElement("div",{className:"wave water-7"}),b.a.createElement("div",{className:"wave water-8"}),b.a.createElement("div",{className:"wave water-9"}),b.a.createElement("div",{className:"wave water-10"}),b.a.createElement("div",{className:"wave water-11"}),b.a.createElement("div",{className:"wave water-12"}),b.a.createElement("div",{className:"wave water-13"}),b.a.createElement("div",{className:"wave water-14"}),b.a.createElement("div",{className:"wave water-15"}),b.a.createElement("div",{className:"wave water-16"}),b.a.createElement("div",{className:"wave water-17"}),b.a.createElement("div",{className:"wave water-18"}),b.a.createElement("div",{className:"wave water-19"}),b.a.createElement("div",{className:"wave water-20"})),b.a.createElement("div",{className:"fish"},b.a.createElement("span",{className:"fish-content"},b.a.createElement("div",{className:1==u?"fish-body bad-fish":"fish-body"},b.a.createElement("div",{className:"eye"},b.a.createElement("div",{className:"pupil"}))),b.a.createElement("div",{className:1==u?"fin bad-fin":"fin"}),b.a.createElement("div",{className:1==u?"fin fin-bottom bad-fin":"fin fin-bottom"}))),b.a.createElement("div",{className:"fish-2"},b.a.createElement("span",{className:"fish-content"},b.a.createElement("div",{className:1==u?"fish-body fish-body-2 bad-fish":"fish-body fish-body-2"},b.a.createElement("div",{className:"eye"},b.a.createElement("div",{className:"pupil"}))),b.a.createElement("div",{className:1==u?"fin fin-2 bad-fin":"fin fin-2"}),b.a.createElement("div",{className:1==u?"fin fin-2 fin-bottom bad-fin":"fin fin-2 fin-bottom"}))),b.a.createElement("div",{className:"fish-3"},b.a.createElement("span",{className:"fish-content"},b.a.createElement("div",{className:1==u?"fish-body fish-body-3 bad-fish":"fish-body fish-body-3"},b.a.createElement("div",{className:"eye"},b.a.createElement("div",{className:"pupil"}))),b.a.createElement("div",{className:1==u?"fin fin-3 bad-fin":"fin fin-3"}),b.a.createElement("div",{className:1==u?"fin fin-3 fin-bottom bad-fin":"fin fin-3 fin-bottom"})))))),b.a.createElement("div",{className:"content-404"},b.a.createElement("div",{className:"text-404"},o),b.a.createElement("hr",null),b.a.createElement("div",{className:"text-1"},c),b.a.createElement("div",{className:"text-2"},s),d&&i()("8")==i()(d)&&1==a&&b.a.createElement(A,r()({className:"button-navigation",to:d},h,{onClick:function(t){return e.callback(t)}}),v),d&&i()("8")==i()(d)&&!1===a&&b.a.createElement("a",r()({className:"button-navigation",href:d},h,{onClick:function(t){return e.callback(t)}}),v)))}}]),a}(y.Component);t.default=M}]);