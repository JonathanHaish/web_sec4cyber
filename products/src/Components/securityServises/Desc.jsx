import React , { Component } from 'react';
import CardsIcon from './CardsIcons';
import ImageSDLC from './images_Picks/SDLC.png';
import {Image} from 'react-bootstrap';
import Quick from './quickLinkCon';
class Desc extends Component{
    render(){
      return(
          <div>
            <h1 style={{marginLeft:"33%",fontSize:60,marginTop:"2%"}}><strong>Sec4Cyber services</strong></h1>
            <CardsIcon/>
            <h1 style={{marginLeft:"12.8%",fontSize:60,marginTop:"10%"}}><strong>Sec4Cyber Security Engineering Lifecycle Model</strong></h1>
            <Image src={ImageSDLC} style={{marginTop:"2%",marginLeft:"15%"}}/>
            <Quick/>
          </div>
      );
    };
}

export default Desc;