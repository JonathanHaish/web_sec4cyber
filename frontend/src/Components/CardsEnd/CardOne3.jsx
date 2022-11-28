import React , {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import ImageAL from '../Images_Videos/AINew.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight} from '@fortawesome/free-solid-svg-icons';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

class CardOne3 extends Component{
    constructor(props) {
        super(props);
  
        this.state = {
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
            <React.Fragment>
                <div className="row" style={{marginLeft:'5%',marginTop:'2%'}}>
               <Card className="cardS" style={{ width: this.props.width,height:this.props.heightCard }}>
                 <Card.Img src={ImageAL} style={{height:"38%",width:"78%",marginLeft:'12%'}}/>
                 <Card.Body>
                    <Card.Title style={{fontSize:this.props.width/20,marginLeft:'11%'}}><strong>AI-Machin Learning-analyzing anomaly’s, threats intelligence</strong></Card.Title>
                    <Card.Text style={{fontSize:this.props.width/27.5}}>
                    <p style={{marginLeft:'12%'}}>
                       <FontAwesomeIcon icon={faCaretRight} size="xxs"/><span style={{marginLeft:'3%'}}><strong>Security Operation Center (SOC),<br/> controlling, monitoring, Alerting.</strong></span><br/>
                       <FontAwesomeIcon icon={faCaretRight} size="xxs"/><span style={{marginLeft:'3%'}}><strong>Control Supply Chain Security</strong></span><br/>
                       <FontAwesomeIcon icon={faCaretRight} size="xxs"/><span style={{marginLeft:'3%'}}><strong>Speed Up Time-to-Market</strong></span><br/>
                       <FontAwesomeIcon icon={faCaretRight} size="xxs"/><span style={{marginLeft:'3%'}}><strong>Remove the load on your developers</strong><br/> Autonomously creates your customized<br/> security policy </span><br/>
                       <FontAwesomeIcon icon={faCaretRight} size="xxs"/><span style={{marginLeft:'3%'}}>Unlike others security, there’s <strong>no need</strong><br/> for constant updates.</span><br/>
                       <FontAwesomeIcon icon={faCaretRight} size="xxs"/><span style={{marginLeft:'3%'}}><strong>Speed Up Time-to-Market</strong></span>
                    </p>
                 </Card.Text>
                 
                 <Button variant="primary" onClick={() => this.handleShow()} style={{fontSize:this.props.width/20,marginLeft:'15%',width:this.props.width*0.7,backgroundColor:'#000fb0',marginTop:'26.5%',borderRadius:'20px'}}>Downloads Datasheet</Button>
                 </Card.Body>
               </Card>
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

export default CardOne3;