import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-section md:py-section-lg">
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-accent text-xs uppercase tracking-wide text-text-muted">
          {post.date}
        </p>
        <h1 className="mt-2 font-heading text-4xl text-primary">
          {post.title}
        </h1>
        <div className="relative mt-8 aspect-16/9 rounded-card overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 font-body text-text-muted leading-relaxed">
          {post.body}
        </p>
      </div>
    </article>
  );
}
