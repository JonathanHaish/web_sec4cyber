(this.webpackJsonpabout=this.webpackJsonpabout||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(0),i=n.n(a),r=n(16),c=n.n(r),o=(n(60),n(61),n(22)),l=n(23),d=n(18),h=n(28),j=n(27),b=n(79),x=n(78),u=n(76),m=n(77),p=n(75),O=(n(49),n(73)),y=n(81),f=n(80),g=n(74),v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).toggle=s.toggle.bind(Object(d.a)(s)),s.onMouseEnter=s.onMouseEnter.bind(Object(d.a)(s)),s.onMouseLeave=s.onMouseLeave.bind(Object(d.a)(s)),s.state={dropdownOpen:!1},s}return Object(l.a)(n,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"formatDiv",value:function(){return!0===this.state.dropdownOpen?{fontSize:24,backgroundColor:"white",color:"black",borderColor:"black"}:{fontSize:24,backgroundColor:"white",color:"black",borderColor:"white"}}},{key:"render",value:function(){return Object(s.jsxs)(O.a,{className:"dropDwon",style:{marginLeft:50},onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(s.jsx)(y.a,{style:this.formatDiv(),children:this.props.name}),Object(s.jsxs)(f.a,{children:[this.props.list.map((function(e){return Object(s.jsx)(g.a,{style:{fontSize:20},children:Object(s.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/"+e+"/",children:e})})})),";"]})]})}}]),n}(a.Component),C=n(52),w=n.n(C),S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={dropdownOpen:!1,listI:["Automotive & Transportion","Industries & Energey","Emergency & Defense","Enterprise","Consumer IoT"],listP:["SafeTrip","SafeGaurd","Product Security"],listB:["Blog","News"],listC:["About Us","Solutions","Datasheet"],show:!1,message:!1,apply:!1},s.contactRefernce=i.a.createRef(),s.handelChange=s.handelChange.bind(Object(d.a)(s)),s.handlerSubmit=s.handlerSubmit.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),w.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({message:!0,apply:!0})}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(b.a,{bg:"white",fixed:"top",variant:"light",children:[Object(s.jsx)(b.a.Brand,{href:"/",children:Object(s.jsx)("img",{src:"/logoName.png",style:{height:90,marginLeft:220},alt:"jjjjjj"})}),Object(s.jsxs)(x.a,{className:"mr-auto",style:{marginLeft:140},children:[Object(s.jsx)(v,{name:"Products & Services",list:this.state.listP}),Object(s.jsx)(v,{name:"Solutions",list:this.state.listI}),Object(s.jsx)(v,{name:"Company",list:this.state.listC}),Object(s.jsx)(v,{name:"Blog",list:this.state.listB}),Object(s.jsx)(x.a.Link,{id:"Contact",href:"#Contact",value:this.state.feedback,onClick:function(){return e.handleShow()},style:{fontSize:24,marginLeft:50,color:"black"},children:"Contact Us"})]})]}),Object(s.jsxs)(u.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{children:Object(s.jsx)("h1",{children:"Contact us"})})}),Object(s.jsxs)(u.a.Body,{children:[!1===this.state.apply&&Object(s.jsxs)(m.a,{onSubmit:this.handlerSubmit,children:[Object(s.jsxs)(m.a.Group,{children:[Object(s.jsx)(m.a.Label,{children:Object(s.jsx)("h2",{children:"Name:"})}),Object(s.jsx)(m.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(s.jsxs)(m.a.Group,{children:[Object(s.jsx)(m.a.Label,{children:Object(s.jsx)("h2",{children:"Phone:"})}),Object(s.jsx)(m.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(s.jsxs)(m.a.Group,{children:[Object(s.jsx)(m.a.Label,{children:Object(s.jsx)("h2",{children:"Email address:"})}),Object(s.jsx)(m.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(s.jsx)(m.a.Text,{className:"text-muted",children:Object(s.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(s.jsx)(p.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(s.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(p.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=window.innerWidth;return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)("div",{className:"ImageTeam_",width:e,style:{height:800},children:Object(s.jsx)("div",{width:e,style:{backgroundColor:"Navy",height:"100%",opacity:.8},children:Object(s.jsx)("h1",{style:{position:"absolute",marginTop:390,marginLeft:500,color:"white",fontSize:150},children:Object(s.jsx)("strong",{children:"Solutions"})})})}),Object(s.jsxs)("div",{style:{width:"70%",marginLeft:"17%",fontSize:30},children:[Object(s.jsx)("h2",{style:{fontSize:40},children:Object(s.jsx)("strong",{children:"Sec4Cyber security solutions:"})}),Object(s.jsx)("div",{style:{marginTop:30},children:" Sec4Cyber provides embedded cybersecurity solutions for IoT connected devices and servers, from autonomous and connected transportation, aircraft, defense, emergency and low enforcement to industry and energy IoT connected systems. Sec4Cyber software is designed and implemented to safeguard resource-constrained systems."}),Object(s.jsxs)("div",{style:{marginTop:30},children:["Sec4Cyber security solutions automatically integrate into the system OS and software (",Object(s.jsx)("strong",{children:"without"})," changing system hardware and software builds) and continuously check the system\u2019s runtime integrity. When a deviation from the system\u2019s factory settings is detected, the system ",Object(s.jsx)("strong",{children:"blocks it"}),"  automatically, ",Object(s.jsx)("strong",{children:"preventing"}),": malicious code injection, zero-day,",Object(s.jsx)("strong",{children:" ROP"}),",",Object(s.jsx)("strong",{children:"JOP"})," cyberattacks with ",Object(s.jsx)("strong",{children:"zero "}),"false positives and ",Object(s.jsx)("strong",{children:"NO"})," performance impact, we actually improved system ",Object(s.jsx)("strong",{children:"performance"}),", how is this possible? We will explain this further. In addition, it protects the services and processes of the system from harm and disruption of their operation."]}),Object(s.jsx)("div",{style:{marginTop:30},children:"Product manufacturers and Enterprises Edge in the Governments and defense sector can rely on Sec4Cyber automated runtime integrity software. Using Sec4Cber\u2019s software the devices are self-protected against cyberattacks without requiring any development change or security updates. Vendors leverage Sec4Cyber software to increase their brand competitiveness and protect their customers against cyberattacks."})]})]})}}]),n}(a.Component),_=n.p+"static/media/Alon2.31a35fec.png",N=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={formatTitle:"formatTitle"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=window.innerWidth;return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)("div",{className:"ImageTeam_",width:e,style:{height:800},children:Object(s.jsx)("div",{width:e,style:{backgroundColor:"Navy",height:"100%",opacity:.8},children:Object(s.jsx)("h1",{style:{position:"absolute",marginTop:390,marginLeft:500,color:"white",fontSize:150},children:Object(s.jsx)("strong",{children:"Sec4Cyber"})})})}),Object(s.jsxs)("div",{class:"team",children:[Object(s.jsx)("h1",{className:"meet_lead_team",children:"Meet the Lead Team"}),Object(s.jsx)("p",{className:"meet_l_t_p",children:Object(s.jsx)("strong",{children:"SEC4CYBER is led by a talented, experienced research & development team of cybersecurity experts."})}),Object(s.jsxs)("div",{class:"row",children:[Object(s.jsxs)("div",{class:"pic_jonatan",children:[Object(s.jsx)("img",{className:"pick_jonatan_I",src:"/static/Jonatan.png",alt:""}),Object(s.jsxs)("div",{class:"div_des",children:[Object(s.jsxs)("p",{className:"pick_jonatan_t",children:[" Jonatan Haish",Object(s.jsx)("p",{className:this.state.formatTitle,children:"Co-founder & VP R&D"})]}),"Software Engineer, served as a Cyber Analyst in Israeli Navy, experienced in cyber security, specialized in Linux Programing, Fullstack dev\u2019, research & development Served in roles: cyber security Researcher, Fullstack Developer, Chief Architect."]})]}),Object(s.jsxs)("div",{class:"pic_alon",children:[Object(s.jsx)("img",{src:_,className:"pic_alon_I",alt:""}),Object(s.jsxs)("div",{class:"div_des_alon",children:[Object(s.jsxs)("p",{className:"pic_alon_t",children:[" Alon Shoam",Object(s.jsx)("p",{className:this.state.formatTitle,children:"Co-founder & CEO"})]}),"An entrepreneur, Software engineer, cyber security expert, 18 years of experience in cyber security, served in Prime Minister's Office as Chief information security officer-SOC Lead, additionally served in roles: Cyber analyst, Researcher, Architect, R&D VP, CTO, CEO."]})]}),Object(s.jsxs)("div",{class:"pic_daniel",children:[Object(s.jsx)("img",{src:"/static/Daniel.png",className:"pic_daniel_I",alt:""}),Object(s.jsxs)("div",{class:"div_des",children:[Object(s.jsxs)("p",{className:"pic_daniel_t",children:[" Daniel Roge",Object(s.jsx)("p",{className:this.state.formatTitle,children:"Co-founder & CTO"})]}),"An entrepreneur, cyber security expert, experienced in research & development, specialized in Linux programing, Data Science, AI-ML, served in roles: cyber security Researcher, Architect, Algorithm Developer, Ethical Hacker."]})]})]})]})]})}}]),n}(a.Component);var T=function(){return"https://localhost:3000/Solutions/"===window.location.href?Object(s.jsxs)("div",{children:[Object(s.jsx)(S,{name:"Sec4Cyber",email:"secforcyber@gmail.com"}),Object(s.jsx)(k,{})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)(S,{name:"Sec4Cyber",email:"secforcyber@gmail.com"}),Object(s.jsx)(N,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};c.a.render(Object(s.jsx)(T,{}),document.getElementById("root")),L()}},[[69,1,2]]]);
//# sourceMappingURL=main.ea22b577.chunk.js.map