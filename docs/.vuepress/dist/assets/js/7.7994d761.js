(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(t,e,a){},370:function(t,e,a){"use strict";var n=a(332);a.n(n).a},381:function(t,e,a){"use strict";a.r(e);a(95),a(96);var n=a(368),l=a(369),r={name:"random",data:function(){return{autoplay:!1,active:!1,randomLetters:[{letters:"Ready"},{letters:"Set"},{letters:"Go!"}],randomValue:[{value:"01 01 01 01 01 01 01 01 01 01"},{value:"02 02 02 02 02 02 02 02 02 02"},{value:"03 03 03 03 03 03 03 03 03 03"},{value:"04 04 04 04 04 04 04 04 04 04"},{value:"05 05 05 05 05 05 05 05 05 05"},{value:"06 06 06 06 06 06 06 06 06 06"},{value:"07 07 07 07 07 07 07 07 07 07"},{value:"08 08 08 08 08 08 08 08 08 08"},{value:"09 09 09 09 09 09 09 09 09 09"},{value:"10 10 10 10 10 10 10 10 10 10"},{value:"11 11 11 11 11 11 11 11 11 11"},{value:"12 12 12 12 12 12 12 12 12 12"},{value:"13 13 13 13 13 13 13 13 13 13"},{value:"14 14 14 14 14 14 14 14 14 14"},{value:"15 15 15 15 15 15 15 15 15 15"}]}},mounted:function(){var t,e={opacityIn:[0,1],scaleIn:[.2,1],scaleOut:3,durationIn:800,durationOut:600,delay:400},a=new n.a({targets:".random__item"});(t=l.a.timeline({loop:1,autoplay:!1,update:function(){document.querySelector(".play").style.opacity=0,document.querySelector(".play").style.transform="translateY(-40px)"},loopComplete:function(e){t=l.a.timeline({targets:a.listAll,delay:l.a.stagger(100,{grid:[a.list[0].length,a.list.length],from:"center"}),loop:1,changeComplete:function(t){document.querySelector(".play").style.opacity=1,document.querySelector(".play").style.transform="translateY(0)"}}).add({targets:".random__item",opacity:1,delay:l.a.stagger(100,{grid:[a.list[0].length,a.list.length],from:"center"})}).add({scale:.8}).add({letterSpacing:"9px"}).add({scale:1}).add({letterSpacing:"6px"}).add({targets:".random__item",opacity:0,delay:l.a.stagger(100,{grid:[a.list.length,a.list[0].length]})}).finished.then(this.logFinished)}})).add({targets:".letters-1",opacity:e.opacityIn,scale:e.scaleIn,duration:e.durationIn}).add({targets:".letters-1",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}).add({targets:".letters-2",opacity:e.opacityIn,scale:e.ScaleIn,duration:e.durationIn}).add({targets:".letters-2",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}).add({targets:".letters-3",opacity:e.opacityIn,scale:e.ScaleIn,duration:e.durationIn}).add({targets:".letters-3",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}),document.querySelector(".play").onclick=t.play},methods:{logFinished:function(){console.log("finished")},randomValues:function(){var t=this.randomValue;t.forEach((function(e){return e.value=t[Math.floor(Math.random()*t.length)].value}))}}},s=(a(370),a(25)),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"animejs-letterizejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animejs-letterizejs"}},[t._v("#")]),t._v(" animejs + letterizejs")]),t._v(" "),a("p",[t._v("animejs + letterizejs 조합으로~"),a("br"),t._v("\n랜덤으로 숫자를 뿌려주고~"),a("br"),t._v("\n일정 시간이 지나면 특정한 숫자만 전부 뿌려준다~")]),t._v(" "),a("div",{staticClass:"random"},[a("h1",{staticClass:"random__letters"},t._l(t.randomLetters,(function(e,n){return a("span",{key:n,class:["letters","letters-"+(n+1)]},[t._v("\n      "+t._s(e.letters)+"\n    ")])})),0),t._v(" "),a("div",{staticClass:"random__group"},t._l(t.randomValue,(function(e,n){return a("p",{key:n,staticClass:"random__item"},[t._v("\n      "+t._s(e.value)+"\n    ")])})),0)]),t._v(" "),a("div",{staticClass:"controller"},[a("button",{staticClass:"button play",attrs:{type:"button"}},[t._v("PLAY")])]),t._v(" "),a("p",[a("strong",[t._v("참고 자료(References)")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://animejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://animejs.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://letterizejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://letterizejs.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tobiasahlin.com/moving-letters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tobiasahlin.com/moving-letters/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);