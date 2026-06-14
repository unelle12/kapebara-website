const menuItems = [
  { src: '/menu3.jpg', alt: 'Menu Board 1', label: 'Coffee Selection' },
  { src: '/menu2.jpg', alt: 'Menu Board 2', label: 'Specialty Drinks' },
  { src: '/menu1.jpg', alt: 'Menu Board 3', label: 'Pastries & Snacks' },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Menu</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">What We Brew</h2>
          <p className="text-text-muted opacity-80">Handcrafted drinks and treats to brighten your day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-surface shadow-md hover:shadow-xl transition-all duration-500 scroll-reveal"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
