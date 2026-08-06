import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Blog",
  description: "Answers to real client questions.",
};

export default function BlogPage() {
  return (
    <section className="py-section md:py-section-lg">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-heading text-4xl text-primary text-center">
          Insights &amp; Answers
        </h1>
        <div className="mt-12 divide-y divide-surface-secondary">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-6 py-6 group"
            >
              <div className="relative h-24 w-32 shrink-0 rounded-card overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="128px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h2 className="font-heading text-xl text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 font-body text-sm text-text-muted">
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
