import React , {Component} from 'react';
import * as Rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class New extends Component{
    render(){
        return (
            <div>
               <Rb.Card style={{ width: '18rem' }}>
                    <Rb.Card.Img variant="top" src="holder.js/100px180" />
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