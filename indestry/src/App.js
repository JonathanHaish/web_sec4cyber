import React, { Component } from 'react';
import './App.css';
import Stript from './Components/Stript';
import Desc from './Components/Desc';
import NavBar from './Components/navbar';
import DescFlow from './Components/DescFlow';
import Quick from "./Components/quickLinkCon";
class App extends Component {
  state = {
  	file1:{
  		text:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+
  		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+
  		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+
  		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  	}
  };
  render(){
    return (
  	  <React.Fragment>
        <NavBar/>
        <Stript />
        <Desc style={{fontSize:10}} description={this.state.file1}/>
        <DescFlow/>
        <Quick/>
  	  </React.Fragment>
    
    );
  };
}

export default App;
