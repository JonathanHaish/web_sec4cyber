import React , {Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DivNav from './divN';
import emailjs from 'emailjs-com';




class NavBar extends Component{
    constructor(props) {
      super(props);

      this.state = {
        dropdownOpen: false,
        listI:["Automotive & Transport","Indusrtry 4.0 & Energey","Emergency & Defense","Enterprize Edge","Consumer IoT"],
        listP:["SafeTrip","SafeCAN","SafeGaurd","Product Security"],
        listB:["Blog","News"],
        listC:["About Us","Solutions","Datasheet"],
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
            <>
            
             
            <ReactBootStrap.Navbar bg="white" fixed="top" variant="light">
              <ReactBootStrap.Navbar.Brand href="/"><img src={process.env.PUBLIC_URL +"/logoName.png"} style={{height:90,marginLeft:140}}  alt="jjjjjj"/></ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Nav className="mr-auto" style={{marginLeft:220}}>
                   
               <DivNav name="Products & Services" list={this.state.listP} />

               <DivNav name="Industries" list={this.state.listI}/>
              
               <DivNav name="Company" list={this.state.listC}/> 

               <DivNav name="Blog" list={this.state.listB}/>
                
                </ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link id="Contact" href="#Contact"  value={this.state.feedback} onClick={() => this.handleShow()} style={{fontSize:30,marginRight:100,color:'black'}}>Contact</ReactBootStrap.Nav.Link>
           
            </ReactBootStrap.Navbar>
            
            {/** modal*/}
           
    
      

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
         <h4>xxxxxxxxxxxxxxxxxxxxxxx</h4>
         <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
       </div>)}
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button size="lg"  variant="secondary" onClick={() => this.handleClose()}>
            Close
          </ReactBootStrap.Button>
          
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
          </>
      
        );
    };
}

export default NavBar;