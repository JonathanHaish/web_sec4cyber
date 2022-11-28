import React , { Component } from 'react';
import VideoStript from './videoStript';


class Stript extends Component{
    state={
        scrollTop:0,
        height:this.props.height,
        width:this.props.width,
        widthStrip:window.innerWidth
    };
    changeSize(state){
      this.setState({widthStrip:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }

    render(){
      let height = window.innerHeight;
       return(
        <div className="stript1">
          <VideoStript height={this.state.height} scrollTop2={this.state.scrollTop} width={this.state.width}/>
          <div style={{marginTop:22,backgroundColor:'white',width:this.state.width,height:height,opacity:0.2}}></div>
          <h1 style={{marginLeft:200,top:30,color:'white',marginTop:"12%",position:"absolute",fontSize:this.state.widthStrip/23,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Are your IoT devices protected?</h1>
          <h1 style={{marginLeft:200,top:30,color:'white',marginTop:"18%",position:"absolute",fontSize:this.state.widthStrip/23,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Are your cloud servers secured?</h1>
          <h3 style={{marginLeft:200,top:150,color:'white',marginTop:"18.5%",position:"absolute",fontSize:this.state.widthStrip/52,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Secure your IoT devices and cloud servers from the Endpoint to the Cloud hermetically</h3>
        </div>
       );
    };
}

export default Stript;