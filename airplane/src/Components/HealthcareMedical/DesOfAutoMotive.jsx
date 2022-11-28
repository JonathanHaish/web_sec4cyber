import React , { Component } from 'react';


class Desc extends Component{
	state={
        scrollTop:0,
        widthStrip:window.innerWidth,
		height:window.innerHeight
    };
    changeSize(state){
      this.setState({widthStrip:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
	render(){
		return(

			<div style={{marginTop:this.state.height,marginLeft: '10%'}}>
			  <h1 style={{marginLeft:this.props.marginLeftT,fontSize:this.state.widthStrip/55}}><strong>The security challenge of connected medical devices</strong></h1>
			  <p style={{fontSize:this.state.widthStrip/84}}>45%  of healthcare executives consider significant risk in medical devices (IoMT) devices.</p>
			  <p style={{fontSize:this.state.widthStrip/84}}>Hackers can attack through the cloud the <strong>Respirator</strong> by memory overflow and tamper with<br/>
the device, damaging its integrity and threatening <strong>patient lives.</strong></p>
			  <p style={{fontSize:this.state.widthStrip/84}}>Similarly, blood-gas analyzer that infected by malware can lead to lateral movement and to<br/> 
<strong>extract sensitive patient data.</strong></p>
			  <p style={{fontSize:this.state.widthStrip/84}}>The recent increase of connected medical device vulnerabilities has pushed customers and<br/> 
regulatory agencies to rapidly increase their demands for <strong>improved medical device security.</strong></p>
              <p style={{fontSize:this.state.widthStrip/84}}>At the same time, apart from <strong>medical claims</strong> it has significantly increased the security risks associated<br/> 
with <strong>business security,</strong> reputation of medical device <strong>manufacturers</strong> and <strong>healthcare institutions.</strong></p>
              <p style={{fontSize:this.state.widthStrip/84}}><strong>Sec4Cyber automatically embeds security into the connected medical devices the control flow integrity (CFI) and<br/>
access control policy, so you can be calm and safe.</strong></p>
		    </div>
			);
	};
}



export default Desc;