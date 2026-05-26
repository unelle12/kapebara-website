import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
