import React , { Component } from 'react';
import VidewStript1  from './videoStript';



class Stript extends Component
{
    state={
        scrollTop:0,
        width:window.innerWidth,
        height:window.innerHeight
    };
    changeSize(state){
      this.setState({width:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }


    
   /*
    scrollPosition(){
        return this.state.scrollTop <= 325 ? "stript2" : "stript1";
    };
  */
    scrollPosition(){
        
        return this.state.scrollTop <= 200 ? "stript2" : "stript1";
    };

    render(){

        return(
            <div style={{height:110}} className={this.scrollPosition()}>
                <VidewStript1 height={this.state.height} width={this.state.width}/>
                <div style={{marginTop:22,backgroundColor:'white',width:this.state.width,height:this.state.height,opacity:0.2}}></div>
                <h1 style={{marginLeft:200,top:30,color:'white',marginTop:"12%",position:"absolute",fontSize:this.state.width/22,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}><strong>Automotive & Transportation</strong></h1>
                <h3 style={{marginLeft:200,top:150,color:'white',marginTop:"12.5%",position:"absolute",fontSize:this.state.width/30,textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>Securing Autonomous and smart transportation <br/>without impacting Automotive performance</h3>
            </div>
        );
    };
}


export default Stript;