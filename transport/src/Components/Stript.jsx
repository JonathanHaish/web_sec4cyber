import React ,{ Component } from 'react';
import VideoStript from './videoStript';



class Stript extends Component{
	
	render(){
		return(
			<div className="stript1">
				<VideoStript height={this.props.height} />
				<div style={{marginTop:22,backgroundColor:'white',width:this.props.width,height:this.props.height,opacity:0.2}}></div>
                <h1 style={{marginLeft:200,top:30,color:'white',marginTop:"12%",position:"absolute",fontSize:this.props.width/22,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}><strong>Consumer IoT</strong></h1>
                <h3 style={{marginLeft:200,top:150,color:'white',marginTop:"12.5%",position:"absolute",fontSize:this.props.width/30,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Securing the Internet of Things with<br/>
built-in security automatically</h3>
			</div>
			);
	};
}

export default Stript;