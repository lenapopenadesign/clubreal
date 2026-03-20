import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Startseite",
  type: "document",
  fields: [
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "string",
    }),
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
      name: "heroImage",
      title: "Hero Hintergrundbild",
      type: "image",
    }),
    defineField({
      name: "sectionTitle",
      title: "Fachlich Fundiert – Titel",
      type: "string",
    }),
    defineField({
      name: "sectionSubtitle",
      title: "Fachlich Fundiert – Untertitel",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "missionImage",
      title: "Mission Bild",
      type: "image",
    }),
    defineField({
      name: "missionTagline",
      title: "Mission Tagline",
      type: "string",
    }),
    defineField({
      name: "missionTitle",
      title: "Mission Titel",
      type: "string",
    }),
    defineField({
      name: "missionText",
      title: "Mission Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "missionQuote",
      title: "Mission Zitat",
      type: "string",
    }),
  ],
});
