import{_ as c}from"./entry.9f988dc0.js";import{v as u,t as d}from"./index.39fc699e.js";import"./MDCRenderer.fc50a4ca.js";import"./_commonjsHelpers.725317a4.js";import"./node.f7b4ab96.js";import"./Card.e55aed8e.js";const f={theme:{default:"github-light",dark:"github-dark"},async highlighter(i,r,t,o){var n,s;if(window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser")return c(()=>import("./highlighter.70c79e67.js"),["./highlighter.70c79e67.js","./entry.9f988dc0.js","./entry.bd92db2f.css"],import.meta.url).then(({useShikiHighlighter:e})=>e().getHighlightedAST(i,r,t,{highlights:o}));try{return await $fetch("/api/_mdc/highlight",{params:{code:i,lang:r,theme:JSON.stringify(t),highlights:JSON.stringify(o)}})}catch(e){if(((n=e==null?void 0:e.response)==null?void 0:n.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,i,r,t,o)}return Promise.resolve({tree:[{type:"text",value:i}],className:"",style:""})}};function y(i={}){const r={...f,...i};return async t=>{const o=[],n=[];u(t,s=>{var e;return["pre","code"].includes(s.tagName)&&!!((e=s.properties)!=null&&e.language)},s=>{const e=s,m=r.highlighter(d(s),e.properties.language,r.theme,e.properties.highlights??[]).then(({tree:h,className:p,style:a,inlineStyle:g})=>{var l;e.properties.className=((e.properties.className||"")+" "+p).trim(),e.properties.style=((e.properties.style||"")+" "+g).trim(),((l=e.children[0])==null?void 0:l.tagName)==="code"?e.children[0].children=h:e.children=h[0].children||h[0],a&&n.push(a)});o.push(m)}),o.length&&(await Promise.all(o),t.children.push({type:"element",tagName:"style",children:[{type:"text",value:_(n.join(""))}],properties:{}}))}}const _=i=>{const r=i.split("}").filter(t=>!!t.trim()).map(t=>t.trim()+"}");return Array.from(new Set(r)).join("")},x={},P={highlight:{instance:y,options:{src:"/home/runner/work/docs_ui_pro/docs_ui_pro/node_modules/.pnpm/@nuxtjs+mdc@0.2.8/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"}}},b={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"},preload:["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"]};export{b as highlight,P as rehypePlugins,x as remarkPlugins};
