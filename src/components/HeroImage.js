import "./HeroImage.css";
import React from 'react'
import bg from '../images/bg.jpg';
import { Link } from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={bg} alt="Background Images"/>  
        </div>
        <div className="content">
        <p>I'M A FREELANCER</p>
        <h1>React JS Developer</h1>
            <div >
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contactUs" className="btn btn-light">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage;