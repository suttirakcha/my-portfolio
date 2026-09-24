import FadeUp from "@/components/FadeUp";
import afternunePreview from "@/assets/afternune-preview.png";
import reanganPreview from "@/assets/reangan-preview.png";
import { useState } from "react";

const PROJECTS = [
  {
    title: "ReanGan",
    tag: "Language Learning",
    year: "Jul 2026",
    description:
      "A language learning app that transforms vocabulary acquisition and multilingual practice into an engaging, game-like experience; the project is created using an AI tool of 'Lovable' and developed using React and TypeScript for the frontend development",
    stack: ["React", "TypeScript", "Lovable AI", "Supabase", "TanStack Query"],
    url: "https://reangan.app",
    image: reanganPreview,
  },
  {
    title: "Afternune",
    tag: "Social Media",
    year: "Dec 2025",
    description:
      "A full-stack social media application suitable for users who want to share experiences via posting, join communites, and chat with others",
    stack: ["React", "TypeScript", "Next.js", "Nest.js", "MongoDB"],
    url: "https://afternune.vercel.app",
    image: afternunePreview,
  },
];

function Projects() {
  const [active, setActive] = useState(0);
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <FadeUp>
        <div className="flex items-end justify-between mb-12 border-b border-b-border pb-6">
          <div>
            <p className="text-xs tracking-widest uppercase mb-2 font-mono text-accent">
              Selected work
            </p>
            <h2 className="text-4xl font-light italic font-display text-foreground">
              Projects
            </h2>
          </div>
          <span
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-mono)",
            }}
            className="text-xs"
          >
            {PROJECTS.length} total
          </span>
        </div>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              style={{
                backgroundColor:
                  active === i ? "var(--foreground)" : "var(--secondary)",
                color:
                  active === i
                    ? "var(--background)"
                    : "var(--muted-foreground)",
                fontFamily: "var(--font-mono)",
                border: "none",
                flexShrink: 0,
              }}
              className="text-xs px-4 py-2 rounded-sm transition-all duration-200 hover:opacity-90"
            >
              {p.title}
            </button>
          ))}
        </div>

        {PROJECTS.map((project, i) =>
          i !== active ? null : (
            <div
              key={project.title}
              className="grid md:grid-cols-[1fr_1.1fr] gap-0 rounded-sm overflow-hidden bg-card border border-border"
            >
              <div className="relative h-64 md:h-auto overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 60%, rgba(22,22,20,0.7))",
                  }}
                />
              </div>

              <div className="p-8 flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-sm bg-accent font-mono text-muted-foreground">
                        {project.tag}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-3xl font-light italic font-display text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.url}
                    className="text-lg mt-1 hover:opacity-70 transition-opacity text-accent font-mono"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </a>
                </div>

                <p
                  style={{
                    color: "var(--muted-foreground)",
                    fontFamily: "var(--font-sans)",
                  }}
                  className="text-sm leading-relaxed font-light"
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground font-mono border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-px bg-border">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              style={{
                backgroundColor:
                  active === i ? "var(--secondary)" : "var(--card)",
              }}
              className="p-4 cursor-pointer hover:bg-opacity-80 transition-colors text-left border-none"
            >
              <p className="text-xs mb-1 text-muted-foreground font-mono">
                0{i + 1}
              </p>
              <p
                style={{
                  color:
                    active === i
                      ? "var(--foreground)"
                      : "var(--secondary-foreground)",
                }}
                className="text-sm font-medium font-sans"
              >
                {p.title}
              </p>
            </button>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

export default Projects;
