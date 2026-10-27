import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.lead } : {};
}

export default async function Post({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="page article">
      <div className="w" style={{ maxWidth: 820 }}>
        <Link className="back" href="/blog/">← Все заметки</Link>
        <div className="eb">{post.tag}</div>
        <h1>{post.title}</h1>
        <div className="meta">{post.minutes} минут чтения · пример статьи, демо</div>
        <div className="body">
          <p style={{ fontSize: 21, color: "var(--mute)" }}>{post.lead}</p>
          {post.blocks.map((b, i) => (
            <div key={i} style={{ display: "contents" }}>
              {b.h && <h2>{b.h}</h2>}
              {b.p && <p>{b.p}</p>}
            </div>
          ))}
        </div>
        <div className="cta">
          <h2 style={{ fontSize: 32 }}>Хотите обсудить это лично?</h2>
          <p>Первая встреча нужна, чтобы познакомиться и понять, как работать дальше.</p>
          <Link className="btn apr" href="/#zapis">Записаться на встречу</Link>
        </div>
      </div>
    </article>
  );
}
