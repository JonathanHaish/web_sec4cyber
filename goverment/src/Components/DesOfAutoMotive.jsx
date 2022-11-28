import React , { Component } from 'react';

class Desc extends Component{
	state={
        widthStrip:window.innerWidth,
		marginTop:window.innerHeight
    };
    changeSize(state){
      this.setState({widthStrip:window.innerWidth,marginTop:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
	render(){

		return(
   
			<div style={{marginTop:this.state.marginTop,marginLeft: '10%',width: '85%'}}>
              
			  <h1 style={{fontSize: this.state.widthStrip/55,marginLeft:this.props.marginLeftT}}><strong>The security challenge for physical safety and security<br/>
devices in critical infrastructure and defense environment</strong></h1>
			  <p style={{fontSize: this.state.widthStrip/84,marginLeft:this.props.marginLeft}}>Security cameras, alarm systems, access control readers, <strong>Scada controllers</strong> and</p>
			  <p style={{fontSize: this.state.widthStrip/84,marginLeft:this.props.marginLeft}}>divers connected defense and security IT/OT systems,</p>
			  <p style={{fontSize: this.state.widthStrip/84,marginLeft:this.props.marginLeft}}>All of them expos to security threats and cyberattacks.</p>
			  <br/>
			  <p style={{fontSize: this.state.widthStrip/84,marginLeft:this.props.marginLeft}}>Vulnerabilities in these can compromising critical security processes, simple hacks can end up disabling</p>
			  <p style={{fontSize: this.state.widthStrip/84,marginLeft:this.props.marginLeft}}>entire security systems and can expose to a life-threatening physical risk.</p>
			  <br/>
			  <p style={{fontSize: this.state.widthStrip/84,marginLeft:this.props.marginLeft}}>Securing these <strong>critical systems</strong> become <strong>mission critical</strong> to <strong>our lives and freedom.</strong></p>
		    </div>
			);
	};
}



export default Desc;