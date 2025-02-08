import React from 'react';
import './Heroimage.css';
import introimg from "../images/introimg.jpg"
import { Link } from 'react-router-dom';

const Heroimage = () => {
  return (
   <>
      <div className="hero">
        <div className="mask">
            <img className='intro-img' src={introimg} alt="introimg" />
        </div>
        <div className="content">
            <p>HI,I'M A DEVELOPER </p>
            <h1>Frontend Developer.</h1>
            <div>
               <Link to="/project" className='btn'>PROJECTS</Link>
               <Link to="/contact" className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
        </div>  
   </>
  )
}

export default Heroimage
