(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(t,e,a){},372:function(t,e,a){"use strict";var r=a(333);a.n(r).a},382:function(t,e,a){"use strict";a.r(e);a(170),a(67),a(106),a(167),a(10),a(97);const r=(t,e,a)=>{const r=t.textContent.trim(),n=r.length,s=[];t.textContent="";for(let l=0;l<n;l++){const n=document.createElement(e);a&&a.length&&n.classList.add(a),n.textContent=" "===r[l]?" ":r[l],t.before(n),s.push(n)}return s},n=(t,e,a,s,l,i,o,d)=>{if(Array.isArray(e.letterize_id)||(e.letterize_id=[]),!e.letterize_id.includes(d)){e.letterize_id.push(d);const u=[...e.childNodes],c=u.length;for(let e=0;e<c;e++){let c;switch(u[e].nodeType){case 1:-1===Array.prototype.indexOf.call(t,u[e])&&n(t,u[e],a,s,l,i,o,d);break;case 3:c=r(u[e],a,s),i.push(...c),l[o].push(...c)}}}};class s{constructor(t){const e=(t=>t instanceof NodeList||t instanceof HTMLCollection||Array.isArray(t)?t:t instanceof HTMLElement?[t]:"string"==typeof t?document.querySelectorAll(t):null)(t.targets);if(!e||!e.length)return void console.error(`Letterize: targets '${e}' not found or not specified`);const a=e.length;s.numInstances=(s.numInstances||0)+1;const r=t.wrapper||"span",l=t.className,i=s.numInstances,o=[],d=[];for(let t=0;t<a;t++)o[t]=[],n(e,e[t],r,l,o,d,t,i);this._wrapper=r,this._targets=e,this._list=o,this._listAll=d,this._className=l}get listAll(){return this._listAll}get list(){return this._list}get targets(){return this._targets}get className(){return this._className}get wrapper(){return this._wrapper}deletterize(){const t=this.listAll.length;for(let e=0;e<t;e++)this.listAll[e].before(...Array.from(this.listAll[e].childNodes)),this.listAll[e].remove();this._wrapper=void 0,this._targets=void 0,this._list=void 0,this._listAll=void 0,this._className=void 0,this.deletterize=void 0}}var l=s,i=a(332),o={name:"random",data:function(){return{animeTimeline:null,letters:[{letters:"Ready"},{letters:"Set"},{letters:"Go!"}],randomNumber:[{value:"01 01 01 01 01 01 01 01 01 01"},{value:"02 02 02 02 02 02 02 02 02 02"},{value:"03 03 03 03 03 03 03 03 03 03"},{value:"04 04 04 04 04 04 04 04 04 04"},{value:"05 05 05 05 05 05 05 05 05 05"},{value:"06 06 06 06 06 06 06 06 06 06"},{value:"07 07 07 07 07 07 07 07 07 07"},{value:"08 08 08 08 08 08 08 08 08 08"},{value:"09 09 09 09 09 09 09 09 09 09"},{value:"10 10 10 10 10 10 10 10 10 10"},{value:"11 11 11 11 11 11 11 11 11 11"},{value:"12 12 12 12 12 12 12 12 12 12"},{value:"13 13 13 13 13 13 13 13 13 13"},{value:"14 14 14 14 14 14 14 14 14 14"},{value:"15 15 15 15 15 15 15 15 15 15"}],result:"01"}},mounted:function(){this.randomInit()},methods:{randomInit:function(){for(var t=this.randomNumber,e=[],a=0;a<t.length;a++){var r=Math.floor(Math.random()*t.length);-1===e.indexOf(r)?e.push(r):a--}var n=t.map((function(a,r){return t[e[r]]}));this.randomNumber=n;var s=Number(this.result=Math.floor(Math.random()*this.randomNumber.length)+1).toString();if(s<10&&1==s.length)return s="0"+s,this.result=s,s;this.randomAnime()},randomAnime:function(){var t=document.querySelector(".play"),e={opacityIn:[0,1],scaleIn:[.2,1],scaleOut:3,durationIn:800,durationOut:600,delay:400},a=i.a.timeline({loop:1,autoplay:!1,update:function(){t.style.opacity=0,t.style.transform="translateY(-40px)"},loopComplete:function(t){var r=new l({targets:".random__item"});a=i.a.timeline({targets:r.listAll,delay:i.a.stagger(100,{grid:[r.list[0].length,r.list.length],from:"center"}),loop:1,complete:function(t){a=i.a.timeline({targets:".random__result",opacity:1}).add({targets:".random__result",opacity:e.opacityIn,duration:e.durationIn}).add({targets:".random__result",opacity:0,duration:e.durationOut,easing:"easeInExpo",delay:e.delay})}}).add({targets:".random__item",loop:1,autoplay:!1,opacity:1,delay:i.a.stagger(100,{grid:[r.list[0].length,r.list.length],from:"center"})}).add({scale:.8}).add({letterSpacing:"9px"}).add({scale:1}).add({letterSpacing:"6px"}).add({targets:".random__item",opacity:0,delay:i.a.stagger(100,{grid:[r.list.length,r.list[0].length]})})}});a.add({targets:".letters-1",opacity:e.opacityIn,scale:e.scaleIn,duration:e.durationIn}).add({targets:".letters-1",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}).add({targets:".letters-2",opacity:e.opacityIn,scale:e.ScaleIn,duration:e.durationIn}).add({targets:".letters-2",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}).add({targets:".letters-3",opacity:e.opacityIn,scale:e.ScaleIn,duration:e.durationIn}).add({targets:".letters-3",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}),t.onclick=a.restart}}},d=(a(372),a(25)),u=Object(d.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"animejs-letterizejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animejs-letterizejs"}},[t._v("#")]),t._v(" animejs + letterizejs")]),t._v(" "),a("p",[t._v("animejs + letterizejs 조합으로~"),a("br"),t._v("\n랜덤으로 숫자를 뿌려주고~"),a("br"),t._v("\n일정 시간이 지나면 특정한 숫자만 전부 뿌려준다~")]),t._v(" "),a("div",{staticClass:"random"},[a("h1",{staticClass:"random__letters"},t._l(t.letters,(function(e,r){return a("span",{key:r,class:["letters","letters-"+(r+1)]},[t._v("\n      "+t._s(e.letters)+"\n    ")])})),0),t._v(" "),a("div",{staticClass:"random__group"},t._l(t.randomNumber,(function(e,r){return a("p",{key:r,staticClass:"random__item"},[t._v("\n      "+t._s(e.value)+"\n    ")])})),0),t._v(" "),a("p",{staticClass:"random__result"},[t._v("\n    "+t._s(t.result)+"\n  ")])]),t._v(" "),a("div",{staticClass:"controller"},[a("button",{staticClass:"button play",attrs:{type:"button"}},[t._v("PLAY")])]),t._v(" "),a("p",[a("strong",[t._v("참고 자료(References)")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://animejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://animejs.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://letterizejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://letterizejs.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tobiasahlin.com/moving-letters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tobiasahlin.com/moving-letters/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=u.exports}}]);