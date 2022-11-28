import React , { Component } from 'react';

class Desc extends Component{
	render(){
		return(

			<div style={{marginTop:this.props.height,marginLeft: '10%'}}>
			<h1 style={{marginLeft:this.props.marginLeftT,fontSize:this.props.width/55}}><strong>The security challenge of Enterprise Edge systems</strong></h1>
			<p style={{fontSize:this.props.width/84}}>The modern network has no clear boundaries, Cloud, mobile and now IoT are punching holes in<br/>
the security circuit, <strong>enterprises</strong> and edge <strong>devices vendors</strong> are <strong>prime targets</strong> for attack.</p>
			<p style={{fontSize:this.props.width/84}}>Hackers can hack multiple <strong>enterprise targets,</strong> by compromising an edge device.</p>
			<p style={{fontSize:this.props.width/84}}>Edge devices like printers and routers are major targets for <strong>massive attack</strong> of malicious code execution.</p>
			<p style={{fontSize:this.props.width/84}}>Like the MFP (multi-function printer). A highly sophisticated, connected system that can print, copy, scan, email<br/>
and fax over <strong>external</strong> and <strong>internal networks.</strong></p>
			<p style={{fontSize:this.props.width/84}}>These kinds of devices have access to <strong>confidential company</strong> information and provide hackers access to <strong>sensitive<br/>
corporate assets,</strong> this could be a nightmare scenario that could <strong>affect thousands</strong> of <strong>enterprises.</strong></p>
			<p style={{fontSize:this.props.width/84}}>Sec4Cyber <strong>automatically embeds security</strong> into the connected system the <strong>control flow integrity (CFI)</strong> and<br/>
<strong>access control policy,</strong> so you can be calm and safe.</p>
		  </div>
			);
	};
}



export default Desc;