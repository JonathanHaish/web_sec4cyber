import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class DivNav extends Component{

    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.state = {
        dropdownOpen: false,
      };
    }

    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    onMouseEnter() {
      this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
      this.setState({dropdownOpen: false});
    }

    formatDiv(){
      if(this.state.dropdownOpen === true){
        return {fontSize:30,backgroundColor:'white',color:'black',borderColor:'black'};
      };
      return {fontSize:30,backgroundColor:'white',color:'black',borderColor:'white'};
    }
    render(){
        return(
            
           <Dropdown className="dropDwon"  style={{marginLeft:50}} onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
               <DropdownToggle  style={this.formatDiv()}>
                  {this.props.name}
               </DropdownToggle >
               <DropdownMenu>
                  
                {this.props.list.map((text) => 
                  
                   <DropdownItem style={{fontSize:25}}><a style={{textDecoration:'none',color:'black'}} href={("/"+text+"/")}>{text}</a></DropdownItem>
                )};
                 
               </DropdownMenu>
           </Dropdown>
        );
    };
}

export default DivNav;