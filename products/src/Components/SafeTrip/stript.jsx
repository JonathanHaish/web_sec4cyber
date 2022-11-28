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
        return (parseFloat(window.innerWidth/6.5));
    };

    marginT(){
        return (parseFloat(window.innerHeight*0.2));
    };
    render(){
        let left = this.marginL();
        let top = this.marginT();
        let _width = parseFloat(window.innerWidth);
        let _height = parseFloat(window.innerHeight/1.5);
        return (
            <div className="stript2" style={{width:_width,height:_height,marginTop:'5%'}}>  
                <div style={{marginLeft:left,marginTop:top,position:'absolute'}}>
                    <div style={{marginLeft:left+160}}>
                       <h1 style={{fontSize:this.state.width/19,color:'white',textShadow:'4px 4px 4px black, 4px 4px 4px black'}}><strong>SafeTrip</strong></h1>
                    </div>
                    <h2 style={{fontSize:this.state.width/40,color:'white',textShadow:'4px 4px 4px black, 4px 4px 4px black'}}>A Real-Time Cyber Security Suite for IoT/OT Connected Devices</h2>
                </div>
                
            </div>
        );
    };
}


export default Stript;