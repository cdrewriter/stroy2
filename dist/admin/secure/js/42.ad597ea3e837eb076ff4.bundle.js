(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{655:function(e,n,o){"use strict";o.r(n);var s=o(1),t=o(74),r=o(6),a=o(96);n.default=({onChange:e,autoFocus:n,field:o,value:c,renderContext:l,errors:i,isDisabled:d})=>{const u=o.options.find(e=>e.value===c),b="ks-input-"+o.path,j=i.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),p=i.find(e=>e instanceof Error&&"AccessDeniedError"===e.name),f="dialog"===l?{menuPortalTarget:document.body,menuShouldBlockScroll:!0}:null;return Object(s.jsx)(t.a,null,Object(s.jsx)(t.d,{htmlFor:b,field:o,errors:i}),Object(s.jsx)(t.b,{text:o.adminDoc}),Object(s.jsx)(t.c,null,Object(s.jsx)("div",{css:{flex:1}},Object(s.jsx)(a.a,Object(r.a)({autoFocus:n,value:j?u:void 0,placeholder:j?void 0:p.message,options:o.options,onChange:n=>{e(n?n.value:null)},isClearable:!0,id:"react-select-"+b,inputId:b,instanceId:b,isDisabled:d},f)))))}}}]);