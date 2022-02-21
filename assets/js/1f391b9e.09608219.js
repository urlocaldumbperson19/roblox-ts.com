"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[85],{6416:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),l=n(6010),r=n(4161),s=n(3905),c=n(7440),i=n(1575),o=n(3810),u="mdxPageWrapper_eQvw";var m=function(e){var t=e.content,n=t.frontMatter,m=t.metadata,d=n.title,f=n.description,p=n.wrapperClassName,v=n.hide_table_of_contents,h=m.permalink;return a.createElement(r.Z,{title:d,description:f,permalink:h,wrapperClassName:null!=p?p:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",u)},a.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},a.createElement(s.Zo,{components:c.Z},a.createElement(t,null))),!v&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(i.Z,{toc:t.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},1575:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),l=n(3366),r=n(7294),s=n(6010),c=n(5002),i="tableOfContents_vrFS",o=["className"];var u=function(e){var t=e.className,n=(0,l.Z)(e,o);return r.createElement("div",{className:(0,s.Z)(i,"thin-scrollbar",t)},r.createElement(c.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7462),l=n(3366),r=n(7294),s=n(3810),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function i(e){var t=e.toc,n=e.className,a=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function o(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,c),g=(0,s.LU)(),k=null!=p?p:g.tableOfContents.minHeadingLevel,N=null!=v?v:g.tableOfContents.maxHeadingLevel,b=(0,s.DA)({toc:t,minHeadingLevel:k,maxHeadingLevel:N}),x=(0,r.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:k,maxHeadingLevel:N}}),[m,f,k,N]);return(0,s.Si)(x),r.createElement(i,(0,a.Z)({toc:b,className:o,linkClassName:m},h))}},9013:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7462),l=n(7294),r=n(6010),s=n(3746),c=n(195),i=n(7594),o=n.n(i),u=n(3229),m="codeBlockContent_X2I6",d="codeBlockTitle_PQMO",f="codeBlock_UxnK",p="codeBlockWithTitle_3DUw",v="codeButtons_kJ7+",h="codeButton_dv+f",g="codeBlockLines_W6UD",k=n(3810),N=n(4996),b=n(4877),x=new Set(["typescript","ts","typescriptreact","tsx"]),C=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},E=/(?:title=")(.*)(?:")/,y=function(e){var t=e.children,n=e.className,i=e.metastring,y=(0,k.LU)().prism,Z=(0,l.useState)(!1),j=Z[0],L=Z[1],w=(0,l.useState)(!1),H=w[0],B=w[1];(0,l.useEffect)((function(){B(!0)}),[]);var A=(0,l.useRef)(null),T=(0,l.useRef)(null),P=new Array,S="",U=(0,u.Z)(),M=Array.isArray(t)?t.join(""):t;if(i&&C.test(i)){var I=i.match(C)[1];P=o()(I).filter((function(e){return e>0}))}i&&E.test(i)&&(S=i.match(E)[1]);var O=n&&n.replace(/language-/,""),R="string"==typeof O&&x.has(O.toLowerCase());!O&&y.defaultLanguage&&(O=y.defaultLanguage);var W=M.replace(/\n$/,"");if(0===P.length&&void 0!==O){for(var D,F="",$=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(O),Q=M.replace(/\n$/,"").split("\n"),G=0;G<Q.length;){var J=G+1,K=Q[G].match($);if(null!==K){switch(K.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":F+=J+",";break;case"highlight-start":D=J;break;case"highlight-end":F+=D+"-"+(J-1)+","}Q.splice(G,1)}else G+=1}P=o()(F),W=Q.join("\n")}var X=function(){(0,c.Z)(W),L(!0),setTimeout((function(){return L(!1)}),2e3)},q=(0,N.Z)("playground/"),z=function(){return open(q+(0,b.T)(W))};return l.createElement(s.ZP,(0,a.Z)({},s.lG,{key:String(H),theme:U,code:W,language:O}),(function(e){var t,n=e.className,s=e.style,c=e.tokens,i=e.getLineProps,o=e.getTokenProps;return l.createElement(l.Fragment,null,S&&l.createElement("div",{style:s,className:d},S),l.createElement("div",{className:m},l.createElement("div",{tabIndex:0,className:(0,r.Z)(n,f,"thin-scrollbar",(t={},t[p]=S,t))},l.createElement("div",{className:g,style:s},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return P.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),l.createElement("div",(0,a.Z)({key:t},n),e.map((function(e,t){return l.createElement("span",(0,a.Z)({key:t},o({token:e,key:t})))})))})))),l.createElement("div",{className:v},l.createElement("button",{ref:A,type:"button","aria-label":"Copy code to clipboard",className:(0,r.Z)(h),onClick:X},j?"Copied":"Copy"),R&&l.createElement("button",{ref:T,type:"button","aria-label":"Compile code in playground",className:(0,r.Z)(h),onClick:z},"Compile"))))}))}},4877:function(e,t,n){n.d(t,{E:function(){return u},T:function(){return d}});var a=n(5861),l=n(7757),r=n.n(l),s=n(6961),c=n.n(s),i="#code/",o="#gist/";function u(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(r().mark((function e(t){var n,a,l,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith(i)){e.next=6;break}if(null===(n=c().decompressFromEncodedURIComponent(t.substr(i.length)))){e.next=4;break}return e.abrupt("return",n);case 4:e.next=16;break;case 6:if(!t.startsWith(o)){e.next=16;break}return a=t.substr(o.length),e.next=10,fetch("https://api.github.com/gists/"+a);case 10:if(200!==(l=e.sent).status){e.next=16;break}return e.next=14,l.json();case 14:return s=e.sent,e.abrupt("return",Object.values(s.files)[0].content);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return i+c().compressToEncodedURIComponent(e)}}}]);