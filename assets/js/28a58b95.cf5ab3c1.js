"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[5658],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={},i="Set And Map",c={unversionedId:"javascript/Set-Map",id:"javascript/Set-Map",title:"Set And Map",description:"Set",source:"@site/docs/javascript/Set-Map.md",sourceDirName:"javascript",slug:"/javascript/Set-Map",permalink:"/blog/docs/javascript/Set-Map",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/Set-Map.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generator",permalink:"/blog/docs/javascript/Generator"},next:{title:"Ajax And Fetch",permalink:"/blog/docs/javascript/AJAX"}},u={},s=[{value:"Set",id:"set",level:2},{value:"Map",id:"map",level:2},{value:"WeakSet / WeakMap",id:"weakset--weakmap",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-and-map"},"Set And Map"),(0,o.kt)("h2",{id:"set"},"Set"),(0,o.kt)("p",null,"\u5b83\u7c7b\u4f3c\u4e8e\u6570\u7ec4\uff0c\u4f46\u662f\u6210\u5458\u7684\u503c\u90fd\u662f\u552f\u4e00\u7684\uff0c\u6ca1\u6709\u91cd\u590d\u7684\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const s = new Set();\n\n[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));\n\nfor (let i of s) {\n  console.log(i);\n}\n// 2 3 5 4\n")),(0,o.kt)("p",null,"Set \u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\uff08\u6216\u8005\u5177\u6709 iterable \u63a5\u53e3\u7684\u5176\u4ed6\u6570\u636e\u7ed3\u6784\uff09\u4f5c\u4e3a\u53c2\u6570\uff0c\u7528\u6765\u521d\u59cb\u5316\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const set = new Set([1, 2, 3, 4, 4]);\n[...set]\n// [1, 2, 3, 4] \u5b9e\u73b0\u4e86\u6570\u7ec4\u7684\u53bb\u91cd\n")),(0,o.kt)("p",null,"Set \u5b9e\u4f8b\u7684\u65b9\u6cd5\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a\u64cd\u4f5c\u65b9\u6cd5\uff08\u7528\u4e8e\u64cd\u4f5c\u6570\u636e\uff09\u548c\u904d\u5386\u65b9\u6cd5\uff08\u7528\u4e8e\u904d\u5386\u6210\u5458\uff09\u3002\u4e0b\u9762\u5148\u4ecb\u7ecd\u56db\u4e2a\u64cd\u4f5c\u65b9\u6cd5\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"add(value)"),"\uff1a\u6dfb\u52a0\u67d0\u4e2a\u503c\uff0c\u8fd4\u56de Set \u7ed3\u6784\u672c\u8eab\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delete(value)"),"\uff1a\u5220\u9664\u67d0\u4e2a\u503c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5220\u9664\u662f\u5426\u6210\u529f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"has(value)"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8be5\u503c\u662f\u5426\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"Set"),"\u7684\u6210\u5458\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clear()"),"\uff1a\u6e05\u9664\u6240\u6709\u6210\u5458\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\u3002")),(0,o.kt)("h2",{id:"map"},"Map"),(0,o.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u5bf9\u8c61\uff0c\u662f\u952e\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u4f46\u666e\u901a\u7684\u5bf9\u8c61\u7684\u952e\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\uff0cMap\u7684\u952e\u53ef\u4ee5\u4e0d\u662f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const m = new Map();\nconst o = {p: 'Hello World'};\n\nm.set(o, 'content')\nm.get(o) // \"content\"\n\nm.has(o) // true\nm.delete(o) // true\nm.has(o) // false\n")),(0,o.kt)("p",null,"\u6bd4\u5982\u8fd9\u91cc\uff0c Map\u5b9e\u4f8bm\u7684\u4e00\u4e2a\u952e\u662f\u5bf9\u8c61o\uff0c\u952e\u503c\u4e3a'content'\u3002"),(0,o.kt)("h2",{id:"weakset--weakmap"},"WeakSet / WeakMap"),(0,o.kt)("p",null,"WeakSet \u7684\u6210\u5458\u53ea\u80fd\u662f\u5bf9\u8c61\u3002\u5176\u6b21\uff0cWeakSet \u4e2d\u7684\u5bf9\u8c61\u90fd\u662f\u5f31\u5f15\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WeakMap"),"\u53ea\u63a5\u53d7\u5bf9\u8c61\u4f5c\u4e3a\u952e\u540d\u3002\u5176\u6b21\uff0cWeakMap \u4e2d\u7684\u952e\u540d\u6240\u6307\u5411\u7684\u5bf9\u8c61\u90fd\u662f\u5f31\u5f15\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5f31\u5f15\u7528")),(0,o.kt)("p",null,"\u6307\u7684\u662f\u4e0d\u88ab\u5728\u5f15\u7528\u8ba1\u6570\u4e2d\u88ab\u8ba1\u6570\u7684\u5f15\u7528\u3002"))}d.isMDXComponent=!0}}]);