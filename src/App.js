import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';
import Contacts from './Components/Contacts/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
