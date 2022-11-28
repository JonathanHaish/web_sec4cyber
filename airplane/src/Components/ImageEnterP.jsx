import React , {Component} from 'react';
import Image from './videos/Enterprise_Edge.mp4';

export default class ImageEnterP extends Component{
    render(){
       return (
            <React.Fragment>
            
            <video loop autoPlay muted style={{
            height:800,
            width:800
        }}>
            <source src={Image} type="video/mp4"/>
        </video>
        </React.Fragment>
       );
    };
};
