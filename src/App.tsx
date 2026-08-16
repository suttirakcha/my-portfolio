import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/suttirakcha",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suttirak-charoenrajabhakdi-87a7721a6/",
  },
  {
    label: "Email",
    href: "mailto:suttirak.char@gmail.com",
  },
];

function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)" }}
      className="max-w-6xl mx-auto px-6 py-10 mt-8 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--muted-foreground)",
          fontStyle: "italic",
        }}
        className="text-sm"
      >
        Suttirakcha — Bangkok, Thailand
      </span>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-xs text-muted-foreground hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}
