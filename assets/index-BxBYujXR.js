(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,de=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),ue=new WeakMap;let Ce=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ue.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ue.set(t,e))}return e}toString(){return this.cssText}};const Ie=r=>new Ce(typeof r=="string"?r:r+"",void 0,ce),Y=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((o,a,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[i+1],r[0]);return new Ce(t,r,ce)},Ae=(r,e)=>{if(de)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),a=Z.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=t.cssText,r.appendChild(o)}},ge=de?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ie(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ze,defineProperty:Ee,getOwnPropertyDescriptor:De,getOwnPropertyNames:je,getOwnPropertySymbols:Te,getPrototypeOf:Oe}=Object,I=globalThis,ve=I.trustedTypes,Le=ve?ve.emptyScript:"",ie=I.reactiveElementPolyfillSupport,U=(r,e)=>r,ee={toAttribute(r,e){switch(e){case Boolean:r=r?Le:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},he=(r,e)=>!ze(r,e),be={attribute:!0,type:String,converter:ee,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),I.litPropertyMetadata??(I.litPropertyMetadata=new WeakMap);let j=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(e,o,t);a!==void 0&&Ee(this.prototype,e,a)}}static getPropertyDescriptor(e,t,o){const{get:a,set:i}=De(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:a,set(s){const d=a==null?void 0:a.call(this);i==null||i.call(this,s),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??be}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=Oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,o=[...je(t),...Te(t)];for(const a of o)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,a]of t)this.elementProperties.set(o,a)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const a=this._$Eu(t,o);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const a of o)t.unshift(ge(a))}else e!==void 0&&t.push(ge(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ae(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){var i;const o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){const s=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:ee).toAttribute(t,o.type);this._$Em=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(e,t){var i,s;const o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const d=o.getPropertyOptions(a),l=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)==null?void 0:i.fromAttribute)!==void 0?d.converter:ee;this._$Em=a;const u=l.fromAttribute(t,d.type);this[a]=u??((s=this._$Ej)==null?void 0:s.get(a))??u,this._$Em=null}}requestUpdate(e,t,o){var a;if(e!==void 0){const i=this.constructor,s=this[e];if(o??(o=i.getPropertyOptions(e)),!((o.hasChanged??he)(s,t)||o.useDefault&&o.reflect&&s===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:a,wrapped:i},s){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,s]of a){const{wrapped:d}=s,l=this[i];d!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(a=>{var i;return(i=a.hostUpdate)==null?void 0:i.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[U("elementProperties")]=new Map,j[U("finalized")]=new Map,ie==null||ie({ReactiveElement:j}),(I.reactiveElementVersions??(I.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,te=B.trustedTypes,me=te?te.createPolicy("lit-html",{createHTML:r=>r}):void 0,_e="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Se="?"+C,Ne=`<${Se}>`,P=document,F=()=>P.createComment(""),V=r=>r===null||typeof r!="object"&&typeof r!="function",pe=Array.isArray,Re=r=>pe(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",se=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,fe=/>/g,_=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,xe=/"/g,Me=/^(?:script|style|textarea|title)$/i,He=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),n=He(1),T=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ke=new WeakMap,S=P.createTreeWalker(P,129);function Pe(r,e){if(!pe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}const Ue=(r,e)=>{const t=r.length-1,o=[];let a,i=e===2?"<svg>":e===3?"<math>":"",s=H;for(let d=0;d<t;d++){const l=r[d];let u,v,h=-1,w=0;for(;w<l.length&&(s.lastIndex=w,v=s.exec(l),v!==null);)w=s.lastIndex,s===H?v[1]==="!--"?s=we:v[1]!==void 0?s=fe:v[2]!==void 0?(Me.test(v[2])&&(a=RegExp("</"+v[2],"g")),s=_):v[3]!==void 0&&(s=_):s===_?v[0]===">"?(s=a??H,h=-1):v[1]===void 0?h=-2:(h=s.lastIndex-v[2].length,u=v[1],s=v[3]===void 0?_:v[3]==='"'?xe:ye):s===xe||s===ye?s=_:s===we||s===fe?s=H:(s=_,a=void 0);const $=s===_&&r[d+1].startsWith("/>")?" ":"";i+=s===H?l+Ne:h>=0?(o.push(u),l.slice(0,h)+_e+l.slice(h)+C+$):l+C+(h===-2?d:$)}return[Pe(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class W{constructor({strings:e,_$litType$:t},o){let a;this.parts=[];let i=0,s=0;const d=e.length-1,l=this.parts,[u,v]=Ue(e,t);if(this.el=W.createElement(u,o),S.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=S.nextNode())!==null&&l.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const h of a.getAttributeNames())if(h.endsWith(_e)){const w=v[s++],$=a.getAttribute(h).split(C),X=/([.?@])?(.*)/.exec(w);l.push({type:1,index:i,name:X[2],strings:$,ctor:X[1]==="."?qe:X[1]==="?"?Fe:X[1]==="@"?Ve:re}),a.removeAttribute(h)}else h.startsWith(C)&&(l.push({type:6,index:i}),a.removeAttribute(h));if(Me.test(a.tagName)){const h=a.textContent.split(C),w=h.length-1;if(w>0){a.textContent=te?te.emptyScript:"";for(let $=0;$<w;$++)a.append(h[$],F()),S.nextNode(),l.push({type:2,index:++i});a.append(h[w],F())}}}else if(a.nodeType===8)if(a.data===Se)l.push({type:2,index:i});else{let h=-1;for(;(h=a.data.indexOf(C,h+1))!==-1;)l.push({type:7,index:i}),h+=C.length-1}i++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function O(r,e,t=r,o){var s,d;if(e===T)return e;let a=o!==void 0?(s=t._$Co)==null?void 0:s[o]:t._$Cl;const i=V(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==i&&((d=a==null?void 0:a._$AO)==null||d.call(a,!1),i===void 0?a=void 0:(a=new i(r),a._$AT(r,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=a:t._$Cl=a),a!==void 0&&(e=O(r,a._$AS(r,e.values),a,o)),e}class Be{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,a=((e==null?void 0:e.creationScope)??P).importNode(t,!0);S.currentNode=a;let i=S.nextNode(),s=0,d=0,l=o[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new G(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new We(i,this,e)),this._$AV.push(u),l=o[++d]}s!==(l==null?void 0:l.index)&&(i=S.nextNode(),s++)}return S.currentNode=P,a}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class G{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,a){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),V(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==T&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Re(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=W.createElement(Pe(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(t);else{const s=new Be(a,this),d=s.u(this.options);s.p(t),this.T(d),this._$AH=s}}_$AC(e){let t=ke.get(e.strings);return t===void 0&&ke.set(e.strings,t=new W(e)),t}k(e){pe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,a=0;for(const i of e)a===t.length?t.push(o=new G(this.O(F()),this.O(F()),this,this.options)):o=t[a],o._$AI(i),a++;a<t.length&&(this._$AR(o&&o._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,a,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}_$AI(e,t=this,o,a){const i=this.strings;let s=!1;if(i===void 0)e=O(this,e,t,0),s=!V(e)||e!==this._$AH&&e!==T,s&&(this._$AH=e);else{const d=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=O(this,d[o+l],t,l),u===T&&(u=this._$AH[l]),s||(s=!V(u)||u!==this._$AH[l]),u===g?e=g:e!==g&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}s&&!a&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qe extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Fe extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ve extends re{constructor(e,t,o,a,i){super(e,t,o,a,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??g)===T)return;const o=this._$AH,a=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==g&&(o===g||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class We{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const ne=B.litHtmlPolyfillSupport;ne==null||ne(W,G),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.3.1");const Qe=(r,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let a=o._$litPart$;if(a===void 0){const i=(t==null?void 0:t.renderBefore)??null;o._$litPart$=a=new G(e.insertBefore(F(),i),i,void 0,t??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis;class q extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return T}}var $e;q._$litElement$=!0,q.finalized=!0,($e=M.litElementHydrateSupport)==null||$e.call(M,{LitElement:q});const le=M.litElementPolyfillSupport;le==null||le({LitElement:q});(M.litElementVersions??(M.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:he},Ge=(r=Ye,e,t)=>{const{kind:o,metadata:a}=t;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),o==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(t.name,r),o==="accessor"){const{name:s}=t;return{set(d){const l=e.get.call(this);e.set.call(this,d),this.requestUpdate(s,l,r)},init(d){return d!==void 0&&this.C(s,void 0,r,d),d}}}if(o==="setter"){const{name:s}=t;return function(d){const l=this[s];e.call(this,d),this.requestUpdate(s,l,r)}}throw Error("Unsupported decorator location: "+o)};function b(r){return(e,t)=>typeof t=="object"?Ge(r,e,t):((o,a,i)=>{const s=a.hasOwnProperty(i);return a.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(a,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(r){return b({...r,state:!0,attribute:!1})}const Ke='/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-300:oklch(80.8% .114 19.571);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-800:oklch(47% .157 37.304);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-indigo-100:oklch(93% .034 272.788);--color-indigo-200:oklch(87% .065 274.039);--color-indigo-800:oklch(39.8% .195 277.366);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-800:oklch(43.8% .218 303.724);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-800:oklch(45.9% .187 3.815);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-2xl:42rem;--container-3xl:48rem;--container-4xl:56rem;--container-5xl:64rem;--container-6xl:72rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--ease-out:cubic-bezier(0,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--animate-bounce:bounce 1s infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.-top-12{top:calc(var(--spacing)*-12)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-3{top:calc(var(--spacing)*3)}.top-5{top:calc(var(--spacing)*5)}.top-8{top:calc(var(--spacing)*8)}.right-0{right:calc(var(--spacing)*0)}.right-2\\.5{right:calc(var(--spacing)*2.5)}.right-3{right:calc(var(--spacing)*3)}.right-4{right:calc(var(--spacing)*4)}.right-5{right:calc(var(--spacing)*5)}.right-6{right:calc(var(--spacing)*6)}.bottom-2\\.5{bottom:calc(var(--spacing)*2.5)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-6{bottom:calc(var(--spacing)*6)}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-2\\.5{left:calc(var(--spacing)*2.5)}.left-4{left:calc(var(--spacing)*4)}.left-5{left:calc(var(--spacing)*5)}.z-10{z-index:10}.z-50{z-index:50}.z-\\[1000\\]{z-index:1000}.m-0{margin:calc(var(--spacing)*0)}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-12{margin-top:calc(var(--spacing)*12)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.aspect-\\[4\\/3\\]{aspect-ratio:4/3}.aspect-square{aspect-ratio:1}.h-1{height:calc(var(--spacing)*1)}.h-2{height:calc(var(--spacing)*2)}.h-3{height:calc(var(--spacing)*3)}.h-3\\.5{height:calc(var(--spacing)*3.5)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-16{height:calc(var(--spacing)*16)}.h-20{height:calc(var(--spacing)*20)}.h-64{height:calc(var(--spacing)*64)}.h-\\[600px\\]{height:600px}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[70vh\\]{max-height:70vh}.max-h-\\[90vh\\]{max-height:90vh}.max-h-full{max-height:100%}.min-h-\\[140px\\]{min-height:140px}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-2{width:calc(var(--spacing)*2)}.w-3{width:calc(var(--spacing)*3)}.w-3\\.5{width:calc(var(--spacing)*3.5)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-14{width:calc(var(--spacing)*14)}.w-16{width:calc(var(--spacing)*16)}.w-20{width:calc(var(--spacing)*20)}.w-80{width:calc(var(--spacing)*80)}.w-96{width:calc(var(--spacing)*96)}.w-full{width:100%}.w-screen{width:100vw}.max-w-2xl{max-width:var(--container-2xl)}.max-w-3xl{max-width:var(--container-3xl)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-5xl{max-width:var(--container-5xl)}.max-w-6xl{max-width:var(--container-6xl)}.max-w-7xl{max-width:var(--container-7xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90vw\\]{max-width:90vw}.max-w-sm{max-width:var(--container-sm)}.min-w-\\[70px\\]{min-width:70px}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-75{--tw-scale-x:75%;--tw-scale-y:75%;--tw-scale-z:75%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-80{--tw-scale-x:80%;--tw-scale-y:80%;--tw-scale-z:80%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-125{--tw-scale-x:125%;--tw-scale-y:125%;--tw-scale-z:125%;scale:var(--tw-scale-x)var(--tw-scale-y)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.resize-y{resize:vertical}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}.gap-6{gap:calc(var(--spacing)*6)}.gap-8{gap:calc(var(--spacing)*8)}.gap-12{gap:calc(var(--spacing)*12)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none{border-radius:0}.rounded-xl{border-radius:var(--radius-xl)}.rounded-b-xl{border-bottom-right-radius:var(--radius-xl);border-bottom-left-radius:var(--radius-xl)}.rounded-br-sm{border-bottom-right-radius:var(--radius-sm)}.rounded-bl-sm{border-bottom-left-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.border-t-2{border-top-style:var(--tw-border-style);border-top-width:2px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-none{--tw-border-style:none;border-style:none}.border-blue-100{border-color:var(--color-blue-100)}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-200{border-color:var(--color-indigo-200)}.border-orange-200{border-color:var(--color-orange-200)}.border-pink-200{border-color:var(--color-pink-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-purple-500{border-color:var(--color-purple-500)}.border-red-300{border-color:var(--color-red-300)}.border-white\\/20{border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.border-white\\/20{border-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.border-yellow-200{border-color:var(--color-yellow-200)}.border-t-white{border-top-color:var(--color-white)}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.bg-black\\/90{background-color:#000000e6}@supports (color:color-mix(in lab,red,red)){.bg-black\\/90{background-color:color-mix(in oklab,var(--color-black)90%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-400{background-color:var(--color-green-400)}.bg-green-600{background-color:var(--color-green-600)}.bg-indigo-100{background-color:var(--color-indigo-100)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-100{background-color:var(--color-purple-100)}.bg-purple-600{background-color:var(--color-purple-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.bg-white\\/10{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.bg-white\\/20{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/20{background-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white)90%,transparent)}}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-400{background-color:var(--color-yellow-400)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/60{--tw-gradient-from:#0009}@supports (color:color-mix(in lab,red,red)){.from-black\\/60{--tw-gradient-from:color-mix(in oklab,var(--color-black)60%,transparent)}}.from-black\\/60{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-transparent{--tw-gradient-via:transparent;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.via-white\\/20{--tw-gradient-via:#fff3}@supports (color:color-mix(in lab,red,red)){.via-white\\/20{--tw-gradient-via:color-mix(in oklab,var(--color-white)20%,transparent)}}.via-white\\/20{--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-5{padding-block:calc(var(--spacing)*5)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-6{padding-top:calc(var(--spacing)*6)}.pr-4{padding-right:calc(var(--spacing)*4)}.pr-12{padding-right:calc(var(--spacing)*12)}.pl-4{padding-left:calc(var(--spacing)*4)}.pl-12{padding-left:calc(var(--spacing)*12)}.text-center{text-align:center}.text-left{text-align:left}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-words{overflow-wrap:break-word}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-blue-100{color:var(--color-blue-100)}.text-blue-600{color:var(--color-blue-600)}.text-blue-800{color:var(--color-blue-800)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-indigo-800{color:var(--color-indigo-800)}.text-orange-800{color:var(--color-orange-800)}.text-pink-800{color:var(--color-pink-800)}.text-purple-500{color:var(--color-purple-500)}.text-purple-800{color:var(--color-purple-800)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-slate-700{color:var(--color-slate-700)}.text-white{color:var(--color-white)}.text-yellow-400{color:var(--color-yellow-400)}.text-yellow-500{color:var(--color-yellow-500)}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-800{color:var(--color-yellow-800)}.line-through{text-decoration-line:line-through}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.opacity-100{opacity:1}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}@media (hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.hover\\:translate-x-full:hover{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:-translate-y-0\\.5:hover{--tw-translate-y:calc(var(--spacing)*-.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:-translate-y-1:hover{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:-translate-y-2:hover{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:scale-110:hover{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:border-gray-500:hover{border-color:var(--color-gray-500)}.hover\\:border-purple-400:hover{border-color:var(--color-purple-400)}.hover\\:border-yellow-300:hover{border-color:var(--color-yellow-300)}.hover\\:bg-black\\/70:hover{background-color:#000000b3}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-black\\/70:hover{background-color:color-mix(in oklab,var(--color-black)70%,transparent)}}.hover\\:bg-blue-50:hover{background-color:var(--color-blue-50)}.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-green-50:hover{background-color:var(--color-green-50)}.hover\\:bg-green-700:hover{background-color:var(--color-green-700)}.hover\\:bg-purple-700:hover{background-color:var(--color-purple-700)}.hover\\:bg-red-50:hover{background-color:var(--color-red-50)}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.hover\\:bg-white\\/30:hover{background-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/30:hover{background-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.hover\\:bg-white\\/95:hover{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/95:hover{background-color:color-mix(in oklab,var(--color-white)95%,transparent)}}.hover\\:text-blue-600:hover{color:var(--color-blue-600)}.hover\\:text-blue-700:hover{color:var(--color-blue-700)}.hover\\:text-blue-800:hover{color:var(--color-blue-800)}.hover\\:text-gray-300:hover{color:var(--color-gray-300)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-green-700:hover{color:var(--color-green-700)}.hover\\:text-red-600:hover{color:var(--color-red-600)}.hover\\:text-red-700:hover{color:var(--color-red-700)}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:border-blue-600:focus{border-color:var(--color-blue-600)}.focus\\:bg-white:focus{background-color:var(--color-white)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-3:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-4:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(4px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-100:focus{--tw-ring-color:var(--color-blue-100)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-blue-500\\/20:focus{--tw-ring-color:#3080ff33}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-500\\/20:focus{--tw-ring-color:color-mix(in oklab,var(--color-blue-500)20%,transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:translate-y-0:active{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.disabled\\:transform-none:disabled{transform:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-gray-400:disabled{background-color:var(--color-gray-400)}.disabled\\:opacity-50:disabled{opacity:.5}@media (hover:hover){.disabled\\:hover\\:scale-100:disabled:hover{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.disabled\\:hover\\:bg-white\\/80:disabled:hover{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.disabled\\:hover\\:bg-white\\/80:disabled:hover{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}}@media (min-width:40rem){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:px-8{padding-inline:calc(var(--spacing)*8)}.sm\\:py-12{padding-block:calc(var(--spacing)*12)}.sm\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}}@media (min-width:48rem){.md\\:top-auto{top:auto}.md\\:right-6{right:calc(var(--spacing)*6)}.md\\:bottom-6{bottom:calc(var(--spacing)*6)}.md\\:left-auto{left:auto}.md\\:mx-0{margin-inline:calc(var(--spacing)*0)}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:h-16{height:calc(var(--spacing)*16)}.md\\:h-24{height:calc(var(--spacing)*24)}.md\\:h-\\[600px\\]{height:600px}.md\\:w-16{width:calc(var(--spacing)*16)}.md\\:w-24{width:calc(var(--spacing)*24)}.md\\:w-96{width:calc(var(--spacing)*96)}.md\\:max-w-\\[80\\%\\]{max-width:80%}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:rounded-2xl{border-radius:var(--radius-2xl)}.md\\:border{border-style:var(--tw-border-style);border-width:1px}.md\\:p-8{padding:calc(var(--spacing)*8)}.md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.md\\:text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}}@media (min-width:64rem){.lg\\:col-span-1{grid-column:span 1/span 1}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:items-center{align-items:center}}@media (min-width:80rem){.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}',Je=Ie(Ke);class k extends q{connectedCallback(){super.connectedCallback(),this.shadowRoot&&Ae(this.shadowRoot,[Je])}}var Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,K=(r,e,t,o)=>{for(var a=o>1?void 0:o?Ze(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(a=(o?s(e,t,a):s(a))||a);return o&&a&&Xe(e,t,a),a};let z=class extends k{constructor(){super(...arguments),this.openItems=new Set,this.searchQuery="",this.selectedCategory="All",this.helpfulVotes=new Map,this.faqData=[{question:"What is Lit and how does it work?",answer:"Lit is a simple library for building fast, lightweight web components. It uses modern web standards like Custom Elements, Shadow DOM, and HTML templates. Lit provides a declarative template system with efficient updates through its reactive update cycle, making it perfect for creating reusable components.",category:"Basics",tags:["fundamentals","overview","web-components"],helpfulCount:45,isPopular:!0},{question:"How do I get started with Lit components?",answer:"To get started with Lit: 1) Install Lit via npm (`npm install lit`), 2) Create a class that extends LitElement, 3) Use the @customElement decorator to define your tag name, 4) Define your template in the render() method using the `html` template function, 5) Add reactive properties with @property or @state decorators.",category:"Getting Started",tags:["installation","setup","tutorial"],helpfulCount:38,isPopular:!0},{question:"Can I use Lit with other frameworks?",answer:"Absolutely! Lit components are standard web components, which means they work seamlessly with any framework including React, Vue, Angular, or vanilla JavaScript. They're framework-agnostic and can be used as drop-in components in any web application.",category:"Integration",tags:["compatibility","frameworks","interoperability"],helpfulCount:29},{question:"What are the performance benefits of Lit?",answer:"Lit offers several performance advantages: efficient updates through its reactive update cycle that only re-renders changed parts, small bundle size (around 5KB gzipped), leverages browser-native features like Shadow DOM for encapsulation, and minimal runtime overhead compared to larger frameworks.",category:"Performance",tags:["optimization","speed","bundle-size"],helpfulCount:33},{question:"How do I handle events in Lit components?",answer:"You can handle events in Lit using: 1) Event binding in templates with @click syntax, 2) Adding event listeners in connectedCallback(), 3) Dispatching custom events with this.dispatchEvent(), 4) Using event delegation for dynamic content. Lit also supports event listener options and automatic cleanup.",category:"Events",tags:["event-handling","interaction","custom-events"],helpfulCount:26},{question:"How do I style Lit components?",answer:"Lit components can be styled using: 1) Static styles property with css template literal, 2) Adoptable stylesheets for sharing styles, 3) CSS custom properties for theming, 4) External stylesheets, 5) Styled with CSS-in-JS libraries. Shadow DOM provides style encapsulation by default.",category:"Styling",tags:["css","styling","theming"],helpfulCount:22},{question:"What's the difference between @property and @state?",answer:"@property decorators create reactive properties that can be set from outside the component and are typically reflected as attributes. @state decorators create internal reactive state that triggers re-renders but aren't intended to be set from outside the component.",category:"Basics",tags:["properties","state","reactivity"],helpfulCount:31},{question:"How do I test Lit components?",answer:"Lit components can be tested using standard web testing tools: 1) Unit testing with frameworks like Jest or Mocha, 2) @web/test-runner for browser-based testing, 3) Testing Library for user-focused testing, 4) Puppeteer or Playwright for e2e testing. Lit provides testing utilities for common scenarios.",category:"Testing",tags:["testing","unit-tests","e2e"],helpfulCount:19}]}get categories(){return["All",...[...new Set(this.faqData.map(e=>e.category))]]}get filteredFAQs(){let r=this.faqData;if(this.selectedCategory!=="All"&&(r=r.filter(e=>e.category===this.selectedCategory)),this.searchQuery.trim()){const e=this.searchQuery.toLowerCase();r=r.filter(t=>{var o;return t.question.toLowerCase().includes(e)||t.answer.toLowerCase().includes(e)||((o=t.tags)==null?void 0:o.some(a=>a.toLowerCase().includes(e)))})}return r}toggleItem(r){this.openItems.has(r)?this.openItems.delete(r):this.openItems.add(r),this.requestUpdate()}handleSearch(r){this.searchQuery=r.target.value}clearSearch(){this.searchQuery=""}handleHelpfulVote(r,e){this.helpfulVotes.set(r,e),this.requestUpdate()}getCategoryColor(r){return{Basics:"bg-blue-100 text-blue-800 border-blue-200","Getting Started":"bg-green-100 text-green-800 border-green-200",Integration:"bg-purple-100 text-purple-800 border-purple-200",Performance:"bg-orange-100 text-orange-800 border-orange-200",Events:"bg-pink-100 text-pink-800 border-pink-200",Styling:"bg-indigo-100 text-indigo-800 border-indigo-200",Testing:"bg-yellow-100 text-yellow-800 border-yellow-200"}[r]||"bg-gray-100 text-gray-800 border-gray-200"}highlightSearchTerm(r){if(!this.searchQuery.trim())return r;const e=new RegExp(`(${this.searchQuery})`,"gi");return r.replace(e,'<span class="search-highlight">$1</span>')}expandAll(){this.filteredFAQs.forEach((r,e)=>{this.openItems.add(e)}),this.requestUpdate()}collapseAll(){this.openItems.clear(),this.requestUpdate()}render(){const r=this.filteredFAQs,e=this.faqData.filter(t=>t.isPopular);return n`
      <div class="min-h-screen bg-gray-50 py-8 px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Lit and web components. Search or browse by category to quickly find what you need.
            </p>
          </div>

          <!-- Popular Questions (if no search/filter) -->
          ${this.searchQuery===""&&this.selectedCategory==="All"?n`
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Most Popular
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${e.slice(0,4).map(t=>n`
                  <div class="bg-white p-4 rounded-xl border-2 border-yellow-200 hover:border-yellow-300 transition-colors cursor-pointer"
                       @click=${()=>{const o=this.faqData.indexOf(t);this.toggleItem(o)}}>
                    <h3 class="font-semibold text-gray-800 text-sm mb-2">${t.question}</h3>
                    <div class="flex items-center justify-between">
                      <span class="text-xs px-2 py-1 rounded-full border ${this.getCategoryColor(t.category)}">
                        ${t.category}
                      </span>
                      <span class="text-xs text-gray-500 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                        </svg>
                        ${t.helpfulCount}
                      </span>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          `:""}

          <!-- Search and Filter Section -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 mb-8">
            <div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <!-- Search Bar -->
              <div class="flex-1 relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  class="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  placeholder="Search questions, answers, or tags..."
                  .value=${this.searchQuery}
                  @input=${this.handleSearch}
                />
                ${this.searchQuery?n`
                  <button
                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                    @click=${this.clearSearch}
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                `:""}
              </div>

              <!-- Category Filter -->
              <div class="flex flex-wrap gap-2">
                ${this.categories.map(t=>n`
                  <button
                    class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${this.selectedCategory===t?"bg-blue-600 text-white shadow-md":"bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"}"
                    @click=${()=>this.selectedCategory=t}
                  >
                    ${t}
                  </button>
                `)}
              </div>
            </div>

            <!-- Results Summary and Controls -->
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <span class="text-gray-600 font-medium">
                ${r.length} question${r.length!==1?"s":""} 
                ${this.searchQuery||this.selectedCategory!=="All"?"found":"available"}
              </span>
              <div class="flex gap-2">
                <button
                  class="text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                  @click=${this.expandAll}
                >
                  Expand All
                </button>
                <button
                  class="text-sm text-gray-600 hover:text-gray-700 font-medium px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors"
                  @click=${this.collapseAll}
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          <!-- FAQ Items -->
          <div class="space-y-4">
            ${r.length===0?n`
              <div class="text-center py-12">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">No questions found</h3>
                <p class="text-gray-600">Try adjusting your search or category filter.</p>
              </div>
            `:""}

            ${r.map((t,o)=>{const a=this.faqData.indexOf(t),i=this.openItems.has(a),s=this.helpfulVotes.get(a);return n`
                <div class="faq-item bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
                     style="animation-delay: ${o*.1}s">
                  <!-- Question Header -->
                  <button
                    class="w-full p-6 text-left transition-all duration-200 hover:bg-gray-50 ${i?"bg-blue-50 border-b-2 border-blue-100":""}"
                    @click=${()=>this.toggleItem(a)}
                    aria-expanded="${i}"
                  >
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                            ${o+1}
                          </div>
                          ${t.isPopular?n`
                            <span class="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
                              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              Popular
                            </span>
                          `:""}
                          <span class="text-xs px-3 py-1 rounded-full border font-medium ${this.getCategoryColor(t.category)}">
                            ${t.category}
                          </span>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2" .innerHTML=${this.highlightSearchTerm(t.question)}></h3>
                        ${t.tags?n`
                          <div class="flex flex-wrap gap-2">
                            ${t.tags.map(d=>n`
                              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">#${d}</span>
                            `)}
                          </div>
                        `:""}
                      </div>
                      <div class="flex flex-col items-center gap-2">
                        <svg
                          class="w-6 h-6 text-gray-400 transition-transform duration-300 ${i?"rotate-180 text-blue-600":""}"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                        ${t.helpfulCount?n`
                          <span class="text-xs text-gray-500 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                            </svg>
                            ${t.helpfulCount}
                          </span>
                        `:""}
                      </div>
                    </div>
                  </button>

                  <!-- Answer Content -->
                  ${i?n`
                    <div class="answer-content border-t border-gray-100">
                      <div class="p-6">
                        <div class="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-4">
                          <p class="text-gray-700 leading-relaxed text-base mb-0" .innerHTML=${this.highlightSearchTerm(t.answer)}></p>
                        </div>

                        <!-- Helpful Section -->
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span class="text-sm font-medium text-gray-600">Was this helpful?</span>
                          <div class="flex gap-3">
                            <button
                              class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${s===!0?"bg-green-100 text-green-700 border border-green-300":"text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200"}"
                              @click=${()=>this.handleHelpfulVote(a,!0)}
                            >
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                              </svg>
                              Yes
                            </button>
                            <button
                              class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${s===!1?"bg-red-100 text-red-700 border border-red-300":"text-gray-600 hover:bg-red-50 hover:text-red-700 border border-gray-200"}"
                              @click=${()=>this.handleHelpfulVote(a,!1)}
                            >
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path>
                              </svg>
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  `:""}
                </div>
              `})}
          </div>

          <!-- Contact Support Section -->
          <div class="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 text-center">
            <div class="max-w-2xl mx-auto">
              <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Can't find what you're looking for? Our support team is here to help you get the answers you need.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contact Support
                </button>
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-gray-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};z.styles=Y`
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

    @keyframes slideDown {
      from {
        max-height: 0;
        opacity: 0;
      }
      to {
        max-height: 500px;
        opacity: 1;
      }
    }

    .faq-item {
      animation: fadeIn 0.5s ease-out;
    }

    .answer-content {
      animation: slideDown 0.3s ease-out;
    }

    .search-highlight {
      background-color: #fef3c7;
      padding: 0 2px;
      border-radius: 2px;
    }
  `;K([c()],z.prototype,"openItems",2);K([c()],z.prototype,"searchQuery",2);K([c()],z.prototype,"selectedCategory",2);K([c()],z.prototype,"helpfulVotes",2);z=K([x("faq-component")],z);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,D=(r,e,t,o)=>{for(var a=o>1?void 0:o?tt(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(a=(o?s(e,t,a):s(a))||a);return o&&a&&et(e,t,a),a};let f=class extends k{constructor(){super(...arguments),this.images=[{src:"https://picsum.photos/800/600?random=1",thumb:"https://picsum.photos/400/300?random=1",title:"Beautiful Landscape",description:"A stunning view of mountains and valleys with morning mist",category:"Nature"},{src:"https://picsum.photos/800/600?random=2",thumb:"https://picsum.photos/400/300?random=2",title:"City Skyline",description:"Modern architecture against the evening sky with city lights",category:"Urban"},{src:"https://picsum.photos/800/600?random=3",thumb:"https://picsum.photos/400/300?random=3",title:"Ocean Waves",description:"Peaceful waves crashing on the shore during golden hour",category:"Nature"},{src:"https://picsum.photos/800/600?random=4",thumb:"https://picsum.photos/400/300?random=4",title:"Forest Path",description:"A winding path through ancient trees in autumn colors",category:"Nature"},{src:"https://picsum.photos/800/600?random=5",thumb:"https://picsum.photos/400/300?random=5",title:"Desert Sunset",description:"Golden hour in the vast desert with dramatic clouds",category:"Landscape"},{src:"https://picsum.photos/800/600?random=6",thumb:"https://picsum.photos/400/300?random=6",title:"Mountain Peak",description:"Snow-capped peaks reaching for the sky in winter",category:"Landscape"},{src:"https://picsum.photos/800/600?random=7",thumb:"https://picsum.photos/400/300?random=7",title:"Urban Architecture",description:"Contemporary building design with geometric patterns",category:"Urban"},{src:"https://picsum.photos/800/600?random=8",thumb:"https://picsum.photos/400/300?random=8",title:"Tropical Beach",description:"Crystal clear waters and white sand under palm trees",category:"Nature"}],this.selectedImageIndex=-1,this.isModalOpen=!1,this.loadingImages=new Set,this.errorImages=new Set,this.selectedCategory="All",this.handleKeyDown=r=>{if(this.isModalOpen)switch(r.key){case"Escape":this.closeModal();break;case"ArrowLeft":this.navigateModal("prev");break;case"ArrowRight":this.navigateModal("next");break}}}get categories(){return["All",...[...new Set(this.images.map(e=>e.category))]]}get filteredImages(){return this.selectedCategory==="All"?this.images:this.images.filter(r=>r.category===this.selectedCategory)}openModal(r){const e=this.filteredImages.findIndex((o,a)=>a===r),t=this.images.findIndex(o=>o===this.filteredImages[e]);this.selectedImageIndex=t,this.isModalOpen=!0,document.body.style.overflow="hidden"}closeModal(){this.isModalOpen=!1,this.selectedImageIndex=-1,document.body.style.overflow=""}navigateModal(r){r==="prev"?this.selectedImageIndex=this.selectedImageIndex>0?this.selectedImageIndex-1:this.images.length-1:this.selectedImageIndex=this.selectedImageIndex<this.images.length-1?this.selectedImageIndex+1:0}handleImageLoad(r){this.loadingImages.delete(r),this.requestUpdate()}handleImageError(r){this.loadingImages.delete(r),this.errorImages.add(r),this.requestUpdate()}handleImageLoadStart(r){this.loadingImages.add(r),this.requestUpdate()}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown),document.body.style.overflow=""}render(){const r=this.selectedImageIndex>=0?this.images[this.selectedImageIndex]:null;return n`
      <div class="min-h-screen bg-gray-50 py-8 px-4">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our curated collection of stunning photography from around the world
            </p>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            ${this.categories.map(e=>n`
              <button
                class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${this.selectedCategory===e?"bg-blue-600 text-white shadow-md":"bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}"
                @click=${()=>this.selectedCategory=e}
              >
                ${e}
              </button>
            `)}
          </div>

          <!-- Gallery Grid -->
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              ${this.filteredImages.map((e,t)=>{const o=this.loadingImages.has(t),a=this.errorImages.has(t);return n`
                  <div 
                    class="image-card group bg-white rounded-xl overflow-hidden shadow-md border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-blue-300"
                    @click=${()=>this.openModal(t)}
                    style="animation-delay: ${t*.1}s"
                  >
                    <div class="relative overflow-hidden aspect-[4/3]">
                      ${o?n`
                        <div class="w-full h-full image-loading"></div>
                      `:""}
                      
                      ${a?n`
                        <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div class="text-center text-gray-400">
                            <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p class="text-sm">Failed to load</p>
                          </div>
                        </div>
                      `:n`
                        <img 
                          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          src="${e.thumb}"
                          alt="${e.title}"
                          @load=${()=>this.handleImageLoad(t)}
                          @error=${()=>this.handleImageError(t)}
                          @loadstart=${()=>this.handleImageLoadStart(t)}
                        />
                      `}
                      
                      <!-- Overlay -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-4 left-4 right-4">
                          <span class="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                            ${e.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="p-4">
                      <h3 class="font-bold text-gray-800 text-lg mb-2 line-clamp-1">${e.title}</h3>
                      <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">${e.description}</p>
                    </div>
                  </div>
                `})}
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      ${this.isModalOpen&&r?n`
        <div 
          class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          @click=${this.closeModal}
        >
          <div 
            class="modal-content relative max-w-6xl max-h-full w-full"
            @click=${e=>e.stopPropagation()}
          >
            <!-- Close Button -->
            <button 
              class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              @click=${this.closeModal}
              aria-label="Close modal"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <!-- Navigation Buttons -->
            <button 
              class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-3"
              @click=${()=>this.navigateModal("prev")}
              aria-label="Previous image"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button 
              class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-3"
              @click=${()=>this.navigateModal("next")}
              aria-label="Next image"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            <!-- Image Container -->
            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img 
                class="w-full h-auto max-h-[70vh] object-contain"
                src="${r.src}"
                alt="${r.title}"
              />
              
              <!-- Image Info -->
              <div class="p-6 bg-white">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        ${r.category}
                      </span>
                      <span class="text-gray-400 text-sm">
                        ${this.selectedImageIndex+1} of ${this.images.length}
                      </span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">${r.title}</h2>
                    <p class="text-gray-600 leading-relaxed">${r.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:""}
    `}};f.styles=Y`
    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes imageSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modal-content {
      animation: modalFadeIn 0.3s ease-out;
    }

    .image-card {
      animation: imageSlideIn 0.5s ease-out;
    }

    .image-loading {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }

    @keyframes loading {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `;D([b({type:Array})],f.prototype,"images",2);D([c()],f.prototype,"selectedImageIndex",2);D([c()],f.prototype,"isModalOpen",2);D([c()],f.prototype,"loadingImages",2);D([c()],f.prototype,"errorImages",2);D([c()],f.prototype,"selectedCategory",2);f=D([x("gallery-component")],f);var rt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,ae=(r,e,t,o)=>{for(var a=o>1?void 0:o?at(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(a=(o?s(e,t,a):s(a))||a);return o&&a&&rt(e,t,a),a};let L=class extends k{constructor(){super(...arguments),this.reviews=[{reviewerName:"Yash",rating:5,reviewText:"This is an amazing product! The quality exceeded my expectations and the customer service was outstanding. Highly recommend to anyone looking for reliability and excellence!",reviewDate:"December 15, 2024",isVerified:!0,helpfulCount:12},{reviewerName:"Sarah Johnson",rating:4,reviewText:"Really good product overall. Easy to use and well-designed. Only minor issue was the delivery took a bit longer than expected, but the quality makes up for it.",reviewDate:"December 12, 2024",isVerified:!0,helpfulCount:8},{reviewerName:"Mike Chen",rating:5,reviewText:"Fantastic! This has made my workflow so much more efficient. The features are exactly what I needed and the interface is intuitive.",reviewDate:"December 10, 2024",isVerified:!1,helpfulCount:15},{reviewerName:"Emily Davis",rating:4.5,reviewText:"Great value for money. The interface is intuitive and the performance is solid. Would definitely buy again and recommend to colleagues.",reviewDate:"December 8, 2024",isVerified:!0,helpfulCount:6},{reviewerName:"Alex Rodriguez",rating:3,reviewText:"It's okay, does what it's supposed to do. Could use some improvements in the user interface, but overall functional and meets basic needs.",reviewDate:"December 5, 2024",isVerified:!1,helpfulCount:3}],this.sortBy="newest",this.filterRating=null}renderStars(r,e="md"){const t=Math.floor(r),o=r-t>=.5,a=5-t-(o?1:0),i={sm:"text-sm",md:"text-lg",lg:"text-2xl"};return n`
      <div class="flex items-center gap-0.5">
        ${Array(t).fill(0).map(()=>n`
          <svg class="${i[e]} star-filled" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        `)}
        
        ${o?n`
          <div class="relative">
            <svg class="${i[e]} star-empty" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <div class="absolute top-0 left-0 overflow-hidden w-1/2">
              <svg class="${i[e]} star-filled" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
        `:""}

        ${Array(a).fill(0).map(()=>n`
          <svg class="${i[e]} star-empty" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        `)}
      </div>
    `}getAverageRating(){if(this.reviews.length===0)return 0;const r=this.reviews.reduce((e,t)=>e+t.rating,0);return Math.round(r/this.reviews.length*10)/10}getRatingDistribution(){const r={5:0,4:0,3:0,2:0,1:0};return this.reviews.forEach(e=>{const t=Math.round(e.rating);r[t]++}),r}get sortedAndFilteredReviews(){let r=this.reviews;return this.filterRating!==null&&(r=r.filter(e=>Math.round(e.rating)===this.filterRating)),r.sort((e,t)=>{switch(this.sortBy){case"newest":return new Date(t.reviewDate).getTime()-new Date(e.reviewDate).getTime();case"oldest":return new Date(e.reviewDate).getTime()-new Date(t.reviewDate).getTime();case"highest":return t.rating-e.rating;case"lowest":return e.rating-t.rating;default:return 0}})}formatDate(r){return new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}render(){const r=this.getAverageRating(),e=this.getRatingDistribution(),t=this.sortedAndFilteredReviews;return n`
      <div class="min-h-screen bg-white py-8 px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Customer Reviews</h1>
            <p class="text-gray-600 text-lg">See what our customers are saying about their experience</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Rating Summary -->
            <div class="lg:col-span-1">
              <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 sticky top-8">
                <!-- Overall Rating -->
                <div class="text-center mb-6">
                  <div class="text-5xl font-bold text-gray-800 mb-2">${r}</div>
                  <div class="mb-3">
                    ${this.renderStars(r,"lg")}
                  </div>
                  <p class="text-gray-600 font-medium">
                    Based on ${this.reviews.length} review${this.reviews.length!==1?"s":""}
                  </p>
                </div>

                <!-- Rating Distribution -->
                <div class="space-y-3">
                  ${[5,4,3,2,1].map(o=>{const a=e[o],i=this.reviews.length>0?a/this.reviews.length*100:0;return n`
                      <div class="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                           @click=${()=>this.filterRating=this.filterRating===o?null:o}>
                        <span class="text-sm font-medium text-gray-600 w-8">${o}</span>
                        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            class="h-full bg-yellow-400 transition-all duration-500"
                            style="width: ${i}%"
                          ></div>
                        </div>
                        <span class="text-sm text-gray-500 w-8">${a}</span>
                      </div>
                    `})}
                </div>

                <!-- Active Filter -->
                ${this.filterRating?n`
                  <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-blue-800">Showing ${this.filterRating}-star reviews</span>
                      <button 
                        class="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        @click=${()=>this.filterRating=null}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                `:""}
              </div>
            </div>

            <!-- Reviews List -->
            <div class="lg:col-span-2">
              <!-- Sort Controls -->
              <div class="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span class="font-medium text-gray-700">
                  ${t.length} review${t.length!==1?"s":""}
                </span>
                <div class="flex items-center gap-2">
                  <label class="text-sm font-medium text-gray-600">Sort by:</label>
                  <select 
                    class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    .value=${this.sortBy}
                    @change=${o=>this.sortBy=o.target.value}
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="highest">Highest rated</option>
                    <option value="lowest">Lowest rated</option>
                  </select>
                </div>
              </div>

              <!-- Reviews -->
              <div class="space-y-6">
                ${t.length===0?n`
                  <div class="text-center py-12">
                    <div class="text-gray-400 mb-4">
                      <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 text-lg">No reviews match your current filter.</p>
                  </div>
                `:""}

                ${t.map((o,a)=>n`
                  <article 
                    class="review-card bg-white rounded-2xl p-6 shadow-md border-2 border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
                    style="animation-delay: ${a*.1}s"
                  >
                    <!-- Reviewer Header -->
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <span class="text-white font-bold text-lg">
                            ${o.reviewerName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div class="flex items-center gap-2">
                            <h3 class="font-bold text-gray-800 text-lg">${o.reviewerName}</h3>
                            ${o.isVerified?n`
                              <span class="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Verified
                              </span>
                            `:""}
                          </div>
                          <div class="flex items-center gap-2 mt-1">
                            ${this.renderStars(o.rating,"sm")}
                            <span class="text-sm text-gray-500">${o.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      <time class="text-sm text-gray-500 whitespace-nowrap">
                        ${this.formatDate(o.reviewDate)}
                      </time>
                    </div>

                    <!-- Review Text -->
                    <p class="text-gray-700 leading-relaxed mb-4 text-base">
                      ${o.reviewText}
                    </p>

                    <!-- Review Actions -->
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div class="flex items-center gap-4">
                        <button class="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm transition-colors">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 6v4m-2 8H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                          </svg>
                          Helpful (${o.helpfulCount||0})
                        </button>
                        <button class="text-gray-500 hover:text-red-600 text-sm transition-colors">
                          Report
                        </button>
                      </div>
                    </div>
                  </article>
                `)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};L.styles=Y`
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

    .review-card {
      animation: fadeIn 0.5s ease-out;
    }

    .star-filled {
      color: #fbbf24;
    }

    .star-empty {
      color: #d1d5db;
    }

    .progress-bar {
      background: linear-gradient(to right, #fbbf24 var(--fill-width, 0%), #e5e7eb var(--fill-width, 0%));
    }
  `;ae([b({type:Array})],L.prototype,"reviews",2);ae([c()],L.prototype,"sortBy",2);ae([c()],L.prototype,"filterRating",2);L=ae([x("review-component")],L);var ot=Object.defineProperty,it=Object.getOwnPropertyDescriptor,J=(r,e,t,o)=>{for(var a=o>1?void 0:o?it(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(a=(o?s(e,t,a):s(a))||a);return o&&a&&ot(e,t,a),a};let E=class extends k{constructor(){super(...arguments),this.formData={firstName:"",lastName:"",email:"",phone:"",age:"",gender:"",message:"",newsletter:!1},this.submitted=!1,this.error="",this.isSubmitting=!1}handleInputChange(r,e){this.formData={...this.formData,[r]:e}}async handleSubmit(r){if(r.preventDefault(),this.error="",this.isSubmitting=!0,!this.formData.firstName||!this.formData.lastName||!this.formData.email){this.error="Please fill in all required fields (First Name, Last Name, Email)",this.isSubmitting=!1;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)){this.error="Please enter a valid email address",this.isSubmitting=!1;return}await new Promise(t=>setTimeout(t,1500)),console.log("Form submitted:",this.formData),this.submitted=!0,this.isSubmitting=!1,setTimeout(()=>{this.submitted=!1,this.formData={firstName:"",lastName:"",email:"",phone:"",age:"",gender:"",message:"",newsletter:!1}},4e3)}render(){return n`
      <div class="min-h-screen bg-gray-50 py-8 px-4 sm:py-12">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl border-2 border-gray-300 overflow-hidden">
            <!-- Header Section -->
            <div class="bg-blue-600 px-6 py-8 text-center sm:px-8">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">User Information Form</h2>
              <p class="text-blue-100 text-sm sm:text-base">Please fill out your details below</p>
            </div>

            <!-- Form Content -->
            <div class="px-6 py-8 sm:px-8 bg-white">
              ${this.submitted?n`
                  <div class="bg-green-50 border-2 border-green-300 text-green-800 px-6 py-4 rounded-xl mb-6 animate-fade-in">
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h3 class="font-semibold">Success!</h3>
                        <p class="text-sm">Your information has been submitted successfully.</p>
                      </div>
                    </div>
                  </div>
                `:""}

              ${this.error?n`
                  <div class="bg-red-50 border-2 border-red-300 text-red-800 px-6 py-4 rounded-xl mb-6 animate-fade-in">
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h3 class="font-semibold">Error</h3>
                        <p class="text-sm">${this.error}</p>
                      </div>
                    </div>
                  </div>
                `:""}

              <form @submit=${this.handleSubmit} class="space-y-6">
                <!-- Name Fields Row -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="firstName">
                      First Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      .value=${this.formData.firstName}
                      @input=${r=>this.handleInputChange("firstName",r.target.value)}
                      required
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="lastName">
                      Last Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      .value=${this.formData.lastName}
                      @input=${r=>this.handleInputChange("lastName",r.target.value)}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <!-- Email Field -->
                <div class="space-y-3">
                  <label class="block font-bold text-gray-800 text-base" for="email">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      class="w-full pl-12 pr-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      .value=${this.formData.email}
                      @input=${r=>this.handleInputChange("email",r.target.value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <!-- Phone and Age Row -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="phone">
                      Phone Number
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        class="w-full pl-12 pr-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                        .value=${this.formData.phone}
                        @input=${r=>this.handleInputChange("phone",r.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="age">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      min="1"
                      max="120"
                      .value=${this.formData.age}
                      @input=${r=>this.handleInputChange("age",r.target.value)}
                      placeholder="25"
                    />
                  </div>
                </div>

                <!-- Gender Field -->
                <div class="space-y-3">
                  <label class="block font-bold text-gray-800 text-base" for="gender">
                    Gender
                  </label>
                  <div class="relative">
                    <select
                      id="gender"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 appearance-none bg-gray-50 focus:bg-white shadow-sm"
                      .value=${this.formData.gender}
                      @change=${r=>this.handleInputChange("gender",r.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="space-y-3">
                  <label class="block font-bold text-gray-800 text-base" for="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 resize-y min-h-[140px] bg-gray-50 focus:bg-white shadow-sm"
                    placeholder="Tell us something about yourself..."
                    .value=${this.formData.message}
                    @input=${r=>this.handleInputChange("message",r.target.value)}
                  ></textarea>
                </div>

                <!-- Newsletter Checkbox -->
                <div class="space-y-3">
                  <div class="flex items-start gap-4 p-5 bg-blue-50 rounded-lg border-2 border-blue-200 hover:bg-blue-100 transition-colors duration-200">
                    <input
                      type="checkbox"
                      id="newsletter"
                      class="w-6 h-6 text-blue-600 bg-white border-3 border-gray-400 rounded focus:ring-blue-500 focus:ring-3 mt-1 flex-shrink-0"
                      .checked=${this.formData.newsletter}
                      @change=${r=>this.handleInputChange("newsletter",r.target.checked)}
                    />
                    <div class="flex-1">
                      <label class="font-bold text-gray-800 text-base cursor-pointer" for="newsletter">
                        Subscribe to newsletter
                      </label>
                      <p class="text-sm text-gray-600 mt-2">Get updates about new features and announcements delivered to your inbox</p>
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="pt-6">
                  <button 
                    type="submit" 
                    ?disabled=${this.isSubmitting}
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white border-none px-8 py-5 rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    ${this.isSubmitting?n`
                        <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      `:n`
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Submit Information
                      `}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}};E.styles=Y`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;J([c()],E.prototype,"formData",2);J([c()],E.prototype,"submitted",2);J([c()],E.prototype,"error",2);J([c()],E.prototype,"isSubmitting",2);E=J([x("form-component")],E);var st=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,oe=(r,e,t,o)=>{for(var a=o>1?void 0:o?nt(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(a=(o?s(e,t,a):s(a))||a);return o&&a&&st(e,t,a),a};let Q=class extends k{constructor(){super(...arguments),this.product={id:"1",title:"Premium Wireless Headphones",description:"Experience crystal-clear audio with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals.",price:"$199.99",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=250&fit=crop","https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=250&fit=crop"],imageAlts:["Premium wireless headphones","Headphones side view","Headphones detail","Headphones in use"]},this.isFullscreenOpen=!1,this.currentImageIndex=0,this.handleKeyDown=r=>{r.key==="Escape"&&this.isFullscreenOpen&&this.closeFullscreen()}}openFullscreen(){this.isFullscreenOpen=!0,document.body.style.overflow="hidden"}closeFullscreen(){this.isFullscreenOpen=!1,document.body.style.overflow=""}handleOverlayClick(r){r.target===r.currentTarget&&this.closeFullscreen()}nextImage(){this.currentImageIndex<this.product.images.length-1&&this.currentImageIndex++}prevImage(){this.currentImageIndex>0&&this.currentImageIndex--}goToImage(r){this.currentImageIndex=r}openImageFullscreen(r){this.currentImageIndex=r,this.openFullscreen()}addToCart(){this.dispatchEvent(new CustomEvent("product-added",{detail:{productId:this.product.id,productName:this.product.title,productImage:this.product.images[0],price:parseFloat(this.product.price.replace("$","")),quantity:1,cartItemCount:1,cartTotal:parseFloat(this.product.price.replace("$",""))},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown),document.body.style.overflow=""}render(){var t;const r=this.product.images[this.currentImageIndex],e=((t=this.product.imageAlts)==null?void 0:t[this.currentImageIndex])||this.product.title;return n`
      <div class="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 max-w-sm mx-auto animate-fadeIn">
        <div class="relative w-full h-64 rounded-lg overflow-hidden mb-4">
          <div 
            class="relative w-full h-full flex transition-transform duration-300 ease-out"
            style="transform: translateX(-${this.currentImageIndex*100}%)"
          >
            ${this.product.images.map((o,a)=>{var i;return n`
              <img
                src="${o}"
                alt="${((i=this.product.imageAlts)==null?void 0:i[a])||this.product.title}"
                class="w-full h-full object-cover cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105"
                @click=${()=>this.openImageFullscreen(a)}
              />
            `})}
          </div>
          
          ${this.product.images.length>1?n`
            <button 
              class="absolute top-1/2 left-2.5 -translate-y-1/2 bg-white/80 hover:bg-white/95 border-0 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-xl font-bold text-slate-700 transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/80"
              @click=${this.prevImage}
              ?disabled=${this.currentImageIndex===0}
            >
              ‹
            </button>
            <button 
              class="absolute top-1/2 right-2.5 -translate-y-1/2 bg-white/80 hover:bg-white/95 border-0 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-xl font-bold text-slate-700 transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/80"
              @click=${this.nextImage}
              ?disabled=${this.currentImageIndex===this.product.images.length-1}
            >
              ›
            </button>
            
            <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              ${this.product.images.map((o,a)=>n`
                <div 
                  class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${a===this.currentImageIndex?"bg-white/90 scale-125":"bg-white/50"}"
                  @click=${()=>this.goToImage(a)}
                ></div>
              `)}
            </div>
          `:""}
        </div>
        
        <h3 class="text-2xl font-bold text-slate-700 mb-2 leading-tight">${this.product.title}</h3>
        
        <p class="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">${this.product.description}</p>
        
        <div class="text-xl font-bold text-red-500 mb-4">${this.product.price}</div>
        
        <div class="flex gap-3">
          <button 
            class="flex-1 py-3 px-6 border-0 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-0.5"
            @click=${this.addToCart}
          >
            Add to Cart
          </button>
          <button class="flex-1 py-3 px-6 border-2 border-gray-300 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 bg-gray-100 text-slate-700 hover:bg-gray-200 hover:border-gray-400">
            View Details
          </button>
        </div>
      </div>

      <div 
        class="fixed top-0 left-0 w-screen h-screen bg-black/90 flex items-center justify-center z-[1000] transition-all duration-300 ${this.isFullscreenOpen?"opacity-100 visible":"opacity-0 invisible"}"
        @click=${this.handleOverlayClick}
      >
        <button 
          class="absolute top-5 right-5 bg-white/20 hover:bg-white/30 border-0 text-white text-3xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-300"
          @click=${this.closeFullscreen}
        >
          ×
        </button>
        <img
          src="${r}"
          alt="${e}"
          class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg transition-transform duration-300 ${this.isFullscreenOpen?"scale-100":"scale-80"}"
        />
      </div>

      <style>
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
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      </style>
    `}};oe([b({type:Object})],Q.prototype,"product",2);oe([c()],Q.prototype,"isFullscreenOpen",2);oe([c()],Q.prototype,"currentImageIndex",2);Q=oe([x("product-component")],Q);var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,R=(r,e,t,o)=>{for(var a=o>1?void 0:o?dt(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(a=(o?s(e,t,a):s(a))||a);return o&&a&&lt(e,t,a),a};let A=class extends k{constructor(){super(...arguments),this.isOpen=!1,this.messages=[{id:"1",text:"Hello! I'm your AI assistant. I'm here to help you with any questions or tasks you might have. How can I assist you today?",isUser:!1,timestamp:new Date}],this.currentMessage="",this.isTyping=!1,this.isMinimized=!1,this.messageId=2}toggleChat(){this.isMinimized?this.isMinimized=!1:this.isOpen=!this.isOpen,"vibrate"in navigator&&navigator.vibrate(50),this.isOpen&&this.updateComplete.then(()=>{var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("input");r==null||r.focus()})}minimizeChat(){this.isMinimized=!0}handleInputChange(r){const e=r.target;this.currentMessage=e.value}handleKeyPress(r){r.key==="Enter"&&!r.shiftKey?(r.preventDefault(),this.sendMessage()):r.key==="Escape"&&this.toggleChat()}async sendMessage(){if(!this.currentMessage.trim())return;const r={id:this.messageId.toString(),text:this.currentMessage.trim(),isUser:!0,timestamp:new Date};this.messages=[...this.messages,r],this.messageId++;const e=this.currentMessage;this.currentMessage="",this.isTyping=!0,this.scrollToBottom();try{const t=800+Math.random()*1200;await new Promise(i=>setTimeout(i,t)),this.isTyping=!1;const o=this.generateBotResponse(e),a={id:this.messageId.toString(),text:o,isUser:!1,timestamp:new Date};this.messages=[...this.messages,a],this.messageId++,this.scrollToBottom()}catch{this.isTyping=!1;const o={id:this.messageId.toString(),text:"I apologize, but I encountered an error. Please try again.",isUser:!1,timestamp:new Date};this.messages=[...this.messages,o],this.messageId++}}scrollToBottom(){this.updateComplete.then(()=>{var r;this.messagesContainer||(this.messagesContainer=(r=this.shadowRoot)==null?void 0:r.querySelector(".messages-container")),this.messagesContainer&&this.messagesContainer.scrollTo({top:this.messagesContainer.scrollHeight,behavior:"smooth"})})}generateBotResponse(r){const e=r.toLowerCase().trim();if(!e)return"I didn't receive your message. Could you please try again?";if(this.matchesPattern(e,["hello","hi","hey","good morning","good afternoon","good evening","greetings"])){const o=["Hello! 👋 I'm your AI assistant, ready to help you with anything you need. How can I assist you today?","Hi there! 😊 I'm here to make your day easier. What would you like to explore or discuss?","Hey! Great to meet you! I'm your AI companion, equipped to help with questions, tasks, or just a friendly chat. What's on your mind?"];return this.getRandomResponse(o)}if(this.matchesPattern(e,["help","support","assist","guide","what can you do","capabilities"]))return`I'm here to help! 🛠️ I can assist with:
• Product information and recommendations
• Technical questions and troubleshooting
• General knowledge and research
• Creative writing and brainstorming
• Math and calculations
• Language translation
• Planning and organization

What specific area interests you?`;if(this.matchesPattern(e,["thank","thanks","appreciate","grateful"]))return"You're absolutely welcome! 😊 It's my pleasure to help. Is there anything else I can assist you with?";if(this.matchesPattern(e,["bye","goodbye","see you","farewell","later"]))return"Goodbye! 👋 It's been wonderful chatting with you. Feel free to return anytime - I'm always here and ready to help!";const t=["That's interesting! 🤔 I'd love to help you explore this further. Could you tell me more about what you're looking for?","Great question! 💭 I'm here to help you find the information you need. What specific aspect would you like me to focus on?","I understand what you're getting at! 🎯 Let me help you with this. What would be most helpful for you right now?","That's a wonderful topic! ✨ I'm here to help you learn more. What specific questions do you have?"];return this.getRandomResponse(t)}matchesPattern(r,e){return e.some(t=>r.includes(t)||r.split(" ").some(o=>o===t))}getRandomResponse(r){return r[Math.floor(Math.random()*r.length)]}clearChat(){this.messages=[this.messages[0]],this.messageId=2}render(){return n`
            <!-- Chat Toggle Button -->
            <div class="fixed bottom-6 right-6 z-50">
                <button 
                    class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xl md:text-2xl transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl active:scale-95 shadow-lg flex items-center justify-center border-2 border-blue-400 ${this.isOpen?"opacity-0 invisible scale-75 pointer-events-none":""}" 
                    @click=${this.toggleChat}
                    aria-label="${this.isOpen?"Close chat":"Open chat"}"
                >
                    💬
                </button>
            </div>
            
            <!-- Chat Window -->
            <div class="${this.isOpen&&!this.isMinimized?"fixed inset-0 md:bottom-6 md:right-6 md:top-auto md:left-auto md:w-96 md:h-[600px] bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out scale-100 opacity-100 pointer-events-auto border-0 md:border border-gray-200":"fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out scale-95 translate-y-full opacity-0 pointer-events-none border border-gray-200"}" 
                role="dialog" aria-label="Chat window" aria-modal="true">
                
                <!-- Header -->
                <div class="bg-blue-600 text-white p-4 flex items-center justify-between relative">
                    <div class="flex items-center gap-3">
                        <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <div>
                            <div class="font-bold text-lg">AI Assistant</div>
                            <div class="text-sm opacity-90">Online • Ready to help</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-1">
                        <button 
                            class="hidden md:flex bg-white/20 hover:bg-white/30 text-white text-sm cursor-pointer p-2 w-8 h-8 items-center justify-center rounded-lg transition-all duration-200" 
                            @click=${this.minimizeChat}
                            aria-label="Minimize chat"
                            title="Minimize"
                        >—</button>
                        <button 
                            class="bg-white/20 hover:bg-white/30 text-white cursor-pointer p-2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200" 
                            @click=${this.clearChat}
                            aria-label="Clear chat history"
                            title="Clear chat"
                        >🗑️</button>
                        <button 
                            class="bg-white/20 hover:bg-white/30 text-white cursor-pointer p-2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200" 
                            @click=${this.toggleChat}
                            aria-label="Close chat"
                            title="Close"
                        >✕</button>
                    </div>
                </div>
                
                <!-- Messages Container -->
                <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 messages-container bg-gray-50" role="log" aria-live="polite">
                    ${this.messages.map((r,e)=>n`
                        <div 
                            class="flex ${r.isUser?"justify-end":"justify-start"}"
                            style="animation-delay: ${e*.1}s"
                        >
                            <div class="max-w-[85%] md:max-w-[80%] px-4 py-3 rounded-2xl break-words animate-fade-slide text-sm leading-relaxed ${r.isUser?"bg-blue-600 text-white rounded-br-sm shadow-md":"bg-white text-gray-800 rounded-bl-sm border border-gray-200 shadow-sm"}">
                                <div class="whitespace-pre-wrap">${r.text}</div>
                                <div class="text-xs ${r.isUser?"text-blue-100":"text-gray-400"} mt-2">
                                    ${r.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
                                </div>
                            </div>
                        </div>
                    `)}
                    
                    ${this.isTyping?n`
                        <div class="flex justify-start">
                            <div class="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl rounded-bl-sm border border-gray-200 shadow-sm animate-fade-slide">
                                <div class="flex gap-1">
                                    <div class="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                                    <div class="w-2 h-2 rounded-full bg-blue-500 animate-bounce animation-delay-200"></div>
                                    <div class="w-2 h-2 rounded-full bg-blue-500 animate-bounce animation-delay-400"></div>
                                </div>
                                <span class="text-xs text-gray-500">Thinking...</span>
                            </div>
                        </div>
                    `:""}
                </div>
                
                <!-- Input Area -->
                <div class="p-4 border-t border-gray-200 bg-white">
                    <div class="flex gap-3">
                        <div class="flex-1 relative">
                            <input
                                type="text"
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none text-sm bg-white transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-400"
                                placeholder="Type your message..."
                                .value=${this.currentMessage}
                                @input=${this.handleInputChange}
                                @keydown=${this.handleKeyPress}
                                aria-label="Type your message"
                                autocomplete="off"
                                maxlength="1000"
                            />
                        </div>
                        <button
                            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl cursor-pointer text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[70px]"
                            @click=${this.sendMessage}
                            ?disabled=${!this.currentMessage.trim()||this.isTyping}
                            aria-label="Send message"
                        >
                            ${this.isTyping?n`
                                <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            `:"Send"}
                        </button>
                    </div>
                    <div class="text-xs text-gray-400 mt-2 text-center">
                        Press Enter to send • Esc to close
                    </div>
                </div>
            </div>

            <!-- Minimized Chat Window (Desktop only) -->
            ${this.isMinimized?n`
                <div class="hidden md:block fixed bottom-6 right-6 w-80 bg-white rounded-xl border border-gray-200 shadow-xl p-4 transition-all duration-300">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 rounded-full bg-green-400"></div>
                            <span class="font-medium text-gray-800">AI Assistant</span>
                            <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">${this.messages.length}</span>
                        </div>
                        <div class="flex gap-2">
                            <button 
                                class="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-md transition-colors"
                                @click=${this.toggleChat}
                                aria-label="Restore chat"
                            >
                                Restore
                            </button>
                            <button 
                                class="text-gray-400 hover:text-gray-600 text-sm w-6 h-6 flex items-center justify-center"
                                @click=${()=>{this.isMinimized=!1,this.isOpen=!1}}
                                aria-label="Close chat"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            `:""}
        `}};A.styles=Y`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        @keyframes fade-slide {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-shimmer {
            animation: shimmer 2s infinite;
        }
        
        .animate-fade-slide {
            animation: fade-slide 0.3s ease-out;
        }
        
        .animation-delay-200 {
            animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
            animation-delay: 0.4s;
        }
        
        .messages-container {
            scrollbar-width: thin;
            scrollbar-color: rgba(59, 130, 246, 0.3) rgba(0, 0, 0, 0.05);
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
        
        .messages-container::-webkit-scrollbar-thumb:hover {
            background: rgba(59, 130, 246, 0.5);
        }
    `;R([c()],A.prototype,"isOpen",2);R([c()],A.prototype,"messages",2);R([c()],A.prototype,"currentMessage",2);R([c()],A.prototype,"isTyping",2);R([c()],A.prototype,"isMinimized",2);A=R([x("chatbot-component")],A);var ct=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,p=(r,e,t,o)=>{for(var a=o>1?void 0:o?ht(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(a=(o?s(e,t,a):s(a))||a);return o&&a&&ct(e,t,a),a};let N=class extends k{constructor(){super(...arguments),this.activeImageIndex=0,this.openDetails=new Set,this.showAddedProductUI=!1,this.addedProductData=null,this.images=["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop","https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop","https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop&crop=face"],this.autoHideTimer=null}selectImage(r){this.activeImageIndex=r}toggleDetail(r){this.openDetails.has(r)?this.openDetails.delete(r):this.openDetails.add(r),this.requestUpdate()}handleProductAdded(r){this.addedProductData=r.detail,this.showAddedProductUI=!0,this.autoHideTimer=setTimeout(()=>{this.showAddedProductUI&&(this.showAddedProductUI=!1)},8e3)}handleNotificationMouseEnter(){this.autoHideTimer&&(clearTimeout(this.autoHideTimer),this.autoHideTimer=null)}handleNotificationMouseLeave(){this.showAddedProductUI&&(this.autoHideTimer=setTimeout(()=>{this.showAddedProductUI=!1},3e3))}handleCloseNotification(){this.showAddedProductUI=!1}handleViewCart(){console.log("Navigate to cart page")}handleContinueShopping(){this.showAddedProductUI=!1}render(){var r,e,t,o,a,i,s;return n`
            <div class="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white rounded-3xl shadow-lg border border-gray-100">
                <div class="flex flex-col gap-5">
                    <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-md border border-gray-200 group">
                        <img 
                            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            src="${this.images[this.activeImageIndex]}" 
                            alt="Product image"
                        />
                    </div>
                    <div class="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 p-2">
                        ${this.images.map((d,l)=>n`
                            <div 
                                class="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden cursor-pointer border-3 transition-all duration-300 ease-out shadow-md bg-white hover:border-purple-400 hover:shadow-lg hover:-translate-y-1 ${l===this.activeImageIndex?"border-purple-500 shadow-lg -translate-y-1":"border-gray-200"}"
                                @click="${()=>this.selectImage(l)}"
                            >
                                <img class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src="${d}" alt="Product thumbnail ${l+1}" />
                            </div>
                        `)}
                    </div>
                </div>

                <div class="py-5">
                    <h1 class="text-3xl font-bold text-gray-800 mb-5 leading-tight">Ottercat Cowboy Baby Toy</h1>
                    
                    <div class="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                        <span class="text-2xl font-bold text-green-600">$1,299.00</span>
                        <span class="text-lg text-gray-400 line-through font-medium">$2,099.00</span>
                    </div>

                    <div class="flex items-center gap-3 mb-8 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                        <div class="flex gap-1">
                            ${Array(5).fill(0).map(d=>n`
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            `)}
                        </div>
                        <span class="text-yellow-700 font-semibold">4.8 (128 reviews)</span>
                    </div>

                    <add-to-cart-button 
                        product-id="ottercat-cowboy-toy"
                        product-name="Ottercat Cowboy Baby Toy"
                        price="1299.00"
                        quantity="1"
                        @product-added="${this.handleProductAdded}"
                    ></add-to-cart-button>

                    <div class="border-t-2 border-gray-200 pt-6 bg-gray-50 rounded-2xl p-5 mt-5">
                        <div class="mb-5">
                            <div class="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-700 bg-white rounded-xl transition-all duration-300 ease-out border border-gray-200 shadow-sm hover:text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md" @click="${()=>this.toggleDetail("description")}">
                                <span>Description</span>
                                <svg class="w-5 h-5 transition-transform duration-300 ease-out text-purple-500 ${this.openDetails.has("description")?"rotate-180":""}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="p-5 text-gray-600 text-sm leading-relaxed bg-white rounded-b-xl mt-0.5 border border-gray-200 border-t-0 ${this.openDetails.has("description")?"block animate-in slide-in-from-top-2 duration-300":"hidden"}">
                                This adorable cowboy-themed baby toy features soft, safe materials and engaging textures perfect for little hands. Designed to stimulate sensory development while providing hours of fun.
                            </div>
                        </div>

                        <div class="mb-0">
                            <div class="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-700 bg-white rounded-xl transition-all duration-300 ease-out border border-gray-200 shadow-sm hover:text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md" @click="${()=>this.toggleDetail("specs")}">
                                <span>Pairs well with</span>
                                <svg class="w-5 h-5 transition-transform duration-300 ease-out text-purple-500 ${this.openDetails.has("specs")?"rotate-180":""}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="p-5 text-gray-600 text-sm leading-relaxed bg-white rounded-b-xl mt-0.5 border border-gray-200 border-t-0 ${this.openDetails.has("specs")?"block animate-in slide-in-from-top-2 duration-300":"hidden"}">
                                • Baby play mats and activity gyms<br>
                                • Other themed character toys<br>
                                • Soft building blocks<br>
                                • Musical toys and rattles
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fixed top-5 right-5 z-50">
                <added-product-ui
                    ?show="${this.showAddedProductUI}"
                    .productId="${((r=this.addedProductData)==null?void 0:r.productId)||""}"
                    .productName="${((e=this.addedProductData)==null?void 0:e.productName)||""}"
                    .productImage="${this.images[0]}"
                    .price="${((t=this.addedProductData)==null?void 0:t.price)||0}"
                    .quantity="${((o=this.addedProductData)==null?void 0:o.quantity)||1}"
                    .cartTotal="${(((a=this.addedProductData)==null?void 0:a.price)||0)*(((i=this.addedProductData)==null?void 0:i.quantity)||1)}"
                    .cartItemCount="${((s=this.addedProductData)==null?void 0:s.quantity)||1}"
                    @close="${this.handleCloseNotification}"
                    @view-cart="${this.handleViewCart}"
                    @continue-shopping="${this.handleContinueShopping}"
                    @mouseenter="${this.handleNotificationMouseEnter}"
                    @mouseleave="${this.handleNotificationMouseLeave}"
                ></added-product-ui>
            </div>
        `}};p([c()],N.prototype,"activeImageIndex",2);p([c()],N.prototype,"openDetails",2);p([c()],N.prototype,"showAddedProductUI",2);p([c()],N.prototype,"addedProductData",2);N=p([x("product-image-slider")],N);let y=class extends k{constructor(){super(...arguments),this.isLoading=!1,this.isSuccess=!1,this.isDisabled=!1,this.productId="",this.productName="",this.price=0,this.quantity=1}async handleAddToCart(){if(!(this.isLoading||this.isDisabled)){this.isLoading=!0;try{await new Promise(r=>setTimeout(r,1500)),console.log("Added to cart:",{productId:this.productId,productName:this.productName,price:this.price,quantity:this.quantity}),this.isSuccess=!0,this.dispatchEvent(new CustomEvent("product-added",{detail:{productId:this.productId,productName:this.productName,price:this.price,quantity:this.quantity}})),setTimeout(()=>{this.isSuccess=!1},2e3)}catch(r){console.error("Failed to add to cart:",r)}finally{this.isLoading=!1}}}render(){const r=this.isSuccess?"Added to Cart! ✓":this.isLoading?n`<span class="flex items-center gap-2">Adding... <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></span>`:"Add to Cart";return n`
            <button 
                class="w-full py-5 px-6 bg-purple-600 hover:bg-purple-700 text-white border-none rounded-2xl text-lg font-bold cursor-pointer transition-all duration-300 ease-out mb-6 shadow-lg relative overflow-hidden font-sans hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none ${this.isSuccess?"bg-green-600 hover:bg-green-700":""}"
                @click="${this.handleAddToCart}"
                ?disabled="${this.isLoading||this.isDisabled}"
            >
                <span class="relative z-10">${r}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 hover:translate-x-full"></div>
            </button>
        `}};p([c()],y.prototype,"isLoading",2);p([c()],y.prototype,"isSuccess",2);p([c()],y.prototype,"isDisabled",2);p([b({type:String})],y.prototype,"productId",2);p([b({type:String})],y.prototype,"productName",2);p([b({type:Number})],y.prototype,"price",2);p([b({type:Number})],y.prototype,"quantity",2);y=p([x("add-to-cart-button")],y);let m=class extends k{constructor(){super(...arguments),this.productId="",this.productName="",this.productImage="",this.price=0,this.quantity=1,this.show=!1,this.cartTotal=0,this.cartItemCount=0}handleClose(){this.show=!1,this.dispatchEvent(new CustomEvent("close"))}handleViewCart(){console.log("Navigate to cart"),this.dispatchEvent(new CustomEvent("view-cart"))}handleContinueShopping(){this.show=!1,this.dispatchEvent(new CustomEvent("continue-shopping"))}render(){return this.show?n`
            <div class="fixed top-5 right-5 left-5 md:left-auto z-50 font-sans">
                <div class="bg-green-600 text-white p-5 rounded-2xl shadow-xl border border-green-500 max-w-sm mx-auto md:mx-0 animate-in slide-in-from-right-full scale-in-95 duration-500 ease-out relative overflow-hidden cursor-default">
                    <div class="absolute top-0 left-0 right-0 h-1 bg-green-400 animate-pulse"></div>
                    
                    <button class="absolute top-3 right-3 bg-white/20 border-none rounded-full w-6 h-6 cursor-pointer flex items-center justify-center transition-all duration-300 ease-out hover:bg-white/30 hover:scale-110" @click="${this.handleClose}">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                    </button>

                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h3 class="text-base font-bold m-0">Added to Cart!</h3>
                    </div>

                    <div class="flex gap-3 items-center mb-4 p-3 bg-white/10 rounded-xl">
                        <img 
                            class="w-12 h-12 rounded-lg object-cover border-2 border-white/30" 
                            src="${this.productImage}" 
                            alt="${this.productName}"
                            @error="${r=>{const e=r.target;e.src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&h=100&fit=crop"}}"
                        />
                        <div class="flex-1">
                            <p class="text-sm font-semibold m-0 mb-1 leading-tight">${this.productName}</p>
                            <p class="text-xs opacity-90 m-0">$${this.price.toFixed(2)} × ${this.quantity}</p>
                        </div>
                    </div>

                    <div class="mb-4 p-3 bg-white/10 rounded-lg text-xs">
                        <div class="flex justify-between mb-1">
                            <span>Items in cart:</span>
                            <span>${this.cartItemCount}</span>
                        </div>
                        <div class="flex justify-between font-semibold border-t border-white/20 pt-2 mt-2">
                            <span>Subtotal:</span>
                            <span>$${this.cartTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <button class="flex-1 py-2.5 px-4 border border-white/30 bg-transparent text-white rounded-lg text-xs font-semibold cursor-pointer transition-all duration-300 ease-out hover:bg-white/10 hover:-translate-y-0.5" @click="${this.handleContinueShopping}">
                            Continue Shopping
                        </button>
                        <button class="flex-1 py-2.5 px-4 bg-white/20 text-white border border-white/30 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-300 ease-out hover:bg-white/30 hover:-translate-y-0.5" @click="${this.handleViewCart}">
                            View Cart
                        </button>
                    </div>
                </div>
            </div>
        `:n``}};p([b({type:String})],m.prototype,"productId",2);p([b({type:String})],m.prototype,"productName",2);p([b({type:String})],m.prototype,"productImage",2);p([b({type:Number})],m.prototype,"price",2);p([b({type:Number})],m.prototype,"quantity",2);p([b({type:Boolean})],m.prototype,"show",2);p([b({type:Number})],m.prototype,"cartTotal",2);p([b({type:Number})],m.prototype,"cartItemCount",2);m=p([x("added-product-ui")],m);
