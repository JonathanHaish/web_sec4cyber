import React , { Component } from 'react';
import SafeTrip from './Components/SafeTrip/safeTrip';
import SafeGaurd from './Components/SafeGaurd/safeGaurd';
import SecurityServ from '/home/daniel/ReactExpress/products/src/Components/securityServises/security_serv.jsx';

class App extends Component{
   state={
     file1:"",
     file2:"",
     file3:""
   };

  render(){
    let url = window.location.href.split("/");
    if(url[3] === "SafeTrip")
    {
      return(
        <SafeTrip file={this.state.file1}/>
      );  
    }
    
    else if(url[3] === "SafeGaurd")
    {
      return(
          <SafeGaurd file={this.state.file3}/>
       );
    }
    else if(url[3] === "Product%20Security"){
      return(
        <SecurityServ file={this.state.file1}/>
      );
    }
    return <SecurityServ/>;
  };
} 

export default App;
