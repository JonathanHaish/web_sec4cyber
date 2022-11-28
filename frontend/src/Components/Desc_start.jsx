import React ,{Component} from 'react';

class DescS extends Component{
    state={
        scrollTop:0,
        height:this.props.height,
        width:window.innerWidth
    };
    changeSize(state){
      this.setState({width:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
    render(){
        return(
            <React.Fragment>
                <div style={{marginTop:'7%',marginLeft: '10%',width: '85%'}}>
                   <h1 style={{fontSize: this.state.width/55,marginLeft:this.props.marginLeftT}}><strong>Secure your IoT/OT from the endpoint to the cloud.</strong></h1>
                   <p style={{fontSize: this.state.width/84,marginLeft:this.props.marginLeft}}><strong>Sec4Cyber</strong> solutions protect connected IoT/OT devices smoothly secured.</p>
                   <p style={{fontSize: this.state.width/84,marginLeft:this.props.marginLeft}}>Our software products automatically integrate into the OS, <strong>without</strong> requiring any hardware or software changes.</p>
                   <p style={{fontSize: this.state.width/84,marginLeft:this.props.marginLeft}}>An <strong>embedded security</strong>, designed to safeguard <strong>resource limited systems</strong>, from the endpoint to the cloud.</p>
               </div>
            </React.Fragment>
        );
    };
}

export default DescS;