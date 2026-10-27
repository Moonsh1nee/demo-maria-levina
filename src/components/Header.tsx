"use client";

import { useState } from "react";
import Link from "next/link";
import { Contrast, Menu, X } from "lucide-react";
import { setItem } from "@/lib/storage";

const links = [
  { href: "/#temy", label: "С чем работаю" },
  { href: "/#obo", label: "Обо мне" },
  { href: "/#test", label: "Тест" },
  { href: "/#format", label: "Формат и цена" },
  { href: "/blog/", label: "Заметки" },
  { href: "/#faq", label: "Вопросы" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const root = document.documentElement;
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    setItem("theme", next);
  }

  return (
    <header className="hd">
      <div className="w">
        <Link className="logo" href="/">
          Мария <span>Левина</span>
        </Link>
        <nav className="nav" aria-label="Основное меню">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <button type="button" className="thm" onClick={toggleTheme} aria-label="Сменить тему">
          <Contrast size={20} aria-hidden />
        </button>
        <Link className="btn apr" href="/#zapis">Записаться</Link>
        <button type="button" className="burger" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>
      <nav className={`menu${open ? " open" : ""}`} aria-label="Мобильное меню">
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/#zapis" onClick={() => setOpen(false)}>Записаться</Link>
      </nav>
    </header>
  );
}
