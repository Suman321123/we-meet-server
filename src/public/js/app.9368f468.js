(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-8d149396":"2d9be6ec"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-8d149396":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-8d149396":"15d7f57e"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"16a3":function(t,e,n){"use strict";var r=n("cd8c"),a=n.n(r);a.a},"21bb":function(t,e,n){"use strict";var r=n("2dad"),a=n.n(r);a.a},"2dad":function(t,e,n){},3720:function(t,e,n){t.exports=n.p+"img/keyboard.81087a97.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,a,o,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("Navbar"),n("section",{staticClass:"container"},[n("div",{staticClass:"container-left"}),n("div",{staticClass:"container-right"},[n("div",{staticClass:"container-right-box"},[n("div",{staticClass:"container-right-box-top"},[n("div",{staticClass:"container-right-box-top-container",on:{click:t.handleCreateMeeting}},[n("p",{staticClass:"container-right-box-top-container-text"},[t._v("Create a new meeting")])])]),n("div",{staticClass:"container-right-box-middle"}),t._m(0)])])])],1)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-right-box-bottom"},[r("div",{staticClass:"container-right-box-bottom-container"},[r("img",{staticClass:"container-right-box-bottom-container-image",attrs:{src:n("3720")}}),r("p",{staticClass:"container-right-box-bottom-container-text"},[t._v("Use a meeting code")])])])}],p=n("5530"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar"},[r("div",{staticClass:"navbar-left"},[r("div",{staticClass:"navbar-left-logo"},[r("img",{staticClass:"navbar-left-logo-image",attrs:{src:n("9b19")}})]),r("h2",{staticClass:"navbar-left-heading"},[t._v(" WeMeet ")])]),r("div",{staticClass:"navbar-right"},[r("div",{staticClass:"navbar-right-user-logo"},[t._v(" S ")])])])}],v={name:"NavBar"},g=v,b=(n("16a3"),Object(i["a"])(g,m,h,!1,null,null,null)),y=b.exports,C=n("2f62"),_={name:"Home",components:{Navbar:y},methods:Object(p["a"])(Object(p["a"])({},Object(C["b"])(["getRoomId"])),{},{handleCreateMeeting:function(){this.getRoomId({success:this.getRoomIdSuccess})},getRoomIdSuccess:function(t){this.$router.push({name:"MeetingRoom",query:{roomId:t}})}})},x=_,w=(n("21bb"),Object(i["a"])(x,d,f,!1,null,null,null)),O=w.exports;r["a"].use(l["a"]);var j=[{path:"/",name:"Home",component:O},{path:"/_room",name:"MeetingRoom",component:function(){return n.e("chunk-8d149396").then(n.bind(null,"dc94"))}}],E=new l["a"]({mode:"history",base:"/",routes:j}),S=E,k=n("28dd");r["a"].use(C["a"]),r["a"].use(k["a"]);var P=new C["a"].Store({namespaced:!0,state:{},mutations:{},actions:{getRoomId:function(t,e){t.commit;var n=e.success;r["a"].http.get("http://192.168.0.101:9000/getRoomId").then((function(t){n&&n(t.body)})).catch((function(t){alert(JSON.stringify(t)),console.log(t)}))}},modules:{}}),T=n("5132"),M=n.n(T);r["a"].use(new M.a({debug:!0,connection:"http://localhost:9000/",vuex:{store:P,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),r["a"].config.productionTip=!1,new r["a"]({router:S,store:P,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9b19":function(t,e,n){t.exports=n.p+"img/logo.116245aa.svg"},"9c0c":function(t,e,n){},cd8c:function(t,e,n){}});
//# sourceMappingURL=app.9368f468.js.map