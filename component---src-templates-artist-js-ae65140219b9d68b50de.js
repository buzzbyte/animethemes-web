(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6buQ":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t("nKUr"),r=t("Wbzz"),c=t("IgWi"),a=t("ISyE"),s=t("gSOQ"),o=t("VtrM"),d=t("brmo");var l=t("5Vy0");function u(e){var n,t=e.theme,u=(n=t.anime.slug,Object(o.a)(d.baseUrl+"/api/anime/"+n,(function(e){return fetch(e).then((function(e){return e.json()}))})).data),m=Object(c.a)(u).image;return t.entries[0]&&t.entries[0].videos[0]?Object(i.jsx)(a.a,{title:Object(i.jsx)(s.a,{song:t.song}),description:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("span",{children:["Theme • ",t.slug," • "]}),Object(i.jsx)(r.Link,{to:"/anime/"+t.anime.slug,children:Object(i.jsx)(l.a,{link:!0,children:t.anime.name})})]}),image:m,to:"/video/"+t.entries[0].videos[0].filename}):null}},"8cnv":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("vOnD")),a=c.d.div.withConfig({displayName:"sidebar__StyledContainerSidebar",componentId:"rijfqh-0"})(["display:flex;flex-direction:row;@media (max-width:720px){flex-direction:column;}"]),s=c.d.div.withConfig({displayName:"sidebar__StyledSidebar",componentId:"rijfqh-1"})(["flex:1;@media (min-width:721px){margin-right:2rem;}@media (max-width:720px){margin-bottom:1.5rem;}"]),o=c.d.div.withConfig({displayName:"sidebar__StyledBody",componentId:"rijfqh-2"})(["flex:3;"]);function d(e){var n=e.sidebar,t=e.children,c=Object(i.a)(e,["sidebar","children"]);return Object(r.jsxs)(a,Object.assign({},c,{children:[Object(r.jsx)(s,{children:n}),Object(r.jsx)(o,{children:t})]}))}},BlTZ:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x})),t.d(n,"query",(function(){return O}));var i=t("nKUr"),r=(t("q1tI"),t("Wbzz")),c=t("vOnD"),a=t("xQ4I"),s=t("z+Lz"),o=t("R+we"),d=t("5Vy0"),l=t("B8aR"),u=t("L+1Y"),m=t("8cnv"),j=t("89ka"),f=t("6buQ"),h=t("jNNy"),b=c.d.div.withConfig({displayName:"artist__StyledArtistPage",componentId:"mgtcdw-0"})(["",""],Object(j.b)("1.5rem")),p=c.d.img.withConfig({displayName:"artist__StyledCover",componentId:"mgtcdw-1"})(j.a),g=c.d.div.withConfig({displayName:"artist__StyledList",componentId:"mgtcdw-2"})(["display:flex;flex-direction:column;"," text-align:center;"],Object(j.b)("0.5rem"));function x(e){var n=e.data.artist,t=Object(a.a)(n).image,c=n.performances.sort((function(e,n){return e.song.theme.anime.name.localeCompare(n.song.theme.anime.name)})),j=Object(i.jsxs)(u.b,{gapsColumn:"1.5rem",children:[Object(i.jsx)(p,{src:t,alt:"Cover"}),Object(i.jsx)(o.a,{children:{Members:!!n.members&&!!n.members.length&&Object(i.jsx)(g,{children:n.members.map((function(e){return Object(i.jsx)(r.Link,{to:"/artist/"+e.slug,children:Object(i.jsx)(d.a,{link:!0,children:e.name})})}))}),"Member of":!!n.groups&&!!n.groups.length&&Object(i.jsx)(g,{children:n.groups.map((function(e){return Object(i.jsx)(r.Link,{to:"/artist/"+e.slug,children:Object(i.jsx)(d.a,{link:!0,children:e.name})})}))}),Links:n.resources.map((function(e){return Object(i.jsx)(s.a,{href:e.link,children:e.site},e.link)}))}})]});return Object(i.jsxs)(b,{children:[Object(i.jsx)(h.a,{title:n.name}),Object(i.jsx)(l.a,{children:n.name}),Object(i.jsx)(m.a,{sidebar:j,children:Object(i.jsxs)(u.b,{gapsColumn:"1rem",children:[Object(i.jsx)(l.a,{variant:"section",children:"Song Perfomances"}),c.map((function(e){return Object(i.jsx)(f.a,{theme:Object.assign({},e.song.theme,{song:e.song})})}))]})})]})}var O="947421187"},ISyE:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("Wbzz")),a=t("5Vy0"),s=t("B8aR"),o=t("vOnD"),d=t("4Fil"),l=t("89ka"),u=Object(o.d)(d.a).withConfig({displayName:"searchResult__StyledSearchResultCard",componentId:"gogu5j-0"})(["display:flex;flex-direction:row;align-items:center;padding:0 1rem 0 0;"]),m=o.d.img.withConfig({displayName:"searchResult__StyledCover",componentId:"gogu5j-1"})(["width:48px;height:64px;object-fit:cover;"]),j=o.d.div.withConfig({displayName:"searchResult__StyledBody",componentId:"gogu5j-2"})(["flex:1;display:flex;flex-direction:column;justify-content:center;","   padding:0 1rem;"],Object(l.b)("0.25rem")),f=o.d.div.withConfig({displayName:"searchResult__StyledChildren",componentId:"gogu5j-3"})(["@media (max-width:720px){display:none;}"]);function h(e){var n=e.title,t=e.description,o=e.image,d=e.to,l=e.children,h=Object(i.a)(e,["title","description","image","to","children"]),b=Object(r.jsxs)(u,Object.assign({},h,{children:[Object(r.jsx)(m,{alt:"Cover",src:o}),Object(r.jsxs)(j,{children:[Object(r.jsx)(s.a,{variant:"card",maxLines:2,children:n}),Object(r.jsx)(a.a,{small:!0,maxLines:1,children:t})]}),Object(r.jsx)(f,{children:l})]}));return d?Object(r.jsx)(c.Link,{to:d,children:b}):b}},QVVT:function(e,n){var t=new Map;e.exports=function(e,n){return t.has(e)||t.set(e,n(e)),t.get(e)}},"R+we":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("B8aR")),a=t("vOnD"),s=a.d.dl.withConfig({displayName:"descriptionList__StyledDescriptionList",componentId:"pvmx3s-0"})(["display:flex;flex-direction:column;align-items:center;margin:0;"]),o=a.d.dt.withConfig({displayName:"descriptionList__StyledKey",componentId:"pvmx3s-1"})(["margin:0 0 0.25rem 0;"]),d=a.d.dd.withConfig({displayName:"descriptionList__StyledValue",componentId:"pvmx3s-2"})(["margin:0;&:not(:last-child){margin-bottom:1.5rem;}"]);function l(e){var n=e.children,t=Object(i.a)(e,["children"]);return Object(r.jsx)(s,Object.assign({},t,{children:Object.entries(n).map((function(e){var n=e[0],t=e[1];return!!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{children:Object(r.jsx)(c.a,{variant:"section",children:n})}),Object(r.jsx)(d,{children:t})]})}))}))}},brmo:function(e,n,t){var i=t("o0o1");t("ls82");var r=t("yXPU"),c=t("oY9k"),a=t("QVVT"),s={}.GATSBY_API_URL||"https://animethemes.dev";function o(){return(o=r(i.mark((function e(n,t){return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=5;break;case 5:return e.next=7,a(n,(function(e){return c(e,t).then((function(e){return e.json()}))}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.exports={baseUrl:s,fetchJsonCached:function(e,n){return o.apply(this,arguments)},createFieldParams:function(e){return Object.entries(e).map((function(e){return"fields["+e[0]+"]="+e[1].join()})).join("&")}}},gSOQ:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("nKUr"),r=t("5Vy0"),c=t("Wbzz");function a(e){var n=e.song;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:n.title}),!!n.performances&&!!n.performances.length&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{small:!0,children:" by "}),n.performances.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.Link,{to:"/artist/"+e.artist.slug,children:Object(i.jsx)(r.a,{link:!0,children:e.as||e.artist.name},e.as||e.artist.name)}),t<n.performances.length-1&&Object(i.jsx)(r.a,{small:!0,children:t===n.performances.length-2?" & ":", "})]})}))]})]})}},oY9k:function(e,n,t){"use strict";var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("unable to locate global object")}();e.exports=n=i.fetch,i.fetch&&(n.default=i.fetch.bind(i)),n.Headers=i.Headers,n.Request=i.Request,n.Response=i.Response},xQ4I:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t("7L65"),r=t("q1tI");function c(e){var n=Object(r.useState)(null),t=n[0],c=n[1];return Object(r.useEffect)((function(){var n=!1;return Object(i.a)(e.name).then((function(e){n||c(e.image)})),function(){n=!0}}),[e]),{image:t}}},yXPU:function(e,n){function t(e,n,t,i,r,c,a){try{var s=e[c](a),o=s.value}catch(d){return void t(d)}s.done?n(o):Promise.resolve(o).then(i,r)}e.exports=function(e){return function(){var n=this,i=arguments;return new Promise((function(r,c){var a=e.apply(n,i);function s(e){t(a,r,c,s,o,"next",e)}function o(e){t(a,r,c,s,o,"throw",e)}s(void 0)}))}}},"z+Lz":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("vOnD")),a=t("IP2g"),s=t("wHSu"),o=t("5Vy0"),d=t("89ka"),l=Object(c.d)(o.a).attrs({forwardedAs:"a",link:!0}).withConfig({displayName:"externalLink__StyledExternalLink",componentId:"sc-1iypvd7-0"})(["",""],Object(d.c)("0.25rem"));function u(e){var n=e.href,t=e.children,c=Object(i.a)(e,["href","children"]);return Object(r.jsxs)(l,Object.assign({href:n,target:"_blank"},c,{children:[Object(r.jsx)("span",{children:t}),Object(r.jsx)(a.a,{icon:s.c})]}))}}}]);
//# sourceMappingURL=component---src-templates-artist-js-ae65140219b9d68b50de.js.map