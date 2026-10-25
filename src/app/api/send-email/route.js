import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  message: 5000,
};

const cleanText = (value) => String(value || '').trim();

export async function POST(req) {
  try {
    const body = await req.json();
    const name = cleanText(body?.name);
    const email = cleanText(body?.email);
    const message = cleanText(body?.message);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Név, érvényes e-mail és üzenet megadása kötelező.' }, { status: 400 });
    }

    if (name.length > MAX_LENGTHS.name || email.length > MAX_LENGTHS.email || message.length > MAX_LENGTHS.message) {
      return NextResponse.json({ error: 'Egy vagy több mező túl hosszú.' }, { status: 413 });
    }

    const { data, error } = await resend.emails.send({
      from: 'GRLab Kapcsolat <info@grlab.hu>',
      to: ['grlabteam@gmail.com'],
      replyTo: email,
      subject: `Új megkeresés a weboldalról: ${name}`,
      html: `
        <h2>Új üzenet érkezett a GRLab weboldalról</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Üzenet:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}