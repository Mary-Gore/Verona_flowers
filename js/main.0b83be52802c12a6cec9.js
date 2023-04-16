/*! For license information please see main.0b83be52802c12a6cec9.js.LICENSE.txt */
!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new I(r||[]);return a(i,"_invoke",{value:x(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var p={};function y(){}function m(){}function h(){}var v={};l(v,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(O([])));g&&g!==r&&o.call(g,c)&&(v=g);var w=h.prototype=y.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,s){var u=f(e[a],e,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return m.prototype=h,a(w,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:m,configurable:!0}),m.displayName=l(h,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},L(S.prototype),l(S.prototype,s,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new S(d(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=O,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}const r=function(){var t=document.querySelectorAll(".cart-item"),e=document.querySelector(".cart-total > span"),n=0;t.forEach((function(t){var e=t.querySelector(".count-num"),r=t.querySelector(".price"),o=parseInt(e.textContent)*parseFloat(r.textContent);n+=o})),e.textContent=n},o=function(){var t=document.querySelectorAll(".cart-item"),e=document.getElementById("cart_empty"),n=document.querySelector(".cart-counter"),r=0;t.length>0?(e.style.display="none",t.forEach((function(t){var e=parseInt(t.querySelector(".count-num").textContent);r+=e}))):e.style.display="block",n.textContent=r};function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var l=function(){function t(e){var n,r=e.selector,o=e.pattern,a=void 0===o?{}:o,i=e.method;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=document.querySelector(r),this.pattern=a,this.method=i,this.elementsForm=(n=this.form.elements,function(t){if(Array.isArray(t))return s(t)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return"button"!==t.tagName.toLowerCase()&&"button"!==t.type})),this.btnSubmit=this.form.querySelector('button[type="submit"]'),this.error=new Set}var e,n;return e=t,(n=[{key:"init",value:function(){var t=this;this.setPattern(),this.elementsForm.forEach((function(e){""===e.value&&(t.btnSubmit.disabled=!0,t.btnSubmit.classList.remove("active"),t.btnSubmit.classList.add("disable"),t.error.add(e))})),this.elementsForm.forEach((function(e){return e.addEventListener("change",t.checkIt.bind(t))})),this.elementsForm.forEach((function(e){return e.addEventListener("change",(function(){t.error.size?(t.btnSubmit.disabled=!0,t.btnSubmit.classList.remove("active"),t.btnSubmit.classList.add("disable")):(t.btnSubmit.disabled=!1,t.btnSubmit.classList.remove("disable"),t.btnSubmit.classList.add("active"))}))}))}},{key:"isValid",value:function(t){var e=this,n={notEmpty:function(t){return""!==t.value.trim()},pattern:function(t,e){return e.test(t.value)},isChecked:function(t){if("checkbox"===t.type)return!!t.checked;console.warn('Убедитесь, что input.type === "checkbox"')}};if(this.method){var r=this.method[t.id];if(r)return r.every((function(r){return n[r[0]](t,e.pattern[r[1]])}))}else console.warn("Необходимо передать id полей ввода и их методы проверки!");return!0}},{key:"checkIt",value:function(t){var e=t.target;this.isValid(e)?(this.showSuccess(e),this.error.delete(e)):("checkbox"!==e.type?this.showError(e,"Недопустимый формат"):this.showError(e,"Согласитесь с условиями"),this.error.add(e))}},{key:"showError",value:function(t,e){t.classList.remove("success"),t.classList.add("error"),t.parentElement.querySelector(".validator-error").textContent=e,t.parentElement.querySelector(".validator-error").style.display="block"}},{key:"showSuccess",value:function(t){t.classList.remove("error"),t.classList.add("success"),t.parentElement.querySelector(".validator-error").style.display="none"}},{key:"setPattern",value:function(){this.pattern.phone=this.pattern.phone?this.pattern.phone:this.pattern.phone=/^((8|\+7)-?)?(\(?\d{3}\)?-?)(\d{3}-?)(\d{2}-?)\d{2}$/,this.pattern.name?this.pattern.name:this.pattern.name=/^[а-яё]{3,10}$/i}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const f=function(t){var e=document.querySelector(".overlay"),n=document.querySelectorAll("[data-closed]"),r=function(n){"keydown"==n.type&&27!==n.keyCode||(window.innerWidth>992?"slide"===t.dataset.typeAnimate?(t.classList.remove("slideInDown"),t.classList.add("slideOutUp")):"fadeInOut"===t.dataset.typeAnimate&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut")):(t.classList.remove("show-mobile"),t.classList.add("hide-mobile"),e.style.opacity="0",e.style.visibility="hidden"),window.innerWidth>992&&(e.classList.remove("fadeIn"),e.classList.add("fadeOut")))};window.innerWidth>992?(e.classList.remove("fadeOut"),e.classList.add("fadeIn"),"slide"===t.dataset.typeAnimate?(t.classList.remove("slideOutUp"),t.classList.add("slideInDown")):"fadeInOut"===t.dataset.typeAnimate&&(t.classList.remove("fadeOut"),t.classList.add("fadeIn"))):(t.classList.remove("hide-mobile"),t.classList.add("show-mobile"),e.style.opacity="1",e.style.visibility="visible");var o,a=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}(n);try{for(a.s();!(o=a.n()).done;)o.value.addEventListener("click",r)}catch(t){a.e(t)}finally{a.f()}document.addEventListener("keydown",r)};function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y,m,h,v,b,g,w,L,S;L=document.querySelector(".catalog-wrapper"),S=function(){var t,r=(t=e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://verona-flowers-64472-default-rtdb.europe-west1.firebasedatabase.app/products.json");case 2:return n=t.sent,t.next=5,n.json();case 5:t.sent.forEach((function(t){var e='\n       <div data-id="'.concat(t.id,'" class="catalog-item">\n          <div class="img-wrapper">\n            <img src="images/').concat(t.imgSrc,'" alt="').concat(t["vendor code"],'">\n          </div>\n          <div class="wrapper-info">\n            <p class="vendor-code">Артикул: ').concat(t["vendor code"],'</p>\n            <span class="price">').concat(t.price,' ₽</span>\n          </div>\n          <div class="btns-wrapper">\n            <button data-cart class="btn pink-btn" data-type="simple">В корзину</button>\n            <div class="counter-wrapper">\n              <button data-action="minus">-</button>\n              <span class="count-num">1</span>\n              <button data-action="plus">+</button>\n            </div>\n          </div>\n        </div>\n    ');L.insertAdjacentHTML("beforeend",e)}));case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}(),S(),w=document.querySelector(".cart-counter"),window.addEventListener("click",(function(t){var e;"minus"!==t.target.dataset.action&&"plus"!==t.target.dataset.action||(e=t.target.closest(".counter-wrapper").querySelector(".count-num")),"minus"===t.target.dataset.action&&(t.target.closest(".cart-wrapper")?parseInt(e.textContent)>1?(e.textContent=--e.textContent,w.textContent=--w.textContent):1===parseInt(e.textContent)&&(t.target.closest(".cart-item").remove(),r(),o()):parseInt(e.textContent)>1&&(e.textContent=--e.textContent)),"plus"===t.target.dataset.action&&(e.textContent=++e.textContent,t.target.closest(".cart-wrapper")&&(w.textContent=++w.textContent)),t.target.hasAttribute("data-action")&&t.target.closest(".cart-wrapper")&&r()})),g=document.querySelector(".cart-wrapper"),window.addEventListener("click",(function(t){if(t.target.hasAttribute("data-cart")){var e=t.target.closest(".catalog-item"),n=e.querySelector(".count-num"),a={id:e.dataset.id,imgSrc:e.querySelector(".catalog-item img").getAttribute("src"),title:e.querySelector(".vendor-code").textContent,price:parseFloat(e.querySelector(".price").textContent),counter:e.querySelector(".count-num").textContent},i=g.querySelector('[data-id="'.concat(a.id,'"]'));if(i){var c=i.querySelector(".count-num");c.textContent=parseInt(c.textContent)+parseInt(a.counter)}else{var s='\n          <div class="cart-item" data-id="'.concat(a.id,'">\n          <div class="img-wrapper">\n            <img src="').concat(a.imgSrc,'" alt="').concat(a.title,'">\n          </div>\n          <div class="content">\n            <p class="vendor-code">').concat(a.title,'</p>\n            <div class="calc-price-wrap">\n              <div class="counter-wrapper">\n                <button data-action="minus">-</button>\n                <span class="count-num">').concat(a.counter,'</span>\n                <button data-action="plus">+</button>\n              </div>\n              <span class="price">').concat(a.price," ₽</span>\n            </div>\n          </div>\n        </div>\n    ");g.insertAdjacentHTML("beforeend",s)}n.textContent="1",r(),o()}})),b=document.querySelector(".cart"),document.body.addEventListener("click",(function(t){"cart_btn"===t.target.id&&(b.style.display="block"),t.target.closest(".cart .popup-close")&&(b.style.display="none")})),b.addEventListener("click",(function(t){var e=t.target;(e=e.closest(".cart-body"))||(b.style.display="none")})),function(){var t=document.querySelectorAll("[data-simple-popup]");if(0!==t.length){var e,n=document.querySelector(".overlay"),r=document.querySelectorAll('[data-type="simple"]'),o=document.querySelectorAll("[data-closed]"),i=function(t){var e,o=a(r);try{for(o.s();!(e=o.n()).done;){var i=e.value;!i.classList.contains("is-open")||"keydown"===t.type&&27!==t.keyCode||(window.innerWidth>992?(n.classList.remove("fadeIn"),n.classList.add("fadeOut"),"slide"===i.dataset.typeAnimate?(i.classList.remove("slideInDown"),i.classList.add("slideOutUp")):"fadeInOut"===i.dataset.typeAnimate&&(i.classList.remove("fadeIn"),i.classList.add("fadeOut"))):(i.classList.remove("show-mobile"),i.classList.add("hide-mobile"),n.style.visibility="hidden",n.style.opacity="0"),i.classList.remove("is-open"))}}catch(t){o.e(t)}finally{o.f()}},c=a(t);try{var s=function(){var t=e.value;t.addEventListener("click",(function(){var e;e=document.getElementById(t.dataset.simplePopup),window.innerWidth>992?(n.classList.remove("fadeOut"),n.classList.add("fadeIn"),"slide"===e.dataset.typeAnimate?(e.classList.remove("slideOutUp"),e.classList.add("slideInDown")):"fadeInOut"===e.dataset.typeAnimate&&(e.classList.remove("fadeOut"),e.classList.add("fadeIn"))):(e.classList.remove("hide-mobile"),e.classList.add("show-mobile"),n.style.visibility="visible",n.style.opacity="1"),e.classList.add("is-open")}))};for(c.s();!(e=c.n()).done;)s()}catch(t){c.e(t)}finally{c.f()}var u,l=a(o);try{for(l.s();!(u=l.n()).done;)u.value.addEventListener("click",i)}catch(t){l.e(t)}finally{l.f()}document.addEventListener("keydown",i)}}(),new l({selector:"#callback_form",pattern:{},method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]],checkbox:[["isChecked","checkbox"]]}}).init(),y="callback_form",m=document.getElementById(y),h=document.createElement("div"),v=m.querySelector('button[type="submit"]'),m.addEventListener("submit",(function(t){t.preventDefault(),m.parentNode.append(h),v.classList.remove("active"),v.classList.add("disable"),v.disabled=!0,window.innerWidth>992?h.innerHTML="<img class='img-preloader' src='icons/iconSpinnerAnimated.svg'/>":(h.classList.add("text-st-message"),h.textContent="Загрузка...");var e=new FormData(m),n={};e.forEach((function(t,e){n[t]=e})),function(t){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(n).then((function(t){var e;(e=m.elements,function(t){if(Array.isArray(t))return p(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){return t.value=""}));var n=m.querySelector('button[type="submit"]'),r=document.getElementById(n.dataset.finishPopup);if(200!==t.status)throw h.textContent="Что-то пошло не так...",h.classList.add("text-st-message"),new Error("status network is not 200");f(r),h.textContent="",h.style.display="none"})).catch((function(t){console.error(t)}))}))}();