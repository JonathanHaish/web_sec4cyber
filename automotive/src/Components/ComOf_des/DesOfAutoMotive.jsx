import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight} from '@fortawesome/free-solid-svg-icons';


class Desc extends Component{
	state={
        scrollTop:0,
        widthStrip:window.innerWidth
    };
    changeSize(state){
      this.setState({widthStrip:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
	
	render(){
		return(

			  
			    <div style={{marginTop:'50%',marginLeft: '10%'}}>
                   <h1 style={{marginLeft:this.props.marginLeftT,fontSize:this.state.widthStrip/55}}><strong>The security challenge of connected transportation vehicles</strong></h1>
                   <p style={{fontSize:this.state.widthStrip/84}}>The number of connected vehicles including cars, trucks, trains, ships, airplanes and more is increasing <br/>rapidly and so are the risks and cyber threats. <br/>When it comes to Automotive the exposure to security threats and the risk of cyberattacks may cost a life-threatening.<br/>Blocking these risks is critical to our safety.</p>
				   <p style={{fontSize:this.state.widthStrip/84}}>Sec4Cyyber deliver <strong>product security</strong> and Endpoint Point Protection Platform <strong>(EPP)</strong> solutions for <strong>automotive /<br/>
autonomous manufactures</strong> and <strong>smart transportation enterprises</strong> (with fleet).</p>
				   <p style={{fontSize:this.state.widthStrip/84}}><FontAwesomeIcon icon={faCaretRight} size="xxs"/><span style={{marginLeft:'1%'}}><strong>SafeTrip,</strong> an Endpoint Protection Platforms <strong>(EPP)</strong></span></p>
				   
               </div>
			  
			);
	};
}



export default Desc;