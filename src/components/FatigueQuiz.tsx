"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { quizOptions, quizQuestions, quizResults } from "@/data/content";
import { getItem, setItem } from "@/lib/storage";

const MAX = quizQuestions.length * 3;

export default function FatigueQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  // Восстановление из localStorage возможно только после гидрации
  useEffect(() => {
    const saved = getItem<number | null>("quiz", null);
    if (saved !== null && saved >= 0 && saved <= MAX) {
      /* eslint-disable react-hooks/set-state-in-effect */
      setScore(saved);
      setStep(quizQuestions.length);
      /* eslint-enable react-hooks/set-state-in-effect */
    }
  }, []);

  function answer(v: number) {
    const next = score + v;
    setScore(next);
    setStep(step + 1);
    if (step + 1 === quizQuestions.length) setItem("quiz", next);
  }

  function again() {
    setStep(0);
    setScore(0);
    setItem("quiz", null);
  }

  const done = step >= quizQuestions.length;
  const result = quizResults.find((r) => score <= r.max) ?? quizResults[quizResults.length - 1];

  return (
    <div className="qc" aria-live="polite">
      <div className="qp">
        {quizQuestions.map((_, k) => (
          <i key={k} className={done || k <= step ? "on" : ""} />
        ))}
      </div>
      {!done ? (
        <>
          <h3>{quizQuestions[step]}</h3>
          <div className="qo">
            {quizOptions.map((o, k) => (
              <button key={o} type="button" onClick={() => answer(k)}>{o}</button>
            ))}
          </div>
          <div className="fine">Вопрос {step + 1} из {quizQuestions.length}. Тест не ставит диагноз.</div>
        </>
      ) : (
        <>
          <div className="res">{result.title}</div>
          <p style={{ color: "var(--mute)" }}>{result.text}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
            <Link className="btn apr" href="/#zapis">Записаться на встречу</Link>
            <button className="btn ln" type="button" onClick={again}>Пройти заново</button>
          </div>
          <div className="fine">Баллы: {score} из {MAX}. Это самооценка, а не диагноз.</div>
        </>
      )}
    </div>
  );
}
