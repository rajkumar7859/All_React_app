(this["webpackJsonptyping-test"]=this["webpackJsonptyping-test"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(8),r=c.n(n),s=(c(13),c(6)),i=c(2),j=c(5),l=c.n(j),u=c(0),b=function(){var e=Object(a.useState)(l()(8)),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(new Array(50).fill(0)),j=Object(i.a)(r,2),b=j[0],o=j[1],O=Object(a.useState)(""),h=Object(i.a)(O,2),d=h[0],f=h[1],x=Object(a.useState)(0),v=Object(i.a)(x,2),g=v[0],m=v[1],S=Object(a.useState)(0),p=Object(i.a)(S,2),N=p[0],y=p[1],w=Object(a.useState)(0),M=Object(i.a)(w,2),k=M[0],A=M[1],C=Object(a.useState)(""),I=Object(i.a)(C,2),E=I[0],T=I[1],J=Object(a.useState)(!1),P=Object(i.a)(J,2),R=P[0],W=P[1],B=Object(a.useState)(300),F=Object(i.a)(B,2),H=F[0],K=F[1],q=Object(a.useState)(0),z=Object(i.a)(q,2),D=z[0],G=z[1],L=Object(a.useState)(0),Q=Object(i.a)(L,2),U=Q[0],V=Q[1];function X(e){if(!(g>=c.length))if(!1===R&&1===e.target.value.length&&W(!0)," "===e.target.value[e.target.value.length-1]){var t=e.target.value.trim(),a=c[g];A(k+1);var r=Object(s.a)(b);t===a?(y(N+1),r[g]=1):r[g]=-1,o(r),g===c.length-1&&function(){var e=l()(8);n([].concat(Object(s.a)(c),Object(s.a)(e)))}(),f(""),m(g+1)}else f(e.target.value)}function Y(e){return e===g?"yellow":-1===b[e]?"red":1===b[e]?"green":"white"}Object(a.useEffect)((function(){var e;return R&&(e=setInterval((function(){K((function(e){return e-1}))}),1e3)),0===H&&(W(!1),clearInterval(e),function(){var e=(300-H)/60,t=Math.floor(N/e);T(t+" WPM"),t>D&&G(t)}()),function(){return clearInterval(e)}}),[R,H]),Object(a.useEffect)((function(){R&&d.length>0&&V((function(e){return e+1}))}),[d,R]);var Z=N/c.length*100||0;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{children:"Typing Test"}),Object(u.jsxs)("div",{className:"textMain",children:[Object(u.jsxs)("h2",{className:"text",children:["High Score: ",D," WPM"]}),Object(u.jsxs)("h2",{className:"text",children:["Correct: ",N," "]}),Object(u.jsxs)("h2",{className:"text",children:["Accuracy: ",Z.toFixed(2),"%"]}),Object(u.jsxs)("h2",{className:"text",children:["Time Remaining:"," ",Math.floor(H/60).toString().padStart(2,"0"),":",(H%60).toString().padStart(2,"0")]})]}),E&&Object(u.jsx)("h2",{className:"result",children:E}),Object(u.jsx)("button",{className:"button",onClick:function(){var e=l()(8);n(e),f(""),m(0),y(0),T(""),W(!1),A(0),K(300),o(new Array(50).fill(0)),V(0)},children:"Reset"})]}),Object(u.jsx)("div",{className:"text-box",children:c.map((function(e,t){return Object(u.jsx)("div",{className:"word",style:{color:Y(t)},children:e})}))}),Object(u.jsx)("input",{disabled:0===H,value:d,onChange:function(e){return X(e)},className:"input",placeholder:"Start your practice"}),Object(u.jsxs)("h3",{className:"key-count",children:["Key Count: ",U]})]})};function o(){return Object(u.jsx)("div",{children:Object(u.jsx)(b,{})})}var O=document.getElementById("root");r.a.render(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(o,{})}),O)}},[[15,1,2]]]);
//# sourceMappingURL=main.48560e5d.chunk.js.map