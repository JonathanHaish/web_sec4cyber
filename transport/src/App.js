import React, { Component } from 'react';
import './App.css';
import Stript from './Components/Stript';
import Desc from './Components/Desc';
import DescFlow from './Components/DescFlow';
import NavBar from './Components/navbar';
import CardsIcon from './Components/CardsIcons';
import Quick from './Components/quickLinkCon';
class App extends Component {
  state={
    scrollTop:0,
    width:window.innerWidth,
    height:window.innerHeight
  };
  changeSize(state){
    this.setState({width:window.innerWidth,height:window.innerHeight})
  }

  componentDidMount(){
    window.addEventListener('resize',() => this.changeSize(this.state));
  }
  render(){
    return (
  	  <React.Fragment>
        <NavBar/>
        <Stript height={this.state.height} width={this.state.width}/>
        <Desc height={this.state.height} width={this.state.width}/>
        <DescFlow height={this.state.height} width={this.state.width}/>
        <CardsIcon height={this.state.height} width={this.state.width}/>
        <Quick/>
  	  </React.Fragment>
    
    );
  };
}

export default App;
