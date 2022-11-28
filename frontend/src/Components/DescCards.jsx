import React , {Component} from 'react';
import CardOne1 from './CardOnes/CardOne1';
import CardOne2 from './CardOnes/CardOne2';
import CardOne3 from './CardOnes/CardOne3';
import ImageT from './Images_Videos/teamNew.jpg';
import ImageST from './Images_Videos/SafeTripNew.jpg';
import ImageSG from './Images_Videos/SafeGaurd.jpg';

class DescCards extends Component{
    state={
        width:window.innerWidth,
        height:window.innerHeight
    };
    componentDidMount(){
        window.addEventListener('resize', () => this.listenEvent(this.state));  
      };
  
  
    listenEvent(state) {
      this.setState({width:window.innerWidth,height:window.innerHeight})
    };
    
    render(){
        return(
            <React.Fragment>
               <div className="row" style={{marginTop:'4%',width:"100%"}}>
                 <h1 style={{marginLeft:'15%',fontSize: this.state.width/55}}><strong>Security automation. from the development to secure production.</strong></h1>
                 <CardOne1 Image={ImageT} fontButton={this.state.width/78} width={(this.state.width/3.9)} height={this.state.width/2.1} Title="Product Security" marginLeft="11%"/>
                 <CardOne2 Image={ImageST} fontButton={this.state.width/78} width={(this.state.width/3.9)} height={this.state.width/2.1} Title="SafeTrip" marginLeft="3%"/>
                 <CardOne3 Image={ImageSG} fontButton={this.state.width/78} width={(this.state.width/3.9)} height={this.state.width/2.1} Title="SafeGuard" marginLeft="3%"/>
               </div>
            </React.Fragment>
        );
    };
}

export default DescCards;