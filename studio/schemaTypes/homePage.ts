import { defineType, defineField } from 'sanity';

const iconOptions = [
  { title: 'Klemmbrett', value: 'clipboardList' },
  { title: 'Gebäude', value: 'building2' },
  { title: 'Haus', value: 'house' },
  { title: 'Bauhelm', value: 'hardHat' },
  { title: 'Personen', value: 'users' },
  { title: 'Sprechblase', value: 'messageSquare' },
  { title: 'Trend aufwärts', value: 'trendingUp' },
  { title: 'Kalender', value: 'calendar' },
  { title: 'Herz', value: 'heart' },
  { title: 'Handshake', value: 'heartHandshake' },
  { title: 'Schild', value: 'shieldCheck' },
];

export const homePage = defineType({
  name: 'homePage',
  title: 'Startseite',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero: Überschrift', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero: Text', type: 'text', rows: 3 }),
    defineField({ name: 'heroCta', title: 'Hero: Button-Text', type: 'string' }),
    defineField({ name: 'featuresLabel', title: 'Features: Kicker', type: 'string' }),
    defineField({ name: 'featuresHeading', title: 'Features: Überschrift', type: 'string' }),
    defineField({ name: 'featuresSubtext', title: 'Features: Beschreibung', type: 'text', rows: 3 }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Icon', type: 'string', options: { list: iconOptions } }),
          defineField({ name: 'title', title: 'Titel', type: 'string' }),
          defineField({ name: 'description', title: 'Beschreibung', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'title' } },
      }],
    }),
    defineField({ name: 'missionLabel', title: 'Mission: Kicker', type: 'string' }),
    defineField({ name: 'missionHeading', title: 'Mission: Überschrift', type: 'string' }),
    defineField({ name: 'missionBody', title: 'Mission: Text', type: 'text', rows: 4 }),
    defineField({ name: 'missionQuote', title: 'Mission: Zitat', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Startseite' }) },
});
