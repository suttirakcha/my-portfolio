const SPOKEN_LANGUAGES = [
  {
    name: "Thai (ภาษาไทย)",
    level: "Native",
  },
  {
    name: "English",
    level: "Fluent",
  },
  {
    name: "Mandarin Chinese （中文）",
    level: "Intermediate",
  },
  {
    name: "German (Deutsch)",
    level: "Beginner",
  },
];

const PROFICIENCY_COLORS: Record<string, string> = {
  Native: "#87e0b8",
  Fluent: "#6bcba4",
  Intermediate: "#4a9e7e",
  Beginner: "#2d5c4a",
};

function Languages() {
  return (
    <section id="languages" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12 pb-1.5 border-b border-b-border">
        <p className="text-xs tracking-widest uppercase mb-2 text-accent font-mono">
          Proficiency
        </p>
        <h2 className="text-4xl font-light italic font-display text-foreground">
          Languages
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {SPOKEN_LANGUAGES.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center gap-4 px-5 py-4 rounded-sm bg-card border border-border"
          >
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <span className="font-medium text-foreground font-sans text-lg">
                {lang.name}
              </span>
              {/* <span className="text-sm text-muted-foreground font-sans">
                {lang.description}
              </span> */}
            </div>
            <span
              style={{
                backgroundColor: PROFICIENCY_COLORS[lang.level],
              }}
              className="text-xs px-2.5 py-1 rounded-sm font-medium shrink-0 text-background font-mono"
            >
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;
