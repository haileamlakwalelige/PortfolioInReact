import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ProjHero from '../components/ProjHero';

const Project = () => {
  return (
    <div>
    <Navbar />
    <ProjHero heading="PROJECTS." text="some of my
    most recent works" />
    <Footer />
    </div>
  )
}

export default Project;