(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(354),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([t.id,"body {\n  background: hotpink;\n}\n\n.listContainer {\n  border: 5px solid black;\n  height: 500px;\n  width: 300px;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd",sourcesContent:["body {\n  background: hotpink;\n}\n\n.listContainer {\n  border: 5px solid black;\n  height: 500px;\n  width: 300px;\n}"],sourceRoot:""}]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=o(t,r),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;const o=document.getElementById("root"),r=(t,e={},n="")=>{const o=document.createElement(t);for(let[t,n]of Object.entries(e))o.setAttribute(t,n);return o.textContent=n,o},a=t=>{const e=r("form",{id:"newTaskForm"}),n=r("fieldset"),a=r("legend",{},t?"Edit Task":"New Task"),i=document.createElement("p"),s=document.createElement("label");s.setAttribute("for","title");const c=r("input",{type:"text",name:"title",id:"title",placeholder:"Task",value:t?t.title:""}),l=document.createElement("p"),d=r("label",{for:"priority"},"Priority"),u=r("select",{name:"priority",id:"priority"}),p=document.createElement("option");p.setAttribute("value","low"),p.textContent="low";const m=document.createElement("option");m.setAttribute("value","medium"),m.textContent="medium";const f=document.createElement("option");if(f.setAttribute("value","high"),f.textContent="high",t)switch(t.priority){case"high":f.setAttribute("selected","selected");break;case"medium":m.setAttribute("selected","selected");break;default:p.setAttribute("selected","selected")}const h=document.createElement("p"),v=document.createElement("label");v.setAttribute("for","details");const b=r("textarea",{id:"details",name:"details",rows:10,cols:30,placeholder:"Task details..."},t?t.details:""),y=document.createElement("button");y.setAttribute("type","submit"),y.textContent="SUBMIT",i.append(s,c),u.append(p,m,f),l.append(d,u),h.append(v,b),n.append(a,i,l,h,y),e.append(n),o.append(e)};class i{constructor(t){this.root=document.getElementById("root"),this.controller=t,this.newTaskForm=a,this.init()}init(){this.newTaskButton=document.createElement("button"),this.newTaskButton.textContent="NEW TASK",this.newTaskButton.setAttribute("type","button"),this.newTaskButton.setAttribute("id","newTaskButton"),this.root.appendChild(this.newTaskButton),this.newTaskButton.addEventListener("click",(t=>{this.newTaskForm(),this.formSubmission()})),this.displayTasks(),this.getButtonType()}formSubmission(){document.getElementById("newTaskForm").addEventListener("submit",(t=>{t.preventDefault();const e=document.querySelector("#title").value,n=document.querySelector("#priority").value,o=document.querySelector("#details").value;this.controller.formDataToModel(e,o,n),window.location.reload()}))}displayTasks(){let t=document.createElement("ul");Object.keys(localStorage).forEach((e=>{t.appendChild((t=>{const e=(t=>{const e=document.createElement("li");return e.setAttribute("id",t.id),e.setAttribute("data-type",t.type),e.setAttribute("data-priority",t.priority),e.setAttribute("data-project",t.project),e.textContent=t.title,e})(t),n=(t=>{const e=document.createElement("p");return e.textContent=`Details: ${t.details}`,e})(t),o=(t=>{const e=document.createElement("button");return e.setAttribute("id",`delete-${t.id}`),e.setAttribute("class","deleteButton"),e.textContent="del",e})(t),r=(t=>{const e=document.createElement("button");return e.setAttribute("id",`edit-${t.id}`),e.setAttribute("class","editButton"),e.textContent="edit",e})(t);return e.appendChild(n),e.appendChild(o),e.appendChild(r),e})(JSON.parse(localStorage.getItem(e))))})),this.root.appendChild(t)}getButtonType(){document.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(t=>{switch(t.target.className){case"deleteButton":this.delete(t);break;case"editButton":this.edit(t)}}))}))}delete(t){this.controller.deleteTask(t.target.id.slice(7))}edit(t){this.controller.editTask(t.target.id.slice(5))}populateForm(t){console.log(t),a(t)}}class s{constructor(){}createTask(t,e,n="low",o="default",r="todo"){let a={id:crypto.randomUUID(),type:r,title:t,details:e,priority:n,project:o};localStorage.setItem(a.id,JSON.stringify(a))}deleteTask(t){localStorage.removeItem(t),window.location.reload()}retrieveTask(t){return localStorage.getItem(t)}}var c=n(72),l=n.n(c),d=n(825),u=n.n(d),p=n(659),m=n.n(p),f=n(56),h=n.n(f),v=n(540),b=n.n(v),y=n(113),A=n.n(y),g=n(208),T={};T.styleTagTransform=A(),T.setAttributes=h(),T.insert=m().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=b(),l()(g.A,T),g.A&&g.A.locals&&g.A.locals,new class{constructor(){this.view=new i(this),this.model=new s}formDataToModel(t,e,n){this.model.createTask(t,e,n)}deleteTask(t){this.model.deleteTask(t)}editTask(t){this.view.populateForm(JSON.parse(this.model.retrieveTask(t)))}}})();
//# sourceMappingURL=main.js.map