import "./footer.css";
import {FaHome,FaMailBulk,FaPhone} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        
        <div  className="footer-container">
              <div className="left">
                  <div className="location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                     <div>
                        <p>123 HOusing Society</p>
                        <p>Ethiopia</p>
                     </div>
                  </div>
                  <div className="phone">
                      <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}
                      />251-9910101010</h4>
                      
                  </div>
                  <div className="email">
                      <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}
                      />251-9910101010</h4>

                  </div>
              </div>
              <div  className="right">

              </div>
        
    </div>
    </div>
  )
}

export default Footer;