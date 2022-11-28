import React , { Component } from 'react';

class Desc extends Component{
	render(){
		return(

			<div style={{marginTop:this.props.height*0.4,marginLeft: '10%'}}>
			<h1 style={{marginLeft:this.props.marginLeftT,fontSize:this.props.width/55}}><strong>The security challenge in Consumer IoT environments</strong></h1>
			<p style={{fontSize:this.props.width/84}}>Smart homes, security cameras, alarm systems, BMS (building management systems) and etc.</p>
			<p style={{fontSize:this.props.width/84}}>All of them expos to security threats and cyberattacks.</p>
			<p style={{fontSize:this.props.width/84}}>Your IoT device is vulnerable. There could be a buffer overflow in the code, or a 3rd-party code that<br/>
was not developed according to <strong>security standards.</strong></p>
			<p style={{fontSize:this.props.width/84}}>IoT devices have access to vast amounts of data. This, coupled with their access to edge devices<br/>
and cloud services make them an <strong>attractive target, end-users</strong> become more susceptible to attacks.</p>
			<p style={{fontSize:this.props.width/84}}>Vulnerabilities in these can sensitive data theft, compromising <strong>critical security processes,</strong> simple hacks can<br/>
end up <strong>disabling entire security</strong> systems and can expose to a life-threatening <strong>physical risk.</strong></p>
			<p style={{fontSize:this.props.width/84}}>Sec4Cyber <strong>automatically embeds security</strong> into the connected device the <strong>control flow integrity (CFI)</strong> and<br/>
<strong>access control policy,</strong> so you can be calm and safe.</p>
		  </div>
			);
	};
}


export default Desc;