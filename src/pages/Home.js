import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimage from '../Components/Heroimage';
import Footer from '../Components/Footer';
import Work from "../Components/Work"
import Education from '../Components/Education';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimage />
      <Work />
      <Education />
      <Footer />
    </div>
  )
}

export default Home;
