import React , { Component } from 'react';
import ImageDInamic from './ImageDinamic';

class Desc extends Component{
    render(){
      return(
          <div style={{width:700}}>
              <h style={{marginLeft:200,fontSize:40}}>description on SafeTript</h>
              {this.props.file}
              <ImageDInamic/>
          </div>
      );
    };
}

export default Desc;