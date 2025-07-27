import Image from "next/image";
import Headline from "./ui/Headline";

// Simple component for tech stack items.
const TechItem = ({ name }) => (
  <li 
    className="
      bg-black/30 backdrop-blur-sm
      border border-[#aedc30]
      rounded-md 
      px-4 py-2 
      text-sm font-cabin text-[#aedc30]
      shadow-[0_0_6px_rgba(0,255,255,0.4)]
      transition-all duration-300
      hover:bg-[#aedc30] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:scale-105
      cursor-pointer
    "
  >
    {name}
  </li>
);

// A styled span for creating glowing text highlights.
const NeonHighlight = ({ children }) => (
  <span
    className="text-fuchsia-900 font-semibold"
    style={{ textShadow: "0 0 11px rgba(182, 51, 234, 0.7)" }}
  >
    {children}
  </span>
);

// A custom separator that looks like a glowing line.
const NeonSeparator = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#65e1ff]/50 to-transparent my-4"></div>
);

export default function AboutSection({ dictionary }) {
  return (
    <section
      id="about"
      className="relative bg-black py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Headline text={dictionary.about.title} />
        {/* The main content container is placed on top of the background effect. */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Main grid layout. Stacks on mobile, two columns on desktop. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="flex justify-center items-center">
              {/* Animated container for the hologram effect */}
              <div className="relative animate-float-slow">
                <Image
                  src="/images/aboutMe.gif"
                  alt={dictionary.about.image_alt}
                  width={330}
                  height={700}
                  className="h-full md:pb-8 scale-x-[-1]"
                />
              </div>
            </div>

            {/* Text Content Column */}
            <div className="text-white flex flex-col">
              <div>
                <p className="font-cabin text-gray-300 leading-relaxed">
                  Being recognized as the #3 React Developer in Chile is more
                  than a ranking; it&apos;s a driver for my mission to build{" "}
                  <NeonHighlight>technology that feels human</NeonHighlight>. I
                  strive to create interfaces where performance and empathy
                  coexist, ensuring every interaction is both powerful and
                  intuitive.
                </p>
                <p className="font-cabin text-gray-300 leading-relaxed mt-4">
                  My background in health sciences taught me to{" "}
                  <NeonHighlight>listen with empathy</NeonHighlight>. Today, I
                  apply that same principle to code, focusing on the
                  &apos;details that matter.&apos; This translates into
                  accessible, user-centric experiences where every pixel has a
                  purpose.
                </p>
              </div>

              <NeonSeparator />

              {/* Section for Tech Stack */}
              <div>
                <h3
                  className="font-orbitron text-2xl font-semibold text-[#65e1ff] mb-4"
                  style={{ textShadow: "0 0 10px rgba(101, 225, 255, 0.5)" }}
                >
                  {dictionary.about.tech_stack_title}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <TechItem name="JavaScript" />
                  <TechItem name="React" />
                  <TechItem name="Next.js" />
                  <TechItem name="Accesibility (A11y)" />
                  <TechItem name="Tailwind CSS" />
                </ul>
              </div>

              <NeonSeparator />

              {/* Section for Ideal Team */}
              <div>
                <h3
                  className="font-orbitron text-2xl font-semibold text-[#65e1ff] mb-4"
                  style={{ textShadow: "0 0 10px rgba(101, 225, 255, 0.5)" }}
                >
                  {dictionary.about.ideal_team_title}
                </h3>
                <p className="font-cabin text-gray-300 leading-relaxed">
                  {dictionary.about.ideal_team_paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
