import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  message: 5000,
};

const cleanText = (value) => String(value || '').trim();

// User input is interpolated into an HTML e-mail, so it must be escaped.
const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot: real visitors never see or fill this field. Pretend success so
    // bots get no signal that they were filtered.
    if (cleanText(body?.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = cleanText(body?.name);
    const email = cleanText(body?.email);
    const message = cleanText(body?.message);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Név, érvényes e-mail és üzenet megadása kötelező.' }, { status: 400 });
    }

    if (name.length > MAX_LENGTHS.name || email.length > MAX_LENGTHS.email || message.length > MAX_LENGTHS.message) {
      return NextResponse.json({ error: 'Egy vagy több mező túl hosszú.' }, { status: 413 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    // Strip line breaks so the value cannot inject extra header lines.
    const subjectName = name.replace(/[\r\n]+/g, ' ');

    const { data, error } = await resend.emails.send({
      from: 'GRLab Kapcsolat <info@grlab.hu>',
      to: ['grlabteam@gmail.com'],
      replyTo: email,
      subject: `Új megkeresés a weboldalról: ${subjectName}`,
      html: `
        <h2>Új üzenet érkezett a GRLab weboldalról</h2>
        <p><strong>Név:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Üzenet:</strong></p>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: 'Az üzenetet nem sikerült elküldeni.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
