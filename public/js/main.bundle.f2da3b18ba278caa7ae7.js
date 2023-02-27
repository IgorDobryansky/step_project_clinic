!function(){"use strict";var t={91:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},941:function(t,e,n){t.exports=n.p+"img/clinic_logod246adac946c88922100.png"}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"}(),n.b=document.baseURI||self.location.href,function(){var t,e,i,s=n(91),o=n.n(s),r=new URL(n(941),n.b);o()(r);class a{constructor(){this._visit=document.createElement("div"),this._visit.className="visit-card",this.visitPurpose=document.createElement("p"),this.visitPurpose.innerText="Болить голова",this.visitDescription=document.createElement("p"),this.visitDescription.innerText="Дуже сильно болить голова",this.isUrgency=document.createElement("select"),this.urgencyNormal=document.createElement("option"),this.urgencyNormal.innerText="Середня",this.urgencyLow=document.createElement("option"),this.urgencyLow.innerText="Низька",this.urgencyHight=document.createElement("option"),this.urgencyHight.innerText="Висока",this.isUrgency.append(this.urgencyLow,this.urgencyNormal,this.urgencyHight),this.fullName=document.createElement("p"),this.fullName.innerText="Ігор Добрянський",this._visit.append(this.visitPurpose,this.visitDescription,this.isUrgency,this.fullName)}render(){return this._visit}}class l{constructor(){this._modalWrapper=document.createElement("div"),this._modalWrapper.addEventListener("click",(t=>{let e=t.target,n=e===this._modal||this._modal.contains(e),i=e===this._closeButton;n&&!i||this._modalWrapper.remove()})),this._modalWrapper.className="modal-window-wrapper",this._modal=document.createElement("div"),this._modal.className="modal-window",this._closeButton=document.createElement("span"),this._closeButton.innerHTML="&#10005;",this._closeButton.className="modal-close-button",this._modal.append(this._closeButton),this._modalWrapper.append(this._modal)}}class c extends l{constructor(){super(),this._loginEmailFieldset=document.createElement("fieldset"),this._loginEmailFieldset.className="email-fieldset",this._loginEmailLegend=document.createElement("legend"),this._loginEmailLegend.className="email-legend",this._loginEmailLegend.innerText="Емейл",this._emailInput=document.createElement("input"),this._emailInput.type="text",this._emailInput.className="email-input",this._loginEmailFieldset.append(this._loginEmailLegend,this._emailInput),this._loginPasswordFieldset=document.createElement("fieldset"),this._loginPasswordFieldset.className="password-fieldset",this._loginPasswordLegend=document.createElement("legend"),this._loginPasswordLegend.className="password-legend",this._loginPasswordLegendText=document.createElement("span"),this._loginPasswordLegendText.className="password-legend_text",this._loginPasswordLegendText.innerText="Пароль",this._loginPasswordLegend.append(this._loginPasswordLegendText),this._passwordInput=document.createElement("input"),this._passwordInput.type="password",this._passwordInput.className="password-input",this._loginPasswordFieldset.append(this._loginPasswordLegend,this._passwordInput),this._enterButton=document.createElement("button"),this._enterButton.className="button-check-data",this._enterButton.innerText="Увійдіть",this._enterButton.addEventListener("click",(t=>{t.preventDefault(),this.loginRequest()})),this._orText=document.createElement("span"),this._orText.className="or-text",this._orText.innerText="або",this._registerLink=document.createElement("a"),this._registerLink.className="register-link",this._registerLink.target="_blank",this._registerLink.href="https://ajax.test-danit.com/front-pages/cards-register.html",this._registerLink.innerText="Зареєструйтесь",this._modal.append(this._loginEmailFieldset,this._loginPasswordFieldset,this._enterButton,this._orText,this._registerLink)}async loginRequest(){const t=this._emailInput.value,e=this._passwordInput.value;this._enterButton.disabled=!0;try{let n=await fetch("https://ajax.test-danit.com/api/v2/cards/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})});if(!(await n).ok)throw"Перевірте правильність емейлу чи паролю або зареєструйтесь";{let t=await n.text();this._modalWrapper.remove(),localStorage.setItem("clinic-token",`${t}`),d.loginStatus=!0,(new d).render()}}catch(t){this._enterButton.disabled=!1,console.log(t)}}render(){document.body.append(this._modalWrapper)}}class d{constructor(){this._loginButton=document.createElement("button"),this._loginButton.className="button-enter",this._loginButton.innerText="Увійти",this._loginButton.addEventListener("click",(t=>{this.getLogin()})),this._logoutButton=document.createElement("button"),this._logoutButton.innerText="Вийти",this._logoutButton.addEventListener("click",(t=>{localStorage.removeItem("clinic-token"),d.loginStatus=!1,(new d).render()})),this._createVisit=document.createElement("button"),this._createVisit.innerText="Створити візит",this._createVisit.addEventListener("click",(t=>{t.preventDefault()}))}static isLogged(){(new d).render()}render(){const t=document.getElementById("login-status");t.innerHTML="",localStorage.getItem("clinic-token")?(d.loginStatus=!0,t.append(this._createVisit,this._logoutButton)):(d.loginStatus=!1,t.append(this._loginButton))}getLogin(){(new c).render()}}t=d,i=void 0,(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e="loginStatus"))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,function(){const t=document.getElementById("visits");d.isLogged(),t.append((new a).render())}()}()}();