import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website-Einstellungen",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "email",
      title: "Kontakt E-Mail",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Standort",
      type: "string",
    }),
  ],
});
