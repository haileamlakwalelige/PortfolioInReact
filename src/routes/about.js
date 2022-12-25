import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ProjHero from '../components/ProjHero';

const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjHero  heading="ABOUT." text="IM  friendly 
      Front-End Developer."/>
      <Footer />
    </div>
  )
}

export default About;