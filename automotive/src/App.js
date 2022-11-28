//import logo from './logo.svg';
//import './App.css';
import React , { Component } from 'react';
import Stript from './Components/ComOfStript/Stript';
import Desc from './Components/ComOf_des/DesOfAutoMotive'; 
import NavBar from './Components/navbar';
import DescFlow from './Components/ComOf_des/DescFlow';
import CardIcons from './Components/ComOf_des/CardsIcons';
import Quick from './Components/ComOf_des/quickLinkCon';
class App extends Component{
  state = {
  	desc:{
  		text:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

  	}
  };
  render(){
    return(
      <React.Fragment>
        <NavBar/>
      	<Stript scrollTop={0}/>
        <Desc  description={this.state.desc}/>
        <DescFlow/>
        <CardIcons/>
        <Quick/>
      </React.Fragment>	
      
    );
  }
}

export default App;
