var t;function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(t){for(var r=function(r){var e=o.find(function(e){return e.textContent.trim()===t[r].name});n.prepend(e)},n=document.querySelector("ul"),o=e(n.querySelectorAll("li")),a=t.length-1;a>=0;a--)r(a)}((t=e(document.querySelector("ul").querySelectorAll("li")).map(function(t){return{name:t.textContent.trim(),position:t.dataset.position,salary:+t.dataset.salary.slice(1).replaceAll(",",""),age:+t.dataset.age}}),e(t).sort(function(t,r){return r.salary-t.salary})));
//# sourceMappingURL=index.5e307610.js.map