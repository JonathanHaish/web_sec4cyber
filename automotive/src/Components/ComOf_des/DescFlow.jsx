import React , {Component} from 'react';
import emailjs from 'emailjs-com';
import {Image} from 'react-bootstrap';
import ImageCar from './Videos/carNew.jpg';
import VidewStript1 from './videoStript';
import ImagePlane from './Videos/airplaneNew.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import ImageSG from './Videos/SGNew.jpg';
import {BrowserRouter} from 'react-router-dom';

class DescFlow extends Component{
     constructor(props){
        super(props);
        this.state={
            width:window.innerWidth,
            height:window.innerHeight,
            show:false,
            message:false,
            apply: false,
        };
        this.contactRefernce = React.createRef();
        this.handelChange = this.handelChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
     }
     
    
 
     changeSize(state){
         this.setState({width:window.innerWidth,height:window.innerHeight})
     }
 
     componentDidMount(){
         window.addEventListener('resize',() => this.changeSize(this.state));
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
                <h2 style={{marginLeft: '10%',marginTop:'10%',fontSize:this.state.widthStrip/40}}><strong>Always On. Always Secure. Always High Performance.</strong></h2>
                <div style={{marginLeft: '10%',marginTop:'1%'}} className="row">
                  <div>  
                    <p style={{fontSize:this.state.width/84,marginLeft:50,marginTop:'5%'}}>SafeTrip <strong>secures and protects</strong> the computing<br/> environment of the vehicles <strong>hermetically</strong> <strong>without</strong><br/> compromising <strong>performance</strong>, by embedding the security<br/> as a part of the operating system.</p>
                    <p style={{fontSize:this.state.width/84,marginLeft:50}}>Actually, <strong>improving</strong> endpoint <strong>performance, increasing</strong><br/><strong>resilience</strong> and <strong>durability</strong> to <strong>100% secure</strong>.<br/>
Sec4Cyber solutions - <strong>SafeTrip, SafeGuard deliver</strong><br/><strong>end-to-end protection.</strong><br/>
<strong>Automatically</strong> hardens the vehicle to <strong>stop threats,</strong><br/> <strong>without</strong> impacting <strong>automotive performance.</strong></p>
                  </div>
                  <Image src={ImageCar} style={{width:this.state.width*0.39,height:this.state.height/2.1,marginTop:"1%",marginLeft:"5%"}} alt="Team"/>
                </div>
                
                <h2 style={{marginLeft: '52%',marginTop:'3%',fontSize:this.state.widthStrip/40}}><strong>Block Hackers at the Gate</strong></h2>
                <div style={{marginLeft: '9%'}} className="row">
                  <div style={{width:this.state.width/3,height:"10%",backgroundColor:"white",position:"absolute",marginTop:"4.4%"}}></div>
                  <VidewStript1 width={this.state.width*0.39} height={this.state.height/1.3} marginTop="1%" />
                  <div style={{marginLeft:"4.5%",marginTop:'3%'}}>        
                    <h3><strong>Embedded Security Platform</strong></h3>
                    <p style={{fontSize:this.state.width/84}}>SafeTrip is smoothly embedded agent <strong>automatically</strong> generates security<br/>policy.<br/>
<strong>Blocks</strong> cyberattacks, <strong>protects</strong> your processes & APP’s, provides <strong>early</strong><br/> warning on attack attempts.</p>
                    <h3><strong>Block In-Memory Attacks</strong></h3>
                    <p style={{fontSize:this.state.width/84}}>Performing lightweight Control Flow Integrity (CFI), SafeTrip continuously<br/> monitors function calls and return pointers to ensure your programs stay<br/> within the expected execution flow.</p>
                    <p style={{fontSize:this.state.width/84}}>SafeTrip Automotive Control Flow Integrity (CFI) doesn’t rely on updates<br/> and the protection is <strong>always on</strong> and <strong>remains stable</strong> over the life of the<br/> vehicle. It’s <strong>safe</strong> and <strong>secure</strong> by design.</p>
                    <h3><strong>Self-protect your Automotive</strong></h3>
                    <p style={{fontSize:this.state.width/84}}><strong>Self-Protection,</strong> Sec4Cyber embedded security solutions provide the<br/> software <strong>integrity</strong> and <strong>authentication</strong> needed in <strong>performance challenged</strong><br/> environments.<br/>
<strong>self-protection</strong> against device control loss. Buffer overflows can result in<br/> foreign malicious code or code reuse such as return-oriented programming<br/> (ROP) and (JOP) attacks which <strong>SafeTrip</strong> is <strong>blocking them</strong>.<br/><br/>
After the attack is detected and blocked, SafeTrip provides a detailed report<br/> of the attack.</p>
                    <h3><strong>Remove the load on your security architect</strong></h3>
                    <p style={{fontSize:this.state.width/84}}><strong>Autonomously</strong> maps all call sequences to create your customized <br/>security policy, it’s <strong>done easily</strong> by button klick.</p>
                    <h3><strong>Cut Resource Needs</strong></h3>
                    <p style={{fontSize:this.state.width/84}}>Cut the resources needed for product security<br/> <strong>No R&D</strong> - hardware or software changes are required.</p>
                  </div>
                </div>
                <h2 style={{marginLeft: '10%',marginTop:'3%',fontSize:this.state.widthStrip/40}}><strong>Stop threats without impacting device performance</strong></h2>
                  <div style={{marginLeft: '12%'}} className="row">
                  <div style={{marginTop:'3%'}}>
                  <p style={{fontSize:this.state.width/84}}><strong><BrowserRouter><a href="/SafeTrip/">SafeTrip</a></BrowserRouter></strong> runs in <strong>resource</strong>
<strong>-limited</strong> systems-within the<br/> 
<strong>Host performance requirements.</strong><br/> 
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>CPU: 0%</strong></span><br/>
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>MEM: 0.3%</strong></span><br/> 
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>Storage: 30KB</strong></span><br/> 
<strong>No need</strong> for heavy processing or continual security updates </p> 
                <h3><strong>Ensures Top Performance</strong></h3>
                 </div>
                 <Image src={ImagePlane} style={{width:this.state.width*0.39,height:this.state.height/2.1,marginTop:"1%",marginLeft:"6%"}}/>
                 </div>
                <h2 style={{marginLeft: '52%',marginTop:"3%",fontSize:this.state.widthStrip/40}}><strong>Secure your smart vehicles Network</strong></h2>
                <div style={{marginLeft: '9%'}} className="row">
                <Image src={ImageSG} style={{width:this.state.width*0.39,height:this.state.height/2.1,marginTop:"1%"}}/>
                  <div style={{marginLeft:"4.265%",marginTop:'3%'}}>
                    <p style={{fontSize:this.state.width/84}}><strong><BrowserRouter><a href="/SafeGaurd/">SafeGuard</a></BrowserRouter></strong> - Secures devices Network, a cloud Server based<br/><strong>AI-Machine Learning</strong>, work as a Security Operation Center <strong>(SOC)</strong> for<br/> controlling, monitoring, Alerting. Automatically profiles devices network<br/>behaviors.<br/>
A locally agent (in the vehicle), automatically generates security policy<br/> Blocks cyberattacks, protects your processes & APP’s, provides early<br/>warning on attack attempts.<br/>
<strong>Securely deliver yours updates to devices.</strong><br/> 
<strong>Secure your Supply Chain.</strong><br/>
<strong>Prevent zero-day</strong> cyber-attack</p>
                     <p style={{fontSize:this.state.width/84}}><strong>Continuous</strong> Security, with <strong>AI-Machine Learning</strong> gain deep visibility<br/> into the device’s behavior in real time across its entire lifecycle, to<br/>predict unknown future cyber-attacks, abnormal behavior.</p>
                  <h2><strong>Continuous Visibility</strong></h2>
                  </div>
                  
                </div>
            </div>
        );
    };
}


export default DescFlow;