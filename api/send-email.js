import nodemailer from 'nodemailer';

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  message: 5000,
};

const cleanText = (value) => String(value || '').trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const name = cleanText(req.body?.name);
  const email = cleanText(req.body?.email);
  const message = cleanText(req.body?.message);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Name, valid email and message are required.' });
  }

  if (name.length > MAX_LENGTHS.name || email.length > MAX_LENGTHS.email || message.length > MAX_LENGTHS.message) {
    return res.status(413).json({ error: 'One or more fields are too long.' });
  }

  // Nodemailer transporter beállítása
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail SMTP szerver
    port: 465, // Biztonságos port
    secure: true, // SSL használata
    auth: {
      user: process.env.EMAIL_USER, // Az email cím, amelyről küldöd az üzeneteket
      pass: process.env.EMAIL_PASS, // Az email cím jelszava
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Az email cím, amelyről küldöd az üzeneteket
    to: 'grlabteam@gmail.com', // Az email cím, amelyre érkeznek az üzenetek
    subject: 'New Contact Form Submission',
    text: `New message from ${name}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Nodemailer error:', error); // Részletes hibaüzenet
    res.status(500).json({ success: false, error: error.message });
  }
}