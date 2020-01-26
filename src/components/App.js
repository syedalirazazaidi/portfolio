import React, { Component } from 'react';
import Project from './Project';
import SocialProfiles from './SocialProfile';
import profile from '../assets/profile.png'
import Title from './Title';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBio: false
    };
  }
  readMore=()=> {
    this.setState({ displayBio:!this.state.displayBio })
  }
  render() {
    return (
      <div>
        <img src ={profile} alt ='profile' className ="profile"/>
        <h1>Hi hello</h1>
        <p>i m raza i did mcs from university if karachi</p>
        
        <Title/> 
        <div>
          {
            this.state.displayBio ? (
              <div>
                <h1>ali raza as a mern full developre</h1>
                <button onClick={this.readMore}>Read less</button>
              </div>
            ) : (
                <div><button onClick={this.readMore}>Read More</button></div>
              )
          }
        </div>
        <hr/>
        <Project/>
        <hr/>
       
        <SocialProfiles/>
      </div>

    );
  }
}
////Higher Order
// const Appwithheader=()=>{
//   return (
//     <Header Component ={App}/>
//   )
// }

export default App;