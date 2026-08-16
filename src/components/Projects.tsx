import { useState } from "react";

const PROJECTS = [
  {
    title: "ReanGan",
    tag: "Language Learning",
    year: "Jul 2026",
    description:
      "Language learning app that transforms vocabulary acquisition and multilingual practice into an engaging, game-like experience",
    stack: ["React", "TypeScript", "Lovable AI", "Supabase", "TanStack Query"],
    url: "https://reangan.app",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=480&fit=crop&auto=format",
  },
  {
    title: "Afternune",
    tag: "Social Media",
    year: "Dec 2025",
    description:
      "A full-stack social media application suitable for users who want to share experiences",
    stack: ["React", "TypeScript", "Next.js", "Nest.js", "MongoDB"],
    url: "https://afternune.vercel.app",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=480&fit=crop&auto=format",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12 pb-6 border-b border-b-border">
        <div>
          <p className="text-xs tracking-widest uppercase mb-2 text-accent font-mono">
            Selected work
          </p>
          <h2 className="text-4xl font-light italic font-display text-foreground">
            Projects
          </h2>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          {PROJECTS.length} total
        </span>
      </div>

      {/* Active project */}
      <div className="grid md:grid-cols-2">
        {PROJECTS.map((project, i) => {
          return (
            <div key={project.title} className="bg-card border border-border">
              {/* Content */}
              <div className="p-8 flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-sm bg-accent text-accent-foreground font-mono">
                        {project.tag}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-3xl font-light italic font-display text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-xs mt-1 hover:opacity-70 transition-opacity text-accent font-mono"
                    aria-label={`View ${project.title}`}
                  >
                    View site
                  </a>
                </div>

                <p className="text-sm leading-relaxed font-light text-muted-foreground font-sans">
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
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
