import { defineType, defineField } from "sanity";

export const crsvPage = defineType({
  name: "crsvPage",
  title: "CRSV Seite",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Titel",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Untertitel",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "introText",
      title: "Einleitungstext",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "legalText",
      title: "Rechtstext",
      type: "text",
      rows: 4,
    }),
  ],
});
