"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Элементы .r видимы всегда; скрываются только после первой прокрутки и только если ещё не были на экране. */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".r").forEach((el) => io.observe(el));
    const arm = () => root.classList.add("armed");
    window.addEventListener("scroll", arm, { once: true, passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", arm);
    };
  }, [pathname]);

  return null;
}
