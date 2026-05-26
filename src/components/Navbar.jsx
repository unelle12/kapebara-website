import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="KapeBara Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-2xl font-serif font-bold text-primary">KapeBara</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-text">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
