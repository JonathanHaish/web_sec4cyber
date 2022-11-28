import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './new';


class News extends Component{
    state = {
        listN:["1","2","3"],
        listN2:["4","5","6"],
        height:window.innerHeight,
        width:window.innerWidth
    };
    
    changeSize(state){
      this.setState({width:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
    
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
        let w = (this.state.width/9);
        let h = (this.state.height/4);
        
        return(
            <div style={{marginTop:h,marginLeft:w}}>
               <div className="row">
                 {this.state.listN.map((n) => 
                    <New image={() => this.getImage(n)} desc={() => this.getDesc(n)} date={() => this.getdate(n)} width={this.state.width} height={this.state.height}/>
                 )}
               </div>
               <div className="row" style={{marginTop:"10%"}}>
                 {this.state.listN2.map((n) => 
                   <New image={() => this.getImage(n)} desc={() => this.getDesc(n)} date={() => this.getdate(n)} width={this.state.width} height={this.state.height}/>
                 )}
               </div>
               <div className="row" style={{marginTop:"10%"}}>
                 {this.state.listN2.map((n) => 
                   <New image={() => this.getImage(n)} desc={() => this.getDesc(n)} date={() => this.getdate(n)} width={this.state.width} height={this.state.height}/>
                 )}
               </div>
            </div>
        );
    };
}

export default News;