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

export const warumPage = defineType({
  name: 'warumPage',
  title: 'Warum Club Real',
  type: 'document',
  fields: [
    defineField({ name: 'heroBadge', title: 'Hero: Badge-Text', type: 'string' }),
    defineField({ name: 'heroHeading', title: 'Hero: Überschrift', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero: Text', type: 'text', rows: 3 }),
    defineField({ name: 'benefitsLabel', title: 'Vorteile: Kicker', type: 'string' }),
    defineField({ name: 'benefitsHeading', title: 'Vorteile: Überschrift', type: 'string' }),
    defineField({
      name: 'benefits',
      title: 'Vorteile',
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
    defineField({ name: 'ctaLabel', title: 'CTA: Kicker', type: 'string' }),
    defineField({ name: 'ctaHeading', title: 'CTA: Überschrift', type: 'string' }),
    defineField({ name: 'ctaBody', title: 'CTA: Text', type: 'text', rows: 4 }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA: Button-Text', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Warum Club Real' }) },
});
