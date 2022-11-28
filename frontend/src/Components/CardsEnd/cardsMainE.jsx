import React , {Component} from 'react';
import CardOne1 from './CardOne1';
import CardOne2 from './CardOne2';
import CardOne3 from './CardOne3';




class CardsMainE extends Component{
    state = {
        width:window.innerWidth,
        height:window.innerHeight,
        heightCard:window.innerWidth
    };
    
   
    componentDidMount(){
        window.addEventListener('resize', () => this.listenEvent(this.state));  
    };
    

   listenEvent(state) {
    this.setState({width:window.innerWidth,height:window.innerHeight,heightCard:window.innerWidth})
   };


    
    render(){
        let w1 = this.state.width/3.5;
        let h1 = this.state.height/1.2;
        let w2 = this.state.width/3.5;
        let h2 = this.state.height/1.2;
        let w3 = this.state.width/3.5;
        let h3 = this.state.height/1.2;
        return(
            <React.Fragment>
                <h1 style={{marginLeft: "26%",marginTop:'10%',fontSize: this.state.width/55}}><strong>Always On. Always Secure. Always High Performance.</strong></h1>
                <div className="row" >
                    <CardOne1 heightCard={this.state.heightCard/1.92} width={w1} height={h1}/>
                    <CardOne2 heightCard={this.state.heightCard/1.92} width={w2} height={h2}/>
                    <CardOne3 heightCard={this.state.heightCard/1.92} width={w3} height={h3}/>
                </div>
            </React.Fragment>
        );
    };
}

export default CardsMainE;