import React , { Component } from 'react';
import Image from "./Videow/ConsumerIoT-540.mp4";

export class VidewStript1 extends Component{
    render(){
       let x= window.innerHeight-100;
       return (<video loop autoPlay muted style={{
            position:'absolute',
            width:'100%',
            left:'50%',
            top:'57%',
            height:x,
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