!function(e){function t(t){for(var a,c,l=t[0],s=t[1],i=t[2],d=0,m=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={2:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=function(e){return c.p+"templates/"+({0:"__react_static_root__/src/pages/404",1:"__react_static_root__/src/pages/index"}[e]||e)+"."+{0:"3222cc06",1:"4794d652"}[e]+".js"}(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;o.push([53,3,4]),n()}({111:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return _}));var a=n(17),r=n.n(a),o=n(18),c=n.n(o),l=n(0),s=n.n(l),i=n(7),u=n.n(i);Object(i.setHasBabelPlugin)();var d={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},m=u()(c()({id:"__react_static_root__/src/pages/404.js",load:function(){return Promise.all([n.e(0).then(n.bind(null,51))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/404.js")},resolve:function(){return 51},chunkName:function(){return"__react_static_root__/src/pages/404"}}),d);m.template="__react_static_root__/src/pages/404.js";var p=u()(c()({id:"__react_static_root__/src/pages/index.js",load:function(){return Promise.all([n.e(1).then(n.bind(null,52))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/index.js")},resolve:function(){return 52},chunkName:function(){return"__react_static_root__/src/pages/index"}}),d);p.template="__react_static_root__/src/pages/index.js",t.default={"__react_static_root__/src/pages/404.js":m,"__react_static_root__/src/pages/index.js":p};var _="__react_static_root__/src/pages/404.js"}.call(this,"/")},113:function(e,t,n){var a={".":10,"./":10,"./index":10,"./index.js":10};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=113},121:function(e,t,n){"use strict";n.r(t),function(e){var a=n(0),r=n.n(a),o=n(23),c=n.n(o),l=n(50),s=n(19);if(t.default=s.a,"undefined"!=typeof document){var i=document.getElementById("root"),u=i.hasChildNodes()?c.a.hydrate:c.a.render,d=function(e){u(r.a.createElement(l.AppContainer,null,r.a.createElement(e,null)),i)};d(s.a),e&&e.hot&&e.hot.accept("./App",(function(){d(s.a)}))}}.call(this,n(122)(e))},19:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(11),c=n(16),l=function(){return r.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")},s=(n(126),function(){return r.a.createElement("div",{className:"relative bg-blue-900"},r.a.createElement("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"pr-16 sm:text-center sm:px-16"},r.a.createElement("p",{className:"font-medium text-white"},r.a.createElement("span",{className:"md:hidden"},"We are open under WA State Phase-II Guidelines. Accepting new students."),r.a.createElement("span",{className:"hidden md:inline"},"We are open following WA State's Phase-II Guidelines. Accepting new students.")))))}),i=function(){return r.a.createElement("footer",{class:"bg-white"},r.a.createElement("div",{class:"max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"},r.a.createElement("div",{class:"flex justify-center space-x-6 md:order-2"},r.a.createElement("a",{href:"https://www.facebook.com/renzogracieseattle",class:"text-gray-400 hover:text-gray-500"},r.a.createElement("span",{class:"sr-only"},"Facebook"),r.a.createElement("svg",{class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"}))),r.a.createElement("a",{href:"https://www.instagram.com/renzogracieseattle/",class:"text-gray-400 hover:text-gray-500"},r.a.createElement("span",{class:"sr-only"},"Instagram"),r.a.createElement("svg",{class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})))),r.a.createElement("div",{class:"mt-8 md:mt-0 md:order-1"},r.a.createElement("p",{class:"text-center text-base text-gray-400"},"© 2021 Renzo Gracie Seattle. All rights reserved.")),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",null,"📍"),r.a.createElement("div",{className:"font-blue-900"},"4441 26th Ave W ",r.a.createElement("br",null),"Seattle, WA 98199"))))},u=n(49),d=n.n(u);Object(o.addPrefetchExcludes)(["dynamic"]);t.a=function(){return r.a.createElement(o.Root,null,r.a.createElement("div",{className:"content"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{className:"flex flex-1 flex-col h-screen justify-center items-center"},r.a.createElement("img",{src:d.a,className:"h-48 w-auto animate-pulse"}),r.a.createElement("div",{className:"text-blue-800 mt-3 font-bold uppercase"},"Loading..."))},r.a.createElement(s,null),r.a.createElement(c.Router,null,r.a.createElement(l,{path:"dynamic"}),r.a.createElement(o.Routes,{path:"*"})),r.a.createElement(i,null))))}},49:function(e,t,n){e.exports=n.p+"static/logo-no-words.4ba13ebe.png"},53:function(e,t,n){n(54),n(110),e.exports=n(118)},55:function(e,t,n){"use strict";n.r(t);var a=n(47),r=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(a)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-tailwindcss",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];t.default=r}});