import React, { Component } from "react";
import Lauralogo from './images/Lauralogo.png'
 
class Home extends Component {
  render() {
    return (
      <div className='home-container'>

        <div className='home-text-container'>
          <h1 className='home-h1'>Hi,</h1>
          <h1 className='home-h1'>
          I am <span style={{ color: "#FF8779" }}>Laura</span>
          </h1>
          <h2>I'm a teacher, and an aspiring web designer.</h2>
        </div>
         
        <div className='home-img-container'>
          <img className='lauralogo' src={Lauralogo} alt="Laura Elfving" />
        </div>
       
      </div>
    );
  }
}
 
export default Home;