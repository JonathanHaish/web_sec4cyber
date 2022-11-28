import React , {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import { BrowserRouter} from 'react-router-dom';

class CardOne3 extends Component{

    changePage(){
      window.location.reload();
    }
    render(){
        return(
            <React.Fragment>
                <div className="row" style={{marginLeft:this.props.marginLeft,marginTop:'2%'}}>
               <Card className="cardS" style={{width: this.props.width,height:this.props.height}}>
                 <BrowserRouter>
                    <a href="/SafeGaurd/">
                      <Card.Img src={this.props.Image} height={this.props.height/2.7}/>
                    </a>
                 </BrowserRouter>
                 
                 <Card.Body>
                    <Card.Title style={{marginLeft:"36%",fontSize:this.props.width/15}}><strong>{this.props.Title}</strong></Card.Title>
                    <p style={{fontSize:this.props.width/21}}><strong>Secure your IoT/OT Network.<br/>Secure your Cloud Servers.</strong></p>
                    <Card.Text style={{fontSize:this.props.width/26}}>
                    SafeGuard - Secures devices Network,<br/>
WEB Server insides network or in the Cloud.<br/> 
<strong>AI-Machine Learning,</strong> work as a Security<br/> Operation Center (SOC) for controlling,<br/> monitoring, Alerting.<br/> 
<strong>Automatically</strong> profiles devices network and Cloud<br/>Server's behaviors.<br/>
<strong>Blocks</strong> cyberattacks, <strong>protects</strong> your processes &<br/> APP’s, provides <strong>early</strong> warning on attack attempts.<br/>
Securely <strong>delivers your updates</strong> to devices.<br/> 
<strong>Secure your Supply Chain.</strong>


                 </Card.Text>
                 <BrowserRouter>
                   <Button onClick={() => this.changePage()} style={{height:this.props.height*0.055,fontSize:this.props.fontButton,marginLeft:'15%',width:'70%',backgroundColor:'#3d00b8',borderRadius:'25px'}}> <a href="/SafeGaurd/" style={{textDecoration:'none',color:'white'}}>Continuous Visibility</a></Button>
                 </BrowserRouter>
                 </Card.Body>
               </Card>
               </div>
            </React.Fragment>
        );
    };
}

export default CardOne3;