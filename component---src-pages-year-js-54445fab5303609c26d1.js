(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{B8aR:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("zLVn"),i=n("nKUr"),c=(n("q1tI"),n("vOnD")),o=n("IIq8"),a=Object(c.d)(o.a).attrs((function(t){return{as:"h1",color:t.theme.colors.primaryTitle}})).withConfig({displayName:"title__StyledTitlePage",componentId:"sc-1jlr1h2-0"})(["font-size:2rem;font-weight:bold;"]),s=Object(c.d)(o.a).attrs((function(t){return{as:"h2",color:t.theme.colors.primaryHighEmphasis}})).withConfig({displayName:"title__StyledTitleSection",componentId:"sc-1jlr1h2-1"})(["font-size:1rem;font-weight:bold;text-transform:uppercase;"]),l=Object(c.d)(o.a).attrs((function(t){return{color:t.theme.colors.secondaryTitle}})).withConfig({displayName:"title__StyledTitleCard",componentId:"sc-1jlr1h2-2"})(["font-weight:bold;"]);function u(t){var e=t.variant,n=void 0===e?"page":e,c=t.children,o=Object(r.a)(t,["variant","children"]);switch(n){case"section":return Object(i.jsx)(s,Object.assign({},o,{children:c}));case"card":return Object(i.jsx)(l,Object.assign({},o,{children:c}));case"page":default:return Object(i.jsx)(a,Object.assign({},o,{children:c}))}}},IIq8:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("vOnD"),i=n("CRzS"),c=r.d.span.attrs((function(t){return{as:t.as||(t.code?"code":"span")}})).withConfig({displayName:"style__StyledTextBase",componentId:"z18srv-0"})(["color:",";"," "," "," "," margin:0;"],(function(t){return t.color||"inherit"}),(function(t){return t.link&&Object(r.c)(["color:",";&:hover{text-decoration:underline;}"],(function(t){return t.theme.colors.secondaryTitle}))}),(function(t){return t.block&&Object(r.c)(["display:block;"])}),(function(t){return t.maxLines&&Object(r.c)(["display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;overflow:hidden;"],t.maxLines)}),(function(t){return t.code&&Object(r.c)(["font-family:monospace;padding:0.25rem;border-radius:0.25rem;background-color:",";line-height:1.5rem;"],i.a)}))},Iibc:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u})),n.d(e,"query",(function(){return d}));var r=n("nKUr"),i=n("vOnD"),c=n("L+1Y"),o=n("FT44"),a=n("B8aR"),s=n("jNNy"),l=i.d.div.withConfig({displayName:"year__StyledYearPage",componentId:"c1l620-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));grid-auto-rows:8rem;"]);function u(t){var e=t.data.allAnime;return Object(r.jsxs)(l,{children:[Object(r.jsx)(s.a,{title:"Browse by Year"}),e.groupedByYear.map((function(t){var e=t.year;return Object(r.jsx)(c.b,{alignItems:"center",justifyContent:"center",children:Object(r.jsx)(o.a,{to:"/year/"+e,children:Object(r.jsx)(a.a,{variant:"page",children:e})})},e)}))]})}var d="913030177"},"L+1Y":function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("zLVn"),i=n("nKUr"),c=(n("q1tI"),n("vOnD")),o=n("89ka"),a=c.d.div.withConfig({displayName:"flex__StyledFlex",componentId:"sc-12sekcp-0"})(["display:flex;flex-direction:",";flex-wrap:",";justify-content:",";align-items:",";"," "," ",""],(function(t){return t.row?"row":"column"}),(function(t){return t.wrap?"wrap":"nowrap"}),(function(t){return t.justifyContent||"flex-start"}),(function(t){return t.alignItems||"stretch"}),(function(t){return t.gapsRow&&Object(o.c)(t.gapsRow)}),(function(t){return t.gapsColumn&&Object(o.b)(t.gapsColumn)}),(function(t){return t.gapsBoth&&Object(c.c)(["margin:calc("," / -2);& > *{margin:calc("," / 2);}"],t.gapsBoth,t.gapsBoth)})),s=c.d.div.withConfig({displayName:"flex__StyledFlexItem",componentId:"sc-12sekcp-1"})(["flex:",";align-self:",";justify-self:",";"],(function(t){return t.flex||"0 0 auto"}),(function(t){return t.alignSelf||"auto"}),(function(t){return t.justifySelf||"auto"}));function l(t){var e=t.children,n=Object(r.a)(t,["children"]);return Object(i.jsx)(a,Object.assign({},n,{children:e}))}function u(t){var e=t.children,n=Object(r.a)(t,["children"]);return Object(i.jsx)(s,Object.assign({},n,{children:e}))}}}]);
//# sourceMappingURL=component---src-pages-year-js-54445fab5303609c26d1.js.map