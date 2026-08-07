import { BlogPost } from "@/types";
import { images } from "@/data/images";

export const blogPosts: (BlogPost & { body: string; image: string })[] = [
  {
    slug: "how-to-file-khula-in-pakistan",
    title: "How to File for Khula in Pakistan: A Step-by-Step Guide",
    excerpt: "What the Family Court process actually looks like, from petition to decree.",
    date: "2026-07-01",
    image: images.officeDesk,
    body: "Filing for khula begins with a petition before the Family Court under the Family Courts Act, 1964. After the first hearing, the court typically refers the matter for reconciliation before proceeding to evidence and a final decree — most straightforward cases conclude within a few months. Speaking with an advocate before filing helps protect maintenance and custody rights from the outset.",
  },
  {
    slug: "property-verification-before-buying",
    title: "5 Documents to Verify Before Buying Property in Pakistan",
    excerpt: "Protect yourself from registry fraud and disputed possession claims.",
    date: "2026-06-15",
    image: images.lawBooksGavel,
    body: "Before any advance payment, verify the fard-e-malkiat, non-encumbrance certificate, latest tax receipts, approved site plan, and a fresh mutation record from the relevant Land Revenue office. A short legal due-diligence review before registry can save years of litigation later.",
  },
  {
    slug: "what-to-do-after-fir-registered",
    title: "An FIR Has Been Registered Against You — What Now?",
    excerpt: "The first 48 hours matter most for bail and defense strategy.",
    date: "2026-05-22",
    image: images.courthouseColumns,
    body: "Once an FIR is registered, do not record a statement without counsel present. Depending on the offense, pre-arrest or post-arrest bail may be available before the Sessions Court or High Court. Early legal advice materially changes the outcome of a criminal matter in Pakistan's courts.",
  },
];
