(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n#sidebar {\n    width: 300px;\n    height: 100vh;\n    background-color: #e2e8f0;\n\n    display: flex;\n    flex-direction: column;\n    align-items: baseline;\n    justify-content: baseline;\n}\n\n#mainNav,\n#projectsNav {\n    padding: 15px;\n}\n\n#mainNav {\n    border-bottom: 1px solid #9ca3af;\n}\n\n.project {\n    color: cyan;\n}\n\n#content {\n    width: 100%;\n    display: flex;\n    background-color: #bfdbfe;\n}\n\nheader {\n    background-color: #1e3a8a;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 45px;\n    font-weight: bold;\n    padding: 10px;\n}\n\n.todoCard {\n    background-color: aliceblue;\n    padding: 15px;\n    border-radius: 10px;\n}\n\nmain {\n    padding: 15px;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n    border: 1px solid black;\n    border-radius: 15px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header {\n    padding: 10px 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid lightgray;\n}\n\n.modal-header .modal-title {\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-header .modal-close {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-body {\n    padding: 10px 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: 200ms ease-in-out;\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(n){if(null==n)return;const e=document.getElementById("overlay");n.classList.add("active"),e.classList.add("active"),console.log("Opening modal...")}function e(n){if(null==n)return;const e=document.getElementById("overlay");n.classList.remove("active"),e.classList.remove("active"),console.log("Closing modal...")}function o(t){const o=document.querySelector("main"),r=document.querySelector(".todoCard");for(;r.firstChild;)r.removeChild(r.lastChild),console.log("clearing item...");const a=document.createElement("button");a.classList.add("newTodoBtn"),a.textContent="Add Task +",r.appendChild(a),Array.from(t.todoList).forEach((n=>{const e=document.createElement("div");e.classList.add("todoItem"),e.textContent=n.title,r.insertBefore(e,a),o.appendChild(r),e.addEventListener("click",(()=>{console.log("clicked todo item")}))})),a.addEventListener("click",(()=>{n(document.getElementById("addTodoModal")),document.querySelectorAll("[data-close-button]").forEach((n=>{n.addEventListener("click",(()=>{e(n.closest(".modal"))}))}))})),console.log("displayProject function")}function r(n){return this.title=n,{title:n,todoList:[]}}function a(n){let e=new r(n);return function(n){const e=document.getElementById("projectsNav"),t=document.getElementById("newProjBtn"),r=document.createElement("div");r.classList.add("project"),r.textContent=n.title,e.insertBefore(r,t),r.addEventListener("click",(()=>{console.log("displaying this project..."),o(n)}))}(e),e}function i(n,e,t,o){this.title=n,this.desc=e,this.due=t,this.priority=o}function c(n,e,t="",o="",r=""){let a=new i(e,t,o,r);return function(n,e){n.todoList.push(e)}(n,a),a}var d=t(72),s=t.n(d),l=t(825),u=t.n(l),p=t(659),m=t.n(p),f=t(56),v=t.n(f),y=t(540),g=t.n(y),h=t(113),b=t.n(h),x=t(208),E={};E.styleTagTransform=b(),E.setAttributes=v(),E.insert=m().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=g(),s()(x.A,E),x.A&&x.A.locals&&x.A.locals,document.getElementById("newProjBtn"),document.getElementById("today"),document.getElementById("starred"),document.getElementById("finished"),document.getElementsByName("main"),document.getElementsByClassName("project");const w=document.getElementById("newProjBtn");!function(){let n=a("Personal");c(n,"Create new Todo Item"),c(n,"Create new Project Item");let e=a("Work");c(e,"tester"),c(e,"tester2"),console.log(n),o(n)}(),w.addEventListener("click",(()=>{n(document.getElementById("addProjectModal")),document.querySelectorAll("[data-close-button]").forEach((n=>{n.addEventListener("click",(()=>{e(n.closest(".modal"))}))}))}))})()})();