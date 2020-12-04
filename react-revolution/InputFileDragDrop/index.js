module.exports=(()=>{var e={128:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var r=a(837),l=a.n(r),n=a(221),o=a.n(n),i=a(924),c=a.n(i),u=a(946),s=a.n(u),d=a(33),p=a.n(d),f=a(491),h=a.n(f),b=a(22),g=a.n(b),v=a(246),y=a.n(v),C=a(323),k=a.n(C);const m=require("react");var D=a.n(m);const F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;return e.map((function(e){a[e]!==t[e]&&(r=!0)})),r};var S="https://react-revolution.j.pl/";const O=function(e,t,a){var r="".concat(S,"public/react-revolution/").concat("v4.0.8","/css/").concat(a,".css"),l="".concat(S,"public/react-revolution/").concat("v4.0.8","/css/react-revolution.css"),n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css");var o=function(){document.getElementsByTagName("head")[0].prepend(n)};if(e){var i="react-revolution-".concat(a);null==document.getElementById(i)&&(n.setAttribute("id",i),n.setAttribute("href",r),o())}if(t){var c="react-revolution-react-revolution";null==document.getElementById(c)&&(n.setAttribute("id",c),n.setAttribute("href",l),o())}};function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=k()(e);if(t){var l=k()(this).constructor;a=Reflect.construct(r,arguments,l)}else a=r.apply(this,arguments);return y()(this,a)}}const x=function(e){g()(a,e);var t=P(a);function a(e){var r;return s()(this,a),(r=t.call(this,e)).handleDroppedFiles=r.handleDroppedFiles.bind(h()(r)),r.errorCallback=r.errorCallback.bind(h()(r)),r.calculatedFileSize=r.calculatedFileSize.bind(h()(r)),r.onDragEnter=r.onDragEnter.bind(h()(r)),r.onDragLeave=r.onDragLeave.bind(h()(r)),r.onDragOver=r.onDragOver.bind(h()(r)),r.handleDrop=r.handleDrop.bind(h()(r)),r.handleFileUploadInputFiled=r.handleFileUploadInputFiled.bind(h()(r)),r.handleSingleFile=r.handleSingleFile.bind(h()(r)),r.state={isDragging:!1,hiddenInputStyle:{display:"none",opacity:0,width:0,height:0,overflow:"hidden"},moduleStyle:c()(!0)==c()(e.moduleStyle)&&e.moduleStyle,globalStyle:c()(!0)==c()(e.globalStyle)&&e.globalStyle,addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-input-file-drag-drop",id:e.id&&c()("8")==c()(e.id)?e.id:"",allowedFileSize:e.allowedFileSize,allowedFileSizeDescriptor:e.sizeDescriptor,allowedFiles:e.allowedFiles,readFileCallback:e.readFileCallback&&"function"==typeof e.readFileCallback?e.readFileCallback:void 0,errorCallback:e.errorCallback&&"function"==typeof e.errorCallback?e.errorCallback:void 0,inputPlaceholder:e.inputPlaceholder&&c()("8")==c()(e.inputPlaceholder)?e.inputPlaceholder:"",errorCallbackCustomData:e.errorCallbackCustomData?e.errorCallbackCustomData:void 0,isDraggingData:e.isDraggingData,multiple:c()(!0)==c()(e.multiple)&&e.multiple,uploadOnClick:c()(!0)==c()(e.uploadOnClick)&&e.uploadOnClick},r.dragCounter=0,r}return p()(a,[{key:"componentDidMount",value:function(){O(this.state.moduleStyle,this.state.globalStyle,this.state.defaultClass)}},{key:"componentDidMount",value:function(){this.dragCounter=0}},{key:"componentWillUnmount",value:function(){this.dragCounter=0}},{key:"onDragOver",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"onDragEnter",value:function(e){var t=this.state.isDragging;e.preventDefault(),e.stopPropagation(),this.dragCounter++,e.dataTransfer.items&&e.dataTransfer.items.length>0&&!t&&this.setState({isDragging:!0})}},{key:"onDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragCounter--,0>=this.dragCounter&&this.setState({isDragging:!1})}},{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.files&&e.dataTransfer.files.length>0&&(this.dragCounter=0,this.handleDroppedFiles(e.dataTransfer.files,!0)),this.setState({isDragging:!1})}},{key:"handleDroppedFiles",value:function(e){var t=this.state,a=t.readFileCallback,r=t.errorCallbackCustomData;if(e)for(var l=0;l<=e.length-1;l++){var n=e[l];try{var o=n.type;this.validateObjectValues(n)&&a&&a(n,o)}catch(e){this.errorCallback(e,r)}}}},{key:"validateObjectValues",value:function(e){var t=e.name,a=e.size,r=e.type,l=this.calculatedFileSize(a),n=this.state,o=n.allowedFileSize,i=n.allowedFiles,c=n.errorCallbackCustomData,u=!0;return t||(this.errorCallback("empty_filename",c),u=!1),a||(this.errorCallback("empty_filecontent",c),u=!1),r||(this.errorCallback("unrecognized_filetype",c),u=!1),l<=o&&(this.errorCallback("maximum_filesize_reached",c),u=!1),i.includes(r)||(this.errorCallback("unsupported_filetype",c),u=!1),u}},{key:"calculatedFileSize",value:function(e){var t=0;switch(this.state.allowedFileSizeDescriptor.toUpperCase()){case"B":t=e;break;case"KB":t=1024*e;break;case"MB":t=1024*e*1024;break;case"GB":t=1024*e*1024*1024;break;case"TB":t=1024*e*1024*1024*1024;break;case"PT":t=1024*e*1024*1024*1024*1024;break;default:t=e}return t}},{key:"errorCallback",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=this.state.errorCallback;a&&a(e,t)}},{key:"handleClick",value:function(){this.inputNode&&this.inputNode.click()}},{key:"handleFileUploadInputFiled",value:function(e){e.preventDefault();var t=e.target.files;this.handleSingleFile(t)}},{key:"handleSingleFile",value:function(e){var t=this.state,a=t.readFileCallback,r=t.errorCallbackCustomData;if(e)for(var l=0;l<=e.length-1;l++){var n=e[l];try{var o=n.type;this.validateObjectValues(n)&&a&&a(n,o)}catch(e){this.errorCallback(e,r)}}}},{key:"render",value:function(){var e,t=this,a=this.state,r=a.addClass,n=a.inputPlaceholder,i=a.defaultClass,c=a.id,u=a.isDragging,s=a.isDraggingData,d=a.multiple,p=a.hiddenInputStyle,f=a.uploadOnClick,h={multiple:d||"",style:p};return D().createElement("div",{className:"".concat(i," ").concat(r),id:c},f&&D().createElement("input",o()((e={ref:function(e){return t.inputNode=e},type:"file",onChange:function(e){return t.handleFileUploadInputFiled(e)},placeholder:n,id:c},l()(e,"type","file"),l()(e,"name","files[]"),e),h)),D().createElement("label",{className:"label",htmlFor:"files"},D().createElement("div",{onClick:function(){return t.handleClick()},className:"drag-drop ".concat(u?"dragging":""," ").concat(f?"cursor-pointer":""),onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave,onDragOver:this.onDragOver,onDrop:this.handleDrop},n,u&&s&&s)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return F(["errorCallback","readFileCallback","inputPlaceholder","errorCallbackCustomData","isDraggingData","multiple","uploadOnClick"],e,t)?{addClass:e.addClass&&c()("8")==c()(e.addClass)?e.addClass:"",defaultClass:e.defaultClass&&c()("8")==c()(e.defaultClass)?e.defaultClass:"rr-input-file-drag-drop",id:e.id&&c()("8")==c()(e.id)?e.id:"",readFileCallback:e.readFileCallback&&"function"==typeof e.readFileCallback?e.readFileCallback:void 0,errorCallback:e.errorCallback&&"function"==typeof e.errorCallback?e.errorCallback:void 0,inputPlaceholder:e.inputPlaceholder&&c()("8")==c()(e.inputPlaceholder)?e.inputPlaceholder:"",errorCallbackCustomData:e.errorCallbackCustomData?e.errorCallbackCustomData:void 0,isDraggingData:e.isDraggingData,multiple:c()(!0)==c()(e.multiple)&&e.multiple,uploadOnClick:c()(!0)==c()(e.uploadOnClick)&&e.uploadOnClick}:null}}]),a}(D().Component)},491:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},946:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},33:e=>{function t(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}},837:e=>{e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},221:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}e.exports=t},323:e=>{function t(a){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(a)}e.exports=t},22:(e,t,a)=>{var r=a(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},246:(e,t,a)=>{var r=a(924),l=a(491);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}},596:e=>{function t(a,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(a,r)}e.exports=t},924:e=>{function t(a){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(a)}e.exports=t}},t={};function a(r){if(t[r])return t[r].exports;var l=t[r]={exports:{}};return e[r](l,l.exports,a),l.exports}return a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(128)})();