(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8RNP":function(e,i,n){"use strict";n.r(i),n.d(i,"default",(function(){return g})),n.d(i,"query",(function(){return x}));var t=n("nKUr"),r=n("B8aR"),a=n("L+1Y"),c=(n("q1tI"),n("8cnv")),d=n("vOnD"),s=n("89ka"),o=n("aEzc"),l=n("jNNy"),h=n("IgWi"),j=d.d.div.withConfig({displayName:"series__StyledSeriesPage",componentId:"si8poh-0"})(["",""],Object(s.b)("1.5rem")),m=d.d.div.withConfig({displayName:"series__StyledCoverContainer",componentId:"si8poh-1"})(["         position:relative;width:100%;padding-top:150%;"]),p=d.d.div.withConfig({displayName:"series__StyledCoverContainerFlex",componentId:"si8poh-2"})(["display:flex;flex-direction:row;position:absolute;top:0;left:0;width:100%;height:100%;"]),u=d.d.div.withConfig({displayName:"series__StyledCoverItemContainer",componentId:"si8poh-3"})(["flex:1;width:100%;height:100%;"]),b=d.d.img.withConfig({displayName:"series__StyledCover",componentId:"si8poh-4"})(["width:100%;height:100%;object-fit:cover;"]);function g(e){var i=e.data.series,n=[Object(h.a)(i.anime[0]),Object(h.a)(i.anime[1]),Object(h.a)(i.anime[2]),Object(h.a)(i.anime[3])].map((function(e){return e.image})).filter((function(e){return!!e})),d=Object(t.jsx)(a.b,{gapsColumn:"1.5rem",children:Object(t.jsx)(m,{children:Object(t.jsx)(p,{children:n.map((function(e){return Object(t.jsx)(u,{children:Object(t.jsx)(b,{src:e})})}))})})});return Object(t.jsxs)(j,{children:[Object(t.jsx)(l.a,{title:i.name}),Object(t.jsx)(r.a,{children:i.name}),Object(t.jsx)(c.a,{sidebar:d,children:Object(t.jsxs)(a.b,{gapsColumn:"1rem",children:[Object(t.jsx)(r.a,{variant:"section",children:"Anime"}),i.anime.map((function(e){return Object(t.jsx)(o.a,{anime:e})}))]})})]})}var x="3564845754"},"8cnv":function(e,i,n){"use strict";n.d(i,"a",(function(){return o}));var t=n("zLVn"),r=n("nKUr"),a=(n("q1tI"),n("vOnD")),c=a.d.div.withConfig({displayName:"sidebar__StyledContainerSidebar",componentId:"rijfqh-0"})(["display:flex;flex-direction:row;@media (max-width:720px){flex-direction:column;}"]),d=a.d.div.withConfig({displayName:"sidebar__StyledSidebar",componentId:"rijfqh-1"})(["flex:1;@media (min-width:721px){margin-right:2rem;}@media (max-width:720px){margin-bottom:1.5rem;}"]),s=a.d.div.withConfig({displayName:"sidebar__StyledBody",componentId:"rijfqh-2"})(["flex:3;"]);function o(e){var i=e.sidebar,n=e.children,a=Object(t.a)(e,["sidebar","children"]);return Object(r.jsxs)(c,Object.assign({},a,{children:[Object(r.jsx)(d,{children:i}),Object(r.jsx)(s,{children:n})]}))}},ISyE:function(e,i,n){"use strict";n.d(i,"a",(function(){return u}));var t=n("zLVn"),r=n("nKUr"),a=(n("q1tI"),n("Wbzz")),c=n("5Vy0"),d=n("B8aR"),s=n("vOnD"),o=n("4Fil"),l=n("89ka"),h=Object(s.d)(o.a).withConfig({displayName:"searchResult__StyledSearchResultCard",componentId:"gogu5j-0"})(["display:flex;flex-direction:row;align-items:center;padding:0 1rem 0 0;"]),j=s.d.img.withConfig({displayName:"searchResult__StyledCover",componentId:"gogu5j-1"})(["width:48px;height:64px;object-fit:cover;"]),m=s.d.div.withConfig({displayName:"searchResult__StyledBody",componentId:"gogu5j-2"})(["flex:1;display:flex;flex-direction:column;justify-content:center;","   padding:0 1rem;"],Object(l.b)("0.25rem")),p=s.d.div.withConfig({displayName:"searchResult__StyledChildren",componentId:"gogu5j-3"})(["@media (max-width:720px){display:none;}"]);function u(e){var i=e.title,n=e.description,s=e.image,o=e.to,l=e.children,u=Object(t.a)(e,["title","description","image","to","children"]),b=Object(r.jsxs)(h,Object.assign({},u,{children:[Object(r.jsx)(j,{alt:"Cover",src:s}),Object(r.jsxs)(m,{children:[Object(r.jsx)(d.a,{variant:"card",maxLines:2,children:i}),Object(r.jsx)(c.a,{small:!0,maxLines:1,children:n})]}),Object(r.jsx)(p,{children:l})]}));return o?Object(r.jsx)(a.Link,{to:o,children:b}):b}},aEzc:function(e,i,n){"use strict";n.d(i,"a",(function(){return p}));var t=n("nKUr"),r=n("Wbzz"),a=n("IP2g"),c=n("wHSu"),d=n("FT44"),s=n("L+1Y"),o=n("5Vy0"),l=n("IgWi"),h=n("ISyE"),j=n("m/zQ"),m=n("aXge");function p(e){var i=e.anime,n=e.hideThemes,p=void 0!==n&&n,u=Object(l.a)(i).image,b=i.year,g="/year/"+i.year;i.season&&(b=i.season+" "+b,g+="/"+i.season.toLowerCase());var x=Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{children:"Anime"}),!!b&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{children:" • "}),Object(t.jsx)(r.Link,{to:g,children:Object(t.jsx)(o.a,{link:!0,children:b})})]}),Object(t.jsxs)("span",{children:[" • ",i.themes.length," themes"]})]});return Object(t.jsx)(h.a,{title:i.name,description:x,image:u,to:"/anime/"+i.slug,children:!p&&Object(t.jsx)(j.a,{children:Object(t.jsxs)(s.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[i.themes.slice(0,4).filter((function(e){return e.entries.length&&e.entries[0].videos.length})).map((function(e){return Object(t.jsx)(m.a,{to:"/video/"+e.entries[0].videos[0].filename,children:Object(t.jsx)(o.a,{small:!0,block:!0,children:e.slug})},e.id)})),i.themes.length>4&&Object(t.jsx)(d.a,{icon:!0,title:"Show all themes",children:Object(t.jsx)(a.a,{icon:c.j,fixedWidth:!0})})]})})})}},aXge:function(e,i,n){"use strict";n.d(i,"a",(function(){return j}));var t=n("zLVn"),r=n("nKUr"),a=(n("q1tI"),n("vOnD")),c=n("IP2g"),d=n("wHSu"),s=n("FT44"),o=Object(a.d)(s.a).withConfig({displayName:"play__StyledButtonPlay",componentId:"sc-1xaulno-0"})(["display:flex;flex-direction:row;align-items:center;margin-left:1rem;padding:0 0.5rem 0 0;"]),l=a.d.div.withConfig({displayName:"play__StyledPrefix",componentId:"sc-1xaulno-1"})(["display:inline-flex;justify-content:center;align-items:center;width:2rem;height:2rem;margin-left:-1rem;border-radius:1rem;background-color:",";color:",";"],(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.colors.primaryBackground[0]})),h=a.d.div.withConfig({displayName:"play__StyledBody",componentId:"sc-1xaulno-2"})(["padding:0.5rem;"]);function j(e){var i=e.children,n=e.playing,a=Object(t.a)(e,["children","playing"]);return Object(r.jsxs)(o,Object.assign({},a,{children:[Object(r.jsx)(l,{children:Object(r.jsx)(c.a,{icon:n?d.e:d.u,spin:n,fixedWidth:!0})}),Object(r.jsx)(h,{children:i})]}))}}}]);
//# sourceMappingURL=component---src-templates-series-js-e99bd215fb0f0117708f.js.map