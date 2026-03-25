"use client";

import { useState } from "react";

const specializations = [
  "Wohnimmobilien",
  "Zinshäuser",
  "Gewerbeobjekte",
  "Projektentwicklung",
  "Bauträger",
  "Investmentimmobilien",
  "Hausverwaltung",
  "Mietrecht",
  "Betriebskosten",
  "Gebäudetechnik",
  "Industrieimmobilien",
  "Sanierung",
  "Immobiliendaten",
  "Marktanalysen",
  "Bewertungsmodelle",
  "Land- und Forstwirtschaft",
  "Grundstücksbewertung",
];

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSpec = (s: string) => {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 md:px-20 py-20">
        <h1 className="text-5xl font-semibold font-[family-name:var(--font-heading)] text-foreground tracking-tight leading-tight mb-6">
          Mitglied werden
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-[700px]">
          Sie sind Immobilien-Sachverständige oder Immobilien-Sachverständiger
          in Österreich und möchten Teil eines starken Netzwerks werden? Gerne
          lernen wir Sie in einem unverbindlichen Erstgespräch persönlich
          kennen und geben Ihnen Einblick in den Club Real. Füllen Sie einfach
          das Formular aus – wir melden uns bei Ihnen.
        </p>
      </section>

      {/* Content */}
      <section className="bg-card px-6 md:px-20 py-16">
        <div className="max-w-[800px] flex flex-col gap-10">
          <div className="flex flex-col gap-6 p-7 bg-white shadow-sm rounded-2xl">
            {submitted ? (
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">
                  Vielen Dank für Ihr Interesse!
                </p>
                <p className="text-base text-muted leading-relaxed">
                  Wir haben Ihre Anfrage erhalten und melden uns in Kürze
                  persönlich bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Ihr vollständiger Name inkl. Titel"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="ihre@email.at"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Telefonnummer
                    <span className="text-muted font-normal"> (optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="+43 ..."
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-foreground">
                    Spezialisierungen
                    <span className="text-muted font-normal"> (optional)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {specializations.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleSpec(s)}
                        className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs transition-colors ${
                          selected.includes(s)
                            ? "bg-primary text-white"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <input
                    type="hidden"
                    name="specializations"
                    value={selected.join(", ")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Nachricht
                    <span className="text-muted font-normal"> (optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    placeholder="Erzählen Sie uns kurz von sich und Ihrem Tätigkeitsfeld"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 h-12 text-sm font-medium font-[family-name:var(--font-heading)]"
                >
                  Anfrage absenden
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
