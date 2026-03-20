import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const name = String(body.name || "")
    .replace(/[^a-zA-Zа-яА-ЯёЁәіңғүұқөһӘІҢҒҮҰҚӨҺ\s-]/g, "")
    .trim()
    .slice(0, 50);
  const whatsapp = String(body.whatsapp || "")
    .replace(/[^0-9+() -]/g, "")
    .trim()
    .slice(0, 18);
  const country = String(body.country || "")
    .replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "")
    .trim()
    .slice(0, 30);
  const program = String(body.program || "")
    .replace(/[^a-zA-Zа-яА-ЯёЁ()\s-]/g, "")
    .trim()
    .slice(0, 40);
  const startDate = String(body.startDate || "")
    .replace(/[^a-zA-Zа-яА-ЯёЁ0-9()\s-]/g, "")
    .trim()
    .slice(0, 30);

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
