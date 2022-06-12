"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[714],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"TypeScript Packages"},s=void 0,p={unversionedId:"guides/typescript-packages",id:"guides/typescript-packages",title:"TypeScript Packages",description:'To publish roblox-ts packages, you\'ll need to join the "@rbxts" npm organization. You can do that here.',source:"@site/docs/guides/typescript-packages.mdx",sourceDirName:"guides",slug:"/guides/typescript-packages",permalink:"/docs/guides/typescript-packages",draft:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/typescript-packages.mdx",tags:[],version:"current",frontMatter:{title:"TypeScript Packages"},sidebar:"docs",previous:{title:"Luau Packages",permalink:"/docs/guides/luau-packages"},next:{title:"TypeScript Transformers",permalink:"/docs/guides/typescript-transformers"}},c={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Testing Your Package",id:"testing-your-package",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'To publish roblox-ts packages, you\'ll need to join the "@rbxts" npm organization. ',(0,i.kt)("a",{parentName:"p",href:"../../join-org"},"You can do that here.")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Creating packages with roblox-ts is super easy!"),(0,i.kt)("p",null,"To start, just create an empty folder and run ",(0,i.kt)("inlineCode",{parentName:"p"},"rbxtsc init package")," inside of it. This will generate a project scaffolding for your package. You can author your ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," files inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", you can edit a few different fields to configure your package:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"name" - This ',(0,i.kt)("em",{parentName:"li"},"must")," begin with ",(0,i.kt)("inlineCode",{parentName:"li"},"@rbxts/")," to be considered a valid roblox-ts package."),(0,i.kt)("li",{parentName:"ul"},'"description"'),(0,i.kt)("li",{parentName:"ul"},'"main" - This should point to a ',(0,i.kt)("inlineCode",{parentName:"li"},".lua")," file in ",(0,i.kt)("inlineCode",{parentName:"li"},"out")," which represents your package's entrypoint."),(0,i.kt)("li",{parentName:"ul"},'"typings" - This should point to a ',(0,i.kt)("inlineCode",{parentName:"li"},".d.ts")," file in ",(0,i.kt)("inlineCode",{parentName:"li"},"out")," which represents your package's entrypoint."),(0,i.kt)("li",{parentName:"ul"},'"files" - An array of globs for what should be published to npm. Defaults to ',(0,i.kt)("inlineCode",{parentName:"li"},'["out"]'),". You don't explicitly have to specify special files like ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"readme.md")," here, as npm includes those by default."),(0,i.kt)("li",{parentName:"ul"},'"repository" - If your package\'s source is public on something like GitHub, you should include a link to it in this field.'),(0,i.kt)("li",{parentName:"ul"},'"homepage" - If your package has online documentation, you should include a link to it in this field.'),(0,i.kt)("li",{parentName:"ul"},'"author" - Your own name or username.'),(0,i.kt)("li",{parentName:"ul"},'"license" - The license of your package\'s code. This should be the ',(0,i.kt)("a",{parentName:"li",href:"https://spdx.org/licenses/"},"SPDX license identifier")," that corresponds to your ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," file.")),(0,i.kt)("h2",{id:"testing-your-package"},"Testing Your Package"),(0,i.kt)("p",null,"The simplest way to test your package is with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm pack"),". This command will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},".tgz")," file which can then be used from another project via ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install ../../path/to/package.tgz"),"."))}m.isMDXComponent=!0}}]);