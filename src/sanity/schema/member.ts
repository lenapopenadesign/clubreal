import { defineType, defineField } from "sanity";

export const member = defineType({
  name: "member",
  title: "Mitglied",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Rolle",
      type: "string",
    }),
    defineField({
      name: "specialization",
      title: "Spezialisierung",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "type",
              title: "Typ",
              type: "string",
              options: {
                list: [
                  { title: "Website", value: "website" },
                  { title: "Justiz-Liste", value: "justiz" },
                  { title: "LinkedIn", value: "linkedin" },
                ],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
