import React from 'react';

const Menu = () => {
  const menuImages = ['/menu3.jpg', '/menu2.jpg', '/menu1.jpg'];

  return (
    <section id="menu" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Menu</h2>
        <p className="text-text opacity-70">Handcrafted drinks and treats to brighten your day</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={img} alt={`Menu Page ${idx + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
