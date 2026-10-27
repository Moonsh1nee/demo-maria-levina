import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="w">
        <p>
          Демо-проект студии Akimov Web. Организация вымышлена, специалист и её данные тоже. Информация на сайте не является медицинской рекомендацией и не заменяет очную консультацию.
        </p>
        <span>
          Волгоград · онлайн · <Link href="/privacy/">Политика</Link>
        </span>
      </div>
    </footer>
  );
}
