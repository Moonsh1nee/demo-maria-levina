"use client";

import { useEffect, useState } from "react";

export default function HeroPortrait() {
  const [exhale, setExhale] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setFade(true);
      t = setTimeout(() => {
        setExhale((v) => !v);
        setFade(false);
      }, 600);
    }, 4000);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="port">
      <div className="breath" aria-hidden="true">
        <i className="bc" style={{ "--s": 1 } as React.CSSProperties} />
        <i className="bc" style={{ "--s": 0.82, animationDelay: "-.5s" } as React.CSSProperties} />
        <i className="bc" style={{ "--s": 0.64, animationDelay: "-1s" } as React.CSSProperties} />
      </div>
      <div className="arch">
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <circle cx="150" cy="150" r="52" fill="var(--plum)" opacity=".85" />
          <path d="M40 400c4-80 40-130 110-130s106 50 110 130z" fill="var(--plum)" opacity=".85" />
        </svg>
        <div className="ph">Здесь будет ваше фото</div>
      </div>
      <div className="quote">«Вы не сломаны. Вы устали»</div>
      <div className={`bw${fade ? " o" : ""}`} aria-hidden="true">{exhale ? "выдох" : "вдох"}</div>
    </div>
  );
}
