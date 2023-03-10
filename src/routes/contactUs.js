import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ProjHero from '../components/ProjHero';
import Form from '../components/Form';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ProjHero heading="CONTACT." text="lets have a chat!!" />
      <Form />
      <Footer/>
    </div>
     )
}

export default ContactUs;