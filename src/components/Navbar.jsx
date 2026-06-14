import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id.replace('#', ''));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl shadow-sm'
          : 'bg-background/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src="/logo.png" alt="KapeBara Logo" className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all" />
          <span className="text-xl font-serif font-bold text-primary">KapeBara</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); scrollTo(href); }}
              className="px-4 py-2 text-text/70 hover:text-primary rounded-full text-sm font-medium hover:bg-primary/5 transition-all"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => scrollTo('#menu')}
            className="ml-4 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-light transition-all active:scale-95"
          >
            Order Now
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" className={`transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <line x1="3" y1="12" x2="21" y2="12" className={`transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <line x1="3" y1="18" x2="21" y2="18" className={`transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <line x1="6" y1="6" x2="18" y2="18" className={`transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} />
            <line x1="18" y1="6" x2="6" y2="18" className={`transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/5 animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                className="block px-4 py-3 text-text/70 hover:text-primary rounded-xl hover:bg-primary/5 transition-all text-sm font-medium"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => scrollTo('#menu')}
              className="w-full mt-2 bg-primary text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-primary-light transition-all"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
