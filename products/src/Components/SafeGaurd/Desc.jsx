import React , { Component } from 'react';
import ImageDInamic from './ImageDinamic';
import ImageTeam from './images_Picks/genrateApp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import smartHome from './images_Picks/IOTNew.jpg';
import {Button,Image} from 'react-bootstrap';
import ImageSec from './images_Picks/securityImage.jpg';
import ImageAI8 from './images_Picks/AI8New.png';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';


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
              <h style={{marginLeft:'12%',fontSize:this.state.width/60}}><strong>A Proactive Security Platform managed by Security operation Center (SOC)</strong></h>
              <div class="row" style={{width:this.state.width,marginTop:'1%'}} >  
                 <div style={{marginLeft:'10%',marginTop:'2%'}}>
                  <p style={{fontSize:this.state.width/84,marginLeft:50}}>SafeGuard is a Proactive Security Platform managed by<br/> Server-Security operation Center (SOC), a WEB Server<br/> insides network or in the Cloud
<br/>for a Real-Time system.</p>
                  <p style={{fontSize:this.state.width/84,marginLeft:50}}>SafeGuard creates a secure IoT devices network of Hosts<br/> with <strong>Endpoints Protected Platform</strong> are monitored,<br/> managed by a web server that serves as a control center:<br/> for controlling, monitoring, management, Policy<br/> configuration, upgrading manufacturer software and<br/> receiving event reporting from endpoints.</p>
                  <p style={{fontSize:this.state.width/84,marginLeft:50}}><strong>Automatically integrate</strong> into the system OS and <strong>without</strong><br/> changing system hardware or software builds.</p>
                  <p style={{fontSize:this.state.width/84,marginLeft:50}}>SafeGuard Performing lightweight Control Flow Integrity<br/>(CFI), SafeTrip continuously check the system’s runtime<br/> integrity, monitors function calls and return pointers to<br/> ensure your programs stay within the <strong>expected execution<br/> flow.</strong> 
If the program deviates from factory settings, SafeTrip<br/> detects the threat and <strong>automatically blocks it.</strong></p>
                 </div>
                 <ImageDInamic width={this.state.width*0.40} height={this.state.height/1.6}/>
              </div>

              <div style={{marginTop:'3%'}}>  
                  <h1 style={{fontSize:this.state.width/60,marginLeft:'58.5%',position:'absolute',marginTop:'1%'}}><strong>Automatically generates applications whitelist</strong></h1>
                  <div class="row" style={{marginLeft:'10%'}}>
                      <Image src={ImageTeam} style={{width:this.state.width*0.42,height:this.state.height/1.9,marginTop:"3%",marginLeft:"2%"}} alt="Team"/>  
                      <div style={{marginTop:'7%',marginLeft:'5%'}}>
                          <p style={{fontSize:this.state.width/84}}>SafeGuard automatically generates and enforces<br/> an applications whitelist to prevent dropper attacks or OS<br/> command injection, if an application attempts to load, and it<br/> does not exist in your embedded approved whitelist (code and<br/> signature at the <strong>binary level, every bit</strong> till the last one),<br/> SafeTrip <strong>blocks it</strong> automatically and sends you an alert.</p>
                          <p style={{fontSize:this.state.width/84}}>It’s working at the <strong>binary level,</strong> eliminating the risks of<br/> false-positives to <strong>zero</strong>.</p>
                          <p style={{fontSize:this.state.width/84}}><strong>Only legitimate</strong> function calls and authorized APPs are<br/> permitted to run, <strong>everything else is blocked</strong>.</p>
                          <p style={{fontSize:this.state.width/84}}><strong>Real-Time security</strong> is <strong>independent,</strong> done <strong>locally in the<br/> device</strong> and does <strong>not</strong> depend on the cloud/network and<br/> cellular connectivity.</p>
                      </div>  
                  </div>
                  
              </div>
              <div style={{marginTop:'1%'}}>
                  <h style={{marginLeft:'12%',fontSize:this.state.width/60}}><strong>SafeGuard blocks cyber-attacks</strong></h>
                  <div class="row" style={{width:this.state.width,marginTop:'1%',marginLeft:'5%'}}>
                       <p style={{fontSize:this.state.width/84,marginLeft:'7%'}}>
                         SafeGuard <strong>blocks</strong> and <strong>protects</strong> from memory corruption and<br/> applications weakness cyber-attacks such as:<br/>
                         <FontAwesomeIcon icon={faCheck} style={{color:'green'}} size="lg"/><span style={{marginLeft:'4%'}}>Return Oriented Programming (ROP), Blind Return</span><br/>
                        <span style={{marginLeft:"8.5%"}}>Oriented Programming (BROP) and etc’.</span><br/> 
                         <FontAwesomeIcon icon={faCheck} style={{color:'green'}} size="lg"/><span style={{marginLeft:'4%'}}>Jump Oriented Programming (JOP).</span><br/>
                         <FontAwesomeIcon icon={faCheck} style={{color:'green'}} size="lg"/><span style={{marginLeft:'4%'}}>zero-day attack,</span><br/>
                         <FontAwesomeIcon icon={faCheck} style={{color:'green'}} size="lg"/><span style={{marginLeft:'4%'}}>Stack Overflowed, Buffer Overflowed and etc’.</span><br/>
                         <br/>
                         <strong>Embedded Security Policy</strong> <br/>SafeGuard automatically generates an embedded Security Policy<br/> and it’s <strong>done easily by button Klick</strong>, with security services like:<br/> processes <strong>Access control,</strong> file system and <strong>core OS protection</strong>,<br/> Denial-of-Service (DoS) attack <strong>prevention</strong> service and etc.’<br/>      
                       </p>
                       <Image src={ImageSec} style={{width:this.state.width*0.42,height:this.state.height/2,marginLeft:"2%"}} alt="security"/>
                  </div>
              </div>
              <h1 style={{fontSize:this.state.width/60,marginTop:'6%',marginLeft:'54%', position:'absolute'}}><strong>Some facts you should know.</strong><br/>
                   <strong>SafeGuard runs in resource-limited systems</strong></h1>
              <div class="row" style={{marginLeft:'10%',marginTop:'5%'}}>
              <Image src={smartHome} style={{width:this.state.width*0.42,height:this.state.height/2,marginTop:"3%"}} alt="Team"/>
              <p style={{fontSize:this.state.width/84,marginLeft:'2%',marginTop:'8%'}}>
                  SafeGuard runs in <strong>resource-limited systems</strong>-within the Host<br/> performance requirements. <br/>
                  <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%',marginTop:'3%'}} size="lg"/><span style={{marginLeft:'4%'}}><strong>CPU: 0%</strong>, (in peak points <strong>1%</strong>).</span><br/> 
                  <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%'}} size="lg"/><span style={{marginLeft:'4%'}}><strong>MEM: 0.3%</strong></span> <br/>
                  <FontAwesomeIcon icon={faCheck} style={{color:'green',marginLeft:'10%'}} size="lg"/><span style={{marginLeft:'4%'}}> <strong>Storage 30KB</strong></span><br/>
                  Actually, SafeGuard <strong>improved system performance,</strong><br/> 
                  we disabled the 3 countermeasures of the OS and processor, that<br/> mitigating these attacks, but they slow down the applications and<br/> hackers have found a way to avoid them.<br/>
                  <br/>
                  We <strong>do not</strong> change your builds and slow the performance.<br/> 
                  Our algorithms ensure there is <strong>no</strong> performance drag.<br/>
                  There is <strong>no need</strong>  for heavy processing or continual security<br/> updates- <strong>ensures Top Performance.</strong><br/>
                  <br/>
                  <strong>SafeGuard</strong> is OS agnostic , <strong>supports all processors.</strong><br/>
                  <span style={{fontSize:this.state.width/60}}><strong>Ensure Top Performance</strong></span>
              </p>
              
              
              </div>
              <div className="row">
            
              </div> 
              <div style={{marginTop:'5%'}}>
                   <h1 style={{marginLeft:'49.5%',fontSize:this.state.width/60,position:'absolute'}}><strong>AI-Machin Learning-analyzing anomaly’s</strong></h1>
                   <div className="row" style={{marginTop:'6%'}}>
                   <Image src={ImageAI8} style={{width:this.state.width*0.39,height:this.state.height/2,marginLeft:"10%"}} alt="AI"/>
                       <div style={{marginLeft:'5%',marginTop:'3%'}}>
                       <p style={{fontSize:this.state.width/84}}>AI-Machin Learning algorithm, analyzing anomaly’s, threats<br/> <strong>intelligence</strong>, <strong>Predict</strong> cyber-attack, even unknown threats.</p>
                       <p style={{fontSize:this.state.width/84}}><strong>Analyzing</strong> abnormal behavior, to provide <strong>flexibility</strong> in<br/> <strong>delivering elastic system maintenance</strong>, applications and<br/> jobs run, with <strong>eliminating</strong> the risks of false positives.</p>
                       <p style={{fontSize:this.state.width/84}}><strong>Analyzing</strong> system actions, <strong>detects</strong> abnormal behavior<br/> and exposes hackers' camouflage <strong>operations</strong></p>
                       <p style={{fontSize:this.state.width/84}}>gain deep visibility into the device’s behavior in real time across<br/> its entire lifecycle, to predict unknown future attacks, abnormal<br/> behavior.</p>
                       <p style={{fontSize:this.state.width/84}}><FontAwesomeIcon icon={faCheck} style={{marginLeft:'2%',color:'green'}}/>Smart Monitoring system – detection and respond- <br/><spen style={{marginLeft:'6%'}}>alerting - Security Operation Center <strong>(SOC)</strong></spen></p>
                       </div>  
                   </div>
              </div>
              <Button type="button" style={{backgroundColor:'#3d00b8',fontSize:'220%',marginLeft:'30%',borderRadius:'30px',marginTop:'4%'}} size="lg"><strong>Dwonlowd Datasheet</strong></Button>
              <Button type="button" style={{backgroundColor:'#3d00b8',fontSize:'220%',marginLeft:'5%',borderRadius:'30px',marginTop:'4%'}} size="lg" onClick={() => this.handleShow()}><strong>Book a Demo</strong></Button>
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