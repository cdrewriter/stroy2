(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{644:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(74),o=s(75),c=s(178),i=s(0),r=s(9),u=s(8),d=s(23),j=s(17);t.default=({onChange:e,autoFocus:t,field:s,item:{password_is_set:l}={},errors:b,warnings:p,isDisabled:w})=>{const x=Object(i.useRef)(),[O,f]=Object(i.useState)(!1),[g,h]=Object(i.useState)(!1),[m,C]=Object(i.useState)(""),[v,S]=Object(i.useState)("");Object(i.useEffect)(()=>{O&&e({inputPassword:m,inputConfirm:v})},[m,v]),Object(i.useEffect)(()=>{O&&x.current&&x.current.focus()},[O]);const k=e=>{const t=e===b?"danger":"warning";return e.map(({message:e,data:s})=>Object(a.jsx)(c.a,{appearance:t,key:e},e,s?" - "+JSON.stringify(s):null))},P="ks-input-"+s.path;return Object(a.jsx)(n.a,null,Object(a.jsx)(n.d,{htmlFor:P,field:s,errors:b}),Object(a.jsx)(n.b,{text:s.adminDoc}),Object(a.jsx)(n.c,null,O?Object(a.jsx)(d.d,{growIndexes:[0,1]},Object(a.jsx)(o.c,{autoComplete:"off",autoFocus:t,id:P,ref:x,name:"inputPassword",onChange:e=>C(e.target.value),placeholder:"New Password",type:g?"text":"password",value:m,disabled:w}),Object(a.jsx)(o.c,{autoComplete:"off",autoFocus:t,id:P+"-confirm",name:"inputConfirm",onChange:e=>S(e.target.value),placeholder:"Confirm Password",type:g?"text":"password",value:v,disabled:w}),Object(a.jsx)(u.a,{isActive:g,onClick:()=>{h(!g)},title:g?"Hide Text":"Show Text",variant:"ghost",isDisabled:w},Object(a.jsx)(j.a,null,g?"Hide Text":"Show Text"),Object(a.jsx)("div",{css:{width:20}},g?Object(a.jsx)(r.n,null):Object(a.jsx)(r.f,null)))):Object(a.jsx)(u.a,{id:P+"-button",onClick:()=>{f(!O)},variant:"ghost",isDisabled:w},l?"Update Password":"Set Password")),k(b),k(p))}}}]);