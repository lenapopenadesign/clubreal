import { ExternalLink, Scale, Linkedin, MapPin } from "lucide-react";
import KeywordCloud from "@/components/KeywordCloud";

interface MemberLink {
  icon: typeof ExternalLink;
  label: string;
  href: string;
}

interface Member {
  name: string;
  role: string;
  location: string;
  links: MemberLink[];
}

const members: Member[] = [
  {
    name: "Mag. (FH) Cornelia Auer, MRICS",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W018990" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/cornelia-auer-mrics-b7802b236" },
    ],
  },
  {
    name: "DI (FH) Thomas Bassetti, FRICS WRV CIS HypZert (F)",
    role: "Ordentliches Mitglied",
    location: "Tirol",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W599982" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/thomas-bassetti-frics-3b482980" },
    ],
  },
  {
    name: "Philippe Brusatti, MSc CREA",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.brusatti-immobilien.com" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/philippe-brusatti-995720267" },
    ],
  },
  {
    name: "BM Ing. Walter Brusatti",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.brusatti.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W179652" },
    ],
  },
  {
    name: "Walter Josef Wendelin Eichinger, MSc CMC FRICS",
    role: "Ordentliches Mitglied",
    location: "Niederösterreich",
    links: [],
  },
  {
    name: "Ing. Konstantin Filek, MA CIS ImmoZert",
    role: "Ordentliches Mitglied",
    location: "Niederösterreich",
    links: [
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/konstantin-filek-0a5707142" },
    ],
  },
  {
    name: "DI Matthias Grosse, MA",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.immoanalysen.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W785488" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/matthias-grosse" },
    ],
  },
  {
    name: "Mag. Thomas Gutmann, CRSV",
    role: "Vorstand (Obmann Stv.)",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.pretsch.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W457033" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/thomas-gutmann-1a23a4333" },
    ],
  },
  {
    name: "Mag. Peter Höflechner, FRICS",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W549951" },
    ],
  },
  {
    name: "Michael Klinger, BA CRSV",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.klinger-immobilien.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W649077" },
      { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/michael-klinger-b2925a147" },
    ],
  },
  {
    name: "Simone Köberl, MSc",
    role: "Ordentliches Mitglied",
    location: "Kärnten",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.verdis.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W308140" },
    ],
  },
  {
    name: "Doz. (FH) Univ.-Lektor Mag. Christoph Kothbauer",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/christoph-kothbauer-3469782b6" },
    ],
  },
  {
    name: "Mag. jur. Mag. (FH) Roman Kovacs, REV MRICS",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W716259" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/roman-kovacs-12264694" },
    ],
  },
  {
    name: "Mag. Christian Krenauer",
    role: "Vorstand (Obmann Stv.)",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.krenauer.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W434731" },
      { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/christian-krenauer-80ab8254" },
    ],
  },
  {
    name: "Mag. (FH) Bernhard Franz Lamprecht, MRICS",
    role: "Ordentliches Mitglied",
    location: "Kärnten",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W648555" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/bernhard-lamprecht-512217247" },
    ],
  },
  {
    name: "DI Harald Christoph Peham",
    role: "Ordentliches Mitglied",
    location: "Oberösterreich",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.sachverstaendige-immobilien.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W740567" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/harald-peham-96a621b2" },
    ],
  },
  {
    name: "Bernhard Pretterhofer, AE",
    role: "Ordentliches Mitglied",
    location: "Niederösterreich",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W811608" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/bernhard-pretterhofer-8462517b" },
    ],
  },
  {
    name: "Dr. Walter-Wolfgang Reichling",
    role: "Vorstand (Obmann)",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.reichling.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W427672" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/walter-wolfgang-reichling-720438a0" },
    ],
  },
  {
    name: "Ing. Michael Resch, BA MA",
    role: "Vorstand (Schriftführer)",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.buero22.at" },
    ],
  },
  {
    name: "DI (FH) DI Franz Riedl",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [],
  },
  {
    name: "DI Rafaela Rothwangl",
    role: "Ordentliches Mitglied",
    location: "Steiermark",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.zt-wald.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W243593" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/rafaela-rothwangl-173b57131" },
    ],
  },
  {
    name: "DI (FH) Stefan Peter Samek",
    role: "Ehrenmitglied",
    location: "Wien",
    links: [],
  },
  {
    name: "Ing. Johann K. Scheifinger, MRICS",
    role: "Ehrenmitglied",
    location: "Wien",
    links: [],
  },
  {
    name: "Vincent Scheifinger-Maierbrugger, MA",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vincent-scheifinger-maierbrugger-048840250" },
    ],
  },
  {
    name: "KommR BM Ing. Hubert Schöbinger",
    role: "Ehrenmitglied",
    location: "Wien",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W941171" },
    ],
  },
  {
    name: "KommR Georg Spiegelfeld, MRICS REV",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W941575" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/georg-spiegelfeld" },
    ],
  },
  {
    name: "Mag. (FH) Gerald Stocker, MBA MRICS",
    role: "Ordentliches Mitglied",
    location: "Niederösterreich",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.realbewertung.at" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W966765" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/gerald-stocker-5a1939b2" },
    ],
  },
  {
    name: "Mag. Georg Strafella",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W308455" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/georg-strafella-384527123" },
    ],
  },
  {
    name: "KommR Herbert Tomasetig, FRICS",
    role: "Ehrenmitglied",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.hto-consulting.com" },
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W500499" },
      { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/herbert-tomasetig-22687816a" },
    ],
  },
  {
    name: "Mag. Janine Tusch, MRICS",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.ehl.at" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/janine-tusch-mrics-688b21225" },
    ],
  },
  {
    name: "Ing. Mag. Waltraud Wimmer",
    role: "Ordentliches Mitglied",
    location: "Oberösterreich",
    links: [
      { icon: Scale, label: "SV Liste Justiz", href: "https://justizonline.gv.at/jop/web/exl/W157308" },
    ],
  },
  {
    name: "Andreas Wolfsbauer, BA",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [],
  },
  {
    name: "Stb. Univ.-Lektor Mag. Bernhard Woschnagg, MSc",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/bernhard-woschnagg-2436392b7" },
    ],
  },
  {
    name: "Vera Woschnagg, MBA",
    role: "Ordentliches Mitglied",
    location: "Wien",
    links: [
      { icon: ExternalLink, label: "Website", href: "https://www.austriareal.com" },
      { icon: Linkedin, label: "LinkedIn", href: "https://at.linkedin.com/in/vera-woschnagg-51278113" },
    ],
  },
  {
    name: "Mag. Andrea Zellner",
    role: "Vorstand (Kassierin)",
    location: "Niederösterreich",
    links: [],
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-2xl bg-background border border-border">
      <h3 className="text-base font-medium">{member.name}</h3>
      <p className="text-[13px] text-muted font-medium">{member.role}</p>
      <p className="text-[13px] text-muted flex items-center gap-1">
        <MapPin className="w-3 h-3 shrink-0" />
        {member.location}
      </p>

      {member.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {member.links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground hover:bg-secondary/70 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-muted" />
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function MitgliederPage() {
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
          Hier finden Sie Mitglieder des Club Real Immobiliensachverständige und
          ihre Kontaktmöglichkeiten.
        </p>
      </section>

      {/* Members Grid */}
      <section className="bg-card px-6 md:px-20 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
        <KeywordCloud />
      </section>
    </>
  );
}
