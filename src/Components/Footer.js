import React from 'react'
import "./Footer.css";
import { FaHome, FaInstagram,FaFacebook, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
   <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                <div>
                    <p>House no 273/A Street no 20 Area Javaid Colony, Rashid Pura, </p>
                    <p>Lahore</p>
                </div>
            </div>
            <div className="phone">
                <h4>

                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />
                03334490739
                </h4>
            </div>
            <div className="email">
                
                <h4>
 <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />
                rajaazan918@gmail.com
                </h4>
                
            </div>
        </div>
        <div className="right">
            <h4>About the Company</h4>
            <p>I am A Fresher. I Love to discuss on Projects</p>
            <div className="social">
          <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}} />
            <FaTwitter size={30} style={{color:"white",marginRight:"1rem"}} />
            <FaInstagram size={30} style={{color:"white",marginRight:"1rem"}} />
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Footer
