import React , { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class RollerImages extends Component{
	render(){
		return(
			<div style={{marginTop:450}}>
             <Carousel>
             	<Carousel.Item>
             		<img src={process.env.PUBLIC_URL +"/lolo.jpg"} style={{width:1700,height:550,marginLeft:80}} alt="jjjjjj"/>
             	<Carousel.Caption>
               	   <h1>hello</h1>
              	</Carousel.Caption>
              	</Carousel.Item>
              	<Carousel.Item>
             		<img src={process.env.PUBLIC_URL +"/autoMotive.jpg"} style={{width:1700,height:550,marginLeft:80}} alt="jjjjjj"/>
             	<Carousel.Caption>
               	   <h1>hello</h1>
              	</Carousel.Caption>
              	</Carousel.Item>
              </Carousel>
            </div> 
			);
	};
}

export default RollerImages;