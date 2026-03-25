import { ExternalLink, Scale, Linkedin, MapPin, Briefcase } from "lucide-react";

interface MemberLink {
  icon: typeof ExternalLink;
  label: string;
}

interface Member {
  name: string;
  role: string;
  location: string;
  specialization: string;
  links: MemberLink[];
}

const members: Member[] = [
  {
    name: "Dr. Walter-Wolfgang Reichling",
    role: "Vereinsobmann",
    location: "Wien",
    specialization: "Wohnimmobilien, Zinshäuser, Gewerbeobjekte",
    links: [
      { icon: ExternalLink, label: "Website" },
      { icon: Scale, label: "Justiz-Liste" },
    ],
  },
  {
    name: "Mag. Elisabeth Kramer",
    role: "Ordentliches Mitglied",
    location: "Niederösterreich",
    specialization: "Hausverwaltung, Mietrecht, Betriebskosten",
    links: [{ icon: Scale, label: "Justiz-Liste" }],
  },
  {
    name: "Mag. Stefan Weber, MBA",
    role: "Ordentliches Mitglied",
    location: "Oberösterreich",
    specialization: "Projektentwicklung, Bauträger, Investmentimmobilien",
    links: [
      { icon: ExternalLink, label: "Website" },
      { icon: Linkedin, label: "LinkedIn" },
    ],
  },
  {
    name: "DI Matthias Grosse, MA",
    role: "Ordentliches Mitglied",
    location: "Wien",
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
    location: "Steiermark",
    specialization: "Gebäudetechnik, Industrieimmobilien, Sanierung",
    links: [
      { icon: ExternalLink, label: "Website" },
      { icon: Scale, label: "Justiz-Liste" },
    ],
  },
  {
    name: "DI Anna Berger",
    role: "Ordentliches Mitglied",
    location: "Kärnten",
    specialization: "Land- und Forstwirtschaft, Grundstücksbewertung",
    links: [{ icon: Scale, label: "Justiz-Liste" }],
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-2xl bg-background border border-border">
      <h3 className="text-base font-medium">{member.name}</h3>
      <p className="text-[13px] text-muted font-medium">{member.role}</p>
      <p className="text-[13px] text-muted flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        {member.location}
      </p>
      <p className="text-[13px] text-muted flex items-center gap-1">
        <Briefcase className="w-3 h-3 shrink-0" />
        {member.specialization}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-3 mt-2">
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
          Hier finden Sie Mitglieder des Club Real
          Immobiliensachverständige, ihre fachlichen Schwerpunkte und
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
