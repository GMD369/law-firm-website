import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export default function InsightsPreview() {
  const posts = blogPosts.slice(0, 2);

  return (
    <section className="py-section md:py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
          Insights &amp; Answers
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-surface rounded-card overflow-hidden hover:shadow-md transition"
            >
              <div className="relative aspect-16/9">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
}
