/* eslint-disable jsx-a11y/img-redundant-alt */
import "./work.css";
import React from 'react'
import note from "../images/note.jpg";
import quote from "../images/quote.jpg";
import food from '../images/food.jpg';
// import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container"> 
    <h1 className="project-heading">Projects</h1>
    <div className="projects">
    <div className="project-container">
        <div className="project-card">
            <img src={food} alt="image" />
            <h2 className="project-title">Recipe App</h2>
            <div className="pro-details">
                <p>This project use API to fetch data</p>
                <div className="pro-btn">
                <a href="https://lovely-starburst-ad465c.netlify.app/" className="btns">
                        View
                    </a>
                    <a href="https://github.com/haileamlakwalelige/Recipe-App-With-API-And-With-Responsive-in-React-js" className="btns">
                        Source
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="project-container">
        <div className="project-card">
            <img src={quote} alt="image" />
            <h2 className="project-title">Random Quote Generator</h2>
            <div className="pro-details">
                <p>This app use API and Generate Best Quotes.</p>
                <div className="pro-btn">
                <a href="https://64073b5aa95bb10cd87b7fed--lovely-starburst-ad465c.netlify.app/" className="btns">
                        View
                    </a>
                    <a href="https://github.com/haileamlakwalelige/Random-Quote-Generator-in-React-js" className="btns">
                        Source
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="project-container">
        <div className="project-card">
            <img src={note} alt="image" />
            <h2 className="project-title">Note App</h2>
            <div className="pro-details">
                <p>This App is a Note app</p>
                <div className="pro-btn">
                <a href="https://clever-piroshki-2a9a3a.netlify.app/" className="btns">
                        View
                    </a>
                    <a href="https://github.com/haileamlakwalelige/React-Js-Note-App" className="btns">
                        Source
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Work;