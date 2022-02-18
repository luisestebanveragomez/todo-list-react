var W=Object.defineProperty,K=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var z=(l,i,r)=>i in l?W(l,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[i]=r,p=(l,i)=>{for(var r in i||(i={}))H.call(i,r)&&z(l,r,i[r]);if(F)for(var r of F(i))V.call(i,r)&&z(l,r,i[r]);return l},v=(l,i)=>K(l,R(i));import{j as C,s,r as y,T as $,C as J,W as Q,R as X}from"./vendor.b0d3cce9.js";const Y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function h(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}};Y();const t=C.exports.jsx,u=C.exports.jsxs,T=C.exports.Fragment;s.p`
    background: red;
    color: black;
`;const q=s.button`
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  line-height: 2rem;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: .8rem;
  letter-spacing: .1rem;
  cursor: pointer;
  transition: .3s easy-in;

  &:hover {
    color: var(--color-threeth);
    background-color: var(--color-primary)
  }

  &:disabled {
    opacity: 0.7;
  }
`,Z=s.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px dashed;
  padding-top: 15px;
`,ee=s.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,b=s(q)`
  padding-left: 7px;
  padding-right: 7px;
  line-height: 1.2rem;
  font-size: .6rem;
`,te=s(b)`
  color: var(--color-error);
  border-color: var(--color-error);

  &:hover {
    color: var(--color-threeth);
    background-color: var(--color-error)
  }
`,oe=s.h1`
  font-size: 1.5rem;
`,re=s.main`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px auto;
`,ne=s.section`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`,ie=s.section`
  border: 1px solid var(--color-secundary);
  margin-top: 20px;
  padding: 10px;
`,ae=s.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px dashed var(--color-secundary);

  &.item-enter {
    opacity: 0;
    transform: translate(-10px);
  }

  &.item-enter-active {
    opacity: 1;
    transform: translate(0);
    transition: 500ms ease-in;
  }

  &.item-exit {
    opacity: 1;
    transform: translate(0px);
  }

  &.item-exit-active {
    opacity: 0;
    transform: translate(10px);
    transition: 500ms ease-in;
  }
  &:last-child {
    border-bottom: none;
  }
`,S=s.input`
  border: 1px solid var(--color-primary);
  line-height: 1.5rem;
  background-color: transparent;
  outline: none;
  padding: 2px 5px;

  &::placeholder {
    color: var(--color-secundary)
  }
`,le=s.select`
  order: 1px solid var(--color-primary);
  height: 1.9rem;
  background-color: transparent;
  outline: none;
  padding: 2px 5px;

  &::placeholder {
    color: var(--color-secundary)
  }
`,k=s.div.attrs(({size:l})=>({size:l||"10px"}))`
  margin-bottom: ${l=>l.size};
`,w=s.div`
  margin-left: 5px;
`,A=s.div`
  margin-left: auto;
`,se=s.div``,ce=s.label`
  letter-spacing: 1.rem;
  margin-bottom: 0;

  &.completed {
    color: gray;
    text-decoration: line-through;
  }
`;function de(){const l="new",i={value:"",category:"DEFAULT",newCategory:""},[r,h]=y.exports.useState({}),[n,c]=y.exports.useState(i),[m,N]=y.exports.useState(!1),[j,E]=y.exports.useState(!1),O=e=>{h(D(r,n)),N(!1),E(!1),c(i),e.preventDefault()},D=(e,o)=>{const a=j?o.newCategory:o.category,d={name:o.value,isFavorite:!1,isEdit:!1,completed:!1,id:Math.random().toString(36).substr(2,9)};return v(p({},e),{[a]:e[a]?[...e[a],d]:[d]})},I=e=>{c(v(p({},n),{value:e.target.value}))},_=e=>{E(e.target.value===l),c(v(p({},n),{category:e.target.value.toLowerCase()}))},B=e=>{c(v(p({},n),{newCategory:e.target.value}))},M=(e,o,a,d)=>{const g=e.target.parentElement.children||[];for(let f=0;f<g.length;f++)if(g[f].tagName==="INPUT"&&g[f].type==="text"){r[o].map(L=>{if(L.id===a)return L.name=g[f].value}),h(p({},r)),x(o,a,"isEdit");break}},U=(e,o)=>{const a=p({},r);a[e].splice(o,1),a[e].length===0&&delete a[e],h(p({},a))},x=(e,o,a)=>{r[e].map(d=>{if(d.id===o)return d[a]=!d[a]}),h(p({},r))},G=(e,o,a)=>{r[e].map(d=>{if(d.id===o)return d[a]=!d[a]}),r[e].sort((d,g)=>g.isFavorite-d.isFavorite),h(p({},r))},P=()=>n.category===l&&n.newCategory===""||n.value===""||n.category==="DEFAULT";return u(re,{children:[u(ne,{children:[t(oe,{children:"Todo"}),t(q,{onClick:()=>N(!m),children:"new task"})]}),m&&u(Z,{onSubmit:O,children:[u(se,{children:[t(S,{type:"text",placeholder:"Name Task",value:n.task,onChange:I}),t(k,{}),t(b,{type:"submit",disabled:P(),children:"Save"})]}),u(ee,{children:[u(le,{onChange:_,defaultValue:n.category,children:[t("option",{value:"DEFAULT",disabled:!0,children:"Choose category ..."}),Object.keys(r).map(e=>t("option",{value:e,children:e},e)),t("option",{value:l,children:"New Category"})]}),t(k,{}),j&&t(S,{type:"text",placeholder:"New Category",value:n.newCategory,onChange:B})]})]}),Object.keys(r).length>0&&t(ie,{children:Object.keys(r).map(e=>t("div",{children:r[e].length>0&&u(T,{children:[t("h2",{children:e}),t(k,{}),t($,{component:"ul",children:r[e].map((o,a)=>t(J,{timeout:700,classNames:"item",children:u(ae,{children:[t("input",{type:"checkbox",onChange:()=>x(e,o.id,"completed")}),t(w,{}),!o.isEdit&&t(ce,{className:o.completed&&"completed",children:o.name}),o.isEdit&&u(T,{children:[t(S,{type:"text",defaultValue:o.name}),t(A,{}),t(b,{type:"button",onClick:()=>x(e,o.id,"isEdit"),children:"Cancel"}),t(w,{}),t(b,{type:"button",onClick:d=>M(d,e,o.id),children:"Save"})]}),!o.isEdit&&t(A,{}),!o.isEdit&&t(b,{type:"button",onClick:()=>x(e,o.id,"isEdit"),children:"Edit"}),t(w,{}),t(b,{type:"button",onClick:()=>G(e,o.id,"isFavorite"),children:o.isFavorite?"\u2605":"\u2606"}),t(w,{}),t(te,{type:"button",onClick:()=>U(e,a),children:"x"})]},o.id)},o.id))}),t(k,{size:"20px"})]})},e))})]})}const pe=Q`
   /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  *,
  *:before,
  *:after {
      box-sizing: border-box;
      line-height: 1.45;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: auto;
  }

  #__next {
      /*
          Create a staking context, without a z-index
          this ensures that all portal content (modals & tooltips) will
          float above the Next app.
      */
      isolation: isolate;
  }

  body {
      color: var(--color-text);
      background: var(--color-backgorud);
  }

  a:focus {
      outline: 5px auto var(--color-primary);
  }

  body, input, button, select, option {
      font-family: var(--font-family);
      font-weight: var(--font-weight-light);
  }

  h1, h2, h3, h4, h5, h5, strong {
      font-weight: var(--font-weight-bold);
  }

  h1, h2. h3, h4, h5, h6, p {
      text-rendering: optimizeLegibility;
  }

  p {
      margin-bottom: 1.5em;
      font-size: 1.125rem;
  }

  em {
      font-style: italic;
  }

  strong {
      font-weight: var(--font-weight-medium);
  }

  ::selection {
      background-color: var(--color-primary);
      color: white;
  }

  @media (orientation: landscape) {
      ::-webkit-scrollbar {
          width: 9px;
          height: 11px;
          background-color: transparent;
      }

      ::-webkit-scrollbar-track {
          border-radius: 3px;
          background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: var(--color-gray-300);
          border: 2px solid var(--color-background);
      }
  }

  /* third-party overrrides */
  .video-js .vjs-big-play-button {
      top: 0 !important;
      left: 0 !important;
      bottom: 0 !important;
      right: 0 !important;
      border: 1px solid rgba(255, 255, 255, 0.25) !important;
      background-color: rgba(0, 0, 0, 0.4) !important;
  }

  .video-js .vjs-play-progress:before {
      top: -0.6em !important;
  }

  .vjs-slider-horizontal- .vjs-volume-level:before {
      top: -0.6em !important;
  }


  :root {
    --color-primary: hsl(215, 50%, 23%);
    --color-text: hsl(215, 50%, 23%);
    --color-secundary: hsl(203, 39%, 44%);
    --color-threeth: hsl(182, 43%, 76%);
    --color-error: hsl(355, 78%, 56%);
    --background: hsl(105, 55%, 96%);
    --font-weight-bold: bold;
    --font-family: arial;
  }


  html {
    background: var(--color-threeth);

  }

`;X.render(u(T,{children:[t(de,{}),t(pe,{})]}),document.getElementById("root"));
