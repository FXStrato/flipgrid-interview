(this.webpackJsonpflipgrid=this.webpackJsonpflipgrid||[]).push([[5],{30:function(e,s,t){"use strict";var r=t(3),i=function(){return Object(r.jsx)("svg",{className:"loading-zoom",xmlns:"http://www.w3.org/2000/svg",width:"30px",height:"30px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(r.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:"#fff",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",children:Object(r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})})},a=function(e){var s=e.className,t=e.disabled,a=e.loading,n=e.text,c=e.onClick;return Object(r.jsx)("button",{className:"button hvr-shadow".concat(s?" ".concat(s):""),onClick:c,disabled:t,children:a?Object(r.jsx)(i,{}):n})};a.defaultProps={disabled:!1,loading:!1};s.a=a},35:function(e,s,t){},39:function(e,s,t){"use strict";t.r(s);var r=t(3),i=t(32),a=t(0),n=t(37),c=t(1),o=t(30),l=(t(35),function(){var e=Object(a.useState)(!1),s=Object(i.a)(e,2),t=s[0],l=s[1],d=Object(n.a)(),j=d.register,m=d.handleSubmit,b=d.errors,p=Object(c.f)();return Object(r.jsxs)("div",{className:"signup form-box",children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)("span",{style:{fontWeight:500},children:"Let's"}),Object(r.jsx)("br",{}),"Sign Up"]}),Object(r.jsx)("p",{children:"Use the form below to sign up for this super awesome service. You're only a few steps away!"}),Object(r.jsxs)("form",{onSubmit:m((function(e){l(!0),setTimeout((function(){return p.push({pathname:"./confirmation",state:e})}),2e3)})),children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"firstname",children:"First Name"}),Object(r.jsx)("input",{className:"form-box__input",name:"firstname",id:"firstname",type:"text",ref:j({required:"First name required"})}),b.firstname&&Object(r.jsx)("span",{className:"error-text",children:b.firstname.message})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(r.jsx)("input",{className:"form-box__input",name:"email",type:"email",id:"email",ref:j({required:"Email is required"})}),b.email&&Object(r.jsx)("span",{className:"error-text",children:b.email.message})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{className:"form-box__input",name:"password",type:"password",id:"password",ref:j({required:"Password is required"})}),b.password&&Object(r.jsx)("span",{className:"error-text",children:b.password.message})]}),Object(r.jsx)("div",{className:"align-right",children:Object(r.jsx)(o.a,{text:"Sign Up",loading:t,disabled:t})})]})]})});s.default=function(){return Object(r.jsx)(l,{})}}}]);
//# sourceMappingURL=5.54e19a09.chunk.js.map