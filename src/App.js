import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';

const App =() => {
  return (
    <>
        <Header />

        <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
        </main>
    </>
  )
}

export default App