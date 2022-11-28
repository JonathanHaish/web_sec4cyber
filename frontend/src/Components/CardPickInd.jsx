import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

class CardPickInd extends Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}  style={{
                width:'30%',
                height: '180%',
                marginLeft:'2px',
            }}>
                 <Card.Img variant="top" src={this.props.Image} style={{
                     height:25,
                     width:25
                 }}/>
                 <h3  style={{position:'absolute',marginTop: '60%',marginLeft:'30%',textShadow:'2px 2px 2px black'}}>{this.props.Title}</h3>
                 <a href="/AutoMotive/" style={{color:'white'}}><div className="card-img-overlay" style={{backgroundColor:'black',opacity:0.8,width:'100%',height:'100%',display:'none'}}>
                <h3 className="card-title" style={{marginLeft:'30%',marginTop:'25%'}}>Auto Motive</h3>
                 <p class="card-text" style={{marginLeft:'15%'}}>{this.props.Desc}</p>
               </div></a>
            </Card>
        );
    };
}

export default CardPickInd;