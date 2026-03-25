export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 md:px-20 py-20">
        <h1 className="text-5xl font-semibold font-[family-name:var(--font-heading)] text-foreground tracking-tight leading-tight mb-6">
          Impressum
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-[700px]">
          Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz.
        </p>
      </section>

      {/* Content */}
      <section className="bg-card px-6 md:px-20 py-16">
        <div className="max-w-[800px] flex flex-col gap-12">
          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Verein
            </h2>
            <div className="text-base text-muted leading-relaxed">
              <p>CLUB REAL Immobiliensachverständige</p>
              <p>ZVR-Zahl: 469893173</p>
            </div>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Vereinssitz
            </h2>
            <div className="text-base text-muted leading-relaxed">
              <p>Immobilienverwaltung Mag. Christian Krenauer GmbH</p>
              <p>Mariahilfer Straße 57-59/14</p>
              <p>1060 Wien, Österreich</p>
            </div>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Vereinsobmann
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Dr. Walter-Wolfgang Reichling
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Kontakt
            </h2>
            <div className="text-base text-muted leading-relaxed">
              <p>E-Mail: willkommen@clubreal.at</p>
            </div>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Haftungsausschluss
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir
              für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung
              übermittelter oder gespeicherter fremder Informationen besteht
              nicht.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Urheberrecht
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Die durch den Verein erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem österreichischen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des Vereins.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
