import React , { Component } from 'react';
import ImageDInamic from './ImageDinamic';
import ImageTeam from './images_Picks/SafeTripTeam.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight,faCheck} from '@fortawesome/free-solid-svg-icons';
import {Image} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import ImageShild from './images_Picks/shild.jpg';
import ImageIOT from './images_Picks/IOT.jpg';
import ImageSG from './images_Picks/SG.jpg';
import ImageAI8 from './images_Picks/AI8.png';

class Desc extends Component{
    
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
          <React.Fragment>
              <div style={{marginTop:'5%'}}>
              <h1 style={{marginLeft:'12%',fontSize:this.state.width/60}}><strong>A proactive Endpoint Protection Platform (EPP)</strong></h1>
              <div class="row" style={{width:this.state.width,marginTop:'2%'}} >  
                 <div style={{marginLeft:'10%',marginTop:"1%"}}>
                   <p style={{fontSize:this.state.width/84,marginLeft:50}}>SafeTrip is an <strong>embedded</strong> Proactive Security Platform for a<br/> Real-Time systems.<br/>
SafeTrip <strong>Automatically integrate</strong> into the system OS and<br/> <strong>without</strong> changing system hardware or software builds.</p>

                   <p style={{fontSize:this.state.width/84,marginLeft:50}}>Performing lightweight Control Flow Integrity (CFI), SafeTrip<br/> continuously check the system’s runtime integrity, monitors<br/> function calls and return pointers to ensure your programs stay<br/> within the <strong>expected execution flow.</strong> </p>

                   <p style={{fontSize:this.state.width/84,marginLeft:50}}>If the program deviates from factory settings, SafeTrip detects<br/> the threat and <strong>automatically blocks it</strong>.</p>
       
                 </div>
                 <ImageDInamic width={this.state.width*0.42} height={this.state.height/1.6}/>
              </div>
              <div style={{marginTop:"3%"}}>
                  
                  <h1 style={{fontSize:this.state.width/60,marginLeft:'50.5%',position:'absolute'}}><strong> Automatically generates applications whitelist</strong></h1>
                  <div class="row" style={{marginLeft:'8%',marginTop:"3%"}}>
                      <Image src={ImageTeam} style={{width:this.state.width*0.43,height:this.state.height/1.8,marginTop:"5%"}} alt="Team"/>  
                      <p style={{fontSize:this.state.width/84,marginLeft:'5%',marginTop:'4%'}}>
                      SafeTrip <strong>automatically generates</strong><br/>
SafeTrip <strong>automatically generates</strong> and enforces an<br/> <strong>applications whitelist</strong> to prevent dropper attacks or OS<br/> command injection, if an application attempts to load, and it<br/> does not exist in your embedded approved whitelist product<br/><strong>binaries level, (every bit</strong> till the last one),<br/> SafeTrip <strong>blocks it automatically</strong> and sends you an alert.<br/>
 <br/>
it’s working at the <strong>binary level,</strong> eliminating the risks of<br/> false-positives to <strong>zero.</strong><br/>
<br/>
<strong>Only legitimate</strong> function calls and authorized APPs are<br/> permitted to run, <strong>everything else is blocked.</strong>
     
                      </p>
                      
                  </div>                 
              </div>
              <div>
                  
                  <h1 style={{fontSize:this.state.width/60,marginLeft:'10%',position:'absolute',marginTop:"5%"}}><strong> SafeTrip blocks cyber-attacks</strong></h1>
                  <div class="row" style={{marginLeft:'10%'}}> 
                     <div style={{marginTop:'10%'}}>
                      <p style={{fontSize:this.state.width/84}}>
                      SafeTrip <strong>blocks</strong> and <strong>protects</strong> from memory corruption<br/> and applications weakness cyber-attacks such as:<br/>
                      <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%',marginTop:'3%'}} size="lg"/>Return Oriented Programming (ROP), Blind<br/> <span style={{marginLeft:"15%"}}>Return Oriented Programming (BROP) and etc.</span><br/>
                      <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%',marginTop:'3%'}} size="lg"/>Jump Oriented Programming (JOP).<br/>
                      <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%',marginTop:'3%'}} size="lg"/>zero-day attack,<br/> 
                      <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%',marginTop:'3%'}} size="lg"/>Buffer Overflowed, Stack Overflowed, and etc.<br/>     
                      </p>
                      <br/>
                      <p style={{fontSize:this.state.width/84}}>
                      <strong>Embedded Security Policy</strong><br/> 
SafeTrip automatically generates an Embedded Security<br/> Policy and it’s <strong>done easily by button Klick</strong>, with security<br/> services like: processes <strong>access control,</strong> file system and<br/> <strong>core OS protection,</strong> Denial-of-Service (DoS) attack<br/> <strong>prevention</strong> service and etc.’.<br/>
                      </p>
                      </div>
                      <Image src={ImageShild} style={{width:this.state.width*0.43,height:this.state.height/1.8,marginTop:"13%",marginLeft:"7%"}} alt="Team"/>    
                  </div>                  
              </div>


              <h1 style={{fontSize:this.state.width/60,marginTop:'3%',marginLeft:'54%'}}><strong>Some facts you should know.</strong><br/>
                   <strong>SafeTrip runs in resource-limited systems</strong></h1>
              <div class="row" style={{marginLeft:'10%'}}>
              <Image src={ImageIOT} style={{width:this.state.width*0.42,height:this.state.height/2}} alt="Team"/>
              <p style={{fontSize:this.state.width/84,marginLeft:'2%',marginTop:'1%'}}>
                  SafeTrip runs in <strong>resource-limited systems</strong>-within the Host<br/> performance requirements. <br/>
                  <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%',marginTop:'3%'}} size="lg"/><span style={{marginLeft:'4%'}}><strong>CPU: 0%</strong>, (in peak points <strong>1%</strong>).</span><br/> 
                  <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%'}} size="lg"/><span style={{marginLeft:'4%'}}><strong>MEM: 0.3%</strong></span> <br/>
                  <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%'}} size="lg"/><span style={{marginLeft:'4%'}}> <strong>Storage 30KB</strong></span><br/>
                  Actually, SafeTrip <strong>improved system performance,</strong><br/> 
                  we disabled the 3 countermeasures of the OS and processor, that<br/> mitigating these attacks, but they slow down the applications and<br/> hackers have found a way to avoid them.<br/>
                  <br/>
                  We <strong>do not</strong> change your builds and slow the performance.<br/> 
                  Our algorithms ensure there is <strong>no</strong> performance drag.<br/>
                  There is <strong>no need</strong>  for heavy processing or continual security<br/> updates- <strong>ensures Top Performance.</strong><br/>
                  <br/>
                  SafeTrip is OS agnostic , <strong>supports all processors.</strong><br/>
                  <br/>
                  <span style={{fontSize:this.state.width/65}}><strong>Ensures Top Performance</strong></span>
              </p>
              </div>
              <h2 style={{marginLeft: '10%',marginTop:"3%",fontSize:this.state.widthStrip/35}}><strong>Secure your smart vehicles Network</strong></h2>
                <div style={{marginLeft: '10%'}} className="row">
                
                  <div style={{marginTop:'1%'}}>
                    <p style={{fontSize:this.state.width/84}}>SafeTrip - Secures devices Network, a cloud Server based<br/><strong>AI-Machine Learning</strong>, work as a Security Operation Center <strong>(SOC)</strong> for<br/> controlling, monitoring, Alerting. Automatically profiles devices network<br/>behaviors.<br/>
A locally agent (in the vehicle), automatically generates security policy<br/> Blocks cyberattacks, protects your processes & APP’s, provides early<br/>warning on attack attempts.<br/>
<strong>Securely deliver yours updates to devices.</strong><br/> 
<strong>Secure your Supply Chain.</strong><br/>
<strong>Prevent zero-day</strong> cyber-attack</p>
                     <p style={{fontSize:this.state.width/84}}><strong>Continuous</strong> Security, with <strong>AI-Machine Learning</strong> gain deep visibility<br/> into the device’s behavior in real time across its entire lifecycle, to<br/>predict unknown future cyber-attacks, abnormal behavior.</p>
                  <h2><strong>Continuous Visibility</strong></h2>
                  </div>
                  <Image src={ImageSG} style={{width:this.state.width*0.39,height:this.state.height/2.1,marginTop:"1%",marginLeft:"2%"}}/>
                </div>
                <div style={{marginTop:'5%'}}>
                   <h1 style={{marginLeft:'49.5%',fontSize:this.state.width/60,position:'absolute'}}><strong>AI-Machin Learning-analyzing anomaly’s</strong></h1>
                   <div className="row" style={{marginTop:'6%'}}>
                   <Image src={ImageAI8} style={{width:this.state.width*0.39,height:this.state.height/2,marginLeft:"10%",marginTop:"3%"}} alt="AI"/>
                       <div style={{marginLeft:'5%',marginTop:'3%'}}>
                       <p style={{fontSize:this.state.width/84}}><FontAwesomeIcon icon={faCaretRight} size="xxs"/>AI-Machin Learning algorithm, analyzing anomaly’s, threats<br/> <strong>intelligence</strong>, <strong>Predict</strong> cyber-attack, even unknown threats.</p>
                       <p style={{fontSize:this.state.width/84}}><FontAwesomeIcon icon={faCaretRight} size="xxs"/><strong>Analyzing</strong> abnormal behavior, to provide <strong>flexibility</strong> in<br/> <strong>delivering elastic system maintenance</strong>, applications and<br/> jobs run, with <strong>eliminating</strong> the risks of false positives.</p>
                       <p style={{fontSize:this.state.width/84}}><FontAwesomeIcon icon={faCaretRight} size="xxs"/><strong>Analyzing</strong> system actions, <strong>detects</strong> abnormal behavior<br/> and exposes hackers' camouflage <strong>operations</strong></p>
                       <p style={{fontSize:this.state.width/84}}><FontAwesomeIcon icon={faCaretRight} size="xxs"/>gain deep visibility into the device’s behavior in real time across<br/> its entire lifecycle, to predict unknown future attacks, abnormal<br/> behavior.</p>
                       <p style={{fontSize:this.state.width/84}}><FontAwesomeIcon icon={faCheck} style={{marginLeft:'2%',color:'green'}}/>Smart Monitoring system – detection and respond- <br/><spen style={{marginLeft:'6%'}}>alerting - Security Operation Center <strong>(SOC)</strong></spen></p>
                       </div>  
                   </div>
              </div>
              
          </div>

          <ReactBootStrap.Modal size="lg"  aria-labelledby="example-modal-sizes-title-lg" show={this.state.show} onHide={() => this.handleClose()}>
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title><h1>Contact us</h1></ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
       { this.state.apply === false &&(      
        <ReactBootStrap.Form onSubmit={this.handlerSubmit}>
          <ReactBootStrap.Form.Group >
               <ReactBootStrap.Form.Label><h2>Name:</h2></ReactBootStrap.Form.Label>
               <ReactBootStrap.Form.Control style={{fontSize:25}}  name="name" id="name" type="text" placeholder="Name" />
          </ReactBootStrap.Form.Group>
          
          <ReactBootStrap.Form.Group >
               <ReactBootStrap.Form.Label><h2>Phone:</h2></ReactBootStrap.Form.Label>
               <ReactBootStrap.Form.Control style={{fontSize:25}} type="text"  id="phone" name="phone" placeholder="Phone" />
          </ReactBootStrap.Form.Group>

          <ReactBootStrap.Form.Group >
            <ReactBootStrap.Form.Label><h2>Email address:</h2></ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control style={{fontSize:25}}  id="email" name="email" type="email" placeholder="Enter email" />
             <ReactBootStrap.Form.Text className="text-muted">
               <h6>We'll never share your email with anyone else.</h6>
            </ReactBootStrap.Form.Text>
          </ReactBootStrap.Form.Group>

          
          <ReactBootStrap.Button size="lg" variant="primary" type="submit">
            Submit
          </ReactBootStrap.Button>
       </ReactBootStrap.Form>)}
       {this.state.apply === true &&(<div>
         <h4>Thank you!</h4>

       </div>)}
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button size="lg"  variant="secondary" onClick={() => this.handleClose()}>
            Close
          </ReactBootStrap.Button>
          
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
          </React.Fragment>
          
      );
    };
}

export default Desc;