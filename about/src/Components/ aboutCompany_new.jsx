import React, { Component } from 'react';
import Image from './images_Picks/Alon2.png';



class AboutCamp extends Component{
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
    render()
    {
       
        return(
           <React.Fragment>
           <div className="ImageTeam_" width={this.state.width} style={{height: this.state.height*0.8}}>
               <div width={this.state.width} style={{backgroundColor:'Navy',height:'100%',opacity:0.8}}>
                 <h1 style={{position:'absolute',marginTop:"20%",marginLeft:"25%",color:'white',fontSize:this.state.width/13}}><strong>Sec4Cyber</strong></h1>
               </div>
           </div>
           <div class="team" >

         <h1  className="meet_lead_team" style={{fontSize:this.state.width/15}}>Meet the Lead Team</h1>
          <p className="meet_l_t_p" style={{fontSize:this.state.width/65}} ><strong>SEC4CYBER is led by a talented, experienced research & development team of cybersecurity experts.</strong></p>
          <div class="row">

            <div class="pic_jonatan" style={{width:this.state.width/4.5}}>
              <img className="pick_jonatan_I"  src="/static/Jonatan.jpg" alt="" style={{width:this.state.width/5,height:this.state.width/5}}/>
              <div class="div_des" style={{fontSize:this.state.width/65,width:this.state.width/4}}>
              <p className="pick_jonatan_t" > Jonatan Haish
                  <p className={this.state.formatTitle}>Co-founder & VP R&D</p></p>
                  Software Engineer, 
                  served as a Cyber Analyst in Israeli Navy, 
                  experienced in cyber security, specialized 
                  in Linux Programing, Fullstack dev’,
                  research & development Served in roles: 
                  cyber security Researcher, Fullstack Developer,
                  Chief Architect.
                  
              </div>

            </div>

             <div class="pic_alon" style={{width:this.state.width/4}}>
               <img src={Image} className="pic_alon_I" alt="" style={{width:this.state.width/5,height:this.state.width/5}}/>
               <div class="div_des_alon" style={{fontSize:this.state.width/65,width:this.state.width/4}}>
                <p className="pic_alon_t"> Alon Shoam
                  <p className={this.state.formatTitle} style={{fontSize:this.state.width/65}}>Co-founder & CEO</p></p>


                  An entrepreneur, Software engineer,
                  cyber security expert, 18 years of
                  experience in cyber security, served 
                  in Prime Minister's Office as Chief information
                  security officer-SOC Lead, additionally served 
                  in roles: Cyber analyst, Researcher, Architect,
                  R&D VP, CTO, CEO.

               </div>
             </div>

             <div class="pic_daniel" style={{width:this.state.width/4}}>
               <img src="/static/Daniel.jpg" className="pic_daniel_I" alt="" style={{width:this.state.width/5,height:this.state.width/5}}/>
               <div class="div_des" style={{fontSize:this.state.width/65,width:this.state.width/4}}>
                <p className="pic_daniel_t"> Daniel Roge
                  <p className={this.state.formatTitle} style={{fontSize:this.state.width/65}}>Co-founder & CTO</p></p>


                  An entrepreneur, cyber security expert,
                  experienced in research & development, 
                  specialized in Linux programing, Data Science, 
                  AI-ML, served in roles: cyber security Researcher, 
                  Architect, Algorithm Developer, Ethical Hacker.
               </div>
             </div>
          </div>

       </div>
            </React.Fragment>
        );
    }
}


export default AboutCamp;