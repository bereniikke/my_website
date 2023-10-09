import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header">

            <div className="logo">
              <h1>Laura Elfving</h1>
            </div>

            <ul className="navigation">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

          </div>
         
          <div className="header-divider"></div> 
          
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>

          <Footer /> {Footer}

        </div>
      </Router>
    );
  }
}

export default Main;
