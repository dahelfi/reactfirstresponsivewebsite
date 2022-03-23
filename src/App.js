import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer'


function App() {
  return (
      <div className='App'>
        <Router>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <ContactMe/>
        <Footer/>
        <Routes>
          <Route path='/' exact/>
        </Routes>
        </Router>
       
      </div>
  );
}

export default App;
