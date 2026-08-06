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
    slug: "personal-injury",
    title: "Personal Injury",
    summary: "Free consultation. No fees unless we win.",
    description:
      "We fight for full compensation after accidents, negligence, and injury caused by others. Our team has recovered over $42M for injured clients across Riverside County.",
    image: images.handshake,
  },
  {
    slug: "family-law",
    title: "Family Law",
    summary: "Compassionate guidance through your family's hardest chapter.",
    description:
      "Divorce, custody, and support handled with clarity, discretion, and a steady hand. We help families move forward with a plan they can live with.",
    image: images.meetingRoom,
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    summary: "A fighter in your corner when everything is on the line.",
    description:
      "Aggressive, experienced defense from arrest through trial and appeal. We've defended clients in over 300 criminal matters across Southern California.",
    image: images.gavelCloseup,
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    summary: "Protect what you've built for the people you love.",
    description:
      "Wills, trusts, and succession planning tailored to your family and assets, so your wishes are honored without unnecessary cost or delay.",
    image: images.bookshelf,
  },
];
