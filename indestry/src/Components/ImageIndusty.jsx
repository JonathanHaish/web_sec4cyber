import React , {Component} from 'react';
import Image from './Videow/Industries40.mp4';

export default class ImageIndustry extends Component{
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
