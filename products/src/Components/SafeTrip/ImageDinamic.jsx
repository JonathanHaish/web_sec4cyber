import React , {Component} from 'react';
import Image from './images_Picks/automotive.mp4';

class ImageDInamic extends Component{
    render(){
        
        return(
            <React.Fragment>
                <div style={{width:this.props.width/2,height:40,marginLeft:'62%',marginTop:'1%',backgroundColor:'white',position:'absolute'}}></div>
                <video loop autoPlay muted style={{
                width:this.props.width,
                height:this.props.height,
                marginLeft:'3%',

                
            }}>
             <source src={Image} type="video/mp4"/>   
            </video>
            </React.Fragment>
            
        );
    };
}


export default ImageDInamic;