function Hero() {
  const profileImg = new URL(
    "../../public/suttirak-ch-profile-image.jpg",
    import.meta.url
  ).href;
  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-[1fr_auto] gap-16 items-start">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground)",
              fontFamily: "var(--font-mono)",
            }}
            className="text-xs px-2.5 py-1 rounded-sm font-medium"
          >
            available for work
          </span>
          <span
            style={{ color: "var(--muted-foreground)" }}
            className="text-xs tracking-widest uppercase"
          >
            Based in Bangkok, Thailand
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--foreground)",
          }}
          className="text-6xl md:text-7xl font-light leading-[0.95] tracking-tight"
        >
          Suttirak{" "}
          <em
            className="font-light not-italic"
            style={{ color: "var(--accent)" }}
          >
            Charoenrajabhakdi
          </em>
          <br />
          <span
            className="text-5xl md:text-6xl"
            style={{ color: "var(--secondary-foreground)" }}
          >
            Full-Stack{" "}
          </span>
          Developer
        </h1>

        <p
          style={{
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-sans)",
          }}
          className="text-base leading-relaxed font-light"
        >
          A web developer with 3-year work experience creating e-commerce,
          dashboard, and event booking applications. Combine frontend expertise
          (React, Next.js, and TypeScript) with robust backend capabilities
          (Nest.js, MongoDB, PostgreSQL) gained through advanced bootcamps,
          proven abilities with cross-functional teams to translate
          pixel-perfect Figma design into high-performance web applications
        </p>

        <div className="flex items-center gap-4 pt-2">
          <a
            href="#projects"
            className="bg-foreground text-background font-sans inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
          >
            View projects
          </a>
          {/* <a
            href="#"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-sans)",
            }}
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-sm border hover:text-white transition-colors"
          >
            Download CV
          </a> */}
        </div>

        <div className="flex items-center gap-8 pt-4 border-t border-t-border">
          {[
            ["3+", "Years exp."],
            ["2", "Projects"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--foreground)",
                }}
                className="text-2xl font-light"
              >
                {num}
              </span>
              <span
                style={{
                  color: "var(--muted-foreground)",
                  fontFamily: "var(--font-mono)",
                }}
                className="text-xs"
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Profile image */}
      <div className="shrink-0">
        <div className="relative rounded-full overflow-hidden w-80 h-80 shadow-accent shadow-[0_0_40px_0px_var(--accent)]">
          <img
            src={profileImg}
            alt="Suttirak Charoenrajabhakdi, full-stack developer"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
