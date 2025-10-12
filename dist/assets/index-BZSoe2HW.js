(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var qg={exports:{}},Cl={},Hg={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),Jw=Symbol.for("react.portal"),Zw=Symbol.for("react.fragment"),eE=Symbol.for("react.strict_mode"),tE=Symbol.for("react.profiler"),nE=Symbol.for("react.provider"),rE=Symbol.for("react.context"),iE=Symbol.for("react.forward_ref"),sE=Symbol.for("react.suspense"),oE=Symbol.for("react.memo"),aE=Symbol.for("react.lazy"),yp=Symbol.iterator;function lE(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gg=Object.assign,Qg={};function Mi(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Kg}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yg(){}Yg.prototype=Mi.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Kg}var xh=kh.prototype=new Yg;xh.constructor=kh;Gg(xh,Mi.prototype);xh.isPureReactComponent=!0;var _p=Array.isArray,Xg=Object.prototype.hasOwnProperty,Nh={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xg.call(e,r)&&!Jg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:go,type:t,key:s,ref:o,props:i,_owner:Nh.current}}function uE(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function cE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cE(""+t.key):e.toString(36)}function va(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case Jw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pu(o,0):r,_p(i)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),va(i,e,n,"",function(h){return h})):i!=null&&(Dh(i)&&(i=uE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_p(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Pu(s,l);o+=va(s,e,n,u,i)}else if(u=lE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Pu(s,l++),o+=va(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],i=0;return va(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},wa={transition:null},dE={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:wa,ReactCurrentOwner:Nh};function ey(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Mi;J.Fragment=Zw;J.Profiler=tE;J.PureComponent=kh;J.StrictMode=eE;J.Suspense=sE;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE;J.act=ey;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Xg.call(e,u)&&!Jg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:go,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:rE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nE,_context:t},t.Consumer=t};J.createElement=Zg;J.createFactory=function(t){var e=Zg.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:iE,render:t}};J.isValidElement=Dh;J.lazy=function(t){return{$$typeof:aE,_payload:{_status:-1,_result:t},_init:hE}};J.memo=function(t,e){return{$$typeof:oE,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};J.unstable_act=ey;J.useCallback=function(t,e){return ot.current.useCallback(t,e)};J.useContext=function(t){return ot.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};J.useEffect=function(t,e){return ot.current.useEffect(t,e)};J.useId=function(){return ot.current.useId()};J.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ot.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};J.useRef=function(t){return ot.current.useRef(t)};J.useState=function(t){return ot.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ot.current.useTransition()};J.version="18.3.1";Hg.exports=J;var se=Hg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=se,pE=Symbol.for("react.element"),mE=Symbol.for("react.fragment"),gE=Object.prototype.hasOwnProperty,yE=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_E={key:!0,ref:!0,__self:!0,__source:!0};function ty(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gE.call(e,r)&&!_E.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:pE,type:t,key:s,ref:o,props:i,_owner:yE.current}}Cl.Fragment=mE;Cl.jsx=ty;Cl.jsxs=ty;qg.exports=Cl;var R=qg.exports,ny={exports:{}},_t={},ry={exports:{}},iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var X=B.length;B.push(G);e:for(;0<X;){var ge=X-1>>>1,le=B[ge];if(0<i(le,G))B[ge]=G,B[X]=le,X=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],X=B.pop();if(X!==G){B[0]=X;e:for(var ge=0,le=B.length,Ie=le>>>1;ge<Ie;){var Xt=2*(ge+1)-1,Jt=B[Xt],Zt=Xt+1,en=B[Zt];if(0>i(Jt,X))Zt<le&&0>i(en,Jt)?(B[ge]=en,B[Zt]=X,ge=Zt):(B[ge]=Jt,B[Xt]=X,ge=Xt);else if(Zt<le&&0>i(en,X))B[ge]=en,B[Zt]=X,ge=Zt;else break e}}return G}function i(B,G){var X=B.sortIndex-G.sortIndex;return X!==0?X:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,I=!1,x=!1,N=!1,L=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function V(B){if(N=!1,S(B),!x)if(n(u)!==null)x=!0,Ki(U);else{var G=n(h);G!==null&&Yt(V,G.startTime-B)}}function U(B,G){x=!1,N&&(N=!1,A(y),y=-1),I=!0;var X=g;try{for(S(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!C());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var le=ge(m.expirationTime<=G);G=t.unstable_now(),typeof le=="function"?m.callback=le:m===n(u)&&r(u),S(G)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var Xt=n(h);Xt!==null&&Yt(V,Xt.startTime-G),Ie=!1}return Ie}finally{m=null,g=X,I=!1}}var F=!1,v=null,y=-1,w=5,E=-1;function C(){return!(t.unstable_now()-E<w)}function k(){if(v!==null){var B=t.unstable_now();E=B;var G=!0;try{G=v(!0,B)}finally{G?T():(F=!1,v=null)}}else F=!1}var T;if(typeof _=="function")T=function(){_(k)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,cr=wt.port2;wt.port1.onmessage=k,T=function(){cr.postMessage(null)}}else T=function(){L(k,0)};function Ki(B){v=B,F||(F=!0,T())}function Yt(B,G){y=L(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,Ki(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var X=g;g=G;try{return B()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=g;g=B;try{return G()}finally{g=X}},t.unstable_scheduleCallback=function(B,G,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,B={id:f++,callback:G,priorityLevel:B,startTime:X,expirationTime:le,sortIndex:-1},X>ge?(B.sortIndex=X,e(h,B),n(u)===null&&B===n(h)&&(N?(A(y),y=-1):N=!0,Yt(V,X-ge))):(B.sortIndex=le,e(u,B),x||I||(x=!0,Ki(U))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var G=g;return function(){var X=g;g=G;try{return B.apply(this,arguments)}finally{g=X}}}})(iy);ry.exports=iy;var vE=ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=se,yt=vE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sy=new Set,Bs={};function br(t,e){wi(t,e),wi(t+"Capture",e)}function wi(t,e){for(Bs[t]=e,t=0;t<e.length;t++)sy.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dc=Object.prototype.hasOwnProperty,EE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},Ep={};function TE(t){return dc.call(Ep,t)?!0:dc.call(wp,t)?!1:EE.test(t)?Ep[t]=!0:(wp[t]=!0,!1)}function IE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SE(t,e,n,r){if(e===null||typeof e>"u"||IE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Oh);Be[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Oh);Be[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Oh);Be[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SE(e,n,i,r)&&(n=null),r||i===null?TE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),oy=Symbol.for("react.provider"),ay=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),ly=Symbol.for("react.offscreen"),Tp=Symbol.iterator;function as(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,ku;function gs(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var xu=!1;function Nu(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gs(t):""}function AE(t){switch(t.tag){case 5:return gs(t.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Xr:return"Portal";case fc:return"Profiler";case bh:return"StrictMode";case pc:return"Suspense";case mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ay:return(t.displayName||"Context")+".Consumer";case oy:return(t._context.displayName||"Context")+".Provider";case Mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fh:return e=t.displayName||null,e!==null?e:gc(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return gc(t(e))}catch{}}return null}function RE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gc(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CE(t){var e=uy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=CE(t))}function cy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hy(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function _c(t,e){hy(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&vc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vc(t,e,n){(e!=="number"||ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ys=Array.isArray;function ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(ys(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function dy(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ec(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,py=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PE=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){PE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function my(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=my(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kE=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tc(t,e){if(e){if(kE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Ic(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sc=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ac=null,hi=null,di=null;function Cp(t){if(t=vo(t)){if(typeof Ac!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Dl(e),Ac(t.stateNode,t.type,e))}}function yy(t){hi?di?di.push(t):di=[t]:hi=t}function _y(){if(hi){var t=hi,e=di;if(di=hi=null,Cp(t),e)for(t=0;t<e.length;t++)Cp(e[t])}}function vy(t,e){return t(e)}function wy(){}var Du=!1;function Ey(t,e,n){if(Du)return t(e,n);Du=!0;try{return vy(t,e,n)}finally{Du=!1,(hi!==null||di!==null)&&(wy(),_y())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Rc=!1;if(pn)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{Rc=!1}function xE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Cs=!1,Ba=null,za=!1,Cc=null,NE={onError:function(t){Cs=!0,Ba=t}};function DE(t,e,n,r,i,s,o,l,u){Cs=!1,Ba=null,xE.apply(NE,arguments)}function VE(t,e,n,r,i,s,o,l,u){if(DE.apply(this,arguments),Cs){if(Cs){var h=Ba;Cs=!1,Ba=null}else throw Error(M(198));za||(za=!0,Cc=h)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ty(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pp(t){if(Mr(t)!==t)throw Error(M(188))}function OE(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pp(i),t;if(s===r)return Pp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Iy(t){return t=OE(t),t!==null?Sy(t):null}function Sy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sy(t);if(e!==null)return e;t=t.sibling}return null}var Ay=yt.unstable_scheduleCallback,kp=yt.unstable_cancelCallback,LE=yt.unstable_shouldYield,bE=yt.unstable_requestPaint,Ae=yt.unstable_now,ME=yt.unstable_getCurrentPriorityLevel,jh=yt.unstable_ImmediatePriority,Ry=yt.unstable_UserBlockingPriority,$a=yt.unstable_NormalPriority,FE=yt.unstable_LowPriority,Cy=yt.unstable_IdlePriority,Pl=null,$t=null;function UE(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:zE,jE=Math.log,BE=Math.LN2;function zE(t){return t>>>=0,t===0?32:31-(jE(t)/BE|0)|0}var ta=64,na=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_s(l):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function $E(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ot(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=$E(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Py(){var t=ta;return ta<<=1,!(ta&4194240)&&(ta=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function qE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function ky(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xy,zh,Ny,Dy,Vy,kc=!1,ra=[],Bn=null,zn=null,$n=null,Ws=new Map,qs=new Map,Dn=[],HE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function us(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vo(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KE(t,e,n,r,i){switch(e){case"focusin":return Bn=us(Bn,t,e,n,r,i),!0;case"dragenter":return zn=us(zn,t,e,n,r,i),!0;case"mouseover":return $n=us($n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ws.set(s,us(Ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qs.set(s,us(qs.get(s)||null,t,e,n,r,i)),!0}return!1}function Oy(t){var e=_r(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ty(n),e!==null){t.blockedOn=e,Vy(t.priority,function(){Ny(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ea(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sc=r,n.target.dispatchEvent(r),Sc=null}else return e=vo(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Np(t,e,n){Ea(t)&&n.delete(e)}function GE(){kc=!1,Bn!==null&&Ea(Bn)&&(Bn=null),zn!==null&&Ea(zn)&&(zn=null),$n!==null&&Ea($n)&&($n=null),Ws.forEach(Np),qs.forEach(Np)}function cs(t,e){t.blockedOn===e&&(t.blockedOn=null,kc||(kc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,GE)))}function Hs(t){function e(i){return cs(i,t)}if(0<ra.length){cs(ra[0],t);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bn!==null&&cs(Bn,t),zn!==null&&cs(zn,t),$n!==null&&cs($n,t),Ws.forEach(e),qs.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Oy(n),n.blockedOn===null&&Dn.shift()}var fi=Tn.ReactCurrentBatchConfig,qa=!0;function QE(t,e,n,r){var i=oe,s=fi.transition;fi.transition=null;try{oe=1,$h(t,e,n,r)}finally{oe=i,fi.transition=s}}function YE(t,e,n,r){var i=oe,s=fi.transition;fi.transition=null;try{oe=4,$h(t,e,n,r)}finally{oe=i,fi.transition=s}}function $h(t,e,n,r){if(qa){var i=xc(t,e,n,r);if(i===null)$u(t,e,r,Ha,n),xp(t,r);else if(KE(i,t,e,n,r))r.stopPropagation();else if(xp(t,r),e&4&&-1<HE.indexOf(t)){for(;i!==null;){var s=vo(i);if(s!==null&&xy(s),s=xc(t,e,n,r),s===null&&$u(t,e,r,Ha,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $u(t,e,r,null,n)}}var Ha=null;function xc(t,e,n,r){if(Ha=null,t=Uh(r),t=_r(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ty(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ha=t,null}function Ly(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ME()){case jh:return 1;case Ry:return 4;case $a:case FE:return 16;case Cy:return 536870912;default:return 16}default:return 16}}var Fn=null,Wh=null,Ta=null;function by(){if(Ta)return Ta;var t,e=Wh,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ta=i.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function Dp(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:Dp,this.isPropagationStopped=Dp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qh=vt(Fi),_o=ve({},Fi,{view:0,detail:0}),XE=vt(_o),Ou,Lu,hs,kl=ve({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(Ou=t.screenX-hs.screenX,Lu=t.screenY-hs.screenY):Lu=Ou=0,hs=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Vp=vt(kl),JE=ve({},kl,{dataTransfer:0}),ZE=vt(JE),eT=ve({},_o,{relatedTarget:0}),bu=vt(eT),tT=ve({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),nT=vt(tT),rT=ve({},Fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iT=vt(rT),sT=ve({},Fi,{data:0}),Op=vt(sT),oT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lT[t])?!!e[t]:!1}function Hh(){return uT}var cT=ve({},_o,{key:function(t){if(t.key){var e=oT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hT=vt(cT),dT=ve({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=vt(dT),fT=ve({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),pT=vt(fT),mT=ve({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gT=vt(mT),yT=ve({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_T=vt(yT),vT=[9,13,27,32],Kh=pn&&"CompositionEvent"in window,Ps=null;pn&&"documentMode"in document&&(Ps=document.documentMode);var wT=pn&&"TextEvent"in window&&!Ps,My=pn&&(!Kh||Ps&&8<Ps&&11>=Ps),bp=" ",Mp=!1;function Fy(t,e){switch(t){case"keyup":return vT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function ET(t,e){switch(t){case"compositionend":return Uy(e);case"keypress":return e.which!==32?null:(Mp=!0,bp);case"textInput":return t=e.data,t===bp&&Mp?null:t;default:return null}}function TT(t,e){if(Zr)return t==="compositionend"||!Kh&&Fy(t,e)?(t=by(),Ta=Wh=Fn=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return My&&e.locale!=="ko"?null:e.data;default:return null}}var IT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IT[t.type]:e==="textarea"}function jy(t,e,n,r){yy(r),e=Ka(e,"onChange"),0<e.length&&(n=new qh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ks=null,Ks=null;function ST(t){Xy(t,0)}function xl(t){var e=ni(t);if(cy(e))return t}function AT(t,e){if(t==="change")return e}var By=!1;if(pn){var Mu;if(pn){var Fu="oninput"in document;if(!Fu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Fu=typeof Up.oninput=="function"}Mu=Fu}else Mu=!1;By=Mu&&(!document.documentMode||9<document.documentMode)}function jp(){ks&&(ks.detachEvent("onpropertychange",zy),Ks=ks=null)}function zy(t){if(t.propertyName==="value"&&xl(Ks)){var e=[];jy(e,Ks,t,Uh(t)),Ey(ST,e)}}function RT(t,e,n){t==="focusin"?(jp(),ks=e,Ks=n,ks.attachEvent("onpropertychange",zy)):t==="focusout"&&jp()}function CT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Ks)}function PT(t,e){if(t==="click")return xl(e)}function kT(t,e){if(t==="input"||t==="change")return xl(e)}function xT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:xT;function Gs(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dc.call(e,i)||!bt(t[i],e[i]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var n=Bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function $y(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$y(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wy(){for(var t=window,e=ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ja(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NT(t){var e=Wy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$y(n.ownerDocument.documentElement,n)){if(r!==null&&Gh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zp(n,s);var o=zp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DT=pn&&"documentMode"in document&&11>=document.documentMode,ei=null,Nc=null,xs=null,Dc=!1;function $p(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dc||ei==null||ei!==ja(r)||(r=ei,"selectionStart"in r&&Gh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xs&&Gs(xs,r)||(xs=r,r=Ka(Nc,"onSelect"),0<r.length&&(e=new qh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Uu={},qy={};pn&&(qy=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Nl(t){if(Uu[t])return Uu[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qy)return Uu[t]=e[n];return t}var Hy=Nl("animationend"),Ky=Nl("animationiteration"),Gy=Nl("animationstart"),Qy=Nl("transitionend"),Yy=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){Yy.set(t,e),br(e,[t])}for(var ju=0;ju<Wp.length;ju++){var Bu=Wp[ju],VT=Bu.toLowerCase(),OT=Bu[0].toUpperCase()+Bu.slice(1);or(VT,"on"+OT)}or(Hy,"onAnimationEnd");or(Ky,"onAnimationIteration");or(Gy,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(Qy,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LT=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function qp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VE(r,e,void 0,t),t.currentTarget=null}function Xy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;qp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;qp(i,l,h),s=u}}}if(za)throw t=Cc,za=!1,Cc=null,t}function de(t,e){var n=e[Mc];n===void 0&&(n=e[Mc]=new Set);var r=t+"__bubble";n.has(r)||(Jy(e,t,2,!1),n.add(r))}function zu(t,e,n){var r=0;e&&(r|=4),Jy(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[oa]){t[oa]=!0,sy.forEach(function(n){n!=="selectionchange"&&(LT.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,zu("selectionchange",!1,e))}}function Jy(t,e,n,r){switch(Ly(e)){case 1:var i=QE;break;case 4:i=YE;break;default:i=$h}n=i.bind(null,e,n,t),i=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $u(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=_r(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ey(function(){var h=s,f=Uh(n),m=[];e:{var g=Yy.get(t);if(g!==void 0){var I=qh,x=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":I=hT;break;case"focusin":x="focus",I=bu;break;case"focusout":x="blur",I=bu;break;case"beforeblur":case"afterblur":I=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=ZE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=pT;break;case Hy:case Ky:case Gy:I=nT;break;case Qy:I=gT;break;case"scroll":I=XE;break;case"wheel":I=_T;break;case"copy":case"cut":case"paste":I=iT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Lp}var N=(e&4)!==0,L=!N&&t==="scroll",A=N?g!==null?g+"Capture":null:g;N=[];for(var _=h,S;_!==null;){S=_;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,A!==null&&(V=$s(_,A),V!=null&&N.push(Ys(_,V,S)))),L)break;_=_.return}0<N.length&&(g=new I(g,x,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Sc&&(x=n.relatedTarget||n.fromElement)&&(_r(x)||x[mn]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=h,x=x?_r(x):null,x!==null&&(L=Mr(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=h),I!==x)){if(N=Vp,V="onMouseLeave",A="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Lp,V="onPointerLeave",A="onPointerEnter",_="pointer"),L=I==null?g:ni(I),S=x==null?g:ni(x),g=new N(V,_+"leave",I,n,f),g.target=L,g.relatedTarget=S,V=null,_r(f)===h&&(N=new N(A,_+"enter",x,n,f),N.target=S,N.relatedTarget=L,V=N),L=V,I&&x)t:{for(N=I,A=x,_=0,S=N;S;S=Hr(S))_++;for(S=0,V=A;V;V=Hr(V))S++;for(;0<_-S;)N=Hr(N),_--;for(;0<S-_;)A=Hr(A),S--;for(;_--;){if(N===A||A!==null&&N===A.alternate)break t;N=Hr(N),A=Hr(A)}N=null}else N=null;I!==null&&Hp(m,g,I,N,!1),x!==null&&L!==null&&Hp(m,L,x,N,!0)}}e:{if(g=h?ni(h):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var U=AT;else if(Fp(g))if(By)U=kT;else{U=CT;var F=RT}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=PT);if(U&&(U=U(t,h))){jy(m,U,n,f);break e}F&&F(t,g,h),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&vc(g,"number",g.value)}switch(F=h?ni(h):window,t){case"focusin":(Fp(F)||F.contentEditable==="true")&&(ei=F,Nc=h,xs=null);break;case"focusout":xs=Nc=ei=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,$p(m,n,f);break;case"selectionchange":if(DT)break;case"keydown":case"keyup":$p(m,n,f)}var v;if(Kh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Zr?Fy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(My&&n.locale!=="ko"&&(Zr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Zr&&(v=by()):(Fn=f,Wh="value"in Fn?Fn.value:Fn.textContent,Zr=!0)),F=Ka(h,y),0<F.length&&(y=new Op(y,t,null,n,f),m.push({event:y,listeners:F}),v?y.data=v:(v=Uy(n),v!==null&&(y.data=v)))),(v=wT?ET(t,n):TT(t,n))&&(h=Ka(h,"onBeforeInput"),0<h.length&&(f=new Op("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}Xy(m,e)})}function Ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(t,n),s!=null&&r.unshift(Ys(t,s,i)),s=$s(t,e),s!=null&&r.push(Ys(t,s,i))),t=t.return}return r}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=$s(n,s),u!=null&&o.unshift(Ys(n,u,l))):i||(u=$s(n,s),u!=null&&o.push(Ys(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bT=/\r\n?/g,MT=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(bT,`
`).replace(MT,"")}function aa(t,e,n){if(e=Kp(e),Kp(t)!==e&&n)throw Error(M(425))}function Ga(){}var Vc=null,Oc=null;function Lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,FT=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,UT=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(jT)}:bc;function jT(t){setTimeout(function(){throw t})}function Wu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hs(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Ui,Xs="__reactProps$"+Ui,mn="__reactContainer$"+Ui,Mc="__reactEvents$"+Ui,BT="__reactListeners$"+Ui,zT="__reactHandles$"+Ui;function _r(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qp(t);t!==null;){if(n=t[Bt])return n;t=Qp(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[Bt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Dl(t){return t[Xs]||null}var Fc=[],ri=-1;function ar(t){return{current:t}}function pe(t){0>ri||(t.current=Fc[ri],Fc[ri]=null,ri--)}function ce(t,e){ri++,Fc[ri]=t.current,t.current=e}var nr={},Ze=ar(nr),ct=ar(!1),Ar=nr;function Ei(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function Qa(){pe(ct),pe(Ze)}function Yp(t,e,n){if(Ze.current!==nr)throw Error(M(168));ce(Ze,e),ce(ct,n)}function Zy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,RE(t)||"Unknown",i));return ve({},n,r)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Ar=Ze.current,ce(Ze,t),ce(ct,ct.current),!0}function Xp(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Zy(t,e,Ar),r.__reactInternalMemoizedMergedChildContext=t,pe(ct),pe(Ze),ce(Ze,t)):pe(ct),ce(ct,n)}var sn=null,Vl=!1,qu=!1;function e_(t){sn===null?sn=[t]:sn.push(t)}function $T(t){Vl=!0,e_(t)}function lr(){if(!qu&&sn!==null){qu=!0;var t=0,e=oe;try{var n=sn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,Vl=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),Ay(jh,lr),i}finally{oe=e,qu=!1}}return null}var ii=[],si=0,Xa=null,Ja=0,Et=[],Tt=0,Rr=null,on=1,an="";function mr(t,e){ii[si++]=Ja,ii[si++]=Xa,Xa=t,Ja=e}function t_(t,e,n){Et[Tt++]=on,Et[Tt++]=an,Et[Tt++]=Rr,Rr=t;var r=on;t=an;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-Ot(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function Qh(t){t.return!==null&&(mr(t,1),t_(t,1,0))}function Yh(t){for(;t===Xa;)Xa=ii[--si],ii[si]=null,Ja=ii[--si],ii[si]=null;for(;t===Rr;)Rr=Et[--Tt],Et[Tt]=null,an=Et[--Tt],Et[Tt]=null,on=Et[--Tt],Et[Tt]=null}var gt=null,mt=null,me=!1,Dt=null;function n_(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,mt=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,mt=null,!0):!1;default:return!1}}function Uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jc(t){if(me){var e=mt;if(e){var n=e;if(!Jp(t,e)){if(Uc(t))throw Error(M(418));e=Wn(n.nextSibling);var r=gt;e&&Jp(t,e)?n_(r,n):(t.flags=t.flags&-4097|2,me=!1,gt=t)}}else{if(Uc(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,gt=t}}}function Zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function la(t){if(t!==gt)return!1;if(!me)return Zp(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lc(t.type,t.memoizedProps)),e&&(e=mt)){if(Uc(t))throw r_(),Error(M(418));for(;e;)n_(t,e),e=Wn(e.nextSibling)}if(Zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=gt?Wn(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=mt;t;)t=Wn(t.nextSibling)}function Ti(){mt=gt=null,me=!1}function Xh(t){Dt===null?Dt=[t]:Dt.push(t)}var WT=Tn.ReactCurrentBatchConfig;function ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ua(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function i_(t){function e(A,_){if(t){var S=A.deletions;S===null?(A.deletions=[_],A.flags|=16):S.push(_)}}function n(A,_){if(!t)return null;for(;_!==null;)e(A,_),_=_.sibling;return null}function r(A,_){for(A=new Map;_!==null;)_.key!==null?A.set(_.key,_):A.set(_.index,_),_=_.sibling;return A}function i(A,_){return A=Gn(A,_),A.index=0,A.sibling=null,A}function s(A,_,S){return A.index=S,t?(S=A.alternate,S!==null?(S=S.index,S<_?(A.flags|=2,_):S):(A.flags|=2,_)):(A.flags|=1048576,_)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,_,S,V){return _===null||_.tag!==6?(_=Ju(S,A.mode,V),_.return=A,_):(_=i(_,S),_.return=A,_)}function u(A,_,S,V){var U=S.type;return U===Jr?f(A,_,S.props.children,V,S.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===xn&&em(U)===_.type)?(V=i(_,S.props),V.ref=ds(A,_,S),V.return=A,V):(V=xa(S.type,S.key,S.props,null,A.mode,V),V.ref=ds(A,_,S),V.return=A,V)}function h(A,_,S,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Zu(S,A.mode,V),_.return=A,_):(_=i(_,S.children||[]),_.return=A,_)}function f(A,_,S,V,U){return _===null||_.tag!==7?(_=Ir(S,A.mode,V,U),_.return=A,_):(_=i(_,S),_.return=A,_)}function m(A,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ju(""+_,A.mode,S),_.return=A,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:return S=xa(_.type,_.key,_.props,null,A.mode,S),S.ref=ds(A,null,_),S.return=A,S;case Xr:return _=Zu(_,A.mode,S),_.return=A,_;case xn:var V=_._init;return m(A,V(_._payload),S)}if(ys(_)||as(_))return _=Ir(_,A.mode,S,null),_.return=A,_;ua(A,_)}return null}function g(A,_,S,V){var U=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(A,_,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Jo:return S.key===U?u(A,_,S,V):null;case Xr:return S.key===U?h(A,_,S,V):null;case xn:return U=S._init,g(A,_,U(S._payload),V)}if(ys(S)||as(S))return U!==null?null:f(A,_,S,V,null);ua(A,S)}return null}function I(A,_,S,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return A=A.get(S)||null,l(_,A,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Jo:return A=A.get(V.key===null?S:V.key)||null,u(_,A,V,U);case Xr:return A=A.get(V.key===null?S:V.key)||null,h(_,A,V,U);case xn:var F=V._init;return I(A,_,S,F(V._payload),U)}if(ys(V)||as(V))return A=A.get(S)||null,f(_,A,V,U,null);ua(_,V)}return null}function x(A,_,S,V){for(var U=null,F=null,v=_,y=_=0,w=null;v!==null&&y<S.length;y++){v.index>y?(w=v,v=null):w=v.sibling;var E=g(A,v,S[y],V);if(E===null){v===null&&(v=w);break}t&&v&&E.alternate===null&&e(A,v),_=s(E,_,y),F===null?U=E:F.sibling=E,F=E,v=w}if(y===S.length)return n(A,v),me&&mr(A,y),U;if(v===null){for(;y<S.length;y++)v=m(A,S[y],V),v!==null&&(_=s(v,_,y),F===null?U=v:F.sibling=v,F=v);return me&&mr(A,y),U}for(v=r(A,v);y<S.length;y++)w=I(v,A,y,S[y],V),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?y:w.key),_=s(w,_,y),F===null?U=w:F.sibling=w,F=w);return t&&v.forEach(function(C){return e(A,C)}),me&&mr(A,y),U}function N(A,_,S,V){var U=as(S);if(typeof U!="function")throw Error(M(150));if(S=U.call(S),S==null)throw Error(M(151));for(var F=U=null,v=_,y=_=0,w=null,E=S.next();v!==null&&!E.done;y++,E=S.next()){v.index>y?(w=v,v=null):w=v.sibling;var C=g(A,v,E.value,V);if(C===null){v===null&&(v=w);break}t&&v&&C.alternate===null&&e(A,v),_=s(C,_,y),F===null?U=C:F.sibling=C,F=C,v=w}if(E.done)return n(A,v),me&&mr(A,y),U;if(v===null){for(;!E.done;y++,E=S.next())E=m(A,E.value,V),E!==null&&(_=s(E,_,y),F===null?U=E:F.sibling=E,F=E);return me&&mr(A,y),U}for(v=r(A,v);!E.done;y++,E=S.next())E=I(v,A,y,E.value,V),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=s(E,_,y),F===null?U=E:F.sibling=E,F=E);return t&&v.forEach(function(k){return e(A,k)}),me&&mr(A,y),U}function L(A,_,S,V){if(typeof S=="object"&&S!==null&&S.type===Jr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Jo:e:{for(var U=S.key,F=_;F!==null;){if(F.key===U){if(U=S.type,U===Jr){if(F.tag===7){n(A,F.sibling),_=i(F,S.props.children),_.return=A,A=_;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===xn&&em(U)===F.type){n(A,F.sibling),_=i(F,S.props),_.ref=ds(A,F,S),_.return=A,A=_;break e}n(A,F);break}else e(A,F);F=F.sibling}S.type===Jr?(_=Ir(S.props.children,A.mode,V,S.key),_.return=A,A=_):(V=xa(S.type,S.key,S.props,null,A.mode,V),V.ref=ds(A,_,S),V.return=A,A=V)}return o(A);case Xr:e:{for(F=S.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(A,_.sibling),_=i(_,S.children||[]),_.return=A,A=_;break e}else{n(A,_);break}else e(A,_);_=_.sibling}_=Zu(S,A.mode,V),_.return=A,A=_}return o(A);case xn:return F=S._init,L(A,_,F(S._payload),V)}if(ys(S))return x(A,_,S,V);if(as(S))return N(A,_,S,V);ua(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(A,_.sibling),_=i(_,S),_.return=A,A=_):(n(A,_),_=Ju(S,A.mode,V),_.return=A,A=_),o(A)):n(A,_)}return L}var Ii=i_(!0),s_=i_(!1),Za=ar(null),el=null,oi=null,Jh=null;function Zh(){Jh=oi=el=null}function ed(t){var e=Za.current;pe(Za),t._currentValue=e}function Bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pi(t,e){el=t,Jh=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(Jh!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(el===null)throw Error(M(308));oi=t,el.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var vr=null;function td(t){vr===null?vr=[t]:vr.push(t)}function o_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,td(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,td(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}function tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,N=l;switch(g=e,I=n,N.tag){case 1:if(x=N.payload,typeof x=="function"){m=x.call(I,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,g=typeof x=="function"?x.call(I,m,g):x,g==null)break e;m=ve({},m,g);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=I,u=m):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=m}}function nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var wo={},Wt=ar(wo),Js=ar(wo),Zs=ar(wo);function wr(t){if(t===wo)throw Error(M(174));return t}function rd(t,e){switch(ce(Zs,e),ce(Js,t),ce(Wt,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ec(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ec(e,t)}pe(Wt),ce(Wt,e)}function Si(){pe(Wt),pe(Js),pe(Zs)}function l_(t){wr(Zs.current);var e=wr(Wt.current),n=Ec(e,t.type);e!==n&&(ce(Js,t),ce(Wt,n))}function id(t){Js.current===t&&(pe(Wt),pe(Js))}var ye=ar(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hu=[];function sd(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var Aa=Tn.ReactCurrentDispatcher,Ku=Tn.ReactCurrentBatchConfig,Cr=0,_e=null,ke=null,Ve=null,rl=!1,Ns=!1,eo=0,qT=0;function Ke(){throw Error(M(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function ad(t,e,n,r,i,s){if(Cr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?QT:YT,t=n(r,i),Ns){s=0;do{if(Ns=!1,eo=0,25<=s)throw Error(M(301));s+=1,Ve=ke=null,e.updateQueue=null,Aa.current=XT,t=n(r,i)}while(Ns)}if(Aa.current=il,e=ke!==null&&ke.next!==null,Cr=0,Ve=ke=_e=null,rl=!1,e)throw Error(M(300));return t}function ld(){var t=eo!==0;return eo=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Ct(){if(ke===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Ve===null?_e.memoizedState:Ve.next;if(e!==null)Ve=e,ke=t;else{if(t===null)throw Error(M(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function to(t,e){return typeof e=="function"?e(t):e}function Gu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Cr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,Pr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,bt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function u_(){}function c_(t,e){var n=_e,r=Ct(),i=e(),s=!bt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,ud(f_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,no(9,d_.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(M(349));Cr&30||h_(n,e,i)}return i}function h_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,r){e.value=n,e.getSnapshot=r,p_(e)&&m_(t)}function f_(t,e,n){return n(function(){p_(e)&&m_(t)})}function p_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function m_(t){var e=gn(t,1);e!==null&&Lt(e,t,1,-1)}function rm(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=GT.bind(null,_e,t),[e.memoizedState,t]}function no(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g_(){return Ct().memoizedState}function Ra(t,e,n,r){var i=jt();_e.flags|=t,i.memoizedState=no(1|e,n,void 0,r===void 0?null:r)}function Ol(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&od(r,o.deps)){i.memoizedState=no(e,n,s,r);return}}_e.flags|=t,i.memoizedState=no(1|e,n,s,r)}function im(t,e){return Ra(8390656,8,t,e)}function ud(t,e){return Ol(2048,8,t,e)}function y_(t,e){return Ol(4,2,t,e)}function __(t,e){return Ol(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,v_.bind(null,e,t),n)}function cd(){}function E_(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function T_(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I_(t,e,n){return Cr&21?(bt(n,e)||(n=Py(),_e.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function HT(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Ku.transition;Ku.transition={};try{t(!1),e()}finally{oe=n,Ku.transition=r}}function S_(){return Ct().memoizedState}function KT(t,e,n){var r=Kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A_(t))R_(e,n);else if(n=o_(t,e,n,r),n!==null){var i=it();Lt(n,t,r,i),C_(n,e,r)}}function GT(t,e,n){var r=Kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A_(t))R_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,bt(l,o)){var u=e.interleaved;u===null?(i.next=i,td(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=o_(t,e,i,r),n!==null&&(i=it(),Lt(n,t,r,i),C_(n,e,r))}}function A_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function R_(t,e){Ns=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}var il={readContext:Rt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},QT={readContext:Rt,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KT.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:cd,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=HT.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=jt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Oe===null)throw Error(M(349));Cr&30||h_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,im(f_.bind(null,r,s,t),[t]),r.flags|=2048,no(9,d_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jt(),e=Oe.identifierPrefix;if(me){var n=an,r=on;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YT={readContext:Rt,useCallback:E_,useContext:Rt,useEffect:ud,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:__,useMemo:T_,useReducer:Gu,useRef:g_,useState:function(){return Gu(to)},useDebugValue:cd,useDeferredValue:function(t){var e=Ct();return I_(e,ke.memoizedState,t)},useTransition:function(){var t=Gu(to)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:S_,unstable_isNewReconciler:!1},XT={readContext:Rt,useCallback:E_,useContext:Rt,useEffect:ud,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:__,useMemo:T_,useReducer:Qu,useRef:g_,useState:function(){return Qu(to)},useDebugValue:cd,useDeferredValue:function(t){var e=Ct();return ke===null?e.memoizedState=t:I_(e,ke.memoizedState,t)},useTransition:function(){var t=Qu(to)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:S_,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=Kn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Lt(e,t,i,r),Sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=Kn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Lt(e,t,i,r),Sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=Kn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(Lt(e,t,r,n),Sa(e,t,r))}};function sm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,r)||!Gs(i,s):!0}function P_(t,e,n){var r=!1,i=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ht(e)?Ar:Ze.current,r=e.contextTypes,s=(r=r!=null)?Ei(t,i):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function om(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function $c(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ht(e)?Ar:Ze.current,i.context=Ei(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ll.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ai(t,e){try{var n="",r=e;do n+=AE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JT=typeof WeakMap=="function"?WeakMap:Map;function k_(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,eh=r),Wc(t,e)},n}function x_(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wc(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dI.bind(null,t,e,n),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function um(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var ZT=Tn.ReactCurrentOwner,ut=!1;function rt(t,e,n,r){e.child=t===null?s_(e,null,n,r):Ii(e,t.child,n,r)}function cm(t,e,n,r,i){n=n.render;var s=e.ref;return pi(e,i),r=ad(t,e,n,r,s,i),n=ld(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(me&&n&&Qh(e),e.flags|=1,rt(t,e,r,i),e.child)}function hm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N_(t,e,s,r,i)):(t=xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=Gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function N_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gs(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,yn(t,e,i)}return qc(t,e,n,r,i)}function D_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(li,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(li,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(li,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(li,pt),pt|=r;return rt(t,e,i,n),e.child}function V_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qc(t,e,n,r,i){var s=ht(n)?Ar:Ze.current;return s=Ei(e,s),pi(e,i),n=ad(t,e,n,r,s,i),r=ld(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(me&&r&&Qh(e),e.flags|=1,rt(t,e,n,i),e.child)}function dm(t,e,n,r,i){if(ht(n)){var s=!0;Ya(e)}else s=!1;if(pi(e,i),e.stateNode===null)Ca(t,e),P_(e,n,r),$c(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Rt(h):(h=ht(n)?Ar:Ze.current,h=Ei(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&om(e,o,r,h),Nn=!1;var g=e.memoizedState;o.state=g,tl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ct.current||Nn?(typeof f=="function"&&(zc(e,n,f,r),u=e.memoizedState),(l=Nn||sm(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:xt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=ht(n)?Ar:Ze.current,u=Ei(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&om(e,o,r,u),Nn=!1,g=e.memoizedState,o.state=g,tl(e,r,o,i);var x=e.memoizedState;l!==m||g!==x||ct.current||Nn?(typeof I=="function"&&(zc(e,n,I,r),x=e.memoizedState),(h=Nn||sm(e,n,h,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Hc(t,e,n,r,s,i)}function Hc(t,e,n,r,i,s){V_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xp(e,n,!1),yn(t,e,s);r=e.stateNode,ZT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ii(e,t.child,null,s),e.child=Ii(e,null,l,s)):rt(t,e,l,s),e.memoizedState=r.state,i&&Xp(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?Yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yp(t,e.context,!1),rd(t,e.containerInfo)}function fm(t,e,n,r,i){return Ti(),Xh(i),e.flags|=256,rt(t,e,n,r),e.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function L_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fl(o,r,0,null),t=Ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gc(n),e.memoizedState=Kc,t):hd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return eI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Gn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Gn(l,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kc,r}return s=t.child,t=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hd(t,e){return e=Fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,r){return r!==null&&Xh(r),Ii(e,t.child,null,n),t=hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yu(Error(M(422))),ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fl({mode:"visible",children:r.children},i,0,null),s=Ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ii(e,t.child,null,o),e.child.memoizedState=Gc(o),e.memoizedState=Kc,s);if(!(e.mode&1))return ca(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Yu(s,r,void 0),ca(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Lt(r,t,i,-1))}return yd(),r=Yu(Error(M(421))),ca(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=Wn(i.nextSibling),gt=e,me=!0,Dt=null,t!==null&&(Et[Tt++]=on,Et[Tt++]=an,Et[Tt++]=Rr,on=t.id,an=t.overflow,Rr=e),e=hd(e,r.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bc(t.return,e,n)}function Xu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xu(e,!0,n,null,s);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tI(t,e,n){switch(e.tag){case 3:O_(e),Ti();break;case 5:l_(e);break;case 1:ht(e.type)&&Ya(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Za,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?L_(t,e,n):(ce(ye,ye.current&1),t=yn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return b_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,D_(t,e,n)}return yn(t,e,n)}var M_,Qc,F_,U_;M_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qc=function(){};F_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wr(Wt.current);var s=null;switch(n){case"input":i=yc(t,i),r=yc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=wc(t,i),r=wc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ga)}Tc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Bs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Bs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};U_=function(t,e,n,r){n!==r&&(e.flags|=4)};function fs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nI(t,e,n){var r=e.pendingProps;switch(Yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ht(e.type)&&Qa(),Ge(e),null;case 3:return r=e.stateNode,Si(),pe(ct),pe(Ze),sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(rh(Dt),Dt=null))),Qc(t,e),Ge(e),null;case 5:id(e);var i=wr(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ge(e),null}if(t=wr(Wt.current),la(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[Xs]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<vs.length;i++)de(vs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Ip(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Ap(r,s),de("invalid",r)}Tc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),i=["children",""+l]):Bs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Zo(r),Sp(r,s,!0);break;case"textarea":Zo(r),Rp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ga)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[Xs]=r,M_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ic(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<vs.length;i++)de(vs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Ip(t,r),i=yc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":Ap(t,r),i=wc(t,r),de("invalid",t);break;default:i=r}Tc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?gy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&py(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zs(t,u):typeof u=="number"&&zs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Lh(t,s,u,o))}switch(n){case"input":Zo(t),Sp(t,r,!1);break;case"textarea":Zo(t),Rp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)U_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=wr(Zs.current),wr(Wt.current),la(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&mt!==null&&e.mode&1&&!(e.flags&128))r_(),Ti(),e.flags|=98560,s=!1;else if(s=la(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Bt]=e}else Ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Dt!==null&&(rh(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?xe===0&&(xe=3):yd())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Si(),Qc(t,e),t===null&&Qs(e.stateNode.containerInfo),Ge(e),null;case 10:return ed(e.type._context),Ge(e),null;case 17:return ht(e.type)&&Qa(),Ge(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fs(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,fs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Ri&&(e.flags|=128,r=!0,fs(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ge(e),null}else 2*Ae()-s.renderingStartTime>Ri&&n!==1073741824&&(e.flags|=128,r=!0,fs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return gd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function rI(t,e){switch(Yh(e),e.tag){case 1:return ht(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Si(),pe(ct),pe(Ze),sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return id(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Si(),null;case 10:return ed(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var ha=!1,Xe=!1,iI=typeof WeakSet=="function"?WeakSet:Set,z=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Yc(t,e,n){try{n()}catch(r){Te(t,e,r)}}var mm=!1;function sI(t,e){if(Vc=qa,t=Wy(),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oc={focusedElem:t,selectionRange:n},qa=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,L=x.memoizedState,A=e.stateNode,_=A.getSnapshotBeforeUpdate(e.elementType===e.type?N:xt(e.type,N),L);A.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Te(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return x=mm,mm=!1,x}function Ds(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yc(e,n,s)}i=i.next}while(i!==r)}}function bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j_(t){var e=t.alternate;e!==null&&(t.alternate=null,j_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[Xs],delete e[Mc],delete e[BT],delete e[zT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B_(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ga));else if(r!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}function Zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}var be=null,Nt=!1;function Pn(t,e,n){for(n=n.child;n!==null;)z_(t,e,n),n=n.sibling}function z_(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Xe||ai(n,e);case 6:var r=be,i=Nt;be=null,Pn(t,e,n),be=r,Nt=i,be!==null&&(Nt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Nt?(t=be,n=n.stateNode,t.nodeType===8?Wu(t.parentNode,n):t.nodeType===1&&Wu(t,n),Hs(t)):Wu(be,n.stateNode));break;case 4:r=be,i=Nt,be=n.stateNode.containerInfo,Nt=!0,Pn(t,e,n),be=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yc(n,e,o),i=i.next}while(i!==r)}Pn(t,e,n);break;case 1:if(!Xe&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Pn(t,e,n),Xe=r):Pn(t,e,n);break;default:Pn(t,e,n)}}function ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iI),e.forEach(function(r){var i=pI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Nt=!1;break e;case 3:be=l.stateNode.containerInfo,Nt=!0;break e;case 4:be=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(be===null)throw Error(M(160));z_(s,o,i),be=null,Nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$_(e,t),e=e.sibling}function $_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),Ut(t),r&4){try{Ds(3,t,t.return),bl(3,t)}catch(N){Te(t,t.return,N)}try{Ds(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:kt(e,t),Ut(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(kt(e,t),Ut(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var i=t.stateNode;try{zs(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hy(i,s),Ic(l,o);var h=Ic(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?gy(i,m):f==="dangerouslySetInnerHTML"?py(i,m):f==="children"?zs(i,m):Lh(i,f,m,h)}switch(l){case"input":_c(i,s);break;case"textarea":dy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ci(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?ci(i,!!s.multiple,s.defaultValue,!0):ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xs]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(kt(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(kt(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hs(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:kt(e,t),Ut(t);break;case 13:kt(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pd=Ae())),r&4&&ym(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||f,kt(e,t),Xe=h):kt(e,t),Ut(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(m=z=f;z!==null;){switch(g=z,I=g.child,g.tag){case 0:case 11:case 14:case 15:Ds(4,g,g.return);break;case 1:ai(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:ai(g,g.return);break;case 22:if(g.memoizedState!==null){vm(m);continue}}I!==null?(I.return=g,z=I):vm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=my("display",o))}catch(N){Te(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Te(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:kt(e,t),Ut(t),r&4&&ym(t);break;case 21:break;default:kt(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zs(i,""),r.flags&=-33);var s=gm(t);Zc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gm(t);Jc(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oI(t,e,n){z=t,W_(t)}function W_(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ha;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=ha;var h=Xe;if(ha=o,(Xe=u)&&!h)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?wm(i):u!==null?(u.return=o,z=u):wm(i);for(;s!==null;)z=s,W_(s),s=s.sibling;z=i,ha=l,Xe=h}_m(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):_m(t)}}function _m(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||bl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Hs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Xe||e.flags&512&&Xc(e)}catch(g){Te(e,e.return,g)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function vm(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function wm(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Xc(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Xc(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var aI=Math.ceil,sl=Tn.ReactCurrentDispatcher,dd=Tn.ReactCurrentOwner,At=Tn.ReactCurrentBatchConfig,ne=0,Oe=null,Ce=null,Ue=0,pt=0,li=ar(0),xe=0,ro=null,Pr=0,Ml=0,fd=0,Vs=null,lt=null,pd=0,Ri=1/0,rn=null,ol=!1,eh=null,Hn=null,da=!1,Un=null,al=0,Os=0,th=null,Pa=-1,ka=0;function it(){return ne&6?Ae():Pa!==-1?Pa:Pa=Ae()}function Kn(t){return t.mode&1?ne&2&&Ue!==0?Ue&-Ue:WT.transition!==null?(ka===0&&(ka=Py()),ka):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Ly(t.type)),t):1}function Lt(t,e,n,r){if(50<Os)throw Os=0,th=null,Error(M(185));yo(t,n,r),(!(ne&2)||t!==Oe)&&(t===Oe&&(!(ne&2)&&(Ml|=n),xe===4&&Vn(t,Ue)),dt(t,r),n===1&&ne===0&&!(e.mode&1)&&(Ri=Ae()+500,Vl&&lr()))}function dt(t,e){var n=t.callbackNode;WE(t,e);var r=Wa(t,t===Oe?Ue:0);if(r===0)n!==null&&kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kp(n),e===1)t.tag===0?$T(Em.bind(null,t)):e_(Em.bind(null,t)),UT(function(){!(ne&6)&&lr()}),n=null;else{switch(ky(r)){case 1:n=jh;break;case 4:n=Ry;break;case 16:n=$a;break;case 536870912:n=Cy;break;default:n=$a}n=J_(n,q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q_(t,e){if(Pa=-1,ka=0,ne&6)throw Error(M(327));var n=t.callbackNode;if(mi()&&t.callbackNode!==n)return null;var r=Wa(t,t===Oe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ll(t,r);else{e=r;var i=ne;ne|=2;var s=K_();(Oe!==t||Ue!==e)&&(rn=null,Ri=Ae()+500,Tr(t,e));do try{cI();break}catch(l){H_(t,l)}while(!0);Zh(),sl.current=s,ne=i,Ce!==null?e=0:(Oe=null,Ue=0,e=xe)}if(e!==0){if(e===2&&(i=Pc(t),i!==0&&(r=i,e=nh(t,i))),e===1)throw n=ro,Tr(t,0),Vn(t,r),dt(t,Ae()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!lI(i)&&(e=ll(t,r),e===2&&(s=Pc(t),s!==0&&(r=s,e=nh(t,s))),e===1))throw n=ro,Tr(t,0),Vn(t,r),dt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:gr(t,lt,rn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=pd+500-Ae(),10<e)){if(Wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bc(gr.bind(null,t,lt,rn),e);break}gr(t,lt,rn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aI(r/1960))-r,10<r){t.timeoutHandle=bc(gr.bind(null,t,lt,rn),r);break}gr(t,lt,rn);break;case 5:gr(t,lt,rn);break;default:throw Error(M(329))}}}return dt(t,Ae()),t.callbackNode===n?q_.bind(null,t):null}function nh(t,e){var n=Vs;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=lt,lt=n,e!==null&&rh(e)),t}function rh(t){lt===null?lt=t:lt.push.apply(lt,t)}function lI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~fd,e&=~Ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function Em(t){if(ne&6)throw Error(M(327));mi();var e=Wa(t,0);if(!(e&1))return dt(t,Ae()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=Pc(t);r!==0&&(e=r,n=nh(t,r))}if(n===1)throw n=ro,Tr(t,0),Vn(t,e),dt(t,Ae()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,lt,rn),dt(t,Ae()),null}function md(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Ri=Ae()+500,Vl&&lr())}}function kr(t){Un!==null&&Un.tag===0&&!(ne&6)&&mi();var e=ne;ne|=1;var n=At.transition,r=oe;try{if(At.transition=null,oe=1,t)return t()}finally{oe=r,At.transition=n,ne=e,!(ne&6)&&lr()}}function gd(){pt=li.current,pe(li)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FT(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Si(),pe(ct),pe(Ze),sd();break;case 5:id(r);break;case 4:Si();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:ed(r.type._context);break;case 22:case 23:gd()}n=n.return}if(Oe=t,Ce=t=Gn(t.current,null),Ue=pt=e,xe=0,ro=null,fd=Ml=Pr=0,lt=Vs=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vr=null}return t}function H_(t,e){do{var n=Ce;try{if(Zh(),Aa.current=il,rl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(Cr=0,Ve=ke=_e=null,Ns=!1,eo=0,dd.current=null,n===null||n.return===null){xe=1,ro=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=lm(o);if(I!==null){I.flags&=-257,um(I,o,l,s,e),I.mode&1&&am(s,h,e),e=I,u=h;var x=e.updateQueue;if(x===null){var N=new Set;N.add(u),e.updateQueue=N}else x.add(u);break e}else{if(!(e&1)){am(s,h,e),yd();break e}u=Error(M(426))}}else if(me&&l.mode&1){var L=lm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),um(L,o,l,s,e),Xh(Ai(u,l));break e}}s=u=Ai(u,l),xe!==4&&(xe=2),Vs===null?Vs=[s]:Vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=k_(s,u,e);tm(s,A);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Hn===null||!Hn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=x_(s,l,e);tm(s,V);break e}}s=s.return}while(s!==null)}Q_(n)}catch(U){e=U,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function K_(){var t=sl.current;return sl.current=il,t===null?il:t}function yd(){(xe===0||xe===3||xe===2)&&(xe=4),Oe===null||!(Pr&268435455)&&!(Ml&268435455)||Vn(Oe,Ue)}function ll(t,e){var n=ne;ne|=2;var r=K_();(Oe!==t||Ue!==e)&&(rn=null,Tr(t,e));do try{uI();break}catch(i){H_(t,i)}while(!0);if(Zh(),ne=n,sl.current=r,Ce!==null)throw Error(M(261));return Oe=null,Ue=0,xe}function uI(){for(;Ce!==null;)G_(Ce)}function cI(){for(;Ce!==null&&!LE();)G_(Ce)}function G_(t){var e=X_(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?Q_(t):Ce=e,dd.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rI(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=nI(n,e,pt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function gr(t,e,n){var r=oe,i=At.transition;try{At.transition=null,oe=1,hI(t,e,n,r)}finally{At.transition=i,oe=r}return null}function hI(t,e,n,r){do mi();while(Un!==null);if(ne&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qE(t,s),t===Oe&&(Ce=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,J_($a,function(){return mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=oe;oe=1;var l=ne;ne|=4,dd.current=null,sI(t,n),$_(n,t),NT(Oc),qa=!!Vc,Oc=Vc=null,t.current=n,oI(n),bE(),ne=l,oe=o,At.transition=s}else t.current=n;if(da&&(da=!1,Un=t,al=i),s=t.pendingLanes,s===0&&(Hn=null),UE(n.stateNode),dt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=eh,eh=null,t;return al&1&&t.tag!==0&&mi(),s=t.pendingLanes,s&1?t===th?Os++:(Os=0,th=t):Os=0,lr(),null}function mi(){if(Un!==null){var t=ky(al),e=At.transition,n=oe;try{if(At.transition=null,oe=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,al=0,ne&6)throw Error(M(331));var i=ne;for(ne|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Ds(8,f,s)}var m=f.child;if(m!==null)m.return=f,z=m;else for(;z!==null;){f=z;var g=f.sibling,I=f.return;if(j_(f),f===h){z=null;break}if(g!==null){g.return=I,z=g;break}z=I}}}var x=s.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var L=N.sibling;N.sibling=null,N=L}while(N!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ds(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,z=A;break e}z=s.return}}var _=t.current;for(z=_;z!==null;){o=z;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,z=S;else e:for(o=_;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bl(9,l)}}catch(U){Te(l,l.return,U)}if(l===o){z=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,z=V;break e}z=l.return}}if(ne=i,lr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Pl,t)}catch{}r=!0}return r}finally{oe=n,At.transition=e}}return!1}function Tm(t,e,n){e=Ai(n,e),e=k_(t,e,1),t=qn(t,e,1),e=it(),t!==null&&(yo(t,1,e),dt(t,e))}function Te(t,e,n){if(t.tag===3)Tm(t,t,n);else for(;e!==null;){if(e.tag===3){Tm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Ai(n,t),t=x_(e,t,1),e=qn(e,t,1),t=it(),e!==null&&(yo(e,1,t),dt(e,t));break}}e=e.return}}function dI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Ue&n)===n&&(xe===4||xe===3&&(Ue&130023424)===Ue&&500>Ae()-pd?Tr(t,0):fd|=n),dt(t,e)}function Y_(t,e){e===0&&(t.mode&1?(e=na,na<<=1,!(na&130023424)&&(na=4194304)):e=1);var n=it();t=gn(t,e),t!==null&&(yo(t,e,n),dt(t,n))}function fI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y_(t,n)}function pI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),Y_(t,n)}var X_;X_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,tI(t,e,n);ut=!!(t.flags&131072)}else ut=!1,me&&e.flags&1048576&&t_(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ca(t,e),t=e.pendingProps;var i=Ei(e,Ze.current);pi(e,n),i=ad(null,e,r,t,i,n);var s=ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,Ya(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nd(e),i.updater=Ll,e.stateNode=i,i._reactInternals=e,$c(e,r,t,n),e=Hc(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Qh(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gI(r),t=xt(r,t),i){case 0:e=qc(null,e,r,t,n);break e;case 1:e=dm(null,e,r,t,n);break e;case 11:e=cm(null,e,r,t,n);break e;case 14:e=hm(null,e,r,xt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),qc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),dm(t,e,r,i,n);case 3:e:{if(O_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a_(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ai(Error(M(423)),e),e=fm(t,e,r,n,i);break e}else if(r!==i){i=Ai(Error(M(424)),e),e=fm(t,e,r,n,i);break e}else for(mt=Wn(e.stateNode.containerInfo.firstChild),gt=e,me=!0,Dt=null,n=s_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){e=yn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return l_(e),t===null&&jc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lc(r,i)?o=null:s!==null&&Lc(r,s)&&(e.flags|=32),V_(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&jc(e),null;case 13:return L_(t,e,n);case 4:return rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ii(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),cm(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Za,r._currentValue),r._currentValue=o,s!==null)if(bt(s.value,o)){if(s.children===i.children&&!ct.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=hn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pi(e,n),i=Rt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),hm(t,e,r,i,n);case 15:return N_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Ca(t,e),e.tag=1,ht(r)?(t=!0,Ya(e)):t=!1,pi(e,n),P_(e,r,i),$c(e,r,i,n),Hc(null,e,r,!0,t,n);case 19:return b_(t,e,n);case 22:return D_(t,e,n)}throw Error(M(156,e.tag))};function J_(t,e){return Ay(t,e)}function mI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new mI(t,e,n,r)}function _d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gI(t){if(typeof t=="function")return _d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mh)return 11;if(t===Fh)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return Ir(n.children,i,s,e);case bh:o=8,i|=8;break;case fc:return t=St(12,n,e,i|2),t.elementType=fc,t.lanes=s,t;case pc:return t=St(13,n,e,i),t.elementType=pc,t.lanes=s,t;case mc:return t=St(19,n,e,i),t.elementType=mc,t.lanes=s,t;case ly:return Fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oy:o=10;break e;case ay:o=9;break e;case Mh:o=11;break e;case Fh:o=14;break e;case xn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ir(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function Fl(t,e,n,r){return t=St(22,t,r,e),t.elementType=ly,t.lanes=n,t.stateNode={isHidden:!1},t}function Ju(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,r,i,s,o,l,u){return t=new yI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(s),t}function _I(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z_(t){if(!t)return nr;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(ht(n))return Zy(t,n,e)}return e}function ev(t,e,n,r,i,s,o,l,u){return t=vd(n,r,!0,t,i,s,o,l,u),t.context=Z_(null),n=t.current,r=it(),i=Kn(n),s=hn(r,i),s.callback=e??null,qn(n,s,i),t.current.lanes=i,yo(t,i,r),dt(t,r),t}function Ul(t,e,n,r){var i=e.current,s=it(),o=Kn(i);return n=Z_(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(Lt(t,i,o,s),Sa(t,i,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){Im(t,e),(t=t.alternate)&&Im(t,e)}function vI(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ed(t){this._internalRoot=t}jl.prototype.render=Ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Ul(t,e,null,null)};jl.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){Ul(null,t,null,null)}),e[mn]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&Oy(t)}};function Td(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function wI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ul(o);s.call(h)}}var o=ev(e,r,t,0,null,!1,!1,"",Sm);return t._reactRootContainer=o,t[mn]=o.current,Qs(t.nodeType===8?t.parentNode:t),kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ul(u);l.call(h)}}var u=vd(t,0,!1,null,null,!1,!1,"",Sm);return t._reactRootContainer=u,t[mn]=u.current,Qs(t.nodeType===8?t.parentNode:t),kr(function(){Ul(e,u,n,r)}),u}function zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ul(o);l.call(u)}}Ul(e,o,t,i)}else o=wI(n,e,t,i,r);return ul(o)}xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(Bh(e,n|1),dt(e,Ae()),!(ne&6)&&(Ri=Ae()+500,lr()))}break;case 13:kr(function(){var r=gn(t,1);if(r!==null){var i=it();Lt(r,t,1,i)}}),wd(t,1)}};zh=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=it();Lt(e,t,134217728,n)}wd(t,134217728)}};Ny=function(t){if(t.tag===13){var e=Kn(t),n=gn(t,e);if(n!==null){var r=it();Lt(n,t,e,r)}wd(t,e)}};Dy=function(){return oe};Vy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Ac=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dl(r);if(!i)throw Error(M(90));cy(r),_c(r,i)}}}break;case"textarea":dy(t,n);break;case"select":e=n.value,e!=null&&ci(t,!!n.multiple,e,!1)}};vy=md;wy=kr;var EI={usingClientEntryPoint:!1,Events:[vo,ni,Dl,yy,_y,md]},ps={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TI={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iy(t),t===null?null:t.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||vI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Pl=fa.inject(TI),$t=fa}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Td(e))throw Error(M(200));return _I(t,e,null,n)};_t.createRoot=function(t,e){if(!Td(t))throw Error(M(299));var n=!1,r="",i=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,Qs(t.nodeType===8?t.parentNode:t),new Ed(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Iy(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return kr(t)};_t.hydrate=function(t,e,n){if(!Bl(e))throw Error(M(200));return zl(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!Td(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ev(e,null,t,1,n??null,i,!1,s,o),t[mn]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};_t.render=function(t,e,n){if(!Bl(e))throw Error(M(200));return zl(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(M(40));return t._reactRootContainer?(kr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};_t.unstable_batchedUpdates=md;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bl(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return zl(t,e,n,!1,r)};_t.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),ny.exports=_t;var II=ny.exports,rv,Am=II;rv=Am.createRoot,Am.hydrateRoot;var Rm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new AI;const g=s<<2|l>>4;if(r.push(g),h!==64){const I=l<<4&240|h>>2;if(r.push(I),m!==64){const x=h<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RI=function(t){const e=iv(t);return sv.encodeByteArray(e,!0)},cl=function(t){return RI(t).replace(/\./g,"")},ov=function(t){try{return sv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=()=>CI().__FIREBASE_DEFAULTS__,kI=()=>{if(typeof process>"u"||typeof Rm>"u")return;const t=Rm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ov(t[1]);return e&&JSON.parse(e)},$l=()=>{try{return PI()||kI()||xI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},av=t=>{var e,n;return(n=(e=$l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NI=t=>{const e=av(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lv=()=>{var t;return(t=$l())===null||t===void 0?void 0:t.config},uv=t=>{var e;return(e=$l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function LI(){var t;const e=(t=$l())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UI(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jI(){return!LI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BI(){try{return typeof indexedDB=="object"}catch{return!1}}function zI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$I,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new In(i,l,r)}}function WI(t,e){return t.replace(qI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qI=/\{\$([^}]+)}/g;function HI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cm(s)&&Cm(o)){if(!hl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Es(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function KI(t,e){const n=new GI(t,e);return n.subscribe.bind(n)}class GI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ec),i.error===void 0&&(i.error=ec),i.complete===void 0&&(i.complete=ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XI(t){return t===yr?void 0:t}function JI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const eS={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},tS=ee.INFO,nS={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},rS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Id{constructor(e){this.name=e,this._logLevel=tS,this._logHandler=rS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const iS=(t,e)=>e.some(n=>t instanceof n);let Pm,km;function sS(){return Pm||(Pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oS(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cv=new WeakMap,ih=new WeakMap,hv=new WeakMap,tc=new WeakMap,Sd=new WeakMap;function aS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cv.set(n,t)}).catch(()=>{}),Sd.set(e,t),e}function lS(t){if(ih.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uS(t){sh=t(sh)}function cS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nc(this),e,...n);return hv.set(r,e.sort?e.sort():[e]),Qn(r)}:oS().includes(t)?function(...e){return t.apply(nc(this),e),Qn(cv.get(this))}:function(...e){return Qn(t.apply(nc(this),e))}}function hS(t){return typeof t=="function"?cS(t):(t instanceof IDBTransaction&&lS(t),iS(t,sS())?new Proxy(t,sh):t)}function Qn(t){if(t instanceof IDBRequest)return aS(t);if(tc.has(t))return tc.get(t);const e=hS(t);return e!==t&&(tc.set(t,e),Sd.set(e,t)),e}const nc=t=>Sd.get(t);function dS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Qn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qn(o.result),u.oldVersion,u.newVersion,Qn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const fS=["get","getKey","getAll","getAllKeys","count"],pS=["put","add","delete","clear"],rc=new Map;function xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return rc.set(e,s),s}uS(t=>({...t,get:(e,n,r)=>xm(e,n)||t.get(e,n,r),has:(e,n)=>!!xm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",Nm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Id("@firebase/app"),yS="@firebase/app-compat",_S="@firebase/analytics-compat",vS="@firebase/analytics",wS="@firebase/app-check-compat",ES="@firebase/app-check",TS="@firebase/auth",IS="@firebase/auth-compat",SS="@firebase/database",AS="@firebase/data-connect",RS="@firebase/database-compat",CS="@firebase/functions",PS="@firebase/functions-compat",kS="@firebase/installations",xS="@firebase/installations-compat",NS="@firebase/messaging",DS="@firebase/messaging-compat",VS="@firebase/performance",OS="@firebase/performance-compat",LS="@firebase/remote-config",bS="@firebase/remote-config-compat",MS="@firebase/storage",FS="@firebase/storage-compat",US="@firebase/firestore",jS="@firebase/vertexai-preview",BS="@firebase/firestore-compat",zS="firebase",$S="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="[DEFAULT]",WS={[oh]:"fire-core",[yS]:"fire-core-compat",[vS]:"fire-analytics",[_S]:"fire-analytics-compat",[ES]:"fire-app-check",[wS]:"fire-app-check-compat",[TS]:"fire-auth",[IS]:"fire-auth-compat",[SS]:"fire-rtdb",[AS]:"fire-data-connect",[RS]:"fire-rtdb-compat",[CS]:"fire-fn",[PS]:"fire-fn-compat",[kS]:"fire-iid",[xS]:"fire-iid-compat",[NS]:"fire-fcm",[DS]:"fire-fcm-compat",[VS]:"fire-perf",[OS]:"fire-perf-compat",[LS]:"fire-rc",[bS]:"fire-rc-compat",[MS]:"fire-gcs",[FS]:"fire-gcs-compat",[US]:"fire-fst",[BS]:"fire-fst-compat",[jS]:"fire-vertex","fire-js":"fire-js",[zS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Map,qS=new Map,lh=new Map;function Dm(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ci(t){const e=t.name;if(lh.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;lh.set(e,t);for(const n of dl.values())Dm(n,t);for(const n of qS.values())Dm(n,t);return!0}function Ad(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Eo("app","Firebase",HS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=$S;function dv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=lv()),!n)throw Yn.create("no-options");const s=dl.get(i);if(s){if(hl(n,s.options)&&hl(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new ZI(i);for(const u of lh.values())o.addComponent(u);const l=new KS(n,r,o);return dl.set(i,l),l}function fv(t=ah){const e=dl.get(t);if(!e&&t===ah&&lv())return dv();if(!e)throw Yn.create("no-app",{appName:t});return e}function Xn(t,e,n){var r;let i=(r=WS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Ci(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebase-heartbeat-database",QS=1,io="firebase-heartbeat-store";let ic=null;function pv(){return ic||(ic=dS(GS,QS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(io)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),ic}async function YS(t){try{const n=(await pv()).transaction(io),r=await n.objectStore(io).get(mv(t));return await n.done,r}catch(e){if(e instanceof In)_n.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Vm(t,e){try{const r=(await pv()).transaction(io,"readwrite");await r.objectStore(io).put(e,mv(t)),await r.done}catch(n){if(n instanceof In)_n.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function mv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=1024,JS=30*24*60*60*1e3;class ZS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Om();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=JS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Om(),{heartbeatsToSend:r,unsentEntries:i}=eA(this._heartbeatsCache.heartbeats),s=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _n.warn(n),""}}}function Om(){return new Date().toISOString().substring(0,10)}function eA(t,e=XS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BI()?zI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lm(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t){Ci(new xr("platform-logger",e=>new mS(e),"PRIVATE")),Ci(new xr("heartbeat",e=>new ZS(e),"PRIVATE")),Xn(oh,Nm,t),Xn(oh,Nm,"esm2017"),Xn("fire-js","")}nA("");var rA="firebase",iA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(rA,iA,"app");function Rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function gv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sA=gv,yv=new Eo("auth","Firebase",gv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Id("@firebase/auth");function oA(t,...e){fl.logLevel<=ee.WARN&&fl.warn(`Auth (${ji}): ${t}`,...e)}function Na(t,...e){fl.logLevel<=ee.ERROR&&fl.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw Cd(t,...e)}function qt(t,...e){return Cd(t,...e)}function _v(t,e,n){const r=Object.assign(Object.assign({},sA()),{[e]:n});return new Eo("auth","Firebase",r).create(e,{appName:t.name})}function dn(t){return _v(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yv.create(t,...e)}function H(t,e,...n){if(!t)throw Cd(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function vn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aA(){return bm()==="http:"||bm()==="https:"}function bm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aA()||MI()||"connection"in navigator)?navigator.onLine:!0}function uA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=OI()||FI()}get(){return lA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Io(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,i={}){return wv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=To(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return bI()||(h.referrerPolicy="no-referrer"),vv.fetch()(Ev(t,t.config.apiHost,n,l),h)})}async function wv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cA),e);try{const i=new fA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _v(t,f,h);Mt(t,f)}}catch(i){if(i instanceof In)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function So(t,e,n,r,i={}){const s=await Sn(t,e,n,r,i);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ev(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pd(t.config,i):`${t.config.apiScheme}://${i}`}function dA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),hA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qt(t,e,r);return i.customData._tokenResponse=n,i}function Mm(t){return t!==void 0&&t.enterprise!==void 0}class pA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mA(t,e){return Sn(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function Tv(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yA(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=kd(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ls(sc(i.auth_time)),issuedAtTime:Ls(sc(i.iat)),expirationTime:Ls(sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const i=ov(n);return i?JSON.parse(i):(Na("Failed to decode base64 JWT payload"),null)}catch(i){return Na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fm(t){const e=kd(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&_A(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _A({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Pi(t,Tv(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Iv(s.providerUserInfo):[],l=EA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ch(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function wA(t){const e=ze(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Iv(t){return t.map(e=>{var{providerId:n}=e,r=Rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){const n=await wv(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ev(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",vv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IA(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Fm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gi;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ch(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yA(this,e)}reload(){return wA(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await Pi(this,gA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:U,providerData:F,stsTokenManager:v}=n;H(S&&v,e,"internal-error");const y=gi.fromJSON(this.name,v);H(typeof S=="string",e,"internal-error"),kn(m,e.name),kn(g,e.name),H(typeof V=="boolean",e,"internal-error"),H(typeof U=="boolean",e,"internal-error"),kn(I,e.name),kn(x,e.name),kn(N,e.name),kn(L,e.name),kn(A,e.name),kn(_,e.name);const w=new un({uid:S,auth:e,email:g,emailVerified:V,displayName:m,isAnonymous:U,photoURL:x,phoneNumber:I,tenantId:N,stsTokenManager:y,createdAt:A,lastLoginAt:_});return F&&Array.isArray(F)&&(w.providerData=F.map(E=>Object.assign({},E))),L&&(w._redirectEventId=L),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new gi;i.updateFromServerResponse(n);const s=new un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Iv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new gi;l.updateFromIdToken(r);const u=new un({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ch(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Map;function cn(t){vn(t instanceof Function,"Expected a class definition");let e=Um.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Um.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sv.type="NONE";const jm=Sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t,e,n){return`firebase:${t}:${e}:${n}`}class yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Da(this.userKey,i.apiKey,s),this.fullPersistenceKey=Da("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yi(cn(jm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||cn(jm);const o=Da(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=un._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new yi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new yi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Av(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xv(e))return"Blackberry";if(Nv(e))return"Webos";if(Rv(e))return"Safari";if((e.includes("chrome/")||Cv(e))&&!e.includes("edge/"))return"Chrome";if(kv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Av(t=et()){return/firefox\//i.test(t)}function Rv(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cv(t=et()){return/crios\//i.test(t)}function Pv(t=et()){return/iemobile/i.test(t)}function kv(t=et()){return/android/i.test(t)}function xv(t=et()){return/blackberry/i.test(t)}function Nv(t=et()){return/webos/i.test(t)}function xd(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SA(t=et()){var e;return xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AA(){return UI()&&document.documentMode===10}function Dv(t=et()){return xd(t)||kv(t)||Nv(t)||xv(t)||/windows phone/i.test(t)||Pv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t,e=[]){let n;switch(t){case"Browser":n=Bm(et());break;case"Worker":n=`${Bm(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=6;class kA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:PA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new RA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tv(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(dn(this));const n=e?ze(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CA(this),n=new kA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(t){return ze(t)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=KI(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NA(t){Wl=t}function Ov(t){return Wl.loadJS(t)}function DA(){return Wl.recaptchaEnterpriseScript}function VA(){return Wl.gapiScript}function OA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LA="recaptcha-enterprise",bA="NO_RECAPTCHA";class MA{constructor(e){this.type=LA,this.auth=Fr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{mA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new pA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Mm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(bA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Mm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DA();u.length!==0&&(u+=l),Ov(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function $m(t,e,n,r=!1){const i=new MA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $m(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $m(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){const n=Ad(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hl(s,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function UA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jA(t,e,n){const r=Fr(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Lv(e),{host:o,port:l}=BA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zA()}function Lv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BA(t){const e=Lv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wm(o)}}}function Wm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function $A(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e){return So(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function HA(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Nd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hh(e,n,"signInWithPassword",WA);case"emailLink":return qA(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hh(e,r,"signUpPassword",$A);case"emailLink":return HA(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return So(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="http://localhost";class Nr extends Nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Nr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QA(t){const e=ws(Es(t)).link,n=e?ws(Es(e)).deep_link_id:null,r=ws(Es(t)).deep_link_id;return(r?ws(Es(r)).link:null)||r||n||e||t}class Dd{constructor(e){var n,r,i,s,o,l;const u=ws(Es(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=GA((i=u.mode)!==null&&i!==void 0?i:null);H(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=QA(e);try{return new Dd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dd.parseLink(n);return H(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends bv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ao{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ao{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ao{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){return So(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await un._fromIdTokenResponse(e,r,i),o=qm(r);return new Dr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qm(r);return new Dr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends In{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ml(e,n,r,i)}}function Mv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,s,e,r):s})}async function XA(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(dn(r));const i="reauthenticate";try{const s=await Pi(t,Mv(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=kd(s.idToken);H(o,r,"internal-error");const{sub:l}=o;return H(t.uid===l,r,"user-mismatch"),Dr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(t,e,n=!1){if(zt(t.app))return Promise.reject(dn(t));const r="signIn",i=await Mv(t,r,e),s=await Dr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ZA(t,e){return Fv(Fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eR(t,e,n){if(zt(t.app))return Promise.reject(dn(t));const r=Fr(t),o=await hh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Uv(t),u}),l=await Dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function tR(t,e,n){return zt(t.app)?Promise.reject(dn(t)):ZA(ze(t),Bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uv(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ze(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Pi(r,nR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iR(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function sR(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function oR(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function aR(t){return ze(t).signOut()}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=1e3,uR=10;class Bv extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bv.type="LOCAL";const cR=Bv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zv.type="SESSION";const $v=zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await hR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Vd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function fR(t){Ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function pR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gR(){return Wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="firebaseLocalStorageDb",yR=1,yl="firebaseLocalStorage",Hv="fbase_key";class Ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function _R(){const t=indexedDB.deleteDatabase(qv);return new Ro(t).toPromise()}function dh(){const t=indexedDB.open(qv,yR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:Hv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await _R(),e(await dh()))})})}async function Hm(t,e,n){const r=Hl(t,!0).put({[Hv]:e,value:n});return new Ro(r).toPromise()}async function vR(t,e){const n=Hl(t,!1).get(e),r=await new Ro(n).toPromise();return r===void 0?null:r.value}function Km(t,e){const n=Hl(t,!0).delete(e);return new Ro(n).toPromise()}const wR=800,ER=3;class Kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ER)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(gR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pR(),!this.activeServiceWorker)return;this.sender=new dR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dh();return await Hm(e,gl,"1"),await Km(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Km(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hl(i,!1).getAll();return new Ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kv.type="LOCAL";const TR=Kv;new Io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e){return e?cn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends Nd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SR(t){return Fv(t.auth,new Od(t),t.bypassAuthState)}function AR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),JA(n,new Od(t),t.bypassAuthState)}async function RR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),XA(n,new Od(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SR;case"linkViaPopup":case"linkViaRedirect":return RR;case"reauthViaPopup":case"reauthViaRedirect":return AR;default:Mt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new Io(2e3,1e4);class ui extends Gv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CR.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="pendingRedirect",Va=new Map;class kR extends Gv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await xR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xR(t,e){const n=VR(e),r=DR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NR(t,e){Va.set(t._key(),e)}function DR(t){return cn(t._redirectPersistence)}function VR(t){return Da(PR,t.config.apiKey,t.name)}async function OR(t,e,n=!1){if(zt(t.app))return Promise.reject(dn(t));const r=Fr(t),i=IR(r,e),o=await new kR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=10*60*1e3;class bR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gm(e))}saveEventToCache(e){this.cachedEventUids.add(Gm(e)),this.lastProcessedEventTime=Date.now()}}function Gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function BR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FR(t);for(const n of e)try{if(zR(n))return}catch{}Mt(t,"unauthorized-domain")}function zR(t){const e=uh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jR.test(n))return!1;if(UR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new Io(3e4,6e4);function Qm(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WR(t){return new Promise((e,n)=>{var r,i,s;function o(){Qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qm(),n(qt(t,"network-request-failed"))},timeout:$R.get()})}if(!((i=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ht().gapi)===null||s===void 0)&&s.load)o();else{const l=OA("iframefcb");return Ht()[l]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},Ov(`${VA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function qR(t){return Oa=Oa||WR(t),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new Io(5e3,15e3),KR="__/auth/iframe",GR="emulator/auth/iframe",QR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XR(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pd(e,GR):`https://${t.config.authDomain}/${KR}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=YR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${To(r).slice(1)}`}async function JR(t){const e=await qR(t),n=Ht().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:XR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),l=Ht().setTimeout(()=>{s(o)},HR.get());function u(){Ht().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eC=500,tC=600,nC="_blank",rC="http://localhost";class Ym{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iC(t,e,n,r=eC,i=tC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},ZR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=et().toLowerCase();n&&(l=Cv(h)?nC:n),Av(h)&&(e=e||rC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,x])=>`${g}${I}=${x},`,"");if(SA(h)&&l!=="_self")return sC(e||"",l),new Ym(null);const m=window.open(e||"",l,f);H(m,t,"popup-blocked");try{m.focus()}catch{}return new Ym(m)}function sC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="__/auth/handler",aC="emulator/auth/handler",lC=encodeURIComponent("fac");async function Xm(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof bv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ao){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${lC}=${encodeURIComponent(u)}`:"";return`${uC(t)}?${To(l).slice(1)}${h}`}function uC({config:t}){return t.emulator?Pd(t,aC):`https://${t.authDomain}/${oC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class cC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$v,this._completeRedirectFn=OR,this._overrideRedirectResult=NR}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xm(e,n,r,uh(),i);return iC(e,o,Vd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xm(e,n,r,uh(),i);return fR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JR(e),r=new bR(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dv()||Rv()||xd()}}const hC=cC;var Jm="@firebase/auth",Zm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pC(t){Ci(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(t)},h=new xA(r,i,s,u);return UA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ci(new xr("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(r=>new dC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Jm,Zm,fC(t)),Xn(Jm,Zm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=5*60,gC=uv("authIdTokenMaxAge")||mC;let eg=null;const yC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gC)return;const i=n==null?void 0:n.token;eg!==i&&(eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _C(t=fv()){const e=Ad(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FA(t,{popupRedirectResolver:hC,persistence:[TR,cR,$v]}),r=uv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yC(s.toString());sR(n,o,()=>o(n.currentUser)),iR(n,l=>o(l))}}const i=av("auth");return i&&jA(n,`http://${i}`),n}function vC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pC("Browser");var tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,Yv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function w(){}w.prototype=y.prototype,v.D=y.prototype,v.prototype=new w,v.prototype.constructor=v,v.C=function(E,C,k){for(var T=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)T[wt-2]=arguments[wt];return y.prototype[C].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,w){w||(w=0);var E=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)E[C]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(C=0;16>C;++C)E[C]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=v.g[0],w=v.g[1],C=v.g[2];var k=v.g[3],T=y+(k^w&(C^k))+E[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=k+(C^y&(w^C))+E[1]+3905402710&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(w^k&(y^w))+E[2]+606105819&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(y^C&(k^y))+E[3]+3250441966&4294967295,w=C+(T<<22&4294967295|T>>>10),T=y+(k^w&(C^k))+E[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(C^y&(w^C))+E[5]+1200080426&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(w^k&(y^w))+E[6]+2821735955&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(y^C&(k^y))+E[7]+4249261313&4294967295,w=C+(T<<22&4294967295|T>>>10),T=y+(k^w&(C^k))+E[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(C^y&(w^C))+E[9]+2336552879&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(w^k&(y^w))+E[10]+4294925233&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(y^C&(k^y))+E[11]+2304563134&4294967295,w=C+(T<<22&4294967295|T>>>10),T=y+(k^w&(C^k))+E[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(C^y&(w^C))+E[13]+4254626195&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(w^k&(y^w))+E[14]+2792965006&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(y^C&(k^y))+E[15]+1236535329&4294967295,w=C+(T<<22&4294967295|T>>>10),T=y+(C^k&(w^C))+E[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(y^w))+E[6]+3225465664&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^w&(k^y))+E[11]+643717713&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(C^k))+E[0]+3921069994&4294967295,w=C+(T<<20&4294967295|T>>>12),T=y+(C^k&(w^C))+E[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(y^w))+E[10]+38016083&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^w&(k^y))+E[15]+3634488961&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(C^k))+E[4]+3889429448&4294967295,w=C+(T<<20&4294967295|T>>>12),T=y+(C^k&(w^C))+E[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(y^w))+E[14]+3275163606&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^w&(k^y))+E[3]+4107603335&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(C^k))+E[8]+1163531501&4294967295,w=C+(T<<20&4294967295|T>>>12),T=y+(C^k&(w^C))+E[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(y^w))+E[2]+4243563512&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^w&(k^y))+E[7]+1735328473&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(C^k))+E[12]+2368359562&4294967295,w=C+(T<<20&4294967295|T>>>12),T=y+(w^C^k)+E[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^C)+E[8]+2272392833&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^w)+E[11]+1839030562&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^y)+E[14]+4259657740&4294967295,w=C+(T<<23&4294967295|T>>>9),T=y+(w^C^k)+E[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^C)+E[4]+1272893353&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^w)+E[7]+4139469664&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^y)+E[10]+3200236656&4294967295,w=C+(T<<23&4294967295|T>>>9),T=y+(w^C^k)+E[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^C)+E[0]+3936430074&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^w)+E[3]+3572445317&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^y)+E[6]+76029189&4294967295,w=C+(T<<23&4294967295|T>>>9),T=y+(w^C^k)+E[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^C)+E[12]+3873151461&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^w)+E[15]+530742520&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^y)+E[2]+3299628645&4294967295,w=C+(T<<23&4294967295|T>>>9),T=y+(C^(w|~k))+E[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~C))+E[7]+1126891415&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~w))+E[14]+2878612391&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~y))+E[5]+4237533241&4294967295,w=C+(T<<21&4294967295|T>>>11),T=y+(C^(w|~k))+E[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~C))+E[3]+2399980690&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~w))+E[10]+4293915773&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~y))+E[1]+2240044497&4294967295,w=C+(T<<21&4294967295|T>>>11),T=y+(C^(w|~k))+E[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~C))+E[15]+4264355552&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~w))+E[6]+2734768916&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~y))+E[13]+1309151649&4294967295,w=C+(T<<21&4294967295|T>>>11),T=y+(C^(w|~k))+E[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~C))+E[11]+3174756917&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~w))+E[2]+718787259&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~y))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var w=y-this.blockSize,E=this.B,C=this.h,k=0;k<y;){if(C==0)for(;k<=w;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<y;)if(E[C++]=v.charCodeAt(k++),C==this.blockSize){i(this,E),C=0;break}}else for(;k<y;)if(E[C++]=v[k++],C==this.blockSize){i(this,E),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var w=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=w&255,w/=256;for(this.u(v),v=Array(16),y=w=0;4>y;++y)for(var E=0;32>E;E+=8)v[w++]=this.g[y]>>>E&255;return v};function s(v,y){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=y(v)}function o(v,y){this.h=y;for(var w=[],E=!0,C=v.length-1;0<=C;C--){var k=v[C]|0;E&&k==y||(w[C]=k,E=!1)}this.g=w}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return L(h(-v));for(var y=[],w=1,E=0;v>=w;E++)y[E]=v/w|0,w*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return L(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),E=m,C=0;C<v.length;C+=8){var k=Math.min(8,v.length-C),T=parseInt(v.substring(C,C+k),y);8>k?(k=h(Math.pow(y,k)),E=E.j(k).add(h(T))):(E=E.j(w),E=E.add(h(T)))}return E}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-L(this).m();for(var v=0,y=1,w=0;w<this.g.length;w++){var E=this.i(w);v+=(0<=E?E:4294967296+E)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(N(this))return"-"+L(this).toString(v);for(var y=h(Math.pow(v,6)),w=this,E="";;){var C=V(w,y).g;w=A(w,C.j(y));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(v);if(w=C,x(w))return k+E;for(;6>k.length;)k="0"+k;E=k+E}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=A(this,v),N(v)?-1:x(v)?0:1};function L(v){for(var y=v.g.length,w=[],E=0;E<y;E++)w[E]=~v.g[E];return new o(w,~v.h).add(g)}t.abs=function(){return N(this)?L(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],E=0,C=0;C<=y;C++){var k=E+(this.i(C)&65535)+(v.i(C)&65535),T=(k>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);E=T>>>16,k&=65535,T&=65535,w[C]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function A(v,y){return v.add(L(y))}t.j=function(v){if(x(this)||x(v))return m;if(N(this))return N(v)?L(this).j(L(v)):L(L(this).j(v));if(N(v))return L(this.j(L(v)));if(0>this.l(I)&&0>v.l(I))return h(this.m()*v.m());for(var y=this.g.length+v.g.length,w=[],E=0;E<2*y;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<v.g.length;C++){var k=this.i(E)>>>16,T=this.i(E)&65535,wt=v.i(C)>>>16,cr=v.i(C)&65535;w[2*E+2*C]+=T*cr,_(w,2*E+2*C),w[2*E+2*C+1]+=k*cr,_(w,2*E+2*C+1),w[2*E+2*C+1]+=T*wt,_(w,2*E+2*C+1),w[2*E+2*C+2]+=k*wt,_(w,2*E+2*C+2)}for(E=0;E<y;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=y;E<2*y;E++)w[E]=0;return new o(w,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function S(v,y){this.g=v,this.h=y}function V(v,y){if(x(y))throw Error("division by zero");if(x(v))return new S(m,m);if(N(v))return y=V(L(v),y),new S(L(y.g),L(y.h));if(N(y))return y=V(v,L(y)),new S(L(y.g),y.h);if(30<v.g.length){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,E=y;0>=E.l(v);)w=U(w),E=U(E);var C=F(w,1),k=F(E,1);for(E=F(E,2),w=F(w,2);!x(E);){var T=k.add(E);0>=T.l(v)&&(C=C.add(w),k=T),E=F(E,1),w=F(w,1)}return y=A(v,C.j(y)),new S(C,y)}for(C=m;0<=v.l(y);){for(w=Math.max(1,Math.floor(v.m()/y.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),k=h(w),T=k.j(y);N(T)||0<T.l(v);)w-=E,k=h(w),T=k.j(y);x(k)&&(k=g),C=C.add(k),v=A(v,T)}return new S(C,v)}t.A=function(v){return V(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],E=0;E<y;E++)w[E]=this.i(E)&v.i(E);return new o(w,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],E=0;E<y;E++)w[E]=this.i(E)|v.i(E);return new o(w,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],E=0;E<y;E++)w[E]=this.i(E)^v.i(E);return new o(w,this.h^v.h)};function U(v){for(var y=v.g.length+1,w=[],E=0;E<y;E++)w[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(w,v.h)}function F(v,y){var w=y>>5;y%=32;for(var E=v.g.length-w,C=[],k=0;k<E;k++)C[k]=0<y?v.i(k+w)>>>y|v.i(k+w+1)<<32-y:v.i(k+w);return new o(C,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Yv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Sr=o}).apply(typeof tg<"u"?tg:typeof self<"u"?self:typeof window<"u"?window:{});var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xv,Ts,Jv,La,fh,Zv,e0,t0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ma=="object"&&ma];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in d))break e;d=d[P]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,P={next:function(){if(!p&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function I(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,P,D){for(var j=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)j[ue-2]=arguments[ue];return c.prototype[P].apply(p,j)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=a.length||0,D=p.length||0;a.length=P+D;for(let j=0;j<D;j++)a[P+j]=p[j]}else a.push(p)}}class A{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)a[d]=p[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class wt{constructor(){this.h=this.g=null}add(c,d){const p=cr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var cr=new A(()=>new Ki,a=>a.reset());class Ki{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Yt,B=!1,G=new wt,X=()=>{const a=l.Promise.resolve(void 0);Yt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=cr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Jt(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{V(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Zt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}x(Jt,Ie);var Zt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),Ew=0;function Tw(a,c,d,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++Ew,this.da=this.fa=!1}function Vo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Oo(a){this.src=a,this.g={},this.h=0}Oo.prototype.add=function(a,c,d,p,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var j=ou(a,c,p,P);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new Tw(c,this.src,D,!!p,P),c.fa=d,a.push(c)),c};function su(a,c){var d=c.type;if(d in a.g){var p=a.g[d],P=Array.prototype.indexOf.call(p,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(p,P,1),D&&(Vo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ou(a,c,d,p){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==p)return P}return-1}var au="closure_lm_"+(1e6*Math.random()|0),lu={};function _f(a,c,d,p,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)_f(a,c[D],d,p,P);return null}return d=Ef(d),a&&a[en]?a.K(c,d,h(p)?!!p.capture:!1,P):Iw(a,c,d,!1,p,P)}function Iw(a,c,d,p,P,D){if(!c)throw Error("Invalid event type");var j=h(P)?!!P.capture:!!P,ue=cu(a);if(ue||(a[au]=ue=new Oo(a)),d=ue.add(c,d,p,j,D),d.proxy)return d;if(p=Sw(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Xt||(P=j),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(wf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Sw(){function a(d){return c.call(a.src,a.listener,d)}const c=Aw;return a}function vf(a,c,d,p,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)vf(a,c[D],d,p,P);else p=h(p)?!!p.capture:!!p,d=Ef(d),a&&a[en]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=ou(D,d,p,P),-1<d&&(Vo(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=cu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ou(c,d,p,P)),(d=-1<a?c[a]:null)&&uu(d))}function uu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[en])su(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(wf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=cu(c))?(su(d,a),d.h==0&&(d.src=null,c[au]=null)):Vo(a)}}}function wf(a){return a in lu?lu[a]:lu[a]="on"+a}function Aw(a,c){if(a.da)a=!0;else{c=new Jt(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&uu(a),a=d.call(p,c)}return a}function cu(a){return a=a[au],a instanceof Oo?a:null}var hu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ef(a){return typeof a=="function"?a:(a[hu]||(a[hu]=function(c){return a.handleEvent(c)}),a[hu])}function We(){le.call(this),this.i=new Oo(this),this.M=this,this.F=null}x(We,le),We.prototype[en]=!0,We.prototype.removeEventListener=function(a,c,d,p){vf(this,a,c,d,p)};function tt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var P=c;c=new Ie(p,a),E(c,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var j=c.g=d[D];P=Lo(j,p,!0,c)&&P}if(j=c.g=a,P=Lo(j,p,!0,c)&&P,P=Lo(j,p,!1,c)&&P,d)for(D=0;D<d.length;D++)j=c.g=d[D],P=Lo(j,p,!1,c)&&P}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Vo(d[p]);delete a.g[c],a.h--}}this.F=null},We.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},We.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Lo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var j=c[D];if(j&&!j.da&&j.capture==d){var ue=j.listener,Le=j.ha||j.src;j.fa&&su(a.i,j),P=ue.call(Le,p)!==!1&&P}}return P&&!p.defaultPrevented}function Tf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function If(a){a.g=Tf(()=>{a.g=null,a.i&&(a.i=!1,If(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Rw extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:If(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(a){le.call(this),this.h=a,this.g={}}x(Gi,le);var Sf=[];function Af(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&uu(c)},a),a.g={}}Gi.prototype.N=function(){Gi.aa.N.call(this),Af(this)},Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var du=l.JSON.stringify,Cw=l.JSON.parse,Pw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function fu(){}fu.prototype.h=null;function Rf(a){return a.h||(a.h=a.i())}function Cf(){}var Qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pu(){Ie.call(this,"d")}x(pu,Ie);function mu(){Ie.call(this,"c")}x(mu,Ie);var hr={},Pf=null;function bo(){return Pf=Pf||new We}hr.La="serverreachability";function kf(a){Ie.call(this,hr.La,a)}x(kf,Ie);function Yi(a){const c=bo();tt(c,new kf(c))}hr.STAT_EVENT="statevent";function xf(a,c){Ie.call(this,hr.STAT_EVENT,a),this.stat=c}x(xf,Ie);function nt(a){const c=bo();tt(c,new xf(c,a))}hr.Ma="timingevent";function Nf(a,c){Ie.call(this,hr.Ma,a),this.size=c}x(Nf,Ie);function Xi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function kw(a,c,d,p,P,D){a.info(function(){if(a.g)if(D)for(var j="",ue=D.split("&"),Le=0;Le<ue.length;Le++){var re=ue[Le].split("=");if(1<re.length){var qe=re[0];re=re[1];var He=qe.split("_");j=2<=He.length&&He[1]=="type"?j+(qe+"="+re+"&"):j+(qe+"=redacted&")}}else j=null;else j=D;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+j})}function xw(a,c,d,p,P,D,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+D+" "+j})}function zr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Dw(a,d)+(p?" "+p:"")})}function Nw(a,c){a.info(function(){return"TIMEOUT: "+c})}Ji.prototype.info=function(){};function Dw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var j=1;j<P.length;j++)P[j]=""}}}}return du(d)}catch{return c}}var Mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Df={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gu;function Fo(){}x(Fo,fu),Fo.prototype.g=function(){return new XMLHttpRequest},Fo.prototype.i=function(){return{}},gu=new Fo;function An(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vf}function Vf(){this.i=null,this.g="",this.h=!1}var Of={},yu={};function _u(a,c,d){a.L=1,a.v=zo(tn(c)),a.m=d,a.P=!0,Lf(a,null)}function Lf(a,c){a.F=Date.now(),Uo(a),a.A=tn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Qf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Vf,a.g=fp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Rw(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Sf[0]=P.toString()),P=Sf);for(var D=0;D<P.length;D++){var j=_f(d,P[D],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Yi(),kw(a.i,a.u,a.A,a.l,a.R,a.m)}An.prototype.ca=function(a){a=a.target;const c=this.M;c&&nn(a)==3?c.j():this.Y(a)},An.prototype.Y=function(a){try{if(a==this.g)e:{const He=nn(this.g);var c=this.g.Ba();const qr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||np(this.g)))){this.J||He!=4||c==7||(c==8||0>=qr?Yi(3):Yi(2)),vu(this);var d=this.g.Z();this.X=d;t:if(bf(this)){var p=np(this.g);a="";var P=p.length,D=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),Zi(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(D&&c==P-1)});p.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,xw(this.i,this.u,this.A,this.l,this.R,He,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Le=this.g;if((ue=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var re=ue;break t}}re=null}if(d=re)zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wu(this,d);else{this.o=!1,this.s=3,nt(12),dr(this),Zi(this);break e}}if(this.P){d=!0;let Pt;for(;!this.J&&this.C<j.length;)if(Pt=Vw(this,j),Pt==yu){He==4&&(this.s=4,nt(14),d=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Of){this.s=4,nt(15),zr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else zr(this.i,this.l,Pt,null),wu(this,Pt);if(bf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||j.length!=0||this.h.h||(this.s=1,nt(16),d=!1),this.o=this.o&&d,!d)zr(this.i,this.l,j,"[Invalid Chunked Response]"),dr(this),Zi(this);else if(0<j.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ru(qe),qe.M=!0,nt(11))}}else zr(this.i,this.l,j,null),wu(this,j);He==4&&dr(this),this.o&&!this.J&&(He==4?up(this.j,this):(this.o=!1,Uo(this)))}else Yw(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),dr(this),Zi(this)}}}catch{}finally{}};function bf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Vw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?yu:(d=Number(c.substring(d,p)),isNaN(d)?Of:(p+=1,p+d>c.length?yu:(c=c.slice(p,p+d),a.C=p+d,c)))}An.prototype.cancel=function(){this.J=!0,dr(this)};function Uo(a){a.S=Date.now()+a.I,Mf(a,a.I)}function Mf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xi(g(a.ba,a),c)}function vu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}An.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Nw(this.i,this.A),this.L!=2&&(Yi(),nt(17)),dr(this),this.s=2,Zi(this)):Mf(this,this.S-a)};function Zi(a){a.j.G==0||a.J||up(a.j,a)}function dr(a){vu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Af(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function wu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Eu(d.h,a))){if(!a.K&&Eu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Go(d),Ho(d);else break e;Au(d),nt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Xi(g(d.Za,d),6e3));if(1>=jf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((a.K||d.g==a)&&Go(d),!_(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let re=P[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const qe=re[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const He=re[4];He!=null&&(d.Aa=He,d.j.info("SVER="+d.Aa));const qr=re[5];qr!=null&&typeof qr=="number"&&0<qr&&(p=1.5*qr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Pt=a.g;if(Pt){const Yo=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yo){var D=p.h;D.g||Yo.indexOf("spdy")==-1&&Yo.indexOf("quic")==-1&&Yo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Tu(D,D.h),D.h=null))}if(p.D){const Cu=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Cu&&(p.ya=Cu,he(p.I,p.D,Cu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=a;if(p.qa=dp(p,p.J?p.ia:null,p.W),j.K){Bf(p.h,j);var ue=j,Le=p.L;Le&&(ue.I=Le),ue.B&&(vu(ue),Uo(ue)),p.g=j}else ap(p);0<d.i.length&&Ko(d)}else re[0]!="stop"&&re[0]!="close"||pr(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?pr(d,7):Su(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Yi(4)}catch{}}var Ow=class{constructor(a,c){this.g=a,this.map=c}};function Ff(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jf(a){return a.h?1:a.g?a.g.size:0}function Eu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Tu(a,c){a.g?a.g.add(c):a.h=c}function Bf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ff.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function Lw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function bw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function $f(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=bw(a),p=Lw(a),P=p.length,D=0;D<P;D++)c.call(void 0,p[D],d&&d[D],a)}var Wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),P=null;if(0<=p){var D=a[d].substring(0,p);P=a[d].substring(p+1)}else D=a[d];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof fr){this.h=a.h,jo(this,a.j),this.o=a.o,this.g=a.g,Bo(this,a.s),this.l=a.l;var c=a.i,d=new ns;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),qf(this,d),this.m=a.m}else a&&(c=String(a).match(Wf))?(this.h=!1,jo(this,c[1]||"",!0),this.o=es(c[2]||""),this.g=es(c[3]||"",!0),Bo(this,c[4]),this.l=es(c[5]||"",!0),qf(this,c[6]||"",!0),this.m=es(c[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}fr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ts(c,Hf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ts(c,Hf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ts(d,d.charAt(0)=="/"?jw:Uw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ts(d,zw)),a.join("")};function tn(a){return new fr(a)}function jo(a,c,d){a.j=d?es(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Bo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function qf(a,c,d){c instanceof ns?(a.i=c,$w(a.i,a.h)):(d||(c=ts(c,Bw)),a.i=new ns(c,a.h))}function he(a,c,d){a.i.set(c,d)}function zo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function es(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ts(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Fw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hf=/[#\/\?@]/g,Uw=/[#\?:]/g,jw=/[#\?]/g,Bw=/[#\?@]/g,zw=/#/g;function ns(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Rn(a){a.g||(a.g=new Map,a.h=0,a.i&&Mw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ns.prototype,t.add=function(a,c){Rn(this),this.i=null,a=$r(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Kf(a,c){Rn(a),c=$r(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Gf(a,c){return Rn(a),c=$r(a,c),a.g.has(c)}t.forEach=function(a,c){Rn(this),this.g.forEach(function(d,p){d.forEach(function(P){a.call(c,P,p,this)},this)},this)},t.na=function(){Rn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=a[p];for(let D=0;D<P.length;D++)d.push(c[p])}return d},t.V=function(a){Rn(this);let c=[];if(typeof a=="string")Gf(this,a)&&(c=c.concat(this.g.get($r(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Rn(this),this.i=null,a=$r(this,a),Gf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Qf(a,c,d){Kf(a,c),0<d.length&&(a.i=null,a.g.set($r(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const D=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var P=D;j[p]!==""&&(P+="="+encodeURIComponent(String(j[p]))),a.push(P)}}return this.i=a.join("&")};function $r(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function $w(a,c){c&&!a.j&&(Rn(a),a.i=null,a.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(Kf(this,p),Qf(this,P,d))},a)),a.j=c}function Ww(a,c){const d=new Ji;if(l.Image){const p=new Image;p.onload=I(Cn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=I(Cn,d,"TestLoadImage: error",!1,c,p),p.onabort=I(Cn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(Cn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function qw(a,c){const d=new Ji,p=new AbortController,P=setTimeout(()=>{p.abort(),Cn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(D=>{clearTimeout(P),D.ok?Cn(d,"TestPingServer: ok",!0,c):Cn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Cn(d,"TestPingServer: error",!1,c)})}function Cn(a,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function Hw(){this.g=new Pw}function Kw(a,c,d){const p=d||"";try{$f(a,function(P,D){let j=P;h(P)&&(j=du(P)),c.push(p+D+"="+encodeURIComponent(j))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function $o(a){this.l=a.Ub||null,this.j=a.eb||!1}x($o,fu),$o.prototype.g=function(){return new Wo(this.l,this.j)},$o.prototype.i=function(a){return function(){return a}}({});function Wo(a,c){We.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Wo,We),t=Wo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,is(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?rs(this):is(this),this.readyState==3&&Yf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,rs(this))},t.Qa=function(a){this.g&&(this.response=a,rs(this))},t.ga=function(){this.g&&rs(this)};function rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,is(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function is(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xf(a){let c="";return F(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Iu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Xf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Ee(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ee,We);var Gw=/^https?$/i,Qw=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gu.g(),this.v=this.o?Rf(this.o):Rf(gu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Jf(this,D);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Qw,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Jf(this,D)}};function Jf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Zf(a),qo(a)}function Zf(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,tt(this,"complete"),tt(this,"abort"),qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qo(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ep(this):this.bb())},t.bb=function(){ep(this)};function ep(a){if(a.h&&typeof o<"u"&&(!a.v[1]||nn(a)!=4||a.Z()!=2)){if(a.u&&nn(a)==4)Tf(a.Ea,0,a);else if(tt(a,"readystatechange"),nn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var P=String(a.D).match(Wf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!Gw.test(P?P.toLowerCase():"")}d=p}if(d)tt(a,"complete"),tt(a,"success");else{a.m=6;try{var D=2<nn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Zf(a)}}finally{qo(a)}}}}function qo(a,c){if(a.g){tp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||tt(a,"ready");try{d.onreadystatechange=p}catch{}}}function tp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Cw(c)}};function np(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yw(a){const c={};a=(a.g&&2<=nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=C(a[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[P]||[];c[P]=D,D.push(d)}v(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ss(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function rp(a){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ss("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ss("baseRetryDelayMs",5e3,a),this.cb=ss("retryDelaySeedMs",1e4,a),this.Wa=ss("forwardChannelMaxRetries",2,a),this.wa=ss("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ff(a&&a.concurrentRequestLimit),this.Da=new Hw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){nt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=dp(this,null,this.W),Ko(this)};function Su(a){if(ip(a),a.G==3){var c=a.U++,d=tn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),os(a,d),c=new An(a,a.j,c),c.L=2,c.v=zo(tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=fp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Uo(c)}hp(a)}function Ho(a){a.g&&(Ru(a),a.g.cancel(),a.g=null)}function ip(a){Ho(a),a.u&&(l.clearTimeout(a.u),a.u=null),Go(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ko(a){if(!Uf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Yt||X(),B||(Yt(),B=!0),G.add(c,a),a.B=0}}function Xw(a,c){return jf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xi(g(a.Ga,a,c),cp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new An(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=op(this,P,c),d=tn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),os(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Xf(D)))+"&"+c:this.m&&Iu(d,this.m,D)),Tu(this.h,P),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),P.T=!0,_u(P,d,null)):_u(P,d,c),this.G=2}}else this.G==3&&(a?sp(this,a):this.i.length==0||Uf(this.h)||sp(this))};function sp(a,c){var d;c?d=c.l:d=a.U++;const p=tn(a.I);he(p,"SID",a.K),he(p,"RID",d),he(p,"AID",a.T),os(a,p),a.m&&a.o&&Iu(p,a.m,a.o),d=new An(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=op(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Tu(a.h,d),_u(d,p,c)}function os(a,c){a.H&&F(a.H,function(d,p){he(c,p,d)}),a.l&&$f({},function(d,p){he(c,p,d)})}function op(a,c,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const j=["count="+d];D==-1?0<d?(D=P[0].g,j.push("ofs="+D)):D=0:j.push("ofs="+D);let ue=!0;for(let Le=0;Le<d;Le++){let re=P[Le].g;const qe=P[Le].map;if(re-=D,0>re)D=Math.max(0,P[Le].g-100),ue=!1;else try{Kw(qe,j,"req"+re+"_")}catch{p&&p(qe)}}if(ue){p=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function ap(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Yt||X(),B||(Yt(),B=!0),G.add(c,a),a.v=0}}function Au(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xi(g(a.Fa,a),cp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,lp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Ho(this),lp(this))};function Ru(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function lp(a){a.g=new An(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=tn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),os(a,c),a.m&&a.o&&Iu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=zo(tn(c)),d.m=null,d.P=!0,Lf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ho(this),Au(this),nt(19))};function Go(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function up(a,c){var d=null;if(a.g==c){Go(a),Ru(a),a.g=null;var p=2}else if(Eu(a.h,c))d=c.D,Bf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;p=bo(),tt(p,new Nf(p,d)),Ko(a)}else ap(a);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&Xw(a,c)||p==2&&Au(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function cp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function pr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),p=a.Xa;const P=!p;p=new fr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jo(p,"https"),zo(p),P?Ww(p.toString(),d):qw(p.toString(),d)}else nt(2);a.G=0,a.l&&a.l.sa(c),hp(a),ip(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function hp(a){if(a.G=0,a.ka=[],a.l){const c=zf(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function dp(a,c,d){var p=d instanceof fr?tn(d):new fr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Bo(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new fr(null);p&&jo(D,p),c&&(D.g=c),P&&Bo(D,P),d&&(D.l=d),p=D}return d=a.D,c=a.ya,d&&c&&he(p,d,c),he(p,"VER",a.la),os(a,p),p}function fp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new $o({eb:d})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pp(){}t=pp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qo(){}Qo.prototype.g=function(a,c){return new ft(a,c)};function ft(a,c){We.call(this),this.g=new rp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Wr(this)}x(ft,We),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Su(this.g)},ft.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=du(a),a=d);c.i.push(new Ow(c.Ya++,a)),c.G==3&&Ko(c)},ft.prototype.N=function(){this.g.l=null,delete this.j,Su(this.g),delete this.g,ft.aa.N.call(this)};function mp(a){pu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(mp,pu);function gp(){mu.call(this),this.status=1}x(gp,mu);function Wr(a){this.g=a}x(Wr,pp),Wr.prototype.ua=function(){tt(this.g,"a")},Wr.prototype.ta=function(a){tt(this.g,new mp(a))},Wr.prototype.sa=function(a){tt(this.g,new gp)},Wr.prototype.ra=function(){tt(this.g,"b")},Qo.prototype.createWebChannel=Qo.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,t0=function(){return new Qo},e0=function(){return bo()},Zv=hr,fh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mo.NO_ERROR=0,Mo.TIMEOUT=8,Mo.HTTP_ERROR=6,La=Mo,Df.COMPLETE="complete",Jv=Df,Cf.EventType=Qi,Qi.OPEN="a",Qi.CLOSE="b",Qi.ERROR="c",Qi.MESSAGE="d",We.prototype.listen=We.prototype.K,Ts=Cf,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,Xv=Ee}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});const ng="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Id("@firebase/firestore");function ms(){return Vr.logLevel}function W(t,...e){if(Vr.logLevel<=ee.DEBUG){const n=e.map(Ld);Vr.debug(`Firestore (${zi}): ${t}`,...n)}}function wn(t,...e){if(Vr.logLevel<=ee.ERROR){const n=e.map(Ld);Vr.error(`Firestore (${zi}): ${t}`,...n)}}function ki(t,...e){if(Vr.logLevel<=ee.WARN){const n=e.map(Ld);Vr.warn(`Firestore (${zi}): ${t}`,...n)}}function Ld(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function ae(t,e){t||K()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class EC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new n0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Ye(e)}}class IC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new AC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ne(0,0))}static max(){return new Q(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends oo{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const PC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends oo{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return PC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}function kC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new rr(i,q.empty(),e)}function xC(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(Q.min(),q.empty(),-1)}static max(){return new rr(Q.max(),q.empty(),-1)}}function NC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==DC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function OC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bd.oe=-1;function Kl(t){return t==null}function _l(t){return t===0&&1/t==-1/0}function LC(t){return typeof t=="number"&&Number.isInteger(t)&&!_l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function i0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??Me.EMPTY,this.right=s??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ig(this.data.getIterator())}getIteratorFrom(e){return new ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new je(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new s0("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const bC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(ae(!!t),typeof t=="string"){let e=0;const n=bC.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fd(t){const e=t.mapValue.fields.__previous_value__;return Md(e)?Fd(e):e}function ao(t){const e=ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{}};function Lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Md(t)?4:UC(t)?9007199254740991:FC(t)?10:11:K()}function Qt(t,e){if(t===e)return!0;const n=Lr(t);if(n!==Lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ir(i.timestampValue),l=ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Or(i.bytesValue).isEqual(Or(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?_l(o)===_l(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(rg(o)!==rg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Qt(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function uo(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=Lr(t),r=Lr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return sg(t.timestampValue,e.timestampValue);case 4:return sg(ao(t),ao(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Or(s),u=Or(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Se(s.latitude),Se(o.latitude));return l!==0?l:ie(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return og(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},g=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=ie(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:og(I,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ya.mapValue&&o===ya.mapValue)return 0;if(s===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ie(u[m],f[m]);if(g!==0)return g;const I=Ni(l[u[m]],h[f[m]]);if(I!==0)return I}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function sg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=ir(t),r=ir(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function og(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ni(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Di(t){return ph(t)}function ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ph(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ph(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function ag(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mh(t){return!!t&&"integerValue"in t}function Ud(t){return!!t&&"arrayValue"in t}function lg(t){return!!t&&"nullValue"in t}function ug(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ba(t){return!!t&&"mapValue"in t}function FC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=bs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(bs(this.value))}}function o0(t){const e=[];return $i(t.fields,(n,r)=>{const i=new Fe([n]);if(ba(r)){const s=o0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,Q.min(),Q.min(),Q.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,Q.min(),Q.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Q.min(),Q.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.position=e,this.inclusive=n}}function cg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n="asc"){this.field=e,this.dir=n}}function jC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{}class Pe extends a0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zC(e,n,r):n==="array-contains"?new qC(e,r):n==="in"?new HC(e,r):n==="not-in"?new KC(e,r):n==="array-contains-any"?new GC(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $C(e,r):new WC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&Lr(this.value)===Lr(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends a0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ft(e,n)}matches(e){return l0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function l0(t){return t.op==="and"}function u0(t){return BC(t)&&l0(t)}function BC(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function gh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(u0(t))return t.filters.map(e=>gh(e)).join(",");{const e=t.filters.map(n=>gh(n)).join(",");return`${t.op}(${e})`}}function c0(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)}(t,e):t instanceof Ft?function(r,i){return i instanceof Ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&c0(o,i.filters[l]),!0):!1}(t,e):void K()}function h0(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof Ft?function(n){return n.op.toString()+" {"+n.getFilters().map(h0).join(" ,")+"}"}(t):"Filter"}class zC extends Pe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class $C extends Pe{constructor(e,n){super(e,"in",n),this.keys=d0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WC extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=d0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function d0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class qC extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ud(n)&&uo(n.arrayValue,this.value)}}class HC extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class KC extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uo(this.value.arrayValue,n)}}class GC extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function dg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QC(t,e,n,r,i,s,o)}function jd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function Bd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hg(t.startAt,e.startAt)&&hg(t.endAt,e.endAt)}function yh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function YC(t,e,n,r,i,s,o,l){return new Wi(t,e,n,r,i,s,o,l)}function Gl(t){return new Wi(t)}function fg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function f0(t){return t.collectionGroup!==null}function Ms(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new co(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new co(Fe.keyField(),r))}return e.ce}function Kt(t){const e=Y(t);return e.le||(e.le=XC(e,Ms(t))),e.le}function XC(t,e){if(t.limitType==="F")return dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new co(i.field,s)});const n=t.endAt?new vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vl(t.startAt.position,t.startAt.inclusive):null;return dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _h(t,e){const n=t.filters.concat([e]);return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vh(t,e,n){return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ql(t,e){return Bd(Kt(t),Kt(e))&&t.limitType===e.limitType}function p0(t){return`${jd(Kt(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>h0(i)).join(", ")}]`),Kl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(Kt(t))}; limitType=${t.limitType})`}function Yl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=cg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ms(r),i)||r.endAt&&!function(o,l,u){const h=cg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ms(r),i))}(t,e)}function JC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function m0(t){return(e,n)=>{let r=!1;for(const i of Ms(t)){const s=ZC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ni(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return i0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=new we(q.comparator);function En(){return eP}const g0=new we(q.comparator);function Is(...t){let e=g0;for(const n of t)e=e.insert(n.key,n);return e}function y0(t){let e=g0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Er(){return Fs()}function _0(){return Fs()}function Fs(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const tP=new we(q.comparator),nP=new je(q.comparator);function Z(...t){let e=nP;for(const n of t)e=e.add(n);return e}const rP=new je(ie);function iP(){return rP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function v0(t){return{integerValue:""+t}}function sP(t,e){return LC(e)?v0(e):zd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this._=void 0}}function oP(t,e,n){return t instanceof ho?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Md(s)&&(s=Fd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fo?E0(t,e):t instanceof po?T0(t,e):function(i,s){const o=w0(i,s),l=pg(o)+pg(i.Pe);return mh(o)&&mh(i.Pe)?v0(l):zd(i.serializer,l)}(t,e)}function aP(t,e,n){return t instanceof fo?E0(t,e):t instanceof po?T0(t,e):n}function w0(t,e){return t instanceof wl?function(r){return mh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ho extends Xl{}class fo extends Xl{constructor(e){super(),this.elements=e}}function E0(t,e){const n=I0(e);for(const r of t.elements)n.some(i=>Qt(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends Xl{constructor(e){super(),this.elements=e}}function T0(t,e){let n=I0(e);for(const r of t.elements)n=n.filter(i=>!Qt(i,r));return{arrayValue:{values:n}}}class wl extends Xl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function pg(t){return Se(t.integerValue||t.doubleValue)}function I0(t){return Ud(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n){this.field=e,this.transform=n}}function uP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fo&&i instanceof fo||r instanceof po&&i instanceof po?xi(r.elements,i.elements,Qt):r instanceof wl&&i instanceof wl?Qt(r.Pe,i.Pe):r instanceof ho&&i instanceof ho}(t.transform,e.transform)}class cP{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jl{}function S0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R0(t.key,fn.none()):new ko(t.key,t.data,fn.none());{const n=t.data,r=It.empty();let i=new je(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Vt(i.toArray()),fn.none())}}function hP(t,e,n){t instanceof ko?function(i,s,o){const l=i.value.clone(),u=gg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(i,s,o){if(!Ma(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=gg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(A0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Us(t,e,n,r){return t instanceof ko?function(s,o,l,u){if(!Ma(s.precondition,o))return l;const h=s.value.clone(),f=yg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(s,o,l,u){if(!Ma(s.precondition,o))return l;const h=yg(s.fieldTransforms,u,o),f=o.data;return f.setAll(A0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ma(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=w0(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,(s,o)=>uP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends Jl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Jl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function A0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gg(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,aP(o,l,n[i]))}return r}function yg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,oP(s,o,e))}return r}class R0 extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fP extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=S0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>mg(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>mg(n,r))}}class $d{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return tP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $d(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,te;function yP(t){switch(t){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function C0(t){if(t===void 0)return wn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Re.OK:return O.OK;case Re.CANCELLED:return O.CANCELLED;case Re.UNKNOWN:return O.UNKNOWN;case Re.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Re.INTERNAL:return O.INTERNAL;case Re.UNAVAILABLE:return O.UNAVAILABLE;case Re.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Re.NOT_FOUND:return O.NOT_FOUND;case Re.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Re.ABORTED:return O.ABORTED;case Re.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Re.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new Sr([4294967295,4294967295],0);function _g(t){const e=_P().encode(t),n=new Yv;return n.update(e),new Uint8Array(n.digest())}function vg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([i,s],0)]}class Wd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ss(`Invalid padding: ${n}`);if(r<0)throw new Ss(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ss(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ss(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Sr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Sr.fromNumber(r)));return i.compare(vP)===1&&(i=new Sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_g(e),[r,i]=vg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=_g(e),[r,i]=vg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zl(Q.min(),i,new we(ie),En(),Z())}}class xo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xo(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class P0{constructor(e,n){this.targetId=e,this.me=n}}class k0{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wg{constructor(){this.fe=0,this.ge=Tg(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new xo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Tg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wP{constructor(e){this.Le=e,this.Be=new Map,this.ke=En(),this.qe=Eg(),this.Qe=new we(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(yh(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Je.newNoDocument(o,Q.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Or(r).toUint8Array()}catch(u){if(u instanceof s0)return ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Wd(o,i,s)}catch(u){return ki(u instanceof Ss?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&yh(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Je.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Zl(e,n,this.Qe,this.ke,r);return this.ke=En(),this.qe=Eg(),this.Qe=new we(ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new wg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new je(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Eg(){return new we(q.comparator)}function Tg(){return new we(q.comparator)}const EP={asc:"ASCENDING",desc:"DESCENDING"},TP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IP={and:"AND",or:"OR"};class SP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wh(t,e){return t.useProto3Json||Kl(e)?e:{value:e}}function El(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function x0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AP(t,e){return El(t,e.toTimestamp())}function Gt(t){return ae(!!t),Q.fromTimestamp(function(n){const r=ir(n);return new Ne(r.seconds,r.nanos)}(t))}function qd(t,e){return Eh(t,e).canonicalString()}function Eh(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function N0(t){const e=fe.fromString(t);return ae(b0(e)),e}function Th(t,e){return qd(t.databaseId,e.path)}function ac(t,e){const n=N0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(V0(n))}function D0(t,e){return qd(t.databaseId,e)}function RP(t){const e=N0(t);return e.length===4?fe.emptyPath():V0(e)}function Ih(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ig(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function CP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:C0(h.code);return new $(f,h.message||"")}(o);n=new k0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ac(t,r.document.name),s=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):Q.min(),l=new It({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Fa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ac(t,r.document),s=r.readTime?Gt(r.readTime):Q.min(),o=Je.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ac(t,r.document),s=r.removedTargetIds||[];n=new Fa([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gP(i,s),l=r.targetId;n=new P0(l,o)}}return n}function PP(t,e){let n;if(e instanceof ko)n={update:Ig(t,e.key,e.value)};else if(e instanceof R0)n={delete:Th(t,e.key)};else if(e instanceof Ur)n={update:Ig(t,e.key,e.data),updateMask:MP(e.fieldMask)};else{if(!(e instanceof fP))return K();n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function kP(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gt(i.updateTime):Gt(s);return o.isEqual(Q.min())&&(o=Gt(s)),new cP(o,i.transformResults||[])}(n,e))):[]}function xP(t,e){return{documents:[D0(t,e.path)]}}function NP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=D0(t,i);const s=function(h){if(h.length!==0)return L0(Ft.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Gr(g.field),direction:OP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function DP(t){let e=RP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=O0(m);return g instanceof Ft&&u0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new co(Qr(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Kl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new vl(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,I=m.values||[];return new vl(I,g)}(n.endAt)),YC(e,i,o,s,l,"F",u,h)}function VP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ft.create(n.compositeFilter.filters.map(r=>O0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function OP(t){return EP[t]}function LP(t){return TP[t]}function bP(t){return IP[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return Fe.fromServerFormat(t.fieldPath)}function L0(t){return t instanceof Pe?function(n){if(n.op==="=="){if(ug(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(lg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ug(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(lg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:LP(n.op),value:n.value}}}(t):t instanceof Ft?function(n){const r=n.getFilters().map(i=>L0(i));return r.length===1?r[0]:{compositeFilter:{op:bP(n.op),filters:r}}}(t):K()}function MP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function b0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.ct=e}}function UP(t){const e=DP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.un=new BP}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(rr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class BP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Us(r.mutation,i,Vt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Er();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Is();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=En();const o=Fs(),l=function(){return Fs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ur)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Us(f.mutation,h,f.mutation.getFieldMask(),Ne.now())):o.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new $P(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Fs();let i=new we((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=_0();f.forEach(g=>{if(!s.has(g)){const I=S0(n.get(g),r.get(g));I!==null&&m.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):f0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Er());let l=-1,u=s;return o.next(h=>b.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:y0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Is();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Is();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const h=function(m,g){return new Wi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Je.newInvalidDocument(f)))});let l=Is();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Us(f.mutation,h,Vt.empty(),Ne.now()),Yl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:UP(i.bundledQuery),readTime:Gt(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.overlays=new we(q.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Er();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Er(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Er(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Er(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return b.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mP(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.Tr=new je(De.Er),this.dr=new je(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new De(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new De(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new fe([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new fe([])),r=new De(n,e),i=new De(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new je(De.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new De(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ie);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new De(new q(s),0);let l=new je(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),b.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new De(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.Mr=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=En();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||NC(xC(f),r)<=0||(i.has(f.key)||Yl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YP(this)}getSize(e){return b.resolve(this.size)}}class YP extends zP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.persistence=e,this.Nr=new qi(n=>jd(n),Bd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hd,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new bd(0),this.Kr=!1,this.Kr=!0,this.$r=new KP,this.referenceDelegate=e(this),this.Ur=new XP(this),this.indexManager=new jP,this.remoteDocumentCache=function(i){return new QP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new FP(n),this.Gr=new qP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new GP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new ZP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ZP extends VC{constructor(e){super(),this.currentSequenceNumber=e}}class Kd{constructor(e){this.persistence=e,this.Jr=new Hd,this.Yr=null}static Zr(e){return new Kd(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jI()?8:OC(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ek;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ms()<=ee.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(ms()<=ee.DEBUG&&W("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ms()<=ee.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):b.resolve())}Yi(e,n){if(fg(n))return b.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vh(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,vh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return fg(n)||i.isEqual(Q.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?b.resolve(null):(ms()<=ee.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kr(n)),this.rs(e,o,n,kC(i,-1)).next(l=>l))})}ts(e,n){let r=new je(m0(e));return n.forEach((i,s)=>{Yl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ms()<=ee.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Ji.getDocumentsMatchingQuery(e,n,rr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(ie),this._s=new qi(s=>jd(s),Bd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rk(t,e,n,r){return new nk(t,e,n,r)}async function M0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function ik(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let I=b.resolve();return g.forEach(x=>{I=I.next(()=>f.getEntry(u,x)).next(N=>{const L=h.docVersions.get(x);ae(L!==null),N.version.compareTo(L)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function F0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sk(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken($e.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(N,L,A){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(g,I,f)&&l.push(n.Ur.updateTargetData(s,I))});let u=En(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(ok(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function ok(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=En();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function ak(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lk(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Sh(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Po(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Sg(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Y(u),g=m._s.get(f);return g!==void 0?b.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,o,Kt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(l=>(uk(r,JC(e),l),{documents:l,Ts:s})))}function uk(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Ag{constructor(){this.activeTargetIds=iP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ck{constructor(){this.so=new Ag,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function lc(){return _a===null?_a=function(){return 268435456+Math.round(2147483648*Math.random())}():_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class pk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=lc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ki("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=dk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=lc();return new Promise((o,l)=>{const u=new Xv;u.setWithCredentials(!0),u.listenOnce(Jv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case La.NO_ERROR:const f=u.getResponseJson();W(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case La.TIMEOUT:W(Qe,`RPC '${e}' ${s} timed out`),l(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const m=u.getStatus();if(W(Qe,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const x=function(L){const A=L.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(A)>=0?A:O.UNKNOWN}(I.status);l(new $(x,I.message))}else l(new $(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{W(Qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=lc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=t0(),l=e0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,I=!1;const x=new fk({Io:L=>{I?W(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||(W(Qe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),W(Qe,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},To:()=>m.close()}),N=(L,A,_)=>{L.listen(A,S=>{try{_(S)}catch(V){setTimeout(()=>{throw V},0)}})};return N(m,Ts.EventType.OPEN,()=>{I||(W(Qe,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),N(m,Ts.EventType.CLOSE,()=>{I||(I=!0,W(Qe,`RPC '${e}' stream ${i} transport closed`),x.So())}),N(m,Ts.EventType.ERROR,L=>{I||(I=!0,ki(Qe,`RPC '${e}' stream ${i} transport errored:`,L),x.So(new $(O.UNAVAILABLE,"The operation could not be completed")))}),N(m,Ts.EventType.MESSAGE,L=>{var A;if(!I){const _=L.data[0];ae(!!_);const S=_,V=S.error||((A=S[0])===null||A===void 0?void 0:A.error);if(V){W(Qe,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let F=function(w){const E=Re[w];if(E!==void 0)return C0(E)}(U),v=V.message;F===void 0&&(F=O.INTERNAL,v="Unknown error status: "+U+" with message "+V.message),I=!0,x.So(new $(F,v)),m.close()}else W(Qe,`RPC '${e}' stream ${i} received:`,_),x.bo(_)}}),N(l,Zv.STAT_EVENT,L=>{L.stat===fh.PROXY?W(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===fh.NOPROXY&&W(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){return new SP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new U0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mk extends j0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=CP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Gt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ih(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=yh(u)?{documents:xP(s,u)}:{query:NP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=x0(s,o.resumeToken);const h=wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=El(s,o.snapshotVersion.toTimestamp());const h=wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=VP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ih(this.serializer),n.removeTarget=e,this.a_(n)}}class gk extends j0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kP(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ih(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Eh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Eh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _k{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{jr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await No(h),h.q_.set("Unknown"),h.L_.delete(4),await tu(h)}(this))})}),this.q_=new _k(r,i)}}async function tu(t){if(jr(t))for(const e of t.B_)await e(!0)}async function No(t){for(const e of t.B_)await e(!1)}function B0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jd(n)?Xd(n):Hi(n).r_()&&Yd(n,e))}function Qd(t,e){const n=Y(t),r=Hi(n);n.N_.delete(e),r.r_()&&z0(n,e),n.N_.size===0&&(r.r_()?r.o_():jr(n)&&n.q_.set("Unknown"))}function Yd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).A_(e)}function z0(t,e){t.Q_.xe(e),Hi(t).R_(e)}function Xd(t){t.Q_=new wP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.q_.v_()}function Jd(t){return jr(t)&&!Hi(t).n_()&&t.N_.size>0}function jr(t){return Y(t).L_.size===0}function $0(t){t.Q_=void 0}async function wk(t){t.q_.set("Online")}async function Ek(t){t.N_.forEach((e,n)=>{Yd(t,e)})}async function Tk(t,e){$0(t),Jd(t)?(t.q_.M_(e),Xd(t)):t.q_.set("Unknown")}async function Ik(t,e,n){if(t.q_.set("Online"),e instanceof k0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tl(t,r)}else if(e instanceof Fa?t.Q_.Ke(e):e instanceof P0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await F0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),z0(s,u);const m=new jn(f.target,u,h,f.sequenceNumber);Yd(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Tl(t,r)}}async function Tl(t,e,n){if(!Po(e))throw e;t.L_.add(1),await No(t),t.q_.set("Offline"),n||(n=()=>F0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await tu(t)})}function W0(t,e){return e().catch(n=>Tl(t,n,e))}async function nu(t){const e=Y(t),n=sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Sk(e);)try{const i=await ak(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Ak(e,i)}catch(i){await Tl(e,i)}q0(e)&&H0(e)}function Sk(t){return jr(t)&&t.O_.length<10}function Ak(t,e){t.O_.push(e);const n=sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function q0(t){return jr(t)&&!sr(t).n_()&&t.O_.length>0}function H0(t){sr(t).start()}async function Rk(t){sr(t).p_()}async function Ck(t){const e=sr(t);for(const n of t.O_)e.m_(n.mutations)}async function Pk(t,e,n){const r=t.O_.shift(),i=$d.from(r,e,n);await W0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nu(t)}async function kk(t,e){e&&sr(t).V_&&await async function(r,i){if(function(o){return yP(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();sr(r).s_(),await W0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nu(r)}}(t,e),q0(t)&&H0(t)}async function Cg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.L_.add(3),await No(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await tu(n)}async function xk(t,e){const n=Y(t);e?(n.L_.delete(2),await tu(n)):e||(n.L_.add(2),await No(n),n.q_.set("Unknown"))}function Hi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new mk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:wk.bind(null,t),Ro:Ek.bind(null,t),mo:Tk.bind(null,t),d_:Ik.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jd(t)?Xd(t):t.q_.set("Unknown")):(await t.K_.stop(),$0(t))})),t.K_}function sr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new gk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rk.bind(null,t),mo:kk.bind(null,t),f_:Ck.bind(null,t),g_:Pk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await nu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Zd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Po(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Is(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.W_=new we(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oi(e,n,vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Dk{constructor(){this.queries=kg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=kg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function kg(){return new qi(t=>p0(t),Ql)}async function K0(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Nk,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ef(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&tf(n)}async function G0(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Vk(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&tf(n)}function Ok(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function tf(t){t.Y_.forEach(e=>{e.next()})}var Ah,xg;(xg=Ah||(Ah={})).ea="default",xg.Cache="cache";class Q0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ah.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.key=e}}class X0{constructor(e){this.key=e}}class Lk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=m0(e),this.Ra=new vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Pg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),I=Yl(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let L=!1;g&&I?g.data.isEqual(I.data)?x!==N&&(r.track({type:3,doc:I}),L=!0):this.ga(g,I)||(r.track({type:2,doc:I}),L=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),L=!0):g&&!I&&(r.track({type:1,doc:g}),L=!0,(u||h)&&(l=!0)),L&&(I?(o=o.add(I),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(I,x){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return N(I)-N(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Oi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new X0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Y0(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Oi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class bk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mk{constructor(e){this.key=e,this.va=!1}}class Fk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new qi(l=>p0(l),Ql),this.Ma=new Map,this.xa=new Set,this.Oa=new we(q.comparator),this.Na=new Map,this.La=new Hd,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Uk(t,e,n=!0){const r=rw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await J0(r,e,n,!0),i}async function jk(t,e){const n=rw(t);await J0(n,e,!0,!1)}async function J0(t,e,n,r){const i=await lk(t.localStore,Kt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Bk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&B0(t.remoteStore,i),l}async function Bk(t,e,n,r,i){t.Ka=(m,g,I)=>async function(N,L,A,_){let S=L.view.ma(A);S.ns&&(S=await Sg(N.localStore,L.query,!1).then(({documents:v})=>L.view.ma(v,S)));const V=_&&_.targetChanges.get(L.targetId),U=_&&_.targetMismatches.get(L.targetId)!=null,F=L.view.applyChanges(S,N.isPrimaryClient,V,U);return Dg(N,L.targetId,F.wa),F.snapshot}(t,m,g,I);const s=await Sg(t.localStore,e,!0),o=new Lk(e,s.Ts),l=o.ma(s.documents),u=xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Dg(t,n,h.wa);const f=new bk(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function zk(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ql(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Qd(r.remoteStore,i.targetId),Rh(r,i.targetId)}).catch(Co)):(Rh(r,i.targetId),await Sh(r.localStore,i.targetId,!0))}async function $k(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qd(n.remoteStore,r.targetId))}async function Wk(t,e,n){const r=Xk(t);try{const i=await function(o,l){const u=Y(o),h=Ne.now(),f=l.reduce((I,x)=>I.add(x.key),Z());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=En(),N=Z();return u.cs.getEntries(I,f).next(L=>{x=L,x.forEach((A,_)=>{_.isValidDocument()||(N=N.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(L=>{m=L;const A=[];for(const _ of l){const S=dP(_,m.get(_.key).overlayedDocument);S!=null&&A.push(new Ur(_.key,S,o0(S.value.mapValue),fn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,A,l)}).next(L=>{g=L;const A=L.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(I,L.batchId,A)})}).then(()=>({batchId:g.batchId,changes:y0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new we(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Do(r,i.changes),await nu(r.remoteStore)}catch(i){const s=ef(i,"Failed to persist write");n.reject(s)}}async function Z0(t,e){const n=Y(t);try{const r=await sk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Do(n,r,e)}catch(r){await Co(r)}}function Ng(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&tf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qk(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(q.comparator);o=o.insert(s,Je.newNoDocument(s,Q.min()));const l=Z().add(s),u=new Zl(Q.min(),new Map,new we(ie),o,l);await Z0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),nf(r)}else await Sh(r.localStore,e,!1).then(()=>Rh(r,e,n)).catch(Co)}async function Hk(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await ik(n.localStore,e);tw(n,r,null),ew(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Do(n,i)}catch(i){await Co(i)}}async function Kk(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ae(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);tw(r,e,n),ew(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Do(r,i)}catch(i){await Co(i)}}function ew(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function tw(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Rh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||nw(t,r)})}function nw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Qd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),nf(t))}function Dg(t,e,n){for(const r of n)r instanceof Y0?(t.La.addReference(r.key,e),Gk(t,r)):r instanceof X0?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||nw(t,r.key)):K()}function Gk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),nf(t))}function nf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new Mk(n)),t.Oa=t.Oa.insert(n,r),B0(t.remoteStore,new jn(Kt(Gl(n.path)),r,"TargetPurposeLimboResolution",bd.oe))}}async function Do(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Gd.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>b.forEach(h,g=>b.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>b.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Po(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const I=f.os.get(g),x=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(g,N)}}}(r.localStore,s))}async function Qk(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await M0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Do(n,r.hs)}}function Yk(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function rw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qk.bind(null,e),e.Ca.d_=Vk.bind(null,e.eventManager),e.Ca.$a=Ok.bind(null,e.eventManager),e}function Xk(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kk.bind(null,e),e}class Il{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rk(this.persistence,new tk,e.initialUser,this.serializer)}Ga(e){return new JP(Kd.Zr,this.serializer)}Wa(e){return new ck}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Il.provider={build:()=>new Il};class Ch{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ng(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await xk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dk}()}createDatastore(e){const n=eu(e.databaseInfo.databaseId),r=function(s){return new pk(s)}(e.databaseInfo);return function(s,o,l,u){return new yk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new vk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ng(this.syncEngine,n,0),function(){return Rg.D()?new Rg:new hk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new Fk(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await No(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ch.provider={build:()=>new Ch};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=r0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ef(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await M0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zk(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Cg(e.remoteStore,i)),t._onlineComponents=e}async function Zk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ki("Error using user provided cache. Falling back to memory cache: "+n),await cc(t,new Il)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await cc(t,new Il);return t._offlineComponents}async function sw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Vg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Vg(t,new Ch))),t._onlineComponents}function e1(t){return sw(t).then(e=>e.syncEngine)}async function Ph(t){const e=await sw(t),n=e.eventManager;return n.onListen=Uk.bind(null,e.syncEngine),n.onUnlisten=zk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$k.bind(null,e.syncEngine),n}function t1(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new iw({next:g=>{f.Za(),o.enqueueAndForget(()=>G0(s,m));const I=g.docs.has(l);!I&&g.fromCache?h.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Q0(Gl(l.path),f,{includeMetadataChanges:!0,_a:!0});return K0(s,m)}(await Ph(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n1(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lg(t){if(!q.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bg(t){if(q.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ru(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ow((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wC;switch(r.type){case"firstParty":return new SC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Og.get(n);r&&(W("ComponentProvider","Removing Datastore"),Og.delete(n),r.terminate())}(this),Promise.resolve()}}function r1(t,e,n,r={}){var i;const s=(t=Zn(t,iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ye.MOCK_USER;else{l=VI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ye(h)}t._authCredentials=new EC(new n0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class er extends Br{constructor(e,n,r){super(e,n,Gl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new q(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function Sl(t,e,...n){if(t=ze(t),aw("collection","path",e),t instanceof iu){const r=fe.fromString(e,...n);return bg(r),new er(t,null,r)}{if(!(t instanceof st||t instanceof er))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return bg(r),new er(t.firestore,null,r)}}function Li(t,e,...n){if(t=ze(t),arguments.length===1&&(e=r0.newId()),aw("doc","path",e),t instanceof iu){const r=fe.fromString(e,...n);return Lg(r),new st(t,null,new q(r))}{if(!(t instanceof st||t instanceof er))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Lg(r),new st(t.firestore,t instanceof er?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new U0(this,"async_queue_retry"),this.Vu=()=>{const r=uc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=uc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Po(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Zd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ug(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class mo extends iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Fg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fg(e),this._firestoreClient=void 0,await e}}}function i1(t,e){const n=typeof t=="object"?t:fv(),r=typeof t=="string"?t:"(default)",i=Ad(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=NI("firestore");s&&r1(i,...s)}return i}function rf(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||s1(t),t._firestoreClient}function s1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new MC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ow(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Jk(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi($e.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bi($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=/^__.*__$/;class a1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}function lw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class uf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Al(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(lw(this.Cu)&&o1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class l1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||eu(e)}Qu(e,n,r,i=!1){return new uf({Cu:e,methodName:n,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uw(t){const e=t._freezeSettings(),n=eu(t._databaseId);return new l1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function u1(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);dw("Data must be an object, but it was:",o,r);const l=cw(r,o);let u,h;if(s.merge)u=new Vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=h1(e,m,n);if(!o.contains(g))throw new $(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);f1(f,g)||f.push(g)}u=new Vt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new a1(new It(l),u,h)}class cf extends of{_toFieldTransform(e){return new lP(e.path,new ho)}isEqual(e){return e instanceof cf}}function c1(t,e,n,r=!1){return hf(n,t.Qu(r?4:3,e))}function hf(t,e){if(hw(t=ze(t)))return dw("Unsupported field value:",e,t),cw(t,e);if(t instanceof of)return function(r,i){if(!lw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=hf(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:El(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:El(i.serializer,s)}}if(r instanceof af)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bi)return{bytesValue:x0(i.serializer,r._byteString)};if(r instanceof st){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof lf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return zd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ru(r)}`)}(t,e)}function cw(t,e){const n={};return i0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(t,(r,i)=>{const s=hf(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof af||t instanceof bi||t instanceof st||t instanceof of||t instanceof lf)}function dw(t,e,n){if(!hw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ru(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function h1(t,e,n){if((e=ze(e))instanceof sf)return e._internalPath;if(typeof e=="string")return fw(t,e);throw Al("Field path arguments must be of type string or ",t,!1,void 0,n)}const d1=new RegExp("[~\\*/\\[\\]]");function fw(t,e,n){if(e.search(d1)>=0)throw Al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sf(...e.split("."))._internalPath}catch{throw Al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Al(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function f1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p1 extends pw{data(){return super.data()}}function df(t,e){return typeof e=="string"?fw(t,e):e instanceof sf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ff{}class mw extends ff{}function jg(t,e,...n){let r=[];e instanceof ff&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof mf).length,l=s.filter(u=>u instanceof pf).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class pf extends mw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pf(e,n,r)}_apply(e){const n=this._parse(e);return gw(e._query,n),new Br(e.firestore,e.converter,_h(e._query,n))}_parse(e){const n=uw(e.firestore);return function(s,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$g(m,f);const I=[];for(const x of m)I.push(zg(u,s,x));g={arrayValue:{values:I}}}else g=zg(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$g(m,f),g=c1(l,o,m,f==="in"||f==="not-in");return Pe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class mf extends ff{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)gw(o,u),o=_h(o,u)}(e._query,n),new Br(e.firestore,e.converter,_h(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gf extends mw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new co(s,o)}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Wi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Bg(t,e="asc"){const n=e,r=df("orderBy",t);return gf._create(r,n)}function zg(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!f0(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!q.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ag(t,new q(r))}if(n instanceof st)return ag(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ru(n)}.`)}function $g(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class g1{convertValue(e,n="none"){switch(Lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new lf(s)}convertGeoPoint(e){return new af(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(e));default:return null}}convertTimestamp(e){const n=ir(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(b0(r));const i=new lo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yw extends pw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(df("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ua extends yw{data(e={}){return super.data(e)}}class _1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new As(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ua(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ua(i._firestore,i._userDataWriter,l.doc.key,l.doc,new As(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ua(i._firestore,i._userDataWriter,l.doc.key,l.doc,new As(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:v1(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){t=Zn(t,st);const e=Zn(t.firestore,mo);return t1(rf(e),t._key).then(n=>vw(e,t,n))}class _w extends g1{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function yf(t,e,n){t=Zn(t,st);const r=Zn(t.firestore,mo),i=y1(t.converter,e,n);return E1(r,[u1(uw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fn.none())])}function Wg(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ug(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ug(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof st)h=Zn(t.firestore,mo),f=Gl(t._key.path),u={next:m=>{e[o]&&e[o](vw(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Zn(t,Br);h=Zn(m.firestore,mo),f=m._query;const g=new _w(h);u={next:I=>{e[o]&&e[o](new _1(h,g,m,I))},error:e[o+1],complete:e[o+2]},m1(t._query)}return function(g,I,x,N){const L=new iw(N),A=new Q0(I,L,x);return g.asyncQueue.enqueueAndForget(async()=>K0(await Ph(g),A)),()=>{L.Za(),g.asyncQueue.enqueueAndForget(async()=>G0(await Ph(g),A))}}(rf(h),f,l,u)}function E1(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>Wk(await e1(r),i,s)),s.promise}(rf(t),e)}function vw(t,e,n){const r=n.docs.get(e._key),i=new _w(t);return new yw(t,i,e._key,r,new As(n.hasPendingWrites,n.fromCache),e.converter)}function T1(){return new cf("serverTimestamp")}(function(e,n=!0){(function(i){zi=i})(ji),Ci(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new mo(new TC(r.getProvider("auth-internal")),new RC(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xn(ng,"4.7.3",e),Xn(ng,"4.7.3","esm2017")})();const hc={apiKey:"AIzaSyAXYFBbjkTPcbJ7hXbV4HZtI_xReX0PIVM",authDomain:"ascension-ranch-pilot.firebaseapp.com",projectId:"ascension-ranch-pilot",storageBucket:"ascension-ranch-pilot.appspot.com",messagingSenderId:"1005741981843",appId:"1:1005741981843:web:03d6506bf11cfb59b78d66"},Rl="ascension-pilot-campus",Yr=[{name:"Land & Ecology",subCategories:["Soil Health","Pasture Management","Wildlife Habitat","Forestry"]},{name:"Power & Energy",subCategories:["Solar Array","Battery Storage","Grid Management","Micro-Hydro"]},{name:"Infrastructure & Water",subCategories:["Well & Pump Systems","Irrigation","Buildings & Fencing","Roads & Access"]},{name:"Bio-Systems",subCategories:["Composting","Aquaponics","Mycology","Animal Husbandry"]}],ww=({children:t,isOpen:e,onClose:n})=>e?R.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4",onClick:n,children:R.jsx("div",{className:"bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col",onClick:r=>r.stopPropagation(),children:R.jsx("div",{className:"p-8 overflow-y-auto",children:t})})}):null,I1=()=>R.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-lime-50/50",children:[R.jsx("div",{className:"w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"}),R.jsx("p",{className:"mt-4 text-lg text-green-900",children:"Initializing Campus Hub and Authenticating User..."})]}),S1=({message:t})=>R.jsx("div",{className:"flex items-center justify-center min-h-screen bg-red-50 text-red-800",children:R.jsxs("div",{className:"text-center p-8 border-2 border-red-300 rounded-lg bg-white",children:[R.jsx("h1",{className:"text-2xl font-bold",children:"Configuration Error"}),R.jsx("p",{className:"mt-2",children:t})]})}),A1=({auth:t,db:e,setError:n})=>{const[r,i]=se.useState(""),[s,o]=se.useState(""),[l,u]=se.useState(""),[h,f]=se.useState(!0),m=async g=>{g.preventDefault(),n(null);try{if(h)await tR(t,r,s);else{if(!l.trim()){n("Please enter a display name.");return}const I=await eR(t,r,s),x=Li(e,"users",I.user.uid);await yf(x,{uid:I.user.uid,email:I.user.email,displayName:l,role:"user"}),await rR(I.user,{displayName:l})}}catch(I){console.error(`${h?"Login":"Sign Up"} failed:`,I),n(`Authentication Failed: ${I.code.replace("auth/","").replace(/-/g," ")}.`)}};return R.jsx("div",{className:"flex items-center justify-center min-h-screen bg-lime-50/50",children:R.jsxs("div",{className:"w-full max-w-md p-8 space-y-6 bg-white rounded-3xl shadow-xl border border-lime-200/50",children:[R.jsxs("div",{children:[R.jsx("h1",{className:"text-3xl font-bold text-green-800 text-center",children:"Ascension Ranch"}),R.jsx("p",{className:"text-sm text-stone-500 text-center",children:"Regenerative Campus Pilot"})]}),R.jsx("h2",{className:"text-xl font-semibold text-center text-neutral-700 pt-4",children:h?"Collaborator Login":"Create New Account"}),R.jsxs("form",{onSubmit:m,className:"space-y-4",children:[!h&&R.jsx("input",{type:"text",value:l,onChange:g=>u(g.target.value),placeholder:"Your Name",className:"w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",required:!0}),R.jsx("input",{type:"email",value:r,onChange:g=>i(g.target.value),placeholder:"Email Address",className:"w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",required:!0}),R.jsx("input",{type:"password",value:s,onChange:g=>o(g.target.value),placeholder:"Password",className:"w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",required:!0}),R.jsx("button",{type:"submit",className:"w-full px-6 py-3 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-colors font-semibold shadow-md hover:shadow-lg",children:h?"Login":"Sign Up"})]}),R.jsx("button",{onClick:()=>{f(!h),n(null),u("")},className:"w-full text-sm text-center text-green-700 hover:underline",children:h?"Need an account? Sign Up":"Already have an account? Login"})]})})},R1=({asset:t,onClose:e,db:n})=>{var l;const[r,i]=se.useState(t||{name:"",mainCategory:Yr[0].name,subCategory:Yr[0].subCategories[0],specs:"",sop:"",education:"",status:"Active",location:""}),s=u=>{const{name:h,value:f}=u.target;i(m=>{const g={...m,[h]:f};if(h==="mainCategory"){const I=Yr.find(x=>x.name===f);g.subCategory=I?I.subCategories[0]:""}return g})},o=async u=>{if(u.preventDefault(),!r.name||!r.mainCategory||!r.location){alert("Asset Name, System Hub, and Location are required.");return}const h=(t==null?void 0:t.id)||Li(Sl(n,"dummy")).id,f=Li(n,`/artifacts/${Rl}/public/data/assets`,h);try{await yf(f,{...r,id:h},{merge:!0}),alert("Success! The asset/log entry has been recorded in the central database."),e()}catch(m){console.error("Error saving asset:",m),alert(`Failed to save asset. Please check your connection and Firestore security rules. Error: ${m.message}`)}};return R.jsxs("form",{onSubmit:o,className:"space-y-6",children:[R.jsx("h2",{className:"text-3xl font-bold text-neutral-800",children:t?"Edit Asset":"Create New Asset"}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[R.jsx("input",{name:"name",value:r.name,onChange:s,placeholder:"e.g., 'Main Well Pump 1,' 'Angus Herd'",className:"p-3 border border-stone-300 rounded-xl w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition md:col-span-2",required:!0}),R.jsx("select",{name:"mainCategory",value:r.mainCategory,onChange:s,className:"p-3 border border-stone-300 rounded-xl bg-white w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",children:Yr.map(u=>R.jsx("option",{children:u.name},u.name))}),R.jsx("select",{name:"subCategory",value:r.subCategory,onChange:s,className:"p-3 border border-stone-300 rounded-xl bg-white w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",children:(((l=Yr.find(u=>u.name===r.mainCategory))==null?void 0:l.subCategories)||[]).map(u=>R.jsx("option",{children:u},u))})]}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[R.jsx("input",{name:"location",value:r.location,onChange:s,placeholder:"Brief location (e.g., 'North Pasture,' 'Pump House Basement')",className:"p-3 border border-stone-300 rounded-xl w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",required:!0}),R.jsxs("select",{name:"status",value:r.status,onChange:s,className:"p-3 border border-stone-300 rounded-xl bg-white w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",children:[R.jsx("option",{children:"Active"}),R.jsx("option",{children:"Repair"}),R.jsx("option",{children:"Decommissioned"})]})]}),R.jsx("textarea",{name:"specs",value:r.specs,onChange:s,placeholder:"Model No., Capacity, Install Date, Vendor Contact, Warranty End Date.",className:"w-full p-3 border border-stone-300 rounded-xl h-24 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"}),R.jsx("textarea",{name:"sop",value:r.sop,onChange:s,placeholder:"Step-by-step procedure for maintenance/use (Focus on generalization for campus model).",className:"w-full p-3 border border-stone-300 rounded-xl h-24 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"}),R.jsx("textarea",{name:"education",value:r.education,onChange:s,placeholder:"Contextual links, learning objectives, and scientific 'why.'",className:"w-full p-3 border border-stone-300 rounded-xl h-24 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"}),R.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[R.jsx("button",{type:"button",onClick:e,className:"px-6 py-2 bg-stone-200 text-stone-800 rounded-full hover:bg-stone-300 transition-colors",children:"Cancel"}),R.jsx("button",{type:"submit",className:"px-6 py-2 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-colors shadow-md hover:shadow-lg",children:"Save Asset Details"})]})]})},C1=({log:t,assets:e,onClose:n,db:r,user:i})=>{const s=["Horses","Cows","Chickens","Ducks","Goats","Sheep","Pigs"],[o,l]=se.useState(t||{type:"Maintenance",description:"",relatedAssetId:"",teamMember:i.displayName||i.email,feedingData:{}}),u=f=>{const{name:m,value:g}=f.target;if(m.startsWith("feeding-")){const I=m.split("-")[1];l(x=>({...x,feedingData:{...x.feedingData,[I]:g}}))}else l(I=>({...I,[m]:g}))},h=async f=>{if(f.preventDefault(),!o.description||!o.relatedAssetId){alert("Description and Related Asset are required.");return}const m=(t==null?void 0:t.id)||Li(Sl(r,"dummy")).id,g=Li(r,`/artifacts/${Rl}/public/data/logs`,m);try{const I={...o,id:m,teamMember:i.displayName||i.email,timestamp:t!=null&&t.timestamp?t.timestamp:T1()};await yf(g,I,{merge:!0}),alert("Success! The asset/log entry has been recorded in the central database."),n()}catch(I){console.error("Error saving log:",I),alert(`Failed to save log. Please check your connection and Firestore security rules. Error: ${I.message}`)}};return R.jsxs("form",{onSubmit:h,className:"space-y-4",children:[R.jsx("h2",{className:"text-3xl font-bold text-neutral-800",children:t?"Edit Log":"Create New Log"}),R.jsxs("select",{name:"relatedAssetId",value:o.relatedAssetId,onChange:u,className:"w-full p-3 border border-stone-300 rounded-xl bg-white focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",required:!0,children:[R.jsx("option",{value:"",children:"Select Related Asset"}),e.map(f=>R.jsx("option",{value:f.id,children:f.name},f.id))]}),R.jsxs("select",{name:"type",value:o.type,onChange:u,className:"w-full p-3 border border-stone-300 rounded-xl bg-white focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",children:[R.jsx("option",{children:"Maintenance"}),R.jsx("option",{children:"Health"}),R.jsx("option",{children:"Feeding"}),R.jsx("option",{children:"Repair"}),R.jsx("option",{children:"Observation"})]}),R.jsx("textarea",{name:"description",value:o.description,onChange:u,placeholder:"Detailed log entry of the event, action taken, and outcome.",className:"w-full p-3 border border-stone-300 rounded-xl h-32 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition",required:!0}),o.type==="Feeding"&&R.jsxs("div",{className:"p-4 border border-lime-200 rounded-xl bg-lime-50/50",children:[R.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-2",children:"Feed Quantities"}),R.jsx("div",{className:"grid grid-cols-2 gap-4",children:s.map(f=>{var m;return R.jsxs("div",{children:[R.jsx("label",{className:"text-sm font-medium text-gray-600",children:f}),R.jsx("input",{type:"text",name:`feeding-${f}`,value:((m=o.feedingData)==null?void 0:m[f])||"",onChange:u,placeholder:"e.g., 2 bales, 5 scoops",className:"w-full p-2 border border-stone-300 rounded-md mt-1"})]},f)})})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-sm font-medium text-gray-600",children:"Team Member"}),R.jsx("p",{className:"p-2 bg-gray-100 rounded text-gray-700 text-sm truncate",children:i.displayName||i.email}),R.jsx("p",{className:"text-xs text-gray-500",children:"(Automatically populated - Display only)"})]}),R.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[R.jsx("button",{type:"button",onClick:n,className:"px-6 py-2 bg-stone-200 text-stone-800 rounded-md hover:bg-stone-300 transition-colors",children:"Cancel"}),R.jsx("button",{type:"submit",className:"px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors",children:"Record Log Entry"})]})]})},js=({title:t,subtext:e,content:n})=>R.jsxs("div",{children:[R.jsx("h4",{className:"font-bold text-lg text-neutral-800",children:t}),R.jsx("p",{className:"text-sm text-stone-500 mb-2",children:e}),R.jsx("p",{className:"whitespace-pre-wrap p-3 bg-stone-50 rounded-md border border-stone-200 text-stone-700",children:n||"No information provided."})]}),P1=({assets:t,logs:e,user:n})=>{const r=t.filter(s=>s.status==="Active").length,i=e.slice(0,5);return R.jsxs("div",{className:"space-y-8",children:[R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[R.jsxs("div",{className:"bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg",children:[R.jsx("h3",{className:"text-lg font-semibold text-neutral-700",children:"Active Assets"}),R.jsx("p",{className:"text-5xl font-bold text-lime-600 mt-2",children:r}),R.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Systems currently operational on site."})]}),R.jsxs("div",{className:"bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg",children:[R.jsx("h3",{className:"text-lg font-semibold text-neutral-700",children:"Total Logs Recorded"}),R.jsx("p",{className:"text-5xl font-bold text-amber-600 mt-2",children:e.length}),R.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Auditable events since pilot launch."})]}),R.jsxs("div",{className:"bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg",children:[R.jsx("h3",{className:"text-lg font-semibold text-neutral-700",children:"Welcome, Collaborator!"}),R.jsx("p",{className:"text-xl font-semibold text-green-800 bg-lime-50 p-3 rounded-xl mt-2 break-all",children:n.displayName||n.email}),R.jsxs("p",{className:"text-sm text-stone-500 mt-1",children:["You are logged in as ",n.email,"."]})]})]}),R.jsxs("div",{className:"bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg",children:[R.jsx("h3",{className:"text-xl font-semibold text-neutral-700",children:"5 Latest System Events"}),R.jsx("p",{className:"text-sm text-stone-500 mb-4",children:"Quick view of all recent maintenance, health, and repair observations."}),R.jsx("div",{className:"space-y-3",children:i.length>0?i.map(s=>{var o;return R.jsxs("div",{className:"p-3 bg-stone-50 rounded-lg border border-stone-200",children:[R.jsx("p",{className:"font-semibold text-stone-800",children:s.description}),R.jsxs("p",{className:"text-sm text-stone-500",children:[R.jsx("span",{className:`font-bold ${s.type==="Repair"?"text-red-500":"text-stone-600"}`,children:s.type})," on ",(o=s.timestamp)==null?void 0:o.toDate().toLocaleString()]})]},s.id)}):R.jsx("p",{className:"text-stone-500",children:"No logs found."})})]})]})},k1=({assets:t,db:e,isAdmin:n})=>{const[r,i]=se.useState(""),[s,o]=se.useState({key:"name",direction:"ascending"}),[l,u]=se.useState(null),[h,f]=se.useState(!1),[m,g]=se.useState(null),I=se.useMemo(()=>{let _=[...t];return _.sort((S,V)=>S[s.key]<V[s.key]?s.direction==="ascending"?-1:1:S[s.key]>V[s.key]?s.direction==="ascending"?1:-1:0),_.filter(S=>S.name.toLowerCase().includes(r.toLowerCase())||S.system.toLowerCase().includes(r.toLowerCase()))},[t,r,s]),x=_=>{let S="ascending";s.key===_&&s.direction==="ascending"&&(S="descending"),o({key:_,direction:S})},N=(_=null)=>{g(_),f(!0)},L=()=>{f(!1),g(null)},A=()=>{window.print()};return l?R.jsxs("div",{className:"space-y-6",children:[R.jsx("button",{onClick:()=>u(null),className:"mb-4 px-6 py-2 bg-white/70 backdrop-blur-md border border-white/20 rounded-full text-stone-700 hover:bg-white/90 transition-colors print:hidden",children:"← Back to List"}),R.jsxs("div",{className:"bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg print:shadow-none print:border-none",children:[R.jsxs("div",{className:"flex justify-between items-start",children:[R.jsxs("div",{children:[R.jsx("h2",{className:"text-3xl font-bold",children:l.name}),R.jsxs("p",{className:"text-gray-600",children:["Status: ",R.jsx("span",{className:`font-semibold ${l.status==="Active"?"text-green-600":"text-yellow-600"}`,children:l.status})," | Category: ",R.jsx("span",{className:"font-semibold text-stone-700",children:l.mainCategory})]}),R.jsx("p",{className:"text-sm text-gray-500",children:l.location})]}),R.jsxs("div",{className:"flex items-center gap-4 print:hidden",children:[n&&R.jsx("button",{onClick:()=>N(l),className:"text-lime-600 hover:underline",children:"Edit"}),n&&R.jsx("button",{onClick:A,className:"px-4 py-2 bg-amber-600 text-white text-sm rounded-full hover:bg-amber-700 transition-colors",children:"Print Manual"})]})]}),R.jsxs("div",{className:"mt-6 space-y-6",children:[R.jsx(js,{title:"A. AS-BUILT SPECS",subtext:"Technical Details, Age, Model, and Warranty Information for the Pilot Site.",content:l.specs}),R.jsx(js,{title:"B. REPLICABLE SOP (Blueprint)",subtext:"Standard Operating Procedure. This generalized, step-by-step guide is the Campus Model Blueprint for all future sites.",content:l.sop})]})]})]}):R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4 mb-6",children:[R.jsx("input",{type:"text",placeholder:"Search assets...",value:r,onChange:_=>i(_.target.value),className:"w-full md:w-1/3 p-3 border border-stone-300 rounded-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"}),n&&R.jsx("button",{onClick:()=>N(),className:"w-full md:w-auto px-6 py-2 bg-lime-600 text-white rounded-full hover:bg-lime-700 flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg",children:"+ Add New Asset"})]}),R.jsx("div",{className:"overflow-x-auto bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg",children:R.jsxs("table",{className:"w-full text-left",children:[R.jsx("thead",{className:"bg-stone-50 border-b border-stone-200",children:R.jsx("tr",{children:["Asset Name","System Hub","Status","Location","View Details"].map(_=>R.jsx("th",{className:"p-4 text-sm font-semibold text-stone-600 cursor-pointer",onClick:()=>x(_.toLowerCase().replace(" ","")),children:_},_))})}),R.jsx("tbody",{children:I.length>0?I.map(_=>R.jsxs("tr",{className:"border-b border-stone-200 hover:bg-stone-50/50",children:[R.jsx("td",{className:"p-4 font-medium text-neutral-800",children:_.name}),R.jsx("td",{className:"p-4 text-neutral-600",children:_.mainCategory}),R.jsx("td",{className:"p-4",children:R.jsx("span",{className:`px-2 py-1 text-xs font-semibold rounded-full ${_.status==="Active"?"bg-green-100 text-green-800":_.status==="Repair"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:_.status})}),R.jsx("td",{className:"p-4 text-neutral-600",children:_.location}),R.jsx("td",{className:"p-4",children:R.jsx("button",{onClick:()=>u(_),className:"text-lime-600 hover:underline font-semibold",children:"View Details"})})]},_.id)):R.jsx("tr",{children:R.jsx("td",{colSpan:"5",className:"text-center p-8 text-stone-500",children:"No assets found. Click '+ Add New Asset' to start building the pilot documentation."})})})]})}),R.jsx(ww,{isOpen:h,onClose:L,children:R.jsx(R1,{asset:m,onClose:L,db:e})})]})},x1=({assets:t})=>{const[e,n]=se.useState(null),r=se.useMemo(()=>{const i=Yr.reduce((s,o)=>({...s,[o.name]:[]}),{});return t.forEach(s=>{i[s.mainCategory]&&i[s.mainCategory].push(s)}),i},[t]);return e?R.jsxs("div",{className:"space-y-6",children:[R.jsx("button",{onClick:()=>n(null),className:"mb-4 px-6 py-2 bg-white/70 backdrop-blur-md border border-white/20 rounded-full text-stone-700 hover:bg-white/90 transition-colors",children:"← Back to Operations Manual"}),R.jsxs("div",{className:"bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg",children:[R.jsx("h2",{className:"text-3xl font-bold text-neutral-800",children:e.name}),R.jsxs("p",{className:"text-gray-600",children:["System: ",R.jsxs("span",{className:"font-semibold text-stone-700",children:[e.mainCategory," > ",e.subCategory]})]}),R.jsx("p",{className:"text-sm text-gray-500",children:e.location}),R.jsxs("div",{className:"mt-6 space-y-6",children:[R.jsx(js,{title:"A. REPLICABLE SOP (Blueprint)",subtext:"Standard Operating Procedure. This generalized, step-by-step guide is the Campus Model Blueprint for all future sites.",content:e.sop}),R.jsx(js,{title:"B. EDUCATIONAL GUIDE",subtext:"Context & Curriculum. The 'Why' behind the procedure, linking to regenerative principles, soil science, or engineering concepts.",content:e.education}),R.jsx(js,{title:"C. AS-BUILT SPECS",subtext:"Technical Details, Age, Model, and Warranty Information for the Pilot Site.",content:e.specs})]})]})]}):R.jsxs("div",{className:"space-y-8",children:[R.jsx("h2",{className:"text-4xl font-bold text-neutral-800",children:"Ascension Ranch Operations Manual"}),R.jsx("p",{className:"text-lg text-neutral-600 -mt-4",children:"A living guide to the systems and procedures that power our regenerative campus."}),Object.entries(r).map(([i,s])=>s.length>0&&R.jsxs("div",{className:"bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg",children:[R.jsx("h3",{className:"text-2xl font-semibold text-green-800 border-b-2 border-lime-100 pb-2 mb-4",children:i}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map(o=>R.jsxs("button",{onClick:()=>n(o),className:"p-4 bg-white/50 hover:bg-white/90 border border-white/20 rounded-xl text-left transition-all hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-lime-500",children:[R.jsx("p",{className:"font-bold text-stone-800",children:o.name}),R.jsx("p",{className:"text-sm text-stone-500",children:o.location})]},o.id))})]},i))]})},N1=({logs:t,assets:e,db:n,user:r,isAdmin:i})=>{const[s,o]=se.useState(!1),[l,u]=se.useState(null),h=se.useMemo(()=>e.reduce((g,I)=>(g[I.id]=I.name,g),{}),[e]),f=(g=null)=>{u(g),o(!0)},m=()=>{o(!1),u(null)};return R.jsxs("div",{className:"space-y-4",children:[R.jsx("div",{className:"flex justify-end items-center gap-4 mb-6",children:i&&R.jsx("button",{onClick:()=>f(),className:"w-full md:w-auto px-6 py-2 bg-lime-600 text-white rounded-full hover:bg-lime-700 flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg",children:"+ Log New Event"})}),R.jsx("div",{className:"overflow-x-auto bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg",children:R.jsxs("table",{className:"w-full text-left",children:[R.jsx("thead",{className:"bg-stone-50 border-b border-stone-200",children:R.jsx("tr",{children:["Date","Log Type","Related Asset","Team Member","Description"].map(g=>R.jsx("th",{className:"p-4 text-sm font-semibold text-stone-600",children:g},g))})}),R.jsx("tbody",{children:t.length>0?t.map(g=>{var I;return R.jsxs("tr",{className:"border-b border-stone-200 hover:bg-stone-50/50",children:[R.jsx("td",{className:"p-4 text-neutral-600 whitespace-nowrap",children:(I=g.timestamp)==null?void 0:I.toDate().toLocaleString()}),R.jsx("td",{className:"p-4 font-medium text-neutral-800",children:g.type}),R.jsx("td",{className:"p-4 text-neutral-600",children:h[g.relatedAssetId]||"Unknown Asset"}),R.jsx("td",{className:"p-4 text-neutral-600 font-mono text-xs truncate max-w-xs",children:g.teamMember}),R.jsxs("td",{className:"p-4 text-neutral-800",children:[g.description,g.type==="Feeding"&&g.feedingData&&R.jsx("div",{className:"text-xs text-stone-600 mt-2",children:Object.entries(g.feedingData).map(([x,N])=>N&&R.jsxs("span",{className:"inline-block bg-lime-100 rounded-full px-2 py-1 mr-2 mb-1",children:[x,": ",N]},x))})]})]},g.id)}):R.jsx("tr",{children:R.jsx("td",{colSpan:"5",className:"text-center p-8 text-stone-500",children:"No logs found. Click '+ Log New Event' to create one."})})})]})}),R.jsx(ww,{isOpen:s,onClose:m,children:R.jsx(C1,{log:l,assets:e,onClose:m,db:n,user:r})})]})};function D1(){const[t,e]=se.useState(!0),[n,r]=se.useState(null),[i,s]=se.useState(null),[o,l]=se.useState(null),[u,h]=se.useState(null),[f,m]=se.useState([]),[g,I]=se.useState([]),[x,N]=se.useState("dashboard");se.useEffect(()=>{if(!hc.apiKey||hc.apiKey==="YOUR_API_KEY"){r("Connection Error: Could not connect to the Firestore database. Please check your configuration."),e(!1);return}const S=dv(hc),V=_C(S),U=i1(S);h(V),l(U);const F=oR(V,async v=>{var y;try{if(v){const w=Li(U,"users",v.uid),E=await w1(w),C={uid:v.uid,email:v.email,displayName:((y=E.data())==null?void 0:y.displayName)||v.displayName,isAdmin:E.exists()&&E.data().role==="admin"};s(C)}else s(null)}catch(w){console.error("Error during authentication state change:",w),r("An error occurred during authentication.")}finally{e(!1)}});return()=>F()},[]),se.useEffect(()=>{i&&!i.isAdmin&&x==="assets"&&N("dashboard")},[i,x]),se.useEffect(()=>{if(!o||!i)return;const S=jg(Sl(o,`/artifacts/${Rl}/public/data/assets`),Bg("name")),V=Wg(S,v=>{m(v.docs.map(y=>({id:y.id,...y.data()})))},v=>{console.error("Error fetching assets:",v),r("Failed to load asset data.")}),U=jg(Sl(o,`/artifacts/${Rl}/public/data/logs`),Bg("timestamp","desc")),F=Wg(U,v=>{I(v.docs.map(y=>({id:y.id,...y.data()})))},v=>{console.error("Error fetching logs:",v),r("Failed to load log data.")});return()=>{V(),F()}},[o,i]);const L=()=>{aR(u).catch(S=>console.error("Logout failed:",S))};if(t)return R.jsx(I1,{});if(n)return R.jsx(S1,{message:n});if(!i)return R.jsx(A1,{auth:u,db:o,setError:r});const A=()=>{switch(x){case"assets":return R.jsx(k1,{assets:f,db:o,isAdmin:i.isAdmin});case"logs":return R.jsx(N1,{logs:g,assets:f,db:o,user:i,isAdmin:i.isAdmin});case"operations":return R.jsx(x1,{assets:f});default:return R.jsx(P1,{assets:f,logs:g,user:i})}},_=({view:S,children:V})=>R.jsx("button",{onClick:()=>N(S),className:`w-full text-left px-4 py-2 rounded-full font-medium transition-colors ${x===S?"bg-lime-600 text-white shadow-md":"text-neutral-600 hover:bg-lime-100/50 hover:text-neutral-800"}`,children:V});return R.jsxs("div",{className:"flex flex-col md:flex-row min-h-screen bg-cover bg-center bg-fixed bg-[url('/background.png')] text-neutral-800 font-sans print:bg-white",children:[R.jsxs("nav",{className:"md:w-64 bg-white/60 backdrop-blur-lg border-r border-white/20 p-4 flex-shrink-0 print:hidden flex flex-col",children:[R.jsxs("div",{className:"mb-8",children:[R.jsx("h1",{className:"text-2xl font-bold text-green-800",children:"Ascension Ranch"}),R.jsx("p",{className:"text-sm text-stone-500",children:"Regenerative Campus Pilot Documentation"})]}),R.jsxs("div",{className:"space-y-3",children:[R.jsx(_,{view:"dashboard",children:"Dashboard"}),i.isAdmin&&R.jsx(_,{view:"assets",children:"Asset Manager"}),R.jsx(_,{view:"operations",children:"Ascension Ranch Operations"}),R.jsx(_,{view:"logs",children:"System Logs"})]}),R.jsx("div",{className:"mt-auto pt-4",children:R.jsx("button",{onClick:L,className:"w-full text-left px-4 py-2 rounded-full font-medium transition-colors text-neutral-600 hover:bg-stone-200 hover:text-neutral-800",children:"Logout"})})]}),R.jsx("main",{className:"flex-1 p-6 md:p-10 overflow-y-auto print:p-0",children:A()})]})}rv(document.getElementById("root")).render(R.jsx(se.StrictMode,{children:R.jsx(D1,{})}));
