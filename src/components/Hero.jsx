import heroImg from '../assets/hero-capybara.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full relative z-10">
        <div className="flex-1 text-center md:text-left">
          <p className="inline-block bg-primary/5 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
            Now Open in Manila
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Your Daily Dose of <br />
            <span className="text-secondary">Capy Happiness</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 animate-fade-in-up animate-delay-200">
            Experience the cozy vibes and delicious brews of KapeBara. A community cafe where every sip brings a smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animate-delay-300">
            <a
              href="#menu"
              onClick={(e) => { e.preventDefault(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-primary text-white px-8 py-3.5 rounded-full font-medium text-center hover:bg-primary-light transition-all active:scale-95 shadow-md hover:shadow-lg"
            >
              View Menu
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border-2 border-primary/30 text-primary px-8 py-3.5 rounded-full font-medium text-center hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center">
          <div className="absolute w-80 h-80 bg-accent/30 rounded-full blur-[100px] animate-pulse" />
          <div className="animate-float">
            <div className="relative bg-white p-4 rounded-3xl shadow-xl rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden">
                <img src={heroImg} alt="Capybara Barista" className="w-full h-auto object-contain" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-serif font-bold text-primary text-lg">Capy Barista</p>
                <p className="text-sm text-text-muted/70">Capybara of Happiness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
