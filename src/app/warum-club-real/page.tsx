import {
  Users,
  MessageSquare,
  TrendingUp,
  Calendar,
  Heart,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Users,
    title: "Netzwerk",
    description:
      "Zugang zu einem exklusiven Kreis von qualifizierten Immobilien-Sachverständigen in ganz Österreich.",
  },
  {
    icon: MessageSquare,
    title: "Plattform",
    description:
      "Eine Plattform für fachlichen Austausch, Diskussion und die gemeinsame Weiterentwicklung von Bewertungsstandards.",
  },
  {
    icon: TrendingUp,
    title: "Weiterentwicklung",
    description:
      "Fachliche und persönliche Weiterbildung durch Vorträge, Workshops und den kollegialen Erfahrungsaustausch.",
  },
  {
    icon: Calendar,
    title: "Veranstaltungen",
    description:
      "Regelmäßige Events, Fachtagungen und gesellige Treffen stärken den Zusammenhalt und erweitern den Horizont.",
  },
  {
    icon: Heart,
    title: "Gemeinschaft",
    description:
      "Ein Verein, der nicht nur fachlich, sondern auch menschlich verbindet – mit echtem Zusammenhalt und gegenseitigem Respekt.",
  },
];

export default function WarumClubReal() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center gap-8 px-6 md:px-[120px] py-16 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/flagged/photo-1556010856-6d1801f17ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="inline-flex px-4 py-1.5 border border-white/20 bg-white/10">
          <span className="text-xs font-medium font-[family-name:var(--font-heading)] text-white/80 tracking-wider">
            Unser Angebot
          </span>
        </div>
        <h1 className="text-3xl md:text-[52px] font-semibold font-[family-name:var(--font-heading)] text-white text-center tracking-tight">
          Gemeinsam mehr erreichen
        </h1>
        <p className="text-lg text-white/75 text-center leading-relaxed max-w-[700px]">
          Der Immobilienmarkt wird komplexer. Umso wichtiger ist ein starkes
          Netzwerk, das Wissen teilt, Standards setzt und Kollegialität lebt.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-card px-6 md:px-[120px] py-16 md:py-20">
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="text-xs font-medium font-[family-name:var(--font-heading)] text-primary tracking-widest">
            Ihre Vorteile
          </span>
          <h2 className="text-4xl font-semibold font-[family-name:var(--font-heading)] text-foreground text-center tracking-tight">
            Was Club Real Ihnen bietet
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* Row 1 - 3 cards on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {benefits.slice(0, 3).map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-4 p-7 bg-white shadow-sm md:col-span-2"
              >
                <b.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
          {/* Row 2 - 2 cards on desktop, centered, same width as row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {benefits.slice(3, 5).map((b, i) => (
              <div
                key={b.title}
                className={`flex flex-col gap-4 p-7 bg-white shadow-sm md:col-span-2 ${i === 0 ? "md:col-start-2" : ""}`}
              >
                <b.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center gap-8 bg-dark px-6 md:px-[120px] py-16 md:py-20">
        <span className="text-xs font-medium font-[family-name:var(--font-heading)] text-primary tracking-widest">
          Werden Sie Teil von Club Real
        </span>
        <h2 className="text-2xl md:text-[40px] font-semibold font-[family-name:var(--font-heading)] text-white text-center leading-snug tracking-tight max-w-[700px]">
          Wissen teilen. Haltung zeigen.
          <br />
          Gemeinsam wachsen.
        </h2>
        <p className="text-base text-white/75 text-center leading-relaxed max-w-[550px]">
          Wir sind Profis – und eine Gemeinschaft, die fachliche Exzellenz mit
          Begeisterung verbindet. Der Club Real wird von Menschen getragen, die
          professionelle Integrität leben und kollegialen Austausch schätzen.
        </p>
        <a
          href="mailto:willkommen@clubreal.at"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-white px-6 py-3 h-12 text-sm font-medium font-[family-name:var(--font-heading)]"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </section>
    </>
  );
}
