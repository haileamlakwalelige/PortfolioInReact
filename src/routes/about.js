import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ProjHero from '../components/ProjHero';




const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjHero  heading="ABOUT." text="Greetings! I am Haileamlak Waleligne
      , an experienced MERN stack developer specialized in front-end development with React.js. 
      As a dedicated freelancer and hard worker,
       I have the skills and expertise to transform any website idea into one with amazing user interface features.
        Put your trust in me and I promise that you will not be disappointed."/>
      <Footer />
    </div>
  )
}

export default About;