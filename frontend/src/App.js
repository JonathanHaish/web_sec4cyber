//import logo from './logo.svg';
import './App.css';
import  React, { Component } from 'react';
import Stript from './Components/stript';
import NavBar from './Components/navbar';
import Desc from './Components/Desc';
import Quick from './Components/quickLinkCon';


class App extends Component{
  state = {
    height: (window.innerHeight),
    width: "100",
    desc:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };

  render(){
    return (
      <div>
        <NavBar />
        <Stript heigth={this.state.height} width={this.state.width}/>
        <Desc/>
        <Quick/>
      </div>
    );
  };
}

export default App;
