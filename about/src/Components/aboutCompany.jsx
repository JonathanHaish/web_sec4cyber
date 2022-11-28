import React , {Component} from 'react';


class About extends Component {
    state={
        scrollTop:0,
        height:window.innerHeight,
        width:window.innerWidth
    };
    changeSize(state){
      this.setState({width:window.innerWidth,height:window.innerHeight})
    }

    componentDidMount(){
      window.addEventListener('resize',() => this.changeSize(this.state));
    }
    render(){

        return(
           <React.Fragment>
           <div className="ImageTeam_" width={this.state.width} style={{height: this.state.height/1.2}}>
               <div width={this.state.width} style={{backgroundColor:'Navy',height:'100%',opacity:0.8}}>
                 <h1 style={{position:'absolute',marginTop:"20%",marginLeft:"25%",color:'white',fontSize:this.state.width/11}}><strong>Solutions</strong></h1>
               </div>
           </div>
           <div style={{width:'70%',marginLeft:'17%',fontSize:30}}>
           <h2 ><strong>Sec4Cyber security solutions:</strong></h2>
           <div style={{marginTop:30,fontSize:this.state.width/62}}> Sec4Cyber provides embedded cybersecurity solutions for IoT connected devices and
servers, from autonomous and connected transportation, aircraft, defense, emergency and
low enforcement to industry and energy IoT connected systems.
Sec4Cyber software is designed and implemented to safeguard resource-constrained
systems.</div>

        <div style={{marginTop:30,fontSize:this.state.width/62}}>Sec4Cyber security solutions automatically integrate into the system OS and software
(<strong>without</strong> changing system hardware and software builds) and continuously check the
system’s runtime integrity. When a deviation from the system’s factory settings is detected,
the system <strong>blocks it</strong>  automatically, <strong>preventing</strong>: malicious code injection, zero-day,<strong> ROP</strong>,
<strong>JOP</strong> cyberattacks with <strong>zero </strong>false positives and <strong>NO</strong> performance impact, we actually
improved system <strong>performance</strong>, how is this possible? We will explain this further.
In addition, it protects the services and processes of the system from harm and disruption of
their operation.</div>
         <div style={{marginTop:30,fontSize:this.state.width/62}}>Product manufacturers and Enterprises Edge in the Governments and defense sector can
rely on Sec4Cyber automated runtime integrity software.
Using Sec4Cber’s software the devices are self-protected against cyberattacks without
requiring any development change or security updates.
Vendors leverage Sec4Cyber software to increase their brand competitiveness and protect
their customers against cyberattacks.</div>

          
           </div>
           </React.Fragment>
        );
    };
}

export default About;