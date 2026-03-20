export default function StatutenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 md:px-20 py-20">
        <h1 className="text-5xl font-semibold font-[family-name:var(--font-heading)] text-foreground tracking-tight leading-tight mb-6">
          Statuten des Vereins
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-[700px]">
          Die Grundlage unseres Vereinslebens – transparent und verbindlich für
          alle Mitglieder.
        </p>
      </section>

      {/* Content */}
      <section className="bg-card px-6 md:px-20 py-16">
        <div className="max-w-[800px] flex flex-col gap-12">
          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 1 – Name und Sitz des Vereins
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Der Verein führt den Namen „Club Real Immobiliensachverständige".
              Er hat seinen Sitz in Wien und erstreckt seine Tätigkeit auf das
              gesamte Bundesgebiet der Republik Österreich.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 2 – Zweck des Vereins
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Der Verein bezweckt die Förderung des fachlichen und kollegialen
              Austausches unter Immobilien-Sachverständigen in Österreich. Er
              setzt sich für hohe Qualitätsstandards in der
              Immobilienbewertung ein und fördert die fachliche
              Weiterentwicklung seiner Mitglieder.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Der Verein verfolgt ausschließlich gemeinnützige Zwecke im Sinne
              der Bundesabgabenordnung. Er ist nicht auf Gewinn ausgerichtet.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 3 – Mitgliedschaft
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Ordentliches Mitglied kann jede natürliche Person werden, die als
              Immobilien-Sachverständige oder Immobilien-Sachverständiger in
              Österreich tätig ist und die Vereinsziele unterstützt. Die
              Aufnahme erfolgt auf schriftlichen Antrag durch Beschluss des
              Vorstands.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Die Mitgliedschaft endet durch freiwilligen Austritt, Ausschluss
              oder Tod. Der Austritt kann jederzeit schriftlich gegenüber dem
              Vorstand erklärt werden.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 4 – Organe des Vereins
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Die Organe des Vereins sind die Generalversammlung, der Vorstand
              und die Rechnungsprüfer. Die Generalversammlung ist das oberste
              Organ des Vereins und findet mindestens einmal jährlich statt.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 5 – Generalversammlung
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Die ordentliche Generalversammlung findet jährlich statt. Eine
              außerordentliche Generalversammlung ist einzuberufen, wenn dies
              mindestens ein Zehntel der Mitglieder oder der Vorstand
              beschließt. Die Generalversammlung beschließt insbesondere über
              Statutenänderungen, die Wahl des Vorstands und die Auflösung des
              Vereins.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 6 – Vorstand
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Der Vorstand besteht aus dem Obmann, dem Stellvertreter, dem
              Schriftführer und dem Kassier. Die Funktionsperiode beträgt drei
              Jahre. Wiederwahl ist zulässig. Der Vorstand führt die laufenden
              Geschäfte des Vereins und vertritt diesen nach außen.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 7 – Mitgliedsbeiträge
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Die Höhe der Mitgliedsbeiträge wird von der Generalversammlung
              festgelegt. Der Mitgliedsbeitrag ist jährlich zu entrichten.
            </p>
          </article>

          <article className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground">
              § 8 – Auflösung des Vereins
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Die freiwillige Auflösung des Vereins kann nur in einer zu diesem
              Zweck einberufenen außerordentlichen Generalversammlung mit
              Zweidrittelmehrheit beschlossen werden. Bei Auflösung des Vereins
              ist das verbleibende Vereinsvermögen für gemeinnützige Zwecke im
              Sinne der Bundesabgabenordnung zu verwenden.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
