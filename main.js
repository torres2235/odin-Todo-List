(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>v});var o=n(601),d=n.n(o),a=n(314),c=n.n(a),i=n(417),l=n.n(i),r=new URL(n(10),n.b),s=new URL(n(24),n.b),p=new URL(n(587),n.b),u=c()(d()),m=l()(r),h=l()(s),f=l()(p);u.push([e.id,`@font-face {\n    font-family: 'myFont';\n    src: url(${m}) format('truetype');\n}\n\nhtml * {\n    margin: 0px;\n    padding: 0px;\n    color: white;\n    font-family: 'myFont', sans-serif !important;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n#sidebar {\n    width: 30%;\n    height: 100vh;\n    background-color: #0f172a;\n\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n#mainNav,\n#projectsNav {\n    padding: 10px;\n    margin-left: 70px;\n    gap: 10px;\n}\n\n#mainNav {\n    border-bottom: 1px solid #9ca3af;\n    margin-top: 30px;\n\n}\n\n#author {\n    position: absolute;\n    bottom: 0;\n    padding: 10px;\n}\n\n.project {\n    color: #60a5fa;\n}\n\n#content {\n    width: 100%;\n    display: flex;\n    background-color: #bfdbfe;\n}\n\nheader {\n    background: #1c1917;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 45px;\n    font-weight: bold;\n    padding: 10px;\n}\n\n#projectTitle {\n    padding: 10px;\n    width: 20%;\n    border-radius: 15px;\n    text-align: center;\n}\n.todoCard {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 15px;\n    border-radius: 10px;\n    width: 95%;\n}\n\n#projectTitle, \n.todoCard {\n    background-color: #0f172a;\n}\n\n.todoItem {\n    display: flex;\n    justify-content: space-between;\n    box-shadow: -2px 0 black;\n}\n\n.itemLeft,\n.itemRight {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\ninput[type="checkbox"],\n.itemRight:hover,\n.project:hover,\n#all:hover,\n#finished:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\n.desc {\n    color: gray;\n}\n\n.info,\n.trash {\n    width: 20px;\n    height: 20px;\n    filter: invert(1);\n    color: black;\n    background: url(${h});\n}\n\nmain {\n    background-image: url(${f});\n    background-size: cover;\n    padding: 15px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.modal {\n    background-color: #1e3a8a;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n    border: 1px solid black;\n    border-radius: 15px;\n    z-index: 10;\n    width: 500px;\n    max-width: 80%;\n}\n\n.modal-header {\n    padding: 10px 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid lightgray;\n}\n\n.modal-header .modal-title {\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-header .modal-close {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.modal-body {\n    padding: 10px 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: 200ms ease-in-out;\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}\n\nbutton {\n    background: #1e3a8a;\n}\n\ninput,\ntextarea,\nselect {\n    color: black;\n}\n\ninput {\n    width: 25px;\n    height: 25px;\n}\n\n.done {\n    background: #60a5fa;\n    text-decoration: line-through;\n    opacity: 0.25;\n    border-radius: 10px;\n}`,""]);const v=u},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,d,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var r=0;r<e.length;r++){var s=[].concat(e[r]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),d&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=d):s[4]="".concat(d)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],r=o.base?l[0]+o.base:l[0],s=a[r]||0,p="".concat(r," ").concat(s);a[r]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=d(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var a=o(e=e||[],d=d||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var l=o(e,d),r=0;r<a.length;r++){var s=n(a[r]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,d&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},24:(e,t,n)=>{e.exports=n.p+"ed7b8814afc9b4579bc4.svg"},10:(e,t,n)=>{e.exports=n.p+"da67ca8c38ef44c4773d.ttf"},587:(e,t,n)=>{e.exports=n.p+"036df921fc4b857fbbb8.webp"}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var d=o.length-1;d>-1&&(!e||!/^http(s?):/.test(e));)e=o[d--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(e,t){null!=t&&(document.getElementById("overlay").classList.remove("active"),e.removeChild(t),console.log("Closing modal..."))}function t(e,t,n,o){this.title=e,this.desc=t,this.due=n,this.priority=o}function o(e,n,o="",d="",a="",c="no"){let i=new t(n,o,d,a);return function(e,t){e.todoList.push(t)}(e,i),i}function d(t){console.log("Opening modal...");const n=document.querySelector("body"),d=document.createElement("div");d.classList.add("modal"),d.id="addToDoModal";const a=document.createElement("div");a.classList.add("modal-header");const c=document.createElement("div");c.classList.add("modal-title"),c.textContent="New Task";const i=document.createElement("button");i.classList.add("modal-close"),i.innerHTML="&times",a.appendChild(c),a.appendChild(i),d.appendChild(a);const l=document.createElement("div");l.classList.add("modal-body");const r=document.createElement("form"),p=document.createElement("input");p.type="text",p.name="task",p.id="task",p.placeholder="Task",r.appendChild(p);const u=document.createElement("textarea");u.name="desc",u.id="desc",u.placeholder="Description",r.appendChild(u);const m=document.createElement("div"),h=document.createElement("label");h.for="due",h.textContent="Due:",m.appendChild(h);const f=document.createElement("input");f.type="date",f.name="due",f.id="due",m.appendChild(f),r.appendChild(m);const v=document.createElement("div"),y=document.createElement("label");y.for="prio",y.textContent="Priority:",v.appendChild(y);const b=document.createElement("select");b.name="prio",b.id="prio";const x=document.createElement("option");x.value="low",x.textContent="Low";const C=document.createElement("option");C.value="medium",C.textContent="Medium";const E=document.createElement("option");E.value="high",E.textContent="High",b.appendChild(x),b.appendChild(C),b.appendChild(E),v.appendChild(b),r.appendChild(v);const L=document.createElement("button");L.type="submit",L.id="todoSubmit",L.textContent="Submit",r.appendChild(L),l.appendChild(r),d.appendChild(l),n.appendChild(d),document.getElementById("overlay").classList.add("active"),i.addEventListener("click",(()=>{e(n,d)})),L.addEventListener("click",(()=>{event.preventDefault();const a=document.getElementById("task"),c=document.getElementById("desc"),i=document.getElementById("due"),l=document.getElementById("prio");console.log("todo made"),o(t,a.value,c.value,i.value,l.value),"All"!=t.title?s(t):g(),e(n,d)}))}function a(t,n){console.log("Opening modal...");const o=document.querySelector("body"),d=document.createElement("div");d.classList.add("modal"),d.id="todoInfo";const a=document.createElement("div");a.classList.add("modal-header");const c=document.createElement("input");c.classList.add("modal-title"),c.value=n.title,c.placeholder="Task";const i=document.createElement("button");i.classList.add("modal-close"),i.innerHTML="&times",a.appendChild(c),a.appendChild(i),d.appendChild(a);const l=document.createElement("div");l.classList.add("modal-body");const r=document.createElement("textarea");r.value=n.desc,r.placeholder="Notes",l.appendChild(r);const p=document.createElement("div"),u=document.createElement("label");u.for="due",u.textContent="Due:",p.appendChild(u);const m=document.createElement("input");m.type="date",m.name="due",m.id="due",m.value=n.due,p.appendChild(m),l.append(p);const h=document.createElement("div"),f=document.createElement("label");f.for="prio",f.textContent="Priority:",h.appendChild(f);const v=document.createElement("select");v.name="prio",v.id="prio";const y=document.createElement("option");y.value="low",y.textContent="Low";const b=document.createElement("option");b.value="medium",b.textContent="Medium";const x=document.createElement("option");switch(x.value="high",x.textContent="High",n.priority){case"low":y.selected="selected";break;case"medium":b.selected="selected";break;case"high":x.selected="selected"}v.appendChild(y),v.appendChild(b),v.appendChild(x),h.appendChild(v),l.appendChild(h);const C=document.createElement("button");C.textContent="Save",C.type="submit",C.id="save",l.appendChild(C),d.appendChild(l),o.appendChild(d),document.getElementById("overlay").classList.add("active"),i.addEventListener("click",(()=>{e(o,d)})),C.addEventListener("click",(()=>{event.preventDefault(),n.title=c.value,n.desc=r.value,n.due=m.value,n.priority=v.value,"All"!=t.title?s(t):g(),e(o,d)}))}function c(e,t){console.log(e),console.log(t);const n=e.todoList.indexOf(t);n>-1&&(e.todoList.splice(n,1),"All"!=e.title?s(e):g())}var i=n(24);const l=n.p+"fd889c97fe0a1e943022.svg";function r(e,t,n,o,d,a,c){if(n.checked)console.log("Checkbox is checked.."),t.done="yes",o.classList.add("done");else{console.log("Checkbox is not checked.."),t.done="no";try{o.classList.remove("done")}catch{return}}}function s(e){const t=document.querySelector("#projectTitle"),n=document.querySelector("#todoList");for(t.textContent=e.title;n.firstChild;)n.removeChild(n.lastChild),console.log("clearing item...");const o=document.createElement("button");o.classList.add("newTodoBtn"),o.id="newTodoBtn",o.textContent="Add Task +",n.appendChild(o),Array.from(e.todoList).forEach((t=>{const d=document.createElement("div");d.classList.add("todoItem");const s=document.createElement("div");s.classList.add("itemLeft");const p=document.createElement("input");p.type="checkbox";const u=document.createElement("div"),m=document.createElement("div");m.classList.add("task");const h=document.createElement("div");h.classList.add("desc"),m.textContent=t.title,h.textContent=t.desc,u.appendChild(m),u.appendChild(h),s.appendChild(p),s.appendChild(u);const f=document.createElement("div");f.classList.add("itemRight");const v=new Image;v.classList.add("info"),v.src=i,v.alt="info";const g=new Image,y=document.createElement("div");y.classList.add("trash"),g.src=l,g.alt="trash",y.appendChild(g),f.appendChild(v),f.appendChild(y),d.appendChild(s),d.appendChild(f),n.insertBefore(d,o),"yes"==t.done&&(p.checked=!0,r(0,t,p,d)),p.addEventListener("change",(()=>{r(0,t,p,d)})),v.addEventListener("click",(()=>{a(e,t)})),g.addEventListener("click",(()=>{c(e,t)}))})),o.addEventListener("click",(()=>{d(e)})),console.log("displayProject function")}let p=[];function u(e){return this.title=e,{title:e,todoList:[]}}function m(e){let t=new u(e);return p.push(t),function(e){const t=document.getElementById("projectsNav"),n=document.getElementById("newProjBtn"),o=document.createElement("div");o.classList.add("project"),o.textContent=e.title,t.insertBefore(o,n),o.addEventListener("click",(()=>{console.log("displaying this project..."),s(e)}))}(t),t}function h(){return p}let f=new u("All");function v(){return f}function g(){let e=h(),t=v();console.log(e);const n=document.querySelector("#projectTitle"),o=document.querySelector("#todoList");for(n.textContent="All Tasks";o.firstChild;)o.removeChild(o.lastChild),console.log("clearing item...");const s=document.createElement("button");s.classList.add("newTodoBtn"),s.id="newTodoBtn",s.textContent="Add Task +",o.appendChild(s),Array.from(e).forEach((e=>{Array.from(e.todoList).forEach((t=>{const n=document.createElement("div");n.classList.add("todoItem");const d=document.createElement("div");d.classList.add("itemLeft");const p=document.createElement("input");p.type="checkbox";const u=document.createElement("div"),m=document.createElement("div");m.classList.add("task");const h=document.createElement("div");h.classList.add("desc"),m.textContent=t.title,h.textContent=t.desc,u.appendChild(m),u.appendChild(h),d.appendChild(p),d.appendChild(u);const f=document.createElement("div");f.classList.add("itemRight");const v=new Image;v.classList.add("info"),v.src=i,v.alt="info";const g=new Image;g.classList.add("trash"),g.src=l,g.alt="trash",f.appendChild(v),f.appendChild(g),n.appendChild(d),n.appendChild(f),o.insertBefore(n,s),"yes"==t.done&&(p.checked=!0,r(0,t,p,n)),p.addEventListener("change",(()=>{r(0,t,p,n)})),v.addEventListener("click",(()=>{a(e,t)})),g.addEventListener("click",(()=>{c(e,t)}))}))})),s.addEventListener("click",(()=>{d(t)})),console.log("allTodos function")}h().push(f);var y=n(72),b=n.n(y),x=n(825),C=n.n(x),E=n(659),L=n.n(E),w=n(56),k=n.n(w),j=n(540),T=n.n(j),I=n(113),B=n.n(I),S=n(208),A={};A.styleTagTransform=B(),A.setAttributes=k(),A.insert=L().bind(null,"head"),A.domAPI=C(),A.insertStyleElement=T(),b()(S.A,A),S.A&&S.A.locals&&S.A.locals;const M=document.getElementById("all");document.getElementById("finished"),document.getElementsByName("main"),document.getElementsByClassName("project");const P=document.getElementById("newProjBtn");!function(){let e=m("Personal");o(e,"Create new Todo Item","use the button below","2024-03-31","high"),o(e,"Create new Project Item","use the button on the left","2024-03-31","low");let t=m("Work");o(t,"tester"),o(t,"tester2"),s(e)}(),M.addEventListener("click",(()=>{g()})),P.addEventListener("click",(()=>{!function(){console.log("Opening modal...");const t=document.querySelector("body"),n=document.createElement("div");n.classList.add("modal"),n.id="addProjectModal";const o=document.createElement("div");o.classList.add("modal-header");const d=document.createElement("div");d.classList.add("modal-title"),d.textContent="New Project";const a=document.createElement("button");a.classList.add("modal-close"),a.innerHTML="&times",o.appendChild(d),o.appendChild(a),n.appendChild(o);const c=document.createElement("div");c.classList.add("modal-body");const i=document.createElement("form"),l=document.createElement("input");l.type="text",l.name="project",l.id="project",l.placeholder="Project Title",i.appendChild(l);const r=document.createElement("button");r.type="submit",r.id="projSubmit",r.textContent="Submit",i.appendChild(r),c.appendChild(i),n.appendChild(c),t.appendChild(n),document.getElementById("overlay").classList.add("active"),a.addEventListener("click",(()=>{e(t,n)})),r.addEventListener("click",(()=>{event.preventDefault();const o=document.getElementById("project");console.log("project made"),m(o.value),e(t,n)}))}()}))})()})();