import React ,{Component} from 'react';
import ImageP from './Images_Videos/phone.png';
import ImageH from './Images_Videos/handShke.png';
import ImageL from './Images_Videos/ligth4.png';
import ImageOc from './Images_Videos/oclock.png';
import ImageSpeed from './Images_Videos/speed3.png';
import ImageMeg from './Images_Videos/megaphon4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons';



class CardsScats extends Component{
    state={
        width:window.innerWidth,
        height:window.innerHeight
    };
    componentDidMount(){
        window.addEventListener('resize', () => this.listenEvent(this.state));  
      };
  
  
    listenEvent(state) {
      this.setState({width:window.innerWidth,height:window.innerHeight})
    };
    render(){
        return(
            <React.Fragment>
                <div style={{marginLeft:'13%'}}>
                    <div className="row" style={{marginTop:'3%'}}>
                       <div style={{width:this.state.width/4.5}}>
                           <img src={ImageP} style={{marginLeft:'42%'}} alt="img1"/>
                           <h5  style={{marginTop:'5%'}}><strong>Block cyber threats</strong></h5>
                           <p style={{fontSize:'120%',marginTop:'2%'}}>SafeTrip automatically self-defending device,<br/> hardens your host based on factory settings,<br/> it’s working at the binary level.<br/> 
                           <strong>Zero</strong> false positives, fast detection, <strong>maximum<br/> performance.</strong> </p>
                       </div>
                       <div style={{marginLeft:'8%',width:this.state.width/4.5}}>
                           <img src={ImageH} alt="img2" style={{marginLeft:'35%'}}/>
                           <h5  style={{marginTop:'5%'}}><strong>Secure your IoT/OT</strong></h5>
                           <p style={{fontSize:'120%'}}>Performing lightweight Control Flow Integrity (CFI). 
                            SafeTrip ensure your programs stay<br/> within the expected execution flow.<br/>
                              <strong>Only legitimate</strong> function calls and <strong>authorized</strong><br/>
                              <strong>APPs are permitted</strong> to run, everything else is<br/> blocked.</p>
                       </div>
                       <div style={{marginLeft:'6%',width:this.state.width/4.5}}>
                           <img src={ImageL} alt="img3" style={{marginLeft:'42%'}}/>
                           <h5  style={{marginTop:'5%'}}><strong>Save time and effort</strong></h5>
                           <p style={{fontSize:'120%',marginTop:'2%'}}>SafeTrip autonomously maps all call<br/> sequences to create your customized security<br/> policy, easily <strong>done automatically</strong> by <stron>clicking a<br/> button.</stron>
                           </p>
                       </div>
                    </div>
                   
                    <div className="row" style={{marginTop:'6%'}}>
                       <div style={{width:this.state.width/4.5}}>
                           <img src={ImageOc} alt="img4" style={{marginLeft:'42%'}}/>
                           <h5  style={{marginTop:'5%'}}><strong>Speed Up Time-to-Market</strong></h5>
                           <p style={{fontSize:'120%',marginTop:'2%'}}>Achieve <strong>shorter release</strong> cycles with<br/> automated processes and better focus of<br/> Security, <strong>reduce the budget</strong> on Dev’ and DevSecOps teams.<br/><strong>Remove the load on your developers.</strong></p>
                       </div>
                       <div  style={{marginLeft:'8%',width:this.state.width/4.5}}>
                           <img src={ImageSpeed} alt="img5" style={{marginLeft:'42%'}}/>
                           <h5  style={{marginTop:'5%'}}><strong><span>Cut Resource Needs.</span></strong></h5>
                           <p style={{fontSize:'120%'}}>Automatically hardens the device to stop threats, without impacting device performance.<br/>
                           <FontAwesomeIcon icon={faCheck} size="lg" color="green"/><strong>CPU:0%</strong><FontAwesomeIcon icon={faCheck} color="green" size="lg" style={{marginLeft:'3%'}}/><strong>MEM:0.3%</strong><FontAwesomeIcon color="green" icon={faCheck} size="lg" style={{marginLeft:'3%'}}/><strong>Storage:30KB.</strong><br/>
                           there’s <strong>No</strong> need for constant updates.<br/> <strong>Speed Up your device performance.</strong>
                           </p>
                       </div>
                       <div style={{marginLeft:'6%',width:this.state.width/4.5}} >
                           <img src={ImageMeg} alt="img6" style={{marginLeft:'42%',width:60,height:50}}/>
                           <h5  style={{marginTop:'5%'}}><strong>Control Supply Chain Security.</strong></h5>
                           <p style={{fontSize:'120%'}}>
                           <strong>SafeGuard</strong>, secures devices Networks.<br/>AI-Machine Learning, Works as a Security<br/> Operation Center (SOC).<br/> 
                           Controlling, monitoring, Alerting, sending<br/> emails/SMS,<br/> 
                           <strong>Prevent</strong> risks from 3rd party code and<br/> components.<br/> 
                           <strong>Deliver your updates, Prevent</strong> zero-day<br/> attack.

                           </p>
                       </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default CardsScats;