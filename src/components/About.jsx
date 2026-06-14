const FEATURES = [
  {
    title: 'Organic Beans',
    desc: 'Sustainably sourced premium coffee beans from local farmers.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8c-4 0-8 2-8 8s4 8 8 8 8-2 8-8-4-8-8-8z" />
        <path d="M24 16c-3 0-6 1-6 5s3 5 6 5 6-1 6-5-3-5-6-5z" opacity="0.5" />
        <path d="M16 38c0-4 3-8 8-8s8 4 8 8" />
        <path d="M10 42c0-6 4-12 14-12s14 6 14 12" opacity="0.5" />
        <path d="M24 24v8" />
        <path d="M18 30l6 2 6-2" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Community First',
    desc: 'A cozy hub for friends, students, and coffee lovers to connect.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="16" r="4" />
        <circle cx="34" cy="14" r="3" />
        <path d="M10 34c0-4 3-8 8-8s8 4 8 8" />
        <path d="M26 32c0-3.5 2.5-7 8-7s8 3.5 8 7" />
        <circle cx="26" cy="32" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Cozy Vibe',
    desc: 'Warm lighting, soft music, and the happiest vibes in town.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18c0-4 3-8 8-8s8 4 8 8" />
        <path d="M12 28c0-6 5-10 12-10s12 4 12 10" />
        <path d="M8 38c0-8 7-14 16-14s16 6 16 14" />
        <circle cx="24" cy="18" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="19" cy="26" r="1.5" fill="currentColor" opacity="0.2" />
        <circle cx="29" cy="26" r="1.5" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">The KapeBara Story</h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Inspired by the gentle nature of capybaras, KapeBara is more than just a coffee shop.
            We believe in creating a sanctuary for the community—a place to slow down, relax,
            and enjoy a perfectly crafted cup of coffee in a cozy atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className="group p-8 bg-surface rounded-2xl border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-primary text-xl mb-3">{feature.title}</h3>
              <p className="text-text-muted/80 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
