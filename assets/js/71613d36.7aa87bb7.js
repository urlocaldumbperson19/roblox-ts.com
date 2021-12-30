"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3397:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=n(7294),i=n(3905),l=function(){return a.createElement("div",{style:{width:100,fontSize:"32px",marginTop:"-20px"}},a.createElement("center",null,"\u2b07\ufe0f"))},s=["components"],p={title:"Syncing with Rojo"},c=void 0,u={unversionedId:"guides/syncing-with-rojo",id:"guides/syncing-with-rojo",title:"Syncing with Rojo",description:"Introduction",source:"@site/docs/guides/syncing-with-rojo.mdx",sourceDirName:"guides",slug:"/guides/syncing-with-rojo",permalink:"/docs/guides/syncing-with-rojo",editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/syncing-with-rojo.mdx",tags:[],version:"current",frontMatter:{title:"Syncing with Rojo"},sidebar:"docs",previous:{title:"Utility Types",permalink:"/docs/api/utility-types"},next:{title:"Callbacks vs Methods",permalink:"/docs/guides/callbacks-vs-methods"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Customization",id:"customization",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The role of roblox-ts is to turn TypeScript (",(0,i.kt)("inlineCode",{parentName:"p"},".ts"),") files into Luau files (",(0,i.kt)("inlineCode",{parentName:"p"},".lua"),"). That alone isn't very useful! You need to move the files into Roblox Studio to be able to use them for a game, plugin, model, etc."),(0,i.kt)("p",null,"To do this, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://rojo.space/"},"Rojo"),"!"),(0,i.kt)("p",null,"Rojo takes files from your local filesystem and will either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"turn them into a single Roblox file (",(0,i.kt)("inlineCode",{parentName:"li"},".rbxm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".rbxl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".rbxmx"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},".rbxlx"),") via ",(0,i.kt)("inlineCode",{parentName:"li"},"rojo build")),(0,i.kt)("li",{parentName:"ul"},"sync them into an open Roblox Studio session via ",(0,i.kt)("inlineCode",{parentName:"li"},"rojo serve"))),(0,i.kt)("p",null,"Rojo uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"default.project.json")," file to describe how files should be organized within a Roblox file."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Heads up!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"default.project.json")," file should have all ",(0,i.kt)("inlineCode",{parentName:"p"},'"$path"')," fields relative to your ",(0,i.kt)("inlineCode",{parentName:"p"},"outDir")," (which is the ",(0,i.kt)("inlineCode",{parentName:"p"},'"out"')," folder by default)."))),(0,i.kt)("p",null,"The workflow should look like this:"),(0,i.kt)("div",{style:{fontSize:"20px"}},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".ts")," files in ",(0,i.kt)("inlineCode",{parentName:"p"},"src")),(0,i.kt)(l,{mdxType:"DownArrow"}),(0,i.kt)("p",null,"roblox-ts via ",(0,i.kt)("inlineCode",{parentName:"p"},"rbxtsc")),(0,i.kt)(l,{mdxType:"DownArrow"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".lua")," files in ",(0,i.kt)("inlineCode",{parentName:"p"},"out")),(0,i.kt)(l,{mdxType:"DownArrow"}),(0,i.kt)("p",null,"Rojo via ",(0,i.kt)("inlineCode",{parentName:"p"},"rojo build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"rojo serve")),(0,i.kt)(l,{mdxType:"DownArrow"}),(0,i.kt)("p",null,"Roblox Studio \ud83c\udf89")),(0,i.kt)("h2",{id:"customization"},"Customization"),(0,i.kt)("p",null,"Like any other Rojo project, you can organize a roblox-ts project however you'd like with a few restrictions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"include")," folder and ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," folder must be in a place that is visible to both the client and server"),(0,i.kt)("li",{parentName:"ul"},"All ",(0,i.kt)("inlineCode",{parentName:"li"},'"$path"')," fields should be relative to your ",(0,i.kt)("inlineCode",{parentName:"li"},"outDir")," (which is the ",(0,i.kt)("inlineCode",{parentName:"li"},'"out"')," folder by default)")),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"default.project.json")," file should look something like this (truncated):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "roblox-ts-game",\n    "tree": {\n        "$className": "DataModel",\n        "ServerScriptService": {\n            "$className": "ServerScriptService",\n            "TS": {\n                "$path": "out/server" // server folder goes in ServerScriptService.TS\n            }\n        },\n        "ReplicatedStorage": {\n            "$className": "ReplicatedStorage",\n            // this _must_ stay the same (except for the name)\n            "rbxts_include": {\n                "$path": "include",\n                "node_modules": {\n                    "$path": "node_modules/@rbxts"\n                }\n            },\n            "TS": {\n                "$path": "out/shared" // shared folder goes in ReplicatedStorage.TS\n            }\n        },\n        "StarterPlayer": {\n            "$className": "StarterPlayer",\n            "StarterPlayerScripts": {\n                "$className": "StarterPlayerScripts",\n                "TS": {\n                    "$path": "out/client" // client folder goes in StarterPlayer.StarterPlayerScripts.TS\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/roblox-ts/roblox-ts/blob/master/templates/game/default.project.json"},"You can find the full version here.")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Suppose you wanted to add scripts to ",(0,i.kt)("inlineCode",{parentName:"p"},"StarterPlayer.StarterCharacterScripts"),"."),(0,i.kt)("p",null,"To do this, we'll need to add a folder to ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," (so that when we compile it will have a matching folder in ",(0,i.kt)("inlineCode",{parentName:"p"},"out"),"). We'll call this ",(0,i.kt)("inlineCode",{parentName:"p"},"src/character"),"."),(0,i.kt)("p",null,"Then, we need to update our ",(0,i.kt)("inlineCode",{parentName:"p"},"default.project.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"StarterPlayer": {\n    "$className": "StarterPlayer",\n    "StarterPlayerScripts": {\n        "$className": "StarterPlayerScripts",\n        "TS": {\n            "$path": "out/client"\n        }\n    },\n    // highlight-start\n    "StarterCharacterScripts": {\n        "$className": "StarterCharacterScripts",\n        "TS": {\n            "$path": "out/character"\n        }\n    }\n    // highlight-end\n}\n')))}h.isMDXComponent=!0}}]);