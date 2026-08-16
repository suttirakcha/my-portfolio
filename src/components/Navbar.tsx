import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NAV_LINKS = ["Projects", "Certifications", "Skills", "Languages"];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);
  return active;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.toLowerCase()));

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-b-border"
      aria-label="Primary navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between bg-[rgba(14,14,13,0.85)]">
        <span className="text-lg font-light tracking-tight text-accent font-display italic">
          Suttirakcha
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const lowerCaseLink = link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${lowerCaseLink}`}
                  className={cn(
                    "text-sm font-sans tracking-wide hover:text-white transition-colors duration-200",
                    lowerCaseLink === active
                      ? "text-white"
                      : "text-muted-foreground"
                  )}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* <a
          href="mailto:suttirak.char@gmail.com"
          className="hidden md:inline-flex text-xs font-medium px-4 py-2 rounded-sm hover:opacity-90 transition-opacity bg-accent text-accent-foreground font-mono"
        >
          hire me
        </a> */}

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-7 h-7 p-1 relative"
          aria-label="Toggle menu"
          onClick={handleOpen}
        >
          <span
            style={{
              backgroundColor: "var(--foreground)",
              transition:
                "transform 0.25s cubic-bezier(0.4,0,0.2,1), top 0.25s cubic-bezier(0.4,0,0.2,1)",
              position: "absolute",
              top: open ? "50%" : "calc(50% - 4px)",
              transform: open
                ? "translateY(-50%) rotate(45deg)"
                : "translateY(0) rotate(0deg)",
            }}
            className="w-5 h-px block"
          />
          <span
            style={{
              backgroundColor: "var(--foreground)",
              transition:
                "opacity 0.15s ease, transform 0.25s cubic-bezier(0.4,0,0.2,1)",
              opacity: open ? 0 : 1,
              transform: open ? "scaleX(0)" : "scaleX(1)",
              position: "absolute",
              top: "50%",
              marginTop: "-0.5px",
            }}
            className="w-5 h-px block"
          />
          <span
            style={{
              backgroundColor: "var(--foreground)",
              transition:
                "transform 0.25s cubic-bezier(0.4,0,0.2,1), top 0.25s cubic-bezier(0.4,0,0.2,1)",
              position: "absolute",
              top: open ? "50%" : "calc(50% + 4px)",
              transform: open
                ? "translateY(-50%) rotate(-45deg)"
                : "translateY(0) rotate(0deg)",
            }}
            className="w-5 h-px block"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          transition:
            "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-bottom 0.3s",
        }}
        className={cn(
          "bg-card overflow-hidden md:hidden",
          open ? "max-h-60 border-b border-b-border" : "max-h-0 border-0"
        )}
      >
        <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-foreground tracking-wide"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
