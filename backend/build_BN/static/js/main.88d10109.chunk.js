(this.webpackJsonpblognews=this.webpackJsonpblognews||[]).push([[0],{63:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),s=n.n(i),c=(n(63),n(22)),o=n(23),l=n(18),h=n(28),u=n(27),d=n(82),j=n(81),b=n(79),g=n(80),O=n(78),f=(n(37),n(76)),x=n(84),m=n(83),p=n(77),v=n(5),y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggle=a.toggle.bind(Object(l.a)(a)),a.onMouseEnter=a.onMouseEnter.bind(Object(l.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(l.a)(a)),a.state={dropdownOpen:!1},a}return Object(o.a)(n,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"formatDiv",value:function(){return!0===this.state.dropdownOpen?{fontSize:30,backgroundColor:"white",color:"black",borderColor:"black"}:{fontSize:30,backgroundColor:"white",color:"black",borderColor:"white"}}},{key:"render",value:function(){return Object(v.jsxs)(f.a,{className:"dropDwon",style:{marginLeft:50},onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(v.jsx)(x.a,{style:this.formatDiv(),children:Object(v.jsx)("strong",{children:this.props.name})}),Object(v.jsxs)(m.a,{children:[this.props.list.map((function(e){return Object(v.jsx)(p.a,{style:{fontSize:25},children:Object(v.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/"+e+"/",children:e})})})),";"]})]})}}]),n}(a.Component),w=n(55),k=n.n(w),S=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={dropdownOpen:!1,listI:["AutoMotive","Indusrtry & Energy","Goverment & Defence","AirCrafts","Transportation"],listP:["SafeTript","SafeCAN","SafeGaurd","Security & services"],listB:["Blog","News"],show:!1,message:!1},a.contactRefernce=r.a.createRef(),a.handelChange=a.handelChange.bind(Object(l.a)(a)),a.handlerSubmit=a.handlerSubmit.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handlerSubmit",value:function(e){e.preventDefault(),k.a.sendForm("contact_service","template_on8yqk4",e.target,"user_q5vn2m0VbLTY6w7BBB28H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),this.setState({show:!1,message:!0}),alert("Thank you very much!")}},{key:"handelChange",value:function(e){"name"===e.target.id?this.setState({feedbackN:e.target.value}):"email"===e.target.id?this.setState({feedbackE:e.target.value}):this.setState({feedbackP:e.target.value})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(d.a,{bg:"white",fixed:"top",variant:"light",children:[Object(v.jsx)(d.a.Brand,{href:"/",children:Object(v.jsx)("img",{src:"/logoName.png",style:{height:140},alt:"jjjjjj"})}),Object(v.jsxs)(j.a,{className:"mr-auto",children:[Object(v.jsx)(y,{name:"Products & Services",list:this.state.listP}),Object(v.jsx)(y,{name:"Industry & Energy",list:this.state.listI}),Object(v.jsx)(y,{name:"Blog & News",list:this.state.listB}),Object(v.jsx)(j.a.Link,{href:"#features",style:{fontSize:30,marginLeft:50,color:"black"},children:Object(v.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/about/",children:Object(v.jsx)("strong",{children:"About"})})})]}),Object(v.jsx)(j.a.Link,{id:"Contact",href:"#Contact",value:this.state.feedback,onClick:function(){return e.handleShow()},style:{fontSize:30,marginRight:50,color:"black"},children:Object(v.jsx)("strong",{children:"Contact"})})]}),Object(v.jsxs)(b.a,{size:"lg","aria-labelledby":"example-modal-sizes-title-lg",show:this.state.show,onHide:function(){return e.handleClose()},children:[Object(v.jsx)(b.a.Header,{closeButton:!0,children:Object(v.jsx)(b.a.Title,{children:Object(v.jsx)("h1",{children:"Contact us"})})}),Object(v.jsx)(b.a.Body,{children:Object(v.jsxs)(g.a,{onSubmit:this.handlerSubmit,children:[Object(v.jsxs)(g.a.Group,{children:[Object(v.jsx)(g.a.Label,{children:Object(v.jsx)("h2",{children:"Name:"})}),Object(v.jsx)(g.a.Control,{style:{fontSize:25},name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(v.jsxs)(g.a.Group,{children:[Object(v.jsx)(g.a.Label,{children:Object(v.jsx)("h2",{children:"Phone:"})}),Object(v.jsx)(g.a.Control,{style:{fontSize:25},type:"text",id:"phone",name:"phone",placeholder:"Phone"})]}),Object(v.jsxs)(g.a.Group,{children:[Object(v.jsx)(g.a.Label,{children:Object(v.jsx)("h2",{children:"Email address:"})}),Object(v.jsx)(g.a.Control,{style:{fontSize:25},id:"email",name:"email",type:"email",placeholder:"Enter email"}),Object(v.jsx)(g.a.Text,{className:"text-muted",children:Object(v.jsx)("h6",{children:"We'll never share your email with anyone else."})})]}),Object(v.jsx)(O.a,{size:"lg",variant:"primary",type:"submit",children:"Submit"})]})}),Object(v.jsx)(b.a.Footer,{children:Object(v.jsx)(O.a,{size:"lg",variant:"secondary",onClick:function(){return e.handleClose()},children:"Close"})})]})]})}}]),n}(a.Component),C=n(85),L=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={height:250,shB:"",width:350},e}return Object(o.a)(n,[{key:"handlerLeave",value:function(){this.setState((function(e,t){return{height:e.height-100,shB:"",width:e.width-100}}))}},{key:"handlerKeep",value:function(){this.setState((function(e,t){return{height:e.height+100,shB:"8px 8px 8px white, 6px 6px 6px Navy",width:e.width+100}}))}},{key:"render",value:function(){var e=this,t=this.state.height,n=this.state.width,a=this.state.shB;return console.log(t),Object(v.jsx)("div",{style:{marginLeft:100},children:Object(v.jsxs)(C.a,{style:{width:n,boxShadow:a},onMouseLeave:function(){return e.handlerLeave()},onMouseEnter:function(){return e.handlerKeep()},children:[Object(v.jsx)("a",{href:"#link",children:Object(v.jsx)("div",{style:{backgroundColor:"black",width:"100%",height:t}})}),Object(v.jsxs)(C.a.Body,{children:[Object(v.jsx)(C.a.Title,{children:"Card Title"}),Object(v.jsx)(C.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(v.jsx)(O.a,{variant:"primary",children:"Go somewhere"})]})]})})}}]),n}(a.Component),N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={listN:["1","2","3"],listN2:["4","5","6"]},e}return Object(o.a)(n,[{key:"getImage",value:function(e){return console.log(e),""}},{key:"getDesc",value:function(e){return console.log(e),""}},{key:"getDate",value:function(e){return console.log(e),""}},{key:"render",value:function(){var e=this,t=window.innerWidth/9,n=window.innerHeight/4;return Object(v.jsxs)("div",{style:{marginTop:n,marginLeft:t},children:[Object(v.jsx)("div",{className:"row",children:this.state.listN.map((function(t){return Object(v.jsx)(L,{image:function(){return e.getImage(t)},desc:function(){return e.getDesc(t)},date:function(){return e.getdate(t)}})}))}),Object(v.jsx)("div",{className:"row",style:{marginTop:100},children:this.state.listN2.map((function(t){return Object(v.jsx)(L,{image:function(){return e.getImage(t)},desc:function(){return e.getDesc(t)},date:function(){return e.getdate(t)}})}))}),Object(v.jsx)("div",{className:"row",style:{marginTop:100},children:this.state.listN2.map((function(t){return Object(v.jsx)(L,{image:function(){return e.getImage(t)},desc:function(){return e.getDesc(t)},date:function(){return e.getdate(t)}})}))})]})}}]),n}(a.Component);n(72);var B=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(S,{}),Object(v.jsx)(N,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root")),M()}},[[73,1,2]]]);
//# sourceMappingURL=main.88d10109.chunk.js.map