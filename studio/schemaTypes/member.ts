import { defineType, defineField } from 'sanity';

export const member = defineType({
  name: 'member',
  title: 'Mitglied',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rolle',
      type: 'string',
      options: {
        list: [
          { title: 'Ordentliches Mitglied', value: 'Ordentliches Mitglied' },
          { title: 'Ehrenmitglied', value: 'Ehrenmitglied' },
          { title: 'Vorstand (Obmann)', value: 'Vorstand (Obmann)' },
          { title: 'Vorstand (Obmann Stv.)', value: 'Vorstand (Obmann Stv.)' },
          { title: 'Vorstand (Schriftführer)', value: 'Vorstand (Schriftführer)' },
          { title: 'Vorstand (Kassierin)', value: 'Vorstand (Kassierin)' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Bundesland / Region',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Typ',
              type: 'string',
              options: {
                list: [
                  { title: 'Website', value: 'website' },
                  { title: 'SV Liste Justiz', value: 'justiz' },
                  { title: 'LinkedIn', value: 'linkedin' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
          preview: {
            select: { title: 'type', subtitle: 'url' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
  orderings: [
    {
      title: 'Name A–Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
});
