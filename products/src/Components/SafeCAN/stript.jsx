import React , { Component } from 'react';


class Stript extends Component{
    marginL(){
        return (parseFloat(window.innerWidth/4.5));
    };

    marginT(){
        return (parseFloat(window.innerHeight*0.1));
    };
    render(){
        let left = this.marginL();
        let top = this.marginT();
        let _width = parseFloat(window.innerWidth);
        let _height = parseFloat(window.innerHeight/1.5);
        return (
            <div className="stript3" style={{width:_width,height:_height}}>  
                <div style={{marginLeft:left,marginTop:top,position:'absolute'}}>
                      <h style={{fontSize:150,color:'white',textShadow:"6px 6px 6px black"}}>SafeCAN</h>
                      <h2 style={{color:'white',textShadow:"6px 6px 6px black"}}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
                </div>
                
            </div>
        );
    };
}


export default Stript;