import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, whatsapp, country, program, startDate } = await req.json();

  if (!name || !whatsapp) {
    return NextResponse.json({ error: "Имя и WhatsApp обязательны" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return NextResponse.json({ error: "Server config error" }, { status: 500 });
  }

  const text = [
    "📩 *Новая заявка с сайта*",
    "",
    `👤 *Имя:* ${name}`,
    `📱 *WhatsApp:* ${whatsapp}`,
    `🌍 *Страна:* ${country || "—"}`,
    `🎓 *Программа:* ${program || "—"}`,
    `📅 *Начало:* ${startDate || "—"}`,
  ].join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_thread_id: Number(process.env.TELEGRAM_TOPIC_ID),
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram API error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
