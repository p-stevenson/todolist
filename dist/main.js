(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(354),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([e.id,"body {\n  background: hotpink;\n}\n\n.listContainer {\n  border: 5px solid black;\n  height: 500px;\n  width: 300px;\n}\n\n#newTaskForm {\n  display: none;\n  position: float;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,UAAU;AACZ",sourcesContent:["body {\n  background: hotpink;\n}\n\n.listContainer {\n  border: 5px solid black;\n  height: 500px;\n  width: 300px;\n}\n\n#newTaskForm {\n  display: none;\n  position: float;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}"],sourceRoot:""}]);const s=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=r(h,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}function o(e,t={},n=[]){const o=document.createElement(e);return Object.entries(t).forEach((([e,t])=>{o.setAttribute(e,t)})),n.forEach((e=>"string"==typeof e?o.appendChild(document.createTextNode(e)):o.appendChild(e))),o}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;const r=e=>{const t=o("li",{id:e.id,"data-description":e.description,"data-priority":e.priority,"data-dueDate":e.dueDate,"data-project":e.project},[`Task: ${e.title}`]),n=o("p",{},[`Notes: ${e.notes}`]),r=o("p",{},[`Description: ${e.description}`]),i=o("p",{},[`Due Date: ${e.dueDate}`]),a=o("p",{},[`Project: ${e.project}`]),s=o("button",{id:`delete-${e.id}`,class:"deleteButton"},["del"]),c=o("button",{id:`edit-${e.id}`,class:"editButton"},["edit"]);return t.appendChild(r),t.appendChild(n),t.appendChild(a),t.appendChild(i),t.appendChild(s),t.appendChild(c),t},i=document.getElementById("root");var a=n(72),s=n.n(a),c=n(825),d=n.n(c),l=n(659),p=n.n(l),u=n(56),h=n.n(u),m=n(540),f=n.n(m),y=n(113),v=n.n(y),C=n(208),g={};g.styleTagTransform=v(),g.setAttributes=h(),g.insert=p().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=f(),s()(C.A,g),C.A&&C.A.locals&&C.A.locals;const k=new class{constructor(){}createTask(e,t,n,o="low",r,i){let a={id:crypto.randomUUID(),title:e,description:t,notes:n,priority:o,project:r,dueDate:i};localStorage.setItem(a.id,JSON.stringify(a)),console.log(localStorage)}getTasks(){let e=[];return Object.keys(localStorage).forEach((t=>{e.push(JSON.parse(localStorage.getItem(t)))})),e}getProjects(){const e=this.getTasks(),t=[...new Set(e.map((e=>e.project)))];console.log(t)}deleteTask(e){localStorage.removeItem(e),window.location.reload()}editTask(e){let t=JSON.parse(localStorage.getItem(e));t.id=e,t.type="todo",t.title=prompt("Enter new task title:"),t.description=prompt("Enter new task description:"),t.notes=prompt("Enter new task notes:"),t.priority=t.priority,t.project=t.project,localStorage.setItem(t.id,JSON.stringify(t))}},A=new class{constructor(e){this.model=e}formDataToModel(e,t,n,o,r,i){this.model.createTask(e,t,n,o,r,i)}deleteTask(e){console.log("here"),this.model.deleteTask(e)}editTask(e){this.model.editTask(e)}getTasks(){return this.model.getTasks()}}(k);new class{constructor(e){this.root=document.getElementById("root"),this.controller=e,this.tasks=this.controller.getTasks(),this.uniqueProjects=[...new Set(this.tasks.map((e=>e.project)))],this.projects=["All",...this.uniqueProjects],this.init()}init(){this.addNewTaskButton(),this.addFilterDropdown(),this.displayTasks(),this.getButtonType()}addNewTaskButton(){this.newTaskButton=o("button",{type:"button",id:"newTaskButton"},["NEW TASK"]),this.root.appendChild(this.newTaskButton),this.newTaskButton.addEventListener("click",(e=>{document.getElementById("newTaskForm")||(this.openForm(),this.closeForm())}))}addFilterDropdown(){this.filterContainer=o("p",{id:"filterContainer"},["Projects:"]),this.root.appendChild(this.filterContainer),this.filterSelect=o("select",{id:"filterTaskDropdown",value:"All"}),this.projects.forEach((e=>{const t=o("option",{value:e},[e]);this.filterSelect.appendChild(t)})),this.filterContainer.appendChild(this.filterSelect),this.filterSelect.addEventListener("change",(e=>{const t=e.target.value;"All"===t?this.displayTasks():this.displayFilteredTasks(t)}))}openForm(){(e=>{const t=o("form",{id:"newTaskForm"});i.appendChild(t);const n=document.createElement("fieldset");t.appendChild(n);const r=o("legend",{},["New Task: "]);n.append(r);const a=document.createElement("p");n.appendChild(a);const s=o("label",{for:"title"},["Task: "]);a.appendChild(s);const c=o("input",{type:"text",name:"title",id:"title",placeholder:"Task Name",required:!0});a.appendChild(c);const d=document.createElement("p");n.appendChild(d);const l=o("label",{for:"description"},["Description: "]);d.appendChild(l);const p=o("input",{type:"text",name:"description",id:"description",placeholder:"Task Description"});d.appendChild(p);const u=document.createElement("p");n.appendChild(u);const h=o("label",{for:"project"},["Project: "]);u.appendChild(h);const m=o("input",{list:"projectName",name:"project",id:"project",autocomplete:"off",placeholder:"Project Name"}),f=o("datalist",{id:"projectName"},[]);m.appendChild(f),e.forEach((e=>{const t=o("option",{value:e},[e]);f.appendChild(t)})),u.appendChild(m);const y=document.createElement("p");n.appendChild(y);const v=o("label",{for:"priority"},["Priority: "]);y.appendChild(v);const C=o("select",{name:"priority",id:"priority",autocomplete:"off",required:!0},[]);y.appendChild(C),["none","low","medium","high"].forEach((e=>{const t=o("option",{value:e},[e]);C.appendChild(t)}));const g=document.createElement("p");n.appendChild(g);const k=o("label",{for:"notes"},["Notes: "]);g.appendChild(k);const A=o("textarea",{id:"notes",name:"notes",rows:3,cols:30,placeholder:"Notes..."},[]);g.appendChild(A);const T=document.createElement("div");n.appendChild(T);const b=o("label",{for:"dueDate"},["Due Date: "]);T.appendChild(b);const E=o("input",{type:"date",id:"dueDate",name:"dueDate",required:!0,min:(new Date).toISOString().split("T")[0]},[]);T.appendChild(E);const w=o("button",{type:"submit"},["SUBMIT"]);n.appendChild(w);const S=o("button",{type:"button",class:"cancel"},["CANCEL"]);n.appendChild(S)})(this.projects),this.formSubmission(),document.getElementById("newTaskForm").style.display="block"}closeForm(){document.querySelector(".cancel").addEventListener("click",(()=>{document.getElementById("newTaskForm").style.display="none",window.location.reload()}),{once:!0})}formSubmission(){document.getElementById("newTaskForm").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#title").value,n=document.querySelector("#description").value,o=document.querySelector("#notes").value,r=document.querySelector("#priority").value;let i=document.querySelector("#project").value;i||(i="default");const a=document.querySelector("#dueDate").value;this.controller.formDataToModel(t,n,o,r,i,a),window.location.reload()}),{once:!0})}displayTasks(){this.clearOldTaskList();const e=this.controller.getTasks(),t=document.createElement("ul");e.forEach((e=>{t.appendChild(r(e))})),this.root.appendChild(t)}displayFilteredTasks(e){this.clearOldTaskList();const t=this.controller.getTasks(),n=document.createElement("ul");t.forEach((t=>{t.project===e&&n.appendChild(r(t))})),this.root.appendChild(n)}clearOldTaskList(){const e=document.querySelector("ul");e&&e.remove()}getButtonType(){document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(e=>{switch(e.target.className){case"deleteButton":this.delete(e);break;case"editButton":this.edit(e)}}))}))}delete(e){this.controller.deleteTask(e.target.id.slice(7))}edit(e){this.controller.editTask(e.target.id.slice(5))}}(A)})();
//# sourceMappingURL=main.js.map