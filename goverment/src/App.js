import './App.css';
import React , { Component }from 'react';
import Stript from './Components/stript';
import Desc from './Components/DesOfAutoMotive'; 
import DescFlow from './Components/Desc';
import NavBar from './Components/navbar';
import Quick from './Components/quickLinkCon';

class App extends Component{

  render(){
    return(
      <React.Fragment>
        <NavBar/>
      	<Stript />
        <Desc />
        <DescFlow/>
        <Quick/>
      </React.Fragment>	
      
    );
  }
}

export default App;
