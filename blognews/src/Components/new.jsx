import React , {Component} from 'react';
import * as Rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class New extends Component{
    state={
        height:250,
        shB:"",
        width:350,
    };

    handlerLeave(){
        this.setState((state, props) => ({
            height: (state.height-100),
            shB:"",
            width:(state.width-100)
          }));
    };

    handlerKeep(){ 
        this.setState((state, props) => ({
            height: (state.height+100),
            shB:"8px 8px 8px white, 6px 6px 6px Navy",
            width:(state.width+100)
          }));
    };
    render(){
        let height = this.props.height/4;
        let width = this.props.width/5;
        let shB = this.state.shB;
        console.log(height);
        return (
            <div style={{marginLeft:100}}>
               <Rb.Card style={{ width: width ,boxShadow:shB }} onMouseLeave={() => this.handlerLeave()} onMouseEnter={() => this.handlerKeep()}>
                   <a href="#link"><div style={{backgroundColor:'black',width:"100%",height:height}}>

                    </div></a>
                    {/*<Rb.Card.Img variant="top" src="holder.js/100px180" />*/}
                    <Rb.Card.Body>
                     <Rb.Card.Title>Card Title</Rb.Card.Title>
                     <Rb.Card.Text>
                       Some quick example text to build on the card title and make up the bulk of
                       the card's content.
                     </Rb.Card.Text>
                     <Rb.Button variant="primary">Go somewhere</Rb.Button>
                   </Rb.Card.Body>
               </Rb.Card>
            </div>
        );
    };
}

export default New;