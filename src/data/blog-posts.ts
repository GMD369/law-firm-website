import { BlogPost } from "@/types";
import { images } from "@/data/images";

export const blogPosts: (BlogPost & { body: string; image: string })[] = [
  {
    slug: "what-to-do-after-an-accident",
    title: "What to Do in the First 24 Hours After an Accident",
    excerpt: "The steps that protect your health, your case, and your rights.",
    date: "2026-07-01",
    image: images.officeDesk,
    body: "Seek medical attention first, document the scene, exchange information, and contact an attorney before speaking with an insurance adjuster. Insurance companies often reach out within hours of an accident — anything you say can be used to minimize your claim, so it's best to have legal guidance before that first call.",
  },
  {
    slug: "how-much-does-a-lawyer-cost",
    title: "How Much Does a Lawyer Actually Cost?",
    excerpt: "A plain-language breakdown of contingency, hourly, and flat fees.",
    date: "2026-06-15",
    image: images.lawBooksGavel,
    body: "Most personal injury cases are handled on contingency, meaning you pay nothing unless we win. Other matters, like estate planning or business formation, typically use flat or hourly fees agreed on up front — no surprises on your invoice.",
  },
  {
    slug: "choosing-the-right-attorney",
    title: "5 Questions to Ask Before Hiring an Attorney",
    excerpt: "What actually matters when comparing law firms in Riverside.",
    date: "2026-05-22",
    image: images.courthouseColumns,
    body: "Ask about trial experience, who will actually handle your case day-to-day, how they communicate, what past results look like for cases similar to yours, and how fees are structured. A firm that answers plainly, without hedging, is usually the right one.",
  },
];
