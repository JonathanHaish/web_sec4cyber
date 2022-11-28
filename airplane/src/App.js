import './App.css';
import React , { Component }from 'react';
import Stript from './Components/stript';
import Desc from './Components/DesOfAutoMotive'; 
import NavBar from './Components/navbar';
import HealthcareMed from './Components/HealthcareMedical/HealthcareMedical';
import DescFlow from './Components/DescFlow';
import CardsIcon from './Components/CardsIcons';
import Quick from './Components/quickLinkCon';
class App extends Component{
  state={
    scrollTop:0,
    widthStrip:window.innerWidth,
    height:window.innerHeight
  };
  changeSize(state){
    this.setState({widthStrip:window.innerWidth,height:window.innerHeight})
  }

  componentDidMount(){
    window.addEventListener('resize',() => this.changeSize(this.state));
  }
  render(){
    let url = window.location.href.split("/");
    if(url[3] !== "Enterprise%20Edge")
    {
      return(
        <React.Fragment>
          <NavBar/>
          <Stript scrollTop={0}/>
          <Desc width={this.state.widthStrip} height={this.state.height} marginLeft="1%"/>
          <DescFlow width={this.state.widthStrip} height={this.state.height} marginLeft="1%"/>
          <CardsIcon width={this.state.widthStrip} height={this.state.height} marginLeft="1%"/>
          <Quick />
        </React.Fragment>	
        
      );
    }
    return (
      <React.Fragment>
          <HealthcareMed/>
        </React.Fragment>	
    );
  }
}

export default App;

