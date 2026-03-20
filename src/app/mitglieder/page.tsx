import { ExternalLink, Scale, Linkedin } from "lucide-react";

interface MemberLink {
  icon: typeof ExternalLink;
  label: string;
}

interface Member {
  name: string;
  role: string;
  specialization: string;
  links: MemberLink[];
}

const members: Member[] = [
  {
    name: "Dr. Walter-Wolfgang Reichling",
    role: "Vereinsobmann",
    specialization: "Wohnimmobilien, Zinshäuser, Gewerbeobjekte",
    links: [
      { icon: ExternalLink, label: "Website" },
      { icon: Scale, label: "Justiz-Liste" },
    ],
  },
  {
    name: "Mag. Elisabeth Kramer",
    role: "Ordentliches Mitglied",
    specialization: "Hausverwaltung, Mietrecht, Betriebskosten",
    links: [{ icon: Scale, label: "Justiz-Liste" }],
  },
  {
    name: "Mag. Stefan Weber, MBA",
    role: "Ordentliches Mitglied",
    specialization: "Projektentwicklung, Bauträger, Investmentimmobilien",
    links: [
      { icon: ExternalLink, label: "Website" },
      { icon: Linkedin, label: "LinkedIn" },
    ],
  },
  {
    name: "DI Matthias Grosse, MA",
    role: "Ordentliches Mitglied",
    specialization: "Immobiliendaten, Marktanalysen, Bewertungsmodelle",
    links: [
      { icon: ExternalLink, label: "Website" },
      { icon: Scale, label: "Justiz-Liste" },
      { icon: Linkedin, label: "LinkedIn" },
    ],
  },
  {
    name: "Ing. Thomas Hofer",
    role: "Ordentliches Mitglied",
    specialization: "Gebäudetechnik, Industrieimmobilien, Sanierung",
    links: [
      { icon: ExternalLink, label: "Website" },
      { icon: Scale, label: "Justiz-Liste" },
    ],
  },
  {
    name: "DI Anna Berger",
    role: "Ordentliches Mitglied",
    specialization: "Land- und Forstwirtschaft, Grundstücksbewertung",
    links: [{ icon: Scale, label: "Justiz-Liste" }],
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background border border-border">
      {/* Name & Role */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium">{member.name}</h3>
        <p className="text-[13px] text-muted font-medium">{member.role}</p>
      </div>

      {/* Specialization */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium font-[family-name:var(--font-heading)] text-muted">
          Spezialisierung
        </span>
        <p className="text-sm text-foreground leading-normal">
          {member.specialization}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {member.links.map((link) => {
          const Icon = link.icon;
          return (
            <span
              key={link.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground"
            >
              <Icon className="w-3.5 h-3.5 text-muted" />
              {link.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function MitgliederPage() {
  const col1 = [members[0], members[3]];
  const col2 = [members[1], members[4]];
  const col3 = [members[2], members[5]];

  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 md:px-20 py-20">
        <h1 className="text-5xl font-medium font-[family-name:var(--font-heading)] text-foreground tracking-tight mb-6">
          Mitgliederverzeichnis
        </h1>
        <p className="text-xl text-muted leading-normal max-w-[600px] mb-6">
          Ein Netzwerk ist nur so stark wie seine Mitglieder.
        </p>
        <p className="text-base text-muted leading-relaxed max-w-[700px]">
          Hier finden Sie die Mitglieder des Club Real
          Immobiliensachverständige inklusive ihrer fachlichen Schwerpunkte und
          Kontaktmöglichkeiten.
        </p>
      </section>

      {/* Members Grid */}
      <section className="bg-card px-6 md:px-20 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            {col1.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {col2.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {col3.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
