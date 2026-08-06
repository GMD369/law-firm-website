import { FaqItem } from "@/types";

const faqs: FaqItem[] = [
  {
    question: "How much does a consultation cost?",
    answer: "Nothing. Your first consultation is free and confidential.",
  },
  {
    question: "How long do I have to file a claim?",
    answer:
      "Deadlines vary by case type and state law. Contact us early so we can protect your rights.",
  },
  {
    question: "Do I pay anything if we don't win?",
    answer:
      "For personal injury cases, we work on contingency — no fee unless we recover for you.",
  },
];

export default function FAQ() {
  return (
    <section className="py-section md:py-section-lg">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
          Common Questions
        </h2>
        <div className="mt-10 divide-y divide-surface-secondary">
          {faqs.map((faq) => (
            <details key={faq.question} className="py-5 group">
              <summary className="font-accent text-sm uppercase tracking-wide text-primary cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-3 font-body text-sm text-text-muted leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
