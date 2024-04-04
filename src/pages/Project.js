import React from 'react'
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';
import Heroimg2 from '../Components/Heroimg2';
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECT." text="Some of my most recent works" />
      <Work />
    
      <Footer />
    </div>
  )
}

export default Project
