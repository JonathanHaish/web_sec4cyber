import React , {Component} from 'react';
import emailjs from 'emailjs-com';
import {Image} from 'react-bootstrap';
import VideoStript from './videoSF';
import ImageSG from './Videow/SG.jpg';
import {BrowserRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import ImagePlane from './Videow/airplaneNew.jpg';
import * as ReactBootStrap from 'react-bootstrap';
import {Button} from 'react-bootstrap';


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
            <React.Fragment>
            <div>
                <h2 style={{marginLeft:'10%',marginTop:'10%',fontSize: this.state.width/55}}><strong>Always On. Always Secure. Always High Performance.</strong></h2>
                <div style={{marginLeft: '10%',marginTop:'1%'}} className="row">
                  <div>  
                    <h3><strong>Embedded Security Platform</strong></h3>
                    <p style={{fontSize:this.state.width/84}}>Sec4Cyber <strong>secures</strong> and <strong>protects</strong> the Industrial and critical infrastructure <br/>computing environment <strong>hermetically</strong> without compromising <strong>performance</strong>,<br/>by embedding the security as a part of the operating system.<br/>
Sec4Cyber solution - <strong>SafeGuard delivers end-to-end protection.</strong></p>
                    <p style={{fontSize:this.state.width/84}}>SafeGuard locally embedded agent, automatically smoothly generates<br/>security policy.</p>
                    <p style={{fontSize:this.state.width/84}}><strong>Blocks</strong> cyberattacks, <strong>protects</strong> your processes & APP’s, provides <strong>early</strong><br/>warning on attack attempts.</p>
                    <h3><strong>Block In-Memory Attacks</strong></h3>
                    <p style={{fontSize:this.state.width/84}}>Performing lightweight Control Flow Integrity (CFI), SafeGaurd continuously<br/> monitors function calls and return pointers to ensure your programs stay<br/>within the expected execution flow.</p>
                    <p style={{fontSize:this.state.width/84}}>SafeGuard device Control Flow Integrity (CFI) doesn’t rely on updates and<br/> the protection is <strong>always on</strong> and <strong>remains stable</strong> over the life of the device.<br/> It’s <strong>safe</strong> and <strong>secure</strong> by design.</p>
                    <h3><strong>Self-protect your device</strong></h3>
                    <p style={{fontSize:this.state.width/84}}><strong>Self-Protection</strong>, Sec4Cyber embedded security solutions provide the<br/> software <strong>integrity</strong> and <strong>authentication</strong> needed in <strong>performance challenged</strong><br/>environments.</p>
                    <p style={{fontSize:this.state.width/84}}><strong>self-protection</strong> against device control loss. Buffer overflows can result in<br/> foreign malicious code or code reuse such as return-oriented programming<br/>(ROP) and (JOP) attacks, which <strong>SafeGuard blocks them.</strong></p>
                    <p style={{fontSize:this.state.width/84}}>After the attack is detected and blocked, SafeGuard provides a detailed<br/> report of the attack.</p>
                    <h3><strong>Remove the load on your security architect</strong></h3>
                    <p style={{fontSize:this.state.width/84}}><strong>Autonomously</strong> maps all call sequences to create your customized security<br/>policy, it’s <strong>done easily</strong> by button klick.</p>
                    <h3><strong>Cut Resource Needs</strong></h3>
                    <p style={{fontSize:this.state.width/84}}>Cut the resources needed for product security<br/>
                    <strong>No R&D</strong> - hardware or software changes are required.</p>
                 </div>
                 <div style={{width:this.state.width/3,height:"10%",backgroundColor:"white",position:"absolute",marginTop:"2.5%",marginLeft:"50%"}}></div>
                  <VideoStript width={this.state.width*0.39} height={this.state.height/1.3} marginTop="5%"/>
                </div>
                <h2 style={{marginLeft: '52%',marginTop:"3%",fontSize: this.state.width/55}}><strong>Secure your IIoT and IT/OT Network</strong></h2>
                <div style={{marginLeft: '9%'}} className="row">
                <Image src={ImageSG} style={{width:this.state.width*0.39,height:this.state.height/2.1,marginTop:"1%"}}/>
                  <div style={{marginLeft:"4.265%"}}>
                    <p style={{fontSize:this.state.width/84}}><strong>SafeGuard</strong> - Secures devices Network, a cloud Server based<br/><strong>AI-Machine Learning</strong>, work as a Security Operation Center <strong>(SOC)</strong> for<br/> controlling, monitoring, Alerting. Automatically profiles devices network<br/>behaviors.<br/>
A locally agent (in the device), automatically generates security policy<br/> Blocks cyberattacks, protects your processes & APP’s, provides early<br/>warning on attack attempts.<br/>
<strong>Securely deliver yours updates to devices.</strong><br/> 
<strong>Secure your Supply Chain.</strong><br/>
<strong>Prevent zero-day</strong> cyber-attack</p>
                     <p style={{fontSize:this.state.width/84}}><strong>Continuous Security,</strong> with <strong>AI-Machine Learning</strong> gain deep visibility<br/> into the device’s behavior in real time across its entire lifecycle, to<br/>predict unknown future cyber-attacks, abnormal behavior.</p>
                  <h2><strong>Continuous Visibility</strong></h2>
                  </div>
                  </div>
                  <h2 style={{marginLeft: '10%',marginTop:"3%",fontSize: this.state.width/55}}><strong>Stop threats without impacting device performance</strong></h2>
                  <div style={{marginLeft: '10%',marginTop:'1%'}} className="row">
                  <div style={{marginLeft:"1.3%"}}>
                  <p style={{fontSize:this.state.width/84}}><strong><BrowserRouter><a href="/SafeTrip/">SafeTrip</a></BrowserRouter></strong> runs in <strong>resource</strong>
<strong>e-limited</strong> systems-within the<br/> 
<strong>Host performance requirements.</strong><br/> 
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>CPU: 0%</strong></span><br/>
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>MEM: 0.3%</strong></span><br/> 
<FontAwesomeIcon icon={faCheck} size="xxs" color="green"/><span style={{marginLeft:'3%'}}><strong>Storage: 30KB</strong></span><br/> 
<strong>No need</strong> for heavy processing or continual security updates -</p> 
                <h3><strong>Ensures Top Performance</strong></h3>
                 </div>
                 <Image src={ImagePlane} style={{width:this.state.width*0.39,height:this.state.height/2.1,marginTop:"1%",marginLeft:"6%"}}/>
                 </div>
                 <div style={{marginTop:"5%"}} className="row">
                 <Button type="button" onClick={() => this.handleShow()} style={{backgroundColor:'#3d00b8',fontSize:'170%',marginLeft:'25%',borderRadius:'30px'}} size="lg"><strong>Book a Demo</strong></Button>
                 <Button type="button" style={{backgroundColor:'#3d00b8',fontSize:'170%',marginLeft:'20%',borderRadius:'30px'}} size="lg"><strong>Download Datasheet</strong></Button>
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


export default DescFlow;