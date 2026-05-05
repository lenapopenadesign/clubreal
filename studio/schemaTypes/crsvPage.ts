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

export const crsvPage = defineType({
  name: 'crsvPage',
  title: 'CRSV',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero: Überschrift', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero: Text', type: 'text', rows: 2 }),
    defineField({ name: 'valuesIntro', title: 'Werte: Einleitung', type: 'text', rows: 2 }),
    defineField({
      name: 'values',
      title: 'Werte',
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
    defineField({ name: 'legalText', title: 'Rechtstext', type: 'text', rows: 5 }),
  ],
  preview: { prepare: () => ({ title: 'CRSV' }) },
});
