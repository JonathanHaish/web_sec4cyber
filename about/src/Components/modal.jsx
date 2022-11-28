import React , {Component} from 'react';
import * as Rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Modal extends Component{
   
    state={
        shoM:this.props.showM,
    };


    handlerClose(){
        this.setState({showM:false});
    };

    render(){
        

        return(
            <Rb.Modal show={this.state.shoM} onHide={() => this.handleClose()}>
               <Rb.Modal.Header closeButton>
                   <Rb.Modal.Title>Modal heading</Rb.Modal.Title>
                 </Rb.Modal.Header>
                 <Rb.Modal.Body>Woohoo, you're reading this text in a modal!</Rb.Modal.Body>
                 <Rb.Modal.Footer>
                 <Rb.Button variant="secondary" onClick={() => this.handleClose}>
                   Close
                 </Rb.Button>
                 <Rb.Button variant="primary" onClick={() => this.handleClose}>
                   Save Changes
                 </Rb.Button>
               </Rb.Modal.Footer>
           </Rb.Modal>
        );
    };
}

export default Modal;