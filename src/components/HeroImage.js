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
        <h1 className="h11">I'M A <spam className="spam">React JS Developer</spam></h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contactUs" className="btn btn-light">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage;