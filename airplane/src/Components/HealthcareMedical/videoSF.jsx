import React , { Component } from 'react';
import Image from "./videos/Enterprise_Edge.mp4";

export class VidewStript1 extends Component{
    render(){
       return (<video loop autoPlay muted style={{
           width:this.props.width,
           height:this.props.height,

        }}>
            <source src={Image} type="video/mp4"/>
        </video>
       );
    };
};





export default VidewStript1;