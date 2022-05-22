var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};function s(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],s=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&s>=t.length&&(t=void 0),{value:t&&t[s++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new Map;class l{constructor(t,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=a.get(this.cssText);return o&&void 0===t&&(a.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new l(i,r)},d=(t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},h=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u;const p=window.trustedTypes,v=p?p.emptyScript:"",_=window.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m};class $ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=g){var s,n;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:f.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:f.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:$}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.3.2");const b=globalThis.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,E="?"+A,S=`<${E}>`,C=document,k=(t="")=>C.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,U=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,H=/'/g,M=/"/g,N=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),B=new WeakMap,I=C.createTreeWalker(C,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===P?"!--"===l[1]?r=R:void 0!==l[1]?r=U:void 0!==l[2]?(N.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=null!=n?n:P,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?T:'"'===l[3]?M:H):r===M||r===H?r=T:r===R||r===U?r=P:(r=T,n=void 0);const h=r===T&&t[e+1].startsWith("/>")?" ":"";o+=r===P?i+S:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+A+h):i+A+(-2===c?(s.push(void 0),e):h)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=L(t,e);if(this.el=q.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(A)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?F:"@"===e[1]?G:Y})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),I.nextNode(),a.push({type:2,index:++n});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,s){var n,o,r,a;if(e===D)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const c=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,s)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);I.currentNode=n;let o=I.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new K(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Q(o,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=I.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),x(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return O(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==z&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(C.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new W(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new q(t)),e}S(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.M(k()),this.M(k()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=V(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=V(this,s[i+r],e,r),a===D&&(a=this._$AH[r]),o||(o=!x(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.C(t)}C(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends Y{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===z?void 0:t}}const Z=b?b.emptyScript:"";class F extends Y{constructor(){super(...arguments),this.type=4}C(t){t&&t!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class G extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:z)===D)return;const s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const X=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;null==X||X(q,K),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.2.3");class it extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new K(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return D}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ot(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function at(t){return rt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ct;const dt=null!=(null===(ct=window.HTMLSlotElement)||void 0===ct?void 0:ct.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function ht(t){const{slot:e,selector:i}=null!=t?t:{};return lt({descriptor:s=>({get(){var s;const n="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(n),r=null!=o?dt(o,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}var ut,pt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(pt||(pt={}));var vt=["closed","locked","off"],_t=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},ft=function(t){_t(window,"haptic",t)},mt=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(ft("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&_t(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),_t(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var s,n=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}t.callService(o,s,{entity_id:e})})(t,e,vt.includes(t.states[e].state))}(e,i.entity),ft("success"));break;case"call-service":if(!s.service)return void ft("failure");var n=s.service.split(".",2);e.callService(n[0],n[1],s.service_data,s.target),ft("success");break;case"fire-dom-event":_t(t,"ll-custom",s)}};var gt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},$t={back:"Back",data:"Manage Data",terms:"Terms and Conditions",delete:"Delete Data",cancel:"Cancel",delete_confirm:"Yes, delete my data",return_to_main:"Return to main screen"},yt={collection_status_enabled:"Data collection is enabled",collection_status_disabled:"Data collection is disabled",last_sent_size:"Size of last sent package:",total_sent_size:"Total size of sent packages:",last_sent_date:"Date of last sent package:",first_sent_date:"Sending data since:"},bt={header:"Manage Data",id_header:"Your unique ID is:",body:"Keep this ID in a safe place, if the Crowdsourcerer integration is uninstalled it is the only way we can delete your data if requested"},wt={header:"Delete Data",body:"You may request to have all previously sent data deleted from our storage.",prompt:"Proceed?"},At={header:"Terms and Conditions",body:"By using the Crowdsourcerer integration and allowing data collection, you consent to the following terms and conditions:"},Et={message:"Something went wrong..."},St={common:gt,routes:$t,main_screen:yt,data_screen:bt,delete_screen:wt,terms_screen:At,error_screen:Et},Ct={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},kt={common:Ct};const xt={en:Object.freeze({__proto__:null,common:gt,routes:$t,main_screen:yt,data_screen:bt,delete_screen:wt,terms_screen:At,error_screen:Et,default:St}),nb:Object.freeze({__proto__:null,common:Ct,default:kt})};function Ot(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),xt[s])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),xt.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),xt.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}console.info(`%c  CROWDSOURCERER-CARD \n%c  ${Ot("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"crowdsourcerer-card",name:"Crowdsourcerer Card",description:"Custom card for Crowdsourcerer integration that enables finer control over data collection"});let Pt=class extends it{constructor(){super(...arguments),this.inDialog=!1,this.route="main"}static async getConfigElement(){return await import("./editor-81995a03.js"),document.createElement("boilerplate-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Ot("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Crowdsourcerer Data Collector",entity:"sensor.crowdsourcerer"},t)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){return this.stateObj=this.config.entity&&this.config.entity in this.hass.states?this.hass.states[this.config.entity]:null,null==this.stateObj?j`
        <ha-card
        .header=${this.config.name}
        >
          <div class="view-content">
            <p>Entity not found!</p>
          </div>
        </ha-card>
      `:this.config.show_warning?this._showWarning(Ot("common.show_warning")):this.config.show_error?this._showError(Ot("common.show_error")):j`
      <ha-card
        .header=${this.config.name}
      >
        <div class="card-content">
          <div>${this.getPage()}</div>
        </div>
      </ha-card>
    `}getPage(){var t,e,i,s,n,o;switch(this.route){case"main":return j`
          <div class="view-content">
            <h3>${"Collecting"===(null===(t=this.stateObj)||void 0===t?void 0:t.state)?Ot("main_screen.collection_status_enabled"):Ot("main_screen.collection_status_disabled")}</h3>

            <div class="stat-list">
              <p class="stat-label">${Ot("main_screen.last_sent_size")}</p>
              <p class="stat-value">${(null===(e=this.stateObj)||void 0===e?void 0:e.attributes.last_sent_size)+"MB"}</p>

              <p class="stat-label">${Ot("main_screen.total_sent_size")}</p>
              <p class="stat-value">${(null===(i=this.stateObj)||void 0===i?void 0:i.attributes.total_sent_size)+"MB"}</p>

              <br style="margin-bottom: 16px;"/>

              <p class="stat-label">${Ot("main_screen.last_sent_date")}</p>
              <p class="stat-value">${null===(s=this.stateObj)||void 0===s?void 0:s.attributes.last_sent_date}</p>

              <p class="stat-label">${Ot("main_screen.first_sent_date")}</p>
              <p class="stat-value">${null===(n=this.stateObj)||void 0===n?void 0:n.attributes.first_sent_date}</p>
            </div>

            <div class="nav-btn-list">
              <!-- <a class="nav-btn" @click=${()=>this.setRoute("collection")}>Collection Settings</a> -->
              <a class="nav-btn" @click=${()=>this.setRoute("data")}>${Ot("routes.data")}</a>
              <a class="nav-btn" @click=${()=>this.setRoute("terms")}>${Ot("routes.terms")}</a>
            </div>
          </div>
        `;case"data":return j`
          <div class="view-content">
            <h2>${Ot("data_screen.header")}</h2>

            <h3>${Ot("data_screen.id_header")}</h3>
            <h2>${null===(o=this.stateObj)||void 0===o?void 0:o.attributes.uuid}</h2>
            <h3>${Ot("data_screen.body")}</h3>

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${()=>this.setRoute("main")}>${Ot("routes.back")}</a>
              <a class="nav-btn" @click=${()=>this.setRoute("delete")}>${Ot("routes.delete")}</a>
            </div>
          </div>
        `;case"delete":return j`
          <div class="view-content">
            <h2>${Ot("delete_screen.header")}</h2>

            <h3>${Ot("delete_screen.body")}</h3>
            <h3>${Ot("delete_screen.prompt")}</h3>

            <div class="nav-btn-list">
              <a class="nav-btn delete-data-btn" >${Ot("routes.delete_confirm")}</a>
              <a class="nav-btn" @click=${()=>this.setRoute("data")}>${Ot("routes.cancel")}</a>
            </div>
          </div>
        `;case"terms":return j`
          <div class="view-content">
            <h2>${Ot("terms_screen.header")}</h2>

            <h3>${Ot("terms_screen.body")}</h3>

            <p>...</p>

            <div class="nav-btn-list">
              <a class="nav-btn" @click=${()=>this.setRoute("main")}>${Ot("routes.back")}</a>
            </div>
          </div>
        `;default:return j`
          <div>
            <h2>${Ot("error_screen.message")}</h2>
            <a class="nav-btn" @click=${()=>this.setRoute("main")}>${Ot("routes.return_to_main")}</a>
          </div>
        `}}setRoute(t){this.route=t}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),mt(t,e,i,n)}(this,this.hass,this.config,t.detail.action)}_showWarning(t){return j` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),j` ${e} `}static get styles(){return c`
      .view-content {
        display: flex;
        align-content: center;
        flex-direction: column;
        text-align: center;
        min-height: 350px;
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
    `}};s([rt({attribute:!1})],Pt.prototype,"hass",void 0),s([rt()],Pt.prototype,"stateObj",void 0),s([rt({type:Boolean})],Pt.prototype,"inDialog",void 0),s([rt({type:String})],Pt.prototype,"route",void 0),s([at()],Pt.prototype,"config",void 0),Pt=s([nt("crowdsourcerer-card")],Pt);export{j as $,Pt as C,e as _,i as a,s as b,D as c,n as d,rt as e,nt as f,d as i,ht as l,_t as n,lt as o,c as r,it as s,at as t,z as w};
