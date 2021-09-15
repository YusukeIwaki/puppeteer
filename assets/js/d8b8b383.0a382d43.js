"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35052],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17267:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={},u=void 0,l={unversionedId:"puppeteer.browsercontext.waitfortarget",id:"version-9.1.1/puppeteer.browsercontext.waitfortarget",isDocsHomePage:!1,title:"puppeteer.browsercontext.waitfortarget",description:"Home &gt; puppeteer &gt; BrowserContext &gt; waitForTarget",source:"@site/versioned_docs/version-9.1.1/puppeteer.browsercontext.waitfortarget.md",sourceDirName:".",slug:"/puppeteer.browsercontext.waitfortarget",permalink:"/puppeteer/docs/9.1.1/puppeteer.browsercontext.waitfortarget",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.browsercontext.waitfortarget.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.browsercontext.targets",permalink:"/puppeteer/docs/9.1.1/puppeteer.browsercontext.targets"},next:{title:"puppeteer.page",permalink:"/puppeteer/docs/9.1.1/puppeteer.page"}},c=[{value:"BrowserContext.waitForTarget() method",id:"browsercontextwaitfortarget-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.browsercontext.waitfortarget"},"waitForTarget")),(0,o.kt)("h2",{id:"browsercontextwaitfortarget-method"},"BrowserContext.waitForTarget() method"),(0,o.kt)("p",null,"This searches for a target in this specific browser context."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForTarget(predicate: (x: Target) => boolean, options?: {\n        timeout?: number;\n    }): Promise<Target>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"predicate"),(0,o.kt)("td",{parentName:"tr",align:null},"(x: ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.target"},"Target"),") =",">"," boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"A function to be run for every target")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),(0,o.kt)("td",{parentName:"tr",align:null},"An object of options. Accepts a timout, which is the maximum wait time in milliseconds. Pass ",(0,o.kt)("code",null,"0")," to disable the timeout. Defaults to 30 seconds.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.target"},"Target"),">"),(0,o.kt)("p",null,"Promise which resolves to the first target found that matches the ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate")," function."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An example of finding a target for a page opened via ",(0,o.kt)("inlineCode",{parentName:"p"},"window.open"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browserContext.waitForTarget(target => target.url() === 'https://www.example.com/');\n\n")))}m.isMDXComponent=!0}}]);