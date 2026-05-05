import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'vrdrksfe',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export interface MemberLink {
  _key: string;
  type: 'website' | 'justiz' | 'linkedin';
  url: string;
}

export interface Member {
  _id: string;
  name: string;
  role: string;
  location: string;
  links: MemberLink[];
}

export interface CardItem {
  _key: string;
  icon: string;
  title: string;
  description: string;
}

export interface PageSection {
  _key: string;
  heading: string;
  body: string;
}

export interface HomePage {
  heroHeading: string;
  heroSubtext: string;
  heroCta: string;
  featuresLabel: string;
  featuresHeading: string;
  featuresSubtext: string;
  features: CardItem[];
  missionLabel: string;
  missionHeading: string;
  missionBody: string;
  missionQuote: string;
}

export interface WarumPage {
  heroBadge: string;
  heroHeading: string;
  heroSubtext: string;
  benefitsLabel: string;
  benefitsHeading: string;
  benefits: CardItem[];
  ctaLabel: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButtonLabel: string;
}

export interface CrsvPage {
  heroHeading: string;
  heroSubtext: string;
  valuesIntro: string;
  values: CardItem[];
  legalText: string;
}

export interface KontaktPage {
  heroHeading: string;
  heroBody: string;
}

export interface DatenschutzPage {
  heroHeading: string;
  heroSubtext: string;
  sections: PageSection[];
}

export interface ImpressumPage {
  heroHeading: string;
  heroSubtext: string;
  sections: PageSection[];
}

export interface StatutenPage {
  heroHeading: string;
  heroSubtext: string;
  pdfUrl: string;
  pdfButtonLabel: string;
  sections: PageSection[];
  footerNote: string;
}

export async function getMembers(): Promise<Member[]> {
  return sanityClient.fetch(
    `*[_type == "member"] | order(name asc) {
      _id,
      name,
      role,
      location,
      links[] { _key, type, url }
    }`
  );
}

export async function getHomePage(): Promise<HomePage | null> {
  return sanityClient.fetch(
    `*[_type == "homePage"][0] {
      heroHeading, heroSubtext, heroCta,
      featuresLabel, featuresHeading, featuresSubtext,
      features[] { _key, icon, title, description },
      missionLabel, missionHeading, missionBody, missionQuote
    }`
  );
}

export async function getWarumPage(): Promise<WarumPage | null> {
  return sanityClient.fetch(
    `*[_type == "warumPage"][0] {
      heroBadge, heroHeading, heroSubtext,
      benefitsLabel, benefitsHeading,
      benefits[] { _key, icon, title, description },
      ctaLabel, ctaHeading, ctaBody, ctaButtonLabel
    }`
  );
}

export async function getCrsvPage(): Promise<CrsvPage | null> {
  return sanityClient.fetch(
    `*[_type == "crsvPage"][0] {
      heroHeading, heroSubtext, valuesIntro,
      values[] { _key, icon, title, description },
      legalText
    }`
  );
}

export async function getKontaktPage(): Promise<KontaktPage | null> {
  return sanityClient.fetch(
    `*[_type == "kontaktPage"][0] { heroHeading, heroBody }`
  );
}

export async function getDatenschutzPage(): Promise<DatenschutzPage | null> {
  return sanityClient.fetch(
    `*[_type == "datenschutzPage"][0] {
      heroHeading, heroSubtext,
      sections[] { _key, heading, body }
    }`
  );
}

export async function getImpressumPage(): Promise<ImpressumPage | null> {
  return sanityClient.fetch(
    `*[_type == "impressumPage"][0] {
      heroHeading, heroSubtext,
      sections[] { _key, heading, body }
    }`
  );
}

export async function getStatutenPage(): Promise<StatutenPage | null> {
  return sanityClient.fetch(
    `*[_type == "statutenPage"][0] {
      heroHeading, heroSubtext, pdfUrl, pdfButtonLabel,
      sections[] { _key, heading, body },
      footerNote
    }`
  );
}
