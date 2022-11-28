import React ,{Component} from 'react';
import logoW from './Videow/logoNewWhite.png';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import emailjs from 'emailjs-com';


class Quick extends Component{
    
  constructor(props){
    super(props);
    this.state={
      show:false,
      message:false,
      apply: false,
      width:window.innerWidth,
      height:window.innerHeight
    }
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

      let width = this.state.width
      return(
          <React.Fragment>
            <div style={{backgroundColor:'#15006b',width:this.state.width,height:this.state.height,marginTop:"10%"}}>
                 <div style={{marginTop:'6%',position:'absolute',width:this.state.width*0.75,marginLeft:'13%'}}>
                   <Button onClick={() => this.handleShow()} style={{width:(0.2*width),height:this.state.height*0.08,backgroundColor:'white',color:'black',fontSize:this.state.width/55,borderRadius:"35px"}}><strong>Contact Us</strong></Button>
                   <hr style={{border:'solid 2px white',marginTop:20}}/>
                   <div className="row">
                      <img src={logoW} style={{height:this.state.height*0.1,marginTop:'3%',marginLeft:'3%'}} alt="logo"/>
                      <div>
                        <ul style={{listStyle:'none',color:'white'}}>
                          <li style={{fontSize:this.state.width/55,marginTop:50}}><strong>Products & Services</strong></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/SafeTrip/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>SafeTrip</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/SafeGaurd/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>SafeGuard</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Product Security/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Product Security</a></li>
                        </ul>
                      </div>
                      <div style={{marginLeft:'2%'}}>
                      <ul style={{listStyle:'none',color:'white'}}>
                          <li style={{fontSize:this.state.width/55,marginTop:50}}><strong>Industries</strong></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Automotive & Transport/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Automotive & Transport</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Industry 4.0 & Energy/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Industry 4.0 & Energy</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Emergency & Defense/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Emergency & Defense</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Enterprise Edge/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Enterprise Edge</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Enterprise Edge/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Consumer IoT</a></li>
                        </ul>
                      </div>

                      <div style={{marginLeft:'1%'}}>
                      <ul style={{listStyle:'none',color:'white'}}>
                          <li style={{fontSize:this.state.width/55,marginTop:50}}><strong>Company</strong></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/About Us/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>About Us</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Solutions/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Solutions</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Datasheet/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Datasheet</a></li>
                        </ul>
                      </div>
                      <div style={{marginLeft:'3%'}}>
                      <ul style={{listStyle:'none',color:'white'}}>
                          <li style={{fontSize:this.state.width/55,marginTop:50}}><strong>Blog</strong></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/Blog/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>Blog</a></li>
                          <li style={{fontSize:this.state.width/75}}><a href="/News/" style={{textDecoration:'none',backgroundColor:'15006b',color:'white'}}>News</a></li>
                        </ul>
                      </div>
                   </div>
                   <hr style={{border:'solid 2px white',marginTop:'6%'}}/>
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
            </div>
          </React.Fragment>
      );
  };
}

export default Quick;