module.exports=(()=>{var e={694:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(924),o=r.n(n),a=r(946),s=r.n(a),i=r(33),c=r.n(i),l=r(491),u=r.n(l),d=r(22),f=r.n(d),m=r(246),v=r.n(m),h=r(323),p=r.n(h);const y=require("react");var b=r.n(y),E=void 0;const g=function e(){var t=Math.floor(Date.now()/1e3),r="".concat(t).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(E!==r)return E=r,r;e()};var x="https://react-revolution.j.pl/";const S=function(e,t,r){var n="".concat(x,"public/react-revolution/").concat("v4.0.1","/css/").concat(r,".css"),o="".concat(x,"public/react-revolution/").concat("v4.0.1","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var s=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var i="react-revolution-".concat(r);null==document.getElementById(i)&&(a.setAttribute("id",i),a.setAttribute("href",n),s())}if(t){var c="react-revolution-react-revolution";null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",o),s())}};function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p()(e);if(t){var o=p()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v()(this,r)}}const k=function(e){f()(r,e);var t=M(r);function r(e){var n;return s()(this,r),(n=t.call(this,e)).scrollEvent=n.scrollEvent.bind(u()(n)),n.loadMore=n.loadMore.bind(u()(n)),n.removeScrollEvent=n.removeScrollEvent.bind(u()(n)),n.resize=n.resize.bind(u()(n)),n.rerenderItems=n.rerenderItems.bind(u()(n)),n.state={dataJsx:[],start:0,end:e.defaultItems&&o()(8)==o()(e.defaultItems)?e.defaultItems:3,isMinified:!1,moduleStyle:o()(!0)==o()(e.moduleStyle)&&e.moduleStyle,globalStyle:o()(!0)==o()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&o()("8")==o()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&o()("8")==o()(e.defaultClass)?e.defaultClass:"rr-cards-scroll",id:e.id&&o()("8")==o()(e.id)?e.id:"",itemsPerLine:e.itemsPerLine&&o()(8)==o()(e.itemsPerLine)?e.itemsPerLine:3,defaultItems:e.defaultItems&&o()(8)==o()(e.defaultItems)?e.defaultItems:3,data:e.data&&o()([])==o()(e.data)?e.data:[],mediaBreak:e.mediaBreak&&o()(8)==o()(e.mediaBreak)?e.mediaBreak:void 0,minify:o()(8)==o()(e.minify)?e.minify:0},n}return c()(r,[{key:"componentDidMount",value:function(){S(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var e=this.state.mediaBreak;this.cardsReference&&(this.cardsReference.removeEventListener("scroll",this.scrollEvent),this.cardsReference.addEventListener("scroll",this.scrollEvent)),this.loadMore(),e&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent(),this.state.mediaBreak&&window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var e=this.state,t=e.mediaBreak,r=e.isMinified;document.documentElement.getBoundingClientRect().width<=t?r||this.setState({isMinified:!0},this.rerenderItems):r&&this.setState({isMinified:!1},this.rerenderItems)}},{key:"removeScrollEvent",value:function(){this.cardsReference&&this.cardsReference.removeEventListener("scroll",this.scrollEvent)}},{key:"loadMore",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.state,n=r.data,o=r.dataJsx,a=r.itemsPerLine,s=r.isMinified,i=r.start,c=r.end,l="cards-group flex ".concat(s?"flex-column isMinified":"flex-row"),u=[],d=0;if(n=n.slice(i,c),t&&0==n.length&&this.cardsReference)return this.removeScrollEvent();for(var f=0;f<=n.length-1;f++){var m=n[f],v=m.title,h=m.content,p=m.footer;d++,u.push(b().createElement("div",{key:g(),className:"card flex flex-column"},v&&b().createElement("div",{className:"title"},v),h&&b().createElement("div",{className:"content"},h),p&&b().createElement("div",{className:"footer"},p))),d==a&&(o.push(b().createElement("div",{key:g(),className:"cards-group ".concat(l)},u)),u=[],d=0)}u.length&&o.push(b().createElement("div",{key:g(),className:"cards-group ".concat(l)},u)),this.setState({dataJsx:o,start:c,end:c+a},(function(){0==i&&e.resize()}))}},{key:"rerenderItems",value:function(){for(var e=this.state,t=e.data,r=e.start,n=e.itemsPerLine,o=e.isMinified,a="cards-group flex ".concat(o?"flex-column isMinified":"flex-row"),s=[],i=[],c=0,l=0;l<=t.length-1&&!(l>=r);l++){var u=t[l],d=u.title,f=u.content,m=u.footer;c++,i.push(b().createElement("div",{key:g(),className:"card flex flex-column"},d&&b().createElement("div",{className:"title"},d),f&&b().createElement("div",{className:"content"},f),m&&b().createElement("div",{className:"footer"},m))),c==n&&(s.push(b().createElement("div",{key:g(),className:"cards-group ".concat(a)},i)),i=[],c=0)}i.length&&s.push(b().createElement("div",{key:g(),className:"cards-group ".concat(a)},i)),this.setState({dataJsx:s})}},{key:"scrollEvent",value:function(e){var t=this.state.minify,r=parseInt(t);this.cardsReference&&this.cardsReference.offsetHeight+this.cardsReference.scrollTop>=this.cardsReference.scrollHeight-r&&this.loadMore(!0)}},{key:"render",value:function(){var e=this,t=this.state,r=t.addClass,n=t.dataJsx,o=t.defaultClass,a=t.id;return b().createElement("div",{ref:function(t){return e.cardsReference=t},className:"".concat(o," ").concat(r),id:a},n)}}]),r}(b().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},323:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},22:(e,t,r)=>{var n=r(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},246:(e,t,r)=>{var n=r(924),o=r(491);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},596:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},924:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(694)})();