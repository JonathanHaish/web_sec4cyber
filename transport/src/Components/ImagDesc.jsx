import React , { Component } from 'react';
import ImageConsumerIOT from './ImageConsumerIOT';

class Image extends Component{
    
    format(){
    	return {marginLeft:240,marginTop:70,borderBottom: "2px solid Grey"};
    };

    styleP(){
    	return {color:"black",textDecoration:"none",fontSize:35,marginTop:30};
    };

	render(){
		return(
			<div style={{backgroundColor:'lightgray'}}>
			  <div style={{height:50,width:715,marginLeft:'10%',marginTop:110,position:'absolute',backgroundColor:'white'}}>

              </div>
			  <div className="row" style={{marginTop:150,marginLeft:100,fontSize:60}}>
				<ImageConsumerIOT />
				<div id="myContent">

				</div>
			    <div style={{marginTop:130}}> 
					<div className="row" style={this.format()}>	
						<a href="/safeTrip/" style={this.styleP()}>
						<img  alt="SafeTript.."/> SafeTript.........</a>
					</div>

					<div className="row" style={this.format()}> 
						<a href="/safeGourd/" style={this.styleP()}>
						<img  alt="SafeGourd.."/>  SafeGourd...........</a>
					</div>

					
					<div style={{height:150}}>

					</div>
				</div>
			  </div>
			</div>	
			);
	};
}

export default Image;