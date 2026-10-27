import Link from "next/link";
import HeroPortrait from "@/components/HeroPortrait";
import { About, Booking, Faq, Notes, Pricing, QuizSection, Topics } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="w">
          <div className="hero-text">
            <div className="eb">Семейный психолог, Волгоград и онлайн</div>
            <h1>Разберёмся, что на самом деле <em>происходит</em></h1>
            <p className="lead">Помогаю парам и взрослым людям, которые устали ссориться, выгорели или не понимают, как жить дальше. Без диагнозов, советов «просто расслабьтесь» и давления.</p>
            <div className="acts">
              <Link className="btn apr" href="/#zapis">Записаться на встречу</Link>
              <Link className="btn ln" href="/#test">Пройти короткий тест</Link>
            </div>
            <div className="facts">
              <div><b>9 лет</b><span>практики</span></div>
              <div><b>1 200+</b><span>часов консультаций</span></div>
              <div><b>50 мин</b><span>одна встреча</span></div>
            </div>
          </div>
          <HeroPortrait />
        </div>
      </section>
      <Topics />
      <About />
      <QuizSection />
      <Pricing />
      <Notes />
      <Booking />
      <Faq />
    </>
  );
}
