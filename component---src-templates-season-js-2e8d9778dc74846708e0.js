(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8VZ4":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("vOnD")),s=t("CRzS"),a=t("89ka"),d=c.d.div.withConfig({displayName:"switcher__StyledSwitcher",componentId:"sc-7tfmzq-0"})(["display:flex;flex-direction:row;background-color:",";border-radius:1rem;",""],s.a,Object(a.c)("0.5rem"));function o(e){var n=e.children,t=Object(i.a)(e,["children"]);return Object(r.jsx)(d,Object.assign({},t,{children:n}))}},ISyE:function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("Wbzz")),s=t("5Vy0"),a=t("B8aR"),d=t("vOnD"),o=t("4Fil"),l=t("89ka"),j=Object(d.d)(o.a).withConfig({displayName:"searchResult__StyledSearchResultCard",componentId:"gogu5j-0"})(["display:flex;flex-direction:row;align-items:center;padding:0 1rem 0 0;"]),m=d.d.img.withConfig({displayName:"searchResult__StyledCover",componentId:"gogu5j-1"})(["width:48px;height:64px;object-fit:cover;"]),h=d.d.div.withConfig({displayName:"searchResult__StyledBody",componentId:"gogu5j-2"})(["flex:1;display:flex;flex-direction:column;justify-content:center;","   padding:0 1rem;"],Object(l.b)("0.25rem")),u=d.d.div.withConfig({displayName:"searchResult__StyledChildren",componentId:"gogu5j-3"})(["@media (max-width:720px){display:none;}"]);function x(e){var n=e.title,t=e.description,d=e.image,o=e.to,l=e.children,x=Object(i.a)(e,["title","description","image","to","children"]),b=Object(r.jsxs)(j,Object.assign({},x,{children:[Object(r.jsx)(m,{alt:"Cover",src:d}),Object(r.jsxs)(h,{children:[Object(r.jsx)(a.a,{variant:"card",maxLines:2,children:n}),Object(r.jsx)(s.a,{small:!0,maxLines:1,children:t})]}),Object(r.jsx)(u,{children:l})]}));return o?Object(r.jsx)(c.Link,{to:o,children:b}):b}},aEzc:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t("nKUr"),r=t("Wbzz"),c=t("IP2g"),s=t("wHSu"),a=t("FT44"),d=t("L+1Y"),o=t("5Vy0"),l=t("IgWi"),j=t("ISyE"),m=t("m/zQ"),h=t("aXge");function u(e){var n=e.anime,t=e.hideThemes,u=void 0!==t&&t,x=Object(l.a)(n).image,b=n.year,f="/year/"+n.year;n.season&&(b=n.season+" "+b,f+="/"+n.season.toLowerCase());var O=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:"Anime"}),!!b&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:" • "}),Object(i.jsx)(r.Link,{to:f,children:Object(i.jsx)(o.a,{link:!0,children:b})})]}),Object(i.jsxs)("span",{children:[" • ",n.themes.length," themes"]})]});return Object(i.jsx)(j.a,{title:n.name,description:O,image:x,to:"/anime/"+n.slug,children:!u&&Object(i.jsx)(m.a,{children:Object(i.jsxs)(d.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[n.themes.slice(0,4).filter((function(e){return e.entries.length&&e.entries[0].videos.length})).map((function(e){return Object(i.jsx)(h.a,{to:"/video/"+e.entries[0].videos[0].filename,children:Object(i.jsx)(o.a,{small:!0,block:!0,children:e.slug})},e.id)})),n.themes.length>4&&Object(i.jsx)(a.a,{icon:!0,title:"Show all themes",children:Object(i.jsx)(c.a,{icon:s.j,fixedWidth:!0})})]})})})}},aXge:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("vOnD")),s=t("IP2g"),a=t("wHSu"),d=t("FT44"),o=Object(c.d)(d.a).withConfig({displayName:"play__StyledButtonPlay",componentId:"sc-1xaulno-0"})(["display:flex;flex-direction:row;align-items:center;margin-left:1rem;padding:0 0.5rem 0 0;"]),l=c.d.div.withConfig({displayName:"play__StyledPrefix",componentId:"sc-1xaulno-1"})(["display:inline-flex;justify-content:center;align-items:center;width:2rem;height:2rem;margin-left:-1rem;border-radius:1rem;background-color:",";color:",";"],(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.colors.primaryBackground[0]})),j=c.d.div.withConfig({displayName:"play__StyledBody",componentId:"sc-1xaulno-2"})(["padding:0.5rem;"]);function m(e){var n=e.children,t=e.playing,c=Object(i.a)(e,["children","playing"]);return Object(r.jsxs)(o,Object.assign({},c,{children:[Object(r.jsx)(l,{children:Object(r.jsx)(s.a,{icon:t?a.e:a.u,spin:t,fixedWidth:!0})}),Object(r.jsx)(j,{children:n})]}))}},ptqJ:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g})),t.d(n,"query",(function(){return w}));var i=t("nKUr"),r=(t("q1tI"),t("Wbzz")),c=t("vOnD"),s=t("aEzc"),a=t("B8aR"),d=t("89ka"),o=t("FT44"),l=t("L+1Y"),j=t("8VZ4"),m=t("IP2g"),h=t("wHSu"),u=c.d.div.withConfig({displayName:"season__StyledPage",componentId:"sc-176dksm-0"})(["",""],Object(d.b)()),x=c.d.div.withConfig({displayName:"season__StyledYearContainer",componentId:"sc-176dksm-1"})(["display:flex;flex-direction:row;align-items:center;"]),b=c.d.div.withConfig({displayName:"season__StyledYear",componentId:"sc-176dksm-2"})(["flex:1;display:flex;margin:0 1rem;"]),f=Object(c.d)(b).withConfig({displayName:"season__StyledYearPrevious",componentId:"sc-176dksm-3"})(["justify-content:flex-end;"]),O=Object(c.d)(b).withConfig({displayName:"season__StyledYearNext",componentId:"sc-176dksm-4"})(["justify-content:flex-start;"]);function g(e){var n=e.data.allAnime,t=e.pageContext,c=t.year,s=t.season,d=t.yearList,m=t.seasonList,h=d.indexOf(c)>0?d[d.indexOf(c)-1]:null,b=d.indexOf(c)<d.length-1?d[d.indexOf(c)+1]:null;return Object(i.jsxs)(u,{children:[Object(i.jsxs)(x,{children:[Object(i.jsx)(f,{children:h&&Object(i.jsx)(r.Link,{to:"/year/"+h,children:Object(i.jsx)(o.a,{silent:!0,children:h})})}),Object(i.jsx)(o.a,{to:"/year",silent:!0,children:Object(i.jsx)(a.a,{children:c})}),Object(i.jsx)(O,{children:b&&Object(i.jsx)(r.Link,{to:"/year/"+b,children:Object(i.jsx)(o.a,{silent:!0,children:b})})})]}),Object(i.jsx)(l.b,{row:!0,justifyContent:"center",children:Object(i.jsx)(j.a,{children:m.map((function(e){return Object(i.jsx)(o.a,{to:"/year/"+c+"/"+e.toLowerCase(),active:e===s,children:e})}))})}),s?Object(i.jsx)(v,{season:s,year:c,animeList:n.nodes}):Object(i.jsx)(y,{year:c,seasonList:m,animeList:n.nodes})]})}function y(e){var n=e.year,t=e.seasonList,r=e.animeList;return t.map((function(e){return Object(i.jsx)(p,{season:e,year:n,animeList:r},e)}))}function p(e){var n=e.season,t=e.year,r=e.animeList;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.a,{variant:"section",children:n}),Object(i.jsx)(l.b,{gapsColumn:"1rem",children:r.slice(0,3).map((function(e){return Object(i.jsx)(s.a,{anime:e},e.slug)}))}),Object(i.jsx)(l.b,{row:!0,justifyContent:"center",children:Object(i.jsx)(o.a,{to:"/year/"+t+"/"+n.toLowerCase(),icon:!0,children:Object(i.jsx)(m.a,{icon:h.d,fixedWidth:!0})})})]})}function v(e){var n=e.season,t=e.year,r=e.animeList;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.a,{variant:"section",children:"Anime from "+n+" of "+t}),Object(i.jsx)(l.b,{gapsColumn:"1rem",children:r.map((function(e){return Object(i.jsx)(s.a,{anime:e},e.slug)}))})]})}var w="3504889211"}}]);
//# sourceMappingURL=component---src-templates-season-js-2e8d9778dc74846708e0.js.map