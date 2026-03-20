import { defineType, defineField } from "sanity";

export const kontaktPage = defineType({
  name: "kontaktPage",
  title: "Mitglied werden",
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
      rows: 3,
    }),
    defineField({
      name: "successTitle",
      title: "Erfolgsmeldung Titel",
      type: "string",
    }),
    defineField({
      name: "successMessage",
      title: "Erfolgsmeldung Text",
      type: "text",
      rows: 2,
    }),
  ],
});
