import { defineConfig } from 'tinacms';

const iconOptions = [
  { label: 'Klemmbrett', value: 'clipboardList' },
  { label: 'Gebäude', value: 'building2' },
  { label: 'Haus', value: 'house' },
  { label: 'Bauhelm', value: 'hardHat' },
  { label: 'Personen', value: 'users' },
  { label: 'Sprechblase', value: 'messageSquare' },
  { label: 'Trend aufwärts', value: 'trendingUp' },
  { label: 'Kalender', value: 'calendar' },
  { label: 'Herz', value: 'heart' },
  { label: 'Handshake', value: 'heartHandshake' },
  { label: 'Schild', value: 'shieldCheck' },
];

const cardFields = [
  { type: 'string' as const, name: 'icon', label: 'Icon', options: iconOptions },
  { type: 'string' as const, name: 'title', label: 'Titel' },
  { type: 'string' as const, name: 'description', label: 'Beschreibung', ui: { component: 'textarea' as const } },
];

const sectionFields = [
  { type: 'string' as const, name: 'heading', label: 'Überschrift' },
  { type: 'string' as const, name: 'body', label: 'Text', ui: { component: 'textarea' as const } },
];

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? 'main',
  clientId: process.env.TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: { mediaRoot: '', publicFolder: 'public' },
  },

  schema: {
    collections: [
      {
        name: 'homePage',
        label: 'Startseite',
        path: 'content/pages',
        format: 'json',
        match: { include: 'home' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift' },
          { type: 'string', name: 'heroSubtext', label: 'Hero: Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'heroCta', label: 'Hero: Button-Text' },
          { type: 'string', name: 'featuresLabel', label: 'Features: Kicker' },
          { type: 'string', name: 'featuresHeading', label: 'Features: Überschrift' },
          { type: 'string', name: 'featuresSubtext', label: 'Features: Beschreibung', ui: { component: 'textarea' } },
          { type: 'object', name: 'features', label: 'Features', list: true, ui: { itemProps: (item) => ({ label: item.title }) }, fields: cardFields },
          { type: 'string', name: 'missionLabel', label: 'Mission: Kicker' },
          { type: 'string', name: 'missionHeading', label: 'Mission: Überschrift' },
          { type: 'string', name: 'missionBody', label: 'Mission: Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'missionQuote', label: 'Mission: Zitat' },
        ],
      },

      {
        name: 'warumPage',
        label: 'Warum Club Real',
        path: 'content/pages',
        format: 'json',
        match: { include: 'warum' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroBadge', label: 'Hero: Badge-Text' },
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift' },
          { type: 'string', name: 'heroSubtext', label: 'Hero: Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'benefitsLabel', label: 'Vorteile: Kicker' },
          { type: 'string', name: 'benefitsHeading', label: 'Vorteile: Überschrift' },
          { type: 'object', name: 'benefits', label: 'Vorteile', list: true, ui: { itemProps: (item) => ({ label: item.title }) }, fields: cardFields },
          { type: 'string', name: 'ctaLabel', label: 'CTA: Kicker' },
          { type: 'string', name: 'ctaHeading', label: 'CTA: Überschrift', ui: { component: 'textarea' } },
          { type: 'string', name: 'ctaBody', label: 'CTA: Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'ctaButtonLabel', label: 'CTA: Button-Text' },
        ],
      },

      {
        name: 'crsvPage',
        label: 'CRSV',
        path: 'content/pages',
        format: 'json',
        match: { include: 'crsv' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift', ui: { component: 'textarea' } },
          { type: 'string', name: 'heroSubtext', label: 'Hero: Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'valuesIntro', label: 'Werte: Einleitung', ui: { component: 'textarea' } },
          { type: 'object', name: 'values', label: 'Werte', list: true, ui: { itemProps: (item) => ({ label: item.title }) }, fields: cardFields },
          { type: 'string', name: 'legalText', label: 'Rechtstext', ui: { component: 'textarea' } },
        ],
      },

      {
        name: 'kontaktPage',
        label: 'Kontakt / Mitglied werden',
        path: 'content/pages',
        format: 'json',
        match: { include: 'kontakt' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift' },
          { type: 'string', name: 'heroBody', label: 'Hero: Text', ui: { component: 'textarea' } },
        ],
      },

      {
        name: 'datenschutzPage',
        label: 'Datenschutzerklärung',
        path: 'content/pages',
        format: 'json',
        match: { include: 'datenschutz' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift' },
          { type: 'string', name: 'heroSubtext', label: 'Hero: Text', ui: { component: 'textarea' } },
          { type: 'object', name: 'sections', label: 'Abschnitte', list: true, ui: { itemProps: (item) => ({ label: item.heading }) }, fields: sectionFields },
        ],
      },

      {
        name: 'impressumPage',
        label: 'Impressum',
        path: 'content/pages',
        format: 'json',
        match: { include: 'impressum' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift' },
          { type: 'string', name: 'heroSubtext', label: 'Hero: Text', ui: { component: 'textarea' } },
          { type: 'object', name: 'sections', label: 'Abschnitte', list: true, ui: { itemProps: (item) => ({ label: item.heading }) }, fields: sectionFields },
        ],
      },

      {
        name: 'statutenPage',
        label: 'Statuten',
        path: 'content/pages',
        format: 'json',
        match: { include: 'statuten' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift' },
          { type: 'string', name: 'heroSubtext', label: 'Hero: Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'pdfUrl', label: 'PDF-Link' },
          { type: 'string', name: 'pdfButtonLabel', label: 'PDF: Button-Text' },
          { type: 'object', name: 'sections', label: 'Paragraphen', list: true, ui: { itemProps: (item) => ({ label: item.heading }) }, fields: sectionFields },
          { type: 'string', name: 'footerNote', label: 'Fußnote' },
        ],
      },

      {
        name: 'membersDoc',
        label: 'Mitglieder',
        path: 'content',
        format: 'json',
        match: { include: 'members' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: 'object',
            name: 'members',
            label: 'Mitglieder',
            list: true,
            ui: { itemProps: (item) => ({ label: item.name }) },
            fields: [
              { type: 'string', name: 'name', label: 'Name' },
              {
                type: 'string',
                name: 'role',
                label: 'Rolle',
                options: [
                  { label: 'Ordentliches Mitglied', value: 'Ordentliches Mitglied' },
                  { label: 'Ehrenmitglied', value: 'Ehrenmitglied' },
                  { label: 'Vorstand (Obmann)', value: 'Vorstand (Obmann)' },
                  { label: 'Vorstand (Obmann Stv.)', value: 'Vorstand (Obmann Stv.)' },
                  { label: 'Vorstand (Schriftführer)', value: 'Vorstand (Schriftführer)' },
                  { label: 'Vorstand (Kassierin)', value: 'Vorstand (Kassierin)' },
                ],
              },
              { type: 'string', name: 'location', label: 'Bundesland' },
              {
                type: 'object',
                name: 'links',
                label: 'Links',
                list: true,
                ui: { itemProps: (item) => ({ label: item.type }) },
                fields: [
                  {
                    type: 'string',
                    name: 'type',
                    label: 'Typ',
                    options: [
                      { label: 'Website', value: 'website' },
                      { label: 'SV Liste Justiz', value: 'justiz' },
                      { label: 'LinkedIn', value: 'linkedin' },
                    ],
                  },
                  { type: 'string', name: 'url', label: 'URL' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
