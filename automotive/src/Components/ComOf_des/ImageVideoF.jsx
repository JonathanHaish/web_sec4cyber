import React , { Component } from 'react';


class CarFlash extends Component{
   
    render(){
        return(
          <React.Fragment>
             <script type="text/javascript" src="swfobject.js"></script>
             
             <script type="text/javascript">
                swfobject.embedSWF("./Videos/car-old.swf", "myContent", "300", "120", "9.0.0");
             </script>
          </React.Fragment>
        );
    };
}

export default CarFlash;