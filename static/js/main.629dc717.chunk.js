(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{124:function(t,e,c){},125:function(t,e,c){},133:function(t,e,c){},134:function(t,e,c){},135:function(t,e,c){},136:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),i=c.n(a),o=c(62),r=c.n(o),s=c(13),l=c(4),u=c(3),d=c(7),j=(c(33),function(t){var e=t.as,c=t.component,a=t.className,o=t.children,r=Object(d.a)(t,["as","component","className","children"]);return c?Object(n.jsx)(c,Object(u.a)(Object(u.a)({},Object(u.a)({className:"flex-column ".concat(null!==a&&void 0!==a?a:"")},r)),{},{children:o})):i.a.createElement(e||"div",Object(u.a)({className:"flex-column ".concat(null!==a&&void 0!==a?a:"")},r),o)}),b=function(t){var e=t.as,c=t.component,a=t.className,o=t.children,r=Object(d.a)(t,["as","component","className","children"]);return c?Object(n.jsx)(c,Object(u.a)(Object(u.a)({},Object(u.a)({className:"flex-row ".concat(null!==a&&void 0!==a?a:"")},r)),{},{children:o})):i.a.createElement(e||"div",Object(u.a)({className:"flex-row ".concat(null!==a&&void 0!==a?a:"")},r),o)},m=c(14),p=c(20),h=(c(76),function(t){var e=t.path,c=t.title,a=t.className,i=Object(d.a)(t,["path","title","className"]);return Object(n.jsx)("div",Object(u.a)(Object(u.a)({},i),{},{className:"markdown-file ".concat(null!==a&&void 0!==a?a:""),children:Object(n.jsxs)(s.b,{to:e,className:"markdown-file-link",activeClassName:"markdown-file-link--active",children:[Object(n.jsx)(m.a,{icon:p.c,className:"markdown-file-icon"}),Object(n.jsx)("span",{className:"markdown-file-title",children:c})]})}))}),f=c.p+"static/media/PROJECTS.145385f0.md",O=c.p+"static/media/ABOUT_ME.a84e2976.md",x=c.p+"static/media/WORK_EXPERIENCE.ee756740.md",v=c.p+"static/media/SKILLS.1b34dad4.md",N=[{path:"/about-me",file:O,title:"ABOUT_ME.md"},{path:"/education",file:c.p+"static/media/EDUCATION.cf848a97.md",title:"EDUCATION.md"},{path:"/hobbies",file:c.p+"static/media/HOBBIES.3834a5de.md",title:"HOBBIES.md"},{path:"/page-not-found",file:c.p+"static/media/PAGE_NOT_FOUND.f27f4c4d.md",title:"PAGE_NOT_FOUND.md"},{path:"/projects",file:f,title:"PROJECTS.md"},{path:"/skills",file:v,title:"SKILLS.md"},{path:"/work-experience",file:x,title:"WORK_EXPERIENCE.md"}],g=(c(28),function(t){var e,c=t.className,a=Object(d.a)(t,["className"]),i=Object(l.h)().pathname,o=Object(l.g)();return Object(n.jsx)("div",Object(u.a)(Object(u.a)({},a),{},{className:"editor-groups ".concat(null!==c&&void 0!==c?c:""),children:Object(n.jsx)(h,{onAuxClick:function(t){t.preventDefault(),o.replace("/")},title:(null===(e=N.find((function(t){return t.path===i})))||void 0===e?void 0:e.title)||"unknown",path:i})}))}),k=(c(79),c(36),function(t){var e=t.className,c=t.title;return Object(n.jsx)("span",{className:"tooltip ".concat(null!==e&&void 0!==e?e:""),children:c})}),y=function(t){var e=t.className,c=t.children;return Object(n.jsx)("div",{className:"tooltip-wrapper ".concat(null!==e&&void 0!==e?e:""),children:c})},w=function(t){var e=t.icon,c=t.tooltip,a=t.link;return Object(n.jsx)("li",{className:"activity-bar-item",children:Object(n.jsx)(y,{children:Object(n.jsxs)("a",{href:a,className:"activity-bar-link",children:[Object(n.jsx)(m.a,{className:"activity-bar-icon",icon:e}),Object(n.jsx)(k,{title:c})]})})})},E=c(8),S=c(64),C=[{command:"Show all commands",keybinding:"Ctrl+Shift+P"},{command:"Toggle terminal",keybinding:"Ctrl+Shift+J"},{command:"Find on website",keybinding:"Ctrl+Shift+F"}],T=[{icon:S.a,tooltip:"Dummy item",link:"#"},{icon:E.j,tooltip:"Seach (Yet to be implemented)",link:"#"},{icon:E.f,tooltip:"Source code",link:"https://github.com/Volki312/portfolio"},{icon:E.d,tooltip:"Project issues",link:"https://github.com/Volki312/portfolio/issues"},{icon:p.a,tooltip:"My GitHub",link:"https://github.com/Volki312"},{icon:p.b,tooltip:"My LinkedIn",link:"https://www.linkedin.com/in/josip-volarevic/"}],R=[{icon:E.f,tooltip:"master branch active",text:"master*-"},{icon:E.e,tooltip:"Cute cloud icon"},{icon:E.k,tooltip:"No errors",text:"0"},{icon:E.g,tooltip:"No warrings",text:"0"},{tooltip:"UTF-8 econding",text:"UTF-8",pushRight:!0},{tooltip:"CRLF end of line sequence",text:"CRLF"},{tooltip:"TypeScript React language mode",text:"TypeScript React",reverseTooltip:!0},{icon:E.c,tooltip:"No new notifications",reverseTooltip:!0}],I=function(t){var e=t.className,c=Object(d.a)(t,["className"]);return Object(n.jsx)("aside",Object(u.a)(Object(u.a)({},c),{},{className:"activity-bar ".concat(null!==e&&void 0!==e?e:""),children:Object(n.jsx)("ul",{className:"activity-bar-list flex-column",children:T.map((function(t){return Object(n.jsx)(w,Object(u.a)({},t),t.tooltip)}))})}))},P=c(15),D=c(19),F=c.n(D),L=c(24),A=c(25),_=c.n(A),B=function(){var t=Object(a.useState)(0),e=Object(P.a)(t,2),c=e[0],n=e[1],i=Object(l.h)().pathname,o=Object(a.useState)("root@DESKTOP ~".concat("/"!==i?i:""," $")),r=Object(P.a)(o,2),s=r[0],u=r[1],d=Object(l.g)();return Object(a.useEffect)((function(){u("root@DESKTOP ~".concat("/"!==i?i:""," $"))}),[i]),[{echo:{description:"Echo a passed string.",fn:function(){n(c+1);for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.join(" ")}},ls:{description:"List information about the routes.",fn:function(){return n(c+1),"/"!==i?"":N.reduce((function(t,e,c){return c?"".concat(t,"\t").concat(e.path):e.path}),"")}},cd:{description:"Change the shell working directory.",fn:function(t){if(n(c+1),!t)return"";if(t.startsWith("~/")){var e=t.slice(1);if(N.find((function(t){return t.path===e})))return d.replace(e),""}if("/"===i){if(".."===t||"~"===t)return"";var a=new RegExp("".concat(t,"|\\/").concat(t,"|\\.\\/").concat(t),"gi");return N.find((function(t){return a.test(t.path)}))?(d.replace(t),""):"".concat(t,": No such file or directory")}return".."!==t&&"~"!==t?"".concat(t,": No such file or directory"):(d.replace("/"),"")}},joke:{description:"Hits you up with a random joke.",fn:function(){return Object(L.a)(F.a.mark((function t(){var e,a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(c+2),t.prev=1,t.next=4,_.a.get("https://official-joke-api.appspot.com/jokes/programming/random");case 4:return e=t.sent,a=e.data[0],t.abrupt("return","".concat(a.setup,"\n").concat(a.punchline));case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return","Couldn't reach our joke servers. Try this command some other time!");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},ip:{description:"Check your ip address.",fn:function(){return n(c+1),"I bet your ip address is 127.0.0.1 \ud83d\ude43"}},whoami:{description:"Print the user name associated with the current effective user ID.",fn:function(){return n(c+1),"I don't know who you are, but I sure hope your job title starts with 'IT' and ends with 'recruiter' \ud83d\ude0e"}},whoareyou:{description:"Print Josips basic info.",fn:function(){return n(c+1),"Proud husband and a father, IT student and a full time software engineer \ud83d\udc6a\ud83d\udcbb"}}},s,c,n]},U=c(65),M=c.n(U),J=function(t){t.className;var e=Object(d.a)(t,["className"]),c=B(),a=Object(P.a)(c,4),i=a[0],o=a[1],r=a[2],s=a[3];return Object(n.jsx)("div",Object(u.a)(Object(u.a)({},e),{},{children:Object(n.jsx)(M.a,{autoFocus:!0,disableOnProcess:!0,commands:i,promptLabel:o,noAutoScroll:r<5,inputStyle:{width:"unset"},messageStyle:{color:"#0BE95D"},promptLabelStyle:{color:"#F7DE49"},contentStyle:{boxSizing:"border-box"},style:{borderRadius:0,backgroundColor:"#141414",borderTop:"1px solid #414141"},commandCallback:function(t){var e=document.getElementsByName("react-console-emulator__input")[0];e&&e.focus(),"help"===t.command?s(r+6):"clear"===t.command&&s(0)},welcomeMessage:["Welcome to my portfolio website! \ud83d\udc4b","Type 'help' to get a list of available commands"]})}))},K=(c(124),function(){var t=Object(a.useState)(!0),e=Object(P.a)(t,2),c=e[0],i=e[1],o=Object(l.g)();return Object(n.jsxs)("nav",{className:"folder",children:[Object(n.jsxs)("button",{type:"button",className:"folder-button",onClick:function(){return i(!c)},children:[Object(n.jsx)(m.a,{icon:c?E.a:E.b,className:"folder-icon folder-icon--caret"}),Object(n.jsx)(m.a,{icon:c?E.i:E.h,className:"folder-icon folder-icon--folder"}),Object(n.jsx)("span",{className:"folder-title",children:"portfolio"})]}),c&&N.map((function(t){var e=t.path,c=t.title;return Object(n.jsx)(h,{onAuxClick:function(t){return function(t,e){t.preventDefault(),o.replace(e)}(t,e)},path:e,title:c},e)}))]})}),H=(c(57),function(t){var e=t.className,c=Object(d.a)(t,["className"]);return Object(n.jsxs)("header",Object(u.a)(Object(u.a)({},c),{},{className:"side-bar ".concat(null!==e&&void 0!==e?e:""),children:[Object(n.jsx)("p",{className:"side-bar-title",children:"EXPLORER"}),Object(n.jsx)(K,{})]}))}),W=(c(125),function(t){var e=t.icon,c=t.tooltip,a=t.text,i=t.reverseTooltip,o=t.pushRight;return Object(n.jsx)(j,{as:"div",className:"status-bar-item ".concat(o?"ml-auto":""),children:Object(n.jsxs)(b,{component:y,children:[e&&Object(n.jsx)(m.a,{className:"status-bar-icon",icon:e}),a&&Object(n.jsx)("span",{className:"status-bar-span ".concat(e?"pr-6":"px-6"),children:a}),Object(n.jsx)(k,{title:c,className:i?"tooltip--reverse":""})]})})}),z=function(t){var e=t.className,c=Object(d.a)(t,["className"]);return Object(n.jsx)("footer",Object(u.a)(Object(u.a)({},c),{},{className:"status-bar ".concat(null!==e&&void 0!==e?e:""),children:R.map((function(t){return Object(n.jsx)(W,Object(u.a)({},t),t.tooltip)}))}))},G=function(t){var e=t.children,c=Object(l.h)().pathname;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(b,{style:{height:"calc(100% - 22px)"},children:[Object(n.jsx)(j,{style:{width:50},component:I}),Object(n.jsx)(j,{style:{width:210},component:H}),Object(n.jsxs)(j,{style:{width:"calc(100% - 260px)"},children:["/"!==c&&Object(n.jsx)(b,{style:{height:35},component:g}),Object(n.jsx)(b,{style:{height:"/"===c?"calc(100% - 300px)":"calc(100% - 335px)",position:"relative",paddingTop:10,backgroundColor:"#141414"},children:e}),Object(n.jsx)(b,{style:{height:300},component:J})]})]}),Object(n.jsx)(b,{style:{height:22},component:z})]})},V=c(66),X=c.n(V),$=(c(131),c(132),function(){var t=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return t.current=!0,function(){t.current=!1}})),Object(a.useCallback)((function(){return t.current}),[])}),q=function(t){var e=t.file,c=Object(a.useState)(""),i=Object(P.a)(c,2),o=i[0],r=i[1],s=$(),l=Object(a.useCallback)(Object(L.a)(F.a.mark((function t(){var c,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_()(e);case 2:c=t.sent,n=c.data,s()&&r(n);case 5:case"end":return t.stop()}}),t)}))),[e,s]);return Object(a.useEffect)((function(){l()}),[l]),Object(n.jsx)(X.a,{mode:"markdown",theme:"twilight",fontSize:14,showPrintMargin:!1,tabSize:2,value:o,style:{width:"100%",height:"100%"}})},Y=(c(133),function(t){var e=t.command,c=t.keybinding.split("+");return Object(n.jsxs)("dl",{children:[Object(n.jsx)("dt",{children:e}),Object(n.jsx)("dd",{children:Object(n.jsx)("div",{className:"keyboard-shortcut",children:c.map((function(t,e){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)("span",{className:"keyboard-shortcut-key",children:t}),e!==c.length-1&&Object(n.jsx)("span",{className:"keyboard-shortcut-separator",children:"+"})]},t)}))})})]})}),Q=(c(134),function(){return Object(n.jsx)("div",{className:"instructions",children:Object(n.jsx)("div",{className:"instructions-box",children:C.map((function(t){return Object(a.createElement)(Y,Object(u.a)(Object(u.a)({},t),{},{key:t.keybinding}))}))})})}),Z=(c(135),function(){return Object(n.jsxs)("div",{className:"homepage",children:[Object(n.jsx)("div",{className:"homepage-background"}),Object(n.jsx)(Q,{})]})}),tt=function(){return Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{path:"/",exact:!0,children:Object(n.jsx)(Z,{})}),N.map((function(t){return Object(n.jsx)(l.b,{path:t.path,exact:!0,children:Object(n.jsx)(q,Object(u.a)({},t))},t.path)})),Object(n.jsx)(l.a,{from:"*",to:"/page-not-found"})]})},et=function(){return Object(n.jsx)(G,{children:Object(n.jsx)(tt,{})})};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(et,{})})}),document.getElementById("root"))},28:function(t,e,c){},33:function(t,e,c){},36:function(t,e,c){},57:function(t,e,c){},76:function(t,e,c){},79:function(t,e,c){}},[[136,1,2]]]);
//# sourceMappingURL=main.629dc717.chunk.js.map