import React from 'react';
import './index.css';
import Home from './routes/home'
import About from './routes/about';
import Project from './routes/project';
import ContactUs from './routes/contactUs';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/project" element={<Project />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contactUs" element={<ContactUs />}/>
     </Routes>
    </>
  );
}


export default App;
