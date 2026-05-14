import { useEffect, useState } from "react";
import { Moon, Sun, Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const initial =
      stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (typeof window !== "undefined") localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

const links = [
  { href: "#soundtrack", label: "The Song" },
  { href: "#blur", label: "The Movie" },
  { href: "#alignment", label: "11 / 11" },
  { href: "#lawsuit", label: "The Wedding" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4">
        <nav className="relative glass border border-border rounded-full shadow-elegant px-2 py-2 flex items-center gap-1 sm:gap-2">
          <a
            href="#hero"
            className="flex items-center gap-2 px-3 py-1.5 font-display text-base sm:text-lg"
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full"
              style={{ background: "var(--gradient-royal)" }}
            >
              <Heart className="w-4 h-4 text-background" fill="currentColor" />
            </span>
            <span className="font-script text-xl gradient-text">Edwin &amp; Fola</span>
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden md:inline-flex px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Menu className="w-4 h-4" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: "color-mix(in oklab, var(--background) 80%, transparent)" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              className="absolute top-4 left-4 right-4 glass border border-border rounded-3xl shadow-elegant p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-script text-2xl gradient-text">Edwin &amp; Fola</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ul className="space-y-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base text-foreground hover:bg-secondary transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
