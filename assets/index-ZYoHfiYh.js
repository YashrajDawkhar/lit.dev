(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))W(q);new MutationObserver(q=>{for(const U of q)if(U.type==="childList")for(const F of U.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&W(F)}).observe(document,{childList:!0,subtree:!0});function D(q){const U={};return q.integrity&&(U.integrity=q.integrity),q.referrerPolicy&&(U.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?U.credentials="include":q.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function W(q){if(q.ep)return;q.ep=!0;const U=D(q);fetch(q.href,U)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2=globalThis,e$2=t$2.ShadowRoot&&(t$2.ShadyCSS===void 0||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3=class{constructor(w,D,W){if(this._$cssResult$=!0,W!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this.t=D}get styleSheet(){let w=this.o;const D=this.t;if(e$2&&w===void 0){const W=D!==void 0&&D.length===1;W&&(w=o$4.get(D)),w===void 0&&((this.o=w=new CSSStyleSheet).replaceSync(this.cssText),W&&o$4.set(D,w))}return w}toString(){return this.cssText}};const r$4=O=>new n$3(typeof O=="string"?O:O+"",void 0,s$2),i$3=(O,...w)=>{const D=O.length===1?O[0]:w.reduce((W,q,U)=>W+(F=>{if(F._$cssResult$===!0)return F.cssText;if(typeof F=="number")return F;throw Error("Value passed to 'css' function must be a 'css' function result: "+F+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(q)+O[U+1],O[0]);return new n$3(D,O,s$2)},S$1=(O,w)=>{if(e$2)O.adoptedStyleSheets=w.map(D=>D instanceof CSSStyleSheet?D:D.styleSheet);else for(const D of w){const W=document.createElement("style"),q=t$2.litNonce;q!==void 0&&W.setAttribute("nonce",q),W.textContent=D.cssText,O.appendChild(W)}},c$2=e$2?O=>O:O=>O instanceof CSSStyleSheet?(w=>{let D="";for(const W of w.cssRules)D+=W.cssText;return r$4(D)})(O):O;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(O,w)=>O,u$1={toAttribute(O,w){switch(w){case Boolean:O=O?l$1:null;break;case Object:case Array:O=O==null?O:JSON.stringify(O)}return O},fromAttribute(O,w){let D=O;switch(w){case Boolean:D=O!==null;break;case Number:D=O===null?null:Number(O);break;case Object:case Array:try{D=JSON.parse(O)}catch{D=null}}return D}},f$1=(O,w)=>!i$2(O,w),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1=class extends HTMLElement{static addInitializer(w){this._$Ei(),(this.l??=[]).push(w)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(w,D=b){if(D.state&&(D.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(w)&&((D=Object.create(D)).wrapped=!0),this.elementProperties.set(w,D),!D.noAccessor){const W=Symbol(),q=this.getPropertyDescriptor(w,W,D);q!==void 0&&e$1(this.prototype,w,q)}}static getPropertyDescriptor(w,D,W){const{get:q,set:U}=h$1(this.prototype,w)??{get(){return this[D]},set(F){this[D]=F}};return{get:q,set(F){const G=q?.call(this);U?.call(this,F),this.requestUpdate(w,G,W)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const w=n$2(this);w.finalize(),w.l!==void 0&&(this.l=[...w.l]),this.elementProperties=new Map(w.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const D=this.properties,W=[...r$3(D),...o$3(D)];for(const q of W)this.createProperty(q,D[q])}const w=this[Symbol.metadata];if(w!==null){const D=litPropertyMetadata.get(w);if(D!==void 0)for(const[W,q]of D)this.elementProperties.set(W,q)}this._$Eh=new Map;for(const[D,W]of this.elementProperties){const q=this._$Eu(D,W);q!==void 0&&this._$Eh.set(q,D)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(w){const D=[];if(Array.isArray(w)){const W=new Set(w.flat(1/0).reverse());for(const q of W)D.unshift(c$2(q))}else w!==void 0&&D.push(c$2(w));return D}static _$Eu(w,D){const W=D.attribute;return W===!1?void 0:typeof W=="string"?W:typeof w=="string"?w.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(w=>this.enableUpdating=w),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(w=>w(this))}addController(w){(this._$EO??=new Set).add(w),this.renderRoot!==void 0&&this.isConnected&&w.hostConnected?.()}removeController(w){this._$EO?.delete(w)}_$E_(){const w=new Map,D=this.constructor.elementProperties;for(const W of D.keys())this.hasOwnProperty(W)&&(w.set(W,this[W]),delete this[W]);w.size>0&&(this._$Ep=w)}createRenderRoot(){const w=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(w,this.constructor.elementStyles),w}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(w=>w.hostConnected?.())}enableUpdating(w){}disconnectedCallback(){this._$EO?.forEach(w=>w.hostDisconnected?.())}attributeChangedCallback(w,D,W){this._$AK(w,W)}_$ET(w,D){const W=this.constructor.elementProperties.get(w),q=this.constructor._$Eu(w,W);if(q!==void 0&&W.reflect===!0){const U=(W.converter?.toAttribute!==void 0?W.converter:u$1).toAttribute(D,W.type);this._$Em=w,U==null?this.removeAttribute(q):this.setAttribute(q,U),this._$Em=null}}_$AK(w,D){const W=this.constructor,q=W._$Eh.get(w);if(q!==void 0&&this._$Em!==q){const U=W.getPropertyOptions(q),F=typeof U.converter=="function"?{fromAttribute:U.converter}:U.converter?.fromAttribute!==void 0?U.converter:u$1;this._$Em=q;const G=F.fromAttribute(D,U.type);this[q]=G??this._$Ej?.get(q)??G,this._$Em=null}}requestUpdate(w,D,W){if(w!==void 0){const q=this.constructor,U=this[w];if(W??=q.getPropertyOptions(w),!((W.hasChanged??f$1)(U,D)||W.useDefault&&W.reflect&&U===this._$Ej?.get(w)&&!this.hasAttribute(q._$Eu(w,W))))return;this.C(w,D,W)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(w,D,{useDefault:W,reflect:q,wrapped:U},F){W&&!(this._$Ej??=new Map).has(w)&&(this._$Ej.set(w,F??D??this[w]),U!==!0||F!==void 0)||(this._$AL.has(w)||(this.hasUpdated||W||(D=void 0),this._$AL.set(w,D)),q===!0&&this._$Em!==w&&(this._$Eq??=new Set).add(w))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(D){Promise.reject(D)}const w=this.scheduleUpdate();return w!=null&&await w,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[q,U]of this._$Ep)this[q]=U;this._$Ep=void 0}const W=this.constructor.elementProperties;if(W.size>0)for(const[q,U]of W){const{wrapped:F}=U,G=this[q];F!==!0||this._$AL.has(q)||G===void 0||this.C(q,void 0,U,G)}}let w=!1;const D=this._$AL;try{w=this.shouldUpdate(D),w?(this.willUpdate(D),this._$EO?.forEach(W=>W.hostUpdate?.()),this.update(D)):this._$EM()}catch(W){throw w=!1,this._$EM(),W}w&&this._$AE(D)}willUpdate(w){}_$AE(w){this._$EO?.forEach(D=>D.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(w)),this.updated(w)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(w){return!0}update(w){this._$Eq&&=this._$Eq.forEach(D=>this._$ET(D,this[D])),this._$EM()}updated(w){}firstUpdated(w){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:O=>O}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=O=>O===null||typeof O!="object"&&typeof O!="function",a=Array.isArray,u=O=>a(O)||typeof O?.[Symbol.iterator]=="function",d=`[ 	
\f\r]`,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=O=>(w,...D)=>({_$litType$:O,strings:w,values:D}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(O,w){if(!a(O)||!O.hasOwnProperty("raw"))throw Error("invalid template strings array");return s$1!==void 0?s$1.createHTML(w):w}const V=(O,w)=>{const D=O.length-1,W=[];let q,U=w===2?"<svg>":w===3?"<math>":"",F=f;for(let G=0;G<D;G++){const Y=O[G];let X,J,K=-1,Q=0;for(;Q<Y.length&&(F.lastIndex=Q,J=F.exec(Y),J!==null);)Q=F.lastIndex,F===f?J[1]==="!--"?F=v:J[1]!==void 0?F=_:J[2]!==void 0?($.test(J[2])&&(q=RegExp("</"+J[2],"g")),F=m):J[3]!==void 0&&(F=m):F===m?J[0]===">"?(F=q??f,K=-1):J[1]===void 0?K=-2:(K=F.lastIndex-J[2].length,X=J[1],F=J[3]===void 0?m:J[3]==='"'?g:p):F===g||F===p?F=m:F===v||F===_?F=f:(F=m,q=void 0);const Z=F===m&&O[G+1].startsWith("/>")?" ":"";U+=F===f?Y+n$1:K>=0?(W.push(X),Y.slice(0,K)+e+Y.slice(K)+h+Z):Y+h+(K===-2?G:Z)}return[P(O,U+(O[D]||"<?>")+(w===2?"</svg>":w===3?"</math>":"")),W]};class N{constructor({strings:w,_$litType$:D},W){let q;this.parts=[];let U=0,F=0;const G=w.length-1,Y=this.parts,[X,J]=V(w,D);if(this.el=N.createElement(X,W),C.currentNode=this.el.content,D===2||D===3){const K=this.el.content.firstChild;K.replaceWith(...K.childNodes)}for(;(q=C.nextNode())!==null&&Y.length<G;){if(q.nodeType===1){if(q.hasAttributes())for(const K of q.getAttributeNames())if(K.endsWith(e)){const Q=J[F++],Z=q.getAttribute(K).split(h),ee=/([.?@])?(.*)/.exec(Q);Y.push({type:1,index:U,name:ee[2],strings:Z,ctor:ee[1]==="."?H:ee[1]==="?"?I:ee[1]==="@"?L:k}),q.removeAttribute(K)}else K.startsWith(h)&&(Y.push({type:6,index:U}),q.removeAttribute(K));if($.test(q.tagName)){const K=q.textContent.split(h),Q=K.length-1;if(Q>0){q.textContent=i$1?i$1.emptyScript:"";for(let Z=0;Z<Q;Z++)q.append(K[Z],l()),C.nextNode(),Y.push({type:2,index:++U});q.append(K[Q],l())}}}else if(q.nodeType===8)if(q.data===o$2)Y.push({type:2,index:U});else{let K=-1;for(;(K=q.data.indexOf(h,K+1))!==-1;)Y.push({type:7,index:U}),K+=h.length-1}U++}}static createElement(w,D){const W=r$2.createElement("template");return W.innerHTML=w,W}}function S(O,w,D=O,W){if(w===T)return w;let q=W!==void 0?D._$Co?.[W]:D._$Cl;const U=c(w)?void 0:w._$litDirective$;return q?.constructor!==U&&(q?._$AO?.(!1),U===void 0?q=void 0:(q=new U(O),q._$AT(O,D,W)),W!==void 0?(D._$Co??=[])[W]=q:D._$Cl=q),q!==void 0&&(w=S(O,q._$AS(O,w.values),q,W)),w}class M{constructor(w,D){this._$AV=[],this._$AN=void 0,this._$AD=w,this._$AM=D}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(w){const{el:{content:D},parts:W}=this._$AD,q=(w?.creationScope??r$2).importNode(D,!0);C.currentNode=q;let U=C.nextNode(),F=0,G=0,Y=W[0];for(;Y!==void 0;){if(F===Y.index){let X;Y.type===2?X=new R(U,U.nextSibling,this,w):Y.type===1?X=new Y.ctor(U,Y.name,Y.strings,this,w):Y.type===6&&(X=new z(U,this,w)),this._$AV.push(X),Y=W[++G]}F!==Y?.index&&(U=C.nextNode(),F++)}return C.currentNode=r$2,q}p(w){let D=0;for(const W of this._$AV)W!==void 0&&(W.strings!==void 0?(W._$AI(w,W,D),D+=W.strings.length-2):W._$AI(w[D])),D++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(w,D,W,q){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=w,this._$AB=D,this._$AM=W,this.options=q,this._$Cv=q?.isConnected??!0}get parentNode(){let w=this._$AA.parentNode;const D=this._$AM;return D!==void 0&&w?.nodeType===11&&(w=D.parentNode),w}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(w,D=this){w=S(this,w,D),c(w)?w===E||w==null||w===""?(this._$AH!==E&&this._$AR(),this._$AH=E):w!==this._$AH&&w!==T&&this._(w):w._$litType$!==void 0?this.$(w):w.nodeType!==void 0?this.T(w):u(w)?this.k(w):this._(w)}O(w){return this._$AA.parentNode.insertBefore(w,this._$AB)}T(w){this._$AH!==w&&(this._$AR(),this._$AH=this.O(w))}_(w){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=w:this.T(r$2.createTextNode(w)),this._$AH=w}$(w){const{values:D,_$litType$:W}=w,q=typeof W=="number"?this._$AC(w):(W.el===void 0&&(W.el=N.createElement(P(W.h,W.h[0]),this.options)),W);if(this._$AH?._$AD===q)this._$AH.p(D);else{const U=new M(q,this),F=U.u(this.options);U.p(D),this.T(F),this._$AH=U}}_$AC(w){let D=A.get(w.strings);return D===void 0&&A.set(w.strings,D=new N(w)),D}k(w){a(this._$AH)||(this._$AH=[],this._$AR());const D=this._$AH;let W,q=0;for(const U of w)q===D.length?D.push(W=new R(this.O(l()),this.O(l()),this,this.options)):W=D[q],W._$AI(U),q++;q<D.length&&(this._$AR(W&&W._$AB.nextSibling,q),D.length=q)}_$AR(w=this._$AA.nextSibling,D){for(this._$AP?.(!1,!0,D);w!==this._$AB;){const W=w.nextSibling;w.remove(),w=W}}setConnected(w){this._$AM===void 0&&(this._$Cv=w,this._$AP?.(w))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(w,D,W,q,U){this.type=1,this._$AH=E,this._$AN=void 0,this.element=w,this.name=D,this._$AM=q,this.options=U,W.length>2||W[0]!==""||W[1]!==""?(this._$AH=Array(W.length-1).fill(new String),this.strings=W):this._$AH=E}_$AI(w,D=this,W,q){const U=this.strings;let F=!1;if(U===void 0)w=S(this,w,D,0),F=!c(w)||w!==this._$AH&&w!==T,F&&(this._$AH=w);else{const G=w;let Y,X;for(w=U[0],Y=0;Y<U.length-1;Y++)X=S(this,G[W+Y],D,Y),X===T&&(X=this._$AH[Y]),F||=!c(X)||X!==this._$AH[Y],X===E?w=E:w!==E&&(w+=(X??"")+U[Y+1]),this._$AH[Y]=X}F&&!q&&this.j(w)}j(w){w===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,w??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(w){this.element[this.name]=w===E?void 0:w}}class I extends k{constructor(){super(...arguments),this.type=4}j(w){this.element.toggleAttribute(this.name,!!w&&w!==E)}}class L extends k{constructor(w,D,W,q,U){super(w,D,W,q,U),this.type=5}_$AI(w,D=this){if((w=S(this,w,D,0)??E)===T)return;const W=this._$AH,q=w===E&&W!==E||w.capture!==W.capture||w.once!==W.once||w.passive!==W.passive,U=w!==E&&(W===E||q);q&&this.element.removeEventListener(this.name,this,W),U&&this.element.addEventListener(this.name,this,w),this._$AH=w}handleEvent(w){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,w):this._$AH.handleEvent(w)}}class z{constructor(w,D,W){this.element=w,this.type=6,this._$AN=void 0,this._$AM=D,this.options=W}get _$AU(){return this._$AM._$AU}_$AI(w){S(this,w)}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.3.1");const B=(O,w,D)=>{const W=D?.renderBefore??w;let q=W._$litPart$;if(q===void 0){const U=D?.renderBefore??null;W._$litPart$=q=new R(w.insertBefore(l(),U),U,void 0,D??{})}return q._$AI(O),q};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const w=super.createRenderRoot();return this.renderOptions.renderBefore??=w.firstChild,w}update(w){const D=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(w),this._$Do=B(D,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}i._$litElement$=!0,i.finalized=!0,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=O=>(w,D)=>{D!==void 0?D.addInitializer(()=>{customElements.define(O,w)}):customElements.define(O,w)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$1=(O=o,w,D)=>{const{kind:W,metadata:q}=D;let U=globalThis.litPropertyMetadata.get(q);if(U===void 0&&globalThis.litPropertyMetadata.set(q,U=new Map),W==="setter"&&((O=Object.create(O)).wrapped=!0),U.set(D.name,O),W==="accessor"){const{name:F}=D;return{set(G){const Y=w.get.call(this);w.set.call(this,G),this.requestUpdate(F,Y,O)},init(G){return G!==void 0&&this.C(F,void 0,O,G),G}}}if(W==="setter"){const{name:F}=D;return function(G){const Y=this[F];w.call(this,G),this.requestUpdate(F,Y,O)}}throw Error("Unsupported decorator location: "+W)};function n(O){return(w,D)=>typeof D=="object"?r$1(O,w,D):((W,q,U)=>{const F=q.hasOwnProperty(U);return q.constructor.createProperty(U,W),F?Object.getOwnPropertyDescriptor(q,U):void 0})(O,w,D)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(O){return n({...O,state:!0,attribute:!1})}var __defProp$7=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$7=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc$7(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp$7(w,D,q),q};let FAQComponent=class extends i{constructor(){super(...arguments),this.openItems=new Set,this.faqData=[{question:"What is Lit and how does it work?",answer:"Lit is a simple library for building fast, lightweight web components. It uses modern web standards and provides a declarative template system with efficient updates."},{question:"How do I get started with Lit components?",answer:"To get started, install Lit via npm, create a class that extends LitElement, use the @customElement decorator, and define your template in the render() method."},{question:"Can I use Lit with other frameworks?",answer:"Yes! Lit components are standard web components, so they work with any framework or vanilla JavaScript. They're framework-agnostic and interoperable."},{question:"What are the performance benefits of Lit?",answer:"Lit provides efficient updates through its reactive update cycle, small bundle size, and leverages browser-native features like Shadow DOM for encapsulation."},{question:"How do I handle events in Lit components?",answer:"You can handle events using the @event syntax in templates, or by adding event listeners in the connectedCallback() lifecycle method."}]}toggleItem(O){this.openItems.has(O)?this.openItems.delete(O):this.openItems.add(O),this.requestUpdate()}render(){return x`
      <div class="faq-container">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        ${this.faqData.map((O,w)=>x`
            <div class="faq-item">
              <button
                class="faq-question ${this.openItems.has(w)?"active":""}"
                @click=${()=>this.toggleItem(w)}
              >
                <span>${O.question}</span>
                <span
                  class="faq-icon ${this.openItems.has(w)?"rotated":""}"
                  >▼</span
                >
              </button>
              <div
                class="faq-answer ${this.openItems.has(w)?"open":""}"
              >
                <div class="faq-answer-text">${O.answer}</div>
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
  `;__decorateClass$7([n({type:Object})],FAQComponent.prototype,"openItems",2);FAQComponent=__decorateClass$7([t("faq-component")],FAQComponent);var __defProp$6=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$6=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc$6(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp$6(w,D,q),q};let GalleryComponent=class extends i{constructor(){super(...arguments),this.images=[{src:"https://picsum.photos/400/300?random=1",title:"Beautiful Landscape",description:"A stunning view of mountains and valleys"},{src:"https://picsum.photos/400/300?random=2",title:"City Skyline",description:"Modern architecture against the evening sky"},{src:"https://picsum.photos/400/300?random=3",title:"Ocean Waves",description:"Peaceful waves crashing on the shore"},{src:"https://picsum.photos/400/300?random=4",title:"Forest Path",description:"A winding path through ancient trees"},{src:"https://picsum.photos/400/300?random=5",title:"Desert Sunset",description:"Golden hour in the vast desert"},{src:"https://picsum.photos/400/300?random=6",title:"Mountain Peak",description:"Snow-capped peaks reaching for the sky"}],this.selectedImageIndex=-1}openModal(O){this.selectedImageIndex=O}closeModal(){this.selectedImageIndex=-1}render(){return x`
      <div class="gallery-container">
        <h2 class="gallery-title">Photo Gallery</h2>
        <div class="gallery-grid">
          ${this.images.map((O,w)=>x`
            <div class="gallery-item" @click=${()=>this.openModal(w)}>
              <img class="gallery-image" src="${O.src}" alt="${O.title}" />
              <div class="gallery-caption">
                <h3>${O.title}</h3>
                <p>${O.description}</p>
              </div>
            </div>
          `)}
        </div>
      </div>

      <div class="modal ${this.selectedImageIndex>=0?"open":""}" @click=${this.closeModal}>
        ${this.selectedImageIndex>=0?x`
          <div class="modal-content" @click=${O=>O.stopPropagation()}>
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
  `;__decorateClass$6([n({type:Array})],GalleryComponent.prototype,"images",2);__decorateClass$6([n({type:Number})],GalleryComponent.prototype,"selectedImageIndex",2);GalleryComponent=__decorateClass$6([t("gallery-component")],GalleryComponent);var __defProp$5=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$5=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc$5(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp$5(w,D,q),q};let ReviewComponent=class extends i{constructor(){super(...arguments),this.reviews=[{reviewerName:"Yash",rating:5,reviewText:"This is an amazing product! The quality exceeded my expectations and the customer service was outstanding. Highly recommend!",reviewDate:"December 15, 2024"},{reviewerName:"Sarah Johnson",rating:4,reviewText:"Really good product overall. Easy to use and well-designed. Only minor issue was the delivery took a bit longer than expected.",reviewDate:"December 12, 2024"},{reviewerName:"Mike Chen",rating:5,reviewText:"Fantastic! This has made my workflow so much more efficient. The features are exactly what I needed.",reviewDate:"December 10, 2024"},{reviewerName:"Emily Davis",rating:4.5,reviewText:"Great value for money. The interface is intuitive and the performance is solid. Would definitely buy again.",reviewDate:"December 8, 2024"},{reviewerName:"Alex Rodriguez",rating:3,reviewText:"It's okay, does what it's supposed to do. Could use some improvements in the user interface, but overall functional.",reviewDate:"December 5, 2024"}]}renderStars(O){const w=Math.floor(O),D=O-w>=.5,W=5-w-(D?1:0);return x`
      ${Array(w).fill(0).map(()=>x`<span class="star star-gold" aria-hidden="true">★</span>`)}
      ${D?x`<span class="star star-half" aria-hidden="true">★</span>`:""}
      ${Array(W).fill(0).map(()=>x`<span class="star star-empty" aria-hidden="true">☆</span>`)}
      <span class="visually-hidden">Rating: ${O} out of 5 stars</span>
    `}getAverageRating(){if(this.reviews.length===0)return 0;const O=this.reviews.reduce((w,D)=>w+D.rating,0);return Math.round(O/this.reviews.length*10)/10}render(){const O=this.getAverageRating();return x`
      <section class="reviews-container" role="region" aria-label="Customer Reviews">
        <h2 class="reviews-title">Customer Reviews</h2>

        <div class="reviews-summary" aria-live="polite">
          <div class="average-rating">
            ${this.renderStars(O)} <span>${O}/5</span>
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
  `;__decorateClass$5([n({type:Array})],ReviewComponent.prototype,"reviews",2);ReviewComponent=__decorateClass$5([t("review-component")],ReviewComponent);var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc$4(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp$4(w,D,q),q};let ParticleBg=class extends i{constructor(){super(...arguments),this.particleCount=80,this.connectionDistance=120,this.mouseInfluence=100,this.particles=[],this.animationId=0,this.mouse={x:0,y:0},this.canvasWidth=0,this.canvasHeight=0}firstUpdated(){this.canvas=this.shadowRoot.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.setupCanvas(),this.initParticles(),this.startAnimation(),window.addEventListener("resize",this.handleResize.bind(this)),window.addEventListener("mousemove",this.handleMouseMove.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.animationId&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.handleResize.bind(this)),window.removeEventListener("mousemove",this.handleMouseMove.bind(this))}setupCanvas(){const O=this.getBoundingClientRect();this.canvasWidth=O.width,this.canvasHeight=O.height,this.canvas.width=this.canvasWidth*window.devicePixelRatio,this.canvas.height=this.canvasHeight*window.devicePixelRatio,this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio),this.canvas.style.width=this.canvasWidth+"px",this.canvas.style.height=this.canvasHeight+"px"}initParticles(){this.particles=[];for(let O=0;O<this.particleCount;O++)this.particles.push({x:Math.random()*this.canvasWidth,y:Math.random()*this.canvasHeight,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+1})}handleResize(){this.setupCanvas(),this.initParticles()}handleMouseMove(O){const w=this.getBoundingClientRect();this.mouse.x=O.clientX-w.left,this.mouse.y=O.clientY-w.top}updateParticles(){this.particles.forEach(O=>{const w=this.mouse.x-O.x,D=this.mouse.y-O.y,W=Math.sqrt(w*w+D*D);if(W<this.mouseInfluence){const q=(this.mouseInfluence-W)/this.mouseInfluence,U=Math.atan2(D,w);O.vx+=Math.cos(U)*q*.01,O.vy+=Math.sin(U)*q*.01}O.x+=O.vx,O.y+=O.vy,(O.x<0||O.x>this.canvasWidth)&&(O.vx*=-1,O.x=Math.max(0,Math.min(this.canvasWidth,O.x))),(O.y<0||O.y>this.canvasHeight)&&(O.vy*=-1,O.y=Math.max(0,Math.min(this.canvasHeight,O.y))),O.vx*=.99,O.vy*=.99})}drawParticles(){this.particles.forEach(O=>{this.ctx.beginPath(),this.ctx.arc(O.x,O.y,O.size,0,Math.PI*2),this.ctx.fillStyle="rgba(100, 200, 255, 0.8)",this.ctx.fill(),this.ctx.shadowColor="#64c8ff",this.ctx.shadowBlur=10,this.ctx.fill(),this.ctx.shadowBlur=0})}drawConnections(){for(let O=0;O<this.particles.length;O++)for(let w=O+1;w<this.particles.length;w++){const D=this.particles[O].x-this.particles[w].x,W=this.particles[O].y-this.particles[w].y,q=Math.sqrt(D*D+W*W);if(q<this.connectionDistance){const U=1-q/this.connectionDistance;this.ctx.beginPath(),this.ctx.moveTo(this.particles[O].x,this.particles[O].y),this.ctx.lineTo(this.particles[w].x,this.particles[w].y),this.ctx.strokeStyle=`rgba(100, 200, 255, ${U*.3})`,this.ctx.lineWidth=1,this.ctx.stroke()}}}startAnimation(){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.updateParticles(),this.drawConnections(),this.drawParticles(),this.animationId=requestAnimationFrame(()=>this.startAnimation())}render(){return x`<canvas></canvas>`}};ParticleBg.styles=i$3`
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
  `;__decorateClass$4([n({type:Number})],ParticleBg.prototype,"particleCount",2);__decorateClass$4([n({type:Number})],ParticleBg.prototype,"connectionDistance",2);__decorateClass$4([n({type:Number})],ParticleBg.prototype,"mouseInfluence",2);ParticleBg=__decorateClass$4([t("particle-bg")],ParticleBg);var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc$3(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp$3(w,D,q),q};let MorphShapeComponent=class extends i{constructor(){super(...arguments),this.shape="circle",this.autoMorph=!1,this.morphInterval=2e3,this.interactive=!1,this.loading=!1,this.currentShape="circle",this.isAnimating=!1,this.shapes={circle:"M 50 10 A 40 40 0 1 1 49.99 10 Z",square:"M 10 10 L 90 10 L 90 90 L 10 90 Z",triangle:"M 50 10 L 90 80 L 10 80 Z"}}connectedCallback(){super.connectedCallback(),this.currentShape=this.shape,this.autoMorph&&this.startAutoMorph()}disconnectedCallback(){super.disconnectedCallback(),this.stopAutoMorph()}updated(O){O.has("shape")&&!this.autoMorph&&this.morphToShape(this.shape),O.has("autoMorph")&&(this.autoMorph?this.startAutoMorph():this.stopAutoMorph())}startAutoMorph(){this.stopAutoMorph(),this.morphTimer=window.setInterval(()=>{this.morphToNextShape()},this.morphInterval)}stopAutoMorph(){this.morphTimer&&(clearInterval(this.morphTimer),this.morphTimer=void 0)}morphToNextShape(){const O=["circle","square","triangle"],D=(O.indexOf(this.currentShape)+1)%O.length;this.morphToShape(O[D])}morphToShape(O){this.currentShape===O||this.isAnimating||(this.isAnimating=!0,this.currentShape=O,setTimeout(()=>{this.isAnimating=!1},800),this.dispatchEvent(new CustomEvent("shape-changed",{detail:{shape:O},bubbles:!0})))}handleClick(){this.interactive&&!this.autoMorph&&this.morphToNextShape()}render(){return x`
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
  `;__decorateClass$3([n({type:String})],MorphShapeComponent.prototype,"shape",2);__decorateClass$3([n({type:Boolean})],MorphShapeComponent.prototype,"autoMorph",2);__decorateClass$3([n({type:Number})],MorphShapeComponent.prototype,"morphInterval",2);__decorateClass$3([n({type:Boolean})],MorphShapeComponent.prototype,"interactive",2);__decorateClass$3([n({type:Boolean})],MorphShapeComponent.prototype,"loading",2);__decorateClass$3([r()],MorphShapeComponent.prototype,"currentShape",2);__decorateClass$3([r()],MorphShapeComponent.prototype,"isAnimating",2);MorphShapeComponent=__decorateClass$3([t("morph-shape")],MorphShapeComponent);var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc$2(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp$2(w,D,q),q};let FormComponent=class extends i{constructor(){super(...arguments),this.formData={firstName:"",lastName:"",email:"",phone:"",age:"",gender:"",message:"",newsletter:!1},this.submitted=!1,this.error=""}handleInputChange(O,w){this.formData={...this.formData,[O]:w}}handleSubmit(O){if(O.preventDefault(),this.error="",!this.formData.firstName||!this.formData.lastName||!this.formData.email){this.error="Please fill in all required fields (First Name, Last Name, Email)";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)){this.error="Please enter a valid email address";return}console.log("Form submitted:",this.formData),this.submitted=!0,setTimeout(()=>{this.submitted=!1,this.formData={firstName:"",lastName:"",email:"",phone:"",age:"",gender:"",message:"",newsletter:!1}},3e3)}render(){return x`
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
              @input=${O=>this.handleInputChange("firstName",O.target.value)}
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
              @input=${O=>this.handleInputChange("lastName",O.target.value)}
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
              @input=${O=>this.handleInputChange("email",O.target.value)}
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
              @input=${O=>this.handleInputChange("phone",O.target.value)}
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
              @input=${O=>this.handleInputChange("age",O.target.value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="gender">Gender</label>
            <select
              id="gender"
              class="form-select"
              .value=${this.formData.gender}
              @change=${O=>this.handleInputChange("gender",O.target.value)}
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
              @input=${O=>this.handleInputChange("message",O.target.value)}
            ></textarea>
          </div>

          <div class="form-group">
            <div class="form-checkbox-group">
              <input
                type="checkbox"
                id="newsletter"
                class="form-checkbox"
                .checked=${this.formData.newsletter}
                @change=${O=>this.handleInputChange("newsletter",O.target.checked)}
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
  `;__decorateClass$2([r()],FormComponent.prototype,"formData",2);__decorateClass$2([r()],FormComponent.prototype,"submitted",2);__decorateClass$2([r()],FormComponent.prototype,"error",2);FormComponent=__decorateClass$2([t("form-component")],FormComponent);var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc$1(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp$1(w,D,q),q};let ProductComponent=class extends i{constructor(){super(...arguments),this.product={id:"1",title:"Premium Wireless Headphones",description:"Experience crystal-clear audio with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals.",price:"$199.99",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=250&fit=crop"],imageAlts:["Premium wireless headphones","Headphones side view","Headphones detail","Headphones in use"]},this.isFullscreenOpen=!1,this.currentImageIndex=0,this.handleKeyDown=O=>{O.key==="Escape"&&this.isFullscreenOpen&&this.closeFullscreen()}}openFullscreen(){this.isFullscreenOpen=!0,document.body.style.overflow="hidden"}closeFullscreen(){this.isFullscreenOpen=!1,document.body.style.overflow=""}handleOverlayClick(O){O.target===O.currentTarget&&this.closeFullscreen()}nextImage(){this.currentImageIndex<this.product.images.length-1&&this.currentImageIndex++}prevImage(){this.currentImageIndex>0&&this.currentImageIndex--}goToImage(O){this.currentImageIndex=O}openImageFullscreen(O){this.currentImageIndex=O,this.openFullscreen()}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown),document.body.style.overflow=""}render(){const O=this.product.images[this.currentImageIndex],w=this.product.imageAlts?.[this.currentImageIndex]||this.product.title;return x`
      <div class="product-card">
        <div class="image-slider">
          <div 
            class="slider-container" 
            style="transform: translateX(-${this.currentImageIndex*100}%)"
          >
            ${this.product.images.map((D,W)=>x`
              <img
                src="${D}"
                alt="${this.product.imageAlts?.[W]||this.product.title}"
                class="product-image"
                @click=${()=>this.openImageFullscreen(W)}
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
              ${this.product.images.map((D,W)=>x`
                <div 
                  class="slider-dot ${W===this.currentImageIndex?"active":""}"
                  @click=${()=>this.goToImage(W)}
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
          src="${O}"
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
  `;__decorateClass$1([n({type:Object})],ProductComponent.prototype,"product",2);__decorateClass$1([r()],ProductComponent.prototype,"isFullscreenOpen",2);__decorateClass$1([r()],ProductComponent.prototype,"currentImageIndex",2);ProductComponent=__decorateClass$1([t("product-component")],ProductComponent);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(O,w,D,W)=>{for(var q=W>1?void 0:W?__getOwnPropDesc(w,D):w,U=O.length-1,F;U>=0;U--)(F=O[U])&&(q=(W?F(w,D,q):F(q))||q);return W&&q&&__defProp(w,D,q),q};let ChatbotComponent=class extends i{constructor(){super(...arguments),this.isOpen=!1,this.messages=[{id:"1",text:"Hello! I'm your AI assistant. I'm here to help you with any questions or tasks you might have. How can I assist you today?",isUser:!1,timestamp:new Date}],this.currentMessage="",this.isTyping=!1,this.messageId=2}toggleChat(){this.isOpen=!this.isOpen,"vibrate"in navigator&&navigator.vibrate(50)}handleInputChange(O){const w=O.target;this.currentMessage=w.value}handleKeyPress(O){O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),this.sendMessage())}async sendMessage(){if(!this.currentMessage.trim())return;const O={id:this.messageId.toString(),text:this.currentMessage,isUser:!0,timestamp:new Date};this.messages=[...this.messages,O],this.messageId++;const w=this.currentMessage;this.currentMessage="",this.isTyping=!0;const D=800+Math.random()*1200;setTimeout(()=>{this.isTyping=!1;const W=this.generateBotResponse(w),q={id:this.messageId.toString(),text:W,isUser:!1,timestamp:new Date};this.messages=[...this.messages,q],this.messageId++,this.updateComplete.then(()=>{const U=this.shadowRoot?.querySelector(".messages-container");U&&U.scrollTo({top:U.scrollHeight,behavior:"smooth"})})},D)}generateBotResponse(userMessage){const message=userMessage.toLowerCase();if(this.matchesPattern(message,["hello","hi","hey","good morning","good afternoon","good evening"])){const O=["Hello! 👋 I'm your AI assistant, ready to help you with anything you need. How can I assist you today?","Hi there! 😊 I'm here to make your day easier. What would you like to explore or discuss?","Hey! Great to meet you! I'm your AI companion, equipped to help with questions, tasks, or just a friendly chat. What's on your mind?"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["help","support","assist","guide"])){const O=[`I'm here to help! 🛠️ I can assist with:
• Product information and recommendations
• Technical questions and troubleshooting
• General knowledge and research
• Creative writing and brainstorming
• Math and calculations
• Language translation

What specific area do you need help with?`,"Absolutely! I'm your AI assistant and I'm here to support you. I can help with information, problem-solving, creative tasks, and much more. What would you like to work on?","I'd love to help! I'm designed to assist with a wide range of topics. Just let me know what you're looking for, and I'll do my best to provide useful information and guidance."];return this.getRandomResponse(O)}if(this.matchesPattern(message,["product","buy","purchase","shop","store","item"])){const O=[`Great! I'd be happy to help you find the perfect product. 🛍️ Our collection includes:
• Electronics and gadgets
• Fashion and accessories
• Home and lifestyle items
• Books and media
• Sports and outdoor gear

What category interests you, or do you have something specific in mind?`,"Excellent choice! I can help you discover amazing products. What type of item are you looking for? I can provide recommendations based on your needs and preferences.","Shopping time! 🎉 I'm here to help you find exactly what you need. Tell me more about what you're looking for, and I'll guide you to the best options."];return this.getRandomResponse(O)}if(this.matchesPattern(message,["price","cost","expensive","cheap","affordable","budget"])){const O=["I'd be happy to help with pricing information! 💰 Our products range from budget-friendly options to premium selections. What specific item or category are you interested in?","Great question about pricing! We offer competitive prices across all our products. Could you tell me what you're looking for so I can provide specific pricing details?","Pricing is important! 💡 We have options for every budget. What product or service are you interested in? I'll help you find the best value for your money."];return this.getRandomResponse(O)}if(this.matchesPattern(message,["code","programming","developer","software","app","website","html","css","javascript","python","react","vue","angular"])){const O=[`Ah, a fellow developer! 👨‍💻 I can help with:
• Code review and debugging
• Best practices and architecture
• Framework-specific questions
• Algorithm explanations
• Web development guidance

What programming challenge are you facing?`,"Programming is my jam! 💻 I can assist with coding questions, explain concepts, help debug issues, or discuss software architecture. What would you like to work on?","Tech talk! 🚀 I'm well-versed in programming and can help with code, debugging, best practices, and technical concepts. What's your programming question?"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["weather","temperature","forecast","time","date","today","tomorrow"])){const O=["I'd love to help with weather information! 🌤️ However, I don't have real-time access to current weather data. You might want to check a weather app or website for the most accurate forecast for your location.","Weather questions! 🌦️ While I can't provide real-time weather data, I can help you understand weather patterns, climate information, or suggest the best weather apps to use.","Time and weather! ⏰ For current time and weather, you'll want to check your device's clock and a weather service. But I'm happy to help with other questions!"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["calculate","math","equation","solve","plus","minus","multiply","divide","+","-","*","/"])){try{const mathExpression=message.replace(/[^0-9+\-*/().\s]/g,"");if(mathExpression.match(/^[0-9+\-*/().\s]+$/)){const result=eval(mathExpression);return`Let me calculate that for you! 🧮

${mathExpression} = ${result}`}}catch(O){}return"I can help with math calculations! 🧮 Just type your equation (like '2 + 2' or '10 * 5') and I'll solve it for you."}if(this.matchesPattern(message,["write","story","poem","creative","content","blog","article"])){const O=[`Creative writing is one of my favorite things! ✍️ I can help you with:
• Story ideas and plot development
• Poetry and creative writing
• Blog posts and articles
• Marketing copy
• Character development

What type of creative project are you working on?`,"Let's get creative! 🎨 I love helping with writing projects. Whether it's a story, poem, article, or any other content, I'm here to inspire and assist. What would you like to create?","Creative writing time! ✨ I can help brainstorm ideas, develop characters, write poetry, or assist with any writing project. What's your creative vision?"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["health","fitness","exercise","diet","nutrition","workout","gym"])){const O=[`Health and wellness are so important! 💪 I can provide general information about:
• Exercise and fitness tips
• Nutrition and healthy eating
• Wellness practices
• Mental health support

Remember, I'm not a medical professional, so always consult with healthcare providers for medical advice.`,"Great focus on health! 🏃‍♂️ I can share general wellness information and tips, but for specific medical advice, please consult with healthcare professionals. What wellness topic interests you?","Health is wealth! 🌟 I can provide general fitness and nutrition information, but remember to consult healthcare professionals for medical advice. What health topic would you like to explore?"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["travel","vacation","trip","destination","hotel","flight","visit"])){const O=[`Travel planning is exciting! ✈️ I can help with:
• Destination recommendations
• Travel tips and advice
• Cultural information
• General travel planning

Where are you thinking of traveling, or what kind of trip are you planning?`,"Adventure awaits! 🗺️ I love helping with travel planning. I can provide destination insights, travel tips, and cultural information. What's your travel dream?","Let's plan your next adventure! 🌍 I can help with travel recommendations, tips, and destination information. Where would you like to explore?"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["movie","film","tv","show","book","music","game","entertainment"])){const O=[`Entertainment is my jam! 🎬 I can help with:
• Movie and TV show recommendations
• Book suggestions
• Music recommendations
• Gaming discussions
• Entertainment news and trends

What type of entertainment are you interested in?`,"Let's talk entertainment! 🎵 I can suggest movies, books, music, and more based on your preferences. What are you in the mood for?","Entertainment time! 🎮 I love discussing movies, books, music, and games. What's your favorite genre or what are you looking to discover?"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["thank","thanks","appreciate","grateful"])){const O=["You're absolutely welcome! 😊 It's my pleasure to help. Is there anything else I can assist you with today?","Thank you for the kind words! 🙏 I'm here whenever you need help or just want to chat. What else can I do for you?","You're very welcome! 💖 I enjoy helping and chatting with you. Feel free to ask me anything else!"];return this.getRandomResponse(O)}if(this.matchesPattern(message,["bye","goodbye","see you","farewell","later"])){const O=["Goodbye! 👋 It's been wonderful chatting with you. Feel free to return anytime - I'm always here and ready to help. Have a fantastic day!","See you later! 😊 Thanks for the great conversation. Don't hesitate to come back if you need anything. Take care!","Farewell! 🌟 It's been a pleasure helping you today. I'll be here when you need me again. Have an amazing day ahead!"];return this.getRandomResponse(O)}if(message.includes("?")||this.matchesPattern(message,["what","how","why","when","where","who","which"])){const O=["That's a great question! 🤔 I'd be happy to help you find the answer. Could you provide a bit more context so I can give you the most helpful response?","Interesting question! 💭 I'm here to help you explore and find answers. What specific information are you looking for?","I love curious minds! 🧠 That's a thoughtful question. Let me help you find the information you need. Could you tell me more about what you're trying to understand?"];return this.getRandomResponse(O)}const defaultResponses=["That's an interesting topic! 🤔 I'd love to help you explore this further. Could you tell me more about what you're looking for or what specific information would be most helpful?","I appreciate you sharing that with me! 💭 I think I can provide some valuable insights. What aspect of this would you like to focus on or learn more about?","That's fascinating! 🌟 I'd be happy to help you dive deeper into this topic. What specific questions do you have or what would you like to know more about?","Great point! 💡 I can help you explore this topic and provide useful information. What would be most helpful for you right now?","I understand what you're getting at! 🎯 Let me help you find the information or assistance you need. What's your main goal or question here?","That's a wonderful topic to discuss! ✨ I'm here to help you learn more and find the answers you're looking for. What specific aspect interests you most?"];return this.getRandomResponse(defaultResponses)}matchesPattern(O,w){return w.some(D=>O.includes(D))}getRandomResponse(O){return O[Math.floor(Math.random()*O.length)]}render(){return x`
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
            ${this.messages.map(O=>x`
              <div 
                class="message ${O.isUser?"user":"bot"}"
                role="${O.isUser?"user":"assistant"}"
                aria-label="${O.isUser?"Your message":"Assistant message"}"
              >
                ${O.text}
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
  `;__decorateClass([r()],ChatbotComponent.prototype,"isOpen",2);__decorateClass([r()],ChatbotComponent.prototype,"messages",2);__decorateClass([r()],ChatbotComponent.prototype,"currentMessage",2);__decorateClass([r()],ChatbotComponent.prototype,"isTyping",2);ChatbotComponent=__decorateClass([t("chatbot-component")],ChatbotComponent);
