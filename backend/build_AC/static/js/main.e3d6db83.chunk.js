(this.webpackJsonpabout=this.webpackJsonpabout||[]).push([[0],{61:function(e,t,i){},62:function(e,t,i){},70:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i(0),r=i.n(s),a=i(20),c=i.n(a),o=(i(61),i(62),i(15)),l=i(16),h=i(22),d=i(18),j=i(17),x=i(79),b=i(78),u=i(76),y=i(77),O=i(75),w=(i(45),i(73)),m=i(81),p=i(80),g=i(74),f=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).toggle=n.toggle.bind(Object(h.a)(n)),n.onMouseEnter=n.onMouseEnter.bind(Object(h.a)(n)),n.onMouseLeave=n.onMouseLeave.bind(Object(h.a)(n)),n.state={dropdownOpen:!1},n}return Object(l.a)(i,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"formatDiv",value:function(){return!0===this.state.dropdownOpen?{fontSize:this.props.width,backgroundColor:"white",color:"black",borderColor:"black"}:{fontSize:this.props.width,backgroundColor:"white",color:"black",borderColor:"white"}}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(w.a,{className:"dropDwon",style:{marginLeft:2.2*this.props.width},onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(n.jsx)(m.a,{style:this.formatDiv(),children:this.props.name}),Object(n.jsxs)(p.a,{children:[this.props.list.map((function(t){return Object(n.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/"+t+"/",children:Object(n.jsx)(g.a,{style:{fontSize:e.props.width/1.2},children:t})})})),";"]})]})}}]),i}(s.Component),v=i(53),S=i.n(v),C=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={dropdownOpen:!1,listI:["Automotive & Transportion","Industries & Energey","Government & Defense","Healthcare & Medical Devices","Enterprise Edge","Consumer IoT"],listP:["SafeTrip","SafeGaurd","Product Security"],listB:["Blog","News"],listC:["About Us","Solutions","Datasheet"],show:!1,message:!1,apply:!1,width:.0125*window.innerWidth,height:window.innerHeight,widthWindow:window.innerWidth},n.contactRefernce=r.a.createRef(),n.handelChange=n.handelChange.bind(Object(h.a)(n)),n.handlerSubmit=n.handlerSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.listenEvent(e.state)}))}},{key:"listenEvent",value:function(e){this.setState({width:.0125*window.innerWidth,height:window.innerHeight,widthWindow:window.innerWidth})}},{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),S.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({message:!0,apply:!0})}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(x.a,{bg:"white",fixed:"top",variant:"light",children:[Object(n.jsx)(x.a.Brand,{href:"/",children:Object(n.jsx)("img",{src:"/logoName.png",style:{height:90,marginLeft:220},alt:"jjjjjj"})}),Object(n.jsxs)(b.a,{className:"mr-auto",style:{marginLeft:this.state.widthWindow/30},children:[Object(n.jsx)(f,{name:"Products & Services",list:this.state.listP,width:this.state.width}),Object(n.jsx)(f,{name:"Solutions",list:this.state.listI,width:this.state.width}),Object(n.jsx)(f,{name:"Company",list:this.state.listC,width:this.state.width}),Object(n.jsx)(f,{name:"Blog",list:this.state.listB,width:this.state.width}),Object(n.jsx)(b.a.Link,{id:"Contact",href:"#Contact",value:this.state.feedback,onClick:function(){return e.handleShow()},style:{fontSize:this.state.width,marginLeft:2.2*this.state.width,color:"black"},children:"Contact Us"})]})]}),Object(n.jsxs)(u.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(n.jsx)(u.a.Header,{closeButton:!0,children:Object(n.jsx)(u.a.Title,{children:Object(n.jsx)("h1",{children:"Contact us"})})}),Object(n.jsxs)(u.a.Body,{children:[!1===this.state.apply&&Object(n.jsxs)(y.a,{onSubmit:this.handlerSubmit,children:[Object(n.jsxs)(y.a.Group,{children:[Object(n.jsx)(y.a.Label,{children:Object(n.jsx)("h2",{children:"Name:"})}),Object(n.jsx)(y.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(n.jsxs)(y.a.Group,{children:[Object(n.jsx)(y.a.Label,{children:Object(n.jsx)("h2",{children:"Phone:"})}),Object(n.jsx)(y.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(n.jsxs)(y.a.Group,{children:[Object(n.jsx)(y.a.Label,{children:Object(n.jsx)("h2",{children:"Email address:"})}),Object(n.jsx)(y.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(n.jsx)(y.a.Text,{className:"text-muted",children:Object(n.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(n.jsx)(O.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(n.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(n.jsx)(u.a.Footer,{children:Object(n.jsx)(O.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})}}]),i}(s.Component),k=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={scrollTop:0,height:window.innerHeight,width:window.innerWidth},e}return Object(l.a)(i,[{key:"changeSize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.changeSize(e.state)}))}},{key:"render",value:function(){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("div",{className:"ImageTeam_",width:this.state.width,style:{height:this.state.height/1.2},children:Object(n.jsx)("div",{width:this.state.width,style:{backgroundColor:"Navy",height:"100%",opacity:.8},children:Object(n.jsx)("h1",{style:{position:"absolute",marginTop:"20%",marginLeft:"25%",color:"white",fontSize:this.state.width/11},children:Object(n.jsx)("strong",{children:"Solutions"})})})}),Object(n.jsxs)("div",{style:{width:"70%",marginLeft:"17%",fontSize:30},children:[Object(n.jsx)("h2",{children:Object(n.jsx)("strong",{children:"Sec4Cyber security solutions:"})}),Object(n.jsx)("div",{style:{marginTop:30,fontSize:this.state.width/62},children:" Sec4Cyber provides embedded cybersecurity solutions for IoT connected devices and servers, from autonomous and connected transportation, aircraft, defense, emergency and low enforcement to industry and energy IoT connected systems. Sec4Cyber software is designed and implemented to safeguard resource-constrained systems."}),Object(n.jsxs)("div",{style:{marginTop:30,fontSize:this.state.width/62},children:["Sec4Cyber security solutions automatically integrate into the system OS and software (",Object(n.jsx)("strong",{children:"without"})," changing system hardware and software builds) and continuously check the system\u2019s runtime integrity. When a deviation from the system\u2019s factory settings is detected, the system ",Object(n.jsx)("strong",{children:"blocks it"}),"  automatically, ",Object(n.jsx)("strong",{children:"preventing"}),": malicious code injection, zero-day,",Object(n.jsx)("strong",{children:" ROP"}),",",Object(n.jsx)("strong",{children:"JOP"})," cyberattacks with ",Object(n.jsx)("strong",{children:"zero "}),"false positives and ",Object(n.jsx)("strong",{children:"NO"})," performance impact, we actually improved system ",Object(n.jsx)("strong",{children:"performance"}),", how is this possible? We will explain this further. In addition, it protects the services and processes of the system from harm and disruption of their operation."]}),Object(n.jsx)("div",{style:{marginTop:30,fontSize:this.state.width/62},children:"Product manufacturers and Enterprises Edge in the Governments and defense sector can rely on Sec4Cyber automated runtime integrity software. Using Sec4Cber\u2019s software the devices are self-protected against cyberattacks without requiring any development change or security updates. Vendors leverage Sec4Cyber software to increase their brand competitiveness and protect their customers against cyberattacks."})]})]})}}]),i}(s.Component),z=i.p+"static/media/Alon2.31a35fec.png",T=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={scrollTop:0,height:window.innerHeight,width:window.innerWidth},e}return Object(l.a)(i,[{key:"changeSize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.changeSize(e.state)}))}},{key:"render",value:function(){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("div",{className:"ImageTeam_",width:this.state.width,style:{height:.8*this.state.height},children:Object(n.jsx)("div",{width:this.state.width,style:{backgroundColor:"Navy",height:"100%",opacity:.8},children:Object(n.jsx)("h1",{style:{position:"absolute",marginTop:"20%",marginLeft:"25%",color:"white",fontSize:this.state.width/13},children:Object(n.jsx)("strong",{children:"Sec4Cyber"})})})}),Object(n.jsxs)("div",{class:"team",children:[Object(n.jsx)("h1",{className:"meet_lead_team",style:{fontSize:this.state.width/15},children:"Meet the Lead Team"}),Object(n.jsx)("p",{className:"meet_l_t_p",style:{fontSize:this.state.width/65},children:Object(n.jsx)("strong",{children:"SEC4CYBER is led by a talented, experienced research & development team of cybersecurity experts."})}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsxs)("div",{class:"pic_jonatan",style:{width:this.state.width/4.5},children:[Object(n.jsx)("img",{className:"pick_jonatan_I",src:"/static/Jonatan.png",alt:"",style:{width:this.state.width/5}}),Object(n.jsxs)("div",{class:"div_des",style:{fontSize:this.state.width/65},children:[Object(n.jsxs)("p",{className:"pick_jonatan_t",children:[" Jonatan Haish",Object(n.jsx)("p",{className:this.state.formatTitle,children:"Co-founder & VP R&D"})]}),"Software Engineer, served as a Cyber Analyst in Israeli Navy, experienced in cyber security, specialized in Linux Programing, Fullstack dev\u2019, research & development Served in roles: cyber security Researcher, Fullstack Developer, Chief Architect."]})]}),Object(n.jsxs)("div",{class:"pic_alon",style:{width:this.state.width/4},children:[Object(n.jsx)("img",{src:z,className:"pic_alon_I",alt:"",style:{width:this.state.width/5}}),Object(n.jsxs)("div",{class:"div_des_alon",style:{fontSize:this.state.width/65},children:[Object(n.jsxs)("p",{className:"pic_alon_t",children:[" Alon Shoam",Object(n.jsx)("p",{className:this.state.formatTitle,style:{fontSize:this.state.width/65},children:"Co-founder & CEO"})]}),"An entrepreneur, Software engineer, cyber security expert, 18 years of experience in cyber security, served in Prime Minister's Office as Chief information security officer-SOC Lead, additionally served in roles: Cyber analyst, Researcher, Architect, R&D VP, CTO, CEO."]})]}),Object(n.jsxs)("div",{class:"pic_daniel",style:{width:this.state.width/4},children:[Object(n.jsx)("img",{src:"/static/Daniel.png",className:"pic_daniel_I",alt:"",style:{width:this.state.width/5}}),Object(n.jsxs)("div",{class:"div_des",style:{fontSize:this.state.width/65},children:[Object(n.jsxs)("p",{className:"pic_daniel_t",children:[" Daniel Roge",Object(n.jsx)("p",{className:this.state.formatTitle,style:{fontSize:this.state.width/65},children:"Co-founder & CTO"})]}),"An entrepreneur, cyber security expert, experienced in research & development, specialized in Linux programing, Data Science, AI-ML, served in roles: cyber security Researcher, Architect, Algorithm Developer, Ethical Hacker."]})]})]})]})]})}}]),i}(s.Component),D=i.p+"static/media/logoNewWhite.cfdad7e2.png",E=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={show:!1,message:!1,apply:!1,width:window.innerWidth,height:window.innerHeight},n}return Object(l.a)(i,[{key:"changeSize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.changeSize(e.state)}))}},{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"render",value:function(){var e=this,t=this.state.width;return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsxs)("div",{style:{backgroundColor:"#15006b",width:this.state.width,height:this.state.height/1.2,marginTop:"10%"},children:[Object(n.jsxs)("div",{style:{marginTop:"6%",position:"absolute",width:"75%",marginLeft:"13%"},children:[Object(n.jsx)(O.a,{onClick:function(){return e.handleShow()},style:{width:.2*t,height:70,backgroundColor:"white",color:"black",fontSize:"220%",borderRadius:"35px"},children:Object(n.jsx)("strong",{children:"Contact Us"})}),Object(n.jsx)("hr",{style:{border:"solid 2px white",marginTop:20}}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("img",{src:D,style:{height:70,marginTop:"3%",marginLeft:"3%"},alt:"logo"}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(n.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(n.jsx)("strong",{children:"Products & Services"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/SafeTrip/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"SafeTrip"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/SafeGaurd/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"SafeGuard"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Product Security/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Product Security"})})]})}),Object(n.jsx)("div",{style:{marginLeft:"2%",width:.165*t},children:Object(n.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(n.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(n.jsx)("strong",{children:"Industries"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Automotive & Transport/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Automotive & Transport"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Industry 4.0 & Energy/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Industry 4.0 & Energy"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Emergency & Defense/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Emergency & Defense"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Enterprise Edge/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Enterprise Edge"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Enterprise Edge/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Consumer IoT"})})]})}),Object(n.jsx)("div",{style:{marginLeft:"1%"},children:Object(n.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(n.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(n.jsx)("strong",{children:"Company"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/About Us/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"About Us"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Solutions/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Solutions"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Datasheet/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Datasheet"})})]})}),Object(n.jsx)("div",{style:{marginLeft:"3%"},children:Object(n.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(n.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(n.jsx)("strong",{children:"Blog"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/Blog/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Blog"})}),Object(n.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(n.jsx)("a",{href:"/News/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"News"})})]})})]}),Object(n.jsx)("hr",{style:{border:"solid 2px white",marginTop:"6%"}})]}),Object(n.jsxs)(u.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(n.jsx)(u.a.Header,{closeButton:!0,children:Object(n.jsx)(u.a.Title,{children:Object(n.jsx)("h1",{children:"Contact us"})})}),Object(n.jsxs)(u.a.Body,{children:[!1===this.state.apply&&Object(n.jsxs)(y.a,{onSubmit:this.handlerSubmit,children:[Object(n.jsxs)(y.a.Group,{children:[Object(n.jsx)(y.a.Label,{children:Object(n.jsx)("h2",{children:"Name:"})}),Object(n.jsx)(y.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(n.jsxs)(y.a.Group,{children:[Object(n.jsx)(y.a.Label,{children:Object(n.jsx)("h2",{children:"Phone:"})}),Object(n.jsx)(y.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(n.jsxs)(y.a.Group,{children:[Object(n.jsx)(y.a.Label,{children:Object(n.jsx)("h2",{children:"Email address:"})}),Object(n.jsx)(y.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(n.jsx)(y.a.Text,{className:"text-muted",children:Object(n.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(n.jsx)(O.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(n.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(n.jsx)(u.a.Footer,{children:Object(n.jsx)(O.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})})}}]),i}(s.Component);var L=function(){return"https://localhost:3000/Solutions/"===window.location.href?Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{name:"Sec4Cyber",email:"secforcyber@gmail.com"}),Object(n.jsx)(k,{}),Object(n.jsx)(E,{})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{name:"Sec4Cyber",email:"secforcyber@gmail.com"}),Object(n.jsx)(T,{}),Object(n.jsx)(E,{})]})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,82)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),r(e),a(e)}))};c.a.render(Object(n.jsx)(L,{}),document.getElementById("root")),N()}},[[70,1,2]]]);
//# sourceMappingURL=main.e3d6db83.chunk.js.map