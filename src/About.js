import React, { Component } from "react";
import aboutmepic from "./images/aboutmepic.png"
import laptop from './images/laptop.png'

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-container">

           <div className="about-img-container1">
            <img className="aboutmepic" src={aboutmepic} alt="Laura Elfving" />
          </div>

          <div className="about-text-container">
            <h1 className="about-h1">About me</h1>
            <p></p>
            <h2 className="about-h2">Who I am</h2>
            <p>Hi, I'm Laura Elfving, a passionate educator and aspiring web designer
            with a flair for creativity. I earned my degree from the University of Oulu
            in 2017 and spent four fulfilling years as an elementary school teacher. 
            However, my journey took an exciting turn during my maternity leave when I 
            decided to delve into the captivating world of web design. This transition 
            allowed me to blend my creativity with newfound skills in tech, sparking a 
            fascination with graphic design.
            </p>
          </div>

          

        </div>

        <div className="about-container">
          <div className="about-text-container">
            <h2 className="about-h2">What I bring to the table</h2>
            <p> In addition to my proficiency in HTML, CSS, JavaScript, and Python, 
            I've cultivated a deep passion for creating engaging and visually pleasing 
            content. I've honed my skills in using photo and video editing software to 
            craft captivating visuals and videos. My journey in web design continues, 
            and now I'm eager to expand my horizons into the realm of digital marketing.
            My goal is to harness my technical skills and combine them with my eye for 
            design to build user-friendly websites that leave a lasting impact. I'm excited
            to explore the comprehensive Adobe suite, as well as dive into the world of 
            digital marketing, SEO, and content creation. As I embark on this journey, 
            I look forward to connecting with fellow professionals and collaborating on 
            innovative projects in this ever-evolving industry.
            </p>
          </div>

          <div className="about-img-container2">
          <img className="laptop" src={laptop} alt="a laptop on a table" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;


