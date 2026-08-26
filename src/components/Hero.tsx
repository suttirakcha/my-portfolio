function Hero() {
  const profileImg = new URL(
    "../assets/suttirak-ch-profile-image.jpg",
    import.meta.url
  ).href;
  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col-reverse max-md:items-center md:grid md:grid-cols-[1fr_auto] gap-16 items-start">
      <div className="flex flex-col gap-6">
        <span className="text-xs px-2.5 py-1 rounded-sm font-medium bg-accent text-accent-foreground font-mono w-fit">
          available for work
        </span>

        <h1 className="text-foreground font-display text-6xl md:text-7xl font-light leading-[0.95] tracking-tight">
          Suttirak <span className="text-secondary-foreground">(Mark)</span>{" "}
          <em className="font-light not-italic text-accent">
            Charoenrajabhakdi
          </em>
          <br />
          <span className="text-4xl md:text-5xl text-secondary-foreground">
            Full-Stack{" "}
          </span>
          <span className="text-4xl md:text-5xl">Developer</span>
        </h1>

        <p className="text-muted-foreground font-sans text-base leading-relaxed font-light">
          Hi, I'm Suttirak Charoenrajabhakdi, you can call me{" "}
          <strong className="font-bold text-secondary-foreground">Mark</strong>.
          I had a 3-year experience in working as a frontend developer with the
          focus of React, Next.js, and TypeScript and I've been building
          AI-augmented full-stack web applications during AI era.
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
