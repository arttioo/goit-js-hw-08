function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var r,i,o,u,a,f,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,a=setTimeout(T,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function T(){var e=p();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function h(e){return a=void 0,m&&r?b(e):(r=i=void 0,u)}function w(){var e=p(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(T,t),b(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=i=a=void 0},w.flush=function(){return void 0===a?u:h(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),j=b.querySelector("input"),S=b.querySelector("textarea");!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(j.value=t.email,S.value=t.message)}(),b.addEventListener("input",e(t)((function(e){const t=j.value,n=S.value,r={email:t,message:n};localStorage.setItem("feedback-form-state",JSON.stringify(r))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.a76398a3.js.map
