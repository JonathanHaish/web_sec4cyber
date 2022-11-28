import React ,{ Component } from 'react';
import VideoStript from './videoStript';



class Stript extends Component{
	state={
        scrollTop:0,
        height:window.innerheight,
        widthStrip:window.innerWidth
    };
    changeSize(state){
      this.setState({widthStrip:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }

	
	render(){
		return(
			<div className="stript1">
				<VideoStript height={this.state.height} width={this.state.widthStrip}/>
				<div style={{marginTop:22,backgroundColor:'white',width:this.state.width,height:this.state.scrollTop,opacity:0.2}}></div>
                  <h1 style={{marginLeft:200,top:30,color:'white',marginTop:"12%",position:"absolute",fontSize:this.state.widthStrip/17,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Industries & Energy</h1>
                  <h3 style={{marginLeft:200,top:150,color:'white',marginTop:"12.5%",position:"absolute",fontSize:this.state.widthStrip/42,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Securing connected devices in IIoT and</h3>
			      <h3 style={{marginLeft:200,top:150,color:'white',marginTop:"15.5%",position:"absolute",fontSize:this.state.widthStrip/42,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Critical infrastructure environments</h3>
			</div>
			);
	};
}

export default Stript;