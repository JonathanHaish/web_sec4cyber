import React , { Component } from 'react';
import VideoStript from './VideoStript';



class Stript extends Component
{
   
    state={
        scrollTop:0,
        height:this.props.height,
        widthStrip:window.innerWidth,
        heightStrip:window.innerHeight
    };
    changeSize(state){
      this.setState({widthStrip:window.innerWidth,heightStrip:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
   
   
    render(){

        return(
            <div className="script1">
                <VideoStript height={this.state.heightStrip}/>
                <div style={{marginTop:22,backgroundColor:'white',width:this.state.width,height:this.state.height,opacity:0.1}}></div>
          <h1 style={{marginLeft:200,top:30,color:'white',marginTop:"12%",position:"absolute",fontSize:this.state.widthStrip/20,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Government & Defense</h1>
          <h3 style={{marginLeft:200,top:150,color:'white',marginTop:"12.5%",position:"absolute",fontSize:this.state.widthStrip/35,textShadow:'6px 6px 6px black, 6px 6px 6px black'}}>Securing IT/OT devices in a defense and security<br/>
environment and in critical infrastructure</h3>
            </div>
        );
    };
}


export default Stript;
