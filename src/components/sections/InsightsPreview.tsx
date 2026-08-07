import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import Reveal from "@/components/ui/Reveal";

export default function InsightsPreview() {
  const posts = blogPosts.slice(0, 2);

  return (
    <section className="py-section md:py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
            Insights &amp; Answers
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-surface rounded-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-16/9 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-lg text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-text-muted">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
