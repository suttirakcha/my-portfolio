const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs"],
  },
  {
    category: "UI Frameworks",
    skills: ["Tailwind CSS", "Chakra UI", "Shadcn"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    category: "Tools",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "MongoDB Compass",
      "Vite",
      "Webpack",
      "Figma",
    ],
  },
  {
    category: "AI Coding Tools",
    skills: ["Lovable", "Claude", "Cursor"],
  },
  {
    category: "Soft Skills",
    skills: ["Active learning", "Creativity", "Time management"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12 border-b border-b-border pb-6">
        <p className="text-xs tracking-widest uppercase mb-2 font-mono text-accent">
          Expertise
        </p>
        <h2 className="text-4xl font-light italic text-foreground font-display">
          Skills
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.category}>
            <p className="text-xs tracking-widest uppercase pb-3 mb-5 text-accent font-mono border-b border-b-border">
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-sm hover:border-accent hover:text-white transition-colors cursor-default font-sans border border-border text-secondary-foreground bg-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
