import { images } from "@/data/images";

export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "family-law",
    title: "Family Law",
    summary: "Khula, nikah nama disputes, and child custody handled with discretion.",
    description:
      "From khula and mubarat to maintenance and custody matters before the Family Court, we guide clients through Pakistan's family law system with compassion and a clear plan, protecting both dignity and legal rights.",
    image: images.clientConsultation,
  },
  {
    slug: "property-law",
    title: "Property & Land Disputes",
    summary: "Registry verification, possession disputes, and inheritance cases.",
    description:
      "We handle fard-e-malkiat verification, illegal possession (qabza) cases, registry fraud, and inheritance (wirasat) disputes across Lahore and Punjab, so your property stays legally protected.",
    image: images.signingDocument,
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    summary: "FIR quashing, bail matters, and defense before Sessions Court.",
    description:
      "Aggressive representation from FIR registration through bail, trial, and appeal — including cyber crime cases before the FIA — for clients across Lahore and surrounding districts.",
    image: images.gavelOnMarble,
  },
  {
    slug: "corporate-law",
    title: "Corporate & Business Law",
    summary: "SECP company registration, contracts, and commercial disputes.",
    description:
      "SECP incorporation, partnership deeds, commercial contract drafting, and recovery suits for businesses and startups operating in Pakistan.",
    image: images.handshakeCloseup,
  },
];
