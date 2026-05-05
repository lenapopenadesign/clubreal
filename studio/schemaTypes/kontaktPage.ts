import { defineType, defineField } from 'sanity';

export const kontaktPage = defineType({
  name: 'kontaktPage',
  title: 'Kontakt / Mitglied werden',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero: Überschrift', type: 'string' }),
    defineField({ name: 'heroBody', title: 'Hero: Text', type: 'text', rows: 5 }),
  ],
  preview: { prepare: () => ({ title: 'Kontakt / Mitglied werden' }) },
});
