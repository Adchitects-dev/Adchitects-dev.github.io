(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{3454:function(e,t,r){"use strict";e.exports=r.g.process||r(7663)},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,u=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{s||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,s=(o=r(7294))&&o.__esModule?o:{default:o},u=r(6273),f=r(387),a=r(7190);var c={};function h(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(i?"%"+i:"")]=!0}}var l=function(e){var t,r=!1!==e.prefetch,n=f.useRouter(),o=s.default.useMemo((function(){var t=i(u.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),l=o.href,p=o.as,d=e.children,y=e.replace,g=e.shallow,v=e.scroll,m=e.locale;"string"===typeof d&&(d=s.default.createElement("a",null,d));var w=(t=s.default.Children.only(d))&&"object"===typeof t&&t.ref,b=i(a.useIntersection({rootMargin:"200px"}),2),_=b[0],S=b[1],E=s.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);s.default.useEffect((function(){var e=S&&r&&u.isLocalURL(l),t="undefined"!==typeof m?m:n&&n.locale,i=c[l+"%"+p+(t?"%"+t:"")];e&&!i&&h(n,l,p,{locale:t})}),[p,l,S,m,r,n]);var A={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,s,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](r,n,{shallow:o,locale:f,scroll:s}))}(e,n,l,p,y,g,v,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(l)&&h(n,l,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var B="undefined"!==typeof m?m:n&&n.locale,R=n&&n.isLocaleDomain&&u.getDomainLocale(p,B,n&&n.locales,n&&n.domainLocales);A.href=R||u.addBasePath(u.addLocale(p,B,n&&n.defaultLocale))}return s.default.cloneElement(t,A)};t.default=l},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,u=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{s||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,n=o.useRef(),a=i(o.useState(!1),2),c=a[0],h=a[1],l=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||c||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=f.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return f.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),f.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[r,t,c]);return o.useEffect((function(){if(!u&&!c){var e=s.requestIdleCallback((function(){return h(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[c]),[l,c]};var o=r(7294),s=r(9311),u="undefined"!==typeof IntersectionObserver;var f=new Map},1876:function(e){!function(){var t={991:function(e,t){"use strict";t.byteLength=function(e){var t=f(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,o=f(e),s=o[0],u=o[1],a=new i(function(e,t,r){return 3*(t+r)/4-r}(0,s,u)),c=0,h=u>0?s-4:s;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],a[c++]=t>>16&255,a[c++]=t>>8&255,a[c++]=255&t;2===u&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,a[c++]=255&t);1===u&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,a[c++]=t>>8&255,a[c++]=255&t);return a},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],s=16383,u=0,f=n-i;u<f;u+=s)o.push(c(e,u,u+s>f?f:u+s));1===i?(t=e[n-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return o.join("")};for(var r=[],n=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=o.length;s<u;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function a(e){return r[e>>18&63]+r[e>>12&63]+r[e>>6&63]+r[63&e]}function c(e,t,r){for(var n,i=[],o=t;o<r;o+=3)n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),i.push(a(n));return i.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},293:function(e,t,r){"use strict";var n=r(991),i=r(759),o="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=f,t.SlowBuffer=function(e){+e!=e&&(e=0);return f.alloc(+e)},t.INSPECT_MAX_BYTES=50;var s=2147483647;function u(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,f.prototype),t}function f(e,t,r){if("number"===typeof e){if("string"===typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return a(e,t,r)}function a(e,t,r){if("string"===typeof e)return function(e,t){"string"===typeof t&&""!==t||(t="utf8");if(!f.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|y(e,t),n=u(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,t);if(ArrayBuffer.isView(e))return l(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(q(e,ArrayBuffer)||e&&q(e.buffer,ArrayBuffer))return p(e,t,r);if("undefined"!==typeof SharedArrayBuffer&&(q(e,SharedArrayBuffer)||e&&q(e.buffer,SharedArrayBuffer)))return p(e,t,r);if("number"===typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return f.from(n,t,r);var i=function(e){if(f.isBuffer(e)){var t=0|d(e.length),r=u(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!==typeof e.length||Y(e.length)?u(0):l(e);if("Buffer"===e.type&&Array.isArray(e.data))return l(e.data)}(e);if(i)return i;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof e[Symbol.toPrimitive])return f.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!==typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return c(e),u(e<0?0:0|d(e))}function l(e){for(var t=e.length<0?0:0|d(e.length),r=u(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function p(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,f.prototype),n}function d(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function y(e,t){if(f.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||q(e,ArrayBuffer))return e.byteLength;if("string"!==typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return P(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(e).length;default:if(i)return n?-1:P(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,r);case"utf8":case"utf-8":return T(this,t,r);case"ascii":return I(this,t,r);case"latin1":case"binary":return x(this,t,r);case"base64":return R(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function v(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function m(e,t,r,n,i){if(0===e.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"===typeof t&&(t=f.from(t,n)),f.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"===typeof t)return t&=255,"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){var o,s=1,u=e.length,f=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,u/=2,f/=2,r/=2}function a(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var c=-1;for(o=r;o<u;o++)if(a(e,o)===a(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===f)return c*s}else-1!==c&&(o-=o-c),c=-1}else for(r+f>u&&(r=u-f),o=r;o>=0;o--){for(var h=!0,l=0;l<f;l++)if(a(e,o+l)!==a(t,l)){h=!1;break}if(h)return o}return-1}function b(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;n>o/2&&(n=o/2);for(var s=0;s<n;++s){var u=parseInt(t.substr(2*s,2),16);if(Y(u))return s;e[r+s]=u}return s}function _(e,t,r,n){return D(P(t,e.length-r),e,r,n)}function S(e,t,r,n){return D(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function E(e,t,r,n){return S(e,t,r,n)}function A(e,t,r,n){return D(N(t),e,r,n)}function B(e,t,r,n){return D(function(e,t){for(var r,n,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function R(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function T(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o,s,u,f,a=e[i],c=null,h=a>239?4:a>223?3:a>191?2:1;if(i+h<=r)switch(h){case 1:a<128&&(c=a);break;case 2:128===(192&(o=e[i+1]))&&(f=(31&a)<<6|63&o)>127&&(c=f);break;case 3:o=e[i+1],s=e[i+2],128===(192&o)&&128===(192&s)&&(f=(15&a)<<12|(63&o)<<6|63&s)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:o=e[i+1],s=e[i+2],u=e[i+3],128===(192&o)&&128===(192&s)&&128===(192&u)&&(f=(15&a)<<18|(63&o)<<12|(63&s)<<6|63&u)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return C(n)}t.kMaxLength=s,f.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(e,t,r){return a(e,t,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(e,t,r){return function(e,t,r){return c(e),e<=0?u(e):void 0!==t?"string"===typeof r?u(e).fill(t,r):u(e).fill(t):u(e)}(e,t,r)},f.allocUnsafe=function(e){return h(e)},f.allocUnsafeSlow=function(e){return h(e)},f.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==f.prototype},f.compare=function(e,t){if(q(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),q(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(e)||!f.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return f.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=f.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(q(o,Uint8Array)&&(o=f.from(o)),!f.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},f.byteLength=y,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)v(this,t,t+1);return this},f.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},f.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},f.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?T(this,0,e):g.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(e){if(!f.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===f.compare(this,e)},f.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(f.prototype[o]=f.prototype.inspect),f.prototype.compare=function(e,t,r,n,i){if(q(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(t>>>=0),u=Math.min(o,s),a=this.slice(n,i),c=e.slice(t,r),h=0;h<u;++h)if(a[h]!==c[h]){o=a[h],s=c[h];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},f.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},f.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},f.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"===typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,e,t,r);case"utf8":case"utf-8":return _(this,e,t,r);case"ascii":return S(this,e,t,r);case"latin1":case"binary":return E(this,e,t,r);case"base64":return A(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function C(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}function I(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function x(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function O(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=H[e[o]];return i}function L(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function U(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function j(e,t,r,n,i,o){if(!f.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function M(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function k(e,t,r,n,o){return t=+t,r>>>=0,o||M(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function F(e,t,r,n,o){return t=+t,r>>>=0,o||M(e,0,r,8),i.write(e,t,r,n,52,8),r+8}f.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},f.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},f.prototype.readUInt8=function(e,t){return e>>>=0,t||U(e,1,this.length),this[e]},f.prototype.readUInt16LE=function(e,t){return e>>>=0,t||U(e,2,this.length),this[e]|this[e+1]<<8},f.prototype.readUInt16BE=function(e,t){return e>>>=0,t||U(e,2,this.length),this[e]<<8|this[e+1]},f.prototype.readUInt32LE=function(e,t){return e>>>=0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},f.prototype.readUInt32BE=function(e,t){return e>>>=0,t||U(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},f.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},f.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},f.prototype.readInt8=function(e,t){return e>>>=0,t||U(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},f.prototype.readInt16LE=function(e,t){e>>>=0,t||U(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(e,t){e>>>=0,t||U(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(e,t){return e>>>=0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},f.prototype.readInt32BE=function(e,t){return e>>>=0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},f.prototype.readFloatLE=function(e,t){return e>>>=0,t||U(e,4,this.length),i.read(this,e,!0,23,4)},f.prototype.readFloatBE=function(e,t){return e>>>=0,t||U(e,4,this.length),i.read(this,e,!1,23,4)},f.prototype.readDoubleLE=function(e,t){return e>>>=0,t||U(e,8,this.length),i.read(this,e,!0,52,8)},f.prototype.readDoubleBE=function(e,t){return e>>>=0,t||U(e,8,this.length),i.read(this,e,!1,52,8)},f.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||j(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},f.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||j(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},f.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,1,255,0),this[t]=255&e,t+1},f.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},f.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);j(this,e,t,r,i-1,-i)}var o=0,s=1,u=0;for(this[t]=255&e;++o<r&&(s*=256);)e<0&&0===u&&0!==this[t+o-1]&&(u=1),this[t+o]=(e/s>>0)-u&255;return t+r},f.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);j(this,e,t,r,i-1,-i)}var o=r-1,s=1,u=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===u&&0!==this[t+o+1]&&(u=1),this[t+o]=(e/s>>0)-u&255;return t+r},f.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},f.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},f.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||j(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeFloatLE=function(e,t,r){return k(this,e,t,!0,r)},f.prototype.writeFloatBE=function(e,t,r){return k(this,e,t,!1,r)},f.prototype.writeDoubleLE=function(e,t,r){return F(this,e,t,!0,r)},f.prototype.writeDoubleBE=function(e,t,r){return F(this,e,t,!1,r)},f.prototype.copy=function(e,t,r,n){if(!f.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;if(this===e&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,n);else if(this===e&&r<t&&t<n)for(var o=i-1;o>=0;--o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,n),t);return i},f.prototype.fill=function(e,t,r,n){if("string"===typeof e){if("string"===typeof t?(n=t,t=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"===typeof e?e&=255:"boolean"===typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"===typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=f.isBuffer(e)?e:f.from(e,n),u=s.length;if(0===u)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%u]}return this};var z=/[^+/0-9A-Za-z-_]/g;function P(e,t){var r;t=t||1/0;for(var n=e.length,i=null,o=[],s=0;s<n;++s){if((r=e.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function N(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(z,"")).length<2)return"";for(;e.length%4!==0;)e+="=";return e}(e))}function D(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function q(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!==e}var H=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}()},759:function(e,t){t.read=function(e,t,r,n,i){var o,s,u=8*i-n-1,f=(1<<u)-1,a=f>>1,c=-7,h=r?i-1:0,l=r?-1:1,p=e[t+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+e[t+h],h+=l,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+e[t+h],h+=l,c-=8);if(0===o)o=1-a;else{if(o===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=a}return(p?-1:1)*s*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var s,u,f,a=8*o-i-1,c=(1<<a)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-s))<1&&(s--,f*=2),(t+=s+h>=1?l/f:l*Math.pow(2,1-h))*f>=2&&(s++,f/=2),s+h>=c?(u=0,s=c):s+h>=1?(u=(t*f-1)*Math.pow(2,i),s+=h):(u=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[r+p]=255&u,p+=d,u/=256,i-=8);for(s=s<<i|u,a+=i;a>0;e[r+p]=255&s,p+=d,s/=256,a-=8);e[r+p-d]|=128*y}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(293);e.exports=i}()},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,f=[],a=!1,c=-1;function h(){a&&u&&(a=!1,u.length?f=u.concat(f):c=-1,f.length&&l())}function l(){if(!a){var e=s(h);a=!0;for(var t=f.length;t;){for(u=f,f=[];++c<t;)u&&u[c].run();c=-1,t=f.length}u=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new p(e,t)),1!==f.length||a||s(l)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(162);e.exports=i}()},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},9035:function(e,t,r){"use strict";t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;o[n]||(o[n]="jsx-"+(0,i.default)(e+"-"+r));return o[n]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;o[r]||(o[r]=t.replace(/__jsx-style-dynamic-selector/g,e));return o[r]};var n,i=(n=r(9887))&&n.__esModule?n:{default:n};var o={}},4287:function(e,t,r){"use strict";var n=r(3454);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var o="undefined"!==typeof n&&n.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,u=void 0===i?o:i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;f(s(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",f("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,r,n,u=e.prototype;return u.setOptimizeForSpeed=function(e){f("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),f(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(f(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(f(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(i){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];f(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];f(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&f(s(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,r),n&&i(t,n),e}();function f(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=u},7884:function(e,t,r){"use strict";t.default=a;var n,i=(n=r(7294))&&n.__esModule?n:{default:n},o=r(8122),s=r(9035);var u=i.default.useInsertionEffect||i.default.useLayoutEffect,f="undefined"!==typeof window?(0,o.createStyleRegistry)():void 0;function a(e){var t=f||(0,o.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(u((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}a.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,s.computeId)(t,r)})).join(" ")}},8122:function(e,t,r){"use strict";t.__esModule=!0,t.createStyleRegistry=c,t.StyleRegistry=function(e){var t=e.registry,r=e.children,n=(0,i.useContext)(a),o=(0,i.useState)((function(){return n||t||c()}))[0];return i.default.createElement(a.Provider,{value:o},r)},t.useStyleRegistry=function(){return(0,i.useContext)(a)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=(n=r(4287))&&n.__esModule?n:{default:n},s=r(9035);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var f=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,u=t.isBrowser,f=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=f,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e[0],n=e[1];return i.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=(0,s.computeId)(n,r);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return(0,s.computeSelector)(i,e)})):[(0,s.computeSelector)(i,t)]}}return{styleId:(0,s.computeId)(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=f;var a=(0,i.createContext)(null);function c(){return new f}t.StyleSheetContext=a},5988:function(e,t,r){e.exports=r(7884)}}]);