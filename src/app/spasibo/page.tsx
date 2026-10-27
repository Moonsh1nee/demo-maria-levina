import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Заявка отправлена" };

export default function Thanks() {
  return (
    <div className="page narrow">
      <div className="w sent">
        <div className="eb">Заявка</div>
        <h1 className="h2">Спасибо, <em>я получила заявку</em></h1>
        <p>Я отвечу в течение дня и предложу ближайшее время для встречи.</p>
        <p className="fine" style={{ margin: "18px 0 32px" }}>Демо: на живом сайте заявка уходит в Telegram, здесь она сохранена только в вашем браузере.</p>
        <Link className="btn apr" href="/">На главную</Link>
      </div>
    </div>
  );
}
