import Link from 'next/link';

export default function HeroSection({ dictionary, lang }) {
  return (
    <section 
      id="home" 
      // Main container to center content. It's also a positioning context.
      className="min-h-screen flex items-center justify-center p-4 relative"
    >
      {/* Gradient overlay for contrast. Sits on top of the background image. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.8)_0%,rgba(10,10,10,0)_75%)]"></div>

      {/* Content container. 'relative' and 'z-10' place it above the overlay. */}
      <div className="relative z-10 text-center text-white">
        
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold text-shadow-glow">
          {dictionary.hero.name}
        </h1>

        {/* Professional headline with glitch effect. */}
        <div className="mt-4">
          <p 
            className="text-lg md:text-2xl font-orbitron uppercase tracking-wider glitch" 
            data-text={dictionary.hero.headline}
          >
            {dictionary.hero.headline}
          </p>
        </div>
        
        {/* Professional Mission */}
        <p className="text-base md:text-lg font-cabin max-w-2xl md:px-8 mx-auto text-gray-200 mt-6 min-h-[4rem]">
          {dictionary.hero.mission}
        </p>
        
        {/* Call to Action (CTA) */}
        <div className="mt-8">
          <Link 
            href={`/${lang}#projects`} 
            className="inline-block px-8 py-3 font-orbitron uppercase text-sm tracking-widest bg-transparent border-2 border-[#65e1ff] text-[#65e1ff] rounded-full transition-all duration-300 hover:bg-[#65e1ff] hover:text-black hover:shadow-[0_0_25px_#65e1ff] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#65e1ff]/50"
          >
            {dictionary.nav.projects}
          </Link>
        </div>
        
      </div>
    </section>
  );
}