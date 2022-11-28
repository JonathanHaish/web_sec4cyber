import React ,{ Component } from 'react';
import CardPickInd from './CardPickInd';
import Image1 from './Images_Videos/Automotive.jpg';
import Image2 from './Images_Videos/sec2.jpg';
import Image3 from './Images_Videos/industry2.jpg';

import Image4 from './Images_Videos/consumerIot.png';
import Image5 from './Images_Videos/Government_d.jpg';
import Image6 from './Images_Videos/enterprise.png';

class CardsPickes extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                   <CardPickInd Image={Image1} Title="Automotive" Desc="xxxxxxxxxxxxxxxxxxxxxxxxx"/>
                   <CardPickInd Image={Image2} Title="Sec4Cyber" Desc="xxxxxxxxxxxxxxxxxxxxxxxxxx"/>
                   <CardPickInd Image={Image3} Title="Industries & Energy" Desc="xxxxxxxxxxxxxxxxxxxxxxxxxx"/>
                </div>
                <div className="row">
                <CardPickInd Image={Image4} Title="Consumer IoT" Desc="xxxxxxxxxxxxxxxxxxx"/>
                <CardPickInd Image={Image5} Title="Governments & Defense" Desc="xxxxxxxxxxxxx"/>
                <CardPickInd Image={Image6} Title="Enterprise Edge" Desc="xxxxxxxxxxxxxxx"/>
                </div>
            </React.Fragment>
        );
    }
}

export default CardsPickes;