import React , { Component } from 'react';

class Desc extends Component{
	constructor(props){
        super(props);
        this.state={
            width:window.innerWidth,
            height:window.innerHeight,
            
        };
        
        
     }
     
    
 
     changeSize(state){
         this.setState({width:window.innerWidth,height:window.innerHeight})
     }
 
     componentDidMount(){
         window.addEventListener('resize',() => this.changeSize(this.state));
     }
	render(){

		return(

			<div style={{marginTop:420,marginLeft: '10%'}}>
			<h1 style={{marginLeft:this.props.marginLeftT,fontSize: this.state.width/55}}><strong>The security challenge in Industrial IoT (IIoT) and in critical<br/> infrastructure environments</strong></h1>
			<p style={{fontSize:this.state.width/84}}>With great innovation comes great risk, it has greatly increased the industrial environment’s exposure to<br/>security threats. </p>
			<p style={{fontSize:this.state.width/84}}>Cyber-attacks pose a great risk to both <strong>business continuity</strong> and the <strong>production floor.</strong></p>
			<p style={{fontSize:this.state.width/84}}>Businesses, governments and homes all rely on the <strong>“always on”</strong> service of their electricity networks,<br/>traffic systems, gas pipes, water facilities and other <strong>critical utility infrastructure.</strong></p>
			<p style={{fontSize:this.state.width/84}}>The rapid growth in the sheer number of devices has greatly <strong>increased the utilities’</strong> exposure to security <br/>threats and the risk of cyberattacks.</p>
		    <p style={{fontSize:this.state.width/84}}><strong>Smooth operations</strong> of those <strong>critical systems</strong> become <strong>mission critical</strong> to our <strong>daily lives.</strong></p>
		</div>
			);
	};
}


export default Desc;