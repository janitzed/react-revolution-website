module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=require("react")},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}t.exports=function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}},function(t,e,n){var a=n(9);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}},function(t,e,n){var a=n(0),o=n(3);t.exports=function(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e,a){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,a)}t.exports=n},function(t,e,n){"use strict";n.r(e);var a=n(2),o=n.n(a),i=n(0),r=n.n(i),l=n(5),s=n.n(l),c=n(6),u=n.n(c),d=n(3),f=n.n(d),g=n(7),m=n.n(g),p=n(8),h=n.n(p),y=n(4),v=n.n(y),b=n(1),k=n.n(b),C="https://react-revolution.j.pl/";var x=function(t,e,n){var a="".concat(C,"public/react-revolution/").concat("v3.0.1","/css/").concat(n,".css"),o="".concat(C,"public/react-revolution/").concat("v3.0.1","/css/react-revolution.css"),i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css");var r=function(){document.getElementsByTagName("head")[0].prepend(i)};if(t){var l="react-revolution-".concat(n);null==document.getElementById(l)&&(i.setAttribute("id",l),i.setAttribute("href",a),r())}if(e){var s="react-revolution-react-revolution";null==document.getElementById(s)&&(i.setAttribute("id",s),i.setAttribute("href",o),r())}},O=void 0,S=function t(){var e="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return O!==e?(O=e,e):t()},w=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(e&&e.length)for(var a=0;a<=e.length-1;a++)null==e[a].toggled&&(e[a].toggled=!1),null==e[a].uuid&&(e[a].unique="".concat(S()).concat(S()).concat(S())),null==e[a].key&&(e[a].key="single-entry-".concat(a).concat(e[a].text?e[a].text:"")),null==e[a].uuid&&(e[a].iconId="".concat(S())),null==e[a].classList&&(e[a].classList=""),null==e[a].loopCount&&(e[a].loopCount=1),n&&e[a].data&&r()([])==r()(e[a].data)&&e[a].data.length&&(e[a].childrensNestedCount=n.childrensNestedCount+1),n||(e[a].childrensNestedCount=1),e[a].data&&r()([])==r()(e[a].data)&&e[a].data.length&&t(e[a].data,e[a]);return e},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!1;return t.map((function(t){n[t]!==e[t]&&(a=!0)})),a};function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return h()(this,n)}}var P=function(t){m()(n,t);var e=E(n);function n(t){var a;return s()(this,n),(a=e.call(this,t)).buildData=a.buildData.bind(f()(a)),a.toggleAllBack=a.toggleAllBack.bind(f()(a)),a.resize=a.resize.bind(f()(a)),a.handleBlur=a.handleBlur.bind(f()(a)),a.state={isMinified:!1,moduleStyle:r()(!0)==r()(t.moduleStyle)&&t.moduleStyle,globalStyle:r()(!0)==r()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&r()("8")==r()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&r()("8")==r()(t.defaultClass)?t.defaultClass:"rr-articles",id:t.id&&r()("8")==r()(t.id)?t.id:"",closeOnClickOutside:r()(!0)==r()(t.closeOnClickOutside)&&t.closeOnClickOutside,data:t.data&&r()([])==r()(t.data)?w(t.data):[],animation:t.animation&&r()("8")==r()(t.animation)?t.animation:void 0,itemsPerLine:r()(8)==r()(t.itemsPerLine)?t.itemsPerLine:3,mediaBreak:t.mediaBreak&&r()(8)==r()(t.mediaBreak)?t.mediaBreak:void 0,toggleOn:t.toggleOn&&r()("8")==r()(t.toggleOn)?t.toggleOn:"",toggleForwards:t.toggleForwards?t.toggleForwards:"",toggleBackwards:t.toggleBackwards?t.toggleBackwards:"",persist:r()(!0)==r()(t.persist)&&t.persist},a.refNode=k.a.createRef(),a}return u()(n,[{key:"componentDidMount",value:function(){x(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.state.mediaBreak&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"componentWillUnmount",value:function(){this.state.mediaBreak&&window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var t=this.state,e=t.mediaBreak,n=t.isMinified;document.documentElement.getBoundingClientRect().width<=e?n||this.setState({isMinified:!0},this.buildData):n&&this.setState({isMinified:!1},this.buildData)}},{key:"handleBlur",value:function(t){t.currentTarget.contains(t.relatedTarget)||this.toggleAllBack()}},{key:"buildData",value:function(t){var e=this,n=this.state,a=n.itemsPerLine,i=n.isMinified,l=n.toggleForwards,s=n.toggleBackwards,c=this.state,u=c.toggleOn,d=c.persist,f="group flex ".concat(i?"flex-column isMinified":"flex-row"),g=[],m=[];if(t&&t.length){u&&["title","text"].includes(u)||(u="box");for(var p=function(n){var i=!0,c=t[n],p=c.title,h=c.titleProps,y=c.text,v=c.textProps,b=c.toggled,C=c.unique,x=c.classList,O=c.href,w=(c.icon,c.childrensNestedCount,c.key),B=c.dataToggle,E=c.border;B&&b&&d&&(i=!1),O&&r()("8")==r()(O)&&(O=O.toLowerCase()),x||(x=""),h&&r()(h)===r()({})||(h={});try{Object.keys(h)}catch(t){h={}}var P=[],L=[];p&&(r()("8")==r()(p)?L.push(k.a.createElement("h1",o()({key:S(),className:"title ".concat("title"==u&&B&&b&&d?"data-toggled":"")},h,"title"==u&&!l&&i&&{onClick:function(t){return e.toggle(C)}}),p)):L.push(k.a.createElement("div",o()({key:S(),className:"title ".concat("title"==u&&B&&b&&d?"data-toggled":"")},h,"title"==u&&!l&&i&&{onClick:function(t){return e.toggle(C)}}),p))),y&&(r()("8")==r()(p)?L.push(k.a.createElement("p",o()({key:S(),className:"text ".concat("text"==u&&B&&b&&d?"data-toggled":"")},v,"text"==u&&!l&&i&&{onClick:function(t){return e.toggle(C)}}),y)):L.push(k.a.createElement("div",o()({key:S(),className:"text ".concat("text"==u&&B&&b&&d?"data-toggled":"")},v,"text"==u&&!l&&i&&{onClick:function(t){return e.toggle(C)}}),y)));var j=!1,M={};if(E&&r()({})==r()(E)){var N=E.site,_=E.width,A=E.color;if(N&&_&&A)if(r()("8")==r()(N)&&["top","right","bottom","left"].includes(N)&&r()(8)==r()(_)&&r()("8")==r()(A))M["border".concat(N.charAt(0).toUpperCase()).concat(N.substring(1,N.length))]="".concat(_,"px solid ").concat(A),j=!0}m.push(k.a.createElement("div",o()({key:w,className:"single-entry ".concat("box"==u&&B&&b&&d?"data-toggled":"")},"box"==u&&!l&&i&&{onClick:function(t){return e.toggle(C)}}),j&&k.a.createElement("div",{className:"border",style:M}),k.a.createElement("div",{className:"content ".concat(P&&P.length?"flex flex-row":"")},P&&P,L&&k.a.createElement("div",{className:"right"},L,!b&&l&&k.a.createElement("span",l&&i&&{onClick:function(t){return e.toggle(C)}},l),B&&b&&k.a.createElement("div",{key:S(),className:x},B),b&&s&&!d&&k.a.createElement("span",s&&i&&{onClick:function(t){return e.toggle(C)}},s))))),(m.length==a||m.length&&n==t.length-1)&&(g.push(k.a.createElement("div",{key:S(),className:f},m)),m=[])},h=0;h<=t.length-1;h++)p(h)}return g}},{key:"toggle",value:function(t){var e,n=this,a=this.state,o=a.data,i=a.persist,l=this.state.animation,s=0;if(["height","scale","opacity"].includes(l)||(l=void 0),o&&o.length)for(var c=function(a){if(o[a].unique==t)return l&&(s=300),i&&0==!o[a].toggled?{v:null}:(0==(e=!o[a].toggled)?o[a].classList="".concat(o[a].classList," ").concat(l?"animation-".concat(l,"-back"):""):(o[a].classList="toggling ".concat(l?"animation-".concat(l):""),o[a].toggled=!0,setTimeout((function(){o[a].classList="toggled ".concat(l?"animation-".concat(l):""),n.setState({data:o})}),s)),e?n.setState({data:o}):n.setState({data:o},(function(){setTimeout((function(){o[a].classList="",o[a].toggled=!1,n.setState({data:o})}),s)})),"break")},u=0;u<=o.length-1;u++){var d=c(u);if("break"===d)break;if("object"===r()(d))return d.v}}},{key:"toggleAllBack",value:function(){var t=this,e=this.state,n=e.data,a=e.persist,o=this.state.animation,i=0;if(["height","scale","opacity"].includes(o)||(o=void 0),n&&n.length)for(var r=function(e){o&&(i=300),n[e].classList="".concat(n[e].classList," ").concat(o?"animation-".concat(o,"-back"):"");t.setState({data:n},(function(){setTimeout((function(){n[e].toggled=!!a,n[e].classList="",t.setState({data:n})}),i)}))},l=0;l<=n.length-1;l++)r(l)}},{key:"render",value:function(){var t=this,e=this.state,n=e.addClass,a=e.defaultClass,i=e.id,r=e.data,l=e.closeOnClickOutside;return k.a.createElement("div",o()({className:"".concat(a," ").concat(n),id:i},1==l&&{onBlur:function(e){return t.handleBlur(e)}},{tabIndex:"0"}),this.buildData(r))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return B(["moduleStyle","globalStyle","addClass","defaultClass","id","data","animation","itemsPerLine","mediaBreak","toggleOn","persist","toggleForwards","toggleBackwards"],t,e)?{moduleStyle:r()(!0)==r()(t.moduleStyle)&&t.moduleStyle,globalStyle:r()(!0)==r()(t.globalStyle)&&t.globalStyle,addClass:t.addClass&&r()("8")==r()(t.addClass)?t.addClass:"",defaultClass:t.defaultClass&&r()("8")==r()(t.defaultClass)?t.defaultClass:"rr-articles",id:t.id&&r()("8")==r()(t.id)?t.id:"",closeOnClickOutside:r()(!0)==r()(t.closeOnClickOutside)&&t.closeOnClickOutside,data:t.data&&r()([])==r()(t.data)?w(t.data):[],animation:t.animation&&r()("8")==r()(t.animation)?t.animation:void 0,itemsPerLine:r()(8)==r()(t.itemsPerLine)?t.itemsPerLine:3,mediaBreak:t.mediaBreak&&r()(8)==r()(t.mediaBreak)?t.mediaBreak:void 0,toggleOn:t.toggleOn&&r()("8")==r()(t.toggleOn)?t.toggleOn:"",toggleForwards:t.toggleForwards?t.toggleForwards:"",toggleBackwards:t.toggleBackwards?t.toggleBackwards:"",persist:r()(!0)==r()(t.persist)&&t.persist}:null}}]),n}(k.a.Component);e.default=P}]);