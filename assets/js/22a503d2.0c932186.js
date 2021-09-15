"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38958],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return s}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(r),s=p,v=m["".concat(l,".").concat(s)]||m[s]||c[s]||a;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function s(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56335:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),i=["components"],o={},l=void 0,u={unversionedId:"puppeteer.eventemitter.addlistener",id:"version-10.0.0/puppeteer.eventemitter.addlistener",isDocsHomePage:!1,title:"puppeteer.eventemitter.addlistener",description:"Home &gt; puppeteer &gt; EventEmitter &gt; addListener",source:"@site/versioned_docs/version-10.0.0/puppeteer.eventemitter.addlistener.md",sourceDirName:".",slug:"/puppeteer.eventemitter.addlistener",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.addlistener",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.eventemitter.addlistener.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.eventemitter",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},next:{title:"puppeteer.eventemitter.emit",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.emit"}},d=[{value:"EventEmitter.addListener() method",id:"eventemitteraddlistener-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:d};function m(e){var t=e.components,r=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.addlistener"},"addListener")),(0,a.kt)("h2",{id:"eventemitteraddlistener-method"},"EventEmitter.addListener() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,a.kt)("p",{parentName:"blockquote"},"please use ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.on"},"EventEmitter.on()")," instead.")),(0,a.kt)("p",null,"Add an event listener."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"addListener(event: EventType, handler: Handler): EventEmitter;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.eventtype"},"EventType")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.handler"},"Handler")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")))}m.isMDXComponent=!0}}]);