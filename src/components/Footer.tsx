import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-6 md:px-[120px] py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">
        {/* Left: Logo + Tagline */}
        <div className="flex flex-col gap-4 md:w-[400px]">
          <img
            src="/logo.png"
            alt="Club Real"
            className="h-9 w-[140px] object-contain"
          />
          <p className="text-sm text-muted leading-relaxed max-w-[350px]">
            Klar in der Sache. Kollegial im Austausch.
            <br />
            Professionell im Anspruch.
          </p>
        </div>

        {/* Right: Link Columns */}
        <div className="grid grid-cols-2 md:flex gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold font-[family-name:var(--font-heading)] tracking-wider text-foreground">
              Navigation
            </h4>
            <Link href="/warum-club-real" className="text-sm text-muted hover:text-foreground">
              Warum Club Real?
            </Link>
            <Link href="/mitglieder" className="text-sm text-muted hover:text-foreground">
              Mitglieder
            </Link>
            <Link href="/crsv" className="text-sm text-muted hover:text-foreground">
              CRSV
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold font-[family-name:var(--font-heading)] tracking-wider text-foreground">
              Rechtliches
            </h4>
            <Link href="/statuten" className="text-sm text-muted hover:text-foreground">
              Statuten
            </Link>
            <Link href="/datenschutz" className="text-sm text-muted hover:text-foreground">
              Datenschutz
            </Link>
            <Link href="/impressum" className="text-sm text-muted hover:text-foreground">
              Impressum
            </Link>
          </div>
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold font-[family-name:var(--font-heading)] tracking-wider text-foreground">
              Kontakt
            </h4>
            <Link href="/kontakt" className="text-sm text-muted hover:text-foreground">
              info@clubreal.at
            </Link>
            <span className="text-sm text-muted">Wien, Österreich</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-border">
        <span className="text-xs text-muted">
          © 2026 Club Real. Alle Rechte vorbehalten.
        </span>
      </div>
    </footer>
  );
}
