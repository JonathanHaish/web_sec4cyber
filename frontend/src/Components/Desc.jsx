import React , {Component} from 'react';
import DescS from './Desc_start';
import DescCards from './DescCards';
import CardsScatter from './cardsScatter';
import CardsMainE from './CardsEnd/cardsMainE';

class Desc extends Component{
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
            <DescS marginLeftT="16%" marginLeft="9%" fontSize="150%" />
            <DescCards/>
            <CardsScatter width={this.state.width} height={this.state.height}/> 
            <CardsMainE />         
          </React.Fragment>
      );  
    };
}


export default Desc;