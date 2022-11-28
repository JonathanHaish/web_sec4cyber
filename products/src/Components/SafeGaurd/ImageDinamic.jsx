import React , {Component} from 'react';
import Image from './images_Picks/Enterprise_Edge.mp4';

class ImageDInamic extends Component{
    render(){
        return(
            <React.Fragment>
                <div style={{width:this.props.width/1.7,height:50,marginLeft:'62%',marginTop:'3.7%',backgroundColor:'white',position:'absolute'}}></div>
                <video loop autoPlay muted style={{
                width:this.props.width,
                height:this.props.height,
                marginLeft:'8%',
                marginTop:'3%'
                
            }}>
             <source src={Image} type="video/mp4"/>   
            </video>
            </React.Fragment>
            
        );
    };
}


export default ImageDInamic;