(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{286:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},287:function(t,e,i){"use strict";var a=i(13),n=i(10),s=i(288),r=i(280),l=i.n(r);e.a=function t(e,i,r){var o=this,c=i.readViews,u=i.preloadViews,h=i.getListByKey,p=e.label,b=e.path,f=e.type,d=e.access,O=e.isOrderable,y=e.isPrimaryKey,j=e.isRequired,g=e.isReadOnly,v=e.adminDoc,w=e.defaultValue,V=Object(n.a)(e,["label","path","type","access","isOrderable","isPrimaryKey","isRequired","isReadOnly","adminDoc","defaultValue"]);Object(s.a)(this,t),Object(a.a)(this,"getQueryFragment",(function(){return o.path})),Object(a.a)(this,"serialize",(function(t){return t[o.path]||null})),Object(a.a)(this,"validateInput",(function(){})),Object(a.a)(this,"deserialize",(function(t){return t[o.path]})),Object(a.a)(this,"hasChanged",(function(t,e){return!l()(t[o.path],e[o.path])})),Object(a.a)(this,"getDefaultValue",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.originalInput,i=void 0===e?{}:e,a=t.prefill,n=void 0===a?{}:a;return o._getDefaultValue({originalInput:i,prefill:n})})),Object(a.a)(this,"initCellView",(function(){var t=o.views.Cell;t&&o.readViews([t])})),Object(a.a)(this,"initFieldView",(function(){var t=o.views.Field;t&&o.readViews([t])})),Object(a.a)(this,"initFilterView",(function(){var t=o.views.Filter;t&&o.readViews([t])})),Object(a.a)(this,"getFilterTypes",(function(){return[]})),Object(a.a)(this,"getFilterValue",(function(t){return t})),this.config=V,this.label=p,this.path=b,this.type=f,this.maybeAccess=d,this.isOrderable=O,this.isPrimaryKey=y,this.isRequired=j,this.isReadOnly=g,this.adminDoc=v,this.readViews=c,this.preloadViews=u,this.getListByKey=h,this.views=r,this._getDefaultValue="function"!=typeof w?function(t){return t.prefill[o.path]||w}:w}},654:function(t,e,i){"use strict";i.r(e);var a=i(13),n=i(10),s=(i(286),i(280),i(287));function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}class o extends s.a{constructor(t,...e){let{defaultValue:i=null}=t,s=Object(n.a)(t,["defaultValue"]);super(l(l({},s),{},{defaultValue:i}),...e),Object(a.a)(this,"getFilterGraphQL",({value:{inverted:t,options:e}})=>{if(!e.length)return"";const i=e.length>1;let a=this.path;i&&t?a=this.path+"_not_in":i?a=this.path+"_in":t&&(a=this.path+"_not");return{[a]:i?e.map(t=>t.value):e[0].value}}),Object(a.a)(this,"getFilterLabel",()=>this.label),Object(a.a)(this,"formatFilter",({value:t})=>{if(!t.options.length)return t.inverted?this.label+" is set":this.label+" has no value";if(t.options.length>1){const e=t.options.map(t=>t.label).join(", ");return t.inverted?`${this.label} is not in [${e}]`:`${this.label} is in [${e}]`}const e=t.options[0].label;return t.inverted?`${this.label} is not ${e}`:`${this.label} is ${e}`}),Object(a.a)(this,"getFilterValue",t=>t&&t.options&&t.options.length?t:void 0),Object(a.a)(this,"getFilterTypes",()=>[{type:"is",label:"Matches",getInitialValue:()=>({inverted:!1,options:[]})}]),this.options=s.options,this.dataType=s.dataType}}e.default=o}}]);