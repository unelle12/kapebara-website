import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/logo.png" alt="KapeBara Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-2xl font-serif font-bold">KapeBara</span>
          </div>
          <p className="opacity-80 mb-6">
            Your daily dose of capy happiness. Join us for a cozy brew and good company.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.instagram.com/kapebara_PH/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@kapebara_ph" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">TikTok</a>
            <a href="https://www.facebook.com/KapeBaraPH" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Facebook</a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold mb-6">Visit Us</h3>
          <div className="space-y-4 opacity-80">
            <p>
              <a href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-GB&FORM=FBKPL1&q=KAPEBARA%2C+1639+St+John%2C+Perpetual+Village%2C+Tanyag%2C+Taguig%2C+Philippines%2C+1631&cp=14.475252%7E121.048287&lvl=16&style=r" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                📍 Manila, Philippines
              </a>
            </p>
            <div className="space-y-2">
              <p className="font-bold opacity-100">Operating Hours:</p>
              <p>Mon-Thu: 2pm - 12mn</p>
              <p>Fri-Sun: 9am - 12mn</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 opacity-80">
            <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
            <li><a href="#menu" className="hover:text-secondary transition-colors">Menu</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white border-opacity-10 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} KapeBara. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
