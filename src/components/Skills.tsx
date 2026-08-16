const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"],
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
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "1.5rem",
        }}
        className="mb-12"
      >
        <p
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          className="text-xs tracking-widest uppercase mb-2"
        >
          Expertise
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--foreground)",
          }}
          className="text-4xl font-light italic"
        >
          Skills
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.category}>
            <p
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                borderBottom: "1px solid var(--border)",
              }}
              className="text-xs tracking-widest uppercase pb-3 mb-5"
            >
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "var(--secondary)",
                    color: "var(--secondary-foreground)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-sans)",
                  }}
                  className="text-sm px-3 py-1.5 rounded-sm hover:border-accent hover:text-white transition-colors cursor-default"
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
