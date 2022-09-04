(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),r=(c(18),c(19),c(2)),s=c(6),i=c.n(s),l=c(4),j=c(0),o=(c(20),c(1)),b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})};function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var h=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(j.useState)(!1),h=Object(l.a)(s,2),u=h[0],O=h[1],x=Object(j.useState)(!1),m=Object(l.a)(x,2),p=m[0],f=m[1],v=Object(r.h)().slug,g=void 0===v?"":v;Object(j.useEffect)((function(){O(!0),d().then((function(e){n(e)})).catch((function(){return f(!0)})).finally((function(){return O(!1)}))}),[]);var N=function(e){return e.slug===g},y=function(e){return c.find((function(t){return e.motherName===t.name}))},w=function(e){return c.find((function(t){return t.name===e.fatherName}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[u&&Object(o.jsx)(b,{}),p&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),c&&!u&&0===c.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){var t,c;return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":N(e)}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(a.b,{to:"/people/".concat(e.slug),style:{color:"f"===e.sex?"red":"blue"},children:e.name})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:y(e)?Object(o.jsx)(a.b,{to:"/people/".concat(null===(t=y(e))||void 0===t?void 0:t.slug),style:{color:"red"},children:e.motherName}):e.motherName||"-"}),Object(o.jsx)("td",{children:w(e)?Object(o.jsx)(a.b,{to:"/people/".concat(null===(c=w(e))||void 0===c?void 0:c.slug),children:e.fatherName}):e.fatherName||"-"})]},e.slug)}))})]})]})})]})},u=(c(22),function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsx)(r.b,{path:"home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(h,{})}),Object(o.jsx)(r.b,{path:":slug",element:Object(o.jsx)(h,{})})]}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})});Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(u,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.64a0b842.chunk.js.map