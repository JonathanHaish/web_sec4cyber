import React , { Component } from 'react';
import Image from './Images_Videos/Home-540p.mp4';


class VideoStript extends Component{
    render(){
       let x=this.props.height/1.2;
       
       
       return (
           <React.Fragment>
               <video loop autoPlay muted style={{
                 position:'absolute',
                 width:'100%',
                 left:'50%',
                 top:'50%',
                 height:x,
                 objectFit:"cover",
                 transform:'translate(-50%,-50%)',
                 zIndex:'-1',
                 }}>
                 <source src={Image} type="video/mp4"/>
                 
               </video>
              
           </React.Fragment>  
        
        
       );
    };
};


export default VideoStript;