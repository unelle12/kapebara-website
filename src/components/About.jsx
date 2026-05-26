import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary bg-opacity-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-8">About KapeBara</h2>
        <p className="text-lg text-text leading-relaxed mb-12">
          Inspired by the gentle nature of capybaras, KapeBara is more than just a coffee shop.
          We believe in creating a sanctuary for the community—a place to slow down, relax,
          and enjoy a perfectly crafted cup of coffee in a cozy atmosphere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">🌿</div>
            <h3 className="font-serif font-bold text-primary mb-2">Organic Beans</h3>
            <p className="text-sm opacity-70">Sustainably sourced premium coffee beans from local farmers.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="font-serif font-bold text-primary mb-2">Community First</h3>
            <p className="text-sm opacity-70">A cozy hub for friends, students, and coffee lovers to connect.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="font-serif font-bold text-primary mb-2">Cozy Vibe</h3>
            <p className="text-sm opacity-70">Warm lighting, soft music, and the happiest vibes in town.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
