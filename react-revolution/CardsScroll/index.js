module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(0),o=r(2);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(4),i=r.n(a),s=r(5),c=r.n(s),l=r(2),u=r.n(l),f=r(6),d=r.n(f),m=r(7),v=r.n(m),p=r(3),h=r.n(p),y=r(1),b=r.n(y),x=void 0,E=function e(){var t="".concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));return x!==t?(x=t,t):e()},g="https://react-revolution.j.pl/";var S=function(e,t,r){var n="".concat(g,"public/react-revolution/").concat("v3.0.1","/css/").concat(r,".css"),o="".concat(g,"public/react-revolution/").concat("v3.0.1","/css/react-revolution.css"),a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css");var i=function(){document.getElementsByTagName("head")[0].prepend(a)};if(e){var s="react-revolution-".concat(r);null==document.getElementById(s)&&(a.setAttribute("id",s),a.setAttribute("href",n),i())}if(t){var c="react-revolution-react-revolution";null==document.getElementById(c)&&(a.setAttribute("id",c),a.setAttribute("href",o),i())}};function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var o=h()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v()(this,r)}}var k=function(e){d()(r,e);var t=M(r);function r(e){var n;return i()(this,r),(n=t.call(this,e)).scrollEvent=n.scrollEvent.bind(u()(n)),n.loadMore=n.loadMore.bind(u()(n)),n.removeScrollEvent=n.removeScrollEvent.bind(u()(n)),n.resize=n.resize.bind(u()(n)),n.rerenderItems=n.rerenderItems.bind(u()(n)),n.state={dataJsx:[],start:0,end:e.defaultItems&&o()(8)==o()(e.defaultItems)?e.defaultItems:3,isMinified:!1,moduleStyle:o()(!0)==o()(e.moduleStyle)&&e.moduleStyle,globalStyle:o()(!0)==o()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&o()("8")==o()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&o()("8")==o()(e.defaultClass)?e.defaultClass:"rr-cards-scroll",id:e.id&&o()("8")==o()(e.id)?e.id:"",itemsPerLine:e.itemsPerLine&&o()(8)==o()(e.itemsPerLine)?e.itemsPerLine:3,defaultItems:e.defaultItems&&o()(8)==o()(e.defaultItems)?e.defaultItems:3,data:e.data&&o()([])==o()(e.data)?e.data:[],mediaBreak:e.mediaBreak&&o()(8)==o()(e.mediaBreak)?e.mediaBreak:void 0,minify:o()(8)==o()(e.minify)?e.minify:0},n}return c()(r,[{key:"componentDidMount",value:function(){S(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass);var e=this.state.mediaBreak;this.cardsReference&&(this.cardsReference.removeEventListener("scroll",this.scrollEvent),this.cardsReference.addEventListener("scroll",this.scrollEvent)),this.loadMore(),e&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent(),this.state.mediaBreak&&window.removeEventListener("resize",this.resize)}},{key:"resize",value:function(){var e=this.state,t=e.mediaBreak,r=e.isMinified;document.documentElement.getBoundingClientRect().width<=t?r||this.setState({isMinified:!0},this.rerenderItems):r&&this.setState({isMinified:!1},this.rerenderItems)}},{key:"removeScrollEvent",value:function(){this.cardsReference&&this.cardsReference.removeEventListener("scroll",this.scrollEvent)}},{key:"loadMore",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.state,n=r.data,o=r.dataJsx,a=r.itemsPerLine,i=r.isMinified,s=r.start,c=r.end,l="cards-group flex ".concat(i?"flex-column isMinified":"flex-row"),u=[],f=0;if(n=n.slice(s,c),t&&0==n.length&&this.cardsReference)return this.removeScrollEvent();for(var d=0;d<=n.length-1;d++){var m=n[d],v=m.title,p=m.content,h=m.footer;f++,u.push(b.a.createElement("div",{key:E(),className:"card flex flex-column"},v&&b.a.createElement("div",{className:"title"},v),p&&b.a.createElement("div",{className:"content"},p),h&&b.a.createElement("div",{className:"footer"},h))),f==a&&(o.push(b.a.createElement("div",{key:E(),className:"cards-group ".concat(l)},u)),u=[],f=0)}u.length&&o.push(b.a.createElement("div",{key:E(),className:"cards-group ".concat(l)},u)),this.setState({dataJsx:o,start:c,end:c+a},(function(){0==s&&e.resize()}))}},{key:"rerenderItems",value:function(){for(var e=this.state,t=e.data,r=e.start,n=e.itemsPerLine,o=e.isMinified,a="cards-group flex ".concat(o?"flex-column isMinified":"flex-row"),i=[],s=[],c=0,l=0;l<=t.length-1&&!(l>=r);l++){var u=t[l],f=u.title,d=u.content,m=u.footer;c++,s.push(b.a.createElement("div",{key:E(),className:"card flex flex-column"},f&&b.a.createElement("div",{className:"title"},f),d&&b.a.createElement("div",{className:"content"},d),m&&b.a.createElement("div",{className:"footer"},m))),c==n&&(i.push(b.a.createElement("div",{key:E(),className:"cards-group ".concat(a)},s)),s=[],c=0)}s.length&&i.push(b.a.createElement("div",{key:E(),className:"cards-group ".concat(a)},s)),this.setState({dataJsx:i})}},{key:"scrollEvent",value:function(e){var t=this.state.minify,r=parseInt(t);this.cardsReference&&this.cardsReference.offsetHeight+this.cardsReference.scrollTop>=this.cardsReference.scrollHeight-r&&this.loadMore(!0)}},{key:"render",value:function(){var e=this,t=this.state,r=t.addClass,n=t.dataJsx,o=t.defaultClass,a=t.id;return b.a.createElement("div",{ref:function(t){return e.cardsReference=t},className:"".concat(o," ").concat(r),id:a},n)}}]),r}(b.a.Component);t.default=k}]);