import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

// Define image paths for each project
const projectImages = {
  "PyDay Chile Conference Website": "/images/projects/pyday.png",
  "Hites - Mobile E-commerce Challenge": "/images/projects/hites.png",
  "Client Project: Valeria del Real": "/images/projects/valeria.png",
};

// CORRECCIÓN: La función ahora espera recibir 'labels' en lugar de 'dictionary'
export default function ProjectShowcase({ project, index, labels }) {
  const isOdd = index % 2 !== 0;
  // Fallback to a placeholder if the project name doesn't match
  const imageUrl = projectImages[project.name] || "/images/projects/placeholder.png";

  return (
    <article className="group mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-10 md:gap-4 lg:gap-12">
      {/* Text Content */}
      <div
        className={`flex flex-col text-center md:col-span-5 md:text-left ${
          isOdd ? "md:order-last" : ""
        }`}
      >
        <p className="mb-2 text-sm uppercase tracking-widest text-pink-400 font-['var(--font-cabin)']">
          {project.year}
        </p>
        <h3 className="mb-6 font-['var(--font-orbitron)'] text-2xl font-bold text-gray-100 sm:text-3xl">
          {project.name}
        </h3>

        <div className="space-y-6 text-gray-300 font-['var(--font-cabin)'] text-base leading-relaxed">
          <div>
            {/* CORRECCIÓN: Usa 'labels.challenge' */}
            <h4 className="mb-2 font-bold text-fuchsia-400">{labels.challenge}</h4>
            <p>{project.challenge}</p>
          </div>
          <div>
            {/* CORRECCIÓN: Usa 'labels.contribution' */}
            <h4 className="mb-2 font-bold text-fuchsia-400">{labels.contribution}</h4>
            <p>{project.contribution}</p>
          </div>
          <div>
            {/* CORRECCIÓN: Usa 'labels.result' */}
            <h4 className="mb-2 font-bold text-fuchsia-400">{labels.result}</h4>
            <p>{project.result}</p>
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-8 flex justify-center space-x-4 md:justify-start">
          <a
            href="#" // Replace with actual demo link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-4 py-2 text-pink-300 ring-1 ring-inset ring-pink-500/20 transition hover:bg-pink-500/20 hover:text-white"
          >
            {/* CORRECCIÓN: Usa 'labels.demo' */}
            {labels.demo}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#" // Replace with actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-500/10 px-4 py-2 text-gray-300 ring-1 ring-inset ring-gray-500/20 transition hover:bg-gray-500/20 hover:text-white"
          >
            {/* CORRECCIÓN: Usa 'labels.code' */}
            {labels.code}
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Image with Orbital Rings */}
      <div className="relative md:col-span-5">
        <div
          className={`
            absolute -inset-4 rounded-xl
            bg-gradient-to-br from-pink-500/20 via-transparent to-blue-500/20
            opacity-0 transition duration-500 group-hover:opacity-100
            md:-inset-8
          `}
        />
        <div className="relative rounded-lg bg-black/50 p-2 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-sm">
          <Image
            src={imageUrl}
            alt={project.name}
            width={1200}
            height={750}
            className="rounded-md"
          />
        </div>
      </div>
    </article>
  );
}