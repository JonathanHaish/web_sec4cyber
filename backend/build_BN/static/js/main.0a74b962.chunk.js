(this.webpackJsonpblognews=this.webpackJsonpblognews||[]).push([[0],{63:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),r=n(20),o=n.n(r),a=(n(63),n(16)),c=n(17),l=n(22),h=n(19),d=n(18),j=n(82),x=n(81),b=n(79),u=n(80),g=n(78),O=(n(34),n(76)),w=n(84),p=n(83),f=n(77),y=n(1),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).toggle=i.toggle.bind(Object(l.a)(i)),i.onMouseEnter=i.onMouseEnter.bind(Object(l.a)(i)),i.onMouseLeave=i.onMouseLeave.bind(Object(l.a)(i)),i.state={dropdownOpen:!1},i}return Object(c.a)(n,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"formatDiv",value:function(){return!0===this.state.dropdownOpen?{fontSize:this.props.width,backgroundColor:"white",color:"black",borderColor:"black"}:{fontSize:this.props.width,backgroundColor:"white",color:"black",borderColor:"white"}}},{key:"render",value:function(){var e=this;return Object(y.jsxs)(O.a,{className:"dropDwon",style:{marginLeft:2.2*this.props.width},onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(y.jsx)(w.a,{style:this.formatDiv(),children:this.props.name}),Object(y.jsxs)(p.a,{children:[this.props.list.map((function(t){return Object(y.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/"+t+"/",children:Object(y.jsx)(f.a,{style:{fontSize:e.props.width/1.2},children:t})})})),";"]})]})}}]),n}(i.Component),v=n(56),S=n.n(v),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={dropdownOpen:!1,listI:["Automotive & Transportion","Industries & Energey","Government & Defense","Healthcare & Medical Devices","Enterprise Edge","Consumer IoT"],listP:["SafeTrip","SafeGaurd","Product Security"],listB:["Blog","News"],listC:["About Us","Solutions","Datasheet"],show:!1,message:!1,apply:!1,width:.0125*window.innerWidth,height:window.innerHeight,widthWindow:window.innerWidth},i.contactRefernce=s.a.createRef(),i.handelChange=i.handelChange.bind(Object(l.a)(i)),i.handlerSubmit=i.handlerSubmit.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.listenEvent(e.state)}))}},{key:"listenEvent",value:function(e){this.setState({width:.0125*window.innerWidth,height:window.innerHeight,widthWindow:window.innerWidth})}},{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),S.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({message:!0,apply:!0})}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){var e=this;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(j.a,{bg:"white",fixed:"top",variant:"light",children:[Object(y.jsx)(j.a.Brand,{href:"/",children:Object(y.jsx)("img",{src:"/logoName.png",style:{height:90,marginLeft:220},alt:"jjjjjj"})}),Object(y.jsxs)(x.a,{className:"mr-auto",style:{marginLeft:this.state.widthWindow/30},children:[Object(y.jsx)(m,{name:"Products & Services",list:this.state.listP,width:this.state.width}),Object(y.jsx)(m,{name:"Solutions",list:this.state.listI,width:this.state.width}),Object(y.jsx)(m,{name:"Company",list:this.state.listC,width:this.state.width}),Object(y.jsx)(m,{name:"Blog",list:this.state.listB,width:this.state.width}),Object(y.jsx)(x.a.Link,{id:"Contact",href:"#Contact",value:this.state.feedback,onClick:function(){return e.handleShow()},style:{fontSize:this.state.width,marginLeft:2.2*this.state.width,color:"black"},children:"Contact Us"})]})]}),Object(y.jsxs)(b.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(y.jsx)(b.a.Header,{closeButton:!0,children:Object(y.jsx)(b.a.Title,{children:Object(y.jsx)("h1",{children:"Contact us"})})}),Object(y.jsxs)(b.a.Body,{children:[!1===this.state.apply&&Object(y.jsxs)(u.a,{onSubmit:this.handlerSubmit,children:[Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Label,{children:Object(y.jsx)("h2",{children:"Name:"})}),Object(y.jsx)(u.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Label,{children:Object(y.jsx)("h2",{children:"Phone:"})}),Object(y.jsx)(u.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Label,{children:Object(y.jsx)("h2",{children:"Email address:"})}),Object(y.jsx)(u.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(y.jsx)(u.a.Text,{className:"text-muted",children:Object(y.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(y.jsx)(g.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(y.jsxs)("div",{children:[Object(y.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(y.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(y.jsx)(b.a.Footer,{children:Object(y.jsx)(g.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})}}]),n}(i.Component),C=n(85),z=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={height:250,shB:"",width:350},e}return Object(c.a)(n,[{key:"handlerLeave",value:function(){this.setState((function(e,t){return{height:e.height-100,shB:"",width:e.width-100}}))}},{key:"handlerKeep",value:function(){this.setState((function(e,t){return{height:e.height+100,shB:"8px 8px 8px white, 6px 6px 6px Navy",width:e.width+100}}))}},{key:"render",value:function(){var e=this,t=this.props.height/4,n=this.props.width/5,i=this.state.shB;return console.log(t),Object(y.jsx)("div",{style:{marginLeft:100},children:Object(y.jsxs)(C.a,{style:{width:n,boxShadow:i},onMouseLeave:function(){return e.handlerLeave()},onMouseEnter:function(){return e.handlerKeep()},children:[Object(y.jsx)("a",{href:"#link",children:Object(y.jsx)("div",{style:{backgroundColor:"black",width:"100%",height:t}})}),Object(y.jsxs)(C.a.Body,{children:[Object(y.jsx)(C.a.Title,{children:"Card Title"}),Object(y.jsx)(C.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(y.jsx)(g.a,{variant:"primary",children:"Go somewhere"})]})]})})}}]),n}(i.Component),D=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={listN:["1","2","3"],listN2:["4","5","6"],height:window.innerHeight,width:window.innerWidth},e}return Object(c.a)(n,[{key:"changeSize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.changeSize(e.state)}))}},{key:"getImage",value:function(e){return console.log(e),""}},{key:"getDesc",value:function(e){return console.log(e),""}},{key:"getDate",value:function(e){return console.log(e),""}},{key:"render",value:function(){var e=this,t=this.state.width/9,n=this.state.height/4;return Object(y.jsxs)("div",{style:{marginTop:n,marginLeft:t},children:[Object(y.jsx)("div",{className:"row",children:this.state.listN.map((function(t){return Object(y.jsx)(z,{image:function(){return e.getImage(t)},desc:function(){return e.getDesc(t)},date:function(){return e.getdate(t)},width:e.state.width,height:e.state.height})}))}),Object(y.jsx)("div",{className:"row",style:{marginTop:"10%"},children:this.state.listN2.map((function(t){return Object(y.jsx)(z,{image:function(){return e.getImage(t)},desc:function(){return e.getDesc(t)},date:function(){return e.getdate(t)},width:e.state.width,height:e.state.height})}))}),Object(y.jsx)("div",{className:"row",style:{marginTop:"10%"},children:this.state.listN2.map((function(t){return Object(y.jsx)(z,{image:function(){return e.getImage(t)},desc:function(){return e.getDesc(t)},date:function(){return e.getdate(t)},width:e.state.width,height:e.state.height})}))})]})}}]),n}(i.Component),L=(n(72),n.p+"static/media/logoNewWhite.cfdad7e2.png"),T=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={show:!1,message:!1,apply:!1,width:window.innerWidth,height:window.innerHeight},i}return Object(c.a)(n,[{key:"changeSize",value:function(e){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.changeSize(e.state)}))}},{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"render",value:function(){var e=this,t=this.state.width;return Object(y.jsx)(s.a.Fragment,{children:Object(y.jsxs)("div",{style:{backgroundColor:"#15006b",width:this.state.width,height:this.state.height/1.2,marginTop:"10%"},children:[Object(y.jsxs)("div",{style:{marginTop:"6%",position:"absolute",width:"75%",marginLeft:"13%"},children:[Object(y.jsx)(g.a,{onClick:function(){return e.handleShow()},style:{width:.2*t,height:70,backgroundColor:"white",color:"black",fontSize:"220%",borderRadius:"35px",marginRight:this.state.width/1.8},children:Object(y.jsx)("strong",{children:"Contact Us"})}),Object(y.jsx)("hr",{style:{border:"solid 2px white",marginTop:20}}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("img",{src:L,style:{height:70,marginTop:"3%",marginLeft:"3%"},alt:"logo"}),Object(y.jsx)("div",{children:Object(y.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(y.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(y.jsx)("strong",{children:"Products & Services"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/SafeTrip/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"SafeTrip"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/SafeGaurd/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"SafeGuard"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Product Security/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Product Security"})})]})}),Object(y.jsx)("div",{style:{marginLeft:"2%",width:.165*t},children:Object(y.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(y.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(y.jsx)("strong",{children:"Industries"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Automotive & Transport/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Automotive & Transport"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Industry 4.0 & Energy/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Industry 4.0 & Energy"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Emergency & Defense/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Emergency & Defense"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Enterprise Edge/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Enterprise Edge"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Enterprise Edge/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Consumer IoT"})})]})}),Object(y.jsx)("div",{style:{marginLeft:"1%"},children:Object(y.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(y.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(y.jsx)("strong",{children:"Company"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/About Us/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"About Us"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Solutions/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Solutions"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Datasheet/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Datasheet"})})]})}),Object(y.jsx)("div",{style:{marginLeft:"3%"},children:Object(y.jsxs)("ul",{style:{listStyle:"none",color:"white"},children:[Object(y.jsx)("li",{style:{fontSize:this.state.width/55,marginTop:50},children:Object(y.jsx)("strong",{children:"Blog"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/Blog/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"Blog"})}),Object(y.jsx)("li",{style:{fontSize:this.state.width/75},children:Object(y.jsx)("a",{href:"/News/",style:{textDecoration:"none",backgroundColor:"15006b",color:"white"},children:"News"})})]})})]}),Object(y.jsx)("hr",{style:{border:"solid 2px white",marginTop:"6%"}})]}),Object(y.jsxs)(b.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(y.jsx)(b.a.Header,{closeButton:!0,children:Object(y.jsx)(b.a.Title,{children:Object(y.jsx)("h1",{children:"Contact us"})})}),Object(y.jsxs)(b.a.Body,{children:[!1===this.state.apply&&Object(y.jsxs)(u.a,{onSubmit:this.handlerSubmit,children:[Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Label,{children:Object(y.jsx)("h2",{children:"Name:"})}),Object(y.jsx)(u.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Label,{children:Object(y.jsx)("h2",{children:"Phone:"})}),Object(y.jsx)(u.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Label,{children:Object(y.jsx)("h2",{children:"Email address:"})}),Object(y.jsx)(u.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(y.jsx)(u.a.Text,{className:"text-muted",children:Object(y.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(y.jsx)(g.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(y.jsxs)("div",{children:[Object(y.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(y.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(y.jsx)(b.a.Footer,{children:Object(y.jsx)(g.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})})}}]),n}(i.Component);var E=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(k,{}),Object(y.jsx)(D,{}),Object(y.jsx)(T,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),r(e),o(e)}))};o.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(E,{})}),document.getElementById("root")),N()}},[[73,1,2]]]);
//# sourceMappingURL=main.0a74b962.chunk.js.map