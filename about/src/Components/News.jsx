import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './new';


class News extends Component{
    state = {
        listN:["1","2","3"],
        listN2:["4","5","6"]
    };
    
    getImage(n){
        console.log(n);
        return "";
    };

    getDesc(n){
        console.log(n);
        return "";
    };

    getDate(n){
        console.log(n);
        return "";
    };

    render(){
        
        return(
            <div className="News">
               <div className="row">
                 {this.state.listN.map((n) => 
                    <New image={() => this.getImage(n)} desc={() => this.getDesc(n)} date={() => this.getdate(n)}/>
                 )}
               </div>
               <div className="row">
                 {this.state.listN2.map((n) => 
                   <New image={() => this.getImage(n)} desc={() => this.getDesc(n)} date={() => this.getdate(n)}/>
                 )}
               </div>
            </div>
        );
    };
}

export default News;