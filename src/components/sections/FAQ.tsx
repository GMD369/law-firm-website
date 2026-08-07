import { FaqItem } from "@/types";

const faqs: FaqItem[] = [
  {
    question: "How much does a consultation cost?",
    answer: "Nothing. Your first consultation is free and confidential — in person or over WhatsApp.",
  },
  {
    question: "How long does a khula or property case take?",
    answer:
      "It varies by court and case type, but most straightforward khula matters conclude within a few months, while property suits can take longer. We'll give you a realistic timeline at your first consultation.",
  },
  {
    question: "Can I consult you without visiting Lahore in person?",
    answer:
      "Yes. Many clients start with a WhatsApp or phone consultation, and we handle documentation and updates digitally wherever possible.",
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
