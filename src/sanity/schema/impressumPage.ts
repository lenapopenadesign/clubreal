import { defineType, defineField } from "sanity";

export const impressumPage = defineType({
  name: "impressumPage",
  title: "Impressum",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Untertitel",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "sections",
      title: "Abschnitte",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Überschrift",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Inhalt",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        },
      ],
    }),
  ],
});
