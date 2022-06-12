var t=function(e,s){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},t(e,s)};function e(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function i(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}var s=function(){return s=Object.assign||function(t){for(var e,s=1,i=arguments.length;s<i;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},s.apply(this,arguments)};function i(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,s=e&&t[e],i=0;if(s)return s.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new Map;class l{constructor(t,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=a.get(this.cssText);return o&&void 0===t&&(a.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const c=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new l(s,r)},d=(t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))},h=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new l("string"==typeof t?t:t+"",r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u;const p=window.trustedTypes,v=p?p.emptyScript:"",_=window.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g};class $ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=f){var i,n;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:m.toAttribute)(e,s.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var s,i,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:m.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:$}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.3.2");const b=globalThis.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,E="?"+A,C=`<${E}>`,S=document,x=(t="")=>S.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,H=/"/g,j=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),N=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),z=new WeakMap,L=S.createTreeWalker(S,129,null,!1),q=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=P;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,d=0;for(;d<s.length&&(r.lastIndex=d,l=r.exec(s),null!==l);)d=r.lastIndex,r===P?"!--"===l[1]?r=R:void 0!==l[1]?r=D:void 0!==l[2]?(j.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=null!=n?n:P,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?H:T):r===H||r===T?r=U:r===R||r===D?r=P:(r=U,n=void 0);const h=r===U&&t[e+1].startsWith("/>")?" ":"";o+=r===P?s+C:c>=0?(i.push(a),s.slice(0,c)+"$lit$"+s.slice(c)+A+h):s+A+(-2===c?(i.push(void 0),e):h)}const a=o+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,i]};class B{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=q(t,e);if(this.el=B.createElement(l,s),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=L.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(A)){const s=c[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(A),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?F:K})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(j.test(i.tagName)){const t=i.textContent.split(A),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],x()),L.nextNode(),a.push({type:2,index:++n});i.append(t[e],x())}}}else if(8===i.nodeType)if(i.data===E)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function V(t,e,s=t,i){var n,o,r,a;if(e===N)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,s,i)),void 0!==i?(null!==(r=(a=s)._$Cl)&&void 0!==r?r:a._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,i)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);L.currentNode=n;let o=L.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Y(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Q(o,this,t)),this.v.push(e),l=i[++a]}r!==(null==l?void 0:l.index)&&(o=L.nextNode(),r++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{constructor(t,e,s,i){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),k(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return O(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==I&&k(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new W(n,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new B(t)),e}S(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Y(this.M(x()),this.M(x()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,s,i,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=V(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=V(this,i[s+r],e,r),a===N&&(a=this._$AH[r]),o||(o=!k(a)||a!==this._$AH[r]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.C(t)}C(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends K{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===I?void 0:t}}const G=b?b.emptyScript:"";class Z extends K{constructor(){super(...arguments),this.type=4}C(t){t&&t!==I?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class F extends K{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=V(this,t,e,0))&&void 0!==s?s:I)===N)return;const i=this._$AH,n=t===I&&i!==I||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==I&&(i===I||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const X=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;null==X||X(B,Y),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.2.3");class st extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Y(e.insertBefore(x(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}st.finalized=!0,st._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:st});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:st}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function rt(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):ot(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function at(t){return rt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=({finisher:t,descriptor:e})=>(s,i)=>{var n;if(void 0===i){const i=null!==(n=s.originalKey)&&void 0!==n?n:s.key,o=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(s.key)}:{...s,key:i};return null!=t&&(o.finisher=function(e){t(e,i)}),o}{const n=s.constructor;void 0!==e&&Object.defineProperty(s,i,e(i)),null==t||t(n,i)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ct;const dt=null!=(null===(ct=window.HTMLSlotElement)||void 0===ct?void 0:ct.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function ht(t){const{slot:e,selector:s}=null!=t?t:{};return lt({descriptor:i=>({get(){var i;const n="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(n),r=null!=o?dt(o,t):[];return s?r.filter((t=>t.matches(s))):r},enumerable:!0,configurable:!0})})}var ut,pt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(pt||(pt={}));var vt=function(t,e,s,i){i=i||{},s=null==s?{}:s;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=s,t.dispatchEvent(n),n};var _t={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},mt={back:"Back",data:"Manage Data",terms:"Terms and Conditions",delete:"Delete Data",cancel:"Cancel",delete_confirm:"Yes, delete my data",return_to_main:"Return to main screen"},gt={collection_status_enabled:"Data collection is enabled",collection_status_idle:"Data collection is on standby",collection_status_disabled:"Data collection is disabled",last_sent_size:"Size of last sent package:",total_sent_size:"Total size of sent packages:",last_sent_date:"Date of last sent package:",first_sent_date:"Sending data since:"},ft={header:"Manage Data",id_header:"Your unique ID is:",body:"Keep this ID in a safe place, if the Crowdsourcerer integration is uninstalled it is the only way we can delete your data if requested"},$t={header:"Delete Data",body:"You may request to have all previously sent data deleted from our storage.",prompt:"Proceed?"},yt={header:"Terms and Conditions",body:"By using the Crowdsourcerer integration and allowing data collection, you consent to the following terms and conditions:"},bt={message:"Something went wrong..."},wt={common:_t,routes:mt,main_screen:gt,data_screen:ft,delete_screen:$t,terms_screen:yt,error_screen:bt},At={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Et={common:At};const Ct={en:Object.freeze({__proto__:null,common:_t,routes:mt,main_screen:gt,data_screen:ft,delete_screen:$t,terms_screen:yt,error_screen:bt,default:wt}),nb:Object.freeze({__proto__:null,common:At,default:Et})};function St(t,e="",s=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),Ct[i])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),Ct.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),Ct.en)),""!==e&&""!==s&&(n=n.replace(e,s)),n}console.info(`%c  CROWDSOURCERER-CARD \n%c  ${St("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"crowdsourcerer-card",name:"Crowdsourcerer Card",description:"Custom card for Crowdsourcerer integration that enables data management"});let xt=class extends st{constructor(){super(...arguments),this.route="main"}static async getConfigElement(){return await import("./editor-24968073.js"),document.createElement("boilerplate-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(St("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Crowdsourcerer Data Collector",entity:"sensor.crowdsourcerer"},t)}shouldUpdate(t){return!!this.config&&function(t,e,s){if(e.has("config")||s)return!0;if(t.config.entity){var i=e.get("hass");return!i||i.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){return this.stateObj=this.config.entity&&this.config.entity in this.hass.states?this.hass.states[this.config.entity]:null,null==this.stateObj?M`
        <ha-card
        .header=${this.config.name}
        >
          <div class="view-content">
            <p>Crowdsourcerer entity not found! Have you installed the Crowdsourcerer integration?</p>
          </div>
        </ha-card>
      `:this.config.show_warning?this._showWarning(St("common.show_warning")):this.config.show_error?this._showError(St("common.show_error")):M`
      <ha-card
        .header=${this.config.name}
      >
        <div class="card-content">
          <div>${this.getPage()}</div>
        </div>
      </ha-card>
    `}getPage(){var t,e,s,i,n,o,r,a,l,c;switch(this.route){case"main":return M`
          <div class="view-content">

            ${null==this.stateObj?M`<h2>No data has been sent yet. Please check back later!</h2>`:M`
                <h3>${"Collecting"===(null===(t=this.stateObj)||void 0===t?void 0:t.state)?St("main_screen.collection_status_enabled"):"Idle"===(null===(e=this.stateObj)||void 0===e?void 0:e.state)?St("main_screen.collection_status_idle"):St("main_screen.collection_status_disabled")}
                </h3>

                <div class="stat-list">
                  <p class="stat-label">${St("main_screen.last_sent_size")}</p>
                  <p class="stat-value">${(null===(s=this.stateObj)||void 0===s?void 0:s.attributes.last_sent_size)+"MB"}</p>

                  <p class="stat-label">${St("main_screen.total_sent_size")}</p>
                  <p class="stat-value">${(null===(i=this.stateObj)||void 0===i?void 0:i.attributes.total_sent_size)+"MB"}</p>

                  <br style="margin-bottom: 16px;"/>

                  <p class="stat-label">${St("main_screen.last_sent_date")}</p>
                  <p class="stat-value">${null===(n=this.stateObj)||void 0===n?void 0:n.attributes.last_sent_date}</p>

                  <p class="stat-label">${St("main_screen.first_sent_date")}</p>
                  <p class="stat-value">${null===(o=this.stateObj)||void 0===o?void 0:o.attributes.first_sent_date}</p>
                </div>
              `}

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${()=>this.setRoute("data")}>${St("routes.data")}</a>
              <a class="nav-btn" @click=${()=>this.setRoute("terms")}>${St("routes.terms")}</a>
            </div>
          </div>
        `;case"data":return M`
          <div class="view-content">
            <h2>${St("data_screen.header")}</h2>

            <div class="scroll-container">

              ${(null===(r=this.stateObj)||void 0===r?void 0:r.attributes.uuid)?M`
                  <h2>${St("data_screen.id_header")}</h2>
                  <h2>${null===(a=this.stateObj)||void 0===a?void 0:a.attributes.uuid}</h2>
                  <h3>${St("data_screen.body")}</h3>
                `:M`
                  <h2>Your UUID will be generated after sending data for the first time. Please check back later!</h2>
                `}

              

              <h2>Last sent data:</h2>
              ${(null===(l=this.stateObj)||void 0===l?void 0:l.attributes.last_sent_data)?M`
                  <p>You can view the exact data sent by downloading it as a JSON file</p>
                  <a
                    class="download-btn"
                    href=${"data:text/plain;charset=utf-8,"+encodeURIComponent(null===(c=this.stateObj)||void 0===c?void 0:c.attributes.last_sent_data)}
                    download="last_sent_data.json"
                  >
                    Download Data
                  </a>
                `:M`
                  <p>No sent data was found. Have you just installed Crowdsourcerer? If so, nothing may have been sent yet</p>
                `}
              
            </div>

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${()=>this.setRoute("main")}>${St("routes.back")}</a>
              <a class="nav-btn" @click=${()=>this.setRoute("delete")}>${St("routes.delete")}</a>
            </div>
          </div>
        `;case"delete":return M`
          <div class="view-content">
            <h2>${St("delete_screen.header")}</h2>

            <h3>${St("delete_screen.body")}</h3>
            <h3>${St("delete_screen.prompt")}</h3>

            <div class="nav-btn-list">
              <a class="nav-btn delete-data-btn" @click=${this.deleteData} >${St("routes.delete_confirm")}</a>
              <a class="nav-btn" @click=${()=>this.setRoute("data")}>${St("routes.cancel")}</a>
            </div>
          </div>
        `;case"terms":return M`
          <div class="view-content">
            <h2>${St("terms_screen.header")}</h2>

            <div class="scroll-container">
              <h3>What is being collected and sent?</h3>
              <p class="terms-text">
                  All the sensor categories that you have authorized in the configuration are collected through Home Assistant's built-in 'History' integration, 
                  then are put through a clean-up process that ommits any sensitive information that might be present, such as names and addresses, before being sent.
                  You can see the exact data being sent in the 'Manage Data' menu, and reconfigure what sensor types are collected in the Crowdsourcerer integration configuration
                  through Home Assistant's integration settings.
              </p>

              <h3>Where is my data sent to, and how is it used?</h3>
              <p class="terms-text">
                  Data is sent to an API in University of Aveiro's Instituto de Telecomunicações, to be stored in a Data Lake. The goal of our collection is to assemble a dataset of smart home usage data to be
                  used in future research, which researchers will be able to export from the Data Lake.
                  Internally, data is associated to a unique ID given to you, with the sole purpose of deleting it if requested. This ID will not be accessible by
                  other users and cannot be traced back to you.
              </p>

              <h3>How can I have my data deleted?</h3>
              <p class="terms-text">
                  You can request to have your data deleted from the 'Manage Data' menu. Alternatively, you can contact our Data Protection Officer, although please
                  note that you will need to provide your unique ID. It is then of the utmost importance that you keep this ID in a safe place, in the event that you
                  uninstall the Crowdsourcerer integration or lose your ID somehow. You can see your unique ID in the 'Manage Data' menu.
              </p>

              <h3>Contacts:</h3>
              <p class="terms-text">Data Protection Officer: Diogo Gomes - dgomes@ua.pt</p>
            </div>


            <div class="nav-btn-list">
              <a class="nav-btn" @click=${()=>this.setRoute("main")}>${St("routes.back")}</a>
            </div>
          </div>
        `;case"delete_processing":return M`
          <div class="view-content">
            <h2>${St("delete_screen.header")}</h2>

            <p>Processing delete request</p>
            <p>Please wait a moment...</p>
          </div>
        `;case"delete_success":return M`
          <div class="view-content">
            <h2>${St("delete_screen.header")}</h2>

            <p>Your data has been deleted</p>
            <p>Keep in mind that data will continue to be sent in the future, as long as the Crowdsourcerer integration remains installed</p>

            <a class="nav-btn" @click=${()=>this.setRoute("main")}>${St("routes.return_to_main")}</a>
          </div>
        `;case"delete_failure":return M`
          <div class="view-content">
            <h2>${St("delete_screen.header")}</h2>

            <p>Uh oh, something went wrong...</p>
            <p>Your request could not be completed, please try again later, or contact our Data Protection Officer if the problem persists.</p>
            <br />
            <p>Data Protection Officer: Diogo Gomes - dgomes@ua.pt</p>

            <a class="nav-btn" @click=${()=>this.setRoute("main")}>${St("routes.return_to_main")}</a>
          </div>
        `;default:return M`
          <div>
            <h2>${St("error_screen.message")}</h2>
            <a class="nav-btn" @click=${()=>this.setRoute("main")}>${St("routes.return_to_main")}</a>
          </div>
        `}}setRoute(t){this.route=t}deleteData(){var t;const e="https://smarthouse.av.it.pt/api/ingest/data";this.setRoute("delete_processing"),fetch(e,{method:"DELETE",mode:"cors",headers:{"Home-UUID":null===(t=this.stateObj)||void 0===t?void 0:t.attributes.uuid,"Access-Control-Allow-Origin":e}}).then((t=>{t.ok?this.setRoute("delete_success"):this.setRoute("delete_failure")})).catch((()=>{this.setRoute("delete_failure")}))}_showWarning(t){return M` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),M` ${e} `}static get styles(){return c`
      .view-content {
        display: flex;
        align-content: center;
        flex-direction: column;
        text-align: center;
        height: 350px;
      }

      .stat-list {
        padding: 16px;
      }

      .stat-list > .stat-label {
        display: inline-block;
        width: 69%;
        text-align: left;
        margin: 0;
      }

      .stat-list > .stat-value {
        display: inline-block;
        width: 29%;
        text-align: right;
        margin: 0;
      }

      .nav-btn-list {
        width: 60%;
        margin: auto;
      }

      .nav-btn {
        padding: 8px 12px;
        border: 1px solid var(--primary-text-color);
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        display: inline-block;
      }

      .download-btn {
        padding: 8px 12px;
        border: 1px solid var(--primary-color);
        background-color: var(--primary-color);
        color: var(--primary-text-color);
        text-decoration: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        display: inline-block;
      }

      .nav-btn-list > .nav-btn {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 8px;
      }

      .nav-btn:hover {
        background-color: var(--primary-color);
      }

      .nav-btn.delete-data-btn:hover {
        background-color: red;
      }

      .terms-text {
        text-align: left;
      }

      .scroll-container {
        overflow-y: scroll;
        overflow-wrap: break-word;
        margin-bottom: 8px;
      }
    `}};i([rt({attribute:!1})],xt.prototype,"hass",void 0),i([rt()],xt.prototype,"stateObj",void 0),i([rt({type:String})],xt.prototype,"route",void 0),i([at()],xt.prototype,"config",void 0),xt=i([nt("crowdsourcerer-card")],xt);export{M as $,xt as C,e as _,s as a,i as b,N as c,n as d,rt as e,nt as f,d as i,ht as l,vt as n,lt as o,c as r,st as s,at as t,I as w};
