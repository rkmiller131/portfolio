"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[26],{8026:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var r=a(7294),i=a(1892),n=a(6977),o=a(9856),s=a(5295),c=a(9161),d=a(7797),l=a(2643),p=a(4962),m=a(6914),g=a(2658),h=a(9591);function u({project:e}){const t=(0,h.Fg)();return r.createElement(s.Z,{sx:{background:"transparent"}},r.createElement(d.Z,null,r.createElement(p.Z,{component:"video",alt:"project prieview video",src:e.src,controls:!0})),r.createElement(l.Z,{sx:{background:t?"#3E3744":"#FAFAFA","@media (max-width: 900px)":{padding:"10px"},"@media (max-width: 450px)":{padding:"8px"}}},r.createElement(g.Z,{gutterBottom:!0,variant:"h5",component:"div",sx:{color:t?"#9b98ca":"#5e253c",fontFamily:"Jua, sans-serif","@media (max-width: 900px)":{fontSize:"1rem"},"@media (max-width: 450px)":{fontSize:"1rem"}}},e.title),r.createElement(g.Z,{variant:"body2",color:"text.secondary",sx:{color:t?"#9b98ca":"#5e253c",fontFamily:"Play, sans-serif","@media (max-width: 900px)":{fontSize:"0.65rem"}}},e.description)),r.createElement(c.Z,null,r.createElement("a",{href:e.github,target:"blank"},r.createElement(m.Z,{size:"small",sx:{color:t?"#9c7cac":"#eda0c5",textDecoration:"underline"},"aria-label":"Link to the project's GitHub repository"},"Github")),e.link&&r.createElement("a",{href:e.link,target:"blank"},r.createElement(m.Z,{size:"small",sx:{color:t?"#9c7cac":"#eda0c5",textDecoration:"underline"},"aria-label":"Link to the deployed app"},"Live Demo"))))}function b({project:e,className:t}){const a=(0,r.useRef)(null),{scrollYProgress:s}=(0,i.v)({target:a,offset:["0 1","1.5 1"]}),c="left-bubble"===t?[1,0]:[0,1],d="left-bubble"===t?[-100,0]:[0,100];return r.createElement(n.E.div,{ref:a,style:{x:(0,o.H)(s,c,d)},className:t},r.createElement(u,{project:e}))}var f=a(3379),x=a.n(f),j=a(7795),y=a.n(j),w=a(569),v=a.n(w),k=a(3565),E=a.n(k),S=a(9216),N=a.n(S),z=a(4589),C=a.n(z),A=a(6995),P={};function Z(){const[e,t]=(0,r.useState)(i()),a=(0,h.Fg)();function i(){return{width:window.innerWidth,height:window.innerHeight}}(0,r.useEffect)((()=>{const e=()=>{t(i())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[e]);const n=[{title:"Paper Cat Games",description:"A custom Content Management System (CMS) designed for an indie game studio and made with React and CSS modules to create directly editable components and page layouts through an admin interface. Leveraged Next.js's dynamic routes to add new pages each time the admin creates a blog post.",src:"https://res.cloudinary.com/dnr41r1lq/video/upload/v1702160880/PapercatAdminDemo_zaar0r.mp4",github:"https://github.com/Paper-Studios/cms-papercat",link:"https://papercatgames.com/",id:198},{title:"Styl Forge",description:"Translated UI wireframe design into a SPA, creating a fractional 5-star rating system and product breakdown charts with vanilla CSS. Employed industry standard testing libraries such as Jest and RTL, achieving 80% code coverage for unit and integration tests. Enabled photo uploads in URL format via externally hosted base64 data to address backend compatibility issues.",src:"https://res.cloudinary.com/dnr41r1lq/video/upload/v1692139856/ShortenedFECDemo_vyagyn.mp4",github:"https://github.com/CBC-Ecommerce/styl-forge",link:"http://54.177.180.141:3000/",id:567},{title:"Dog Age Calculator",description:"A fun app for converting a dog's age into the human equivalent using two different formulas (it's a little more than just the age times 7). Created over a holiday weekend using an accessible, mobile-first approach.",src:"https://res.cloudinary.com/dnr41r1lq/video/upload/v1703956908/dogAgeDemo_vughie.mp4",github:"https://github.com/rkmiller131/dog-age-calculator",link:"https://calculatedogage.netlify.app/",id:7922}],o=[{title:"WhimsiWorld",description:"Pioneered the inception of a collaborative, turn-based creative writing platform for storytelling with friends using multimedia assets, community engagement, and competition. Created over 100 visual assets and story packs using Photoshop, Figma, generative AI, and styled the storyboard home page with React and Tailwind CSS to ensure a cohesive and engaging user experience.",src:"https://res.cloudinary.com/dnr41r1lq/video/upload/v1695477373/WhimsiWorldDemo_mvdoxy.mp4",github:"https://github.com/WhimsWorld/BlueOcean",id:222},{title:"OldSkool CFVanguard",description:"Wrote a script to generate a JSON file containing 1000+ card Ids and names categorized by deck release dates, sourced from a CardFight!! Vanguard API. Utilized this JSON data to access specific card details from an external API, implementing object mapping techniques to populate a MongoDB database. Employed scheduled annotation for the front-end to fetch daily random cards at 9 a.m. PST. Made in Java/Spring MVC.",src:"https://res.cloudinary.com/dnr41r1lq/video/upload/v1692131215/cfVanguardDemo_pyu7nq.mp4",github:"https://github.com/oldskool-vg/oldskoolbackend",id:123},{title:"LifeTrack Labs",description:"A minimum viable product (MVP) created in 2.5 days as a prototype for a blood lab interpretation app. A passion project that I want the world to have; an app that uses unbiased research to establish correlations between blood lab results and lifestyle choices. Open to collab? Contact me!",src:"https://res.cloudinary.com/dnr41r1lq/video/upload/v1692147931/LifeTrackDemo_1_oepqcq.mp4",github:"https://github.com/rkmiller131/LifeTrack-Labs",id:789}];return r.createElement("section",{id:"projects",className:a?"projects dark":"projects"},r.createElement("div",{className:"project-grid"}),r.createElement("div",{className:"slanted-figure-bg"}),r.createElement("div",{className:a?"slanted-figure dark":"slanted-figure"}),r.createElement("div",{className:"projects-container"},r.createElement("article",{className:a?"project-column lefty dark":"project-column lefty"},e.width<900?n.map((e=>r.createElement("div",{className:"left-bubble",key:e.id},r.createElement(u,{project:e})))):n.map((e=>r.createElement(b,{project:e,className:"left-bubble",key:e.id})))),r.createElement("article",{className:a?"project-column righty dark":"project-column righty"},e.width<900?o.map(((e,t)=>r.createElement("div",{className:"right-bubble",key:t},r.createElement(u,{project:e})))):o.map(((e,t)=>r.createElement(b,{project:e,className:"right-bubble",key:t}))))),r.createElement("div",{className:"line-extension-container"},r.createElement("div",{className:a?"line-extension dark":"line-extension"}),r.createElement("div",{className:"placeholder-col"})))}P.styleTagTransform=C(),P.setAttributes=E(),P.insert=v().bind(null,"head"),P.domAPI=y(),P.insertStyleElement=N(),x()(A.Z,P),A.Z&&A.Z.locals&&A.Z.locals},6995:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(8081),i=a.n(r),n=a(3645),o=a.n(n)()(i());o.push([e.id,'.projects{background:linear-gradient(#9c7cac, #eda0c5);color:#fafafa;display:flex;flex-direction:column;position:relative}.projects .project-grid{width:100%;height:100%;position:absolute;background-size:40px 40px;background-image:linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)}.projects .slanted-figure-bg{background-color:rgba(7,0,0,.25);width:100%;height:100%;position:absolute;clip-path:polygon(57% 0, 100% 0, 100% 7%, 66% 7%)}@media screen and (max-width: 1024px){.projects .slanted-figure-bg{clip-path:polygon(54% 0, 100% 0, 100% 5%, 64% 5%)}}@media screen and (max-width: 900px){.projects .slanted-figure-bg{clip-path:polygon(55% 0, 100% 0, 100% 7%, 63% 7%)}}@media screen and (max-width: 770px){.projects .slanted-figure-bg{clip-path:polygon(52% 0, 100% 0, 100% 7%, 62% 7%)}}@media screen and (max-width: 570px){.projects .slanted-figure-bg{clip-path:polygon(48% 0, 100% 0, 100% 3%, 62% 3%)}}.projects .slanted-figure-bg::after{content:"Projects";color:#fafafa;position:absolute;font-family:"Play",sans-serif;font-size:42px;right:16%;top:45px;z-index:3}@media screen and (max-width: 1550px){.projects .slanted-figure-bg::after{right:15%}}@media screen and (max-width: 1450px){.projects .slanted-figure-bg::after{font-size:36px}}@media screen and (max-width: 1280px){.projects .slanted-figure-bg::after{right:16%}}@media screen and (max-width: 1024px){.projects .slanted-figure-bg::after{font-size:30px;top:20px}}@media screen and (max-width: 900px){.projects .slanted-figure-bg::after{right:15%}}@media screen and (max-width: 770px){.projects .slanted-figure-bg::after{top:25px;font-size:26px;right:14%}}@media screen and (max-width: 500px){.projects .slanted-figure-bg::after{right:10%;font-size:24px}}@media screen and (max-width: 375px){.projects .slanted-figure-bg::after{top:20px;font-size:22px}}.projects .slanted-figure{align-self:flex-end;position:absolute;background-color:#fafafa;clip-path:polygon(56% 0, 100% 0, 100% 8%, 65% 8%, 56% 0, 61% 1%, 66% 6%, 97% 6%, 97% 1%, 60% 1%);height:100%;width:100%;margin:-2px}@media screen and (max-width: 1280px){.projects .slanted-figure{clip-path:polygon(51% 0, 100% 0, 100% 8%, 62% 8%, 51% 0, 58% 1%, 64% 6%, 97% 6%, 97% 1%, 58% 1%)}}@media screen and (max-width: 1024px){.projects .slanted-figure{clip-path:polygon(51% 0, 100% 0, 100% 6%, 63% 6%, 53% 0, 58% 0, 65% 4%, 97% 4%, 97% 0, 55% 0)}}@media screen and (max-width: 900px){.projects .slanted-figure{clip-path:polygon(49% 0, 100% 0, 100% 8%, 62% 8%, 54% 0, 58% 0, 64% 6%, 97% 6%, 97% 0, 58% 0)}}@media screen and (max-width: 770px){.projects .slanted-figure{clip-path:polygon(51% 0, 100% 0, 100% 8%, 62% 8%, 51% 0, 58% 1%, 64% 6%, 97% 6%, 97% 1%, 58% 1%)}}@media screen and (max-width: 570px){.projects .slanted-figure{clip-path:polygon(42% 0, 100% 0, 100% 3%, 59% 3%, 42% 0, 50% 0.5%, 62% 2.5%, 97% 2.5%, 97% 0.5%, 50% 0.5%)}}.projects .slanted-figure.dark{background-color:#202123}.projects .projects-container{display:flex;justify-content:center;padding:15% 5% 0 5%}@media screen and (max-width: 750px){.projects .projects-container{padding:15% 2% 0 2%}}@media screen and (max-width: 600px){.projects .projects-container{padding:0;margin-top:30%}}.projects .projects-container .project-column{display:flex;flex-direction:column;height:100%;width:100%}@media screen and (max-width: 600px){.projects .projects-container{flex-direction:column}}.projects .projects-container .lefty{align-items:flex-end;margin-top:-20%;padding-top:10%;border-right:8px solid #fafafa}@media screen and (max-width: 900px){.projects .projects-container .lefty{border:none;align-items:center;margin-top:-10%;padding:0}}@media screen and (max-width: 600px){.projects .projects-container .lefty{margin:0}}.projects .projects-container .lefty.dark{border-right:8px solid #202123}@media screen and (max-width: 900px){.projects .projects-container .lefty.dark{border:none;align-items:center;margin-top:-10%;padding:0}}@media screen and (max-width: 600px){.projects .projects-container .lefty.dark{margin:0}}.projects .projects-container .lefty .left-bubble{display:flex;justify-content:center;padding:5%;margin-bottom:50px;width:75%;background:rgba(7,0,0,.25);border-radius:8%}@media screen and (max-width: 1024px){.projects .projects-container .lefty .left-bubble{width:85%}}@media screen and (max-width: 900px){.projects .projects-container .lefty .left-bubble{width:90%}}@media screen and (max-width: 750px){.projects .projects-container .lefty .left-bubble{width:95%}}@media screen and (max-width: 600px){.projects .projects-container .lefty .left-bubble{width:75%}}@media screen and (max-width: 375px){.projects .projects-container .lefty .left-bubble{width:85%}}.projects .projects-container .righty{align-items:flex-start}@media screen and (max-width: 900px){.projects .projects-container .righty{align-items:center;margin-top:5%}}@media screen and (max-width: 600px){.projects .projects-container .righty{margin:0}}.projects .projects-container .righty .right-bubble{display:flex;justify-content:center;padding:5%;margin-bottom:50px;width:75%;background:rgba(7,0,0,.25);border-radius:8%}@media screen and (max-width: 1024px){.projects .projects-container .righty .right-bubble{width:85%}}@media screen and (max-width: 900px){.projects .projects-container .righty .right-bubble{width:90%}}@media screen and (max-width: 750px){.projects .projects-container .righty .right-bubble{width:95%}}@media screen and (max-width: 600px){.projects .projects-container .righty .right-bubble{width:75%}}@media screen and (max-width: 375px){.projects .projects-container .righty .right-bubble{width:85%}}.projects .line-extension-container{width:100%;height:25px;display:flex}.projects .line-extension-container .line-extension{border-right:8px solid #fafafa;margin-top:-15%;width:100%}@media screen and (max-width: 900px){.projects .line-extension-container .line-extension{border:none}}.projects .line-extension-container .line-extension.dark{border-right:8px solid #202123}@media screen and (max-width: 900px){.projects .line-extension-container .line-extension.dark{border:none}}.projects .line-extension-container .placeholder-col{width:100%;height:100%}.projects.dark{background:linear-gradient(#9c7cac, #202123);color:#202123}',""]);const s=o}}]);