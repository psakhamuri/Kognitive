(this.webpackJsonpkognitive=this.webpackJsonpkognitive||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),s=(n(21),n(22),n(23),n(9)),c=n(10),l=n(11),m=n(1),u=n(15),g=n(14),d=n(32);n(24);var h=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",tenantid:"3",redirectToReferrer:!1},a.login=a.login.bind(Object(m.a)(a)),a.onchange=a.onchange.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"login",value:function(){var e,t,n=this;this.state.email&&this.state.password&&this.state.tenantid&&(e="login/password",t=this.state,new Promise((function(n,a){fetch("https://staging-core-optimy.com/api/v1/"+e,{method:"POST",headers:{authorization:"r0MrA268ORAobX53qkoaohaA7g9ek3JJ","Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){a(e)}))}))).then((function(e){var t=e;t.userData&&(sessionStorage.setItem("userData",JSON.stringify(t)),n.setState({redirectToReferrer:!0}))}))}},{key:"onchange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.redirectToReferrer||sessionStorage.getItem("userData")?o.a.createElement(d.a,{to:"/Tasks"}):o.a.createElement("div",{className:"card mt-4 mr-3 ml-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"login-form"},o.a.createElement("form",{onSubmit:this.login},o.a.createElement("img",{className:"card-img-top",src:"/kog_logo_flat@3x.png",alt:""}),o.a.createElement("div",{className:"social-icon"},o.a.createElement("button",{type:"button mb-3"},o.a.createElement("span",{className:"input-icon"},o.a.createElement("img",{src:"/assets/icons/othersize/google-favicon.png",alt:""}),"\xa0"),"Login With Google"),o.a.createElement("button",{type:"button"},o.a.createElement("span",{className:"input-icon"},o.a.createElement("img",{src:"/assets/icons/othersize/microsoft.png",alt:""}),"\xa0"),"Login With Office 365")),o.a.createElement("div",{className:"seperator"},o.a.createElement("b",null,"or")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"email",name:"email",placeholder:"Your Employee ID",onChange:this.onchange}),o.a.createElement("span",{className:"input-icon"},o.a.createElement("img",{src:"/assets/icons/24/icon-24-person-grey.png",alt:""}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",name:"password",placeholder:"Your Password",onChange:this.onchange}),o.a.createElement("span",{className:"input-icon"},o.a.createElement("img",{src:"/assets/icons/24/icon-24-password.png",alt:""}))),o.a.createElement("button",{className:"login-btn"},"Login")))))}}]),n}(a.Component);var p=function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement(h,null))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/github.io/Kognitive/kognitive",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/github.io/Kognitive/kognitive","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.a232ea7e.chunk.js.map