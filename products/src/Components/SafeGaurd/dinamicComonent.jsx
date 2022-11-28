import React, {Component} from 'react';
import ImageDInamic from './ImageDinamic';


class dinamicComp extends Component{
    render(){
        return(
            <React.Fragment>
              <h style={{marginLeft:'12%',fontSize:35}}><strong>A Proactive Security Platform managed by Security operation Center (SOC)</strong></h>
              <div class="row" style={{width:this.props.width,marginTop:'1%'}} >  
                 <div style={{marginLeft:'10%',marginTop:'2%'}}>
                  <p style={{fontSize:this.props.width/78,marginLeft:50}}>SafeGuard is a Proactive Security Platform managed by<br/> Server-Security operation Center (SOC), a WEB Server<br/> insides network or in the Cloud
<br/>for a Real-Time system.</p>
                  <p style={{fontSize:this.props.width/78,marginLeft:50}}>SafeGuard creates a secure IoT devices network of Hosts<br/> with <strong>Endpoints Protected Platform</strong> are monitored,<br/> managed by a web server that serves as a control center:<br/> for controlling, monitoring, management, Policy<br/> configuration, upgrading manufacturer software and<br/> receiving event reporting from endpoints.</p>
                  <p style={{fontSize:this.props.width/78,marginLeft:50}}><strong>Automatically integrate</strong> into the system OS and <strong>without</strong><br/> changing system hardware or software builds.</p>
                  <p style={{fontSize:this.props.width/78,marginLeft:50}}>SafeGuard Performing lightweight Control Flow Integrity<br/>(CFI), SafeTrip continuously check the system’s runtime<br/> integrity, monitors function calls and return pointers to<br/> ensure your programs stay within the <strong>expected execution<br/> flow.</strong> 
If the program deviates from factory settings, SafeTrip<br/> detects the threat and <strong>automatically blocks it.</strong></p>
                 </div>
                 <br/>
                 <ImageDInamic width={this.props.width*0.40} height={this.props.height}/>
              </div>
            </React.Fragment>
        );
    }
}


export default dinamicComp;