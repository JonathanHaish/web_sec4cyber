import React , { Component } from 'react';
import Image from "./Videow/Indutries-540p.mp4";

export class VidewStript1 extends Component{
    render(){

       return (<video loop autoPlay muted style={{
            position:'absolute',
            width:this.props.width,
            left:'50%',
            top:'55%',
            height:this.props.height-100,
            objectFit:"cover",
            transform:'translate(-50%,-50%)',
            zIndex:'-1',
        }}>
            <source src={Image} type="video/mp4"/>
        </video>
       );
    };
};





export default VidewStript1;