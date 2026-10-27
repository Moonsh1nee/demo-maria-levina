"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Липкая кнопка на телефоне; прячется, когда форма записи уже на экране. */
export default function StickyCta() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const form = document.getElementById("zapis");
    if (!form) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.1 });
    io.observe(form);
    return () => {
      io.disconnect();
      setHidden(false);
    };
  }, [pathname]);

  if (hidden) return null;
  return (
    <div className="mcta">
      <Link className="btn apr" href="/#zapis">Записаться на встречу</Link>
    </div>
  );
}
