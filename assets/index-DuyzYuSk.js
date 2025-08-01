(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))U(q);new MutationObserver(q=>{for(const W of q)if(W.type==="childList")for(const F of W.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&U(F)}).observe(document,{childList:!0,subtree:!0});function O(q){const W={};return q.integrity&&(W.integrity=q.integrity),q.referrerPolicy&&(W.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?W.credentials="include":q.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function U(q){if(q.ep)return;q.ep=!0;const W=O(q);fetch(q.href,W)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2=globalThis,e$2=t$2.ShadowRoot&&(t$2.ShadyCSS===void 0||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3=class{constructor(w,O,U){if(this._$cssResult$=!0,U!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this.t=O}get styleSheet(){let w=this.o;const O=this.t;if(e$2&&w===void 0){const U=O!==void 0&&O.length===1;U&&(w=o$4.get(O)),w===void 0&&((this.o=w=new CSSStyleSheet).replaceSync(this.cssText),U&&o$4.set(O,w))}return w}toString(){return this.cssText}};const r$4=D=>new n$3(typeof D=="string"?D:D+"",void 0,s$2),i$3=(D,...w)=>{const O=D.length===1?D[0]:w.reduce((U,q,W)=>U+(F=>{if(F._$cssResult$===!0)return F.cssText;if(typeof F=="number")return F;throw Error("Value passed to 'css' function must be a 'css' function result: "+F+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(q)+D[W+1],D[0]);return new n$3(O,D,s$2)},S$1=(D,w)=>{if(e$2)D.adoptedStyleSheets=w.map(O=>O instanceof CSSStyleSheet?O:O.styleSheet);else for(const O of w){const U=document.createElement("style"),q=t$2.litNonce;q!==void 0&&U.setAttribute("nonce",q),U.textContent=O.cssText,D.appendChild(U)}},c$2=e$2?D=>D:D=>D instanceof CSSStyleSheet?(w=>{let O="";for(const U of w.cssRules)O+=U.cssText;return r$4(O)})(D):D;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(D,w)=>D,u$1={toAttribute(D,w){switch(w){case Boolean:D=D?l$1:null;break;case Object:case Array:D=D==null?D:JSON.stringify(D)}return D},fromAttribute(D,w){let O=D;switch(w){case Boolean:O=D!==null;break;case Number:O=D===null?null:Number(D);break;case Object:case Array:try{O=JSON.parse(D)}catch{O=null}}return O}},f$1=(D,w)=>!i$2(D,w),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1=class extends HTMLElement{static addInitializer(w){this._$Ei(),(this.l??=[]).push(w)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(w,O=b){if(O.state&&(O.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(w)&&((O=Object.create(O)).wrapped=!0),this.elementProperties.set(w,O),!O.noAccessor){const U=Symbol(),q=this.getPropertyDescriptor(w,U,O);q!==void 0&&e$1(this.prototype,w,q)}}static getPropertyDescriptor(w,O,U){const{get:q,set:W}=h$1(this.prototype,w)??{get(){return this[O]},set(F){this[O]=F}};return{get:q,set(F){const G=q?.call(this);W?.call(this,F),this.requestUpdate(w,G,U)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const w=n$2(this);w.finalize(),w.l!==void 0&&(this.l=[...w.l]),this.elementProperties=new Map(w.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const O=this.properties,U=[...r$3(O),...o$3(O)];for(const q of U)this.createProperty(q,O[q])}const w=this[Symbol.metadata];if(w!==null){const O=litPropertyMetadata.get(w);if(O!==void 0)for(const[U,q]of O)this.elementProperties.set(U,q)}this._$Eh=new Map;for(const[O,U]of this.elementProperties){const q=this._$Eu(O,U);q!==void 0&&this._$Eh.set(q,O)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(w){const O=[];if(Array.isArray(w)){const U=new Set(w.flat(1/0).reverse());for(const q of U)O.unshift(c$2(q))}else w!==void 0&&O.push(c$2(w));return O}static _$Eu(w,O){const U=O.attribute;return U===!1?void 0:typeof U=="string"?U:typeof w=="string"?w.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(w=>this.enableUpdating=w),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(w=>w(this))}addController(w){(this._$EO??=new Set).add(w),this.renderRoot!==void 0&&this.isConnected&&w.hostConnected?.()}removeController(w){this._$EO?.delete(w)}_$E_(){const w=new Map,O=this.constructor.elementProperties;for(const U of O.keys())this.hasOwnProperty(U)&&(w.set(U,this[U]),delete this[U]);w.size>0&&(this._$Ep=w)}createRenderRoot(){const w=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(w,this.constructor.elementStyles),w}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(w=>w.hostConnected?.())}enableUpdating(w){}disconnectedCallback(){this._$EO?.forEach(w=>w.hostDisconnected?.())}attributeChangedCallback(w,O,U){this._$AK(w,U)}_$ET(w,O){const U=this.constructor.elementProperties.get(w),q=this.constructor._$Eu(w,U);if(q!==void 0&&U.reflect===!0){const W=(U.converter?.toAttribute!==void 0?U.converter:u$1).toAttribute(O,U.type);this._$Em=w,W==null?this.removeAttribute(q):this.setAttribute(q,W),this._$Em=null}}_$AK(w,O){const U=this.constructor,q=U._$Eh.get(w);if(q!==void 0&&this._$Em!==q){const W=U.getPropertyOptions(q),F=typeof W.converter=="function"?{fromAttribute:W.converter}:W.converter?.fromAttribute!==void 0?W.converter:u$1;this._$Em=q;const G=F.fromAttribute(O,W.type);this[q]=G??this._$Ej?.get(q)??G,this._$Em=null}}requestUpdate(w,O,U){if(w!==void 0){const q=this.constructor,W=this[w];if(U??=q.getPropertyOptions(w),!((U.hasChanged??f$1)(W,O)||U.useDefault&&U.reflect&&W===this._$Ej?.get(w)&&!this.hasAttribute(q._$Eu(w,U))))return;this.C(w,O,U)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(w,O,{useDefault:U,reflect:q,wrapped:W},F){U&&!(this._$Ej??=new Map).has(w)&&(this._$Ej.set(w,F??O??this[w]),W!==!0||F!==void 0)||(this._$AL.has(w)||(this.hasUpdated||U||(O=void 0),this._$AL.set(w,O)),q===!0&&this._$Em!==w&&(this._$Eq??=new Set).add(w))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(O){Promise.reject(O)}const w=this.scheduleUpdate();return w!=null&&await w,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[q,W]of this._$Ep)this[q]=W;this._$Ep=void 0}const U=this.constructor.elementProperties;if(U.size>0)for(const[q,W]of U){const{wrapped:F}=W,G=this[q];F!==!0||this._$AL.has(q)||G===void 0||this.C(q,void 0,W,G)}}let w=!1;const O=this._$AL;try{w=this.shouldUpdate(O),w?(this.willUpdate(O),this._$EO?.forEach(U=>U.hostUpdate?.()),this.update(O)):this._$EM()}catch(U){throw w=!1,this._$EM(),U}w&&this._$AE(O)}willUpdate(w){}_$AE(w){this._$EO?.forEach(O=>O.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(w)),this.updated(w)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(w){return!0}update(w){this._$Eq&&=this._$Eq.forEach(O=>this._$ET(O,this[O])),this._$EM()}updated(w){}firstUpdated(w){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:D=>D}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=D=>D===null||typeof D!="object"&&typeof D!="function",a=Array.isArray,u=D=>a(D)||typeof D?.[Symbol.iterator]=="function",d=`[ 	
\f\r]`,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=D=>(w,...O)=>({_$litType$:D,strings:w,values:O}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(D,w){if(!a(D)||!D.hasOwnProperty("raw"))throw Error("invalid template strings array");return s$1!==void 0?s$1.createHTML(w):w}const V=(D,w)=>{const O=D.length-1,U=[];let q,W=w===2?"<svg>":w===3?"<math>":"",F=f;for(let G=0;G<O;G++){const Y=D[G];let K,J,X=-1,Q=0;for(;Q<Y.length&&(F.lastIndex=Q,J=F.exec(Y),J!==null);)Q=F.lastIndex,F===f?J[1]==="!--"?F=v:J[1]!==void 0?F=_:J[2]!==void 0?($.test(J[2])&&(q=RegExp("</"+J[2],"g")),F=m):J[3]!==void 0&&(F=m):F===m?J[0]===">"?(F=q??f,X=-1):J[1]===void 0?X=-2:(X=F.lastIndex-J[2].length,K=J[1],F=J[3]===void 0?m:J[3]==='"'?g:p):F===g||F===p?F=m:F===v||F===_?F=f:(F=m,q=void 0);const Z=F===m&&D[G+1].startsWith("/>")?" ":"";W+=F===f?Y+n$1:X>=0?(U.push(K),Y.slice(0,X)+e+Y.slice(X)+h+Z):Y+h+(X===-2?G:Z)}return[P(D,W+(D[O]||"<?>")+(w===2?"</svg>":w===3?"</math>":"")),U]};class N{constructor({strings:w,_$litType$:O},U){let q;this.parts=[];let W=0,F=0;const G=w.length-1,Y=this.parts,[K,J]=V(w,O);if(this.el=N.createElement(K,U),C.currentNode=this.el.content,O===2||O===3){const X=this.el.content.firstChild;X.replaceWith(...X.childNodes)}for(;(q=C.nextNode())!==null&&Y.length<G;){if(q.nodeType===1){if(q.hasAttributes())for(const X of q.getAttributeNames())if(X.endsWith(e)){const Q=J[F++],Z=q.getAttribute(X).split(h),ee=/([.?@])?(.*)/.exec(Q);Y.push({type:1,index:W,name:ee[2],strings:Z,ctor:ee[1]==="."?H:ee[1]==="?"?I:ee[1]==="@"?L:k}),q.removeAttribute(X)}else X.startsWith(h)&&(Y.push({type:6,index:W}),q.removeAttribute(X));if($.test(q.tagName)){const X=q.textContent.split(h),Q=X.length-1;if(Q>0){q.textContent=i$1?i$1.emptyScript:"";for(let Z=0;Z<Q;Z++)q.append(X[Z],l()),C.nextNode(),Y.push({type:2,index:++W});q.append(X[Q],l())}}}else if(q.nodeType===8)if(q.data===o$2)Y.push({type:2,index:W});else{let X=-1;for(;(X=q.data.indexOf(h,X+1))!==-1;)Y.push({type:7,index:W}),X+=h.length-1}W++}}static createElement(w,O){const U=r$2.createElement("template");return U.innerHTML=w,U}}function S(D,w,O=D,U){if(w===T)return w;let q=U!==void 0?O._$Co?.[U]:O._$Cl;const W=c(w)?void 0:w._$litDirective$;return q?.constructor!==W&&(q?._$AO?.(!1),W===void 0?q=void 0:(q=new W(D),q._$AT(D,O,U)),U!==void 0?(O._$Co??=[])[U]=q:O._$Cl=q),q!==void 0&&(w=S(D,q._$AS(D,w.values),q,U)),w}class M{constructor(w,O){this._$AV=[],this._$AN=void 0,this._$AD=w,this._$AM=O}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(w){const{el:{content:O},parts:U}=this._$AD,q=(w?.creationScope??r$2).importNode(O,!0);C.currentNode=q;let W=C.nextNode(),F=0,G=0,Y=U[0];for(;Y!==void 0;){if(F===Y.index){let K;Y.type===2?K=new R(W,W.nextSibling,this,w):Y.type===1?K=new Y.ctor(W,Y.name,Y.strings,this,w):Y.type===6&&(K=new z(W,this,w)),this._$AV.push(K),Y=U[++G]}F!==Y?.index&&(W=C.nextNode(),F++)}return C.currentNode=r$2,q}p(w){let O=0;for(const U of this._$AV)U!==void 0&&(U.strings!==void 0?(U._$AI(w,U,O),O+=U.strings.length-2):U._$AI(w[O])),O++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(w,O,U,q){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=w,this._$AB=O,this._$AM=U,this.options=q,this._$Cv=q?.isConnected??!0}get parentNode(){let w=this._$AA.parentNode;const O=this._$AM;return O!==void 0&&w?.nodeType===11&&(w=O.parentNode),w}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(w,O=this){w=S(this,w,O),c(w)?w===E||w==null||w===""?(this._$AH!==E&&this._$AR(),this._$AH=E):w!==this._$AH&&w!==T&&this._(w):w._$litType$!==void 0?this.$(w):w.nodeType!==void 0?this.T(w):u(w)?this.k(w):this._(w)}O(w){return this._$AA.parentNode.insertBefore(w,this._$AB)}T(w){this._$AH!==w&&(this._$AR(),this._$AH=this.O(w))}_(w){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=w:this.T(r$2.createTextNode(w)),this._$AH=w}$(w){const{values:O,_$litType$:U}=w,q=typeof U=="number"?this._$AC(w):(U.el===void 0&&(U.el=N.createElement(P(U.h,U.h[0]),this.options)),U);if(this._$AH?._$AD===q)this._$AH.p(O);else{const W=new M(q,this),F=W.u(this.options);W.p(O),this.T(F),this._$AH=W}}_$AC(w){let O=A.get(w.strings);return O===void 0&&A.set(w.strings,O=new N(w)),O}k(w){a(this._$AH)||(this._$AH=[],this._$AR());const O=this._$AH;let U,q=0;for(const W of w)q===O.length?O.push(U=new R(this.O(l()),this.O(l()),this,this.options)):U=O[q],U._$AI(W),q++;q<O.length&&(this._$AR(U&&U._$AB.nextSibling,q),O.length=q)}_$AR(w=this._$AA.nextSibling,O){for(this._$AP?.(!1,!0,O);w!==this._$AB;){const U=w.nextSibling;w.remove(),w=U}}setConnected(w){this._$AM===void 0&&(this._$Cv=w,this._$AP?.(w))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(w,O,U,q,W){this.type=1,this._$AH=E,this._$AN=void 0,this.element=w,this.name=O,this._$AM=q,this.options=W,U.length>2||U[0]!==""||U[1]!==""?(this._$AH=Array(U.length-1).fill(new String),this.strings=U):this._$AH=E}_$AI(w,O=this,U,q){const W=this.strings;let F=!1;if(W===void 0)w=S(this,w,O,0),F=!c(w)||w!==this._$AH&&w!==T,F&&(this._$AH=w);else{const G=w;let Y,K;for(w=W[0],Y=0;Y<W.length-1;Y++)K=S(this,G[U+Y],O,Y),K===T&&(K=this._$AH[Y]),F||=!c(K)||K!==this._$AH[Y],K===E?w=E:w!==E&&(w+=(K??"")+W[Y+1]),this._$AH[Y]=K}F&&!q&&this.j(w)}j(w){w===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,w??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(w){this.element[this.name]=w===E?void 0:w}}class I extends k{constructor(){super(...arguments),this.type=4}j(w){this.element.toggleAttribute(this.name,!!w&&w!==E)}}class L extends k{constructor(w,O,U,q,W){super(w,O,U,q,W),this.type=5}_$AI(w,O=this){if((w=S(this,w,O,0)??E)===T)return;const U=this._$AH,q=w===E&&U!==E||w.capture!==U.capture||w.once!==U.once||w.passive!==U.passive,W=w!==E&&(U===E||q);q&&this.element.removeEventListener(this.name,this,U),W&&this.element.addEventListener(this.name,this,w),this._$AH=w}handleEvent(w){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,w):this._$AH.handleEvent(w)}}class z{constructor(w,O,U){this.element=w,this.type=6,this._$AN=void 0,this._$AM=O,this.options=U}get _$AU(){return this._$AM._$AU}_$AI(w){S(this,w)}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.3.1");const B=(D,w,O)=>{const U=O?.renderBefore??w;let q=U._$litPart$;if(q===void 0){const W=O?.renderBefore??null;U._$litPart$=q=new R(w.insertBefore(l(),W),W,void 0,O??{})}return q._$AI(D),q};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const w=super.createRenderRoot();return this.renderOptions.renderBefore??=w.firstChild,w}update(w){const O=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(w),this._$Do=B(O,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}i._$litElement$=!0,i.finalized=!0,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=D=>(w,O)=>{O!==void 0?O.addInitializer(()=>{customElements.define(D,w)}):customElements.define(D,w)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$1=(D=o,w,O)=>{const{kind:U,metadata:q}=O;let W=globalThis.litPropertyMetadata.get(q);if(W===void 0&&globalThis.litPropertyMetadata.set(q,W=new Map),U==="setter"&&((D=Object.create(D)).wrapped=!0),W.set(O.name,D),U==="accessor"){const{name:F}=O;return{set(G){const Y=w.get.call(this);w.set.call(this,G),this.requestUpdate(F,Y,D)},init(G){return G!==void 0&&this.C(F,void 0,D,G),G}}}if(U==="setter"){const{name:F}=O;return function(G){const Y=this[F];w.call(this,G),this.requestUpdate(F,Y,D)}}throw Error("Unsupported decorator location: "+U)};function n(D){return(w,O)=>typeof O=="object"?r$1(D,w,O):((U,q,W)=>{const F=q.hasOwnProperty(W);return q.constructor.createProperty(W,U),F?Object.getOwnPropertyDescriptor(q,W):void 0})(D,w,O)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(D){return n({...D,state:!0,attribute:!1})}var __defProp$8=Object.defineProperty,__getOwnPropDesc$8=Object.getOwnPropertyDescriptor,__decorateClass$8=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$8(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$8(w,O,q),q};let FAQComponent=class extends i{constructor(){super(...arguments),this.openItems=new Set,this.faqData=[{question:"What is Lit and how does it work?",answer:"Lit is a simple library for building fast, lightweight web components. It uses modern web standards and provides a declarative template system with efficient updates."},{question:"How do I get started with Lit components?",answer:"To get started, install Lit via npm, create a class that extends LitElement, use the @customElement decorator, and define your template in the render() method."},{question:"Can I use Lit with other frameworks?",answer:"Yes! Lit components are standard web components, so they work with any framework or vanilla JavaScript. They're framework-agnostic and interoperable."},{question:"What are the performance benefits of Lit?",answer:"Lit provides efficient updates through its reactive update cycle, small bundle size, and leverages browser-native features like Shadow DOM for encapsulation."},{question:"How do I handle events in Lit components?",answer:"You can handle events using the @event syntax in templates, or by adding event listeners in the connectedCallback() lifecycle method."}]}toggleItem(D){this.openItems.has(D)?this.openItems.delete(D):this.openItems.add(D),this.requestUpdate()}render(){return x`
      <div class="faq-container">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        ${this.faqData.map((D,w)=>x`
            <div class="faq-item">
              <button
                class="faq-question ${this.openItems.has(w)?"active":""}"
                @click=${()=>this.toggleItem(w)}
              >
                <span>${D.question}</span>
                <span
                  class="faq-icon ${this.openItems.has(w)?"rotated":""}"
                  >▼</span
                >
              </button>
              <div
                class="faq-answer ${this.openItems.has(w)?"open":""}"
              >
                <div class="faq-answer-text">${D.answer}</div>
              </div>
            </div>
          `)}
      </div>
    `}};FAQComponent.styles=i$3`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .faq-container {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .faq-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 32px;
      color: #2c3e50;
    }

    .faq-item {
      background: white;
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .faq-item:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .faq-question {
      padding: 20px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      border: none;
      width: 100%;
      text-align: left;
      font-size: 1.1rem;
      font-weight: 600;
      color: #2c3e50;
      transition: background-color 0.3s ease;
    }

    .faq-question:hover {
      background-color: #f8f9fa;
    }

    .faq-question.active {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .faq-icon {
      font-size: 1.2rem;
      transition: transform 0.3s ease;
      color: #1976d2;
    }

    .faq-icon.rotated {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      background: #fafafa;
    }

    .faq-answer.open {
      max-height: 200px;
      padding: 20px;
    }

    .faq-answer-text {
      color: #555;
      line-height: 1.6;
      font-size: 1rem;
    }
  `;__decorateClass$8([n({type:Object})],FAQComponent.prototype,"openItems",2);FAQComponent=__decorateClass$8([t("faq-component")],FAQComponent);var __defProp$7=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$7=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$7(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$7(w,O,q),q};let GalleryComponent=class extends i{constructor(){super(...arguments),this.images=[{src:"https://picsum.photos/400/300?random=1",title:"Beautiful Landscape",description:"A stunning view of mountains and valleys"},{src:"https://picsum.photos/400/300?random=2",title:"City Skyline",description:"Modern architecture against the evening sky"},{src:"https://picsum.photos/400/300?random=3",title:"Ocean Waves",description:"Peaceful waves crashing on the shore"},{src:"https://picsum.photos/400/300?random=4",title:"Forest Path",description:"A winding path through ancient trees"},{src:"https://picsum.photos/400/300?random=5",title:"Desert Sunset",description:"Golden hour in the vast desert"},{src:"https://picsum.photos/400/300?random=6",title:"Mountain Peak",description:"Snow-capped peaks reaching for the sky"}],this.selectedImageIndex=-1}openModal(D){this.selectedImageIndex=D}closeModal(){this.selectedImageIndex=-1}render(){return x`
      <div class="gallery-container">
        <h2 class="gallery-title">Photo Gallery</h2>
        <div class="gallery-grid">
          ${this.images.map((D,w)=>x`
            <div class="gallery-item" @click=${()=>this.openModal(w)}>
              <img class="gallery-image" src="${D.src}" alt="${D.title}" />
              <div class="gallery-caption">
                <h3>${D.title}</h3>
                <p>${D.description}</p>
              </div>
            </div>
          `)}
        </div>
      </div>

      <div class="modal ${this.selectedImageIndex>=0?"open":""}" @click=${this.closeModal}>
        ${this.selectedImageIndex>=0?x`
          <div class="modal-content" @click=${D=>D.stopPropagation()}>
            <button class="modal-close" @click=${this.closeModal}>&times;</button>
            <img 
              class="modal-image" 
              src="${this.images[this.selectedImageIndex].src}" 
              alt="${this.images[this.selectedImageIndex].title}"
            />
          </div>
        `:""}
      </div>
    `}};GalleryComponent.styles=i$3`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .gallery-container {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .gallery-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 32px;
      color: #2c3e50;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    .gallery-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .gallery-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .gallery-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .gallery-caption {
      padding: 16px;
    }

    .gallery-caption h3 {
      margin: 0 0 8px 0;
      font-size: 1.2rem;
      color: #2c3e50;
    }

    .gallery-caption p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    .modal.open {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-content {
      max-width: 90%;
      max-height: 90%;
      position: relative;
    }

    .modal-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .modal-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }

    .modal-close:hover {
      opacity: 0.7;
    }
  `;__decorateClass$7([n({type:Array})],GalleryComponent.prototype,"images",2);__decorateClass$7([n({type:Number})],GalleryComponent.prototype,"selectedImageIndex",2);GalleryComponent=__decorateClass$7([t("gallery-component")],GalleryComponent);var __defProp$6=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$6=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$6(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$6(w,O,q),q};let ReviewComponent=class extends i{constructor(){super(...arguments),this.reviews=[{reviewerName:"Yash",rating:5,reviewText:"This is an amazing product! The quality exceeded my expectations and the customer service was outstanding. Highly recommend!",reviewDate:"December 15, 2024"},{reviewerName:"Sarah Johnson",rating:4,reviewText:"Really good product overall. Easy to use and well-designed. Only minor issue was the delivery took a bit longer than expected.",reviewDate:"December 12, 2024"},{reviewerName:"Mike Chen",rating:5,reviewText:"Fantastic! This has made my workflow so much more efficient. The features are exactly what I needed.",reviewDate:"December 10, 2024"},{reviewerName:"Emily Davis",rating:4.5,reviewText:"Great value for money. The interface is intuitive and the performance is solid. Would definitely buy again.",reviewDate:"December 8, 2024"},{reviewerName:"Alex Rodriguez",rating:3,reviewText:"It's okay, does what it's supposed to do. Could use some improvements in the user interface, but overall functional.",reviewDate:"December 5, 2024"}]}renderStars(D){const w=Math.floor(D),O=D-w>=.5,U=5-w-(O?1:0);return x`
      ${Array(w).fill(0).map(()=>x`<span class="star star-gold" aria-hidden="true">★</span>`)}
      ${O?x`<span class="star star-half" aria-hidden="true">★</span>`:""}
      ${Array(U).fill(0).map(()=>x`<span class="star star-empty" aria-hidden="true">☆</span>`)}
      <span class="visually-hidden">Rating: ${D} out of 5 stars</span>
    `}getAverageRating(){if(this.reviews.length===0)return 0;const D=this.reviews.reduce((w,O)=>w+O.rating,0);return Math.round(D/this.reviews.length*10)/10}render(){const D=this.getAverageRating();return x`
      <section class="reviews-container" role="region" aria-label="Customer Reviews">
        <h2 class="reviews-title">Customer Reviews</h2>

        <div class="reviews-summary" aria-live="polite">
          <div class="average-rating">
            ${this.renderStars(D)} <span>${D}/5</span>
          </div>
          <div class="total-reviews">
            Based on ${this.reviews.length} review${this.reviews.length!==1?"s":""}
          </div>
        </div>

        ${this.reviews.map(w=>x`
            <article class="review-item" tabindex="0" aria-label="Review by ${w.reviewerName}">
              <div class="review-header">
                <span class="reviewer-name">${w.reviewerName}</span>
                <span class="rating" aria-label="Rating: ${w.rating} out of 5 stars">
                  ${this.renderStars(w.rating)}
                </span>
              </div>
              <p class="review-text">${w.reviewText}</p>
              <div class="review-date">Posted on ${w.reviewDate}</div>
            </article>
          `)}
      </section>
    `}};ReviewComponent.styles=i$3`
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 30px;
      background: linear-gradient(135deg, #f0f3f8, #ffffff);
      min-height: 100vh;
      color: #444;
    }

    .reviews-container {
      background: white;
      border-radius: 12px;
      padding: 40px 50px;
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.05),
        0 2px 12px rgba(0, 0, 0, 0.07);
      border: none;
    }

    .reviews-title {
      font-size: 2.75rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 50px;
      color: #222;
      letter-spacing: 0.04em;
    }

    .reviews-summary {
      background: #fafafa;
      border-radius: 10px;
      padding: 30px 40px;
      color: #555;
      border: 1px solid #ddd;
      margin-bottom: 48px;
      box-shadow: inset 0 0 8px #ececec;
    }

    .average-rating {
      font-size: 2rem;
      font-weight: 700;
      color: #2a2a2a;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .total-reviews {
      font-size: 1rem;
      color: #666;
      font-weight: 500;
    }

    .review-item {
      background: #fff;
      border-radius: 12px;
      margin-bottom: 28px;
      padding: 28px 36px;
      box-shadow:
        0 3px 8px rgba(0, 0, 0, 0.06);
      border: none;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      cursor: default;
    }

    .review-item:hover {
      box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
    }

    .reviewer-name {
      font-weight: 700;
      color: #2c2c2c;
      font-size: 1.3rem;
    }

    .rating {
      font-size: 1.3rem;
      color: #ffb400;
      display: flex;
      gap: 2px;
    }

    .review-text {
      line-height: 1.7;
      margin-bottom: 20px;
      color: #565656;
      font-size: 1.05rem;
      letter-spacing: 0.01em;
    }

    .review-date {
      font-size: 0.9rem;
      color: #999;
      text-align: right;
      font-weight: 400;
      font-style: italic;
    }

    .star {
      font-size: 1.3rem;
      text-shadow: 0 0 2px #d99e00;
      transition: color 0.3s ease;
    }

    .star-gold {
      color: #ffb400;
    }
    .star-empty {
      color: #ececec;
    }
   
    /* Half star using a Unicode trick: a half filled star is not standard,
       so we use an SVG or CSS trick - here we use a span with a gradient mask */
    .star-half {
      position: relative;
      color: #ffb400;
    }
    .star-half::before {
      content: "★";
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      overflow: hidden;
      color: #ffb400;
      z-index: 1;
      -webkit-text-stroke: 0;
    }
    .star-half::after {
      content: "☆";
      color: #ececec;
    }

    @media (max-width: 768px) {
      :host {
        padding: 30px 16px;
      }

      .reviews-container {
        padding: 30px;
      }

      .reviews-title {
        font-size: 2rem;
        margin-bottom: 38px;
      }

      .review-item {
        padding: 24px 28px;
        margin-bottom: 24px;
      }

      .average-rating {
        font-size: 1.6rem;
      }
    }
  `;__decorateClass$6([n({type:Array})],ReviewComponent.prototype,"reviews",2);ReviewComponent=__decorateClass$6([t("review-component")],ReviewComponent);var __defProp$5=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$5=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$5(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$5(w,O,q),q};let ParticleBg=class extends i{constructor(){super(...arguments),this.particleCount=80,this.connectionDistance=120,this.mouseInfluence=100,this.particles=[],this.animationId=0,this.mouse={x:0,y:0},this.canvasWidth=0,this.canvasHeight=0}firstUpdated(){this.canvas=this.shadowRoot.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.setupCanvas(),this.initParticles(),this.startAnimation(),window.addEventListener("resize",this.handleResize.bind(this)),window.addEventListener("mousemove",this.handleMouseMove.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.animationId&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.handleResize.bind(this)),window.removeEventListener("mousemove",this.handleMouseMove.bind(this))}setupCanvas(){const D=this.getBoundingClientRect();this.canvasWidth=D.width,this.canvasHeight=D.height,this.canvas.width=this.canvasWidth*window.devicePixelRatio,this.canvas.height=this.canvasHeight*window.devicePixelRatio,this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio),this.canvas.style.width=this.canvasWidth+"px",this.canvas.style.height=this.canvasHeight+"px"}initParticles(){this.particles=[];for(let D=0;D<this.particleCount;D++)this.particles.push({x:Math.random()*this.canvasWidth,y:Math.random()*this.canvasHeight,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+1})}handleResize(){this.setupCanvas(),this.initParticles()}handleMouseMove(D){const w=this.getBoundingClientRect();this.mouse.x=D.clientX-w.left,this.mouse.y=D.clientY-w.top}updateParticles(){this.particles.forEach(D=>{const w=this.mouse.x-D.x,O=this.mouse.y-D.y,U=Math.sqrt(w*w+O*O);if(U<this.mouseInfluence){const q=(this.mouseInfluence-U)/this.mouseInfluence,W=Math.atan2(O,w);D.vx+=Math.cos(W)*q*.01,D.vy+=Math.sin(W)*q*.01}D.x+=D.vx,D.y+=D.vy,(D.x<0||D.x>this.canvasWidth)&&(D.vx*=-1,D.x=Math.max(0,Math.min(this.canvasWidth,D.x))),(D.y<0||D.y>this.canvasHeight)&&(D.vy*=-1,D.y=Math.max(0,Math.min(this.canvasHeight,D.y))),D.vx*=.99,D.vy*=.99})}drawParticles(){this.particles.forEach(D=>{this.ctx.beginPath(),this.ctx.arc(D.x,D.y,D.size,0,Math.PI*2),this.ctx.fillStyle="rgba(100, 200, 255, 0.8)",this.ctx.fill(),this.ctx.shadowColor="#64c8ff",this.ctx.shadowBlur=10,this.ctx.fill(),this.ctx.shadowBlur=0})}drawConnections(){for(let D=0;D<this.particles.length;D++)for(let w=D+1;w<this.particles.length;w++){const O=this.particles[D].x-this.particles[w].x,U=this.particles[D].y-this.particles[w].y,q=Math.sqrt(O*O+U*U);if(q<this.connectionDistance){const W=1-q/this.connectionDistance;this.ctx.beginPath(),this.ctx.moveTo(this.particles[D].x,this.particles[D].y),this.ctx.lineTo(this.particles[w].x,this.particles[w].y),this.ctx.strokeStyle=`rgba(100, 200, 255, ${W*.3})`,this.ctx.lineWidth=1,this.ctx.stroke()}}}startAnimation(){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.updateParticles(),this.drawConnections(),this.drawParticles(),this.animationId=requestAnimationFrame(()=>this.startAnimation())}render(){return x`<canvas></canvas>`}};ParticleBg.styles=i$3`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
      overflow: hidden;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `;__decorateClass$5([n({type:Number})],ParticleBg.prototype,"particleCount",2);__decorateClass$5([n({type:Number})],ParticleBg.prototype,"connectionDistance",2);__decorateClass$5([n({type:Number})],ParticleBg.prototype,"mouseInfluence",2);ParticleBg=__decorateClass$5([t("particle-bg")],ParticleBg);var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$4(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$4(w,O,q),q};let MorphShapeComponent=class extends i{constructor(){super(...arguments),this.shape="circle",this.autoMorph=!1,this.morphInterval=2e3,this.interactive=!1,this.loading=!1,this.currentShape="circle",this.isAnimating=!1,this.shapes={circle:"M 50 10 A 40 40 0 1 1 49.99 10 Z",square:"M 10 10 L 90 10 L 90 90 L 10 90 Z",triangle:"M 50 10 L 90 80 L 10 80 Z"}}connectedCallback(){super.connectedCallback(),this.currentShape=this.shape,this.autoMorph&&this.startAutoMorph()}disconnectedCallback(){super.disconnectedCallback(),this.stopAutoMorph()}updated(D){D.has("shape")&&!this.autoMorph&&this.morphToShape(this.shape),D.has("autoMorph")&&(this.autoMorph?this.startAutoMorph():this.stopAutoMorph())}startAutoMorph(){this.stopAutoMorph(),this.morphTimer=window.setInterval(()=>{this.morphToNextShape()},this.morphInterval)}stopAutoMorph(){this.morphTimer&&(clearInterval(this.morphTimer),this.morphTimer=void 0)}morphToNextShape(){const D=["circle","square","triangle"],O=(D.indexOf(this.currentShape)+1)%D.length;this.morphToShape(D[O])}morphToShape(D){this.currentShape===D||this.isAnimating||(this.isAnimating=!0,this.currentShape=D,setTimeout(()=>{this.isAnimating=!1},800),this.dispatchEvent(new CustomEvent("shape-changed",{detail:{shape:D},bubbles:!0})))}handleClick(){this.interactive&&!this.autoMorph&&this.morphToNextShape()}render(){return x`
      <div class="morph-container" @click=${this.handleClick}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            class="morph-path ${this.isAnimating?"animating":""}"
            d=${this.shapes[this.currentShape]}
          />
        </svg>
      </div>
    `}};MorphShapeComponent.styles=i$3`
    :host {
      display: inline-block;
      width: 100px;
      height: 100px;
    }

    .morph-container {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .morph-container:hover {
      transform: scale(1.1);
    }

    svg {
      width: 100%;
      height: 100%;
    }

    .morph-path {
      fill: var(--morph-color, #4a90e2);
      stroke: var(--morph-stroke, #2c5aa0);
      stroke-width: var(--morph-stroke-width, 2);
      transition: fill 0.3s ease, stroke 0.3s ease;
    }

    .morph-path.animating {
      transition: d 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    :host([interactive]) .morph-container:hover .morph-path {
      fill: var(--morph-hover-color, #5ba0f2);
    }

    :host([loading]) .morph-path {
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(0.95);
      }
    }
  `;__decorateClass$4([n({type:String})],MorphShapeComponent.prototype,"shape",2);__decorateClass$4([n({type:Boolean})],MorphShapeComponent.prototype,"autoMorph",2);__decorateClass$4([n({type:Number})],MorphShapeComponent.prototype,"morphInterval",2);__decorateClass$4([n({type:Boolean})],MorphShapeComponent.prototype,"interactive",2);__decorateClass$4([n({type:Boolean})],MorphShapeComponent.prototype,"loading",2);__decorateClass$4([r()],MorphShapeComponent.prototype,"currentShape",2);__decorateClass$4([r()],MorphShapeComponent.prototype,"isAnimating",2);MorphShapeComponent=__decorateClass$4([t("morph-shape")],MorphShapeComponent);var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$3(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$3(w,O,q),q};let FormComponent=class extends i{constructor(){super(...arguments),this.formData={firstName:"",lastName:"",email:"",phone:"",age:"",gender:"",message:"",newsletter:!1},this.submitted=!1,this.error=""}handleInputChange(D,w){this.formData={...this.formData,[D]:w}}handleSubmit(D){if(D.preventDefault(),this.error="",!this.formData.firstName||!this.formData.lastName||!this.formData.email){this.error="Please fill in all required fields (First Name, Last Name, Email)";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)){this.error="Please enter a valid email address";return}console.log("Form submitted:",this.formData),this.submitted=!0,setTimeout(()=>{this.submitted=!1,this.formData={firstName:"",lastName:"",email:"",phone:"",age:"",gender:"",message:"",newsletter:!1}},3e3)}render(){return x`
      <div class="form-container">
        <h2 class="form-title">User Information Form</h2>

        ${this.submitted?x`<div class="success-message">
              Thank you! Your information has been submitted successfully.
            </div>`:""}

        ${this.error?x`<div class="error-message">${this.error}</div>`:""}

        <form @submit=${this.handleSubmit}>
          <div class="form-group">
            <label class="form-label" for="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              class="form-input"
              .value=${this.formData.firstName}
              @input=${D=>this.handleInputChange("firstName",D.target.value)}
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              class="form-input"
              .value=${this.formData.lastName}
              @input=${D=>this.handleInputChange("lastName",D.target.value)}
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email *</label>
            <input
              type="email"
              id="email"
              class="form-input"
              .value=${this.formData.email}
              @input=${D=>this.handleInputChange("email",D.target.value)}
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              class="form-input"
              .value=${this.formData.phone}
              @input=${D=>this.handleInputChange("phone",D.target.value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-input"
              min="1"
              max="120"
              .value=${this.formData.age}
              @input=${D=>this.handleInputChange("age",D.target.value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="gender">Gender</label>
            <select
              id="gender"
              class="form-select"
              .value=${this.formData.gender}
              @change=${D=>this.handleInputChange("gender",D.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea
              id="message"
              class="form-textarea"
              placeholder="Tell us something about yourself..."
              .value=${this.formData.message}
              @input=${D=>this.handleInputChange("message",D.target.value)}
            ></textarea>
          </div>

          <div class="form-group">
            <div class="form-checkbox-group">
              <input
                type="checkbox"
                id="newsletter"
                class="form-checkbox"
                .checked=${this.formData.newsletter}
                @change=${D=>this.handleInputChange("newsletter",D.target.checked)}
              />
              <label class="form-label" for="newsletter">Subscribe to newsletter</label>
            </div>
          </div>

          <button type="submit" class="form-button">Submit Information</button>
        </form>
      </div>
    `}};FormComponent.styles=i$3`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .form-container {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      animation: fadeIn 0.5s ease forwards;
    }

    .form-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 32px;
      color: #2c3e50;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #2c3e50;
      font-size: 1rem;
    }

    .form-input,
    .form-textarea,
    .form-select {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      box-sizing: border-box;
    }

    .form-input:focus,
    .form-textarea:focus,
    .form-select:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-checkbox-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .form-checkbox {
      width: auto;
      margin: 0;
    }

    .form-button {
      background: #1976d2;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
      width: 100%;
      box-shadow: 0 3px 6px rgba(25, 118, 210, 0.4);
    }

    .form-button:hover {
      background: #1565c0;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(21, 101, 192, 0.6);
    }

    .form-button:active {
      transform: translateY(0);
      box-shadow: 0 3px 6px rgba(21, 101, 192, 0.4);
    }

    .success-message,
    .error-message {
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      opacity: 0;
      animation: fadeIn 0.8s forwards;
    }

    .success-message {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .error-message {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `;__decorateClass$3([r()],FormComponent.prototype,"formData",2);__decorateClass$3([r()],FormComponent.prototype,"submitted",2);__decorateClass$3([r()],FormComponent.prototype,"error",2);FormComponent=__decorateClass$3([t("form-component")],FormComponent);var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$2(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$2(w,O,q),q};let ProductComponent=class extends i{constructor(){super(...arguments),this.product={id:"1",title:"Premium Wireless Headphones",description:"Experience crystal-clear audio with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals.",price:"$199.99",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=250&fit=crop"],imageAlts:["Premium wireless headphones","Headphones side view","Headphones detail","Headphones in use"]},this.isFullscreenOpen=!1,this.currentImageIndex=0,this.handleKeyDown=D=>{D.key==="Escape"&&this.isFullscreenOpen&&this.closeFullscreen()}}openFullscreen(){this.isFullscreenOpen=!0,document.body.style.overflow="hidden"}closeFullscreen(){this.isFullscreenOpen=!1,document.body.style.overflow=""}handleOverlayClick(D){D.target===D.currentTarget&&this.closeFullscreen()}nextImage(){this.currentImageIndex<this.product.images.length-1&&this.currentImageIndex++}prevImage(){this.currentImageIndex>0&&this.currentImageIndex--}goToImage(D){this.currentImageIndex=D}openImageFullscreen(D){this.currentImageIndex=D,this.openFullscreen()}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown),document.body.style.overflow=""}render(){const D=this.product.images[this.currentImageIndex],w=this.product.imageAlts?.[this.currentImageIndex]||this.product.title;return x`
      <div class="product-card">
        <div class="image-slider">
          <div 
            class="slider-container" 
            style="transform: translateX(-${this.currentImageIndex*100}%)"
          >
            ${this.product.images.map((O,U)=>x`
              <img
                src="${O}"
                alt="${this.product.imageAlts?.[U]||this.product.title}"
                class="product-image"
                @click=${()=>this.openImageFullscreen(U)}
              />
            `)}
          </div>
          
          ${this.product.images.length>1?x`
            <button 
              class="slider-nav prev" 
              @click=${this.prevImage}
              ?disabled=${this.currentImageIndex===0}
            >
              ‹
            </button>
            <button 
              class="slider-nav next" 
              @click=${this.nextImage}
              ?disabled=${this.currentImageIndex===this.product.images.length-1}
            >
              ›
            </button>
            
            <div class="slider-dots">
              ${this.product.images.map((O,U)=>x`
                <div 
                  class="slider-dot ${U===this.currentImageIndex?"active":""}"
                  @click=${()=>this.goToImage(U)}
                ></div>
              `)}
            </div>
          `:""}
        </div>
        
        <h3 class="product-title">${this.product.title}</h3>
        
        <p class="product-description">${this.product.description}</p>
        
        <div class="product-price">${this.product.price}</div>
        
        <div class="product-actions">
          <button class="btn btn-primary">Add to Cart</button>
          <button class="btn btn-secondary">View Details</button>
        </div>
      </div>

      <div 
        class="fullscreen-overlay ${this.isFullscreenOpen?"open":""}"
        @click=${this.handleOverlayClick}
      >
        <button class="close-button" @click=${this.closeFullscreen}>×</button>
        <img
          src="${D}"
          alt="${w}"
          class="fullscreen-image"
        />
      </div>
    `}};ProductComponent.styles=i$3`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .product-card {
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      max-width: 400px;
      margin: 0 auto;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .image-slider {
      position: relative;
      width: 100%;
      height: 250px;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .slider-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      transition: transform 0.3s ease;
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .product-image:hover {
      transform: scale(1.02);
    }

    .slider-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.8);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: bold;
      color: #2c3e50;
      transition: all 0.3s ease;
      z-index: 2;
    }

    .slider-nav:hover {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-50%) scale(1.1);
    }

    .slider-nav.prev {
      left: 10px;
    }

    .slider-nav.next {
      right: 10px;
    }

    .slider-nav:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .slider-nav:disabled:hover {
      transform: translateY(-50%) scale(1);
      background: rgba(255, 255, 255, 0.8);
    }

    .slider-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 2;
    }

    .slider-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .slider-dot.active {
      background: rgba(255, 255, 255, 0.9);
      transform: scale(1.2);
    }

    .product-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
      margin: 16px 0 8px 0;
      line-height: 1.3;
    }

    .product-description {
      color: #666;
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .product-price {
      font-size: 1.25rem;
      font-weight: bold;
      color: #e74c3c;
      margin-bottom: 16px;
    }

    .product-actions {
      display: flex;
      gap: 12px;
    }

    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      flex: 1;
    }

    .btn-primary {
      background: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background: #2980b9;
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: #ecf0f1;
      color: #2c3e50;
      border: 2px solid #bdc3c7;
    }

    .btn-secondary:hover {
      background: #d5dbdb;
      border-color: #95a5a6;
    }

    .fullscreen-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .fullscreen-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .fullscreen-image {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 8px;
      transform: scale(0.8);
      transition: transform 0.3s ease;
    }

    .fullscreen-overlay.open .fullscreen-image {
      transform: scale(1);
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      font-size: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .close-button:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .product-card {
      animation: fadeIn 0.5s ease forwards;
    }
  `;__decorateClass$2([n({type:Object})],ProductComponent.prototype,"product",2);__decorateClass$2([r()],ProductComponent.prototype,"isFullscreenOpen",2);__decorateClass$2([r()],ProductComponent.prototype,"currentImageIndex",2);ProductComponent=__decorateClass$2([t("product-component")],ProductComponent);var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc$1(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp$1(w,O,q),q};let ChatbotComponent=class extends i{constructor(){super(...arguments),this.isOpen=!1,this.messages=[{id:"1",text:"Hello! I'm your AI assistant. I'm here to help you with any questions or tasks you might have. How can I assist you today?",isUser:!1,timestamp:new Date}],this.currentMessage="",this.isTyping=!1,this.messageId=2}toggleChat(){this.isOpen=!this.isOpen,"vibrate"in navigator&&navigator.vibrate(50)}handleInputChange(D){const w=D.target;this.currentMessage=w.value}handleKeyPress(D){D.key==="Enter"&&!D.shiftKey&&(D.preventDefault(),this.sendMessage())}async sendMessage(){if(!this.currentMessage.trim())return;const D={id:this.messageId.toString(),text:this.currentMessage,isUser:!0,timestamp:new Date};this.messages=[...this.messages,D],this.messageId++;const w=this.currentMessage;this.currentMessage="",this.isTyping=!0;const O=800+Math.random()*1200;setTimeout(()=>{this.isTyping=!1;const U=this.generateBotResponse(w),q={id:this.messageId.toString(),text:U,isUser:!1,timestamp:new Date};this.messages=[...this.messages,q],this.messageId++,this.updateComplete.then(()=>{const W=this.shadowRoot?.querySelector(".messages-container");W&&W.scrollTo({top:W.scrollHeight,behavior:"smooth"})})},O)}generateBotResponse(userMessage){const message=userMessage.toLowerCase();if(this.matchesPattern(message,["hello","hi","hey","good morning","good afternoon","good evening"])){const D=["Hello! 👋 I'm your AI assistant, ready to help you with anything you need. How can I assist you today?","Hi there! 😊 I'm here to make your day easier. What would you like to explore or discuss?","Hey! Great to meet you! I'm your AI companion, equipped to help with questions, tasks, or just a friendly chat. What's on your mind?"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["help","support","assist","guide"])){const D=[`I'm here to help! 🛠️ I can assist with:
• Product information and recommendations
• Technical questions and troubleshooting
• General knowledge and research
• Creative writing and brainstorming
• Math and calculations
• Language translation

What specific area do you need help with?`,"Absolutely! I'm your AI assistant and I'm here to support you. I can help with information, problem-solving, creative tasks, and much more. What would you like to work on?","I'd love to help! I'm designed to assist with a wide range of topics. Just let me know what you're looking for, and I'll do my best to provide useful information and guidance."];return this.getRandomResponse(D)}if(this.matchesPattern(message,["product","buy","purchase","shop","store","item"])){const D=[`Great! I'd be happy to help you find the perfect product. 🛍️ Our collection includes:
• Electronics and gadgets
• Fashion and accessories
• Home and lifestyle items
• Books and media
• Sports and outdoor gear

What category interests you, or do you have something specific in mind?`,"Excellent choice! I can help you discover amazing products. What type of item are you looking for? I can provide recommendations based on your needs and preferences.","Shopping time! 🎉 I'm here to help you find exactly what you need. Tell me more about what you're looking for, and I'll guide you to the best options."];return this.getRandomResponse(D)}if(this.matchesPattern(message,["price","cost","expensive","cheap","affordable","budget"])){const D=["I'd be happy to help with pricing information! 💰 Our products range from budget-friendly options to premium selections. What specific item or category are you interested in?","Great question about pricing! We offer competitive prices across all our products. Could you tell me what you're looking for so I can provide specific pricing details?","Pricing is important! 💡 We have options for every budget. What product or service are you interested in? I'll help you find the best value for your money."];return this.getRandomResponse(D)}if(this.matchesPattern(message,["code","programming","developer","software","app","website","html","css","javascript","python","react","vue","angular"])){const D=[`Ah, a fellow developer! 👨‍💻 I can help with:
• Code review and debugging
• Best practices and architecture
• Framework-specific questions
• Algorithm explanations
• Web development guidance

What programming challenge are you facing?`,"Programming is my jam! 💻 I can assist with coding questions, explain concepts, help debug issues, or discuss software architecture. What would you like to work on?","Tech talk! 🚀 I'm well-versed in programming and can help with code, debugging, best practices, and technical concepts. What's your programming question?"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["weather","temperature","forecast","time","date","today","tomorrow"])){const D=["I'd love to help with weather information! 🌤️ However, I don't have real-time access to current weather data. You might want to check a weather app or website for the most accurate forecast for your location.","Weather questions! 🌦️ While I can't provide real-time weather data, I can help you understand weather patterns, climate information, or suggest the best weather apps to use.","Time and weather! ⏰ For current time and weather, you'll want to check your device's clock and a weather service. But I'm happy to help with other questions!"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["calculate","math","equation","solve","plus","minus","multiply","divide","+","-","*","/"])){try{const mathExpression=message.replace(/[^0-9+\-*/().\s]/g,"");if(mathExpression.match(/^[0-9+\-*/().\s]+$/)){const result=eval(mathExpression);return`Let me calculate that for you! 🧮

${mathExpression} = ${result}`}}catch(D){}return"I can help with math calculations! 🧮 Just type your equation (like '2 + 2' or '10 * 5') and I'll solve it for you."}if(this.matchesPattern(message,["write","story","poem","creative","content","blog","article"])){const D=[`Creative writing is one of my favorite things! ✍️ I can help you with:
• Story ideas and plot development
• Poetry and creative writing
• Blog posts and articles
• Marketing copy
• Character development

What type of creative project are you working on?`,"Let's get creative! 🎨 I love helping with writing projects. Whether it's a story, poem, article, or any other content, I'm here to inspire and assist. What would you like to create?","Creative writing time! ✨ I can help brainstorm ideas, develop characters, write poetry, or assist with any writing project. What's your creative vision?"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["health","fitness","exercise","diet","nutrition","workout","gym"])){const D=[`Health and wellness are so important! 💪 I can provide general information about:
• Exercise and fitness tips
• Nutrition and healthy eating
• Wellness practices
• Mental health support

Remember, I'm not a medical professional, so always consult with healthcare providers for medical advice.`,"Great focus on health! 🏃‍♂️ I can share general wellness information and tips, but for specific medical advice, please consult with healthcare professionals. What wellness topic interests you?","Health is wealth! 🌟 I can provide general fitness and nutrition information, but remember to consult healthcare professionals for medical advice. What health topic would you like to explore?"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["travel","vacation","trip","destination","hotel","flight","visit"])){const D=[`Travel planning is exciting! ✈️ I can help with:
• Destination recommendations
• Travel tips and advice
• Cultural information
• General travel planning

Where are you thinking of traveling, or what kind of trip are you planning?`,"Adventure awaits! 🗺️ I love helping with travel planning. I can provide destination insights, travel tips, and cultural information. What's your travel dream?","Let's plan your next adventure! 🌍 I can help with travel recommendations, tips, and destination information. Where would you like to explore?"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["movie","film","tv","show","book","music","game","entertainment"])){const D=[`Entertainment is my jam! 🎬 I can help with:
• Movie and TV show recommendations
• Book suggestions
• Music recommendations
• Gaming discussions
• Entertainment news and trends

What type of entertainment are you interested in?`,"Let's talk entertainment! 🎵 I can suggest movies, books, music, and more based on your preferences. What are you in the mood for?","Entertainment time! 🎮 I love discussing movies, books, music, and games. What's your favorite genre or what are you looking to discover?"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["thank","thanks","appreciate","grateful"])){const D=["You're absolutely welcome! 😊 It's my pleasure to help. Is there anything else I can assist you with today?","Thank you for the kind words! 🙏 I'm here whenever you need help or just want to chat. What else can I do for you?","You're very welcome! 💖 I enjoy helping and chatting with you. Feel free to ask me anything else!"];return this.getRandomResponse(D)}if(this.matchesPattern(message,["bye","goodbye","see you","farewell","later"])){const D=["Goodbye! 👋 It's been wonderful chatting with you. Feel free to return anytime - I'm always here and ready to help. Have a fantastic day!","See you later! 😊 Thanks for the great conversation. Don't hesitate to come back if you need anything. Take care!","Farewell! 🌟 It's been a pleasure helping you today. I'll be here when you need me again. Have an amazing day ahead!"];return this.getRandomResponse(D)}if(message.includes("?")||this.matchesPattern(message,["what","how","why","when","where","who","which"])){const D=["That's a great question! 🤔 I'd be happy to help you find the answer. Could you provide a bit more context so I can give you the most helpful response?","Interesting question! 💭 I'm here to help you explore and find answers. What specific information are you looking for?","I love curious minds! 🧠 That's a thoughtful question. Let me help you find the information you need. Could you tell me more about what you're trying to understand?"];return this.getRandomResponse(D)}const defaultResponses=["That's an interesting topic! 🤔 I'd love to help you explore this further. Could you tell me more about what you're looking for or what specific information would be most helpful?","I appreciate you sharing that with me! 💭 I think I can provide some valuable insights. What aspect of this would you like to focus on or learn more about?","That's fascinating! 🌟 I'd be happy to help you dive deeper into this topic. What specific questions do you have or what would you like to know more about?","Great point! 💡 I can help you explore this topic and provide useful information. What would be most helpful for you right now?","I understand what you're getting at! 🎯 Let me help you find the information or assistance you need. What's your main goal or question here?","That's a wonderful topic to discuss! ✨ I'm here to help you learn more and find the answers you're looking for. What specific aspect interests you most?"];return this.getRandomResponse(defaultResponses)}matchesPattern(D,w){return w.some(O=>D.includes(O))}getRandomResponse(D){return D[Math.floor(Math.random()*D.length)]}render(){return x`
      <div class="chatbot-container">
        <button 
          class="chat-toggle ${this.isOpen?"hidden":""}" 
          @click=${this.toggleChat}
          aria-label="${this.isOpen?"Close chat":"Open chat"}"
          role="button"
        >
          💬
        </button>
        
        <div class="chat-window ${this.isOpen?"open":""}" role="dialog" aria-label="Chat window">
          <div class="chat-header">
            <div>
              <div class="chat-title">AI Assistant</div>
              <div class="chat-status">Online • Powered by AI</div>
            </div>
            <button 
              class="close-btn" 
              @click=${this.toggleChat}
              aria-label="Close chat"
            >✕</button>
          </div>
          
          <div class="messages-container" role="log" aria-live="polite">
            ${this.messages.map(D=>x`
              <div 
                class="message ${D.isUser?"user":"bot"}"
                role="${D.isUser?"user":"assistant"}"
                aria-label="${D.isUser?"Your message":"Assistant message"}"
              >
                ${D.text}
              </div>
            `)}
            
            ${this.isTyping?x`
              <div class="typing-indicator" aria-label="Assistant is typing">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
              </div>
            `:""}
          </div>
          
          <div class="input-container">
            <input
              type="text"
              class="message-input"
              placeholder="Ask me anything..."
              .value=${this.currentMessage}
              @input=${this.handleInputChange}
              @keypress=${this.handleKeyPress}
              aria-label="Type your message"
              autocomplete="off"
            />
            <button
              class="send-btn"
              @click=${this.sendMessage}
              ?disabled=${!this.currentMessage.trim()}
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    `}};ChatbotComponent.styles=i$3`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
    }

    .chat-toggle {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
      border: none;
      color: white;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 
        0 8px 32px rgba(30, 58, 138, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
    }

    .chat-toggle::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .chat-toggle:hover {
      transform: scale(1.05) translateY(-2px);
      box-shadow: 
        0 12px 48px rgba(30, 58, 138, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    .chat-toggle:hover::before {
      transform: translateX(100%);
    }

    .chat-toggle:active {
      transform: scale(0.98);
    }

    .chat-toggle.hidden {
      opacity: 0;
      visibility: hidden;
      transform: scale(0.8);
      pointer-events: none;
    }

    .chat-window {
      position: fixed;
      bottom: 16px;
      right: 24px;
      width: 380px;
      height: 560px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px) saturate(180%);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 32px 64px rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: bottom;
      pointer-events: none;
    }

    .chat-window.open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    .chat-header {
      background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
      color: white;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
    }

    .chat-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%);
      animation: shimmer 3s infinite;
    }

    .chat-title {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: -0.025em;
      position: relative;
      z-index: 1;
    }

    .chat-status {
      font-size: 12px;
      opacity: 0.8;
      font-weight: 400;
      position: relative;
      z-index: 1;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 18px;
      cursor: pointer;
      padding: 8px;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      transition: all 0.3s ease;
      position: relative;
      z-index: 1;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }

    .messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      scroll-behavior: smooth;
    }

    .messages-container::-webkit-scrollbar {
      width: 6px;
    }

    .messages-container::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 3px;
    }

    .messages-container::-webkit-scrollbar-thumb {
      background: rgba(59, 130, 246, 0.3);
      border-radius: 3px;
    }

    .message {
      max-width: 85%;
      padding: 16px 20px;
      border-radius: 20px;
      word-wrap: break-word;
      animation: messageSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      font-size: 15px;
      line-height: 1.5;
      letter-spacing: -0.01em;
    }

    .message.user {
      align-self: flex-end;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
    }

    .message.bot {
      align-self: flex-start;
      background: rgba(248, 250, 252, 0.8);
      backdrop-filter: blur(10px);
      color: #1e293b;
      border-bottom-left-radius: 6px;
      border: 1px solid rgba(226, 232, 240, 0.5);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .input-container {
      padding: 20px 24px 24px;
      border-top: 1px solid rgba(226, 232, 240, 0.5);
      display: flex;
      gap: 12px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
    }

    .message-input {
      flex: 1;
      padding: 16px 20px;
      border: 2px solid rgba(226, 232, 240, 0.5);
      border-radius: 16px;
      outline: none;
      font-size: 15px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .message-input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      background: white;
    }

    .message-input::placeholder {
      color: #94a3b8;
    }

    .send-btn {
      padding: 16px 24px;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      border: none;
      border-radius: 16px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 600;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
      position: relative;
      overflow: hidden;
    }

    .send-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .send-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 24px rgba(30, 58, 138, 0.4);
    }

    .send-btn:hover::before {
      transform: translateX(100%);
    }

    .send-btn:active {
      transform: translateY(0);
    }

    .send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: 0 2px 8px rgba(30, 58, 138, 0.2);
    }

    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px 20px;
      background: rgba(248, 250, 252, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border-bottom-left-radius: 6px;
      align-self: flex-start;
      max-width: 100px;
      border: 1px solid rgba(226, 232, 240, 0.5);
      animation: messageSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .typing-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      animation: typing 1.4s infinite ease-in-out;
    }

    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes messageSlide {
      from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes typing {
      0%, 80%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
      }
      40% {
        transform: scale(1.2);
        opacity: 1;
      }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .chat-window {
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .message.bot {
        background: rgba(30, 41, 59, 0.8);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .message-input {
        background: rgba(30, 41, 59, 0.9);
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: #e2e8f0;
      }

      .message-input:focus {
        background: rgba(30, 41, 59, 1);
        border-color: #3b82f6;
      }

      .message-input::placeholder {
        color: #64748b;
      }

      .input-container {
        background: rgba(15, 23, 42, 0.8);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .typing-indicator {
        background: rgba(30, 41, 59, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    @media (max-width: 480px) {
      .chatbot-container {
        bottom: 16px;
        right: 16px;
      }

      .chat-toggle {
        width: 64px;
        height: 64px;
        font-size: 24px;
      }

      .chat-window {
        width: 100vw;
        height: 100dvh;
        bottom: 0;
        right: 0;
        transform: translateY(100%);
        border-radius: 0;
        transition: none;
      }

      .chat-window.open {
        transform: translateY(0);
        transition: none;
      }

      .chat-header {
        padding: 16px 20px;
      }

      .messages-container {
        padding: 20px;
      }

      .input-container {
        padding: 16px 20px 20px;
      }

      .chat-toggle,
      .message,
      .send-btn {
        transition: none;
        animation: none;
      }

      .typing-dot {
        animation: none;
      }
    }

    /* Accessibility improvements */
    @media (prefers-reduced-motion: reduce) {
      .chat-toggle,
      .chat-window,
      .message,
      .send-btn {
        transition: none;
        animation: none;
      }

      .typing-dot {
        animation: none;
      }
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      .chat-window {
        border: 2px solid;
      }

      .message-input:focus {
        outline: 2px solid;
      }
    }
  `;__decorateClass$1([r()],ChatbotComponent.prototype,"isOpen",2);__decorateClass$1([r()],ChatbotComponent.prototype,"messages",2);__decorateClass$1([r()],ChatbotComponent.prototype,"currentMessage",2);__decorateClass$1([r()],ChatbotComponent.prototype,"isTyping",2);ChatbotComponent=__decorateClass$1([t("chatbot-component")],ChatbotComponent);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(D,w,O,U)=>{for(var q=U>1?void 0:U?__getOwnPropDesc(w,O):w,W=D.length-1,F;W>=0;W--)(F=D[W])&&(q=(U?F(w,O,q):F(q))||q);return U&&q&&__defProp(w,O,q),q};let ProductImageSlider=class extends i{constructor(){super(...arguments),this.activeImageIndex=0,this.openDetails=new Set,this.showAddedProductUI=!1,this.addedProductData=null,this.images=["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop","https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop","https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop&crop=face"],this.autoHideTimer=null}selectImage(D){this.activeImageIndex=D}toggleDetail(D){this.openDetails.has(D)?this.openDetails.delete(D):this.openDetails.add(D),this.requestUpdate()}handleProductAdded(D){this.addedProductData=D.detail,this.showAddedProductUI=!0,this.autoHideTimer=setTimeout(()=>{this.showAddedProductUI&&(this.showAddedProductUI=!1)},8e3)}handleNotificationMouseEnter(){this.autoHideTimer&&(clearTimeout(this.autoHideTimer),this.autoHideTimer=null)}handleNotificationMouseLeave(){this.showAddedProductUI&&(this.autoHideTimer=setTimeout(()=>{this.showAddedProductUI=!1},3e3))}handleCloseNotification(){this.showAddedProductUI=!1}handleViewCart(){console.log("Navigate to cart page")}handleContinueShopping(){this.showAddedProductUI=!1}render(){return x`
            <div class="product-container">
                <div class="image-section">
                    <div class="main-image-container">
                        <img 
                            class="main-image" 
                            src="${this.images[this.activeImageIndex]}" 
                            alt="Product image"
                        />
                    </div>
                    <div class="thumbnail-container">
                        ${this.images.map((D,w)=>x`
                            <div 
                                class="thumbnail ${w===this.activeImageIndex?"active":""}"
                                @click="${()=>this.selectImage(w)}"
                            >
                                <img src="${D}" alt="Product thumbnail ${w+1}" />
                            </div>
                        `)}
                    </div>
                </div>

                <div class="product-info">
                    <h1 class="product-title">Ottercat Cowboy Baby Toy</h1>
                    
                    <div class="price-container">
                        <span class="current-price">$1,299.00</span>
                        <span class="original-price">$2,099.00</span>
                    </div>

                    <div class="rating-container">
                        <div class="stars">
                            ${Array(5).fill(0).map(D=>x`
                                <svg class="star" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            `)}
                        </div>
                        <span class="rating-text">4.8 (128 reviews)</span>
                    </div>

                    <add-to-cart-button 
                        product-id="ottercat-cowboy-toy"
                        product-name="Ottercat Cowboy Baby Toy"
                        price="1299.00"
                        quantity="1"
                        @product-added="${this.handleProductAdded}"
                    ></add-to-cart-button>

                    <div class="product-details">
                        <div class="detail-section">
                            <div class="detail-header" @click="${()=>this.toggleDetail("description")}">
                                <span>Description</span>
                                <svg class="chevron ${this.openDetails.has("description")?"rotated":""}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="detail-content ${this.openDetails.has("description")?"open":""}">
                                This adorable cowboy-themed baby toy features soft, safe materials and engaging textures perfect for little hands. Designed to stimulate sensory development while providing hours of fun.
                            </div>
                        </div>

                        <div class="detail-section">
                            <div class="detail-header" @click="${()=>this.toggleDetail("specs")}">
                                <span>Pairs well with</span>
                                <svg class="chevron ${this.openDetails.has("specs")?"rotated":""}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="detail-content ${this.openDetails.has("specs")?"open":""}">
                                • Baby play mats and activity gyms<br>
                                • Other themed character toys<br>
                                • Soft building blocks<br>
                                • Musical toys and rattles
                            </div>
                        </div>
                                         </div>
                 </div>
             </div>

             <div class="notification-container">
                 <added-product-ui
                     ?show="${this.showAddedProductUI}"
                    .productId="${this.addedProductData?.productId||""}"
                    .productName="${this.addedProductData?.productName||""}"
                    .productImage="${this.images[0]}"
                    .price="${this.addedProductData?.price||0}"
                    .quantity="${this.addedProductData?.quantity||1}"
                    .cartTotal="${(this.addedProductData?.price||0)*(this.addedProductData?.quantity||1)}"
                    .cartItemCount="${this.addedProductData?.quantity||1}"
                    @close="${this.handleCloseNotification}"
                    @view-cart="${this.handleViewCart}"
                    @continue-shopping="${this.handleContinueShopping}"
                    @mouseenter="${this.handleNotificationMouseEnter}"
                    @mouseleave="${this.handleNotificationMouseLeave}"
                ></added-product-ui>
             </div>
         `}};ProductImageSlider.styles=i$3`
        :host {
            display: block;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 20px 0;
        }

        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .product-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: start;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .image-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .main-image-container {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            border-radius: 20px;
            overflow: hidden;
            background: linear-gradient(145deg, #f0f4ff, #e6f3ff);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .main-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-image:hover {
            transform: scale(1.08);
        }

        .thumbnail-container {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding: 8px 0;
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 transparent;
        }

        .thumbnail-container::-webkit-scrollbar {
            height: 6px;
        }

        .thumbnail-container::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 3px;
        }

        .thumbnail-container::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
        }

        .thumbnail {
            flex-shrink: 0;
            width: 90px;
            height: 90px;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            border: 3px solid transparent;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background: white;
        }

        .thumbnail.active {
            border-color: #8b5cf6;
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
            transform: translateY(-2px);
        }

        .thumbnail:hover {
            border-color: #a78bfa;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
        }

        .thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .thumbnail:hover img {
            transform: scale(1.1);
        }

        .product-info {
            padding: 20px 0;
        }

        .product-title {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(135deg, #1e293b, #475569);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .price-container {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
            padding: 15px;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            border-radius: 16px;
            border: 1px solid #e2e8f0;
        }

        .current-price {
            font-size: 24px;
            font-weight: 800;
            background: linear-gradient(135deg, #059669, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .original-price {
            font-size: 18px;
            color: #94a3b8;
            text-decoration: line-through;
            font-weight: 500;
        }

        .rating-container {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 30px;
            padding: 12px 16px;
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            border-radius: 12px;
            border: 1px solid #f59e0b;
        }

        .stars {
            display: flex;
            gap: 3px;
        }

        .star {
            width: 18px;
            height: 18px;
            color: #f59e0b;
            filter: drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3));
        }

        .rating-text {
            font-size: 15px;
            color: #92400e;
            font-weight: 600;
        }



        .product-details {
            border-top: 2px solid #e2e8f0;
            padding-top: 25px;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            border-radius: 16px;
            padding: 20px;
            margin-top: 20px;
        }

        .detail-section {
            margin-bottom: 20px;
        }

        .detail-section:last-child {
            margin-bottom: 0;
        }

        .detail-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            cursor: pointer;
            font-weight: 600;
            color: #374151;
            background: white;
            border-radius: 12px;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .detail-header:hover {
            color: #1f2937;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .detail-content {
            padding: 20px;
            color: #64748b;
            font-size: 15px;
            line-height: 1.6;
            display: none;
            background: white;
            border-radius: 0 0 12px 12px;
            margin-top: 2px;
            border: 1px solid #e2e8f0;
            border-top: none;
        }

        .detail-content.open {
            display: block;
            animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .chevron {
            width: 18px;
            height: 18px;
            transition: transform 0.3s ease;
            color: #8b5cf6;
        }

        .chevron.rotated {
            transform: rotate(180deg);
        }

        @media (max-width: 768px) {
            .product-container {
                grid-template-columns: 1fr;
                gap: 30px;
                padding: 20px;
                margin: 10px;
            }

            .product-title {
                font-size: 24px;
            }

            .current-price {
                font-size: 20px;
            }

            .thumbnail {
                width: 70px;
                height: 70px;
            }
        }
    `;__decorateClass([r()],ProductImageSlider.prototype,"activeImageIndex",2);__decorateClass([r()],ProductImageSlider.prototype,"openDetails",2);__decorateClass([r()],ProductImageSlider.prototype,"showAddedProductUI",2);__decorateClass([r()],ProductImageSlider.prototype,"addedProductData",2);ProductImageSlider=__decorateClass([t("product-image-slider")],ProductImageSlider);let AddToCartButton=class extends i{constructor(){super(...arguments),this.isLoading=!1,this.isSuccess=!1,this.isDisabled=!1,this.productId="",this.productName="",this.price=0,this.quantity=1}async handleAddToCart(){if(!(this.isLoading||this.isDisabled)){this.isLoading=!0;try{await new Promise(D=>setTimeout(D,1500)),console.log("Added to cart:",{productId:this.productId,productName:this.productName,price:this.price,quantity:this.quantity}),this.isSuccess=!0,this.dispatchEvent(new CustomEvent("product-added",{detail:{productId:this.productId,productName:this.productName,price:this.price,quantity:this.quantity}})),setTimeout(()=>{this.isSuccess=!1},2e3)}catch(D){console.error("Failed to add to cart:",D)}finally{this.isLoading=!1}}}render(){const D=this.isSuccess?"Added to Cart! ✓":this.isLoading?x`<span class="loading">Adding... <div class="spinner"></div></span>`:"Add to Cart";return x`
            <button 
                class="add-to-cart-btn ${this.isSuccess?"success":""}"
                @click="${this.handleAddToCart}"
                ?disabled="${this.isLoading||this.isDisabled}"
            >
                ${D}
            </button>
        `}};AddToCartButton.styles=i$3`
        :host {
            display: block;
        }

        .add-to-cart-btn {
            width: 100%;
            padding: 18px 24px;
            background: linear-gradient(135deg, #8b5cf6, #a855f7);
            color: white;
            border: none;
            border-radius: 16px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin-bottom: 25px;
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
            position: relative;
            overflow: hidden;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .add-to-cart-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .add-to-cart-btn:hover::before {
            left: 100%;
        }

        .add-to-cart-btn:hover {
            background: linear-gradient(135deg, #7c3aed, #9333ea);
            transform: translateY(-2px);
            box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
        }

        .add-to-cart-btn:active {
            transform: translateY(0);
        }

        .add-to-cart-btn:disabled {
            background: linear-gradient(135deg, #9ca3af, #6b7280);
            cursor: not-allowed;
            transform: none;
            box-shadow: 0 4px 12px rgba(156, 163, 175, 0.3);
        }

        .add-to-cart-btn:disabled:hover {
            transform: none;
            box-shadow: 0 4px 12px rgba(156, 163, 175, 0.3);
        }

        .add-to-cart-btn:disabled::before {
            display: none;
        }

        .loading {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .success {
            background: linear-gradient(135deg, #059669, #10b981) !important;
        }

        .success:hover {
            background: linear-gradient(135deg, #047857, #059669) !important;
        }

        @media (max-width: 768px) {
            .add-to-cart-btn {
                padding: 16px 20px;
                font-size: 16px;
            }
        }
    `;__decorateClass([r()],AddToCartButton.prototype,"isLoading",2);__decorateClass([r()],AddToCartButton.prototype,"isSuccess",2);__decorateClass([r()],AddToCartButton.prototype,"isDisabled",2);__decorateClass([n({type:String})],AddToCartButton.prototype,"productId",2);__decorateClass([n({type:String})],AddToCartButton.prototype,"productName",2);__decorateClass([n({type:Number})],AddToCartButton.prototype,"price",2);__decorateClass([n({type:Number})],AddToCartButton.prototype,"quantity",2);AddToCartButton=__decorateClass([t("add-to-cart-button")],AddToCartButton);let AddedProductUI=class extends i{constructor(){super(...arguments),this.productId="",this.productName="",this.productImage="",this.price=0,this.quantity=1,this.show=!1,this.cartTotal=0,this.cartItemCount=0}handleClose(){this.show=!1,this.dispatchEvent(new CustomEvent("close"))}handleViewCart(){console.log("Navigate to cart"),this.dispatchEvent(new CustomEvent("view-cart"))}handleContinueShopping(){this.show=!1,this.dispatchEvent(new CustomEvent("continue-shopping"))}render(){return this.show?x`
            <div class="notification">
                <button class="close-btn" @click="${this.handleClose}">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                </button>

                <div class="header">
                    <div class="success-icon">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <h3 class="title">Added to Cart!</h3>
                </div>

                <div class="product-info">
                    <img 
                        class="product-image" 
                        src="${this.productImage}" 
                        alt="${this.productName}"
                        @error="${D=>{const w=D.target;w.src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&h=100&fit=crop"}}"
                    />
                    <div class="product-details">
                        <p class="product-name">${this.productName}</p>
                        <p class="product-price">$${this.price.toFixed(2)} × ${this.quantity}</p>
                    </div>
                </div>

                <div class="cart-summary">
                    <div class="cart-summary-row">
                        <span>Items in cart:</span>
                        <span>${this.cartItemCount}</span>
                    </div>
                    <div class="cart-summary-row">
                        <span>Subtotal:</span>
                        <span>$${this.cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                <div class="actions">
                    <button class="btn btn-secondary" @click="${this.handleContinueShopping}">
                        Continue Shopping
                    </button>
                    <button class="btn btn-primary" @click="${this.handleViewCart}">
                        View Cart
                    </button>
                </div>
            </div>
        `:x``}};AddedProductUI.styles=i$3`
        :host {
            display: block;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .notification {
            background: linear-gradient(135deg, #059669, #10b981);
            color: white;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(5, 150, 105, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            max-width: 350px;
            animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            cursor: default;
        }

        .notification::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #34d399, #6ee7b7, #34d399);
            animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100%) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }

        .header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
        }

        .success-icon {
            width: 24px;
            height: 24px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .title {
            font-size: 16px;
            font-weight: 700;
            margin: 0;
        }

        .product-info {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 15px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
        }

        .product-image {
            width: 50px;
            height: 50px;
            border-radius: 8px;
            object-fit: cover;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .product-details {
            flex: 1;
        }

        .product-name {
            font-size: 14px;
            font-weight: 600;
            margin: 0 0 4px 0;
            line-height: 1.3;
        }

        .product-price {
            font-size: 13px;
            opacity: 0.9;
            margin: 0;
        }

        .actions {
            display: flex;
            gap: 8px;
        }

        .btn {
            flex: 1;
            padding: 10px 16px;
            border: none;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            text-align: center;
            display: inline-block;
        }

        .btn-primary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-primary:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-1px);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-1px);
        }

        .close-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .close-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }

        .cart-summary {
            margin-top: 12px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            font-size: 13px;
        }

        .cart-summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4px;
        }

        .cart-summary-row:last-child {
            margin-bottom: 0;
            font-weight: 600;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 8px;
            margin-top: 8px;
        }

        @media (max-width: 768px) {
            :host {
                top: 10px;
                right: 10px;
                left: 10px;
            }

            .notification {
                max-width: none;
            }
        }
    `;__decorateClass([n({type:String})],AddedProductUI.prototype,"productId",2);__decorateClass([n({type:String})],AddedProductUI.prototype,"productName",2);__decorateClass([n({type:String})],AddedProductUI.prototype,"productImage",2);__decorateClass([n({type:Number})],AddedProductUI.prototype,"price",2);__decorateClass([n({type:Number})],AddedProductUI.prototype,"quantity",2);__decorateClass([n({type:Boolean})],AddedProductUI.prototype,"show",2);__decorateClass([n({type:Number})],AddedProductUI.prototype,"cartTotal",2);__decorateClass([n({type:Number})],AddedProductUI.prototype,"cartItemCount",2);AddedProductUI=__decorateClass([t("added-product-ui")],AddedProductUI);
