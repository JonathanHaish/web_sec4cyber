import React , {Component} from 'react';
import Stript from './stript';
import Desc from './DesOfAutoMotive'; 
import NavBar from './navbar';
import DescFlow from './Desc';
import Quick from './quickLinkCon';
import CardsIcon from './CardsIcons';
class HealthcareMed extends Component{
    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <Stript scrollTop={0}/>
                <Desc/>
                <DescFlow/>
                <CardsIcon/>
                <Quick/>
            </React.Fragment>
        );
    }
}

export default HealthcareMed;