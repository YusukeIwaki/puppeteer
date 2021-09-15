"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93298],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=p.createContext({}),i=function(e){var t=p.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return p.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},c=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=i(r),m=n,k=c["".concat(o,".").concat(m)]||c[m]||s[m]||a;return r?p.createElement(k,l(l({ref:t},d),{},{components:r})):p.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return p.createElement.apply(null,l)}return p.createElement.apply(null,r)}c.displayName="MDXCreateElement"},54112:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return c}});var p=r(87462),n=r(63366),a=(r(67294),r(3905)),l=["components"],u={},o=void 0,i={unversionedId:"puppeteer.puppeteer",id:"version-10.1.0/puppeteer.puppeteer",isDocsHomePage:!1,title:"puppeteer.puppeteer",description:"Home &gt; puppeteer &gt; Puppeteer",source:"@site/versioned_docs/version-10.1.0/puppeteer.puppeteer.md",sourceDirName:".",slug:"/puppeteer.puppeteer",permalink:"/puppeteer/docs/puppeteer.puppeteer",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.puppeteer.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",next:{title:"puppeteer.puppeteer.clearcustomqueryhandlers",permalink:"/puppeteer/docs/puppeteer.puppeteer.clearcustomqueryhandlers"}},d=[{value:"Puppeteer class",id:"puppeteer-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,p.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteer"},"Puppeteer")),(0,a.kt)("h2",{id:"puppeteer-class"},"Puppeteer class"),(0,a.kt)("p",null,"The main Puppeteer class."),(0,a.kt)("p",null,"IMPORTANT: if you are using Puppeteer in a Node environment, you will get an instance of ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteernode"},"PuppeteerNode")," when you import or require ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer"),". That class extends ",(0,a.kt)("inlineCode",{parentName:"p"},"Puppeteer"),", so has all the methods documented below as well as all that are defined on ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteernode"},"PuppeteerNode"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Puppeteer \n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Puppeteer")," class."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer._changedproduct"},"_","changedProduct")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer._ispuppeteercore"},"_","isPuppeteerCore")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.devices"},"devices")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.devicesmap"},"DevicesMap")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.errors"},"errors")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteererrors"},"PuppeteerErrors")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.networkconditions"},"networkConditions")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.predefinednetworkconditions"},"PredefinedNetworkConditions")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.clearcustomqueryhandlers"},"clearCustomQueryHandlers()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Clears all registered handlers.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.connect"},"connect(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"This method attaches Puppeteer to an existing browser instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.customqueryhandlernames"},"customQueryHandlerNames()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.registercustomqueryhandler"},"registerCustomQueryHandler(name, queryHandler)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Registers a ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.customqueryhandler"},"custom query handler"),". After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",(0,a.kt)("code",null,"<","name",">","/"),". The name is only allowed to consist of lower- and upper case latin letters.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.puppeteer.unregistercustomqueryhandler"},"unregisterCustomQueryHandler(name)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);