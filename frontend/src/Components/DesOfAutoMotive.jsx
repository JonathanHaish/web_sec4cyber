import React , { Component } from 'react';

class Desc extends Component{
	render(){
		return(

			  <div style={{marginLeft:500,marginTop:100}}>
			    <h2 style={{color:"black",fontSize:60}}>Description....</h2>
			    <div style={{width:900,overflowWrap:"break-word"}}>
			    	<p style={{color:"black",fontSize:25}}>
			    	{this.props.description.text}
			    	</p>
			    </div>
			  </div>
			);
	};
}



export default Desc;