import { ArrowUpRight, Github } from "lucide-react";
import { JSX } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  size?: "large" | "medium" | "small";
}

const projects: Project[] = [
  {
    title: "Finance AI",
    description: "AI-powered analytics dashboard with predictive insights.",
    image: "/projects/project1.png",
    tags: ["NextJS", "MongoDB", "OpenAI"],
    link: "#",
    github: "#",
    size: "large",
  },
  {
    title: "Student Management",
    description: "Full MERN system for managing students & courses.",
    image: "/projects/project1.png",
    tags: ["React", "Express", "MongoDB"],
    link: "#",
    github: "#",
    size: "medium",
  },
  {
    title: "E-Commerce UI",
    description: "Modern responsive online shopping platform UI.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind"],
    link: "#",
    github: "#",
    size: "small",
  },
  {
    title: "Portfolio Website",
    description: "Personal brand portfolio built with Vite + TS.",
    image: "/projects/project1.png",
    tags: ["Vite", "TypeScript"],
    link: "#",
    github: "#",
    size: "small",
  },
  {
    title: "Portfolio Website",
    description: "Personal brand portfolio built with Vite + TS.",
    image: "/projects/project1.png",
    tags: ["Vite", "TypeScript"],
    link: "#",
    github: "#",
    size: "small",
  },
];

export const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A collection of projects showcasing creativity and technical skills.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
          {projects.map((project, index) => {
            const sizeClasses =
              project.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : project.size === "medium"
                ? "md:col-span-2"
                : "md:col-span-1";

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl glass ${sizeClasses}`}
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a href={project.link}>
                        <ArrowUpRight className="w-5 h-5 text-white hover:text-primary transition" />
                      </a>
                      <a href={project.github}>
                        <Github className="w-5 h-5 text-white hover:text-primary transition" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};