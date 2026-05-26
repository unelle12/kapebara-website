import React from 'react';
import heroImg from '../assets/hero-capybara.png';

const Hero = () => {
  return (
    <section id="home" className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight mb-6">
          Your Daily Dose of <br />
          <span className="text-secondary">Capy Happiness</span>
        </h1>
        <p className="text-lg text-text opacity-80 mb-8 max-w-lg mx-auto md:mx-0">
          Experience the cozy vibes and delicious brews of KapeBara. A community cafe where every sip brings a smile.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#menu" className="bg-primary text-white px-8 py-3 rounded-full font-medium text-center hover:bg-opacity-90 transition-all">
            View Menu
          </a>
          <a href="#about" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium text-center hover:bg-primary hover:text-white transition-all">
            Our Story
          </a>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="absolute -inset-4 bg-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="animate-float">
          <div className="relative bg-white p-4 rounded-3xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full rounded-2xl overflow-hidden">
              <img src={heroImg} alt="Capybara Barista" className="w-full h-auto object-contain" />
            </div>
            <div className="mt-4 text-center">
              <p className="font-serif font-bold text-primary">Capy Barista</p>
              <p className="text-sm opacity-60">Capybara of Happiness</p>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
