import { getDictionary } from "@/lib/get-dictionary";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// import ScrollToTopButton from "@/components/ScrollToTopButton";
// import CursorEffect from "@/components/CursorEffect";

export default async function Home({ params }) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  const {
    title,
    challengeLabel,
    contributionLabel,
    resultLabel,
    demoLabel,
    codeLabel,
    ...projectsData
  } = dictionary.projects;

  // Get the project showcase dictionary
  const projects = Object.values(projectsData);

  return (
    <>
      <HeroSection dictionary={dictionary} lang={lang} />
      <AboutSection dictionary={dictionary} />
      <section
        id="projects"
        className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="font-['var(--font-orbitron)'] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.name}
              project={project}
              index={index}
              labels={{
                challenge: challengeLabel,
                contribution: contributionLabel,
                result: resultLabel,
                demo: demoLabel,
                code: codeLabel,
              }}
            />
          ))}
        </div>
      </section>
      <ContactSection dictionary={dictionary} />
      <Footer dictionary={dictionary} />
      {/* <ScrollToTopButton />
      <CursorEffect /> */}
    </>
  );
}
