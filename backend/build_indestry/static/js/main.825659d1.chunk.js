(this.webpackJsonpindestry=this.webpackJsonpindestry||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),r=n.n(i),c=n(24),o=n.n(c),a=(n(72),n(11)),x=n(12),l=n(14),h=n(13),j=(n(73),n.p+"static/media/Indutry40_new.008b6af0.mp4"),d=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=window.innerHeight-100;return Object(s.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,style:{position:"absolute",width:"100%",left:"50%",top:"60%",height:e,objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"},children:Object(s.jsx)("source",{src:j,type:"video/mp4"})})}}]),n}(i.Component),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={scrollTop:0},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){return e.listenEvent(e.state)}))}},{key:"listenEvent",value:function(e){var t=window.pageYOffset;this.setState({scrollTop:t})}},{key:"format",value:function(){return this.state.scrollTop<=210?"stript2":"stript1"}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:this.format(),children:[Object(s.jsx)(d,{height:this.state.scrollTop}),Object(s.jsx)("div",{style:{marginTop:22,backgroundColor:"white",width:this.state.width,height:this.state.scrollTop,opacity:.2}}),Object(s.jsx)("h1",{style:{marginLeft:200,top:30,color:"white",marginTop:"12%",position:"absolute",fontSize:80,textShadow:"4px 4px 4px black, 4px 4px 4px black"},children:"Industries & Energy"}),Object(s.jsx)("h3",{style:{marginLeft:200,top:150,color:"white",marginTop:"12.5%",position:"absolute",fontSize:45,textShadow:"4px 4px 4px black, 4px 4px 4px black"},children:"Securing connected devices in IIoT and"}),Object(s.jsx)("h3",{style:{marginLeft:200,top:150,color:"white",marginTop:"15.5%",position:"absolute",fontSize:45,textShadow:"4px 4px 4px black, 4px 4px 4px black"},children:"Critical infrastructure environments"})]})}}]),n}(i.Component),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={width:window.innerWidth,height:window.innerHeight},s}return Object(x.a)(n,[{key:"changeSize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.changeSize(e.state)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{style:{marginTop:"23%",marginLeft:"10%"},children:[Object(s.jsx)("h1",{style:{marginLeft:this.props.marginLeftT},children:Object(s.jsxs)("strong",{children:["The security challenge in Industrial IoT (IIoT) and in critical",Object(s.jsx)("br",{})," infrastructure environments."]})}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["With great innovation comes great risk, it has greatly increased the industrial environment\u2019s exposure to",Object(s.jsx)("br",{}),"security threats. "]}),Object(s.jsx)("p",{style:{fontSize:this.state.width/78},children:"Cyber-attacks pose a great risk to both business continuity and the production floor."}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["Businesses, governments and homes\xa0all rely on the \u201calways on\u201d service of\xa0their electricity networks,",Object(s.jsx)("br",{}),"traffic systems,\xa0gas\xa0pipes,\xa0water facilities and other\xa0critical\xa0utility\xa0infrastructure."]}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["The rapid growth in the sheer number of devices has greatly increased the utilities\u2019 exposure to security ",Object(s.jsx)("br",{}),"threats and the risk of cyberattacks."]}),Object(s.jsx)("p",{style:{fontSize:this.state.width/78},children:"smooth operations of those critical systems become mission\xa0critical to our daily lives."})]})}}]),n}(i.Component),O=n(18),p=n(99),g=n(98),y=n(96),f=n(97),m=n(94),w=(n(55),n(92)),v=n(101),S=n(100),k=n(93),C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).toggle=s.toggle.bind(Object(O.a)(s)),s.onMouseEnter=s.onMouseEnter.bind(Object(O.a)(s)),s.onMouseLeave=s.onMouseLeave.bind(Object(O.a)(s)),s.state={dropdownOpen:!1},s}return Object(x.a)(n,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"formatDiv",value:function(){return!0===this.state.dropdownOpen?{fontSize:24,backgroundColor:"white",color:"black",borderColor:"black"}:{fontSize:24,backgroundColor:"white",color:"black",borderColor:"white"}}},{key:"render",value:function(){return Object(s.jsxs)(w.a,{className:"dropDwon",style:{marginLeft:50},onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(s.jsx)(v.a,{style:this.formatDiv(),children:this.props.name}),Object(s.jsxs)(S.a,{children:[this.props.list.map((function(e){return Object(s.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/"+e+"/",children:Object(s.jsx)(k.a,{style:{fontSize:20},children:e})},e)})),";"]})]})}}]),n}(i.Component),z=n(42),T=n.n(z),L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={dropdownOpen:!1,listI:["Automotive & Transportion","Industries & Energey","Emergency & Defense","Enterprise","Consumer IoT"],listP:["SafeTrip","SafeGaurd","Product Security"],listB:["Blog","News"],listC:["About Us","Solutions","Datasheet"],show:!1,message:!1,apply:!1},s.contactRefernce=r.a.createRef(),s.handelChange=s.handelChange.bind(Object(O.a)(s)),s.handlerSubmit=s.handlerSubmit.bind(Object(O.a)(s)),s}return Object(x.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),T.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({message:!0,apply:!0})}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(p.a,{bg:"white",fixed:"top",variant:"light",children:[Object(s.jsx)(p.a.Brand,{href:"/",children:Object(s.jsx)("img",{src:"/logoName.png",style:{height:90,marginLeft:220},alt:"jjjjjj"})}),Object(s.jsxs)(g.a,{className:"mr-auto",style:{marginLeft:140},children:[Object(s.jsx)(C,{name:"Products & Services",list:this.state.listP}),Object(s.jsx)(C,{name:"Solutions",list:this.state.listI}),Object(s.jsx)(C,{name:"Company",list:this.state.listC}),Object(s.jsx)(C,{name:"Blog",list:this.state.listB}),Object(s.jsx)(g.a.Link,{id:"Contact",href:"#Contact",value:this.state.feedback,onClick:function(){return e.handleShow()},style:{fontSize:24,marginLeft:50,color:"black"},children:"Contact Us"})]})]}),Object(s.jsxs)(y.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(s.jsx)(y.a.Header,{closeButton:!0,children:Object(s.jsx)(y.a.Title,{children:Object(s.jsx)("h1",{children:"Contact us"})})}),Object(s.jsxs)(y.a.Body,{children:[!1===this.state.apply&&Object(s.jsxs)(f.a,{onSubmit:this.handlerSubmit,children:[Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{children:Object(s.jsx)("h2",{children:"Name:"})}),Object(s.jsx)(f.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{children:Object(s.jsx)("h2",{children:"Phone:"})}),Object(s.jsx)(f.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{children:Object(s.jsx)("h2",{children:"Email address:"})}),Object(s.jsx)(f.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(s.jsx)(f.a.Text,{className:"text-muted",children:Object(s.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(s.jsx)(m.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(s.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(s.jsx)(y.a.Footer,{children:Object(s.jsx)(m.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})}}]),n}(i.Component),E=n(95),D=n.p+"static/media/Industries40.66f03349.mp4",I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(s.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,style:{width:this.props.width,height:this.props.height},children:Object(s.jsx)("source",{src:D,type:"video/mp4"})})}}]),n}(i.Component),P=n.p+"static/media/SG.24cd3bf0.jpg",B=n(61),N=n(50),A=n(51),M=n.p+"static/media/airplane.2235cd44.jpg",F=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={width:window.innerWidth,height:window.innerHeight,show:!1,message:!1,apply:!1},s.contactRefernce=r.a.createRef(),s.handelChange=s.handelChange.bind(Object(O.a)(s)),s.handlerSubmit=s.handlerSubmit.bind(Object(O.a)(s)),s}return Object(x.a)(n,[{key:"changeSize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.changeSize(e.state)}))}},{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),T.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({message:!0,apply:!0})}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{style:{marginLeft:"10%",marginTop:"10%"},children:Object(s.jsx)("strong",{children:"Always On. Always Secure. Always High Performance."})}),Object(s.jsxs)("div",{style:{marginLeft:"10%",marginTop:"1%"},className:"row",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Embedded Security Platform"})}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["Sec4Cyber ",Object(s.jsx)("strong",{children:"secures"})," and ",Object(s.jsx)("strong",{children:"protects"})," the Industrial and critical infrastructure ",Object(s.jsx)("br",{}),"computing environment ",Object(s.jsx)("strong",{children:"hermetically"})," without compromising ",Object(s.jsx)("strong",{children:"performance"}),",",Object(s.jsx)("br",{}),"by embedding the security as a part of the operating system.",Object(s.jsx)("br",{}),"Sec4Cyber solution - ",Object(s.jsx)("strong",{children:"SafeGuard delivers end-to-end protection."})]}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["SafeGuard locally embedded agent, automatically smoothly generates",Object(s.jsx)("br",{}),"security policy."]}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:[Object(s.jsx)("strong",{children:"Blocks"})," cyberattacks, ",Object(s.jsx)("strong",{children:"protects"})," your processes & APP\u2019s, provides ",Object(s.jsx)("strong",{children:"early"}),Object(s.jsx)("br",{}),"warning on attack attempts."]}),Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Blocks In-Memory Attacks"})}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["Performing lightweight Control Flow Integrity (CFI), SafeTrip continuously",Object(s.jsx)("br",{})," monitors function calls and return pointers to ensure your programs stay",Object(s.jsx)("br",{}),"within the expected execution flow."]}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["Sec4Cyber device Control Flow Integrity (CFI) doesn\u2019t rely on updates and",Object(s.jsx)("br",{})," the protection is ",Object(s.jsx)("strong",{children:"always on"})," and ",Object(s.jsx)("strong",{children:"remains stable"})," over the life of the device.",Object(s.jsx)("br",{})," It\u2019s ",Object(s.jsx)("strong",{children:"safe"})," and ",Object(s.jsx)("strong",{children:"secure"})," by design."]}),Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Self-protect your device"})}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:[Object(s.jsx)("strong",{children:"Self-Protection"}),", Sec4Cyber embedded security solutions provide the",Object(s.jsx)("br",{})," software ",Object(s.jsx)("strong",{children:"integrity"})," and ",Object(s.jsx)("strong",{children:"authentication"})," needed in ",Object(s.jsx)("strong",{children:"performance challenged"}),Object(s.jsx)("br",{}),"environments."]}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:[Object(s.jsx)("strong",{children:"self-protection"})," against device control loss. Buffer overflows can result in",Object(s.jsx)("br",{})," foreign malicious code or code reuse such as return-oriented programming",Object(s.jsx)("br",{}),"(ROP) and (JOP) attacks, which ",Object(s.jsx)("strong",{children:"SafeGuard blocks them."})]}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["After the attack is detected and blocked, SafeGuard and SafeTrip",Object(s.jsx)("br",{})," provides a detailed report of the attack."]}),Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Lifts the Burden off Your Developers."})}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:[Object(s.jsx)("strong",{children:"Autonomously"})," maps all call sequences to create your customized security",Object(s.jsx)("br",{}),"policy, it\u2019s ",Object(s.jsx)("strong",{children:"done easily"})," by button klick."]}),Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Cut Resource Needs"})}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:["Cut the resources needed for product security",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"No R&D"})," - hardware or software changes are required."]})]}),Object(s.jsx)("div",{style:{width:this.state.width/3,height:"10%",backgroundColor:"white",position:"absolute",marginTop:"2.5%",marginLeft:"50%"}}),Object(s.jsx)(I,{width:.39*this.state.width,height:this.state.height/1.3,marginTop:"5%"})]}),Object(s.jsx)("h2",{style:{marginLeft:"52%",marginTop:"3%"},children:Object(s.jsx)("strong",{children:"Secure your smart vehicles Network"})}),Object(s.jsxs)("div",{style:{marginLeft:"9%"},className:"row",children:[Object(s.jsx)(E.a,{src:P,style:{width:.39*this.state.width,height:this.state.height/2.1,marginTop:"1%"}}),Object(s.jsxs)("div",{style:{marginLeft:"4.265%"},children:[Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:[Object(s.jsx)("strong",{children:Object(s.jsx)(B.a,{children:Object(s.jsx)("a",{href:"/SafeGaurd/",children:"SafeGuard"})})})," - Secures devices Network, a cloud Server based",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"AI-Machine Learning"}),", work as a Security Operation Center ",Object(s.jsx)("strong",{children:"(SOC)"})," for",Object(s.jsx)("br",{})," controlling, monitoring, Alerting. Automatically profiles devices network",Object(s.jsx)("br",{}),"behaviors.",Object(s.jsx)("br",{}),"A locally agent (in the vehicle), automatically generates security policy",Object(s.jsx)("br",{})," Blocks cyberattacks, protects your processes & APP\u2019s, provides early",Object(s.jsx)("br",{}),"warning on attack attempts.",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Securely delivers yours updates to devices."}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Secures your Supply Chain."}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Blocks zero-day"})," cyber-attack"]}),Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:[Object(s.jsx)("strong",{children:"Continuous Security,"})," with ",Object(s.jsx)("strong",{children:"AI-Machine Learning"})," gain deep visibility",Object(s.jsx)("br",{})," into the device\u2019s behavior in real time across its entire lifecycle, to",Object(s.jsx)("br",{}),"predict unknown future cyber-attacks, abnormal behavior."]}),Object(s.jsx)("h2",{children:Object(s.jsx)("strong",{children:"Continuous Visibility"})})]})]}),Object(s.jsx)("h2",{style:{marginLeft:"10%",marginTop:"3%"},children:Object(s.jsx)("strong",{children:"Stop threats without impacting device performance"})}),Object(s.jsxs)("div",{style:{marginLeft:"10%",marginTop:"1%"},className:"row",children:[Object(s.jsxs)("div",{style:{marginLeft:"1.3%"},children:[Object(s.jsxs)("p",{style:{fontSize:this.state.width/78},children:[Object(s.jsx)("strong",{children:Object(s.jsx)(B.a,{children:Object(s.jsx)("a",{href:"/SafeTrip/",children:"SafeTrip"})})})," runs in ",Object(s.jsx)("strong",{children:"resource"}),Object(s.jsx)("strong",{children:"e-limited"})," systems-within the",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Host performance requirements."}),Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{icon:A.a,size:"xxs",color:"green"}),Object(s.jsx)("span",{style:{marginLeft:"3%"},children:Object(s.jsx)("strong",{children:"CPU: 0%"})}),Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{icon:A.a,size:"xxs",color:"green"}),Object(s.jsx)("span",{style:{marginLeft:"3%"},children:Object(s.jsx)("strong",{children:"MEM: 0.3%"})}),Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{icon:A.a,size:"xxs",color:"green"}),Object(s.jsx)("span",{style:{marginLeft:"3%"},children:Object(s.jsx)("strong",{children:"Storage: 30KB"})}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"No need"})," for heavy processing or continual security updates -"]}),Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Ensures Top Performance"})})]}),Object(s.jsx)(E.a,{src:M,style:{width:.39*this.state.width,height:this.state.height/2.1,marginTop:"1%",marginLeft:"6%"}})]})]})}}]),n}(i.Component),G=n.p+"static/media/logoNewWhite.0caa2f51.png",H=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={show:!1,message:!1,apply:!1,width:window.innerWidth,height:window.innerHeight},s}return Object(x.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"render",value:function(){var e=this,t=window.innerHeight/1.2,n=window.innerWidth;return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsxs)("div",{style:{backgroundColor:"#15006b",width:"100%",height:t,marginTop:"10%"},children:[Object(s.jsxs)("div",{style:{height:200,marginTop:"6%",position:"absolute",width:"75%",marginLeft:"13%"},children:[Object(s.jsx)(m.a,{onClick:function(){return e.handleShow()},style:{width:.2*n,height:70,backgroundColor:"white",color:"black",fontSize:"220%",borderRadius:"35px"},children:Object(s.jsx)("strong",{children:"Contact Us"})}),Object(s.jsx)("hr",{style:{border:"solid 2px white",marginTop:20}}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("img",{src:G,style:{height:70,marginTop:"3%",marginLeft:"3%"},alt:"logo"}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(s.jsx)("li",{style:{fontSize:"220%",marginTop:50},children:Object(s.jsx)("strong",{children:"Products & Services"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/SafeTrip/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"SafeTrip"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/SafeGaurd/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"SafeGuard"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Product Security/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Product Security"})})]})}),Object(s.jsx)("div",{style:{marginLeft:"2%",width:.165*n},children:Object(s.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(s.jsx)("li",{style:{fontSize:"220%",marginTop:50},children:Object(s.jsx)("strong",{children:"Industries"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Automotive & Transport/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Automotive & Transport"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Industry 4.0 & Energy/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Industry 4.0 & Energy"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Emergency & Defense/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Emergency & Defense"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Enterprise Edge/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Enterprise Edge"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Enterprise Edge/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Consumer IoT"})})]})}),Object(s.jsx)("div",{style:{marginLeft:"1%"},children:Object(s.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(s.jsx)("li",{style:{fontSize:"220%",marginTop:50},children:Object(s.jsx)("strong",{children:"Company"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/About Us/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"About Us"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Solutions/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Solutions"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Datasheet/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Datasheet"})})]})}),Object(s.jsx)("div",{style:{marginLeft:"3%"},children:Object(s.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(s.jsx)("li",{style:{fontSize:"220%",marginTop:50},children:Object(s.jsx)("strong",{children:"Blog"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/Blog/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Blog"})}),Object(s.jsx)("li",{style:{fontSize:"150%"},children:Object(s.jsx)("a",{href:"/News/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"News"})})]})})]}),Object(s.jsx)("hr",{style:{border:"solid 2px white",marginTop:"6%"}})]}),Object(s.jsxs)(y.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(s.jsx)(y.a.Header,{closeButton:!0,children:Object(s.jsx)(y.a.Title,{children:Object(s.jsx)("h1",{children:"Contact us"})})}),Object(s.jsxs)(y.a.Body,{children:[!1===this.state.apply&&Object(s.jsxs)(f.a,{onSubmit:this.handlerSubmit,children:[Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{children:Object(s.jsx)("h2",{children:"Name:"})}),Object(s.jsx)(f.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{children:Object(s.jsx)("h2",{children:"Phone:"})}),Object(s.jsx)(f.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{children:Object(s.jsx)("h2",{children:"Email address:"})}),Object(s.jsx)(f.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(s.jsx)(f.a.Text,{className:"text-muted",children:Object(s.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(s.jsx)(m.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(s.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(s.jsx)(y.a.Footer,{children:Object(s.jsx)(m.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})})}}]),n}(i.Component),W=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={file1:{text:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(L,{}),Object(s.jsx)(b,{}),Object(s.jsx)(u,{style:{fontSize:10},description:this.state.file1}),Object(s.jsx)(F,{}),Object(s.jsx)(H,{})]})}}]),n}(i.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),r(e),c(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(W,{})}),document.getElementById("root")),R()}},[[89,1,2]]]);
//# sourceMappingURL=main.825659d1.chunk.js.map