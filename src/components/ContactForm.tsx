"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { delay, getItem, now, setItem } from "@/lib/storage";

const contactOk = (v: string) => {
  const s = v.trim();
  return /^@?[A-Za-z0-9_]{5,32}$/.test(s) || s.replace(/\D/g, "").length >= 10;
};

const schema = z.object({
  name: z.string().trim().min(2, "Укажите, как к вам обращаться"),
  format: z.enum(["онлайн", "очно в Волгограде"]),
  time: z.enum(["утром", "днём", "вечером"]),
  contact: z.string().refine(contactOk, "Укажите Telegram (@username) или телефон, чтобы я могла ответить"),
  message: z.string().max(1000, "Слишком длинное сообщение").optional(),
});
type FormInput = z.input<typeof schema>;

export default function ContactForm() {
  const [sent, setSent] = useState<FormInput | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", format: "онлайн", time: "утром", contact: "", message: "" },
  });

  async function onSubmit(data: FormInput) {
    await delay(600);
    const list = getItem<unknown[]>("requests", []);
    list.push({ ...data, at: now() });
    setItem("requests", list);
    setSent(data);
  }

  if (sent) {
    return (
      <div className="form sent" role="status">
        <h3>Спасибо, {sent.name}</h3>
        <p>Заявка получена: {sent.format}, {sent.time}. Я напишу вам в течение дня.</p>
        <p className="fine">Демо: на живом сайте заявка уйдёт в Telegram, здесь она сохранена только в вашем браузере.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="zn">
        Как вас зовут
        <input type="text" id="zn" placeholder="Ольга" autoComplete="given-name" aria-invalid={!!errors.name} {...register("name")} />
        <span className="err">{errors.name?.message}</span>
      </label>
      <fieldset>
        <legend>Формат</legend>
        <div className="rg">
          {["онлайн", "очно в Волгограде"].map((v) => (
            <label key={v}><input type="radio" value={v} {...register("format")} /><span>{v === "онлайн" ? "Онлайн" : "Очно в Волгограде"}</span></label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Когда удобно</legend>
        <div className="rg">
          {["утром", "днём", "вечером"].map((v) => (
            <label key={v}><input type="radio" value={v} {...register("time")} /><span>{v[0].toUpperCase() + v.slice(1)}</span></label>
          ))}
        </div>
      </fieldset>
      <label htmlFor="zc">
        Telegram или телефон
        <input type="text" id="zc" placeholder="@username или +7 900 000-00-00" aria-invalid={!!errors.contact} {...register("contact")} />
        <span className="err">{errors.contact?.message}</span>
      </label>
      <label htmlFor="zm">
        Коротко о запросе (по желанию)
        <textarea id="zm" rows={3} placeholder="Можно пару слов, подробности обсудим на встрече" {...register("message")} />
      </label>
      <button className="btn apr" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Отправляю…" : "Отправить заявку"}
      </button>
      <div className="fine">Демо: форма никуда не отправляется, данные сохраняются только в вашем браузере.</div>
    </form>
  );
}
