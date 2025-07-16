import Link from 'next/link';

export default function HeroSection({ dictionary, lang }) {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center text-center text-white p-4"
    >
      {/*  Float Animation container */}
      <div className="animate-float space-y-6">
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold">
          {dictionary.hero.name}
        </h1>

        {/* Title with Glitch effect*/}
        <p className="text-lg md:text-2xl font-orbitron uppercase tracking-wider glitch" data-text={dictionary.hero.headline}>
          {dictionary.hero.headline}
        </p>
        
        {/* Professional Mision */}
        <p className="text-base md:text-lg font-cabin max-w-2xl mx-auto text-gray-300 min-h-[6rem]">
          {dictionary.hero.mission}
        </p>
        
        {/* CTA */}
        <Link 
          href={`/${lang}#projects`} 
          className="inline-block mt-4 px-8 py-3 font-orbitron uppercase text-sm tracking-widest bg-transparent border-2 border-[#65e1ff] text-[#65e1ff] rounded-full transition-all duration-300 hover:bg-[#65e1ff] hover:text-black hover:shadow-[0_0_20px_#65e1ff] transform hover:scale-105"
        >
          {dictionary.nav.projects}
        </Link>
        
      </div>
    </section>
  );
}