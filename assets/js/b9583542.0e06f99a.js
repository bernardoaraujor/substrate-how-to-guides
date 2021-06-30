(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return d})),a.d(t,"MDXProvider",(function(){return u})),a.d(t,"mdx",(function(){return g})),a.d(t,"useMDXComponents",(function(){return p})),a.d(t,"withMDXComponents",(function(){return c}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),c=function(e){return function(t){var a=p(t.components);return i.a.createElement(e,o({},t,{components:a}))}},p=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,u=d["".concat(o,".").concat(c)]||d[c]||b[c]||r;return a?i.a.createElement(u,s(s({ref:t},l),{},{components:a})):i.a.createElement(u,s({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),r=(a(0),a(174)),o={sidebar_position:2,keywords:"pallet design, intermediate, runtime",code:"code/kitties-tutorial/01-basic-setup.rs"},l={unversionedId:"Tutorials/Kitties/basic-setup",id:"Tutorials/Kitties/basic-setup",isDocsHomePage:!1,title:"Part I: Basic set-up",description:"This tutorial assumes that you have already installed the prerequisites for building with Substrate on your machine.",source:"@site/docs/07-Tutorials/01-Kitties/basic-setup.md",sourceDirName:"07-Tutorials/01-Kitties",slug:"/Tutorials/Kitties/basic-setup",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/basic-setup",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/07-Tutorials/01-Kitties/basic-setup.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:"pallet design, intermediate, runtime",code:"code/kitties-tutorial/01-basic-setup.rs"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude3a Substrate Kitties",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/overview"},next:{title:"Part II: Uniqueness, custom types and storage maps",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/create-kitties"}},s=[{value:"Learning outcomes",id:"learning-outcomes",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Getting started with the node template",id:"1-getting-started-with-the-node-template",children:[]},{value:"2. Writing out the structure for <code>pallet_kitties</code>",id:"2-writing-out-the-structure-for-pallet_kitties",children:[]},{value:"3. Implement <code>pallet_kitties</code> for your runtime",id:"3-implement-pallet_kitties-for-your-runtime",children:[]},{value:"4. Include a storage item to track all Kitties",id:"4-include-a-storage-item-to-track-all-kitties",children:[]},{value:"5. Build and check your pallet",id:"5-build-and-check-your-pallet",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],m={toc:s};function d(e){var t=e.components,a=Object(i.default)(e,["components"]);return Object(r.mdx)("wrapper",Object(n.default)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"This tutorial assumes that you have already installed the prerequisites for building with Substrate on your machine.\nIf you haven't already, head over to our ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started/"},"installation guide"),"."))),Object(r.mdx)("h2",{id:"learning-outcomes"},"Learning outcomes"),Object(r.mdx)("p",null,"\u27a1\ufe0f Common basic patterns for Substrate runtime development."),Object(r.mdx)("p",null,"\u27a1\ufe0f How to repurpose the Substrate Node Template."),Object(r.mdx)("p",null,"\u27a1\ufe0f How to create a storage item to keep track of a single ",Object(r.mdx)("inlineCode",{parentName:"p"},"u64")," value."),Object(r.mdx)("h2",{id:"overview"},"Overview"),Object(r.mdx)("p",null,"Before we can start making Kitties, we first need to do a little groundwork. This part covers the basic patterns involved with using the Substrate Node Template to set up a custom pallet and include a simple storage item."),Object(r.mdx)("h2",{id:"steps"},"Steps"),Object(r.mdx)("h3",{id:"1-getting-started-with-the-node-template"},"1. Getting started with the node template"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-node-template"},"Substrate Node Template"),' provides us with an "out-of-the-box" blockchain node. Our biggest advantage\nin using it are that both networking and consensus layers are already built and all we need to focus on is building out\nour runtime logic. Before we get there, we need to set-up our project. Start by cloning the node template:'),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/substrate-developer-hub/substrate-node-template.git\n")),Object(r.mdx)("p",null,"Rename the project's parent directory to ",Object(r.mdx)("inlineCode",{parentName:"p"},"my-substratekitties")," (previously called ",Object(r.mdx)("inlineCode",{parentName:"p"},"substrate-node-template"),")\nand open ",Object(r.mdx)("inlineCode",{parentName:"p"},"my-substratekitties")," in your favorite code editor. Among the folders in the template, the ones we care about are:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"strong"},"/node/"))," - This contains all the logic that allows your node to interact with your runtime and RPC clients."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"strong"},"/pallets/"))," - Here's where all your custom pallets live."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"strong"},"/runtime/")),' - This is where all pallets (both custom "internal" and "external" ones) are aggregated and implemented for the chain\'s runtime. ')),Object(r.mdx)("h4",{id:"renaming-for-our-node-and-runtime"},"Renaming for our node and runtime"),Object(r.mdx)("p",null,"Before we start writing any code, let's modify our node template to rename our node and runtime to what we'd like to call it. "),Object(r.mdx)("p",null,'The easiest way to get this done is to use the "search and replace" functionality of your IDE. '),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Replace the 2 instances of ",Object(r.mdx)("inlineCode",{parentName:"strong"},"node-template")," with ",Object(r.mdx)("inlineCode",{parentName:"strong"},"kitties-node"),".")," Specifically:"),Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"In ",Object(r.mdx)("inlineCode",{parentName:"strong"},"/node/Cargo.toml")),": the name for ",Object(r.mdx)("inlineCode",{parentName:"li"},"[[bin]]"),"; and the name for ",Object(r.mdx)("inlineCode",{parentName:"li"},"[package]"),"."))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Replace all instances of ",Object(r.mdx)("inlineCode",{parentName:"strong"},"node-template-runtime")," with ",Object(r.mdx)("inlineCode",{parentName:"strong"},"kitties-runtime"),".")," Specifically:"),Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"In ",Object(r.mdx)("inlineCode",{parentName:"strong"},"/node/Cargo.toml"))," in 2 places: (1) the path for ",Object(r.mdx)("inlineCode",{parentName:"li"},"runtime-benchmarks")," and (2) the dependency name for ",Object(r.mdx)("inlineCode",{parentName:"li"},"path = '../runtime'"),"."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"In ",Object(r.mdx)("inlineCode",{parentName:"strong"},"/runtime/Cargo.toml"))," in 1 place: the name under ",Object(r.mdx)("inlineCode",{parentName:"li"},"[package]"),".")))),Object(r.mdx)("h4",{id:"renaming-for-our-pallet"},"Renaming for our pallet"),Object(r.mdx)("p",null,"The node template already comes with a template pallet and folder structure that we can re-use. Every pallet\nis contained in a folder, typically named after the pallet, which contains a ",Object(r.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," and a ",Object(r.mdx)("inlineCode",{parentName:"p"},"src")," folder. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"src")," folder\nis typically made up of a ",Object(r.mdx)("inlineCode",{parentName:"p"},"lib.rs")," file and any additional helper\nfiles. All of the pallet's logic lives in its corresponding ",Object(r.mdx)("inlineCode",{parentName:"p"},"lib.rs")," file. "),Object(r.mdx)("p",null,"We're going to need to update information about our pallet too. Here's a glance at the folder structure we're working with to help\nvisualize what we'll need to do: "),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},"my-substratekitties\n|\n+-- node\n|\n+-- pallets\n|   |\n|   +-- template           <-- 1. *Rename* to `kitties`\n|       |\n|       +-- Cargo.toml     <-- 2. *Modify* this file\n|       |\n|       +-- src\n|           |\n|           +-- lib.rs     <-- 3. *Remove* contents\n|           |\n|           +-- mock.rs    <-- *Remove* file\n|           |\n|           +-- tests.rs   <-- *Remove* file\n|\n+-- Caro.toml              <-- 4. *Rename* 'pallets/template' to 'pallets/kitties'\n")),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"You can go ahead and remove ",Object(r.mdx)("inlineCode",{parentName:"p"},"mock.rs")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"tests.rs"),". ",Object(r.mdx)("strong",{parentName:"p"},"We won't be learning about\nusing these in this tutorial. Have a look at ",Object(r.mdx)("a",{parentName:"strong",href:"/docs/testing/test-transfer"},"this how-to guide")," if\nyou're curious to learn how testing works.")," ")),Object(r.mdx)("p",null,"Follow step 1-3 as depicted in the folder structure above:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Rename the ",Object(r.mdx)("inlineCode",{parentName:"li"},"template")," folder to ",Object(r.mdx)("inlineCode",{parentName:"li"},"kitties"),";"),Object(r.mdx)("li",{parentName:"ol"},"Go to the ",Object(r.mdx)("inlineCode",{parentName:"li"},"Cargo.toml")," file of the same folder and replace ",Object(r.mdx)("inlineCode",{parentName:"li"},"pallet-template")," with ",Object(r.mdx)("inlineCode",{parentName:"li"},"pallet-kitties"),". This will be the name of\nthe pallet as our runtime refers to it."),Object(r.mdx)("li",{parentName:"ol"},"Remove the contents of ",Object(r.mdx)("inlineCode",{parentName:"li"},"lib.rs")," and delete ",Object(r.mdx)("inlineCode",{parentName:"li"},"mock.rs")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"tests.rs"),"."),Object(r.mdx)("li",{parentName:"ol"},"Search are replace ",Object(r.mdx)("inlineCode",{parentName:"li"},"'pallets/template'")," to ",Object(r.mdx)("inlineCode",{parentName:"li"}," 'pallets/kitties'"),". This tells our workspace about where to find our Kitties pallet.")),Object(r.mdx)("p",null,"We now need to make sure our Kitties node is properly wired up to use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"pallet-kitties")," by updating\n",Object(r.mdx)("inlineCode",{parentName:"p"},"/runtime/Cargo.toml"),". "),Object(r.mdx)("p",null,"Search and replace all instances of ",Object(r.mdx)("inlineCode",{parentName:"p"},"pallet-template")," to ",Object(r.mdx)("inlineCode",{parentName:"p"},"pallet-kitties")," and update the path to the kitties pallet:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"/*--snip--*/\n[dependencies.pallet-template]  // <-- 1. Rename to '[dependencies.pallet-kitties]'\ndefault-features = false\npath = '../pallets/template'    // <-- 2. Rename to 'path = '../pallets/template' '\nversion = '3.0.0'\n/*--snip--*/\n[features]\ndefault = ['std']\nruntime-benchmarks = [\n    /*--snip--*/\n    'pallet-template/runtime-benchmarks',   // <-- 3. Rename to 'pallet-kitties/runtime-benchmarks',\n    /*--snip--*/\n]\nstd = [\n    /*--snip--*/\n    'pallet-template/std',  // <-- 4. Rename to 'pallet-kitties/std'\n    /*--snip--*/\n]\n")),Object(r.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"Refer to ",Object(r.mdx)("a",{parentName:"p",href:"/docs/basics/basic-pallet-integration"},"this guide")," to help your learn these basic patterns. You can also read more about pallets in this ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/pallets"},"knowledgebase article"),".  "))),Object(r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"All this renaming stuff can get confusing, but it's a good excercise to familiarize yourself with the structure\nof a node template and how things are wired up. To make sure things are clear let's recap what we've done:"),Object(r.mdx)("ul",{parentName:"div"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"We've renamed our ",Object(r.mdx)("em",{parentName:"strong"},"project")," to ",Object(r.mdx)("inlineCode",{parentName:"strong"},"my-substratekitties"),".")," This only helps keep folders on your local machine organized."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"We've renamed our ",Object(r.mdx)("em",{parentName:"strong"},"runtime")," to ",Object(r.mdx)("inlineCode",{parentName:"strong"},"kitties-runtime"),".")," This is what our node is using to reference the runtime it needs to build ","\u2014","hence why it's first ",Object(r.mdx)("em",{parentName:"li"},"named")," in ",Object(r.mdx)("inlineCode",{parentName:"li"},"/runtime/Cargo.toml")," and then ",Object(r.mdx)("em",{parentName:"li"},"referenced")," as a dependency in ",Object(r.mdx)("inlineCode",{parentName:"li"},"/node/Cargo.toml"),"."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"We've renamed our ",Object(r.mdx)("em",{parentName:"strong"},"node")," to ",Object(r.mdx)("inlineCode",{parentName:"strong"},"kitties-node"),".")," This is what we'll need to refer to in order to run our chain."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"We've renamed the ",Object(r.mdx)("inlineCode",{parentName:"strong"},"pallets/template")," folder to ",Object(r.mdx)("em",{parentName:"strong"},"kitties"),".")," This only affects the path to link ",Object(r.mdx)("inlineCode",{parentName:"li"},"pallet-kitties")," to our runtime in ",Object(r.mdx)("inlineCode",{parentName:"li"},"/runtime/Cargo.toml"),". Note that this ",Object(r.mdx)("strong",{parentName:"li"},"not")," the name of our pallet ","\u2014"," just the name of the folder where our pallet lives. "),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"We've renamed ",Object(r.mdx)("em",{parentName:"strong"},"pallet-template")," to ",Object(r.mdx)("em",{parentName:"strong"},"pallet-kitties"),".")," This is the name of our pallet as our runtime understands it. ")))),Object(r.mdx)("h3",{id:"2-writing-out-the-structure-for-pallet_kitties"},"2. Writing out the structure for ",Object(r.mdx)("inlineCode",{parentName:"h3"},"pallet_kitties")),Object(r.mdx)("p",null,"Now that your node template is ready, we can proceed to start writing our pallet."),Object(r.mdx)("p",null,Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/pallets"},"Pallets")," in Substrate are used to define runtime logic. In our case, we'll be creating a single pallet that manages all of the\nlogic of our Substrate Kitties dApp.\nAt this point, we're in a good place to lay out the basic structure of our pallet, after which we can check if our node builds without error. By structure, we're talking about outlining the parts inside the ",Object(r.mdx)("inlineCode",{parentName:"p"},"lib.rs")," file of our newly created ",Object(r.mdx)("inlineCode",{parentName:"p"},"pallet-kitties"),"."),Object(r.mdx)("p",null,"Every FRAME pallet has:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"A set of ",Object(r.mdx)("inlineCode",{parentName:"li"},"frame_support")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"frame_system")," dependencies."),Object(r.mdx)("li",{parentName:"ul"},"Required ",Object(r.mdx)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/runtime/macros#frame-v2-macros-and-attributes"},"attribute macros")," (i.e. configuration traits, storage items, hooks and function calls).")),Object(r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"We'll be updating additional dependencies as we progress through the next parts of this tutorial."))),Object(r.mdx)("p",null,"In its most bare-bones version, a pallet looks like this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\npub use pallet::*;\n#[frame_support::pallet]\npub mod pallet {\n    use frame_support::pallet_prelude::*;\n    use frame_system::pallet_prelude::*;\n\n    #[pallet::pallet]\n    #[pallet::generate_store(trait Store)]\n    pub struct Pallet<T>(_);\n\n    #[pallet::config]\n    pub trait Config: frame_system::Config {}\n\n    #[pallet::call]\n    impl<T: Config> Pallet<T> {}\n}\n')),Object(r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your turn!")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"Copy over the bare-bones of the pallet into ",Object(r.mdx)("inlineCode",{parentName:"p"},"kitties/src/lib.rs"),"."),Object(r.mdx)("p",{parentName:"div"},Object(r.mdx)("strong",{parentName:"p"},"Hint:")," Each part of this tutorial has a file with incomplete code containing comments to guide you to complete it.\nDownload the ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-how-to-guides/tree/main/static/code/kitties-tutorial"},"template code here")," locally and use it to help you progress through each step!"))),Object(r.mdx)("h3",{id:"3-implement-pallet_kitties-for-your-runtime"},"3. Implement ",Object(r.mdx)("inlineCode",{parentName:"h3"},"pallet_kitties")," for your runtime"),Object(r.mdx)("p",null,"Now that we have a pallet called ",Object(r.mdx)("inlineCode",{parentName:"p"},"pallet-kitties")," we must implement it for our runtime."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Towards the top of ",Object(r.mdx)("inlineCode",{parentName:"li"},"/runtime/src/lib.rs"),", import ",Object(r.mdx)("inlineCode",{parentName:"li"},"pallet_kitties"),":")),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"pub use pallet_kitties;\n")),Object(r.mdx)("p",null,"Remove ",Object(r.mdx)("inlineCode",{parentName:"p"},"pub use pallet_template;")," ","\u2014"," it no longer exists at this point. "),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Then, include this line after the other trait implementations:")),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"impl pallet_kitties::Config for Runtime {}\n")),Object(r.mdx)("p",null,"Be sure to remove the ",Object(r.mdx)("inlineCode",{parentName:"p"},"impl pallet_template::Config for Runtime")," clause entirely as well."),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Since our Kitties pallet doesn't do anything yet, we don't have anything to implement for our runtime! Part II of this series\nwill dive into adding traits to implement for our runtime.")),Object(r.mdx)("p",null,"Before we can test whether our node is set-up correctly, let's specify our Kitties pallet inside ",Object(r.mdx)("inlineCode",{parentName:"p"},"construct_runtime!")," by simply\nreplacing the line corresponding to ",Object(r.mdx)("inlineCode",{parentName:"p"},"pallet_template"),": "),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"/*--snip--*/\n    TemplateModule: pallet_template::{Pallet, Call, Storage, Event<T>}, //<-- Replace this with: 'SubstrateKitties: pallet_kitties::{Module, Call, Config<T>, Storage},'\n/*--snip--*/\n")),Object(r.mdx)("p",null,"Run the following command to build and launch our chain. This can take a little while depending on your machine:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),Object(r.mdx)("p",null,"Assuming everything compiled without error, we can launch our chain and check that it is producing blocks:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},"./target/release/kitties-node --tmp --dev\n")),Object(r.mdx)("p",null,"Works? If not, make sure you've followed the steps to integrate your new pallet to your runtime. If yes, fantastic!"),Object(r.mdx)("p",null,"You don't need to keep your node running. This was just a way to check that your pallet and runtime are\nproperly configured. In the next steps we will start writing the storage items our Kitty dApp will require."),Object(r.mdx)("h3",{id:"4-include-a-storage-item-to-track-all-kitties"},"4. Include a storage item to track all Kitties"),Object(r.mdx)("p",null,"Let's start by adding the most simple logic we can to our runtime: a function which stores a variable in runtime."),Object(r.mdx)("p",null,"To do this we'll use ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageValue.html"},Object(r.mdx)("inlineCode",{parentName:"a"},"StorageValue"))," from Substrate's ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/index.html"},"storage API")," which is a trait that depends\non the storage macro."),Object(r.mdx)("p",null,"All that means for our purposes is that for any storage item we want to declare, we must include ",Object(r.mdx)("inlineCode",{parentName:"p"},"#[pallet::storage]")," beforehand. Using ",Object(r.mdx)("inlineCode",{parentName:"p"},"StorageValue")," as an example, this would look like this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn get_storage_value)]\npub(super) type SomeStorageValue <T: Config> StorageValue <\n    _,\n    u64,\n    ValueQuery,\n>\n")),Object(r.mdx)("p",null,"With that declared, we can use the various functions from Substrate's storage API to read and write to\nstorage. For example, using ",Object(r.mdx)("inlineCode",{parentName:"p"},"get()")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"put()")," would look like:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"    // Get value in storage using the getter function.\n    let storage_value = Self::get_storage_value();\n\n    // Another way to get the value.\n    let storage_value = <SomeStorageValue<T>>::get();\n\n    // Write to storage.\n    <SomeStorageValue<T>>::put(0u64);\n")),Object(r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your turn!")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"Our Kitties dApp will need to keep track of a number of things. The first will be the number of Kitties.\nWrite a storage item to keep track of all Kitties, call it ",Object(r.mdx)("inlineCode",{parentName:"p"},"AllKittiesCount"),"."))),Object(r.mdx)("h3",{id:"5-build-and-check-your-pallet"},"5. Build and check your pallet"),Object(r.mdx)("p",null,"From the previous step, your pallet should contain a storage item called ",Object(r.mdx)("inlineCode",{parentName:"p"},"AllKittiesCount")," which keeps track of a\nsingle ",Object(r.mdx)("inlineCode",{parentName:"p"},"u64")," value. As part of the basic setup, we're doing great!"),Object(r.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"As mentioned in the ",Object(r.mdx)("a",{parentName:"p",href:"overview"},"overview of this tutorial series"),",\nyou'll be implementing a total of 9 storage items which you'll discover as you\nwrite out your pallet's logic in the next parts."))),Object(r.mdx)("p",null,"Before we move on, let's make sure everything compiles. We don't need to rebuild our entire node each time we update our pallet.\nInstead, we can use a command that only builds our pallet. From inside your pallet directory, run the following:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},"cargo build -p pallet-kitties\n")),Object(r.mdx)("p",null,"Does your pallet compile? Well done if it does! If not, go back and check that all the macros are in place and that you've included the\nFRAME dependencies."),Object(r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Congratulations!")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"You've completed the first part of this series. At this stage, you've learnt the various patterns for:"),Object(r.mdx)("ul",{parentName:"div"},Object(r.mdx)("li",{parentName:"ul"},"Customizing the Substrate node template and including a custom pallet."),Object(r.mdx)("li",{parentName:"ul"},"Building a Substrate chain and checking that a target pallet compiles."),Object(r.mdx)("li",{parentName:"ul"},"Declaring and using a ",Object(r.mdx)("inlineCode",{parentName:"li"},"u64")," storage item.")))),Object(r.mdx)("h2",{id:"next-steps"},"Next steps"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Writing a struct in a ",Object(r.mdx)("inlineCode",{parentName:"li"},"StorageMap")," to store details about our Kitties"),Object(r.mdx)("li",{parentName:"ul"},"Using the Randomness trait to create unique Kitties"),Object(r.mdx)("li",{parentName:"ul"},"Creating our pallet's remaining storage items")))}d.isMDXComponent=!0}}]);