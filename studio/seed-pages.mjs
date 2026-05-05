import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'vrdrksfe',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const key = () => Math.random().toString(36).slice(2);

const pages = [
  {
    _id: 'homePage',
    _type: 'homePage',
    heroHeading: 'Willkommen beim Club Real',
    heroSubtext: 'Dem Netzwerk engagierter Immobilien-Sachverständiger in Österreich.\nRund 35 Expertinnen und Experten – vereint durch höchste fachliche Ansprüche.',
    heroCta: 'Mehr erfahren',
    featuresLabel: 'Unsere Stärke',
    featuresHeading: 'Fachlich fundiert. Menschlich verbindend.',
    featuresSubtext: 'Als Zusammenschluss von Expertinnen und Experten aus unterschiedlichen Bereichen des Immobilienwesens stehen wir für Fachkompetenz, Erfahrung und kollegialen Austausch.',
    features: [
      { _key: key(), icon: 'clipboardList', title: 'Bewertung', description: 'Unabhängige und fachlich fundierte Wertermittlung mit Blick für Markt, Substanz und Nutzung.' },
      { _key: key(), icon: 'building2', title: 'Maklerei', description: 'Umfassende Marktkenntnis und Bewertungskompetenz aus der täglichen Praxis.' },
      { _key: key(), icon: 'house', title: 'Hausverwaltung', description: 'Praxisnahe Expertise in Verwaltung, Instandhaltung und Werterhaltung von Immobilien.' },
      { _key: key(), icon: 'hardHat', title: 'Projektentwicklung', description: 'Von der Planung bis zur Umsetzung – strategische Projektbegleitung mit Weitblick.' },
    ],
    missionLabel: 'Unsere Mission',
    missionHeading: 'Wir schaffen Raum für fachlichen wie persönlichen Austausch.',
    missionBody: 'Wir pflegen hohe Qualitätsstandards und stärken die Gemeinschaft der Immobilien-Sachverständigen in Österreich. Durch regelmäßigen Austausch, gemeinsame Veranstaltungen und kollegiale Zusammenarbeit fördern wir Exzellenz in der Bewertungspraxis.',
    missionQuote: 'Qualität entsteht im Dialog – nicht im Alleingang.',
  },

  {
    _id: 'warumPage',
    _type: 'warumPage',
    heroBadge: 'Unser Angebot',
    heroHeading: 'Gemeinsam mehr erreichen',
    heroSubtext: 'Der Immobilienmarkt wird komplexer. Umso wichtiger ist ein starkes Netzwerk, das Wissen teilt, Standards setzt und Kollegialität lebt.',
    benefitsLabel: 'Ihre Vorteile',
    benefitsHeading: 'Was Club Real Ihnen bietet',
    benefits: [
      { _key: key(), icon: 'users', title: 'Netzwerk', description: 'Zugang zu einem exklusiven Kreis von qualifizierten Immobilien-Sachverständigen in ganz Österreich.' },
      { _key: key(), icon: 'messageSquare', title: 'Plattform', description: 'Eine Plattform für fachlichen Austausch, Diskussion und die gemeinsame Weiterentwicklung von Bewertungsstandards.' },
      { _key: key(), icon: 'trendingUp', title: 'Weiterentwicklung', description: 'Fachliche und persönliche Weiterbildung durch Vorträge, Workshops und den kollegialen Erfahrungsaustausch.' },
      { _key: key(), icon: 'calendar', title: 'Veranstaltungen', description: 'Regelmäßige Events, Fachtagungen und gesellige Treffen stärken den Zusammenhalt und erweitern den Horizont.' },
      { _key: key(), icon: 'heart', title: 'Gemeinschaft', description: 'Ein Verein, der nicht nur fachlich, sondern auch menschlich verbindet – mit echtem Zusammenhalt und gegenseitigem Respekt.' },
    ],
    ctaLabel: 'Werden Sie Teil von Club Real',
    ctaHeading: 'Wissen teilen. Haltung zeigen.\nGemeinsam wachsen.',
    ctaBody: 'Wir sind Profis – und eine Gemeinschaft, die fachliche Exzellenz mit Begeisterung verbindet. Der Club Real wird von Menschen getragen, die professionelle Integrität leben und kollegialen Austausch schätzen.',
    ctaButtonLabel: 'Jetzt Kontakt aufnehmen',
  },

  {
    _id: 'crsvPage',
    _type: 'crsvPage',
    heroHeading: 'CRSV – Club Real\nSachverständiger',
    heroSubtext: 'Die CRSV-Zertifizierung steht für Qualität, Verantwortung und Engagement.',
    valuesIntro: 'Nur Mitglieder des Club Real können den Titel CRSV erwerben – eine Auszeichnung, die zeigt:',
    values: [
      { _key: key(), icon: 'heartHandshake', title: 'Verbundenheit', description: 'Verbundenheit mit den Vereinszielen und der Gemeinschaft der Sachverständigen.' },
      { _key: key(), icon: 'trendingUp', title: 'Engagement', description: 'Engagement für fachliche und persönliche Weiterentwicklung als Sachverständiger.' },
      { _key: key(), icon: 'shieldCheck', title: 'Verantwortung', description: 'Verantwortung für hohe Qualitäts- und Ethikstandards in der Immobilienbewertung.' },
    ],
    legalText: 'Die Zertifizierung dokumentiert im Sinne des § 1299 ABGB das öffentliche Bekenntnis zu einem Beruf und zu einem hohen Qualitätsbewusstsein. Sie setzt ein klares qualitatives Selbstverständnis, die Bereitschaft zu kontinuierlicher fachlicher Weiterentwicklung sowie ein gelebtes Miteinander im Verein voraus.',
  },

  {
    _id: 'kontaktPage',
    _type: 'kontaktPage',
    heroHeading: 'Mitglied werden',
    heroBody: 'Sie sind Immobilien-Sachverständige oder Immobilien-Sachverständiger in Österreich und möchten Teil eines starken Netzwerks werden? Gerne lernen wir Sie in einem unverbindlichen Erstgespräch persönlich kennen und geben Ihnen Einblick in den Club Real. Füllen Sie einfach das Formular aus – wir melden uns bei Ihnen.',
  },

  {
    _id: 'datenschutzPage',
    _type: 'datenschutzPage',
    heroHeading: 'Datenschutzerklärung',
    heroSubtext: 'Informationen zum Schutz Ihrer personenbezogenen Daten gemäß der Datenschutz-Grundverordnung (DSGVO).',
    sections: [
      { _key: key(), heading: 'Verantwortlicher', body: 'CLUB REAL Immobiliensachverständige\nZVR-Zahl: 469893173\nc/o Immobilienverwaltung Mag. Christian Krenauer GmbH\nMariahilfer Straße 57-59/14\n1060 Wien, Österreich\nE-Mail: willkommen@clubreal.at' },
      { _key: key(), heading: 'Erhebung und Verarbeitung personenbezogener Daten', body: 'Beim Besuch unserer Website werden automatisch technische Informationen erfasst, die Ihr Browser an unseren Server übermittelt. Dazu gehören IP-Adresse, Browsertyp und -version, Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage und die aufgerufene Seite. Diese Daten werden ausschließlich zur Sicherstellung eines reibungslosen Betriebs der Website verwendet und nicht mit anderen Datenquellen zusammengeführt.' },
      { _key: key(), heading: 'Zweck der Datenverarbeitung', body: 'Wir verarbeiten personenbezogene Daten ausschließlich zur Bereitstellung und Verbesserung unserer Website, zur Beantwortung von Kontaktanfragen sowie zur Erfüllung vereinsinterner Verwaltungsaufgaben.' },
      { _key: key(), heading: 'Rechtsgrundlage', body: 'Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung einer funktionsfähigen Website).' },
      { _key: key(), heading: 'Speicherdauer', body: 'Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben. Nach Ablauf der Fristen werden die Daten routinemäßig gelöscht.' },
      { _key: key(), heading: 'Ihre Rechte', body: 'Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, auf Berichtigung unrichtiger Daten, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung. Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Österreichische Datenschutzbehörde) zu.' },
      { _key: key(), heading: 'Cookies', body: 'Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Tracking- oder Analyse-Cookies eingesetzt.' },
      { _key: key(), heading: 'Kontakt für Datenschutzanfragen', body: 'Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an: willkommen@clubreal.at' },
    ],
  },

  {
    _id: 'impressumPage',
    _type: 'impressumPage',
    heroHeading: 'Impressum',
    heroSubtext: 'Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz.',
    sections: [
      { _key: key(), heading: 'Verein', body: 'CLUB REAL Immobiliensachverständige\nZVR-Zahl: 469893173' },
      { _key: key(), heading: 'Vereinssitz', body: 'c/o Immobilienverwaltung Mag. Christian Krenauer GmbH\nMariahilfer Straße 57-59/14\n1060 Wien, Österreich' },
      { _key: key(), heading: 'Vereinsobmann', body: 'Dr. Walter-Wolfgang Reichling' },
      { _key: key(), heading: 'Kontakt', body: 'E-Mail: willkommen@clubreal.at' },
      { _key: key(), heading: 'Haftungsausschluss', body: 'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht.' },
      { _key: key(), heading: 'Urheberrecht', body: 'Die durch den Verein erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Vereins.' },
    ],
  },

  {
    _id: 'statutenPage',
    _type: 'statutenPage',
    heroHeading: 'Statuten des Vereins',
    heroSubtext: 'Die Grundlage unseres Vereinslebens – transparent und verbindlich für alle Mitglieder.\nBeschlossen in der Generalversammlung am 11.3.2025.',
    pdfUrl: 'https://clubreal.at/Club%20Real%20Vereinsstatuten%202025%20(aktuell).pdf',
    pdfButtonLabel: 'PDF herunterladen',
    sections: [
      { _key: key(), heading: '§ 1: Name, Sitz und Tätigkeitsbereich', body: '(1) Der Verein führt den Namen „CLUB REAL IMMOBILIENSACHVERSTÄNDIGE".\n(2) Er hat seinen Sitz in Wien und erstreckt seine Tätigkeit auf ganz Österreich.\n(3) Die Errichtung von Zweigvereinen ist zulässig.' },
      { _key: key(), heading: '§ 2: Zweck', body: 'Der Verein, dessen Tätigkeit nicht auf Gewinn gerichtet ist, bezweckt die Erhaltung und Verbesserung der Qualitätsstandards im gesamten Leistungsbild der Immobilientreuhänder und Immobiliengutachter und des ethischen Verhaltens im Immobilienwesen in Österreich.' },
      { _key: key(), heading: '§ 3: Mittel zur Erreichung des Vereinszwecks', body: '(1) Der Vereinszweck soll durch die in den Abs. 2 und 3 angeführten ideellen und materiellen Mittel erreicht werden.\n(2) Als ideelle Mittel dienen: Regelmäßige Sitzungen; Veranstaltungen zur Weiterbildung; Pflege eines vereinsinternen Qualitätssicherungssystems für Sachverständige; Diskussionsrunden und Arbeitskreise; Vorträge von Vereinsmitgliedern und anderen Experten; Abhalten von Exkursionen; Publikationen.\n(3) Die erforderlichen materiellen Mittel sollen aufgebracht werden durch: Beitrittsgebühren und Mitgliedsbeiträge; Erträgnisse (aus Veranstaltungen, Publikationen etc.); Spenden, Vermächtnisse und Sammlungen.' },
      { _key: key(), heading: '§ 4: Arten der Mitgliedschaft', body: '(1) Die Mitglieder des Vereins gliedern sich in ordentliche, außerordentliche und Ehrenmitglieder.\n(2) Ordentliche Mitglieder sind jene, die sich voll an der Vereinsarbeit beteiligen. Außerordentliche Mitglieder sind solche, die die Vereinstätigkeit – vor allem durch Geldmittel – fördern. Ehrenmitglieder sind Personen, die wegen besonderer Verdienste um den Verein zu solchen ernannt werden.' },
      { _key: key(), heading: '§ 5: Erwerb der Mitgliedschaft', body: '(1) Ordentliche Mitglieder des Vereins können alle physischen Personen werden, die sich zu den Zielen des Vereines bekennen. Der Vorstand ist berechtigt, nähere Bestimmungen für Bewerbung, Anwärterstatus und Beitritt zu erlassen.\n(2) Über die Aufnahme von ordentlichen und außerordentlichen Mitgliedern entscheidet der Vorstand nach Erörterung in einer Sitzung endgültig. Der Beschluss muss einstimmig erfolgen – die Ablehnung auch nur eines Vorstandsmitglieds verhindert die Aufnahme. Die Ablehnung der Aufnahme bedarf keiner Begründung.\n(3) Außerordentliche Mitglieder haben ein Fragerecht an den Vorstand und das Recht, bei der Generalversammlung oder zur Tagesordnung Anträge einzubringen.\n(4) Die Ernennung zum Ehrenmitglied erfolgt auf Antrag des Vorstands durch die Generalversammlung.' },
      { _key: key(), heading: '§ 6: Beendigung der Mitgliedschaft', body: '(1) Die Mitgliedschaft erlischt durch Tod, durch freiwilligen Austritt und durch Ausschluss.\n(2) Der Austritt kann nur zum 31. Dezember jeden Jahres erfolgen. Er muss dem Vorstand mindestens drei Monate vorher schriftlich mitgeteilt werden.\n(3) Der Vorstand kann ein Mitglied ausschließen, wenn dieses trotz schriftlicher Mahnung unter Setzung einer 14-tägigen Nachfrist länger als sechs Monate ab Vorschreibung mit der Zahlung der Mitgliedsbeiträge im Rückstand ist.\n(4) Der Ausschluss eines Mitglieds aus dem Verein kann vom Vorstand auch wegen grober Verletzung anderer Mitgliedspflichten und wegen unehrenhaften Verhaltens verfügt werden.\n(5) Die Aberkennung der Ehrenmitgliedschaft kann aus den im Abs. 4 genannten Gründen von der Generalversammlung über Antrag des Vorstands beschlossen werden.' },
      { _key: key(), heading: '§ 7: Rechte und Pflichten der Mitglieder', body: '(1) Die Mitglieder sind berechtigt, an allen Veranstaltungen des Vereins teilzunehmen und die Einrichtungen des Vereins zu beanspruchen. Das Stimmrecht in der Generalversammlung und das Wahlrecht stehen nur den ordentlichen und den Ehrenmitgliedern zu.\n(2) Jedes Mitglied ist berechtigt, vom Vorstand die Ausfolgung der Statuten zu verlangen.\n(3) Mindestens ein Zehntel der Mitglieder kann vom Vorstand die Einberufung einer Generalversammlung verlangen.\n(4) Die Mitglieder sind in jeder Generalversammlung vom Vorstand über die Tätigkeit und finanzielle Gebarung des Vereins zu informieren.\n(5) Die Mitglieder sind vom Vorstand über den geprüften Rechnungsabschluss (Rechnungslegung) zu informieren.\n(6) Die Mitglieder sind verpflichtet, die Interessen des Vereins nach Kräften zu fördern und alles zu unterlassen, wodurch das Ansehen und der Zweck des Vereins Abbruch erleiden könnte. Sie haben die Vereinsstatuten und die Beschlüsse der Vereinsorgane zu beachten.\n(7) Die Mitglieder sind verpflichtet, sich aktiv am Vereinsleben zu beteiligen. Dazu gehört die Teilnahme an den regelmäßigen Sitzungen, Beiträge zur Fortbildung und die Bereitschaft zu fachlichen Auskünften.' },
      { _key: key(), heading: '§ 8: Vereinsorgane', body: 'Organe des Vereins sind die Generalversammlung (§§ 9 und 10), der Vorstand (§§ 11 bis 13), die Rechnungsprüfer (§ 14) und das Schiedsgericht (§ 15).' },
      { _key: key(), heading: '§ 9: Generalversammlung', body: '(1) Die Generalversammlung ist die „Mitgliederversammlung" im Sinne des Vereinsgesetzes 2002. Eine ordentliche Generalversammlung findet jährlich statt.\n(2) Eine außerordentliche Generalversammlung findet auf Beschluss des Vorstands oder der ordentlichen Generalversammlung, schriftlichen Antrag von mindestens einem Zehntel der Mitglieder, Verlangen der Rechnungsprüfer oder Beschluss eines gerichtlich bestellten Kurators binnen vier Wochen statt.\n(3) Sowohl zu den ordentlichen wie auch zu den außerordentlichen Generalversammlungen sind alle Mitglieder mindestens zwei Wochen vor dem Termin schriftlich oder per E-Mail einzuladen.\n(6) Bei der Generalversammlung sind alle Mitglieder teilnahmeberechtigt. Stimmberechtigt sind nur die ordentlichen und die Ehrenmitglieder. Jedes Mitglied hat eine Stimme.\n(7) Die Generalversammlung ist ohne Rücksicht auf die Anzahl der erschienenen Personen beschlussfähig.\n(8) Die Wahlen und die Beschlussfassungen in der Generalversammlung erfolgen in der Regel mit einfacher Mehrheit der abgegebenen gültigen Stimmen. Beschlüsse, mit denen das Statut des Vereins geändert oder der Verein aufgelöst werden soll, bedürfen einer qualifizierten Mehrheit von zwei Drittel der abgegebenen gültigen Stimmen.' },
      { _key: key(), heading: '§ 10: Aufgaben der Generalversammlung', body: 'Der Generalversammlung sind folgende Aufgaben vorbehalten: Beschlussfassung über den Voranschlag; Entgegennahme und Genehmigung des Rechenschaftsberichts und des Rechnungsabschlusses; Wahl und Enthebung der Mitglieder des Vorstands und der Rechnungsprüfer; Genehmigung von Rechtsgeschäften zwischen Rechnungsprüfern und Verein; Entlastung des Vorstands; Festsetzung der Höhe der Beitrittsgebühr und der Mitgliedsbeiträge; Verleihung und Aberkennung der Ehrenmitgliedschaft; Beschlussfassung über Statutenänderungen und die freiwillige Auflösung des Vereins.' },
      { _key: key(), heading: '§ 11: Vorstand', body: '(1) Der Vorstand besteht aus drei bis sechs Mitgliedern, und zwar aus Obmann/Obfrau allenfalls Stellvertreter/in, Schriftführer/in allenfalls Stellvertreter/in sowie Kassier/in allenfalls Stellvertreter/in.\n(2) Der Vorstand wird von der Generalversammlung gewählt.\n(3) Die Funktionsperiode eines Vorstandsmitglieds beträgt vier Jahre, eine Wiederwahl ist – auch mehrmals – möglich. Jede Funktion im Vorstand ist persönlich auszuüben.\n(5) Der Vorstand ist beschlussfähig, wenn alle seine Mitglieder eingeladen wurden und mindestens die Hälfte von ihnen anwesend ist.\n(6) Der Vorstand fasst seine Beschlüsse mit einfacher Stimmenmehrheit; bei Stimmengleichheit gibt die Stimme des/der Vorsitzenden den Ausschlag.' },
      { _key: key(), heading: '§ 12: Aufgaben des Vorstands', body: 'Dem Vorstand obliegt die Leitung des Vereins. Ihm kommen alle Aufgaben zu, die nicht durch die Statuten einem anderen Vereinsorgan zugewiesen sind. In seinen Wirkungsbereich fallen insbesondere: Einrichtung eines Rechnungswesens; Erstellung des Jahresvoranschlags, des Rechenschaftsberichts und des Rechnungsabschlusses; Vorbereitung und Einberufung der Generalversammlung; Information der Vereinsmitglieder; Verwaltung des Vereinsvermögens; Aufnahme und Ausschluss von Vereinsmitgliedern; Aufnahme und Kündigung von Angestellten des Vereins.' },
      { _key: key(), heading: '§ 13: Besondere Obliegenheiten einzelner Vorstandsmitglieder', body: '(1) Der Obmann/die Obfrau führt die laufenden Geschäfte des Vereins.\n(2) Der Obmann/die Obfrau vertritt den Verein nach außen. Schriftliche Vertretungshandlungen oder Erklärungen des Vereins bedürfen zu ihrer Gültigkeit der Unterschriften des Obmanns/der Obfrau und eines weiteren Vorstandsmitglieds.\n(7) Der/die Schriftführer/in führt die Protokolle der Generalversammlung und des Vorstands.\n(8) Der/die Kassier/in ist für die ordnungsgemäße Geldgebarung des Vereins verantwortlich.' },
      { _key: key(), heading: '§ 14: Rechnungsprüfer', body: '(1) Mindestens zwei Rechnungsprüfer werden von der Generalversammlung auf die Dauer von vier Jahren gewählt. Eine Wiederwahl ist möglich. Die Rechnungsprüfer dürfen keinem Organ – mit Ausnahme der Generalversammlung – angehören, dessen Tätigkeit Gegenstand der Prüfung ist.\n(2) Den Rechnungsprüfern obliegen die laufende Geschäftskontrolle sowie die Prüfung der Finanzgebarung des Vereins im Hinblick auf die Ordnungsmäßigkeit der Rechnungslegung und die statutengemäße Verwendung der Mittel.' },
      { _key: key(), heading: '§ 15: Schiedsgericht', body: '(1) Zur Schlichtung von allen aus dem Vereinsverhältnis entstehenden Streitigkeiten ist das vereinsinterne Schiedsgericht berufen. Es ist eine „Schlichtungseinrichtung" im Sinne des Vereinsgesetzes 2002 und kein Schiedsgericht nach den §§ 577 ff ZPO.\n(2) Das Schiedsgericht setzt sich aus drei Vereinsmitgliedern zusammen.\n(3) Das Schiedsgericht fällt seine Entscheidung nach Gewährung beiderseitigen Gehörs bei Anwesenheit aller seiner Mitglieder mit einfacher Stimmenmehrheit. Es entscheidet nach bestem Wissen und Gewissen. Seine Entscheidungen sind vereinsintern endgültig und für die Vereinsorgane bindend.' },
      { _key: key(), heading: '§ 16: Freiwillige Auflösung des Vereins', body: '(1) Die freiwillige Auflösung des Vereins kann nur in einer Generalversammlung und nur mit Zweidrittelmehrheit der abgegebenen gültigen Stimmen beschlossen werden.\n(2) Diese Generalversammlung hat auch – sofern Vereinsvermögen vorhanden ist – über die Abwicklung zu beschließen. Bei Auflösung des Vereines ist das verbleibende Vereinsvermögen für gemeinnützige oder mildtätige Zwecke im Sinne der §§ 34 ff der Bundesabgabeordnung BAO zu verwenden.' },
    ],
    footerNote: 'Vorgelegt in der Vorstandssitzung am 11.2.2025. Beschlossen in der Generalversammlung am 11.3.2025.',
  },
];

const transaction = client.transaction();
for (const page of pages) {
  transaction.createOrReplace(page);
}
const result = await transaction.commit();
console.log(`✓ Imported ${result.results.length} pages`);
