import {
  Building2,
  HardHat,
  Settings,
  House,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Building2,
    title: "Maklerei",
    description:
      "Fundierte Marktkenntnis und Bewertungskompetenz aus der täglichen Praxis.",
  },
  {
    icon: HardHat,
    title: "Projektentwicklung",
    description:
      "Von der Planung bis zur Umsetzung – strategische Projektbegleitung mit Weitblick.",
  },
  {
    icon: Settings,
    title: "Gebäudetechnik",
    description:
      "Technisches Know-how für präzise Bewertungen und nachhaltige Gebäudeanalysen.",
  },
  {
    icon: House,
    title: "Hausverwaltung",
    description:
      "Praxisnahe Expertise in Verwaltung, Instandhaltung und Werterhaltung von Immobilien.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center gap-8 px-6 md:px-[120px] py-16 md:py-[100px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/background_landingpage.png')`,
        }}
      >
<h1 className="text-3xl md:text-[52px] font-semibold font-[family-name:var(--font-heading)] text-white text-center leading-tight tracking-tight max-w-[900px]">
          Willkommen beim Club Real
        </h1>
        <p className="text-lg text-white/75 text-center leading-relaxed max-w-[700px] font-[family-name:var(--font-body)]">
          Dem Netzwerk engagierter Immobilien-Sachverständiger in Österreich.
          Rund 35 Expertinnen und Experten – vereint durch höchste fachliche
          Ansprüche.
        </p>
        <Link
          href="/warum-club-real"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-white px-6 py-3 h-12 text-sm font-medium font-[family-name:var(--font-heading)]"
        >
          Mehr erfahren
        </Link>
      </section>

      {/* Fachlich Fundiert Section */}
      <section className="bg-card px-6 md:px-[120px] py-16 md:py-20">
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="text-xs font-medium font-[family-name:var(--font-heading)] text-primary tracking-widest">
            Unsere Stärke
          </span>
          <h2 className="text-4xl font-semibold font-[family-name:var(--font-heading)] text-foreground text-center tracking-tight">
            Fachlich fundiert. Menschlich verbindend.
          </h2>
          <p className="text-base text-muted text-center leading-relaxed max-w-[670px]">
            Als Zusammenschluss von aktuell etwa 35 Expertinnen und Experten im
            Immobilienwesen stehen wir für Fachkompetenz, Erfahrung und
            kollegialen Austausch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 p-7 bg-white shadow-sm"
            >
              <feature.icon className="w-6 h-6 text-primary" />
              <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-dark px-6 md:px-[120px] py-16 md:py-20">
        <div
          className="w-full md:w-1/2 h-[250px] md:h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/team_clubreal.jpg')`,
          }}
        />
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="text-xs font-medium font-[family-name:var(--font-heading)] text-primary tracking-widest">
            Unsere Mission
          </span>
          <h2 className="text-[32px] font-semibold font-[family-name:var(--font-heading)] text-white leading-snug tracking-tight">
            Wir schaffen Raum für fachlichen wie persönlichen Austausch.
          </h2>
          <p className="text-base text-white/75 leading-relaxed">
            Wir pflegen hohe Qualitätsstandards und stärken die Gemeinschaft der
            Immobilien-Sachverständigen in Österreich. Durch regelmäßigen
            Austausch, gemeinsame Veranstaltungen und kollegiale Zusammenarbeit
            fördern wir Exzellenz in der Bewertungspraxis.
          </p>
          <div className="w-12 h-0.5 bg-primary" />
          <p className="text-sm text-white/60 italic font-medium">
            Qualität entsteht im Dialog – nicht im Alleingang.
          </p>
        </div>
      </section>
    </>
  );
}
