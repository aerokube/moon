!function(D){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!U[e]||!f[e])return;for(var n in f[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(P[n]=t[n]);0==--l&&0===u&&v()}(e,t),n&&n(e,t)};var I,r=!0,T="5112805e784092c28225",t=1e4,M={},L=[],o=[];function i(t){var n=F[t];if(!n)return V;function r(e){return n.hot.active?(F[e]?-1===F[e].parents.indexOf(t)&&F[e].parents.push(t):(L=[t],I=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),L=[]),V(e)}function e(t){return{configurable:!0,enumerable:!0,get:function(){return V[t]},set:function(e){V[t]=e}}}for(var o in V)Object.prototype.hasOwnProperty.call(V,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,e(o));return r.e=function(e){return"ready"===c&&H("prepare"),u++,V.e(e).then(t,function(e){throw t(),e});function t(){u--,"prepare"===c&&(d[e]||h(e),0===u&&0===l&&v())}},r.t=function(e,t){return 1&t&&(e=r(e)),V.t(e,-2&t)},r}var a=[],c="idle";function H(e){c=e;for(var t=0;t<a.length;t++)a[t].call(null,e)}var s,P,N,B,l=0,u=0,d={},f={},U={};function q(e){return+e+""===e?+e:e}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return r=e,H("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=V.p+""+T+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(t).then(function(e){if(!e)return H(R()?"ready":"idle"),null;f={},d={},U=e.c,N=e.h,H("prepare");var t=new Promise(function(e,t){s={resolve:e,reject:t}});P={};return h(0),"prepare"===c&&0===u&&0===l&&v(),t})}function h(e){U[e]?(f[e]=!0,l++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=V.p+""+e+"."+T+".hot-update.js",document.head.appendChild(t)}(e)):d[e]=!0}function v(){H("ready");var t=s;if(s=null,t)if(r)Promise.resolve().then(function(){return m(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in P)Object.prototype.hasOwnProperty.call(P,n)&&e.push(q(n));t.resolve(e)}}function m(e){if("ready"!==c)throw new Error("apply() is only allowed in ready status");return function e(n){R();var t;var r;var o;var u;var i;function a(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),i=o.id,a=o.chain;if((u=F[i])&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<u.parents.length;c++){var s=u.parents[c],l=F[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),d(n[s],[i])):(delete n[s],t.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}var c={};var s=[];var l={};var f=function(){console.warn("[HMR] unexpected require("+h.moduleId+") to disposed module")};for(var p in P)if(Object.prototype.hasOwnProperty.call(P,p)){var h;i=q(p),h=P[p]?a(i):{type:"disposed",moduleId:p};var v=!1,m=!1,y=!1,g="";switch(h.chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":n.onDeclined&&n.onDeclined(h),n.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":n.onDeclined&&n.onDeclined(h),n.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(h),n.ignoreUnaccepted||(v=new Error("Aborted because "+i+" is not accepted"+g));break;case"accepted":n.onAccepted&&n.onAccepted(h),m=!0;break;case"disposed":n.onDisposed&&n.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return H("abort"),Promise.reject(v);if(m)for(i in l[i]=P[i],d(s,h.outdatedModules),h.outdatedDependencies)Object.prototype.hasOwnProperty.call(h.outdatedDependencies,i)&&(c[i]||(c[i]=[]),d(c[i],h.outdatedDependencies[i]));y&&(d(s,[h.moduleId]),l[i]=f)}var b=[];for(r=0;r<s.length;r++)i=s[r],F[i]&&F[i].hot._selfAccepted&&l[i]!==f&&!F[i].hot._selfInvalidated&&b.push({module:i,parents:F[i].parents.slice(),errorHandler:F[i].hot._selfAccepted});H("dispose");Object.keys(U).forEach(function(e){!1===U[e]&&delete installedChunks[e]});var w;var k=s.slice();for(;0<k.length;)if(i=k.pop(),u=F[i]){var C={},_=u.hot._disposeHandlers;for(o=0;o<_.length;o++)(t=_[o])(C);for(M[i]=C,u.hot.active=!1,delete F[i],delete c[i],o=0;o<u.children.length;o++){var S=F[u.children[o]];S&&0<=(w=S.parents.indexOf(i))&&S.parents.splice(w,1)}}var E;var x;for(i in c)if(Object.prototype.hasOwnProperty.call(c,i)&&(u=F[i]))for(x=c[i],o=0;o<x.length;o++)E=x[o],0<=(w=u.children.indexOf(E))&&u.children.splice(w,1);H("apply");void 0!==N&&(T=N,N=void 0);P=void 0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(D[i]=l[i]);var O=null;for(i in c)if(Object.prototype.hasOwnProperty.call(c,i)&&(u=F[i])){x=c[i];var j=[];for(r=0;r<x.length;r++)if(E=x[r],t=u.hot._acceptedDependencies[E]){if(-1!==j.indexOf(t))continue;j.push(t)}for(r=0;r<j.length;r++){t=j[r];try{t(x)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:x[r],error:e}),n.ignoreErrored||(O=O||e)}}}for(r=0;r<b.length;r++){var A=b[r];i=A.module,L=A.parents,I=i;try{V(i)}catch(t){if("function"==typeof A.errorHandler)try{A.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:e,originalError:t}),n.ignoreErrored||(O=O||e),O=O||t}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:t}),n.ignoreErrored||(O=O||t)}}if(O)return H("fail"),Promise.reject(O);if(B)return e(n).then(function(t){return s.forEach(function(e){t.indexOf(e)<0&&t.push(e)}),t});H("idle");return new Promise(function(e){e(s)})}(e=e||{})}function R(){if(B)return P=P||{},B.forEach(y),!(B=void 0)}function y(e){Object.prototype.hasOwnProperty.call(P,e)||(P[e]=D[e])}var F={};function V(e){if(F[e])return F[e].exports;var t=F[e]={i:e,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:I!==e,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);0<=t&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":(P={})[e]=D[e],H("ready");break;case"ready":y(e);break;case"prepare":case"check":case"dispose":case"apply":(B=B||[]).push(e)}},check:p,apply:m,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);0<=t&&a.splice(t,1)},data:M[e]};return I=void 0,r}(e),parents:(o=L,L=[],o),children:[]};return D[e].call(t.exports,t,t.exports,i(e)),t.l=!0,t.exports}V.m=D,V.c=F,V.d=function(e,t,n){V.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},V.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},V.t=function(t,e){if(1&e&&(t=V(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(V.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)V.d(n,r,function(e){return t[e]}.bind(null,r));return n},V.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return V.d(t,"a",t),t},V.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},V.p="",V.h=function(){return T},i(4)(V.s=4)}([function(e,t,n){},function(t,n,e){var r;
/*!
 * Snackbar v0.1.14
 * http://polonel.com/Snackbar
 *
 * Copyright 2018 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */
!function(e){"use strict";void 0===(r=function(){return e.Snackbar=function(){var c={current:null},s={text:"Default Text",textColor:"#FFFFFF",width:"auto",showAction:true,actionText:"Dismiss",actionTextAria:"Dismiss, Description for Screen Readers",actionTextColor:"#4CAF50",showSecondButton:false,secondButtonText:"",secondButtonAria:"Description for Screen Readers",secondButtonTextColor:"#4CAF50",backgroundColor:"#323232",pos:"bottom-left",duration:5e3,customClass:"",onActionClick:function e(t){t.style.opacity=0},onSecondButtonClick:function e(t){},onClose:function e(t){}};c.show=function(e){var n=l(true,s,e);if(c.current){c.current.style.opacity=0;setTimeout(function(){var e=this.parentElement;if(e)e.removeChild(this)}.bind(c.current),500)}c.snackbar=document.createElement("div");c.snackbar.className="snackbar-container "+n.customClass;c.snackbar.style.width=n.width;var t=document.createElement("p");t.style.margin=0;t.style.padding=0;t.style.color=n.textColor;t.style.fontSize="14px";t.style.fontWeight=300;t.style.lineHeight="1em";t.innerHTML=n.text;c.snackbar.appendChild(t);c.snackbar.style.background=n.backgroundColor;if(n.showSecondButton){var r=document.createElement("button");r.className="action";r.innerHTML=n.secondButtonText;r.setAttribute("aria-label",n.secondButtonAria);r.style.color=n.secondButtonTextColor;r.addEventListener("click",function(){n.onSecondButtonClick(c.snackbar)});c.snackbar.appendChild(r)}if(n.showAction){var o=document.createElement("button");o.className="action";o.innerHTML=n.actionText;o.setAttribute("aria-label",n.actionTextAria);o.style.color=n.actionTextColor;o.addEventListener("click",function(){n.onActionClick(c.snackbar)});c.snackbar.appendChild(o)}if(n.duration){setTimeout(function(){if(c.current===this){c.current.style.opacity=0;c.current.style.top="-100px";c.current.style.bottom="-100px"}}.bind(c.snackbar),n.duration)}c.snackbar.addEventListener("transitionend",function(e,t){if(e.propertyName==="opacity"&&this.style.opacity==="0"){if(typeof n.onClose==="function")n.onClose(this);this.parentElement.removeChild(this);if(c.current===this){c.current=null}}}.bind(c.snackbar));c.current=c.snackbar;document.body.appendChild(c.snackbar);var i=getComputedStyle(c.snackbar).bottom;var a=getComputedStyle(c.snackbar).top;c.snackbar.style.opacity=1;c.snackbar.className="snackbar-container "+n.customClass+" snackbar-pos "+n.pos},c.close=function(){if(c.current){c.current.style.opacity=0}};var l=function r(){var o={};var i=false;var e=0;var t=arguments.length;if(Object.prototype.toString.call(arguments[0])==="[object Boolean]"){i=arguments[0];e++}var n=function e(t){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){if(i&&Object.prototype.toString.call(t[n])==="[object Object]"){o[n]=r(true,o[n],t[n])}else{o[n]=t[n]}}}};for(;e<t;e++){var a=arguments[e];n(a)}return o};return c}()}.apply(n,[]))||(t.exports=r)}(this)},function(t,e,n){var r=n(3),o=n(0);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=r(o,i),c=o.locals?o.locals:{};o.locals||t.hot.accept(0,function(){var e=n(0);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]),a(e)}),t.hot.dispose(function(){a()}),t.exports=c},function(e,t,i){"use strict";var n,r,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=(r={},function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}),d=[];function f(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c=n[a]||0,s="".concat(a," ").concat(c);n[a]=c+1;var l=f(s),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(d[l].references++,d[l].updater(u)):d.push({identifier:s,updater:m(u,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var h=null,v=0;function m(t,e){var n,r,o;if(e.singleton){var i=v++;n=h=h||c(e),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(e),r=function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,e),o=function(){!function(e){if(null===e.parentNode)return;e.parentNode.removeChild(e)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=o());var c=s(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<c.length;t++){var n=f(c[t]);d[n].references--}for(var r=s(e,a),o=0;o<c.length;o++){var i=f(c[o]);0===d[i].references&&(d[i].updater(),d.splice(i,1))}c=r}}}},function(e,t,n){"use strict";n.r(t);n(2);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i={blockName:"pricing-range",sessions:[10,20,50,100,500,1e3,"∞"],defaultSession:50,defaultMonth:"6",months:[{title:"1 month",value:1},{title:"2 months",value:2},{title:"3 months",value:3},{title:"6 months",value:6},{title:"12 months",value:12}],price:5,title:"Parallel Sessions"},a=function(){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),!e)throw new Error("No target element specified");this.params=Object.assign({},i,t),this.blockName=t.blockName,this.selector=e,this.rangeContainer=null,this.months=this.params.months,this.values=this.params.sessions,this.month=this.params.defaultMonth,this.session=this.params.defaultSession,this.price=this.params.price,this.value=null,this.contactUsMode=!1,this.valueItems=new Map,this.createRange(),this.createValue(),this.createDuration(),this.setSession(this.session),this.setValue()}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(n,[{key:"toggleContactUs",value:function(e){var t=!(0<arguments.length&&void 0!==e)||e;t!==this.contactUsMode&&((this.contactUsMode=t)?this.toggleContainer.classList.add("pricing-range__toggle-container_contact-us"):this.toggleContainer.classList.remove("pricing-range__toggle-container_contact-us"))}},{key:"setValue",value:function(){if("∞"===this.session)return this.toggleContactUs(),void(this.priceInput.value="infinity");this.toggleContactUs(!1),this.value=this.price*Number(this.month)*this.session,this.odometer&&this.odometer.update(this.value),this.priceInput.value=this.value}},{key:"createRange",value:function(){var n=this;this.rangeContainer=this.selector.querySelector(".pricing-range__range"),this.rangeSelect=this.selector.querySelector(".pricing-range__range-select"),this.rangeLine=this.rangeContainer.querySelector(".pricing-range__range-line"),this.toggleContainer=document.querySelector(".pricing-range__toggle-container"),this.values.forEach(function(e){var t=n.createRangeItem(e);n.valueItems.set(e,t),n.rangeLine.appendChild(t.container)}),this.title=document.createElement("p"),this.title.classList.add("range-item-container"),this.title.classList.add("pricing-range__title"),this.title.innerText=this.params.title,this.rangeLine.appendChild(this.title),this.createRangeSelect()}},{key:"createRangeSelect",value:function(){var n=this;this.rangeSelect=this.selector.querySelector(".pricing-range__range-select"),this.values.forEach(function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerText=e,n.rangeSelect.appendChild(t)}),this.rangeSelect.addEventListener("change",function(e){var t=e.target.value;n.setSession(t),n.setValue()}),this.setSession(this.session)}},{key:"createDuration",value:function(){var n=this;this.durationContainer=this.selector.querySelector(".pricing-range__duration"),this.months.forEach(function(e){var t=document.createElement("option");t.setAttribute("value",e.value),t.innerText=e.title,n.durationContainer.appendChild(t)}),this.durationContainer.addEventListener("change",function(e){n.month=e.target.value,n.setDuration(),n.setValue()}),this.setDuration()}},{key:"setDuration",value:function(){for(var e=this.durationContainer.options,t=0;t<e.length;t++)e[t].value!==this.month?e[t].removeAttribute("selected"):e[t].setAttribute("selected","")}},{key:"setSession",value:function(e){this.session=e;var t=!0,n=!1,r=void 0;try{for(var o,i=this.valueItems[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=d(o.value,2),c=a[0],s=a[1];c===e?s.container.classList.add("range-item-container_selected"):s.container.classList.remove("range-item-container_selected")}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}for(var l=this.rangeSelect.options,u=0;u<l.length;u++)l[u].value!==this.session.toString()?l[u].removeAttribute("selected"):l[u].setAttribute("selected","")}},{key:"createRangeItem",value:function(e){var t=this,n=document.createElement("div"),r=document.createElement("p"),o=document.createElement("div");return n.classList.add("range-item-container"),r.innerText=e,n.appendChild(r),n.appendChild(o),n.addEventListener("click",function(){t.setSession(e),t.setValue()}),{container:n,value:r,circle:o}}},{key:"createValue",value:function(){this.valueContainer=document.getElementById("price-odometer"),this.priceInput=document.getElementById("price-input"),this.odometer=new window.Odometer({el:this.valueContainer,value:this.value,numberLength:5,theme:"minimal",format:"(,ddddd)"})}}]),n}(),c=n(1),s=n.n(c);document.addEventListener("DOMContentLoaded",function(){function t(){grecaptcha.reset()}function n(e,t){s.a.show({backgroundColor:e,pos:"top-center",showAction:!1,duration:7e3,text:t})}new a(document.getElementById("range"));window.onSubmit=function(){$.ajax({url:"https://moon.aerokube.com/license",data:$("form#license-form").serialize(),success:function(){!function(e){n("#43a047",e)}("An evaluation license key was sent to your email address"),t()},error:function(e){!function(e){n("#d32f2f",e)}("Failed to request evaluation license key: ".concat(e.responseText)),t()}})}})}]);