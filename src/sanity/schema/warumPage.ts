import { defineType, defineField } from "sanity";

export const warumPage = defineType({
  name: "warumPage",
  title: "Warum Club Real",
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
      name: "ctaTitle",
      title: "CTA Titel",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "text",
      rows: 3,
    }),
  ],
});
