import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ProjHero from '../components/ProjHero';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ProjHero heading="CONTACT." text="lets have a chat!!" />
      <Footer/>
    </div>
     )
}

export default ContactUs;