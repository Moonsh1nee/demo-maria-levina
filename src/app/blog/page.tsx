import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = { title: "Заметки" };

export default function Blog() {
  return (
    <div className="page">
      <div className="w">
        <div className="sec-h">
          <div className="eb">Заметки</div>
          <h1 className="h2">Что я <em>пишу</em></h1>
          <p>Три примера статей для демо. Это ознакомительные тексты, они не заменяют консультацию.</p>
        </div>
        <div className="list-posts">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}/`}>
              <h2>{p.title}</h2>
              <span>{p.minutes} мин · {p.tag}</span>
              <p>{p.lead}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
