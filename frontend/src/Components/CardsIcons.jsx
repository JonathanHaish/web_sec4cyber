import React , {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import ImageI from './Images_Videos/Idia.png';
import ImageAL from './Images_Videos/AI3.png';
import ImageP from './Images_Videos/preform.png';
import ImageT from './Images_Videos/tech.png';


class CardsIcon extends Component{
    render(){
        return(
            <React.Fragment>
                <h1 style={{marginLeft:'30%',marginTop:'5%'}}>Smooth Protection of IoT/OT devices</h1>
                <div className="row" style={{marginTop:'2%'}}>
                <Card className="cardS" style={{marginLeft:'4.2555%', width:395,height:560}}>
                 <Card.Img src={ImageI} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"18%",fontSize:30}}><strong>Smooth to R & D</strong></Card.Title>
                    <Card.Text style={{fontSize:20}}>
                       <p style={{marginLeft:"12%"}}>All of Sec4Cyber’s products do<br/><strong> Not</strong> require any R&D changes</p>
                    </Card.Text>
                    <Button variant="primary" style={{fontSize:20,marginLeft:'12%',width:'70%',backgroundColor:'#3d00b8',marginTop:'65%',borderRadius:20}}>Read more</Button>
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:395,height:560 }}>
                 <Card.Img src={ImageAL} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"15%",fontSize:30}}><strong>Smooth to Legacy <br/><span style={{marginLeft:'20%'}}>Modules</span></strong></Card.Title>
                    <Card.Text style={{fontSize:20}}>
                       <p style={{marginLeft:"12%"}}>By analyzing product binaries<br/> and not source code,<br/> Sec4Cyber’s products<br/> automatically <strong>protect</strong> the IoT<br/> product’s software, including<br/> legacy modules, which are<br/> relevant, with<strong> zero</strong> false<br/> positives.</p>
                    </Card.Text>
                    <Button variant="primary" style={{fontSize:20,marginLeft:'12%',width:'70%',backgroundColor:'#3d00b8',marginTop:'5%',borderRadius:20}}>Read more</Button>
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:395,height:560 }}>
                 <Card.Img src={ImageT} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"8%",fontSize:30}}><strong>Smooth to Hardware<br/><span style={{marginLeft:'18%'}}> Architecture</span></strong></Card.Title>
                    <Card.Text style={{fontSize:20}}>
                       <p style={{marginLeft:"12%"}}>SafeTrip supports<strong> all CPU,</strong><br/> architectures <br/>embedded agent’s protect<br/> existing hardware architecture,<br/> without requiring any changes to<br/> the device hardware.</p>
                    </Card.Text>
                    <Button variant="primary" style={{fontSize:20,marginLeft:'12%',width:'70%',backgroundColor:'#3d00b8',marginTop:'21%',borderRadius:20}}>Read more</Button>
                 </Card.Body>
               </Card>

               <Card className="cardS" style={{marginLeft:'2%',  width:395,height:560 }}>
                 <Card.Img src={ImageP} style={{width:'15%', height:'11%',marginLeft:'40%',marginTop:'5%'}} />
                 <Card.Body>
                    <Card.Title style={{marginLeft:"18%",fontSize:30}}><strong>NO performance<br/> <span style={{marginLeft:'22%'}}>impacts</span></strong></Card.Title>
                    <Card.Text style={{fontSize:20}}>
                       <p style={{marginLeft:"12%"}}>The embedded agent’s zero<br/> <strong>performance impact</strong>.<br/>Actually, we improved system <br/>performance.</p>
                    </Card.Text>
                    <Button variant="primary" style={{fontSize:20,marginLeft:'12%',width:'70%',backgroundColor:'#3d00b8',marginTop:'38%',borderRadius:20}}>Read more</Button>
                 </Card.Body>
               </Card>
                </div>
            </React.Fragment>
        );
    };
}


export default CardsIcon;