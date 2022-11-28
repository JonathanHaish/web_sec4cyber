import React , { Component } from 'react';


class Stript extends Component{

    state={
        width:window.innerWidth,
        height:window.innerHeight,
        
    };

    changeSize(state){
        this.setState({width:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
        window.addEventListener('resize',() => this.changeSize(this.state));
    }
    marginL(){
        return (parseFloat(window.innerWidth/4.5));
    };

    marginT(){
        return (parseFloat(window.innerHeight*0.9));
    };
    render(){
        let _width = parseFloat(window.innerWidth);
        let _height = parseFloat(window.innerHeight/1.35);
        return (
            <div className="stript3" style={{width:_width,height:_height,marginTop:"6%"}}>  
                      <div style={{marginLeft:_width/4.7,position:'absolute',marginTop:_height/4}}>
                      <h1 style={{fontSize:this.state.width/26,color:'white',textShadow:"6px 6px 6px black"}}>Empower Your Security Team</h1>
                      <h1 style={{fontSize:this.state.width/26,color:'white',textShadow:"6px 6px 6px black",marginLeft:"42%"}}>with</h1>
                      <h1 style={{fontSize:this.state.width/26,color:'white',textShadow:"6px 6px 6px black"}}>Sec4Cyber Security Experts</h1>
                      </div>
                
            </div>
        );
    };
}


export default Stript;