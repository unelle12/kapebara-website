const scrollTo = (id) => {
  const el = document.getElementById(id.replace('#', ''));
  el?.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <img src="/logo.png" alt="KapeBara Logo" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" />
              <span className="text-xl font-serif font-bold">KapeBara</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your daily dose of capy happiness. Join us for a cozy brew and good company.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/kapebara_PH/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@kapebara_ph" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/KapeBaraPH" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Menu', href: '#menu' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-serif font-bold mb-6">Visit Us</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-GB&FORM=FBKPL1&q=KAPEBARA%2C+1639+St+John%2C+Perpetual+Village%2C+Tanyag%2C+Taguig%2C+Philippines%2C+1631&cp=14.475252%7E121.048287&lvl=16&style=r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/60 hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>1639 St John, Perpetual Village, Tanyag, Taguig, Philippines 1631</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-serif font-bold mb-6">Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/60">
                <span>Mon - Thu</span>
                <span className="text-white/80">2pm - 12mn</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Fri - Sun</span>
                <span className="text-white/80">9am - 12mn</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} KapeBara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
