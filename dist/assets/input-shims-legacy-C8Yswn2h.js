System.register(["./index-legacy-BH6NE5rR.js"],(function(e,t){"use strict";var o,n,i,r,s,a,d,l,c,u,v;return{setters:[e=>{o=e.d,n=e.K,i=e.b,r=e.e,s=e.a,a=e.f,d=e.g,l=e.h,c=e.j,u=e.k,v=e.l}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
const t=new WeakMap,m=(e,o,n,i=0,r=!1)=>{t.has(e)!==n&&(n?f(e,o,i,r):y(e,o))},f=(e,o,n,i=!1)=>{const r=o.parentNode,s=o.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,i&&(s.disabled=!0),r.appendChild(s),t.set(e,s);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",o.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},y=(e,o)=>{const n=t.get(e);n&&(t.delete(e),n.remove()),e.style.pointerEvents="",o.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",w=(e,t,o,n)=>{const i=e.top,r=e.bottom,s=t.top,a=s+15,d=Math.min(t.bottom,n-o)-50-r,l=a-i,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,i-s),v=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:o,inputSafeY:4-(i-a)}},h="$ionPaddingTimer",b=(e,t,o)=>{const n=e[h];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[h]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()}),120)},g=(e,t,o)=>{e.addEventListener("focusout",(()=>{t&&b(t,0,o)}),{once:!0})};let E=0;const S="data-ionic-skip-scroll-assist",L=e=>{document.activeElement!==e&&(e.setAttribute(S,"true"),e.focus())},D=async(e,t,o,n,i,r,s=!1,a=0,d=!0)=>{if(!o&&!n)return;const l=((e,t,o,n)=>{var i;const r=null!==(i=e.closest("ion-item,[ion-item]"))&&void 0!==i?i:e;return w(r.getBoundingClientRect(),t.getBoundingClientRect(),o,n)})(e,o||n,i,a);if(o&&Math.abs(l.scrollAmount)<4)return L(t),void(r&&null!==o&&(b(o,E),g(t,o,(()=>E=0))));if(m(e,t,!0,l.inputSafeY,s),L(t),c((()=>e.click())),r&&o&&(E=l.scrollPadding,b(o,E)),"undefined"!=typeof window){let n;const i=async()=>{void 0!==n&&clearTimeout(n),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),o&&await v(o,0,l.scrollAmount,l.scrollDuration),m(e,t,!1,l.inputSafeY),L(t),r&&g(t,o,(()=>E=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(o){const e=await u(o),r=e.scrollHeight-e.clientHeight;if(d&&l.scrollAmount>r-e.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(n=setTimeout(i,1e3))}i()}};e("startInputShims",(async(e,t)=>{if(void 0===o)return;const c="ios"===t,u="android"===t,v=e.getNumber("keyboardHeight",290),f=e.getBoolean("scrollAssist",!0),y=e.getBoolean("hideCaretOnScroll",c),w=e.getBoolean("inputBlurring",!1),h=e.getBoolean("scrollPadding",!0),b=Array.from(o.querySelectorAll("ion-input, ion-textarea")),g=new WeakMap,E=new WeakMap,L=await n.getResizeMode(),x=async e=>{await new Promise((t=>s(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),n=a(e),c=n?null:e.closest("ion-footer");if(o){if(n&&y&&!g.has(e)){const t=((e,t,o)=>{if(!o||!t)return()=>{};const n=o=>{var n;(n=t)===n.getRootNode().activeElement&&m(e,t,o)},s=()=>m(e,t,!1),a=()=>n(!0),d=()=>n(!1);return i(o,"ionScrollStart",a),i(o,"ionScrollEnd",d),t.addEventListener("blur",s),()=>{r(o,"ionScrollStart",a),r(o,"ionScrollEnd",d),t.removeEventListener("blur",s)}})(e,o,n);g.set(e,t)}if("date"!==o.type&&"datetime-local"!==o.type&&(n||c)&&f&&!E.has(e)){const t=((e,t,o,n,i,r,s,a=!1)=>{const c=r&&(void 0===s||s.mode===d.None);let u=!1;const v=void 0!==l?l.innerHeight:0,m=i=>{!1!==u?D(e,t,o,n,i.detail.keyboardHeight,c,a,v,!1):u=!0},f=()=>{u=!1,null==l||l.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",f)},y=async()=>{t.hasAttribute(S)?t.removeAttribute(S):(D(e,t,o,n,i,c,a,v),null==l||l.addEventListener("ionKeyboardDidShow",m),e.addEventListener("focusout",f))};return e.addEventListener("focusin",y),()=>{e.removeEventListener("focusin",y),null==l||l.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",f)}})(e,o,n,c,v,h,L,u);E.set(e,t)}}};w&&(()=>{let e=!0,t=!1;const o=document,n=()=>{t=!0},r=()=>{e=!0},s=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(p))return;const r=n.target;r!==i&&(r.matches(p)||r.closest(p)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};i(o,"ionScrollStart",n),o.addEventListener("focusin",r,!0),o.addEventListener("touchend",s,!1)})();for(const o of b)x(o);o.addEventListener("ionInputDidLoad",(e=>{x(e.detail)})),o.addEventListener("ionInputDidUnload",(e=>{(e=>{if(y){const t=g.get(e);t&&t(),g.delete(e)}if(f){const t=E.get(e);t&&t(),E.delete(e)}})(e.detail)}))}))}}}));
