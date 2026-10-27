import Link from "next/link";
import { cv, faq, prices, topics } from "@/data/content";
import { posts } from "@/data/posts";
import FatigueQuiz from "./FatigueQuiz";
import ContactForm from "./ContactForm";

export function Topics() {
  return (
    <section id="temy" style={{ paddingTop: 0 }}>
      <div className="w">
        <div className="sec-h">
          <div className="eb">С чем ко мне приходят</div>
          <h2 className="h2">Запросы, с которыми <em>работаю чаще всего</em></h2>
        </div>
        <div className="topics">
          {topics.map((t) => (
            <div className="tp r" key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <span aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="obo" className="about">
      <div className="w">
        <div className="big">Я не даю готовых ответов. Я помогаю услышать ваши собственные.</div>
        <div className="txt">
          <p>Работаю в когнитивно-поведенческом и системном подходах. На первой встрече мы обсуждаем запрос и решаем, подходит ли вам такой формат. Если не подходит, подскажу, к кому лучше обратиться.</p>
          <p>Всё, что вы расскажете, остаётся между нами. Встречи проходят в спокойном темпе, и вы сами решаете, о чём говорить.</p>
          <div className="cv">
            {cv.map((c) => (
              <div key={c.year}><b>{c.year}</b><span>{c.text}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuizSection() {
  return (
    <section id="test" className="quiz">
      <div className="w">
        <div>
          <div className="eb">Короткий тест</div>
          <h2 className="h2">Насколько вы <em>устали</em> на самом деле</h2>
          <p className="lead">Шесть вопросов займут минуту. Результат подсказывает, на что обратить внимание, но не заменяет консультацию специалиста.</p>
        </div>
        <FatigueQuiz />
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="format">
      <div className="w">
        <div className="sec-h">
          <div className="eb">Формат и стоимость</div>
          <h2 className="h2">Сколько это <em>стоит</em></h2>
          <p>Встречи проходят онлайн или очно. Стоимость одинаковая, оплата после встречи.</p>
        </div>
        <div className="pr">
          {prices.map((p) => (
            <div className={`pc r${p.hl ? " hl" : ""}`} key={p.title}>
              <h3>{p.title}</h3>
              <div className="pp">{p.price} <small>{p.unit}</small></div>
              <p>{p.text}</p>
              <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <Link className={`btn ${p.hl ? "apr" : "ln"}`} href="/#zapis">Записаться</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Notes() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="w">
        <div className="sec-h">
          <div className="eb">Заметки</div>
          <h2 className="h2">Что я <em>пишу</em></h2>
        </div>
        <div className="blog">
          {posts.map((p) => (
            <Link className="post r" key={p.slug} href={`/blog/${p.slug}/`}>
              <div><small>{p.tag}</small><h3>{p.title}</h3></div>
              <span>{p.minutes} минут чтения · пример статьи</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section id="zapis" style={{ background: "var(--surf)" }}>
      <div className="w bk">
        <div>
          <div className="eb">Запись</div>
          <h2 className="h2">Напишите, <em>когда удобно</em></h2>
          <p style={{ color: "var(--mute)", marginTop: 20 }}>Отвечу в течение дня и предложу ближайшее время. Если не готовы к встрече, можно просто задать вопрос.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq">
      <div className="w">
        <div className="sec-h">
          <div className="eb">Вопросы</div>
          <h2 className="h2">Что вы <em>спрашиваете</em></h2>
        </div>
        <div className="faq">
          {faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
