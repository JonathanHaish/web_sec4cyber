import React , {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';

class CardOne1 extends Component{

    changePage(){
        window.location.reload();
    }

    render(){
        return(
            <React.Fragment>
                <div className="row" style={{marginLeft:this.props.marginLeft,marginTop:'2%',height:this.props.height}}>
                <Card className="cardS" style={{ width: this.props.width,height:this.props.height }}>
                <BrowserRouter>
                     <a href="/Product%20Security/">
                       <Card.Img src={this.props.Image} height={this.props.height/2.7}/>
                     </a>
                </BrowserRouter>
                 <Card.Body>
                    <Card.Title style={{marginLeft:"20%",fontSize:this.props.width/15}}><strong>{this.props.Title}</strong></Card.Title>
                    <p style={{fontSize:this.props.width/21}}><strong>Reduce your costs</strong></p>
                    <Card.Text style={{fontSize:this.props.width/25}}>
                    <strong>Autonomously</strong> maps all call sequences to create<br/> your customized security policy, it’s easy and done<br/> by button click.<br/> 
                    There is <strong>no</strong> need for constant security updates,<br/> our algorithm ensures there is <strong>no</strong> performance drag.<br/>
                    Save resources on security engineering.<br/><br/> 
                    <strong>Remove the load on your developers</strong><br/>
                    <strong>Speed Up Time-to-Market.</strong>

                 </Card.Text>
                 <BrowserRouter>
                    <Button style={{fontSize:this.props.fontButton,marginLeft:'11%',width:'70%',backgroundColor:'#3d00b8',borderRadius:'25px',height:this.props.height*0.055}}><a href="/Product%20Security/" style={{textDecoration:'none',color:'white'}}>Secure your SDLC</a></Button>
                 </BrowserRouter>
                 </Card.Body>
               </Card>
               </div>
            </React.Fragment>
        );
    };
}

export default CardOne1;