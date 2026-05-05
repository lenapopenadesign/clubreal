import { defineType, defineField } from 'sanity';

export const statutenPage = defineType({
  name: 'statutenPage',
  title: 'Statuten',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero: Überschrift', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero: Text', type: 'text', rows: 3 }),
    defineField({ name: 'pdfUrl', title: 'PDF-Link (URL)', type: 'url' }),
    defineField({ name: 'pdfButtonLabel', title: 'PDF: Button-Text', type: 'string' }),
    defineField({
      name: 'sections',
      title: 'Paragraphen',
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
            rows: 8,
          }),
        ],
        preview: { select: { title: 'heading' } },
      }],
    }),
    defineField({ name: 'footerNote', title: 'Fußnote', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Statuten' }) },
});
