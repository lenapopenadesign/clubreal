export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 md:px-20 py-20">
        <h1 className="text-5xl font-semibold font-[family-name:var(--font-heading)] text-foreground tracking-tight leading-tight mb-6">
          Datenschutzerklärung
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-[700px]">
          Informationen zum Schutz Ihrer personenbezogenen Daten gemäß der
          Datenschutz-Grundverordnung (DSGVO).
        </p>
      </section>

      {/* Content */}
      <section className="bg-card px-6 md:px-20 py-16">
        <div className="max-w-[800px] flex flex-col gap-12">
          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Verantwortlicher
            </h2>
            <div className="text-base text-muted leading-relaxed">
              <p>Club Real Immobiliensachverständige</p>
              <p>Wien, Österreich</p>
              <p>E-Mail: info@clubreal.at</p>
            </div>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Beim Besuch unserer Website werden automatisch technische
              Informationen erfasst, die Ihr Browser an unseren Server
              übermittelt. Dazu gehören IP-Adresse, Browsertyp und -version,
              Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage und die
              aufgerufene Seite. Diese Daten werden ausschließlich zur
              Sicherstellung eines reibungslosen Betriebs der Website
              verwendet und nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Zweck der Datenverarbeitung
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Wir verarbeiten personenbezogene Daten ausschließlich zur
              Bereitstellung und Verbesserung unserer Website, zur
              Beantwortung von Kontaktanfragen sowie zur Erfüllung
              vereinsinterner Verwaltungsaufgaben.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Rechtsgrundlage
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1
              lit. b DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an der Bereitstellung einer
              funktionsfähigen Website).
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Speicherdauer
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies
              für den jeweiligen Verarbeitungszweck erforderlich ist oder
              gesetzliche Aufbewahrungsfristen dies vorschreiben. Nach Ablauf
              der Fristen werden die Daten routinemäßig gelöscht.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Ihre Rechte
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Sie haben das Recht auf Auskunft über die zu Ihrer Person
              gespeicherten Daten, auf Berichtigung unrichtiger Daten, auf
              Löschung, auf Einschränkung der Verarbeitung, auf
              Datenübertragbarkeit sowie auf Widerspruch gegen die
              Verarbeitung. Darüber hinaus steht Ihnen ein Beschwerderecht bei
              der zuständigen Aufsichtsbehörde (Österreichische
              Datenschutzbehörde) zu.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Cookies
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies, die für den Betrieb der Website erforderlich sind.
              Es werden keine Tracking- oder Analyse-Cookies eingesetzt.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Kontakt für Datenschutzanfragen
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte
              wenden Sie sich bitte an: info@clubreal.at
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
