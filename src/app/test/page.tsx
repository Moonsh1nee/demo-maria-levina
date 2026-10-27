import type { Metadata } from "next";
import FatigueQuiz from "@/components/FatigueQuiz";

export const metadata: Metadata = { title: "Тест на усталость" };

export default function TestPage() {
  return (
    <div className="page narrow">
      <div className="w">
        <div className="sec-h">
          <div className="eb">Короткий тест</div>
          <h1 className="h2">Насколько вы <em>устали</em> на самом деле</h1>
          <p>Шесть вопросов займут минуту. Результат подсказывает, на что обратить внимание, но не заменяет консультацию специалиста.</p>
        </div>
        <FatigueQuiz />
      </div>
    </div>
  );
}
