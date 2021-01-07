module.exports=(()=>{var e={735:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(924),l=r.n(n),i=r(946),o=r.n(i),a=r(33),d=r.n(a),c=r(491),s=r.n(c),u=r(22),y=r.n(u),m=r(246),f=r.n(m),p=r(323),v=r.n(p);const h=require("react");var b=r.n(h),E=void 0;const g=function e(){var t=Math.floor(Date.now()/1e3),r="".concat(t).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()));if(E!==r)return E=r,r;e()};const S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!1;return e.map((function(e){r[e]!==t[e]&&(n=!0)})),n};var x="https://react-revolution.j.pl/";const C=function(e,t,r){var n="".concat(x,"public/react-revolution/").concat("v4.1.0","/css/").concat(r,".css"),l="".concat(x,"public/react-revolution/").concat("v4.1.0","/css/react-revolution.css"),i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css");var o=function(){document.getElementsByTagName("head")[0].prepend(i)};if(e){var a="react-revolution-".concat(r);null==document.getElementById(a)&&(i.setAttribute("id",a),i.setAttribute("href",n),o())}if(t){var d="react-revolution-react-revolution";null==document.getElementById(d)&&(i.setAttribute("id",d),i.setAttribute("href",l),o())}};function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var l=v()(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return f()(this,r)}}const k=function(e){y()(r,e);var t=M(r);function r(e){var n;return o()(this,r),(n=t.call(this,e)).buildData=n.buildData.bind(s()(n)),n.resize=n.resize.bind(s()(n)),n.getCircles=n.getCircles.bind(s()(n)),n.getLineEntry=n.getLineEntry.bind(s()(n)),n.state={isMinified:!1,moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-timeline",id:e.id&&l()("8")==l()(e.id)?e.id:"",data:e.data&&l()([])==l()(e.data)?e.data:void 0,mediaBreak:e.mediaBreak&&l()(8)==l()(e.mediaBreak)?e.mediaBreak:void 0,lineMiddle:l()(!0)==l()(e.lineMiddle)&&e.lineMiddle,lineTitle:l()(!0)==l()(e.lineTitle)&&e.lineTitle,lineEntry:l()(!0)==l()(e.lineEntry)&&e.lineEntry,colorLineMiddle:e.colorLineMiddle&&l()("8")==l()(e.colorLineMiddle)?e.colorLineMiddle:"#dadce0",colorLineEntry:e.colorLineEntry&&l()("8")==l()(e.colorLineEntry)?e.colorLineEntry:"#dadce0",colorBorderEntry:e.colorBorderEntry&&l()("8")==l()(e.colorBorderEntry)?e.colorBorderEntry:"#dadce0",borderStyle:e.borderStyle&&l()("8")==l()(e.borderStyle)&&["solid","dashed","mixed","!mixed"].includes(e.borderStyle)?e.borderStyle:"solid",dashedSize:e.dashedSize&&l()("8")==l()(e.dashedSize)&&["small","large"].includes(e.dashedSize)?e.dashedSize:"small"},n}return d()(r,[{key:"componentDidMount",value:function(){C(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.state.mediaBreak&&(window.addEventListener("resize",this.resize),this.resize())}},{key:"resize",value:function(){var e=this.state,t=e.mediaBreak,r=e.isMinified;document.documentElement.getBoundingClientRect().width<=t?r||this.setState({isMinified:!0}):r&&this.setState({isMinified:!1})}},{key:"getLineEntry",value:function(){var e=this.state,t=e.borderStyle,r=e.colorLineEntry,n=e.dashedSize;return"solid"==t||"mixed"==t?b().createElement("div",{className:"line",style:{backgroundColor:r}}):b().createElement("div",{className:"line-dashed-".concat(n),style:{backgroundColor:r}})}},{key:"buildData",value:function(){var e=this,t=["left","right"],r=this.state,n=r.data,l=r.isMinified,i=r.lineEntry,o=r.colorBorderEntry,a=r.lineTitle,d=[];if(n&&n.length)try{n.map((function(r){var n=r.title,c=r.content,s=r.align;s&&t.includes(s)&&!l||(s="center"),d.push(b().createElement("div",{className:"single-entry single-entry-".concat(s," ").concat("center"!==s?"flex":""),key:g()},"right"==s&&!l&&b().createElement("div",{className:"empty"}),b().createElement("div",{className:"content ".concat("center"==s?"w-100":"")},n&&b().createElement("div",{className:"title"},a&&!i&&!l&&e.getLineEntry(),n),c&&b().createElement("div",{className:"data-holder",style:{borderColor:o,borderWidth:"1px",borderStyle:"solid"}},i&&!a&&"center"!==s&&!l&&"right"==s&&b().createElement("div",{className:"line-entry line-entry-".concat(s," flex")},b().createElement("div",{className:"empty-2"},e.getLineEntry()),b().createElement("div",{className:"empty-1"})),i&&!a&&"center"!==s&&!l&&"left"==s&&b().createElement("div",{className:"line-entry line-entry-".concat(s," flex")},b().createElement("div",{className:"empty-1"}),b().createElement("div",{className:"empty-2"},e.getLineEntry())),c&&b().createElement("div",{className:"data"},c))),"left"==s&&!l&&b().createElement("div",{className:"empty"})))}))}catch(e){return[]}return d}},{key:"getCircles",value:function(e){for(var t=[],r=0;r<=200;r++)t.push(b().createElement("span",{className:"circle",key:g(),style:{backgroundColor:e}}));return t}},{key:"render",value:function(){var e=this.state,t=e.addClass,r=e.defaultClass,n=e.id,l=e.lineMiddle,i=e.borderStyle,o=e.dashedSize,a=e.colorLineMiddle;return b().createElement("div",{className:"".concat(r," ").concat(t),id:n},this.buildData(),l&&"solid"==i&&b().createElement("div",{className:"line-middle",style:{backgroundColor:a}}),l&&"!mixed"==i&&b().createElement("div",{className:"line-middle",style:{backgroundColor:a}}),l&&"dashed"==i&&b().createElement("div",{className:"line-middle line-middle-".concat(o," flex flex-column")},this.getCircles(a)),l&&"mixed"==i&&b().createElement("div",{className:"line-middle line-middle-".concat(o," flex flex-column")},this.getCircles(a)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return S(["addClass","defaultClass","id","data","mediaBreak","lineMiddle","lineTitle","lineEntry","colorLineMiddle","colorLineEntry","colorBorderEntry","borderStyle","dashedSize"],e,t)?{addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-timeline",id:e.id&&l()("8")==l()(e.id)?e.id:"",data:e.data&&l()([])==l()(e.data)?e.data:void 0,mediaBreak:e.mediaBreak&&l()(8)==l()(e.mediaBreak)?e.mediaBreak:void 0,lineMiddle:l()(!0)==l()(e.lineMiddle)&&e.lineMiddle,lineTitle:l()(!0)==l()(e.lineTitle)&&e.lineTitle,lineEntry:l()(!0)==l()(e.lineEntry)&&e.lineEntry,colorLineMiddle:e.colorLineMiddle&&l()("8")==l()(e.colorLineMiddle)?e.colorLineMiddle:"#dadce0",colorLineEntry:e.colorLineEntry&&l()("8")==l()(e.colorLineEntry)?e.colorLineEntry:"#dadce0",colorBorderEntry:e.colorBorderEntry&&l()("8")==l()(e.colorBorderEntry)?e.colorBorderEntry:"#dadce0",borderStyle:e.borderStyle&&l()("8")==l()(e.borderStyle)&&["solid","dashed","mixed","!mixed"].includes(e.borderStyle)?e.borderStyle:"solid",dashedSize:e.dashedSize&&l()("8")==l()(e.dashedSize)&&["small","large"].includes(e.dashedSize)?e.dashedSize:"small"}:null}}]),r}(b().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},323:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},22:(e,t,r)=>{var n=r(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},246:(e,t,r)=>{var n=r(924),l=r(491);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t}},596:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},924:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t}},t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(735)})();