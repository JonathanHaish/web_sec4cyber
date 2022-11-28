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
        return {fontSize:this.props.width,backgroundColor:'white',color:'black',borderColor:'black'};
      };
      return {fontSize:this.props.width,backgroundColor:'white',color:'black',borderColor:'white'};
    }
    render(){
        return(
            
           <Dropdown className="dropDwon"  style={{marginLeft:this.props.width*2.2}} onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
               <DropdownToggle  style={this.formatDiv()}>
                  {this.props.name}
               </DropdownToggle >
               <DropdownMenu>
                  
                {this.props.list.map((text) => 
                  
                  <a style={{textDecoration:'none',color:'black'}} href={("/"+text+"/")}><DropdownItem style={{fontSize:this.props.width/1.2}}>{text}</DropdownItem></a>
                )};
                 
               </DropdownMenu>
           </Dropdown>
        );
    };
}

export default DivNav;