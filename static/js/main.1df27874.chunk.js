(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(22),r=a.n(i),o=(a(35),a(3)),l=(a(36),a(28)),d=a(5),m=a(23),j=a(24),u=a(29),b=a(27),h=(s.a.Component,a(11)),g=a(9),O=function(){var e=Object(c.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(g.a)(e,2),a=t[0],s=t[1],i=function(e){s(Object(d.a)(Object(d.a)({},a),{},Object(h.a)({},e.target.id,e.target.value)))},r=a.firstName,o=a.lastName,l=a.email,m=a.password;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"Register Form"}),Object(n.jsxs)("form",{id:"registration-form","data-ms-form":"signup",children:[Object(n.jsx)("label",{htmlFor:"fname",children:"First name:"}),Object(n.jsx)("input",{type:"text",id:"firstName",name:"fname",onChange:i,value:r,required:!0,"data-ms-member":"first-name"}),Object(n.jsx)("label",{htmlFor:"lname",children:"Last name:"}),Object(n.jsx)("input",{type:"text",id:"lastName",name:"lname",onChange:i,value:o,required:!0,"data-ms-member":"last-name"}),Object(n.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(n.jsx)("input",{type:"email",id:"email",name:"email",onChange:i,value:l,required:!0,"data-ms-member":"email"}),Object(n.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(n.jsx)("input",{type:"password",id:"password",name:"password",onChange:i,value:m,required:!0,"data-ms-member":"password"}),Object(n.jsx)("button",{onClick:function(e){localStorage.setItem("loggedInAs",l)},type:"submit",children:"Submit Registration Information"})]})]})},p=function(){var e=Object(c.useState)({email1:"",password1:""}),t=Object(g.a)(e,2),a=t[0],s=t[1],i=function(e){s(Object(d.a)(Object(d.a)({},a),{},Object(h.a)({},e.target.id,e.target.value)))},r=a.email1,o=a.password1;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"Sign In Form"}),Object(n.jsxs)("form",{id:"sign-in-form","data-ms-form":"login",onSubmit:function(e){return e.preventDefault()},children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(n.jsx)("input",{type:"email",id:"email1",name:"email",onChange:i,value:r,required:!0,"data-ms-member":"email"}),Object(n.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(n.jsx)("input",{type:"password",id:"password1",name:"password",onChange:i,value:o,required:!0,"data-ms-member":"password"}),Object(n.jsx)("button",{type:"submit","data-ms-form":"login",onClick:function(e){localStorage.setItem("loggedInAs",r)},children:"Submit Login Information"})]}),Object(n.jsx)("a",{href:"#/ms/password-reset",children:"Forgot Password?"})]})},x=function(e){var t=e.onClick,a=e.className,c=e.itemName;return Object(n.jsx)("li",{onClick:t,className:a,children:c})},f=a(17),v=a(19),w=(a(42),function(e){var t=e.className,a=e.onClick,c=e.theme,s=e.expand;return Object(n.jsxs)("div",{className:"toggle ".concat(s||""),children:[Object(n.jsx)(f.a,{icon:v.b,style:{color:"white"}}),Object(n.jsx)("div",{className:"toggle-slider ".concat(t," ").concat(c),onClick:a,children:Object(n.jsx)("div",{className:"toggle-circle"})}),Object(n.jsx)(f.a,{icon:v.a,style:{color:"white"}})]})}),k=(a(43),function(e){var t=e.items,a=e.theme,c=e.setTheme,s=e.expand;return Object(n.jsxs)("ul",{className:"list ".concat(s).concat(a),children:[t.map((function(e){return Object(n.jsx)("li",{children:e},e)})),Object(n.jsx)(w,{className:"dark-mode ".concat(s),onClick:function(e){e.preventDefault();var t=e.target.className.split(" ");(t.includes("toggle-slider")||t.includes("toggle-circle"))&&(window.localStorage.setItem("theme","day"===a?"night":"day"),c("day"===a?"night":"day"))},theme:a,expand:s})]})}),y=(a(44),function(e){var t=Object(c.useState)(""),a=Object(g.a)(t,2),s=a[0],i=a[1],r=e.items,o=e.theme,l=e.setTheme,d=e.id;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("button",{id:d,className:"hamburger-menu",onClick:function(e){e.preventDefault(),("hamburger-toggle"===e.target.id||e.target.className.split(" ").includes("bar"))&&i(s?"":"expand ")},children:[Object(n.jsx)("div",{className:"bar top"}),Object(n.jsx)("div",{className:"bar"}),Object(n.jsx)("div",{className:"bar bottom"})]}),Object(n.jsx)(k,{items:r,theme:o,setTheme:l,expand:s})]})}),N=a.p+"static/media/docker-logo.19cb226b.svg",C=(a(45),function(e){var t=Object(c.useState)(""),a=Object(g.a)(t,2),s=a[0],i=a[1],r=e.setTheme,o=e.theme,l=["Home","Guides","Product manuals","Reference","Articles"];"day"===o?document.body.classList.remove("night"):document.body.classList.add("night");var d=function(e){var t=e.target.className.split(" ");t.includes("toggle-slider")||t.includes("toggle-circle")?(window.localStorage.setItem("theme","day"===o?"night":"day"),r("day"===o?"night":"day")):i(e.target.innerText)};return Object(n.jsx)("nav",{className:o,children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("img",{src:N,alt:"company-logo"}),Object(n.jsx)("ul",{className:"nav-items-container",children:l.map((function(e){return Object(n.jsx)(x,{itemName:e,className:s===e?"underline":"",onClick:d},e)}))}),Object(n.jsx)(w,{className:"dark-mode",onClick:d,theme:o}),Object(n.jsx)(y,{id:"hamburger-toggle",items:l,setTheme:r,theme:o})]})})}),S=(a(46),function(e){var t=e.id,a=e.imgUrl,c=e.title,s=e.description,i=e.theme;return Object(n.jsxs)("div",{className:"card-link ".concat(i),children:[Object(n.jsx)("img",{src:a,alt:c}),Object(n.jsx)("h3",{children:c}),Object(n.jsx)("p",{children:s})]},t)}),D=(a(47),a.p+"static/media/video.337f24eb.svg"),F=[{id:1,imgUrl:a.p+"static/media/rocket.c31673b9.svg",title:"Get started",description:"Learn Docker basics and the benefits of containerizing your applications."},{id:2,imgUrl:a.p+"static/media/download-docker.9c7c43f3.svg",title:"Download and install",description:"Download and install Docker on your machine in a few easy steps."},{id:3,imgUrl:a.p+"static/media/guides.9dd2c586.svg",title:"Guides",description:"Learn how to set up your Docker environment and start containerizing your applications."},{id:4,imgUrl:a.p+"static/media/whats-new.c997023e.svg",title:"What's new?",description:"Learn about the cool new features, updates, and bug fixes."},{id:5,imgUrl:a.p+"static/media/manuals.dad70296.svg",title:"Product manuals",description:"Browse through the manuals and learn how to use Docker products."},{id:6,imgUrl:a.p+"static/media/reference.10a980b6.svg",title:"Reference",description:"Browse through the CLI and API reference documentation."}],I={7:"Write a Dockerfile",8:"Write a Docker Compose file",9:"Share my image on Docker Hub",10:"Build and run an image",11:"Use multi-stage builds",12:"Run a command in a container"},L={13:"Manage container networking",14:"Work with volumes and bind mounts",15:"Configure the Docker daemon",16:"Manage Docker objects",17:"Scale apps using Kubernetes",18:"Scale apps using Swarm"},T={19:"How to get started with Docker",20:"How to build and test your Docker images in the Cloud",21:"Simplify all the things with Docker Compose"},P=function(e){var t=e.theme,a=Object.entries(I),c=Object.entries(L),s=Object.entries(T);return Object(n.jsxs)("section",{className:"introduction-resources container ".concat(t),children:[Object(n.jsx)("div",{className:"search",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{htmlFor:"search-bar",children:Object(n.jsx)("h2",{children:"What can we help you find?"})}),Object(n.jsx)("input",{type:"text",name:"search-bar",placeholder:"Search for guides, terms, commands and more..."})]})}),Object(n.jsx)("div",{className:"links-1",children:F.map((function(e){return Object(n.jsx)(S,Object(d.a)(Object(d.a)({},e),{},{theme:t}),e.id)}))}),Object(n.jsxs)("div",{className:"links-2",children:[Object(n.jsxs)("div",{className:"how-do-i ".concat(t),children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h3",{children:"How do I?"}),Object(n.jsx)("p",{children:"Check out the following topics to learn how to build, run, and deploy your applications using Docker."})]}),Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)("ul",{children:a.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:e[1]})},e[0])}))}),Object(n.jsx)("ul",{children:c.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:e[1]})},e[0])}))})]})]}),Object(n.jsxs)("div",{className:"popular-videos ".concat(t),children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h3",{children:"Popular videos"}),Object(n.jsx)("p",{children:"Watch the most popular videos from DockerCon."})]}),s.map((function(e){return Object(n.jsxs)("div",{className:"video-link list",children:[Object(n.jsx)("img",{src:D,alt:"video"}),Object(n.jsx)("p",{children:e[1]})]},e[0])}))]})]})]})},U=function(){var e=Object(c.useState)(window.localStorage.getItem("theme")||"day"),t=Object(g.a)(e,2),a=t[0],s=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C,{setTheme:s,theme:a}),Object(n.jsx)(P,{theme:a})]})};var W=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/react-sandbox",render:function(){return Object(n.jsx)("h1",{children:"Welcome To Bradley's React Sandbox"})}}),Object(n.jsx)(o.a,{path:"/react-sandbox/docker",render:function(){return Object(n.jsx)(U,{})}}),Object(n.jsx)(o.a,{path:"/react-sandbox/login",render:function(){return Object(n.jsx)(p,{})}}),Object(n.jsx)(o.a,{path:"/react-sandbox/register",render:function(){return Object(n.jsx)(O,{})}})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))},B=a(26);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(B.a,{children:Object(n.jsx)(W,{})})}),document.getElementById("root")),q()}},[[53,1,2]]]);
//# sourceMappingURL=main.1df27874.chunk.js.map