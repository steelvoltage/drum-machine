(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/boom.550be808.wav"},function(e,a,t){e.exports=t.p+"static/media/snare.80c4129b.wav"},function(e,a,t){e.exports=t.p+"static/media/hihat.4ba39e07.wav"},function(e,a,t){e.exports=t.p+"static/media/kick.4dd58595.wav"},function(e,a,t){e.exports=t.p+"static/media/openhat.a62db465.wav"},function(e,a,t){e.exports=t.p+"static/media/ride.b0d70ec5.wav"},function(e,a,t){e.exports=t.p+"static/media/clap.a6e86dd7.wav"},function(e,a,t){e.exports=t.p+"static/media/tink.2a6bb6f5.wav"},function(e,a,t){e.exports=t.p+"static/media/tom.572ed39d.wav"},,function(e,a,t){e.exports=t(31)},,,,,function(e,a,t){},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),i=t.n(r),o=(t(21),t(1)),s=t(6),d=t.n(s),m=t(7),u=t.n(m),l=t(8),p=t.n(l),y=t(9),k=t.n(y),f=t(10),v=t.n(f),b=t(11),w=t.n(b),E=t(12),C=t.n(E),h=t(13),x=t.n(h),g=t(14),T=t.n(g),N=[{key:"Q",keyCode:"81",src:d.a,name:"Boom"},{key:"W",keyCode:"87",src:u.a,name:"Snare"},{key:"E",keyCode:"69",src:p.a,name:"Hi-Hat"},{key:"A",keyCode:"65",src:k.a,name:"Kick"},{key:"S",keyCode:"83",src:v.a,name:"Open Hat"},{key:"D",keyCode:"68",src:w.a,name:"Ride"},{key:"Z",keyCode:"90",src:C.a,name:"Clap"},{key:"X",keyCode:"88",src:x.a,name:"Tink"},{key:"C",keyCode:"67",src:T.a,name:"Tom"}],O=function(e){var a=e.displayDrum,t=Object(o.a)(a,2),r=t[0],i=t[1];Object(n.useEffect)(function(){document.addEventListener("keydown",s)});var s=function(e){var a=e.key.toUpperCase(),t=document.getElementById(a);console.log(a),t&&(t.curentTime=0,t.play(),i(t.attributes.drum.value),setTimeout(function(){return i("")},500))},d=function(e){return e===r?"highlighted":""};return c.a.createElement("section",{className:"wrapper"},N.map(function(e,a){return c.a.createElement("div",{key:a,className:"drum-pad ".concat(d(e.name)),id:e.name,press:e.key,onClick:function(e){return function(e){var a=e.target.attributes.press.nodeValue,t=document.getElementById(a);console.log(a),t&&(t.curentTime=0,t.play(),i(t.attributes.drum.nodeValue),setTimeout(function(){return i("")},500))}(e)}},e.key,c.a.createElement("audio",{src:e.src,className:"clip",id:e.key,drum:e.name},e.key))}))},j=t(15),B=t.n(j),D=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",{className:"container",id:"drum-machine"},c.a.createElement("header",null,c.a.createElement("h1",null,"Drum Machine")),c.a.createElement("main",null,c.a.createElement("div",{className:"display",id:"display"},t),c.a.createElement(O,{displayDrum:[t,r]})),c.a.createElement(B.a,null))};i.a.render(c.a.createElement(D,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.ce5658fa.chunk.js.map