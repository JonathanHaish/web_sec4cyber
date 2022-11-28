import React , {Component} from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter} from 'react-router-dom';
import ImagePlane from './videos/airplaneNew.jpg';
import ImageSG from './videos/SGNew.jpg';
import VidewStript1 from './videoSF';
import {Image} from 'react-bootstrap';


class DescFlow extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            message:false,
            apply: false,
        };
        this.contactRefernce = React.createRef();
        this.handelChange = this.handelChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
     }
    handleClose(){
        this.setState({show:false,apply:false});
    };
  
    handleShow(){
        this.setState({show:true,apply:false});
    };
  
    handlerSubmit(e){
        e.preventDefault();
  
       emailjs.sendForm('contact_service', 'template_on8yqk4', e.target, 'user_q5vn2m0VbLTY6w7BBB28H')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
        e.target.reset();
        this.setState({message:true,apply:true});
    };

    handelChange(event){
        if(event.target.id === "name")
        {
          this.setState({feedbackN:event.target.value});
        }
        else if( event.target.id === "email")
        {
          this.setState({feedbackE:event.target.value});
        }
        else
        {
          this.setState({feedbackP:event.target.value});
        }
    };

    render(){
        return(
            <div>
                <h2 style={{marginLeft: '10%',marginTop:'3%',fontSize:this.props.width/55}}><strong>Always On. Always Secure. Always High Performance.</strong></h2>
                <div style={{marginLeft: '10%'}} className="row">     
                  <div style={{marginLeft:"2.5%",marginTop:'3%'}}>        
                    <h3><strong>Embedded Security Platform</strong></h3>
                    <p style={{fontSize:this.props.width/84}}>Sec4Cyber <strong>secures</strong> and <strong>protects</strong> the Enterprise Edge systems in<br/>Enterprise environment <strong>hermetically</strong> without compromising <strong><br/>performance,</strong> by embedding the security as a part of the operating system.<br/>
Sec4Cyber solution - <strong>SafeGuard delivers end-to-end protection.</strong></p>
                    <p style={{fontSize:this.props.width/84}}>SafeGuard locally embedded agent, <strong>automatically</strong> smoothly generates<br/>
security policy.</p>
                    <p style={{fontSize:this.props.width/84}}><strong>Blocks</strong> cyberattacks, <strong>protects</strong> your processes & APP’s, provides <strong>early</strong><br/>
warning on attack attempts.</p>
                    <h3><strong>Block In-Memory Attacks</strong></h3>
                    <p style={{fontSize:this.props.width/84}}>Performing lightweight Control Flow Integrity (CFI), SafeTrip<br/>
continuously monitors function calls and return pointers to ensure your<br/>
programs stay within the expected execution flow.</p>
                    <p style={{fontSize:this.props.width/84}}>SafeGuard device Control Flow Integrity (CFI) doesn’t rely on updates<br/>
and the protection is <strong>always on</strong> and <strong>remains stable</strong> over the life of the<br/>
device. It’s <strong>safe</strong> and <strong>secure</strong> by design.</p>
                    <h3><strong>Self-protect your device</strong></h3>
                    <p style={{fontSize:this.props.width/84}}><strong>Self-Protection,</strong> Sec4Cyber embedded security solutions provide the<br/>
software <strong>integrity</strong> and <strong>authentication</strong> needed in <strong>performance<br/>
challenged</strong> environments.</p>
                    <p style={{fontSize:this.props.width/84}}><strong>self-protection</strong> against device control loss. Buffer overflows can result<br/>
in foreign malicious code or code reuse such as return-oriented<br/>
programming (ROP) and (JOP) attacks, which <strong>SafeGuard blocks them.</strong></p>
                    <p style={{fontSize:this.props.width/84}}>After the attack is detected and blocked, SafeGuard provides a detailed<br/>
report of the attack.</p>
                    <h3><strong>Remove the load on your security architect.</strong></h3>
                    <p style={{fontSize:this.props.width/84}}><strong>Autonomously</strong> maps all call sequences to create your customized <br/>security policy, it’s <strong>done easily</strong> by button klick.</p>
                    <h3><strong>Cut Resource Needs</strong></h3>
                    <p style={{fontSize:this.props.width/84}}>Cut the resources needed for product security<br/> <strong>No R&D</strong> - hardware or software changes are required.</p>
                    <h3><strong>Remove the load on your developers<br/>
Speed Up Time-to-Market.</strong></h3>
                  </div>
                  <div style={{width:this.props.width/3,height:"10%",backgroundColor:"white",position:"absolute",marginTop:"3%",marginLeft:"55%"}}></div>
                  <VidewStript1 width={this.props.width*0.39} height={this.props.height/1.3} marginTop="1%" />
                </div>
                <h2 style={{marginLeft: '52%',marginTop:"3%",fontSize:this.props.width/55}}><strong>Secure your Enterprise Edge Network</strong></h2>
                <div style={{marginLeft: '10%'}} className="row">
                <Image src={ImageSG} style={{width:this.props.width*0.39,height:this.props.height/2.1,marginTop:"1%"}}/>
                  <div style={{marginLeft:"4.265%"}}>
                    <p style={{fontSize:this.props.width/84}}><strong>SafeGuard</strong> - Secures devices Network, a cloud Server based<br/><strong>AI-Machine Learning</strong>, work as a Security Operation Center <strong>(SOC)</strong> for<br/> controlling, monitoring, Alerting. Automatically profiles devices network<br/>behaviors.<br/>
A locally agent (in the vehicle), automatically generates security policy<br/> Blocks cyberattacks, protects your processes & APP’s, provides early<br/>warning on attack attempts.<br/>
<strong>Securely deliver yours updates to devices.</strong><br/> 
<span style={{fontSize:this.props.width/65}}><strong>Secure your Supply Chain.</strong></span><br/>
<strong>Prevent zero-day</strong> cyber-attack</p>
                     <p style={{fontSize:this.props.width/84}}><strong>Continuous Security,</strong> with <strong>AI-Machine Learning</strong> gain deep visibility<br/> into the device’s behavior in real time across its entire lifecycle, to<br/>predict unknown future cyber-attacks, abnormal behavior.</p>
                  <h2><strong>Continuous Visibility</strong></h2>
                  </div>
                  </div>
                  <h2 style={{marginLeft: '10%',marginTop:"3%",fontSize:this.props.width/55}}><strong>Stop threats without impacting device performance</strong></h2>
                  <div style={{marginLeft: '10%',marginTop:'1%'}} className="row">
                  <div style={{marginLeft:"1.3%"}}>
                  <p style={{fontSize:this.props.width/84}}><strong><BrowserRouter><a href="/SafeTrip/">SafeGaurd</a></BrowserRouter></strong> runs in <strong>resource</strong>
<strong>e-limited</strong> systems-within the<br/> 
<strong>Host performance requirements.</strong><br/> 
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>CPU: 0%</strong></span><br/>
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>MEM: 0.3%</strong></span><br/> 
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>Storage: 30KB</strong></span><br/> 
</p>
<p style={{fontSize:this.props.width/84}}>Actually, <strong>improving endpoint performance, increasing resilience</strong> and <strong>durability<br/>
to 100% secure.</strong><br/>
Sec4Cyber solutions - <strong>SafeGuard deliver end-to-end protection.</strong><br/>
<strong>Automatically</strong> hardens the vehicle to stop threats, <strong>without impacting automotive<br/>
performance.</strong></p>                  
<p style={{fontSize:this.props.width/84}}><strong>No need</strong> for heavy processing or continual security updates -</p> 
                <h3><strong>Ensures Top Performance</strong></h3>
                 </div>
                 <Image src={ImagePlane} style={{width:this.props.width*0.3,height:this.props.height/2.5,marginTop:"1%",marginLeft:"3%"}}/>
                 </div> 
            </div>
        );
    }
}

export default DescFlow;