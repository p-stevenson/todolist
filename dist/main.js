(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(354),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,"body {\n  background: hotpink;\n}\n\n.listContainer {\n  border: 5px solid black;\n  height: 500px;\n  width: 300px;\n}\n\n#newTaskForm {\n  display: none;\n  position: float;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,UAAU;AACZ",sourcesContent:["body {\n  background: hotpink;\n}\n\n.listContainer {\n  border: 5px solid black;\n  height: 500px;\n  width: 300px;\n}\n\n#newTaskForm {\n  display: none;\n  position: float;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}"],sourceRoot:""}]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=n(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=r(h,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=o(e,r),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}function o(e,t={},n=[]){const o=document.createElement(e);return Object.entries(t).forEach((([e,t])=>{o.setAttribute(e,t)})),n.forEach((e=>"string"==typeof e?o.appendChild(document.createTextNode(e)):o.appendChild(e))),o}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;const r=e=>{const t=o("li",{id:e.id,"data-description":e.description,"data-priority":e.priority,"data-dueDate":e.dueDate,"data-project":e.project},[`Task: ${e.title}`]),n=o("p",{},[`Notes: ${e.notes}`]),r=o("p",{},[`Description: ${e.description}`]),a=o("p",{},[`Due Date: ${e.dueDate}`]),i=o("p",{},[`Project: ${e.project}`]),s=o("button",{id:`delete-${e.id}`,class:"deleteButton"},["del"]),d=o("button",{id:`edit-${e.id}`,class:"editButton"},["edit"]);return t.appendChild(r),t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(s),t.appendChild(d),t},a=document.getElementById("root");var i=n(72),s=n.n(i),d=n(825),c=n.n(d),l=n(659),p=n.n(l),u=n(56),h=n.n(u),m=n(540),f=n.n(m),y=n(113),v=n.n(y),C=n(208),A={};A.styleTagTransform=v(),A.setAttributes=h(),A.insert=p().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=f(),s()(C.A,A),C.A&&C.A.locals&&C.A.locals;const g=new class{constructor(){}createTask(e,t,n,o="low",r,a){let i={id:crypto.randomUUID(),title:e,description:t,notes:n,priority:o,project:r,dueDate:a};localStorage.setItem(i.id,JSON.stringify(i)),console.log(localStorage)}getTasks(){let e=[];return Object.keys(localStorage).forEach((t=>{e.push(JSON.parse(localStorage.getItem(t)))})),e}deleteTask(e){localStorage.removeItem(e),window.location.reload()}editTask(e){let t=JSON.parse(localStorage.getItem(e));t.id=e,t.type="todo",t.title=prompt("Enter new task title:"),t.description=prompt("Enter new task description:"),t.notes=prompt("Enter new task notes:"),t.priority=t.priority,t.project=t.project,localStorage.setItem(t.id,JSON.stringify(t))}},T=new class{constructor(e){this.model=e}formDataToModel(e,t,n,o,r,a){this.model.createTask(e,t,n,o,r,a)}deleteTask(e){console.log("here"),this.model.deleteTask(e)}editTask(e){this.model.editTask(e)}getTasks(){return this.model.getTasks()}}(g);new class{constructor(e){this.root=document.getElementById("root"),this.controller=e,this.init()}init(){this.addNewTaskButton(),this.addFilterDropdown(),this.displayTasks(),this.getButtonType()}addNewTaskButton(){this.newTaskButton=o("button",{type:"button",id:"newTaskButton"},["NEW TASK"]),this.root.appendChild(this.newTaskButton),this.newTaskButton.addEventListener("click",(e=>{document.getElementById("newTaskForm")||(this.openForm(),this.closeForm())}))}addFilterDropdown(){const e=this.controller.getTasks(),t=["All",...new Set(e.map((e=>e.project)))];this.filterContainer=o("p",{id:"filterContainer"},["Projects:"]),this.root.appendChild(this.filterContainer),this.filterDropdown=o("select",{id:"filterTaskDropdown",value:"All"}),t.forEach((e=>{const t=o("option",{value:e},[e]);this.filterDropdown.appendChild(t)})),this.filterContainer.appendChild(this.filterDropdown),this.filterDropdown.addEventListener("change",(e=>{const t=e.target.value;"All"===t?this.displayTasks():this.displayFilteredTasks(t)}))}openForm(){(()=>{const e=o("form",{id:"newTaskForm"});a.appendChild(e);const t=document.createElement("fieldset");e.appendChild(t);const n=o("legend",{},["New Task: "]);t.append(n);const r=document.createElement("p");t.appendChild(r);const i=o("label",{for:"title"},["Task: "]);r.appendChild(i);const s=o("input",{type:"text",name:"title",id:"title",placeholder:"Task Name",required:!0});r.appendChild(s);const d=document.createElement("p");t.appendChild(d);const c=o("label",{for:"description"},["Description: "]);d.appendChild(c);const l=o("input",{type:"text",name:"description",id:"description",placeholder:"Task Description"});d.appendChild(l);const p=document.createElement("p");t.appendChild(p);const u=o("label",{for:"project"},["Project: "]);p.appendChild(u);const h=o("input",{type:"text",name:"project",id:"project",placeholder:"Project Name"});p.appendChild(h);const m=document.createElement("p");t.appendChild(m);const f=o("label",{for:"priority"},["Priority: "]);m.appendChild(f);const y=o("select",{name:"priority",id:"priority",autocomplete:"off",required:!0},[]);m.appendChild(y),["low","medium","high"].forEach((e=>{const t=o("option",{value:e},[e]);y.appendChild(t)}));const v=document.createElement("p");t.appendChild(v);const C=o("label",{for:"notes"},["Notes: "]);v.appendChild(C);const A=o("textarea",{id:"notes",name:"notes",rows:10,cols:30,placeholder:"Notes..."},[]);v.appendChild(A);const g=document.createElement("div");t.appendChild(g);const T=o("label",{for:"dueDate"},["Due Date: "]);g.appendChild(T);const k=o("input",{type:"date",id:"dueDate",name:"dueDate",required:!0,min:(new Date).toISOString().split("T")[0]},[]);g.appendChild(k);const b=o("button",{type:"submit"},["SUBMIT"]);t.appendChild(b);const E=o("button",{type:"button",class:"cancel"},["CANCEL"]);t.appendChild(E)})(),this.formSubmission(),document.getElementById("newTaskForm").style.display="block"}closeForm(){document.querySelector(".cancel").addEventListener("click",(()=>{document.getElementById("newTaskForm").style.display="none",window.location.reload()}),{once:!0})}formSubmission(){document.getElementById("newTaskForm").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#title").value,n=document.querySelector("#description").value,o=document.querySelector("#notes").value,r=document.querySelector("#priority").value;let a=document.querySelector("#project").value;a||(a="default");const i=document.querySelector("#dueDate").value;this.controller.formDataToModel(t,n,o,r,a,i),window.location.reload()}),{once:!0})}displayTasks(){this.clearOldTaskList();const e=this.controller.getTasks(),t=document.createElement("ul");e.forEach((e=>{t.appendChild(r(e))})),this.root.appendChild(t)}displayFilteredTasks(e){this.clearOldTaskList();const t=this.controller.getTasks(),n=document.createElement("ul");t.forEach((t=>{t.project===e&&n.appendChild(r(t))})),this.root.appendChild(n)}clearOldTaskList(){const e=document.querySelector("ul");e&&e.remove()}getButtonType(){document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(e=>{switch(e.target.className){case"deleteButton":this.delete(e);break;case"editButton":this.edit(e)}}))}))}delete(e){this.controller.deleteTask(e.target.id.slice(7))}edit(e){this.controller.editTask(e.target.id.slice(5))}}(T)})();
//# sourceMappingURL=main.js.map