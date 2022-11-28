import React , {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import ImageI from './videos/Idia.png';
import ImageAL from './videos/AI3.png';
import ImageP from './videos/preform.png';
import ImageT from './videos/tech.png';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';


class CardsIcon extends Component{
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

    changeSize(state){
        this.setState({width:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
        window.addEventListener('resize',() => this.changeSize(this.state));
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{marginLeft:'30%',marginTop:'10%'}}><strong>Smooth Protection of IoT/OT devices</strong></h1>
                <div className="row" style={{marginTop:'2%'}}>
                <Card className="cardS" style={{marginLeft:'3.5%', width:this.state.width*0.221,height:this.state.width/3.7,boxShadow:'4px 4px 4px Lightgrey, 4px 4px 4px black,4px 4px 4px black'}}>
                 <Card.Img src={ImageI} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"18%",fontSize:this.state.width/60}}><strong>Smooth to R & D</strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>All of Sec4Cyber’s products do<br/><strong> not</strong> require any R&D or software changes </p>
                    </Card.Text>
                    
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:this.state.width*0.221,height:this.state.width/3.7,boxShadow:'4px 4px 4px Lightgrey, 4px 4px 4px black,4px 4px 4px black' }}>
                 <Card.Img src={ImageAL} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"15%",fontSize:this.state.width/60}}><strong>Smooth to Legacy <br/><span style={{marginLeft:'20%'}}>Modules</span></strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>By analyzing product binaries<br/> and not source code,<br/> Sec4Cyber’s products<br/> automatically <strong>protect the IoT/OT</strong><br/> product’s software, with <strong>zero</strong><br/> false positives</p>
                    </Card.Text>
                   
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:this.state.width*0.221,height:this.state.width/3.7,boxShadow:'4px 4px 4px Lightgrey, 4px 4px 4px black,4px 4px 4px black'}}>
                 <Card.Img src={ImageT} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"8%",fontSize:this.state.width/60}}><strong>Smooth to Hardware<br/><span style={{marginLeft:'18%'}}> Architecture</span></strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>SafeTrip is OS agnostic,<br/> <strong>supports all CPU</strong> architectures,<br/> embedded agent protects existing<br/> architecture, <strong>without</strong> requiring<br/> any changes to the device<br/> hardware</p>
                    </Card.Text>
                    
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:this.state.width*0.221,height:this.state.width/3.7,boxShadow:'4px 4px 4px Lightgrey, 4px 4px 4px black,4px 4px 4px black'}}>
                 <Card.Img src={ImageP} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"18%",fontSize:this.state.width/60}}><strong>NO performance<br/> <span style={{marginLeft:'22%'}}>impacts</span></strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>The embedded agent’s <strong>zero</strong><br/> <strong>performance impact.</strong><br/> Actually, we <strong>improved system</strong><br/> performance.</p>
                    </Card.Text>
                    
                 </Card.Body>
               </Card>
                </div>
                <Button  type="button" style={{backgroundColor:'#3d00b8',fontSize:'220%',marginLeft:window.innerWidth/4,borderRadius:'30px',marginTop:'3%'}} size="lg"><strong>Downloads Datasheet</strong></Button>
                <Button onClick={() => this.handleShow()} type="button" style={{backgroundColor:'#3d00b8',fontSize:'220%',marginLeft:'10%',borderRadius:'30px',marginTop:'3%'}} size="lg"><strong>Book a Demo</strong></Button>
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
            </React.Fragment>
        );
    };
}


export default CardsIcon;