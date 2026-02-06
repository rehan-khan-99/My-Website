import { ExternalLink, Plus } from "lucide-react";
import projectSchool from "@/assets/project-school.png";
import projectMoviezstream from "@/assets/project-moviezstream.png";
import projectPortfolio from "@/assets/project-portfolio.png";

const projects = [
  {
    title: "Madhyanchal Podar Learning School Website",
    desc: "Modern responsive school website for academic information and digital presence.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vite"],
    link: "https://github.com/rehan-khan-99/Madhyanchal-Podar-School-Website",
    image: projectSchool,
  },
  {
    title: "Moviezstream",
    desc: "Responsive movie streaming UI website with browsing and search features.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://moviezstreamm.netlify.app/",
    image: projectMoviezstream,
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website built with React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://rehankhan99.netlify.app/",
    image: projectPortfolio,
  },
  {
    title: "",
    desc: "",
    tech: [],
    link: "",
    image: null,
  },
];

const Projects = () => (
  <main className="section-padding pt-32">
    <div className="container mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
      <p className="text-muted-foreground mb-12">A selection of things I've built.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all min-h-[340px]"
          >
            <div className="h-40 bg-muted flex items-center justify-center overflow-hidden">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top" />
              ) : (
                <Plus size={32} className="text-muted-foreground/30" />
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              {p.title ? (
                <>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </>
              ) : (
                <div className="flex items-center justify-center flex-1">
                  <p className="text-muted-foreground/50 text-sm italic">Coming Soon</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Projects;
