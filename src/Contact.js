import React, { Component } from "react";
import phone from './images/phone.png'
 
class Contact extends Component {
  render() {
    return (
      <div className='contact-container'>
        <div className='contact-text-container'>
          <h1 className='contact-h1'>Contact me</h1>
          <p>Have an interesting project? I would love to hear about it!</p>
          <br></br>
          <p>Email me at <span style={{ color: "#FF8779" }}>laura.elfving@outlook.com</span></p>
          <p>or connect with me through 
          <a className='linkedin' href="https://www.linkedin.com/in/laura-elfving-9ab1a6258/" title="linkedin profile"> my LinkedIn profile</a>
          </p>
          <br></br>
          <p>You can also follow me on instagram <span style={{ color: "#FF8779" }}>@kyllinlaura</span></p>

        </div>

        <div className='contact-img-container'>
          <img className="phone" src={phone} alt="a pink telephone" />
        </div>
      </div>
    );
  }
}
 
export default Contact;