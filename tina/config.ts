import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? 'main',
  clientId: process.env.TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: { mediaRoot: '', publicFolder: 'public' },
  },

  schema: {
    collections: [
      {
        name: 'homePage',
        label: 'Startseite',
        path: 'content/pages',
        format: 'json',
        match: { include: 'home' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero: Überschrift' },
        ],
      },
    ],
  },
});
