module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(9);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,n){var o=n(0),r=n(2);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o),s=n(0),l=n.n(s),u=n(5),a=n.n(u),i=n(6),c=n.n(i),f=n(2),d=n.n(f),p=n(7),g=n.n(p),v=n(8),h=n.n(v),m=n(3),y=n.n(m),b=n(1),S=n.n(b),k=function(){var e=Math.floor(Date.now()/1e3);return"".concat(e).concat(Math.floor(1e6*Math.random())).concat(Math.floor(1e6*Math.random()))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1;return e.map((function(e){n[e]!==t[e]&&(o=!0)})),o},x="https://react-revolution.j.pl/";var M=function(e,t,n){var o="".concat(x,"public/react-revolution/").concat("v3.0.0","/css/").concat(n,".css"),r="".concat(x,"public/react-revolution/").concat("v3.0.0","/css/react-revolution.css"),s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css");var l=function(){document.getElementsByTagName("head")[0].prepend(s)};if(e){var u="react-revolution-".concat(n);null==document.getElementById(u)&&(s.setAttribute("id",u),s.setAttribute("href",o),l())}if(t){var a="react-revolution-react-revolution";null==document.getElementById(a)&&(s.setAttribute("id",a),s.setAttribute("href",r),l())}};function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}var E=function(e){g()(n,e);var t=A(n);function n(e){var o;return a()(this,n),(o=t.call(this,e)).callback=o.callback.bind(d()(o)),o.setValue=o.setValue.bind(d()(o)),o.callbackEsc=o.callbackEsc.bind(d()(o)),o.handleMouseDown=o.handleMouseDown.bind(d()(o)),o.toggleSelection=o.toggleSelection.bind(d()(o)),o.setFocusUpdater=o.setFocusUpdater.bind(d()(o)),o.setArrow=o.setArrow.bind(d()(o)),o.setMouseMoved=o.setMouseMoved.bind(d()(o)),o.state={suggestions:[],selectedArrow:null,moduleStyle:l()(!0)==l()(e.moduleStyle)&&e.moduleStyle,globalStyle:l()(!0)==l()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&l()("8")==l()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&l()("8")==l()(e.defaultClass)?e.defaultClass:"rr-input-suggestion-array",id:e.id&&l()("8")==l()(e.id)?e.id:"",plainValue:e.value&&l()("8")==l()(e.value)?e.value:"",callback:e.callback&&"function"==typeof e.callback?e.callback:void 0,callbackSelection:e.callbackSelection&&"function"==typeof e.callbackSelection?e.callbackSelection:void 0,selected:e.selected&&l()([])==l()(e.selected)?e.selected:[],suggestionsToFilter:e.suggestions&&l()([])==l()(e.suggestions)?e.suggestions:[],inputPlaceholder:e.inputPlaceholder&&l()("8")==l()(e.inputPlaceholder)?e.inputPlaceholder:"",props:e.props&&l()({})==l()(e.props)?e.props:{},inputType:e.inputType&&l()("8")==l()(e.inputType)?e.inputType:"text",getValueFromCallback:l()(!0)==l()(e.getValueFromCallback)&&e.getValueFromCallback,emptySuggestionAfterSelection:l()(!0)!=l()(e.emptySuggestionAfterSelection)||e.emptySuggestionAfterSelection,sortSelected:e.sortSelected&&l()("8")==l()(e.sortSelected)?e.sortSelected:void 0,sortSuggestions:e.sortSuggestions&&l()("8")==l()(e.sortSuggestions)?e.sortSuggestions:void 0},o.availableSorts=["asc","desc"],o.mouseMoved=!1,o.inputRef=S.a.createRef(),o.refNodeUl=S.a.createRef(),o.setMouseMovedTimeout=null,o}return c()(n,[{key:"componentDidMount",value:function(){M(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass),this.setFocusUpdater(!0),document.addEventListener("mousedown",this.handleMouseDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleMouseDown),this.refNodeUl&&this.refNodeUl.current&&this.refNodeUl.current.removeEventListener("mousemove",this.setMouseMoved)}},{key:"componentDidUpdate",value:function(){this.refNodeUl&&this.refNodeUl.current&&(this.refNodeUl.current.removeEventListener("mousemove",this.setMouseMoved),this.refNodeUl.current.addEventListener("mousemove",this.setMouseMoved))}},{key:"setMouseMoved",value:function(){var e=this;this.mouseMoved=!0,clearTimeout(this.setMouseMovedTimeout),this.setMouseMovedTimeout=setTimeout((function(){e.mouseMoved=!1}),300)}},{key:"setFocusUpdater",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t?100:0;setTimeout((function(){var n=e.state.getValueFromCallback;if(e.inputNode){var o=e.inputNode.value||e.inputNode.defaultValue;e.setState({plainValue:o},(function(){t&&(n?e.callback(o):e.callback())}))}}),n)}},{key:"handleMouseDown",value:function(e){this.refNodeUl&&this.refNodeUl.current&&!this.refNodeUl.current.contains(e.target)&&this.setState({suggestions:[],setArrow:null})}},{key:"callback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.state,n=t.getValueFromCallback,o=t.callback,r=t.plainValue;o&&o(n?e:r)}},{key:"callbackEsc",value:function(){this.setState({suggestions:[],setArrow:null})}},{key:"setValue",value:function(e){var t=this,n=this.state.getValueFromCallback,o=e.target.value;this.state.allowOnlyAZ&&(o=(o=o.replace(/[^a-zA-Z ]/gim,"")).trim()),n?(this.callback(o),this.showSuggestions()):this.setState({plainValue:o},(function(){t.callback(),t.showSuggestions()}))}},{key:"showSuggestions",value:function(){var e=[],t=this.state,n=t.suggestionsToFilter,o=t.plainValue,r=t.sortSuggestions;if(r&&this.availableSorts.includes(r)&&("asc"==r&&n.sort((function(e,t){return e.text>t.text?1:-1})),"desc"==r&&n.sort((function(e,t){return e.text>t.text?-1:1}))),o.length){for(var s=0;s<=n.length-1;s++){var l=n[s].text;l&&-1!==l.indexOf(o)&&e.push(n[s])}if(e.length){for(var u=[],a=[],i=0;i<=e.length-1;i++){var c=e[i].text;u.includes(c)||(u.push(e[i]),a.push(i))}for(var f=[],d=0;d<=a.length-1;d++)f.push(e[a[d]]);this.setState({suggestions:f})}else this.setState({suggestions:[]})}else this.setState({suggestions:[]})}},{key:"toggleSelection",value:function(e){var t=this,n=this.state,o=n.selected,r=n.callbackSelection,s=n.emptySuggestionAfterSelection,l=n.sortSelected,u=n.plainValue,a=e.text;if(a){var i=!1;o.map((function(e){var t=e.text;t&&t==a&&(i=!0)})),i?o=o.filter((function(e){return e.text!==a})):o.push(e)}l&&this.availableSorts.includes(l)&&("asc"==l&&o.sort((function(e,t){return e.text>t.text?1:-1})),"desc"==l&&o.sort((function(e,t){return e.text>t.text?-1:1}))),r&&r(o),this.setState({selected:o,plainValue:s?"":u},(function(){s&&t.setState({filter:"",suggestions:[],setArrow:null}),t.inputRef&&t.inputRef.current&&t.inputRef.current.focus()}))}},{key:"handleKeyDown",value:function(e){var t=this,n=this.state,o=n.selectedArrow,r=n.suggestions,s=n.plainValue;return e.persist(),null==o&&"ArrowDown"===e.key&&(o=-1),"Escape"===e.key?this.callbackEsc():"Enter"===e.key&&-1!==o&&null!==o&&void 0!==r[o]?this.toggleSelection(r[o]):("ArrowDown"===e.key&&r.length&&(o+=1)>=r.length-1&&(o=r.length-1),"ArrowUp"===e.key&&r.length&&(o-=1)<=0&&(o=0),""!=s&&r.length||(o=null),void this.setState({selectedArrow:o},(function(){if(t.suggestionsHolder){var n=t.state.selectedArrow,o=t.suggestionsHolder.getBoundingClientRect().height;if("ArrowDown"===e.key&&40*n+80>o)return t.suggestionsHolder.scrollTop=t.suggestionsHolder.scrollTop+40;"ArrowUp"===e.key&&t.suggestionsHolder.scrollTop>40*n-40&&(t.suggestionsHolder.scrollTop=t.suggestionsHolder.scrollTop-40)}})))}},{key:"setArrow",value:function(e){var t=this;this.state.selectedArrow!==e&&this.mouseMoved&&this.setState({selectedArrow:e},(function(){t.inputRef&&t.inputRef.current&&t.inputRef.current.focus()}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.addClass,o=t.selected,s=t.defaultClass,l=t.id,u=t.props,a=t.suggestions,i=t.plainValue,c=t.inputPlaceholder,f=t.inputType,d=t.selectedArrow;return S.a.createElement("div",{className:"".concat(s," ").concat(n)},S.a.createElement("div",{className:"input"},0!==o.length&&S.a.createElement("div",{className:"choosed"},o.map((function(t){var n=t.text;if(n)return S.a.createElement("div",{key:k(),className:"item ff-title"},S.a.createElement("div",{onClick:function(n){return e.toggleSelection(t)},className:"remove"},"x"),n)}))),S.a.createElement("input",r()({ref:this.inputRef,type:f,value:i,onChange:function(t){return e.setValue(t)},placeholder:c,onKeyDown:function(t){return e.handleKeyDown(t)},id:l},u)),""!==i&&a&&0!==a.length&&S.a.createElement("div",{className:"suggestions-area"},S.a.createElement("ul",{className:"ul",ref:this.refNodeUl},S.a.createElement("span",{className:"suggestions",ref:function(t){return e.suggestionsHolder=t}},a.map((function(t,n){var r=o.includes(t)?"active":"";null!==d&&void 0!==a[d]&&d==n&&(r="".concat(r," selected"));var s=t.text;if(s)return S.a.createElement("li",{className:r,key:k(),onClick:function(n){return e.toggleSelection(t)},onMouseOver:function(){return e.setArrow(n)}},s)})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return w(["value"],e,t)?l()(!0)==l()(e.getValueFromCallback)&&e.getValueFromCallback?{plainValue:e.value}:{plainValue:t.plainValue}:null}}]),n}(S.a.Component);t.default=E}]);