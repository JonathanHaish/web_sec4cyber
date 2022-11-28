import React , { Component } from 'react';
import VideoStript from './VideoStript';

class Stript extends Component
{
    state={
        scrollTop:0,
        height:window.innerHeight,
        width:window.innerWidth,
    };
    changeSize(state){
      this.setState({width:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
    
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
    render(){

        return(
            <div style={{height:100}} className="script2">
                <VideoStript height={this.state.height} width={this.state.width} />
                <div style={{marginTop:22,backgroundColor:'white',width:this.state.width,height:this.state.height,opacity:0.2}}></div>
                <h1 style={{marginLeft:200,top:30,color:'white',marginTop:"12%",position:"absolute",fontSize:this.state.width/22,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}><strong>Enterprise Edge</strong></h1>
                <h3 style={{marginLeft:200,top:150,color:'white',marginTop:"12.5%",position:"absolute",fontSize:this.state.width/30,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Securing the Enterprise Edge systems</h3>
            </div>
        );
    };
}


export default Stript;
