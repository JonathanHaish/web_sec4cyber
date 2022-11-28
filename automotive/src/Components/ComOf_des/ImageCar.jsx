import React , {Component} from 'react';
import Image from './Videos/automotive.mp4';

export default class ImageCar extends Component{
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
