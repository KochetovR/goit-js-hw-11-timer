parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");class t{constructor({selector:t,targetDate:e}){this.start(),this.getTimeComp(),this.selector=t,this.targetDate=e,this.dayIndex=document.querySelector(`${t} [data-value="days"]`),this.hourIndex=document.querySelector(`${t} [data-value="hours"]`),this.minuteIndex=document.querySelector(`${t} [data-value="mins"]`),this.secIndex=document.querySelector(`${t} [data-value="secs"]`)}start(){setInterval(()=>{const t=Date.now(),e=this.targetDate.getTime()-t,s=this.getTimeComp(e);this.updateTimeLast(s)},1e3)}pad(t){return String(t).padStart(2,"0")}getTimeComp(t){return{days:Math.floor(t/864e5),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}updateTimeLast({days:t,hours:e,mins:s,secs:a}){this.dayIndex.textContent=t,this.hourIndex.textContent=e,this.minuteIndex.textContent=s,this.secIndex.textContent=a}}const e=new t({selector:"#timer-1",targetDate:new Date("Dec 31, 2021")}),s=new t({selector:"#summer",targetDate:new Date("Aug 31, 2021")});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.b1f7f5a9.js.map