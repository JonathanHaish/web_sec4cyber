(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var x=n(0),a=n.n(x),r=n(21),s=n.n(r),i=(n(61),n(11)),c=n(12),o=n(14),l=n(13),j=(n(62),n.p+"static/media/transport.833b724f.mp4"),h=n(3),d=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e;return e=this.props.height<=200?1200:400,Object(h.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,style:{position:"absolute",width:"100%",left:"50%",top:"50%",height:e,objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"},children:Object(h.jsx)("source",{src:j,type:"video/mp4"})})}}]),n}(x.Component),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var x=arguments.length,a=new Array(x),r=0;r<x;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={scrollTop:0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){return e.listenEvent(e.state)}))}},{key:"listenEvent",value:function(e){var t=window.pageYOffset;this.setState({scrollTop:t})}},{key:"format",value:function(){return this.state.scrollTop<=210?"stript2":"stript1"}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:this.format(),children:[Object(h.jsx)(d,{height:this.state.scrollTop}),Object(h.jsx)("h1",{style:{marginLeft:200,marginTop:"19%",color:"white",textShadow:"7px 7px 7px black, 7px 7px 7px black,7px 7px 7px black",position:"absolute",fontSize:150},children:"Consumer IoT"})]})}}]),n}(x.Component),u=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{marginLeft:500,marginTop:100},children:[Object(h.jsx)("h2",{style:{color:"black",fontSize:60},children:"Description...."}),Object(h.jsx)("div",{style:{width:900,overflowWrap:"break-word"},children:Object(h.jsx)("p",{style:{color:"black",fontSize:25},children:this.props.description.text})})]})}}]),n}(x.Component),O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"format",value:function(){return{marginLeft:240,marginTop:70,borderBottom:"2px solid Grey"}}},{key:"styleP",value:function(){return{color:"black",textDecoration:"none",fontSize:35,marginTop:30}}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"row",style:{marginTop:150,marginLeft:500,fontSize:60},children:[Object(h.jsx)("img",{alt:"Move Drawing(in flash)...",style:{width:150,hight:150,marginTop:250}}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"row",style:this.format(),children:Object(h.jsxs)("a",{href:"/safeTrip/",style:this.styleP(),children:[Object(h.jsx)("img",{alt:"SafeTript.."}),"  SafeTript........................................................."]})}),Object(h.jsx)("div",{className:"row",style:this.format(),children:Object(h.jsxs)("a",{href:"/safeCAN/",style:this.styleP(),children:[Object(h.jsx)("img",{alt:"SafeCAN.."}),"  SafeCAN............................................................."]})}),Object(h.jsx)("div",{className:"row",style:this.format(),children:Object(h.jsxs)("a",{href:"/safeGuard/",style:this.styleP(),children:[Object(h.jsx)("img",{alt:"SafeGaurd.."}),"  SafeGaurd........................................................."]})})]})]})}}]),n}(x.Component),f=n(39),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{style:{marginTop:450},children:Object(h.jsxs)(f.a,{children:[Object(h.jsxs)(f.a.Item,{children:[Object(h.jsx)("img",{src:"/sec.jpeg",style:{width:1700,height:550,marginLeft:80},alt:"jjjjjj"}),Object(h.jsx)(f.a.Caption,{children:Object(h.jsx)("h1",{children:"hello"})})]}),Object(h.jsxs)(f.a.Item,{children:[Object(h.jsx)("img",{src:"/pick1.jpg",style:{width:1700,height:550,marginLeft:80},alt:"jjjjjj"}),Object(h.jsx)(f.a.Caption,{children:Object(h.jsx)("h1",{children:"hello"})})]})]})})}}]),n}(x.Component),m=n(22),g=n(82),y=n(81),v=n(79),k=n(80),w=n(78),S=(n(52),n(76)),C=n(83),T=n(84),L=n(77),z=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var x;return Object(i.a)(this,n),(x=t.call(this,e)).toggle=x.toggle.bind(Object(m.a)(x)),x.onMouseEnter=x.onMouseEnter.bind(Object(m.a)(x)),x.onMouseLeave=x.onMouseLeave.bind(Object(m.a)(x)),x.state={dropdownOpen:!1},x}return Object(c.a)(n,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"formatDiv",value:function(){return!0===this.state.dropdownOpen?{fontSize:30,backgroundColor:"white",color:"black",borderColor:"black"}:{fontSize:30,backgroundColor:"white",color:"black",borderColor:"white"}}},{key:"render",value:function(){return Object(h.jsxs)(S.a,{className:"dropDwon",style:{marginLeft:50},onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(h.jsx)(C.a,{style:this.formatDiv(),children:Object(h.jsx)("strong",{children:this.props.name})}),Object(h.jsxs)(T.a,{children:[this.props.list.map((function(e){return Object(h.jsx)(L.a,{style:{fontSize:25},children:Object(h.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/"+e+"/",children:e})})})),";"]})]})}}]),n}(x.Component),N=n(56),E=n.n(N),M=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var x;return Object(i.a)(this,n),(x=t.call(this,e)).state={dropdownOpen:!1,listI:["AutoMotive","Indusrtry 4.0","Emergency & Defence","Enterprize Edge","Consumer IoT"],listP:["SafeTript","SafeCAN","SafeGaurd","Security & services"],listB:["Blog","News"],show:!1,message:!1},x.contactRefernce=a.a.createRef(),x.handelChange=x.handelChange.bind(Object(m.a)(x)),x.handlerSubmit=x.handlerSubmit.bind(Object(m.a)(x)),x}return Object(c.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),E.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({show:!1,message:!0}),alert("Thank you very much!")}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(g.a,{bg:"white",fixed:"top",variant:"light",children:[Object(h.jsx)(g.a.Brand,{href:"/",children:Object(h.jsx)("img",{src:"/logoName.png",style:{height:140},alt:"jjjjjj"})}),Object(h.jsxs)(y.a,{className:"mr-auto",children:[Object(h.jsx)(z,{name:"Products & Services",list:this.state.listP}),Object(h.jsx)(z,{name:"Industry & Energy",list:this.state.listI}),Object(h.jsx)(z,{name:"Blog & News",list:this.state.listB}),Object(h.jsx)(y.a.Link,{href:"#features",style:{fontSize:30,marginLeft:50,color:"black"},children:Object(h.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/about/",children:Object(h.jsx)("strong",{children:"About"})})})]}),Object(h.jsx)(y.a.Link,{id:"Contact",href:"#Contact",value:this.state.feedback,onClick:function(){return e.handleShow()},style:{fontSize:30,marginRight:50,color:"black"},children:Object(h.jsx)("strong",{children:"Contact"})})]}),Object(h.jsxs)(v.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(h.jsx)(v.a.Header,{closeButton:!0,children:Object(h.jsx)(v.a.Title,{children:Object(h.jsx)("h1",{children:"Contact us"})})}),Object(h.jsx)(v.a.Body,{children:Object(h.jsxs)(k.a,{onSubmit:this.handlerSubmit,children:[Object(h.jsxs)(k.a.Group,{children:[Object(h.jsx)(k.a.Label,{children:Object(h.jsx)("h2",{children:"Name:"})}),Object(h.jsx)(k.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(h.jsxs)(k.a.Group,{children:[Object(h.jsx)(k.a.Label,{children:Object(h.jsx)("h2",{children:"Phone:"})}),Object(h.jsx)(k.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(h.jsxs)(k.a.Group,{children:[Object(h.jsx)(k.a.Label,{children:Object(h.jsx)("h2",{children:"Email address:"})}),Object(h.jsx)(k.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(h.jsx)(k.a.Text,{className:"text-muted",children:Object(h.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(h.jsx)(w.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]})}),Object(h.jsx)(v.a.Footer,{children:Object(h.jsx)(w.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})}}]),n}(x.Component),B=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var x=arguments.length,a=new Array(x),r=0;r<x;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={file1:{text:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(M,{}),Object(h.jsx)(b,{}),Object(h.jsx)(u,{style:{fontSize:10},description:this.state.file1}),Object(h.jsx)(O,{}),Object(h.jsx)(p,{style:{marginTop:150}})]})}}]),n}(x.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,x=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),x(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),P()}},[[72,1,2]]]);
//# sourceMappingURL=main.132b9741.chunk.js.map