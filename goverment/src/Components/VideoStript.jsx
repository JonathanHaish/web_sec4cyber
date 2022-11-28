import React , { Component } from 'react';
import Image from './videos/Goverment&Defence.mp4';

class VideoStript extends Component{
   
    render(){
       
       

       return (<video loop autoPlay muted style={{
            position:'absolute',
            width:window.innerWidth,
            left:"50%",
            top:"55%",
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


export default VideoStript;