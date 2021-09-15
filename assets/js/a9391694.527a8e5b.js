"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98673],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=p,f=s["".concat(l,".").concat(d)]||s[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},92410:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),i=["components"],o={},l=void 0,u={unversionedId:"puppeteer.eventemitter.emit",id:"version-9.1.1/puppeteer.eventemitter.emit",isDocsHomePage:!1,title:"puppeteer.eventemitter.emit",description:"Home &gt; puppeteer &gt; EventEmitter &gt; emit",source:"@site/versioned_docs/version-9.1.1/puppeteer.eventemitter.emit.md",sourceDirName:".",slug:"/puppeteer.eventemitter.emit",permalink:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.emit",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.eventemitter.emit.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.eventemitter.addlistener",permalink:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.addlistener"},next:{title:"puppeteer.eventemitter.addlistener",permalink:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.addlistener"}},m=[{value:"EventEmitter.emit() method",id:"eventemitteremit-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:m};function s(e){var t=e.components,r=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.emit"},"emit")),(0,a.kt)("h2",{id:"eventemitteremit-method"},"EventEmitter.emit() method"),(0,a.kt)("p",null,"Emit an event and call any associated listeners."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"emit(event: EventType, eventData?: unknown): boolean;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.eventtype"},"EventType")),(0,a.kt)("td",{parentName:"tr",align:null},"the event you'd like to emit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventData"),(0,a.kt)("td",{parentName:"tr",align:null},"unknown"),(0,a.kt)("td",{parentName:"tr",align:null},"any data you'd like to emit with the event")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"boolean"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")," if there are any listeners, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if there are not."))}s.isMDXComponent=!0}}]);