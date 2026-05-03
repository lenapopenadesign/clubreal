"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const keywords = [
  "Abrechnungswesen",
  "Angemessenheit von Mietzinsen",
  "Bankeninterne Immobilienbewertung",
  "Baumeister",
  "Bauträger",
  "Bauwerksbuch",
  "Beleihungswertermittlung",
  "Betriebskosten",
  "Bewertung im Insolvenzverfahren",
  "Bewertungsmodelle",
  "Gebäudetechnik",
  "Gemeiner Wert",
  "Geschäftsräumlichkeiten",
  "Gewerbeobjekte",
  "Grundstücksbewertung",
  "Hausverwaltung",
  "Hotelimmobilien",
  "Immobilienberatung",
  "Immobilienbewertung",
  "Immobilienbuchhaltung",
  "Immobiliendaten",
  "Immobilienmarketing",
  "Immobilienvermarktung",
  "Immobilienvermittlung",
  "Immobilienverwaltung",
  "Industrieliegenschaften",
  "Investment Management",
  "Investmentimmobilien",
  "Lagezuschlag",
  "Land- und Forstwirtschaft",
  "Marktanalysen",
  "Marktwert",
  "Mietrecht",
  "Mietzinsfeststellungen",
  "Mietzinsgutachten",
  "Nutzwertgutachten",
  "Portfoliobewertung",
  "Projektentwicklung",
  "Prüfingenieur",
  "Public Real Estate",
  "Risikomanagement",
  "Sanierung",
  "Sonderimmobilien",
  "Statik",
  "Vorläufige Verwaltung",
  "Wohnimmobilien",
  "Wohnungseigentum",
  "Zinshäuser",
  "Zwangsverwaltung",
];

export default function KeywordCloud() {
  const [query, setQuery] = useState("");

  const normalized = query.toLowerCase().trim();
  const matched = keywords.filter((k) =>
    k.toLowerCase().includes(normalized)
  );
  const matchCount = normalized ? matched.length : keywords.length;

  return (
    <div className="mt-12 pt-10 border-t border-border flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs font-medium font-[family-name:var(--font-heading)] text-primary tracking-widest">
          Unsere Expertise
        </span>
        <h2 className="text-4xl font-semibold font-[family-name:var(--font-heading)] text-foreground text-center tracking-tight">
          Geballtes Wissen in {keywords.length} Fachgebieten
        </h2>
      </div>

      <div className="relative w-full md:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Spezialisierung suchen …"
          className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-border rounded-full text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {keywords.map((k) => {
          const active = !normalized || k.toLowerCase().includes(normalized);
          return (
            <span
              key={k}
              className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-opacity ${
                active
                  ? "border-border bg-white text-foreground opacity-100"
                  : "border-border bg-white text-muted opacity-20"
              }`}
            >
              {k}
            </span>
          );
        })}
      </div>

      {normalized && (
        <p className="text-xs text-muted">
          {matchCount} von {keywords.length} Spezialisierungen
        </p>
      )}
    </div>
  );
}
