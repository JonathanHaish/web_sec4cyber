(this.webpackJsonpairplane=this.webpackJsonpairplane||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0),c=n.n(i),s=n(8),x=n.n(s),a=(n(17),n(3)),o=n(4),l=n(6),j=n(5),h=(n(18),n.p+"static/media/airplane.700596ca.mp4"),u=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t;return t=this.props.height<=200?1200:400,Object(r.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,style:{position:"absolute",width:"100%",left:"50%",top:"50%",height:t,objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"},children:Object(r.jsx)("source",{src:h,type:"video/mp4"})})}}]),n}(i.Component),b=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={scrollTop:0},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("scroll",(function(){return t.listenEvent(t.state)}))}},{key:"listenEvent",value:function(t){var e=window.pageYOffset;this.setState({scrollTop:e})}},{key:"scrollPosition",value:function(){return this.state.scrollTop<=200?"stript2":"stript1"}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:this.scrollPosition(),children:[Object(r.jsx)(u,{height:this.state.scrollTop}),Object(r.jsx)("h1",{className:"imgTitle",style:{marginLeft:200,position:"absolute",fontSize:150,color:"white",opacity:.8},children:"Airplanes"})]})}}]),n}(i.Component),d=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{style:{marginLeft:500,marginTop:100},children:[Object(r.jsx)("h2",{style:{color:"black",fontSize:60},children:"Description...."}),Object(r.jsx)("div",{style:{width:900,overflowWrap:"break-word"},children:Object(r.jsx)("p",{style:{color:"black",fontSize:25},children:this.props.description.text})})]})}}]),n}(i.Component),p=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"format",value:function(){return{marginLeft:240,marginTop:70,borderBottom:"2px solid Grey"}}},{key:"styleP",value:function(){return{color:"black",textDecoration:"none",fontSize:35,marginTop:30}}},{key:"render",value:function(){return Object(r.jsx)("div",{style:{backgroundColor:"lightgray"},children:Object(r.jsxs)("div",{className:"row",style:{marginTop:150,marginLeft:500,fontSize:60},children:[Object(r.jsx)("img",{alt:"Car...",style:{width:150,hight:150,marginTop:250}}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"row",style:this.format(),children:Object(r.jsxs)("a",{href:"/safeTrip/",style:this.styleP(),children:[Object(r.jsx)("img",{alt:"SafeTript.."}),"  SafeTript........................................................."]})}),Object(r.jsx)("div",{className:"row",style:this.format(),children:Object(r.jsxs)("a",{href:"/safeCAN/",style:this.styleP(),children:[Object(r.jsx)("img",{alt:"SafeCAN.."}),"  SafeCAN............................................................."]})}),Object(r.jsx)("div",{className:"row",style:this.format(),children:Object(r.jsxs)("a",{href:"/safeGuard/",style:this.styleP(),children:[Object(r.jsx)("img",{alt:"SafeGaurd.."}),"  SafeGaurd........................................................."]})}),Object(r.jsx)("div",{style:{height:150}})]})]})})}}]),n}(i.Component),f=n(9),O=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{style:{marginTop:450},children:Object(r.jsxs)(f.a,{children:[Object(r.jsxs)(f.a.Item,{children:[Object(r.jsx)("img",{src:"/lolo.jpg",style:{width:1700,height:550,marginLeft:80},alt:"jjjjjj"}),Object(r.jsx)(f.a.Caption,{children:Object(r.jsx)("h1",{children:"hello"})})]}),Object(r.jsxs)(f.a.Item,{children:[Object(r.jsx)("img",{src:"/autoMotive.jpg",style:{width:1700,height:550,marginLeft:80},alt:"jjjjjj"}),Object(r.jsx)(f.a.Caption,{children:Object(r.jsx)("h1",{children:"hello"})})]})]})})}}]),n}(i.Component),y=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={desc:{text:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(b,{scrollTop:0}),Object(r.jsx)(d,{description:this.state.desc}),Object(r.jsx)(p,{}),Object(r.jsx)(O,{})]})}}]),n}(i.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),i(t),c(t),s(t)}))};x.a.render(Object(r.jsx)(y,{}),document.getElementById("root")),m()}},[[21,1,2]]]);
//# sourceMappingURL=main.ebe7709f.chunk.js.map