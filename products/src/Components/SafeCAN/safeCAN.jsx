import React , {Component} from 'react';
import NavBar from './navbar';
import Stript from './stript';
import Desc from './Desc';

class SafeCAN extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Stript style={{marginTop:150}}/>
                <Desc file={this.props.file1}/>
            </div>
        );
    }
}

export default SafeCAN;