import { defineType, defineField } from 'sanity';

export const datenschutzPage = defineType({
  name: 'datenschutzPage',
  title: 'Datenschutzerklärung',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero: Überschrift', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero: Text', type: 'text', rows: 2 }),
    defineField({
      name: 'sections',
      title: 'Abschnitte',
      type: 'array',
      of: [{
        type: 'object',
        name: 'section',
        fields: [
          defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
          defineField({
            name: 'body',
            title: 'Text (eine Zeile = ein Absatz)',
            type: 'text',
            rows: 6,
          }),
        ],
        preview: { select: { title: 'heading' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Datenschutzerklärung' }) },
});
