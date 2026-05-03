"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Unser Angebot", href: "/warum-club-real" },
  { label: "Mitglieder", href: "/mitglieder" },
  { label: "CRSV", href: "/crsv" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-card border-b border-border relative z-50">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Club Real"
            className="h-9 w-[140px] object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-[family-name:var(--font-body)] transition-colors ${
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/kontakt"
          className="hidden md:inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2.5 h-10 text-sm font-medium font-[family-name:var(--font-heading)]"
        >
          Mitglied werden
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-card flex flex-col md:hidden">
          {/* Close area at top (behind header) */}
          <div className="h-[69px] shrink-0" />

          {/* Nav links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-[family-name:var(--font-heading)] transition-colors ${
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-base font-medium font-[family-name:var(--font-heading)]"
            >
              Mitglied werden
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
