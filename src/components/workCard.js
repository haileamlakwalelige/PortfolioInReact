/* eslint-disable jsx-a11y/img-redundant-alt */
import "./work.css";
import React from 'react'
import what from "../images/what.jpg";
import { NavLink } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className="work-container"> 
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
        <div className="project-card">
            <img src={what} alt="image" />
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
                <p>This is take</p>
                <div className="pro-btn">
                <NavLink to="url.com" className="btns">
                        View
                    </NavLink>
                    <NavLink to="url.com" className="btns">
                        Source
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WorkCard;