export type Testimonial = {
  name: string;
  quote: string;
  context?: string;
};

export type CaseResult = {
  title: string;
  amount: string;
  summary: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};
