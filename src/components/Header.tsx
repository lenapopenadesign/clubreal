import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Unser Angebot", href: "/warum-club-real" },
  { label: "Mitglieder", href: "/mitglieder" },
  { label: "CRSV", href: "/crsv" },
];

interface Props {
  currentPath: string;
}

export default function Header({ currentPath }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-card border-b border-border relative z-50">
        <a href="/">
          <img
            src="/logo.png"
            alt="Club Real"
            className="h-9 w-[140px] object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-[family-name:var(--font-body)] transition-colors ${
                currentPath === item.href
                  ? "text-primary font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/kontakt"
          className="hidden md:inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2.5 h-10 text-sm font-medium font-[family-name:var(--font-heading)]"
        >
          Mitglied werden
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-card flex flex-col md:hidden">
          <div className="h-[69px] shrink-0" />
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-[family-name:var(--font-heading)] transition-colors ${
                  currentPath === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-base font-medium font-[family-name:var(--font-heading)]"
            >
              Mitglied werden
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
