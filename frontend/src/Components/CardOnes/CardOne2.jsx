import React , {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
class CardOne2 extends Component{


    changePage(){
       window.location.reload();
    }
    render(){
        return(
            <React.Fragment>
                <div className="row" style={{marginLeft:this.props.marginLeft,marginTop:'2%'}}>
               <Card className="cardS" style={{ width: this.props.width,height:this.props.height }}>
                 <BrowserRouter>
                    <a href="/SafeTrip/">
                      <Card.Img src={this.props.Image} height={this.props.height/2.7}/>
                    </a>
                 </BrowserRouter>
                   
                 <Card.Body>
                    <Card.Title style={{marginLeft:"36%",fontSize:this.props.width/15}}><strong>{this.props.Title}</strong></Card.Title>
                    <p style={{fontSize:this.props.width/21}}><strong>Embedded Security Platform.<br/>Secure your IoT devices.</strong></p>
                    
                    <Card.Text style={{fontSize:this.props.width/26}}>
                    SafeTrip is smoothly embedded agent automatically<br/> generates security policy.<br/> <strong>Blocks</strong> cyberattacks, <strong>protects</strong> your processes &<br/> APP’s, provides <strong>early</strong> warning on attack attempts.<br/>
<strong>No</strong> R&D or supply-chain changes are required.<br/> 
<strong>No</strong> hardware or software changes are required.<br/>
<strong>zero performance impact.</strong>



                 </Card.Text>
                 <p style={{fontSize:this.props.width/26}}><strong>Cut Resource Needs.<br/>
                 Secure your Supply Chain.</strong></p>
                 <BrowserRouter>
                    <Button style={{height:this.props.height*0.055,fontSize:this.props.fontButton,marginLeft:'15%',width:'70%',backgroundColor:'#3d00b8',borderRadius:'25px'}} onClick={() => this.changePage()}> <a href="/SafeTrip/" style={{textDecoration:'none',color:'white'}}>Self-protect your device</a></Button>
                 </BrowserRouter>
               
                 </Card.Body>
               </Card>
               </div>
            </React.Fragment>
        );
    };
}

export default CardOne2;