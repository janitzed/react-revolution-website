module.exports=(()=>{var t={116:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>P});var n=r(264),o=r.n(n),a=r(564),i=r.n(a),c=r(924),l=r.n(c),s=r(946),u=r.n(s),f=r(33),d=r.n(f),h=r(491),v=r.n(h),p=r(22),y=r.n(p),m=r(246),g=r.n(m),b=r(323),E=r.n(b);const w=require("react");var x=r.n(w),S=void 0;const k=function t(){var e=Math.floor(Date.now()/1e3),r="".concat(e).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(S!==r)return S=r,r;t()};var L="https://react-revolution.j.pl/";const j=function(t,e,r){var n="".concat(L,"public/react-revolution/").concat("v4.1.0","/css/").concat(r,".css"),o="".concat(L,"public/react-revolution/").concat("v4.1.0","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var i=function(){document.getElementsByTagName("head")[0].prepend(a)};if(t){var c="react-revolution-".concat(r);null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",n),i())}if(e){var l="react-revolution-react-revolution";null==document.getElementById(l)&&(a.setAttribute("id",l),a.setAttribute("href",o),i())}};function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=E()(t);if(e){var o=E()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}const P=function(t){y()(r,t);var e=R(r);function r(t){var n;return u()(this,r),(n=e.call(this,t)).scrollEvent=n.scrollEvent.bind(v()(n)),n.buildData=n.buildData.bind(v()(n)),n.loadMore=n.loadMore.bind(v()(n)),n.removeScrollEvent=n.removeScrollEvent.bind(v()(n)),n.resize=n.resize.bind(v()(n)),n.attachScrollEvent=n.attachScrollEvent.bind(v()(n)),n.scrollToBottom=n.scrollToBottom.bind(v()(n)),n.state={dataJsx:[],loadingData:!1,isMinified:!1,moduleStyle:l()(!0)==l()(t.moduleStyle)&&t.moduleStyle,globalStyle:l()(!0)==l()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&l()("8")==l()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&l()("8")==l()(t.defaultClass)?t.defaultClass:"rr-cards-scroll-callback",id:t.id&&l()("8")==l()(t.id)?t.id:"",itemsPerLine:t.itemsPerLine&&l()(8)==l()(t.itemsPerLine)?t.itemsPerLine:3,data:t.data&&l()([])==l()(t.data)?t.data:[],callback:t.callback&&"function"==typeof t.callback?t.callback:void 0,callbackProps:t.callbackProps?t.callbackProps:void 0,loading:t.loading?t.loading:"",onReject:t.onReject?t.onReject:"",mediaBreak:t.mediaBreak&&l()(8)==l()(t.mediaBreak)?t.mediaBreak:void 0,minify:l()(8)==l()(t.minify)?t.minify:0,persistReject:l()(!0)==l()(t.persistReject)&&t.persistReject},n.loadingAllowed=!0,n}return d()(r,[{key:"componentDidMount",value:function(){j(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var t=this.state,e=t.data,r=t.mediaBreak;this.attachScrollEvent(),this.buildData(e),r&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent(),this.state.mediaBreak&&window.removeEventListener("resize",this.resize)}},{key:"attachScrollEvent",value:function(){this.cardsReference&&(this.cardsReference.removeEventListener("scroll",this.scrollEvent),this.cardsReference.addEventListener("scroll",this.scrollEvent))}},{key:"resize",value:function(){var t=this.state,e=t.mediaBreak,r=t.isMinified;document.documentElement.getBoundingClientRect().width<=e?r||this.setState({isMinified:!0}):r&&this.setState({isMinified:!1})}},{key:"removeScrollEvent",value:function(){this.cardsReference&&this.cardsReference.removeEventListener("scroll",this.scrollEvent)}},{key:"scrollToBottom",value:function(){if(this.cardsReference)try{this.cardsReference.scrollTop=this.cardsReference.getBoundingClientRect().height}catch(t){}}},{key:"loadMore",value:function(t){var e=this,r=this.state,n=r.callbackProps,a=r.persistReject,c=this.state.callback,l=[];c&&this.loadingAllowed?(this.attachScrollEvent(),this.setState({loadingData:!0,isError:!1},i()(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.scrollToBottom(),r.next=3,c(t,n).then((function(t){return t})).catch((function(t){if(t)return e.setState({errorData:t,isError:!0},(function(){if(a){e.removeScrollEvent();for(var t=[100,200],r=0;r<=t.length-1;r++)setTimeout((function(){e.scrollToBottom()}),t[r])}}))}));case 3:if(null!=(l=r.sent)){r.next=7;break}return e.removeScrollEvent(),r.abrupt("return",e.setState({loadingData:!1,isError:!0},(function(){e.loadingAllowed=!0,a||setTimeout((function(){e.attachScrollEvent()}),500)})));case 7:l&&0!=l.length&&"break"!=l?(e.buildData(l),e.removeScrollEvent(),e.loadingAllowed=!0,e.attachScrollEvent()):(e.removeScrollEvent(),e.setState({loadingData:!1,isError:!1,errorData:void 0}));case 8:case"end":return r.stop()}}),r)}))))):(this.removeScrollEvent(),this.setState({loadingData:!1,isError:!1,errorData:void 0}))}},{key:"buildData",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.state.dataJsx,r=0;r<=t.length-1;r++){var n=t[r],o=n.title,a=n.content,i=n.footer;e.push(x().createElement("div",{key:k(),className:"card flex flex-column"},o&&x().createElement("div",{className:"title"},o),a&&x().createElement("div",{className:"content"},a),i&&x().createElement("div",{className:"footer"},i)))}this.setState({dataJsx:e,loadingData:!1})}},{key:"scrollEvent",value:function(t){var e=this.state.minify,r=parseInt(e);this.cardsReference&&this.loadingAllowed&&this.cardsReference.offsetHeight+this.cardsReference.scrollTop>=this.cardsReference.scrollHeight-r&&(this.loadMore(t),this.loadingAllowed=!1)}},{key:"returnDataJsx",value:function(t){for(var e=this.state.itemsPerLine,r=[],n=[],o=0,a=0;a<=t.length-1;a++)n.push(t[a]),++o==e&&(r.push(x().createElement("div",{key:k(),className:"cards-group flex"},n)),n=[],o=0);return n.length&&r.push(x().createElement("div",{key:k(),className:"cards-group flex"},n)),r}},{key:"renderCards",value:function(t){if(t&&l()([])==l()(t)&&t.length){var e=this.state,r=e.dataJsx,n=e.itemsPerLine,o=e.isMinified,a=[],i=0;return r.map((function(t,e){if(a.push(t),++i==n){var c=a;return i=0,a=[],x().createElement("div",{key:"cards-group-".concat(e),className:"cards-group flex ".concat(o?"flex-column":"flex-row")},c)}if(a.length&&e==r.length-1){var l=a;return i=0,a=[],x().createElement("div",{key:"cards-group-".concat(e),className:"cards-group flex ".concat(o?"flex-column":"flex-row")},l)}}))}return null}},{key:"render",value:function(){var t=this,e=this.state,r=e.isError,n=e.errorData,o=e.addClass,a=e.dataJsx,i=e.defaultClass,c=e.loadingData,l=e.loading,s=e.id,u=e.onReject,f=e.persistReject;return x().createElement("div",{ref:function(e){return t.cardsReference=e},className:"".concat(i," ").concat(o),id:s},this.renderCards(a),c&&l,r&&n&&n,r&&n&&u&&f&&x().createElement("span",{onClick:function(e){return t.loadMore(e)}},u))}}]),r}(x().Component)},491:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},564:t=>{function e(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,l,"next",t)}function l(t){e(i,o,a,c,l,"throw",t)}c(void 0)}))}}},946:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},33:t=>{function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}},323:t=>{function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e},22:(t,e,r)=>{var n=r(596);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},246:(t,e,r)=>{var n=r(924),o=r(491);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},596:t=>{function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e},924:t=>{function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e},264:(t,e,r)=>{t.exports=r(588)},588:t=>{var e=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function f(){}function d(){}function h(){}var v={};v[o]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(k([])));y&&y!==e&&r.call(y,o)&&(v=y);var m=h.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=m.constructor=h,h.constructor=d,d.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),c(m,i,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}return r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(116)})();