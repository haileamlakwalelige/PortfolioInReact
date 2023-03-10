/* eslint-disable jsx-a11y/anchor-has-content */
import "./footer.css";
import {
    FaFacebook,
     FaHome,
     FaInstagram,
     FaLinkedin,
     FaMailBulk,
     FaPhone, 
     FaTelegram
    } from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer"> 
        <div  className="footer-container">
              <div className="left">
                  <div className="location">
                    <FaHome size={50} 
                          style={{
                              color: "purple",
                    marginRight:"2rem"}}  
                    className="what"/>
                     <div>
                        <p>123 Housing Society</p>
                        <p>Ethiopia</p>
                     </div>
                  </div>
                  <div className="phone">
                      <h4><FaPhone size={50} 
                          style={{
                              color: "purple",
                       marginRight: "2rem" }} 
                       className="what"
                      />251-939100302</h4>
                  </div>
                  <div className="email">
                      <h4 style={{ display: "inline" }}>
                      <FaMailBulk size={50} 
                              style={{
                                  color: "purple",
                       marginRight: "2rem" }} 
                       className="what"
                      />haileamlakwaleligne3910@gmail.com</h4>
                  </div>
              </div>
              <div  className="right">
                 <p>About My self</p>
                  <p className="second-child">This is me <span> Haileamlak Waleligne.</span> <br/>
                 Web Developer and Web Designer.<br/><br/>
                  I enjoy to work as a full-stack Developer.<br/>
                 But I am really good at Front-end Development.</p>
                 <div className="social">
                       <FaFacebook size={35}
                          style={{
                              color: "purple",
                              marginRight: "1rem"
                          }} 
                          className="what"
                          />
                      <a  href="https://www.linkedin.com/in/haileamlak-waleligne-95b716231/"> <FaLinkedin size={35}
                          style={{
                              color: "purple",
                              marginRight: "1rem"
                          }}
                          className="what" 
                            
                          /></a>
                       <FaInstagram size={35}
                          style={{
                              color: "purple",
                              marginRight: "1rem"
                          }}
                          className="what" />
                       
                            <a   href="https://t.me/King_Haila"><FaTelegram size={35}
                          style={{
                              color: "purple",
                              marginRight: "1rem"
                          }}
                          className="what"
                         /></a>
                         
                 </div>
              </div>
    </div>
    </div>
  )
}

export default Footer;