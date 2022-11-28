import React , {Component} from 'react';
import {Card} from 'react-bootstrap';
import ImageI from './images_Picks/eye.png';
import ImageAL from './images_Picks/punch.png';
import ImageP from './images_Picks/shild.png';
import ImageT from './images_Picks/megafon.png';
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
                <div className="row" style={{marginTop:'2%'}}>
                <Card className="cardS" style={{marginLeft:'3.5%', width:this.state.width*0.221,height:this.state.width/3.7}}>
                 <Card.Img src={ImageI} style={{width:'14%', height:'8%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"18%",fontSize:this.state.width/60}}><strong>Secured Design</strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>Sec4Cyber employs<br/> industry-leading experts to help<br/> <strong>manufacturers</strong> gain a holistic<br/> understanding of the cyber<br/> threats facing their <strong>product’s</strong><br/> <strong>architecture,</strong> so they can<br/> design <strong>safer devices.</strong></p>
                    </Card.Text>
                    
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:this.state.width*0.221,height:this.state.width/3.7 }}>
                 <Card.Img src={ImageAL} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"12%",fontSize:this.state.width/60}}><strong>Security Validation</strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>helping manufacturers and<br/> <strong>enterprises</strong> locate and prioritize<br/> the security gaps and blind<br/> spots in the <strong>software</strong> image,<br/> <strong>Application</strong> Security, <strong>Network</strong><br/> security <strong>architecture</strong> and<br/> <strong>supply chain.</strong></p>
                    </Card.Text>
                    
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:this.state.width*0.221,height:this.state.width/3.7 }}>
                 <Card.Img src={ImageP} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"20%",fontSize:this.state.width/60}}><strong>Self-Protection</strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>Sec4Cyber <strong>embedded security</strong><br/> solutions provide the software<br/> <strong>integrity</strong> and <strong>authentication</strong><br/> needed in <strong>performance</strong><br/> <strong>challenged</strong> environments.</p>
                    </Card.Text>
                    
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:this.state.width*0.221,height:this.state.width/3.7}}>
                 <Card.Img src={ImageT} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"10%",fontSize:this.state.width/60}}><strong>Continuous Security</strong></Card.Title>
                    <Card.Text style={{fontSize:this.state.width/88}}>
                       <p style={{marginLeft:"12%"}}>gain deep visibility into the<br/> <strong>device’s behavior</strong> in real time<br/> across its <strong>entire lifecycle</strong>, to<br/> help and resolve attacks,<br/> understand threats, support and<br/> provide <strong>over-the-air updates.</strong></p>
                    </Card.Text>
                    
                 </Card.Body>
               </Card>
                </div>
            </React.Fragment>
        );
    };
}


export default CardsIcon;