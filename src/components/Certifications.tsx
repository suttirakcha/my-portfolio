const CERTIFICATIONS = [
  {
    title: "Learn Next.js Course",
    issuer: "Codecademy",
    date: "Apr 2026",
    id: "7D119610-F",
    icon: "◉",
    link: "https://www.codecademy.com/profiles/suttirakCharoenrajabhakdi2642354771/certificates/6567723e030e4c0089836b44fa56495c",
  },
  {
    title: "Frontend Developer (React) Certification Test",
    issuer: "Hackerrank",
    date: "Sep 2025",
    id: "0854B5517C2A",
    icon: "☁",
    link: "https://www.hackerrank.com/certificates/0854b5517c2a",
  },
  {
    title: "React & TypeScript - The Practical Guide",
    issuer: "Udemy",
    date: "Feb 2025",
    id: "UC-ec476bd1-fcab-413d-b671-500f47520dfb",
    icon: "◈",
    link: "https://www.udemy.com/certificate/UC-ec476bd1-fcab-413d-b671-500f47520dfb/",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Mar 2021",
    id: "-",
    icon: "⬡",
    link: "https://www.freecodecamp.org/certification/marksuttirak/responsive-web-design",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12 pb-6 border-b border-b-border">
        <p
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          className="text-xs tracking-widest uppercase mb-2"
        >
          Credentials
        </p>
        <h2 className="text-4xl font-light italic font-display text-foreground">
          Certifications
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="p-6 flex items-start gap-5 group hover:bg-opacity-80 transition-colors cursor-default bg-card"
          >
            <span className="flex items-center justify-center text-lg rounded-sm bg-secondary text-accent font-mono w-10 h-10 shrink-0">
              {cert.icon}
            </span>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <h3 className="font-medium leading-snug font-sans text-foreground">
                {cert.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground">
                {cert.issuer}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs pl-2 text-accent font-mono border-l-2 border-l-accent">
                  {cert.date}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
                >
                  View certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
