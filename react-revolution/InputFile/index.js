module.exports=function(e){var t={};function l(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,l),a.l=!0,a.exports}return l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=11)}([function(e,t){function l(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=l=function(e){return typeof e}:e.exports=l=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(t)}e.exports=l},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}},function(e,t){function l(t){return e.exports=l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(t)}e.exports=l},function(e,t){function l(){return e.exports=l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},l.apply(this,arguments)}e.exports=l},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function l(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}},function(e,t,l){var r=l(10);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,l){var r=l(0),a=l(1);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},function(e,t){function l(t,r){return e.exports=l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(t,r)}e.exports=l},function(e,t,l){"use strict";l.r(t);var r=l(3),a=l.n(r),n=l(5),o=l.n(n),i=l(0),c=l.n(i),u=l(6),s=l.n(u),d=l(7),f=l.n(d),p=l(1),b=l.n(p),y=l(8),h=l.n(y),v=l(9),C=l.n(v),m=l(4),k=l.n(m),S=l(2),g=l.n(S),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;return e.map((function(e){l[e]!==t[e]&&(r=!0)})),r},x="https://react-revolution.j.pl/";var P=function(e,t,l){var r="".concat(x,"public/react-revolution/").concat("v3.0.2","/css/").concat(l,".css"),a="".concat(x,"public/react-revolution/").concat("v3.0.2","/css/react-revolution.css"),n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css");var o=function(){document.getElementsByTagName("head")[0].prepend(n)};if(e){var i="react-revolution-".concat(l);null==document.getElementById(i)&&(n.setAttribute("id",i),n.setAttribute("href",r),o())}if(t){var c="react-revolution-react-revolution";null==document.getElementById(c)&&(n.setAttribute("id",c),n.setAttribute("href",a),o())}};function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,r=k()(e);if(t){var a=k()(this).constructor;l=Reflect.construct(r,arguments,a)}else l=r.apply(this,arguments);return C()(this,l)}}var w=function(e){h()(l,e);var t=O(l);function l(e){var r;return s()(this,l),(r=t.call(this,e)).handleFileUpload=r.handleFileUpload.bind(b()(r)),r.handleSingleFile=r.handleSingleFile.bind(b()(r)),r.errorCallback=r.errorCallback.bind(b()(r)),r.calculatedFileSize=r.calculatedFileSize.bind(b()(r)),r.handleClick=r.handleClick.bind(b()(r)),r.state={file:{},fileName:"",fileSize:0,calculatedFileSize:0,fileType:"",hiddenInputStyle:{display:"none",opacity:0,width:0,height:0,overflow:"hidden"},moduleStyle:c()(!0)==c()(e.moduleStyle)&&e.moduleStyle,globalStyle:c()(!0)==c()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-input-file",id:e.id&&c()("8")==c()(e.id)?e.id:"",allowedFileSize:e.allowedFileSize,allowedFileSizeDescriptor:e.sizeDescriptor,allowedFiles:e.allowedFiles,label:e.label&&c()("8")==c()(e.label)?e.label:"",readFileCallback:e.readFileCallback&&"function"==typeof e.readFileCallback?e.readFileCallback:void 0,errorCallback:e.errorCallback&&"function"==typeof e.errorCallback?e.errorCallback:void 0,inputPlaceholder:e.inputPlaceholder&&c()("8")==c()(e.inputPlaceholder)?e.inputPlaceholder:"",errorCallbackCustomData:e.errorCallbackCustomData?e.errorCallbackCustomData:void 0,multiple:c()(!0)==c()(e.multiple)&&e.multiple},r}return f()(l,[{key:"componentDidMount",value:function(){P(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"handleFileUpload",value:function(e){e.preventDefault();var t=e.target.files;this.handleSingleFile(t)}},{key:"handleSingleFile",value:function(e){var t=this.state,l=t.readFileCallback,r=t.errorCallbackCustomData;if(e)for(var a=0;a<=e.length-1;a++){var n=e[a];try{var o=n.type;this.validateObjectValues(n)&&l&&l(n,o)}catch(e){this.errorCallback(e,r)}}}},{key:"validateObjectValues",value:function(e){var t=e.name,l=e.size,r=e.type,a=this.calculatedFileSize(l),n=this.state,o=n.allowedFileSize,i=n.allowedFiles,c=n.errorCallbackCustomData,u=!0;return t||(this.errorCallback("empty_filename",c),u=!1),l||(this.errorCallback("empty_filecontent",c),u=!1),r||(this.errorCallback("unrecognized_filetype",c),u=!1),a<=o&&(this.errorCallback("maximum_filesize_reached",c),u=!1),i.includes(r)||(this.errorCallback("unsupported_filetype",c),u=!1),u}},{key:"calculatedFileSize",value:function(e){var t=0;switch(this.state.allowedFileSizeDescriptor.toUpperCase()){case"B":t=e;break;case"KB":t=1024*e;break;case"MB":t=1024*e*1024;break;case"GB":t=1024*e*1024*1024;break;case"TB":t=1024*e*1024*1024*1024;break;case"PT":t=1024*e*1024*1024*1024*1024;break;default:t=e}return t}},{key:"errorCallback",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,l=this.state.errorCallback;l&&l(e,t)}},{key:"handleClick",value:function(){this.inputNode&&this.inputNode.click()}},{key:"render",value:function(){var e,t=this,l=this.state,r=l.addClass,n=l.label,i=l.inputPlaceholder,c=l.defaultClass,u=l.id,s=l.multiple,d={multiple:s||"",style:l.hiddenInputStyle};return g.a.createElement("div",{className:"".concat(c," ").concat(r)},g.a.createElement("input",o()((e={ref:function(e){return t.inputNode=e},type:"file",onChange:function(e){return t.handleFileUpload(e)},placeholder:i,id:u},a()(e,"type","file"),a()(e,"name","files[]"),e),d)),g.a.createElement("label",{className:"label",htmlFor:"files",onClick:function(){return t.handleClick()}},n))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return F(["label","errorCallback","readFileCallback","inputPlaceholder","errorCallbackCustomData","multiple"],e,t)?{addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-input-file",id:e.id&&c()("8")==c()(e.id)?e.id:"",label:e.label&&c()("8")==c()(e.label)?e.label:"",readFileCallback:e.readFileCallback&&"function"==typeof e.readFileCallback?e.readFileCallback:void 0,errorCallback:e.errorCallback&&"function"==typeof e.errorCallback?e.errorCallback:void 0,inputPlaceholder:e.inputPlaceholder&&c()("8")==c()(e.inputPlaceholder)?e.inputPlaceholder:"",errorCallbackCustomData:e.errorCallbackCustomData?e.errorCallbackCustomData:void 0,multiple:c()(!0)==c()(e.multiple)&&e.multiple}:null}}]),l}(g.a.Component);t.default=w}]);