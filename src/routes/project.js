import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Price from '../components/price';
import ProjHero from '../components/ProjHero';
import Work from '../components/work';

const Project = () => {
  return (
    <div>
    <Navbar />
    <ProjHero heading="PROJECTS." text="some of my
    most recent works" />
    <Work />
    <Price />
    <Footer />
    </div>
  )
}

export default Project;