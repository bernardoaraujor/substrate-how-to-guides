(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return i.a.createElement(e,a({},t,{components:n}))}},p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(a,".").concat(d)]||c[d]||b[d]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(8),o=(n(0),n(174)),a={sidebar_position:6,keywords:"pallet design, intermediate, runtime"},s={unversionedId:"Tutorials/Kitties/kitties-frontend",id:"Tutorials/Kitties/kitties-frontend",isDocsHomePage:!1,title:"Part V: Kitties front-end",description:"[WIP] Build the custom frontend for our Substrate Kitties.",source:"@site/docs/07-Tutorials/01-Kitties/kitties-frontend.md",sourceDirName:"07-Tutorials/01-Kitties",slug:"/Tutorials/Kitties/kitties-frontend",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/kitties-frontend",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/07-Tutorials/01-Kitties/kitties-frontend.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:"pallet design, intermediate, runtime"},sidebar:"tutorialSidebar",previous:{title:"Part IV: Interacting with your Kitties",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/interacting-functions"},next:{title:"How-to Template",permalink:"/substrate-how-to-guides/docs/contribute/how-to-template"}},l=[{value:"Learning outcomes",id:"learning-outcomes",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Sketching out the components",id:"1-sketching-out-the-components",children:[]},{value:"2. Using PolkadotJS API to query storage",id:"2-using-polkadotjs-api-to-query-storage",children:[]},{value:"3. Rendering Kitties",id:"3-rendering-kitties",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(i.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"[WIP]"," Build the custom frontend for our Substrate Kitties.")),Object(o.mdx)("h2",{id:"learning-outcomes"},"Learning outcomes"),Object(o.mdx)("p",null,"\u27a1\ufe0f Connect your chain to the Substrate front-end template."),Object(o.mdx)("p",null,"\u27a1\ufe0f Use PolkadotJS API to customize template."),Object(o.mdx)("p",null,"\u27a1\ufe0f ","[WIP]"),Object(o.mdx)("h2",{id:"overview"},"Overview"),Object(o.mdx)("p",null,"Now that we have completed runtime development, it is time to build a user interface which can easily access and interact with our\ncustom storage items and functions. We'll be using the frontend template, a React app with some basic functionality. ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Install it")," to be able to complete this part of the workshop. "),Object(o.mdx)("p",null,"The Substrate frontend template comes with a number of prebuilt features, including:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"A wallet to manage and create keys + accounts."),Object(o.mdx)("li",{parentName:"ul"},"An address book to get details about accounts."),Object(o.mdx)("li",{parentName:"ul"},"A transfer function to send funds between accounts."),Object(o.mdx)("li",{parentName:"ul"},"A runtime upgrade component to make easy updates to your runtime."),Object(o.mdx)("li",{parentName:"ul"},"A key/value storage modification UX."),Object(o.mdx)("li",{parentName:"ul"},"A custom transaction submitter.")),Object(o.mdx)("p",null,"Since this course is primarily about runtime development, what you will learn in this section will not be as comprehensive as before,\nhowever it should empower you with the tools needed to extend your own knowledge and abilities."),Object(o.mdx)("h2",{id:"steps"},"Steps"),Object(o.mdx)("h3",{id:"1-sketching-out-the-components"},"1. Sketching out the components"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Substrate Frontend Template")," comes with a set of custom components built in React.\nThese components use PolkadotJS Apps and an RPC endpoint to communicate with a Substrate node. This will allow\nus to read our storage items, and pass in inputs to allows users to make extrinsics by calling our pallet's\ndispatchable functions."),Object(o.mdx)("p",null,"Let's sketch out what we'll want our Kitty frontend to look like, separating our node's capabilities by the React cards\nwe'll need to render as well as the buttons each card will contain:"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Cards")),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Create Kitty"),Object(o.mdx)("li",{parentName:"ol"},"View your Kitties"),Object(o.mdx)("li",{parentName:"ol"},"View all other Kitties and their owners")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Buttons")),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Set Kitty's price"),Object(o.mdx)("li",{parentName:"ol"},"Breed a Kitty"),Object(o.mdx)("li",{parentName:"ol"},"Buy Kitty"),Object(o.mdx)("li",{parentName:"ol"},"Transfer Kitty")),Object(o.mdx)("p",null,"Structure of the frontend project:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"folder structure with what we care about\nand assets for kitty traits\n")),Object(o.mdx)("h3",{id:"2-using-polkadotjs-api-to-query-storage"},"2. Using PolkadotJS API to query storage"),Object(o.mdx)("p",null,"The Create Kitty card is simply an extrinsic and the frontend template already handles displaying events from our runtime.\nViewing Kitties requires that we display the values from the fields in the objects from our ",Object(o.mdx)("inlineCode",{parentName:"p"},"Kitties")," ",Object(o.mdx)("inlineCode",{parentName:"p"},"StorageMap"),". "),Object(o.mdx)("p",null,"Here's a break down of how PolkadotJS API helps us do this:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"api.query.substrateKitties.{storageItem}"),": we can use ",Object(o.mdx)("inlineCode",{parentName:"li"},"api.query")," to access our pallet instance as we've named it in our runtime."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"api.query.substrateKitties.storageItem.map( (item) => item)"),":to query a storage map, we must use ",Object(o.mdx)("inlineCode",{parentName:"li"},"map")," "),Object(o.mdx)("li",{parentName:"ul"},"...")),Object(o.mdx)("p",null,"Make sure you think about the props your passign in. We've done it for you."),Object(o.mdx)("h3",{id:"3-rendering-kitties"},"3. Rendering Kitties"),Object(o.mdx)("p",null,"The most interesting part of our Kitties frontend is the logic behind rendering unique Kitties  based on our Kitty DNA values."),Object(o.mdx)("p",null,"How does think work?"),Object(o.mdx)("p",null,"Essentially, each hex is split up into 6 segment where each segment corresponds to a physical Kitty trait."),Object(o.mdx)("p",null,"This all happens in the ",Object(o.mdx)("inlineCode",{parentName:"p"},"KittyCards.js")," file ...."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"}," const populateKitties = () => {\n")),Object(o.mdx)("p",null,"And KittyAvatar does all the linking of .png files to DNA segments."),Object(o.mdx)("p",null,"TODO."),Object(o.mdx)("h2",{id:"next-steps"},"Next steps"))}c.isMDXComponent=!0}}]);