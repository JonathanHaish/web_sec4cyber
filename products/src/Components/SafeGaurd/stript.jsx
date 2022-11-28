import React , { Component } from 'react';


class Stript extends Component{
    constructor(props){
        super(props);
        this.state={
            width:window.innerWidth,
            height:window.innerHeight,
            show:false,
            message:false,
            apply: false,
        };
   
    }
     
    
 
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
        return (parseFloat(window.innerHeight*0.1));
    };
    render(){
        let left = this.marginL();
        let _width = parseFloat(this.state.width);
        let _height = parseFloat(this.state.height/1.3);
        return (
            <div className="stript" style={{width:_width,height:_height}}>  
                <div style={{marginLeft:left,position:'absolute',marginTop:"10%"}}>
                      <h style={{fontSize:this.state.width/19,color:'white'}}><strong>SafeGuard</strong></h>
                      <h2 style={{fontSize:this.state.width/30,color:'white',textShadow:"6px 6px 6px black"}}>Secure Your Devices Network<br/>Protect Your Cloud Servers</h2>
                </div>
                
            </div>
        );
    };
}


export default Stript;