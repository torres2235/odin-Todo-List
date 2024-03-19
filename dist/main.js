(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(601),d=t.n(o),a=t(314),r=t.n(a)()(d());r.push([e.id,"* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n#sidebar {\n    width: 300px;\n    height: 100vh;\n    background-color: #e2e8f0;\n\n    display: flex;\n    flex-direction: column;\n    align-items: baseline;\n    justify-content: baseline;\n}\n\n#mainNav,\n#projectsNav {\n    padding: 15px;\n}\n\n#mainNav {\n    border-bottom: 1px solid #9ca3af;\n}\n\n.project {\n    color: cyan;\n}\n\n#content {\n    width: 100%;\n    display: flex;\n    background-color: #bfdbfe;\n}\n\nheader {\n    background-color: #1e3a8a;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 45px;\n    font-weight: bold;\n    padding: 10px;\n}\n\n.todoCard {\n    background-color: aliceblue;\n    padding: 15px;\n    border-radius: 10px;\n}\n\nmain {\n    padding: 15px;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n    border: 1px solid black;\n    border-radius: 15px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header {\n    padding: 10px 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid lightgray;\n}\n\n.modal-header .modal-title {\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-header .modal-close {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-body {\n    padding: 10px 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: 200ms ease-in-out;\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}",""]);const i=r},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,d,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),d&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=d):s[4]="".concat(d)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},r=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=d(p,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function d(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,d){var a=o(e=e||[],d=d||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var i=t(a[r]);n[i].references--}for(var c=o(e,d),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var d=void 0!==t.layer;d&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,d&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var d=n[o];if(void 0!==d)return d.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e,n){null!=n&&(document.getElementById("overlay").classList.remove("active"),e.removeChild(n),console.log("Closing modal..."))}function n(e,n,t,o){this.title=e,this.desc=n,this.due=t,this.priority=o}function o(e,t,o="",d="",a=""){let r=new n(t,o,d,a);return function(e,n){e.todoList.push(n)}(e,r),r}function d(n){const t=document.querySelector("main"),a=document.querySelector(".todoCard");for(;a.firstChild;)a.removeChild(a.lastChild),console.log("clearing item...");const r=document.createElement("button");r.classList.add("newTodoBtn"),r.id="newTodoBtn",r.textContent="Add Task +",a.appendChild(r),Array.from(n.todoList).forEach((e=>{const n=document.createElement("div");n.classList.add("todoItem"),n.textContent=e.title,a.insertBefore(n,r),t.appendChild(a),n.addEventListener("click",(()=>{console.log("clicked todo item")}))})),r.addEventListener("click",(()=>{console.log("btnpressed"),function(n){!function(n){console.log("Opening modal...");const t=document.querySelector("body"),a=document.createElement("div");a.classList.add("modal"),a.id="addToDoModal";const r=document.createElement("div");r.classList.add("modal-header");const i=document.createElement("div");i.classList.add("modal-title"),i.textContent="New Task";const c=document.createElement("button");c.classList.add("modal-close"),c.innerHTML="&times",r.appendChild(i),r.appendChild(c),a.appendChild(r);const l=document.createElement("div");l.classList.add("modal-body");const s=document.createElement("form"),u=document.createElement("input");u.type="text",u.name="task",u.id="task",u.placeholder="Task",s.appendChild(u);const m=document.createElement("textarea");m.name="desc",m.id="desc",m.placeholder="Description",s.appendChild(m);const p=document.createElement("div"),f=document.createElement("label");f.for="due",f.textContent="Due:",p.appendChild(f);const v=document.createElement("input");v.type="date",v.name="due",v.id="due",p.appendChild(v),s.appendChild(p);const h=document.createElement("div"),y=document.createElement("label");y.for="prio",y.textContent="Priority:",h.appendChild(y);const g=document.createElement("select");g.name="prio",g.id="prio";const b=document.createElement("option");b.value="",b.textContent="None";const x=document.createElement("option");x.value="low",x.textContent="Low";const E=document.createElement("option");E.value="medium",E.textContent="Medium";const C=document.createElement("option");C.value="high",C.textContent="High",g.appendChild(b),g.appendChild(x),g.appendChild(E),g.appendChild(C),h.appendChild(g),s.appendChild(h);const L=document.createElement("button");L.type="submit",L.id="todoSubmit",L.textContent="Submit",s.appendChild(L),l.appendChild(s),a.appendChild(l),t.appendChild(a),document.getElementById("overlay").classList.add("active"),c.addEventListener("click",(()=>{e(t,a)})),L.addEventListener("click",(()=>{event.preventDefault();const r=document.getElementById("task"),i=document.getElementById("desc"),c=document.getElementById("due"),l=document.getElementById("prio");console.log("todo made"),o(n,r.value,i.value,c.value,l.value),d(n),e(t,a)}))}(n)}(n)})),console.log("displayProject function")}function a(e){return this.title=e,{title:e,todoList:[]}}function r(e){let n=new a(e);return function(e){const n=document.getElementById("projectsNav"),t=document.getElementById("newProjBtn"),o=document.createElement("div");o.classList.add("project"),o.textContent=e.title,n.insertBefore(o,t),o.addEventListener("click",(()=>{console.log("displaying this project..."),d(e)}))}(n),n}var i=t(72),c=t.n(i),l=t(825),s=t.n(l),u=t(659),m=t.n(u),p=t(56),f=t.n(p),v=t(540),h=t.n(v),y=t(113),g=t.n(y),b=t(208),x={};x.styleTagTransform=g(),x.setAttributes=f(),x.insert=m().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=h(),c()(b.A,x),b.A&&b.A.locals&&b.A.locals,document.getElementById("newProjBtn"),document.getElementById("today"),document.getElementById("starred"),document.getElementById("finished"),document.getElementsByName("main"),document.getElementsByClassName("project");const E=document.getElementById("newProjBtn");!function(){let e=r("Personal");o(e,"Create new Todo Item"),o(e,"Create new Project Item");let n=r("Work");o(n,"tester"),o(n,"tester2"),console.log(e),d(e)}(),E.addEventListener("click",(()=>{document.getElementById("addProjectModal"),function(){console.log("Opening modal...");const n=document.querySelector("body"),t=document.createElement("div");t.classList.add("modal"),t.id="addProjectModal";const o=document.createElement("div");o.classList.add("modal-header");const d=document.createElement("div");d.classList.add("modal-title"),d.textContent="New Project";const a=document.createElement("button");a.classList.add("modal-close"),a.innerHTML="&times",o.appendChild(d),o.appendChild(a),t.appendChild(o);const i=document.createElement("div");i.classList.add("modal-body");const c=document.createElement("form"),l=document.createElement("input");l.type="text",l.name="project",l.id="project",l.placeholder="Project Title",c.appendChild(l);const s=document.createElement("button");s.type="submit",s.id="projSubmit",s.textContent="Submit",c.appendChild(s),i.appendChild(c),t.appendChild(i),n.appendChild(t),document.getElementById("overlay").classList.add("active"),a.addEventListener("click",(()=>{e(n,t)})),s.addEventListener("click",(()=>{event.preventDefault();const o=document.getElementById("project");console.log("project made"),r(o.value),e(n,t)}))}()}))})()})();