module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){t.exports=n(12)()},function(t,e){t.exports=require("react")},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){"use strict";t.exports=function(t,e,n,a,r,o,i,c){if(!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,r,o,i,c],u=0;(s=new Error(e.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}t.exports=function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}},function(t,e,n){var a=n(11);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}},function(t,e,n){var a=n(0),r=n(3);t.exports=function(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?r(t):e}},function(t,e){function n(e,a){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,a)}t.exports=n},function(t,e,n){"use strict";var a=n(13);function r(){}function o(){}o.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,o,i){if(i!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),c=n(7),s=n.n(c),l=n(8),u=n.n(l),f=n(3),d=n.n(f),p=n(9),h=n.n(p),g=n(10),v=n.n(g),y=n(4),m=n.n(y),b=n(2),O=n.n(b),C=n(1),k=n.n(C),x=n(5),R=n.n(x);function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function j(t){return"/"===t.charAt(0)}function T(t,e){for(var n=e,a=n+1,r=t.length;a<r;n+=1,a+=1)t[n]=t[a];t.pop()}var S=function(t,e){void 0===e&&(e="");var n,a=t&&t.split("/")||[],r=e&&e.split("/")||[],o=t&&j(t),i=e&&j(e),c=o||i;if(t&&j(t)?r=a:a.length&&(r.pop(),r=r.concat(a)),!r.length)return"/";if(r.length){var s=r[r.length-1];n="."===s||".."===s||""===s}else n=!1;for(var l=0,u=r.length;u>=0;u--){var f=r[u];"."===f?T(r,u):".."===f?(T(r,u),l++):l&&(T(r,u),l--)}if(!c)for(;l--;l)r.unshift("..");!c||""===r[0]||r[0]&&j(r[0])||r.unshift("");var d=r.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d};function E(t,e,n,a){var r;"string"==typeof t?(r=function(t){var e=t||"/",n="",a="",r=e.indexOf("#");-1!==r&&(a=e.substr(r),e=e.substr(0,r));var o=e.indexOf("?");return-1!==o&&(n=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===n?"":n,hash:"#"===a?"":a}}(t)).state=e:(void 0===(r=w({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(r.key=n),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=S(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}"undefined"==typeof window||!window.document||window.document.createElement;var P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var L=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},N=function(t){function e(){var n,a;_(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=A(this,t.call.apply(t,[this].concat(o))),a.handleClick=function(t){if(a.props.onClick&&a.props.onClick(t),!t.defaultPrevented&&0===t.button&&!a.props.target&&!L(t)){t.preventDefault();var e=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?e.replace(o):e.push(o)}},A(a,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,a=function(t,e){var n={};for(var a in t)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}(t,["replace","to","innerRef"]);R()(this.context.router,"You should not use <Link> outside a <Router>"),R()(void 0!==e,'You must specify the "to" property');var r=this.context.router.history,o="string"==typeof e?E(e,null,null,r.location):e,i=r.createHref(o);return O.a.createElement("a",P({},a,{onClick:this.handleClick,href:i,ref:n}))},e}(O.a.Component);N.propTypes={onClick:k.a.func,target:k.a.string,replace:k.a.bool,to:k.a.oneOfType([k.a.string,k.a.object]).isRequired,innerRef:k.a.oneOfType([k.a.string,k.a.func])},N.defaultProps={replace:!1},N.contextTypes={router:k.a.shape({history:k.a.shape({push:k.a.func.isRequired,replace:k.a.func.isRequired,createHref:k.a.func.isRequired}).isRequired}).isRequired};var D=N,M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!1;return t.map((function(t){n[t]!==e[t]&&(a=!0)})),a},q=void 0,I=function t(){var e="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return q!==e?(q=e,e):t()},B=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(e&&e.length)for(var a=0;a<=e.length-1;a++)null==e[a].toggled&&(e[a].toggled=!1),null==e[a].uuid&&(e[a].unique="".concat(I()).concat(I()).concat(I())),null==e[a].key&&(e[a].key="single-entry-".concat(a).concat(e[a].text?e[a].text:"")),null==e[a].uuid&&(e[a].iconId="".concat(I())),null==e[a].classList&&(e[a].classList=""),null==e[a].loopCount&&(e[a].loopCount=1),n&&e[a].data&&i()([])==i()(e[a].data)&&e[a].data.length&&(e[a].childrensNestedCount=n.childrensNestedCount+1),n||(e[a].childrensNestedCount=1),e[a].data&&i()([])==i()(e[a].data)&&e[a].data.length&&t(e[a].data,e[a]);return e},U="https://react-revolution.j.pl/";var K=function(t,e,n){var a="".concat(U,"public/react-revolution/").concat("v3.0.0","/css/").concat(n,".css"),r="".concat(U,"public/react-revolution/").concat("v3.0.0","/css/react-revolution.css"),o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css");var i=function(){document.getElementsByTagName("head")[0].prepend(o)};if(t){var c="react-revolution-".concat(n);null==document.getElementById(c)&&(o.setAttribute("id",c),o.setAttribute("href",a),i())}if(e){var s="react-revolution-react-revolution";null==document.getElementById(s)&&(o.setAttribute("id",s),o.setAttribute("href",r),i())}};function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=m()(t);if(e){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var H=function(t){h()(n,t);var e=W(n);function n(t){var a;return s()(this,n),(a=e.call(this,t)).buildDataRecursive=a.buildDataRecursive.bind(d()(a)),a.toggle=a.toggle.bind(d()(a)),a.handleClick=a.handleClick.bind(d()(a)),a.toggleAllBack=a.toggleAllBack.bind(d()(a)),a.state={moduleStyle:i()(!0)==i()(t.moduleStyle)&&t.moduleStyle,globalStyle:i()(!0)==i()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&i()("8")==i()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&i()("8")==i()(t.defaultClass)?t.defaultClass:"rr-menu-click-horizontal",id:t.id&&i()("8")==i()(t.id)?t.id:"",data:t.data&&i()([])==i()(t.data)?B(t.data):[],reactRouter:i()(!0)==i()(t.reactRouter)&&t.reactRouter,animation:t.animation&&i()("8")==i()(t.animation)?t.animation:void 0,closeOnClickOutside:i()(!0)==i()(t.closeOnClickOutside)&&t.closeOnClickOutside,dashed:i()(!0)==i()(t.dashed)&&t.dashed},a.refNode=O.a.createRef(),a.isToggling=!1,a}return u()(n,[{key:"componentDidMount",value:function(){K(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.state.closeOnClickOutside&&document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){this.state.closeOnClickOutside&&document.removeEventListener("click",this.handleClick)}},{key:"handleClick",value:function(t){this.refNode&&!this.refNode.current.contains(t.target)&&this.toggleAllBack()}},{key:"buildDataRecursive",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.state,o=a.reactRouter,c=a.dashed,s=[];if(e&&e.length)for(var l=function(a){var l=e[a],u=l.text,f=l.toggled,d=l.unique,p=l.props,h=l.classList,g=l.href,v=l.icon,y=l.childrensNestedCount,m=l.key;g&&i()("8")==i()(g)&&(g=g.toLowerCase());var b=e[a].data?e[a].data:[],C=!!e[a].data;h||(h=""),p&&i()(p)===i()({})||(p={});try{Object.keys(p)}catch(t){p={}}var k="";o&&b&&0==b.length&&(k=O.a.createElement(D,{to:g,className:"text ".concat(n?"child":""),onClick:function(){return t.toggle(d,C)}},v&&v,u)),!o&&b&&0==b.length&&(k=O.a.createElement("a",{href:g,className:"text ".concat(n?"child":""),onClick:function(){return t.toggle(d,C)}},v&&v,u)),b&&0!==b.length&&(k=O.a.createElement("div",{className:"text hasChildren ".concat(n?" child":""," ").concat(f?"isToggled":""),onClick:function(){return t.toggle(d,C)}},v&&v,u)),s.push(O.a.createElement("div",r()({key:m,className:"single-entry ".concat(h," ").concat(b&&0!==b.length?"parent":"")},p),k,f&&b&&0!==b.length&&O.a.createElement("div",{className:"children ".concat(c?"dashed":"children-n-".concat(y))},t.buildDataRecursive(b,!0))))},u=0;u<=e.length-1;u++)l(u);return s}},{key:"toggle",value:function(t){var e=this,n=this.state.data,a=this.state.animation,r=0;this.isToggling=!0,["height","scale","opacity"].includes(a)||(a=void 0);return function o(c){if(c&&c.length)for(var s=function(s){var l=c[s].unique,u=c[s].data;if(l==t){0==!c[s].toggled&&a&&(r=300);var f=function(){c[s].toggled=!c[s].toggled,c[s].classList=c[s].toggled?"toggling ".concat(a?"animation-".concat(a):""):"toggled",setTimeout((function(){c[s].classList=c[s].toggled?"toggled ".concat(a?"animation-".concat(a):""):""}),300)};return 0==!c[s].toggled?(c[s].classList="".concat(c[s].classList," ").concat(a?"animation-".concat(a,"-back"):""),{v:e.setState({data:n},f)}):(f(),"break")}u&&i()([])==i()(u)&&0!==u.length&&o(u)},l=0;l<=c.length-1;l++){var u=s(l);if("break"===u)break;if("object"===i()(u))return u.v}}(n),setTimeout((function(){e.setState({data:n},(function(){return setTimeout((function(){e.setState({data:n}),e.isToggling=!1}),300)}))}),r)}},{key:"toggleAllBack",value:function(){var t=this,e=this.state.data,n=this.state.animation,a=0;if(["height","scale","opacity"].includes(n)||(n=void 0),this.isToggling)return null;!function r(o){if(o&&o.length)for(var c=function(c){var s=o[c].data;n&&(a=300),o[c].classList="".concat(o[c].classList," ").concat(n?"animation-".concat(n,"-back"):"");t.setState({data:e},(function(){setTimeout((function(){o[c].toggled=!1,o[c].classList="",t.setState({data:e})}),a)})),s&&i()([])==i()(s)&&0!==s.length&&r(s)},s=0;s<=o.length-1;s++)c(s)}(e)}},{key:"render",value:function(){var t=this.state,e=t.addClass,n=t.defaultClass,a=t.id,r=t.data;return O.a.createElement("div",{ref:this.refNode,className:"".concat(n," ").concat(e),id:a},this.buildDataRecursive(r))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return M(["defaultClass","id","data","reactRouter","animation","closeOnClickOutside","dashed"],t,e)?{addClass:t.addClass&&i()("8")==i()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&i()("8")==i()(t.defaultClass)?t.defaultClass:"rr-menu-click-horizontal",id:t.id&&i()("8")==i()(t.id)?t.id:"",data:t.data&&i()([])==i()(t.data)?B(t.data):[],reactRouter:i()(!0)==i()(t.reactRouter)&&t.reactRouter,animation:t.animation&&i()("8")==i()(t.animation)?t.animation:void 0,closeOnClickOutside:i()(!0)==i()(t.closeOnClickOutside)&&t.closeOnClickOutside,dashed:i()(!0)==i()(t.dashed)&&t.dashed}:null}}]),n}(O.a.Component);e.default=H}]);