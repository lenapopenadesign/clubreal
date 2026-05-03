import { HeartHandshake, TrendingUp, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Verbundenheit",
    description:
      "Verbundenheit mit den Vereinszielen und der Gemeinschaft der Sachverständigen.",
  },
  {
    icon: TrendingUp,
    title: "Engagement",
    description:
      "Engagement für fachliche und persönliche Weiterentwicklung als Sachverständiger.",
  },
  {
    icon: ShieldCheck,
    title: "Verantwortung",
    description:
      "Verantwortung für hohe Qualitäts- und Ethikstandards in der Immobilienbewertung.",
  },
];

export default function CRSVPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 md:px-20 py-20">
        <h1 className="text-5xl font-semibold font-[family-name:var(--font-heading)] text-foreground tracking-tight leading-tight mb-6">
          CRSV – Club Real
          <br />
          Sachverständiger
        </h1>
        <p className="text-xl text-muted leading-normal max-w-[700px]">
          Die CRSV-Zertifizierung steht für Qualität, Verantwortung und
          Engagement.
        </p>
      </section>

      {/* Content */}
      <section className="bg-card px-6 md:px-20 py-[60px]">
        <p className="text-lg text-foreground leading-relaxed max-w-[800px] mb-12">
          Nur Mitglieder des Club Real können den Titel CRSV erwerben – eine
          Auszeichnung, die zeigt:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="flex flex-col gap-4 p-8 rounded-2xl bg-white shadow-sm"
              >
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-medium font-[family-name:var(--font-heading)] text-foreground">
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Legal Text */}
      <section className="bg-background px-6 md:px-20 py-[60px]">
        <p className="text-base text-muted leading-relaxed max-w-[900px]">
          Die Zertifizierung dokumentiert im Sinne des § 1299 ABGB das
          öffentliche Bekenntnis zu einem Beruf und zu einem hohen
          Qualitätsbewusstsein. Sie setzt ein klares qualitatives
          Selbstverständnis, die Bereitschaft zu kontinuierlicher fachlicher
          Weiterentwicklung sowie ein gelebtes Miteinander im Verein voraus.
        </p>
      </section>
    </>
  );
}
