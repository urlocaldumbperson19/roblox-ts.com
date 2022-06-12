"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[918],{2159:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});var n=a(7294),r=a(6010),l=a(1944),s=a(7524),c=a(5281),i=a(7462),o=a(5999),d=a(9960);function m(e){var t=e.permalink,a=e.title,l=e.subLabel,s=e.isNext;return n.createElement(d.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function u(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(m,(0,i.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(m,(0,i.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var p=a(2263),v=a(143),h=a(373),b=a(4477);var g={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){var t=g[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function k(e){var t,a=e.className,l=e.versionMetadata,s=(0,p.Z)().siteConfig.title,i=(0,v.gA)({failfast:!0}).pluginId,o=(0,h.J)(i).savePreferredVersionName,d=(0,v.Jo)(i),m=d.latestDocSuggestion,u=d.latestVersionSuggestion,b=null!=m?m:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(E,{siteTitle:s,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:u.label,to:b.path,onClick:function(){return o(u.name)}})))}function Z(e){var t=e.className,a=(0,b.E)();return a.banner?n.createElement(k,{className:t,versionMetadata:a}):null}function N(e){var t=e.className,a=(0,b.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function L(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function y(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(_,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(L,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var x=a(3366),T="iconEdit_eYIM",U=["className"];function C(e){var t=e.className,a=(0,x.Z)(e,U);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(T,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},n.createElement(C,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var B="tag_zVej",A="tagRegular_sFm0",j="tagWithCount_h2kH";function I(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(d.Z,{href:t,className:(0,r.Z)(B,l?j:A)},a,l&&n.createElement("span",null,l))}var M="tags_jXut",P="tag_QGVx";function V(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(M,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:P},n.createElement(I,{label:t,permalink:a}))}))))}var H="lastUpdated_vbeJ";function S(e){return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(V,e)))}function R(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(w,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",H)},(a||l)&&n.createElement(y,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:l})))}function D(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||l||i);return d||m?n.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(S,{tags:o}),m&&n.createElement(R,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var F=a(9407),O=a(6043),z=a(3743),G="tocCollapsibleButton_TO0P",W="tocCollapsibleButtonExpanded_MG3E",q=["collapsed"];function J(e){var t=e.collapsed,a=(0,x.Z)(e,q);return n.createElement("button",(0,i.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",G,!t&&W,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var $="tocCollapsible_ETCw",Q="tocCollapsibleContent_vkbj",Y="tocCollapsibleExpanded_sAul";function X(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,O.u)({initialState:!0}),i=c.collapsed,o=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)($,!i&&Y,a)},n.createElement(J,{collapsed:i,onClick:o}),n.createElement(O.z,{lazy:!0,className:Q,collapsed:i},n.createElement(z.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:s})))}var K=a(2503),ee=a(3438),te=a(8596),ae=a(4996);function ne(e){return n.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function le(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(d.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function se(e){var t=e.children,a=e.active,l=e.index,s=e.addMicrodata;return n.createElement("li",(0,i.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){var e=(0,ae.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",re.breadcrumbsItemLink),href:e},n.createElement(ne,{className:re.breadcrumbHomeIcon})))}function ie(){var e=(0,ee.s1)(),t=(0,te.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ce,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(se,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(le,{href:t.href,isLast:r},t.label))})))):null}var oe=a(76),de="docItemContainer_Adtb",me="docItemCol_GujU",ue="tocMobile_aoJ5";function pe(e){var t,a=e.content,r=a.metadata,s=a.frontMatter,c=a.assets,i=s.keywords,o=r.description,d=r.title,m=null!=(t=c.image)?t:s.image;return n.createElement(l.d,{title:d,description:o,keywords:i,image:m})}function ve(e){var t=e.content,a=t.metadata,l=t.frontMatter,i=l.hide_title,o=l.hide_table_of_contents,d=l.toc_min_heading_level,m=l.toc_max_heading_level,p=a.title,v=!i&&void 0===t.contentTitle,h=(0,s.i)(),b=!o&&t.toc&&t.toc.length>0,g=b&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!o&&me)},n.createElement(Z,null),n.createElement("div",{className:de},n.createElement("article",null,n.createElement(ie,null),n.createElement(N,null),b&&n.createElement(X,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:(0,r.Z)(c.k.docs.docTocMobile,ue)}),n.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},v&&n.createElement("header",null,n.createElement(K.Z,{as:"h1"},p)),n.createElement(oe.Z,null,n.createElement(t,null))),n.createElement(D,e)),n.createElement(u,{previous:a.previous,next:a.next}))),g&&n.createElement("div",{className:"col col--3"},n.createElement(F.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:c.k.docs.docTocDesktop})))}function he(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(l.FG,{className:t},n.createElement(pe,e),n.createElement(ve,e))}},4477:function(e,t,a){a.d(t,{E:function(){return c},q:function(){return s}});var n=a(7294),r=a(4475),l=n.createContext(null);function s(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function c(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},9013:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7462),r=a(7294),l=a(6010),s=a(3746),c=a(195),i=a(7594),o=a.n(i),d=a(6412),m="codeBlockContent_vqWU",u="codeBlockTitle_B2tn",p="codeBlock_wPnj",v="codeBlockWithTitle_hA62",h="codeButtons_E6eU",b="codeButton_LgA1",g="codeBlockLines_fQUY",E=a(6668),f=a(4996),k=a(4877),Z=new Set(["typescript","ts","typescriptreact","tsx"]),N=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},L=/(?:title=")(.*)(?:")/,y=function(e){var t=e.children,a=e.className,i=e.metastring,y=(0,E.L)().prism,x=(0,r.useState)(!1),T=x[0],U=x[1],C=(0,r.useState)(!1),w=C[0],B=C[1];(0,r.useEffect)((function(){B(!0)}),[]);var A=(0,r.useRef)(null),j=(0,r.useRef)(null),I=new Array,M="",P=(0,d.p)(),V=Array.isArray(t)?t.join(""):t;if(i&&N.test(i)){var H=i.match(N)[1];I=o()(H).filter((function(e){return e>0}))}i&&L.test(i)&&(M=i.match(L)[1]);var S=a&&a.replace(/language-/,""),R="string"==typeof S&&Z.has(S.toLowerCase());!S&&y.defaultLanguage&&(S=y.defaultLanguage);var D=V.replace(/\n$/,"");if(0===I.length&&void 0!==S){for(var F,O="",z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(S),G=V.replace(/\n$/,"").split("\n"),W=0;W<G.length;){var q=W+1,J=G[W].match(z);if(null!==J){switch(J.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":O+=q+",";break;case"highlight-start":F=q;break;case"highlight-end":O+=F+"-"+(q-1)+","}G.splice(W,1)}else W+=1}I=o()(O),D=G.join("\n")}var $=function(){(0,c.Z)(D),U(!0),setTimeout((function(){return U(!1)}),2e3)},Q=(0,f.Z)("playground/"),Y=function(){return open(Q+(0,k.T)(D))};return r.createElement(s.ZP,(0,n.Z)({},s.lG,{key:String(w),theme:P,code:D,language:S}),(function(e){var t,a=e.className,s=e.style,c=e.tokens,i=e.getLineProps,o=e.getTokenProps;return r.createElement(r.Fragment,null,M&&r.createElement("div",{style:s,className:u},M),r.createElement("div",{className:m},r.createElement("div",{tabIndex:0,className:(0,l.Z)(a,p,"thin-scrollbar",(t={},t[v]=M,t))},r.createElement("div",{className:g,style:s},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return I.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,n.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},o({token:e,key:t})))})))})))),r.createElement("div",{className:h},r.createElement("button",{ref:A,type:"button","aria-label":"Copy code to clipboard",className:(0,l.Z)(b),onClick:$},T?"Copied":"Copy"),R&&r.createElement("button",{ref:j,type:"button","aria-label":"Compile code in playground",className:(0,l.Z)(b),onClick:Y},"Compile"))))}))}},4877:function(e,t,a){a.d(t,{E:function(){return o},T:function(){return m}});var n=a(4165),r=a(5861),l=a(6961),s=a.n(l),c="#code/",i="#gist/";function o(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((0,n.Z)().mark((function e(t){var a,r,l,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith(c)){e.next=6;break}if(null===(a=s().decompressFromEncodedURIComponent(t.substr(c.length)))){e.next=4;break}return e.abrupt("return",a);case 4:e.next=16;break;case 6:if(!t.startsWith(i)){e.next=16;break}return r=t.substr(i.length),e.next=10,fetch("https://api.github.com/gists/"+r);case 10:if(200!==(l=e.sent).status){e.next=16;break}return e.next=14,l.json();case 14:return o=e.sent,e.abrupt("return",Object.values(o.files)[0].content);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return c+s().compressToEncodedURIComponent(e)}}}]);