import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { warumPage } from "./warumPage";
import { crsvPage } from "./crsvPage";
import { member } from "./member";
import { statutenPage } from "./statutenPage";
import { impressumPage } from "./impressumPage";
import { datenschutzPage } from "./datenschutzPage";
import { kontaktPage } from "./kontaktPage";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  homePage,
  warumPage,
  crsvPage,
  member,
  statutenPage,
  impressumPage,
  datenschutzPage,
  kontaktPage,
  siteSettings,
];
