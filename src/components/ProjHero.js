import "./HeroImage.css";
import React, { Component } from 'react'
import './ProjHero.css'
import R from '../images/R.jpg';

//import { Link } from "react-router-dom";
class ProjHero extends Component{
  render(){
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={R} alt="Background Images" />
      </div>
      <div className="content">
     <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
        
      </div>
     
    </div>
  );
  }
}

export default ProjHero;

