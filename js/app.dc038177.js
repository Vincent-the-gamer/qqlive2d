(function(){"use strict";var e={37:function(e,t,n){var o=n(9242),i=n(3396);const r={class:"Live2D"},a=(0,i._)("h1",{align:"center"},"大家好，这里是南愁酱 ~^_^~",-1),u=(0,i._)("h2",null,"咱也不知道具体要干啥喵~，你们提要求喵~",-1),s=(0,i._)("hr",null,null,-1),l={class:"content"},c=(0,i._)("button",{class:"route-switch"},"功能部分",-1),d=(0,i._)("button",{class:"route-switch"},"帮助文档",-1),f=(0,i._)("button",{class:"route-switch"},"Waifu购买系统",-1),h=(0,i._)("button",{class:"route-switch"},"Pixiv东方作品统计",-1),p={class:"luyou"},m=(0,i._)("footer",{class:"footer"},[(0,i._)("h4",null,[(0,i.Uk)(" 诡锋的B站： "),(0,i._)("a",{href:"https://space.bilibili.com/3342738",target:"_blank"},"前往诡锋的B站"),(0,i.Uk)(),(0,i._)("br"),(0,i.Uk)(" 诡锋的GitHub： "),(0,i._)("a",{href:"https://github.com/Vincent-the-gamer",target:"_blank"},"前往诡锋的GitHub")])],-1);function v(e,t,n,o,v,g){const b=(0,i.up)("router-link"),w=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",r,[a,u,s,(0,i._)("div",l,[(0,i.Wm)(b,{to:"functions"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(b,{to:"help"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(b,{to:"waifu"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(b,{to:"pixivr18chart"},{default:(0,i.w5)((()=>[h])),_:1}),(0,i._)("div",p,[(0,i.Wm)(w)])])]),m],64)}n(143);var g={name:"App",setup(){const e={haru1:{assetsPath:"live2d-widget-model-haru_1/assets",model:"haru01.model.json"},haru2:{assetsPath:"live2d-widget-model-haru_2/assets",model:"haru02.model.json"},hibiki:{assetsPath:"live2d-widget-model-hibiki/assets",model:"hibiki.model.json"},shizuku:{assetsPath:"live2d-widget-model-shizuku/assets",model:"shizuku.model.json"},miku:{assetsPath:"live2d-widget-model-miku/assets",model:"miku.model.json"}},t="/qqlive2d/",n=`${t}live2dw/`,o=`${t}live2dw/${e.haru2.assetsPath}/${e.haru2.model}`,i=()=>{let e=!1;return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|MQQBrowser)/i)&&(e=!0),e},r=i();r?setTimeout((()=>{L2Dwidget.init({pluginRootPath:n,pluginJSPath:"lib/",pluginModelPath:`${e.haru2.assetsPath}`,tagMode:!1,debug:!1,model:{jsonPath:o},display:{position:"right",width:180,height:480,offsetX:-20},react:{opacity:.5},mobile:{show:!0},dialog:{enable:!0,script:{"tap body":"不要碰人家啦！ (*╹▽╹*)","tap face":"人家不想写代码，人家只想打游戏嘛(╥╯^╰╥)"}}})}),1e3):setTimeout((()=>{L2Dwidget.init({pluginRootPath:n,pluginJSPath:"lib/",pluginModelPath:`${e.haru2.assetsPath}`,tagMode:!1,debug:!1,model:{jsonPath:o},display:{position:"left",width:300,height:600,offsetX:-20,offsetY:-20},react:{opacity:.6},mobile:{show:!0},dialog:{enable:!0,script:{"tap body":"不要碰人家啦！ (*╹▽╹*)","tap face":"人家不想写代码，人家只想打游戏嘛(╥╯^╰╥)"}}})}),1e3)}},b=n(89);const w=(0,b.Z)(g,[["render",v]]);var y=w,k=n(2483);const _=[{path:"/",redirect:"/functions"},{path:"/functions",component:()=>n.e(81).then(n.bind(n,8081))},{path:"/help",component:()=>n.e(634).then(n.bind(n,8634))},{path:"/waifu",component:()=>n.e(695).then(n.bind(n,9695))},{path:"/pixivr18chart",component:()=>n.e(365).then(n.bind(n,5365))}];var P=_;const j=(0,k.p7)({history:(0,k.r5)(),routes:P});var O=j;const C=(0,o.ri)(y);C.use(O),C.mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var u=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,r<a&&(a=r));if(u){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{81:"78524037",365:"c87efced",634:"08b3fdc8",695:"a6741667"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{81:"290b42b9",365:"091977d3",634:"5ad50245",695:"1fa9e4a6"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="qqlive2d:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var u,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=o),e[o]=[i];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/qqlive2d/"}(),function(){var e=function(e,t,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return i();e(o,u,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={81:1,365:1,634:1,695:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,i[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],u=o[1],s=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var c=s(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkqqlive2d"]=self["webpackChunkqqlive2d"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(37)}));o=n.O(o)})();