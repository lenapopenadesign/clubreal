import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vrdrksfe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const documents = [
  // Site Settings
  {
    _id: "siteSettings",
    _type: "siteSettings",
    tagline: "Klar in der Sache. Kollegial im Austausch.\nProfessionell im Anspruch.",
    email: "info@clubreal.at",
    location: "Wien, Österreich",
  },

  // Home Page
  {
    _id: "homePage",
    _type: "homePage",
    heroTagline: "Netzwerk Immobilien-Sachverständiger",
    heroTitle: "Willkommen beim Club Real",
    heroSubtitle:
      "Dem Netzwerk engagierter Immobilien-Sachverständiger in Österreich. Rund 35 Expertinnen und Experten – vereint durch höchste fachliche Ansprüche.",
    sectionTitle: "Fachlich fundiert. Menschlich verbindend.",
    sectionSubtitle:
      "Als Zusammenschluss von aktuell etwa 35 Expertinnen und Experten im Immobilienwesen stehen wir für Fachkompetenz, Erfahrung und kollegialen Austausch.",
    missionTagline: "Unsere Mission",
    missionTitle:
      "Wir schaffen Raum für fachlichen wie persönlichen Austausch.",
    missionText:
      "Wir pflegen hohe Qualitätsstandards und stärken die Gemeinschaft der Immobilien-Sachverständigen in Österreich. Durch regelmäßigen Austausch, gemeinsame Veranstaltungen und kollegiale Zusammenarbeit fördern wir Exzellenz in der Bewertungspraxis.",
    missionQuote: "Qualität entsteht im Dialog – nicht im Alleingang.",
  },

  // Warum Club Real
  {
    _id: "warumPage",
    _type: "warumPage",
    heroTagline: "Warum Club Real?",
    heroTitle: "Gemeinsam mehr erreichen",
    heroSubtitle:
      "Der Immobilienmarkt wird komplexer. Umso wichtiger ist ein starkes Netzwerk, das Wissen teilt, Standards setzt und Kollegialität lebt.",
    ctaTitle:
      "Wissen teilen. Haltung zeigen.\nGemeinsam wachsen.",
    ctaText:
      "Wir sind Profis – und eine Gemeinschaft, die fachliche Exzellenz mit Begeisterung verbindet. Der Club Real wird von Menschen getragen, die professionelle Integrität leben und kollegialen Austausch schätzen.",
  },

  // CRSV Page
  {
    _id: "crsvPage",
    _type: "crsvPage",
    heroTitle: "CRSV – Club Real\nSachverständiger",
    heroSubtitle:
      "Die CRSV-Zertifizierung steht für Qualität, Verantwortung und Engagement.",
    introText:
      "Nur Mitglieder des Club Real können den Titel CRSV erwerben – eine Auszeichnung, die zeigt:",
    legalText:
      "Die Zertifizierung dokumentiert im Sinne des § 1299 ABGB das öffentliche Bekenntnis zu einem Beruf und zu einem hohen Qualitätsbewusstsein. Sie setzt ein klares qualitatives Selbstverständnis, die Bereitschaft zu kontinuierlicher fachlicher Weiterentwicklung sowie ein gelebtes Miteinander im Verein voraus.",
  },

  // Kontakt / Mitglied werden
  {
    _id: "kontaktPage",
    _type: "kontaktPage",
    title: "Mitglied werden",
    subtitle:
      "Sie sind Immobilien-Sachverständige oder Immobilien-Sachverständiger in Österreich und möchten Teil eines starken Netzwerks werden? Füllen Sie das Formular aus – wir melden uns persönlich bei Ihnen.",
    successTitle: "Vielen Dank für Ihr Interesse!",
    successMessage:
      "Wir haben Ihre Anfrage erhalten und melden uns in Kürze persönlich bei Ihnen.",
  },

  // Statuten
  {
    _id: "statutenPage",
    _type: "statutenPage",
    title: "Statuten des Vereins",
    subtitle:
      "Die Grundlage unseres Vereinslebens – transparent und verbindlich für alle Mitglieder.",
    sections: [
      {
        _key: "s1",
        heading: "§ 1 – Name und Sitz des Vereins",
        content: [
          {
            _key: "b1",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c1",
                _type: "span",
                text: 'Der Verein führt den Namen „Club Real Immobiliensachverständige\u201C. Er hat seinen Sitz in Wien und erstreckt seine Tätigkeit auf das gesamte Bundesgebiet der Republik Österreich.',
              },
            ],
          },
        ],
      },
      {
        _key: "s2",
        heading: "§ 2 – Zweck des Vereins",
        content: [
          {
            _key: "b2",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c2",
                _type: "span",
                text: "Der Verein bezweckt die Förderung des fachlichen und kollegialen Austausches unter Immobilien-Sachverständigen in Österreich. Er setzt sich für hohe Qualitätsstandards in der Immobilienbewertung ein und fördert die fachliche Weiterentwicklung seiner Mitglieder.",
              },
            ],
          },
          {
            _key: "b2b",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c2b",
                _type: "span",
                text: "Der Verein verfolgt ausschließlich gemeinnützige Zwecke im Sinne der Bundesabgabenordnung. Er ist nicht auf Gewinn ausgerichtet.",
              },
            ],
          },
        ],
      },
      {
        _key: "s3",
        heading: "§ 3 – Mitgliedschaft",
        content: [
          {
            _key: "b3",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c3",
                _type: "span",
                text: "Ordentliches Mitglied kann jede natürliche Person werden, die als Immobilien-Sachverständige oder Immobilien-Sachverständiger in Österreich tätig ist und die Vereinsziele unterstützt. Die Aufnahme erfolgt auf schriftlichen Antrag durch Beschluss des Vorstands.",
              },
            ],
          },
          {
            _key: "b3b",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c3b",
                _type: "span",
                text: "Die Mitgliedschaft endet durch freiwilligen Austritt, Ausschluss oder Tod. Der Austritt kann jederzeit schriftlich gegenüber dem Vorstand erklärt werden.",
              },
            ],
          },
        ],
      },
      {
        _key: "s4",
        heading: "§ 4 – Organe des Vereins",
        content: [
          {
            _key: "b4",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c4",
                _type: "span",
                text: "Die Organe des Vereins sind die Generalversammlung, der Vorstand und die Rechnungsprüfer. Die Generalversammlung ist das oberste Organ des Vereins und findet mindestens einmal jährlich statt.",
              },
            ],
          },
        ],
      },
      {
        _key: "s5",
        heading: "§ 5 – Generalversammlung",
        content: [
          {
            _key: "b5",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c5",
                _type: "span",
                text: "Die ordentliche Generalversammlung findet jährlich statt. Eine außerordentliche Generalversammlung ist einzuberufen, wenn dies mindestens ein Zehntel der Mitglieder oder der Vorstand beschließt. Die Generalversammlung beschließt insbesondere über Statutenänderungen, die Wahl des Vorstands und die Auflösung des Vereins.",
              },
            ],
          },
        ],
      },
      {
        _key: "s6",
        heading: "§ 6 – Vorstand",
        content: [
          {
            _key: "b6",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c6",
                _type: "span",
                text: "Der Vorstand besteht aus dem Obmann, dem Stellvertreter, dem Schriftführer und dem Kassier. Die Funktionsperiode beträgt drei Jahre. Wiederwahl ist zulässig. Der Vorstand führt die laufenden Geschäfte des Vereins und vertritt diesen nach außen.",
              },
            ],
          },
        ],
      },
      {
        _key: "s7",
        heading: "§ 7 – Mitgliedsbeiträge",
        content: [
          {
            _key: "b7",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c7",
                _type: "span",
                text: "Die Höhe der Mitgliedsbeiträge wird von der Generalversammlung festgelegt. Der Mitgliedsbeitrag ist jährlich zu entrichten.",
              },
            ],
          },
        ],
      },
      {
        _key: "s8",
        heading: "§ 8 – Auflösung des Vereins",
        content: [
          {
            _key: "b8",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c8",
                _type: "span",
                text: "Die freiwillige Auflösung des Vereins kann nur in einer zu diesem Zweck einberufenen außerordentlichen Generalversammlung mit Zweidrittelmehrheit beschlossen werden. Bei Auflösung des Vereins ist das verbleibende Vereinsvermögen für gemeinnützige Zwecke im Sinne der Bundesabgabenordnung zu verwenden.",
              },
            ],
          },
        ],
      },
    ],
  },

  // Impressum
  {
    _id: "impressumPage",
    _type: "impressumPage",
    title: "Impressum",
    subtitle:
      "Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz.",
    sections: [
      {
        _key: "i1",
        heading: "Verein",
        content: [
          {
            _key: "b1",
            _type: "block",
            style: "normal",
            children: [
              { _key: "c1", _type: "span", text: "Club Real Immobiliensachverständige\nZVR-Zahl: [wird ergänzt]" },
            ],
          },
        ],
      },
      {
        _key: "i2",
        heading: "Sitz des Vereins",
        content: [
          {
            _key: "b2",
            _type: "block",
            style: "normal",
            children: [
              { _key: "c2", _type: "span", text: "Wien, Österreich" },
            ],
          },
        ],
      },
      {
        _key: "i3",
        heading: "Vereinsobmann",
        content: [
          {
            _key: "b3",
            _type: "block",
            style: "normal",
            children: [
              { _key: "c3", _type: "span", text: "Dr. Walter-Wolfgang Reichling" },
            ],
          },
        ],
      },
      {
        _key: "i4",
        heading: "Kontakt",
        content: [
          {
            _key: "b4",
            _type: "block",
            style: "normal",
            children: [
              { _key: "c4", _type: "span", text: "E-Mail: info@clubreal.at" },
            ],
          },
        ],
      },
      {
        _key: "i5",
        heading: "Haftungsausschluss",
        content: [
          {
            _key: "b5",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c5",
                _type: "span",
                text: "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht.",
              },
            ],
          },
        ],
      },
      {
        _key: "i6",
        heading: "Urheberrecht",
        content: [
          {
            _key: "b6",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c6",
                _type: "span",
                text: "Die durch den Verein erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Vereins.",
              },
            ],
          },
        ],
      },
    ],
  },

  // Datenschutz
  {
    _id: "datenschutzPage",
    _type: "datenschutzPage",
    title: "Datenschutzerklärung",
    subtitle:
      "Informationen zum Schutz Ihrer personenbezogenen Daten gemäß der Datenschutz-Grundverordnung (DSGVO).",
    sections: [
      {
        _key: "d1",
        heading: "Verantwortlicher",
        content: [
          {
            _key: "b1",
            _type: "block",
            style: "normal",
            children: [
              { _key: "c1", _type: "span", text: "Club Real Immobiliensachverständige\nWien, Österreich\nE-Mail: info@clubreal.at" },
            ],
          },
        ],
      },
      {
        _key: "d2",
        heading: "Erhebung und Verarbeitung personenbezogener Daten",
        content: [
          {
            _key: "b2",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c2",
                _type: "span",
                text: "Beim Besuch unserer Website werden automatisch technische Informationen erfasst, die Ihr Browser an unseren Server übermittelt. Dazu gehören IP-Adresse, Browsertyp und -version, Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage und die aufgerufene Seite. Diese Daten werden ausschließlich zur Sicherstellung eines reibungslosen Betriebs der Website verwendet und nicht mit anderen Datenquellen zusammengeführt.",
              },
            ],
          },
        ],
      },
      {
        _key: "d3",
        heading: "Zweck der Datenverarbeitung",
        content: [
          {
            _key: "b3",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c3",
                _type: "span",
                text: "Wir verarbeiten personenbezogene Daten ausschließlich zur Bereitstellung und Verbesserung unserer Website, zur Beantwortung von Kontaktanfragen sowie zur Erfüllung vereinsinterner Verwaltungsaufgaben.",
              },
            ],
          },
        ],
      },
      {
        _key: "d4",
        heading: "Rechtsgrundlage",
        content: [
          {
            _key: "b4",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c4",
                _type: "span",
                text: "Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung einer funktionsfähigen Website).",
              },
            ],
          },
        ],
      },
      {
        _key: "d5",
        heading: "Speicherdauer",
        content: [
          {
            _key: "b5",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c5",
                _type: "span",
                text: "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben. Nach Ablauf der Fristen werden die Daten routinemäßig gelöscht.",
              },
            ],
          },
        ],
      },
      {
        _key: "d6",
        heading: "Ihre Rechte",
        content: [
          {
            _key: "b6",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c6",
                _type: "span",
                text: "Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, auf Berichtigung unrichtiger Daten, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung. Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Österreichische Datenschutzbehörde) zu.",
              },
            ],
          },
        ],
      },
      {
        _key: "d7",
        heading: "Cookies",
        content: [
          {
            _key: "b7",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c7",
                _type: "span",
                text: "Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Tracking- oder Analyse-Cookies eingesetzt.",
              },
            ],
          },
        ],
      },
      {
        _key: "d8",
        heading: "Kontakt für Datenschutzanfragen",
        content: [
          {
            _key: "b8",
            _type: "block",
            style: "normal",
            children: [
              {
                _key: "c8",
                _type: "span",
                text: "Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@clubreal.at",
              },
            ],
          },
        ],
      },
    ],
  },

  // Members
  {
    _type: "member",
    name: "Dr. Walter-Wolfgang Reichling",
    role: "Vereinsobmann",
    specialization: "Wohnimmobilien, Zinshäuser, Gewerbeobjekte",
    order: 1,
    links: [
      { _key: "l1", type: "website" },
      { _key: "l2", type: "justiz" },
    ],
  },
  {
    _type: "member",
    name: "Mag. Elisabeth Kramer",
    role: "Ordentliches Mitglied",
    specialization: "Hausverwaltung, Mietrecht, Betriebskosten",
    order: 2,
    links: [{ _key: "l1", type: "justiz" }],
  },
  {
    _type: "member",
    name: "Mag. Stefan Weber, MBA",
    role: "Ordentliches Mitglied",
    specialization: "Projektentwicklung, Bauträger, Investmentimmobilien",
    order: 3,
    links: [
      { _key: "l1", type: "website" },
      { _key: "l2", type: "linkedin" },
    ],
  },
  {
    _type: "member",
    name: "DI Matthias Grosse, MA",
    role: "Ordentliches Mitglied",
    specialization: "Immobiliendaten, Marktanalysen, Bewertungsmodelle",
    order: 4,
    links: [
      { _key: "l1", type: "website" },
      { _key: "l2", type: "justiz" },
      { _key: "l3", type: "linkedin" },
    ],
  },
  {
    _type: "member",
    name: "Ing. Thomas Hofer",
    role: "Ordentliches Mitglied",
    specialization: "Gebäudetechnik, Industrieimmobilien, Sanierung",
    order: 5,
    links: [
      { _key: "l1", type: "website" },
      { _key: "l2", type: "justiz" },
    ],
  },
  {
    _type: "member",
    name: "DI Anna Berger",
    role: "Ordentliches Mitglied",
    specialization: "Land- und Forstwirtschaft, Grundstücksbewertung",
    order: 6,
    links: [{ _key: "l1", type: "justiz" }],
  },
];

async function seed() {
  console.log("Seeding Sanity with content...\n");

  for (const doc of documents) {
    try {
      if (doc._id) {
        await client.createOrReplace(doc);
        console.log(`✓ ${doc._type}: ${doc._id}`);
      } else {
        const result = await client.create(doc);
        console.log(`✓ ${doc._type}: ${result._id} (${doc.name || ""})`);
      }
    } catch (err) {
      console.error(`✗ ${doc._type}: ${err.message}`);
    }
  }

  console.log("\nDone!");
}

seed();
