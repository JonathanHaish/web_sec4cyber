(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(0),i=n.n(s),o=n(22),r=n.n(o),c=(n(64),n(15)),x=n(16),l=n(19),h=n(17),d=(n(65),n.p+"static/media/video_of.71e16f41.mp4"),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.height;return Object(a.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,style:{position:"absolute",width:"100%",left:"50%",top:"50%",height:e,objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"},children:Object(a.jsx)("source",{src:d,type:"video/mp4"})})}}]),n}(s.Component),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={scrollTop:0,height:e.props.height,width:e.props.width},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"stript1",children:[Object(a.jsx)(j,{height:this.state.height,scrollTop2:this.state.scrollTop,width:this.state.width}),Object(a.jsx)("h1",{style:{marginLeft:200,top:30,color:"white",textShadow:"7px 7px 7px black, 7px 7px 7px black,7px 7px 7px black",marginTop:250,position:"absolute",fontSize:120},children:Object(a.jsx)("strong",{children:"We protect IoT"})})]})}}]),n}(s.Component),b=n(24),p=n(83),O=n(82),f=n(80),m=n(81),g=n(79),v=(n(52),n(77)),y=n(85),w=n(84),k=n(78),C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggle=a.toggle.bind(Object(b.a)(a)),a.onMouseEnter=a.onMouseEnter.bind(Object(b.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(b.a)(a)),a.state={dropdownOpen:!1},a}return Object(x.a)(n,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"formatDiv",value:function(){return!0===this.state.dropdownOpen?{fontSize:30,backgroundColor:"white",color:"black",borderColor:"black"}:{fontSize:30,backgroundColor:"white",color:"black",borderColor:"white"}}},{key:"render",value:function(){return Object(a.jsxs)(v.a,{className:"dropDwon",style:{marginLeft:50},onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(a.jsx)(y.a,{style:this.formatDiv(),children:this.props.name}),Object(a.jsxs)(w.a,{children:[this.props.list.map((function(e){return Object(a.jsx)(k.a,{style:{fontSize:25},children:Object(a.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/"+e+"/",children:e})})})),";"]})]})}}]),n}(s.Component),S=n(56),L=n.n(S),z=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={dropdownOpen:!1,listI:["Automotive & Transport","Indusrtry 4.0 & Energey","Emergency & Defense","Enterprize Edge","Consumer IoT"],listP:["SafeTrip","SafeCAN","SafeGaurd","Product Security"],listB:["Blog","News"],listC:["About Us","Solutions","Datasheet"],show:!1,message:!1,apply:!1},a.contactRefernce=i.a.createRef(),a.handelChange=a.handelChange.bind(Object(b.a)(a)),a.handlerSubmit=a.handlerSubmit.bind(Object(b.a)(a)),a}return Object(x.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1,apply:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,apply:!1})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),L.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({message:!0,apply:!0})}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(p.a,{bg:"white",fixed:"top",variant:"light",children:[Object(a.jsx)(p.a.Brand,{href:"/",children:Object(a.jsx)("img",{src:"./logoName.png",style:{height:90,marginLeft:120},alt:"jjjjjj"})}),Object(a.jsxs)(O.a,{className:"mr-auto",style:{marginLeft:200},children:[Object(a.jsx)(C,{name:"Products & Services",list:this.state.listP}),Object(a.jsx)(C,{name:"Industries",list:this.state.listI}),Object(a.jsx)(C,{name:"Company",list:this.state.listC}),Object(a.jsx)(C,{name:"Blog",list:this.state.listB})]}),Object(a.jsx)(O.a.Link,{id:"Contact",href:"#Contact",value:this.state.feedback,onClick:function(){return e.handleShow()},style:{fontSize:30,marginRight:140,color:"black"},children:"Contact"})]}),Object(a.jsxs)(f.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(a.jsx)(f.a.Header,{closeButton:!0,children:Object(a.jsx)(f.a.Title,{children:Object(a.jsx)("h1",{children:"Contact us"})})}),Object(a.jsxs)(f.a.Body,{children:[!1===this.state.apply&&Object(a.jsxs)(m.a,{onSubmit:this.handlerSubmit,children:[Object(a.jsxs)(m.a.Group,{children:[Object(a.jsx)(m.a.Label,{children:Object(a.jsx)("h2",{children:"Name:"})}),Object(a.jsx)(m.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(a.jsxs)(m.a.Group,{children:[Object(a.jsx)(m.a.Label,{children:Object(a.jsx)("h2",{children:"Phone:"})}),Object(a.jsx)(m.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(a.jsxs)(m.a.Group,{children:[Object(a.jsx)(m.a.Label,{children:Object(a.jsx)("h2",{children:"Email address:"})}),Object(a.jsx)(m.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(a.jsx)(m.a.Text,{className:"text-muted",children:Object(a.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(a.jsx)(g.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]}),!0===this.state.apply&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"xxxxxxxxxxxxxxxxxxxxxxx"}),Object(a.jsx)("p",{children:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})]})]}),Object(a.jsx)(f.a.Footer,{children:Object(a.jsx)(g.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})}}]),n}(s.Component),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={height:window.height,width:"100",desc:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(z,{}),Object(a.jsx)(u,{heigth:this.state.height,width:this.state.width})]})}}]),n}(s.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(T,{}),document.getElementById("root")),B()}},[[73,1,2]]]);
//# sourceMappingURL=main.cf849f57.chunk.js.map