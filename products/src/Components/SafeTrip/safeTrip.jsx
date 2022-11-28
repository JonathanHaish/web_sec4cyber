import React , { Component } from 'react';
import Stript from './stript';
import Desc from './Desc';
import NavBar from './navbar';
import CardsIcons from './CardsIcons';
import Quick from './quickLinkCon';


class SafeTript extends Component{
  render(){
      return(
          <div>
              <NavBar id="script"/>
              <Stript/>
              <Desc file={this.props.file1}/>
              <CardsIcons/>
              <Quick/>
          </div>
      );
  };
}


export default SafeTript;