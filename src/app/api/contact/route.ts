import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Sanitise inputs — strip HTML tags to prevent injection
    const clean = (s: string) => String(s).replace(/<[^>]*>/g, '').trim();
    const safeName    = clean(name);
    const safeEmail   = clean(email);
    const safeSubject = clean(subject || 'General Inquiry');
    const safeMessage = clean(message);

    // Email-format check
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(safeEmail)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // If SMTP credentials are configured, attempt to send via nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Dynamic import so the build never fails when nodemailer is absent
      const nodemailer = (await import('nodemailer')).default;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from:    `"Driver Info Hub" <${process.env.SMTP_USER}>`,
        replyTo: safeEmail,
        to:      process.env.CONTACT_TO || process.env.SMTP_USER,
        subject: `Contact Form: ${safeSubject}`,
        text:    `Name: ${safeName}\nEmail: ${safeEmail}\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}`,
        html: `
          <h2 style="font-family:sans-serif">New Contact Form Submission</h2>
          <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
            <tr><td style="padding:6px 16px 6px 0;font-weight:700">Name</td><td>${safeName}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;font-weight:700">Email</td><td>${safeEmail}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;font-weight:700">Subject</td><td>${safeSubject}</td></tr>
          </table>
          <hr/>
          <p style="font-family:sans-serif;white-space:pre-wrap">${safeMessage}</p>
        `,
      });
    } else {
      // No SMTP configured — log to console so messages aren't silently lost in dev
      console.info('[Contact Form] SMTP not configured. Message received:', {
        name: safeName,
        email: safeEmail,
        subject: safeSubject,
        message: safeMessage,
      });
    }

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error('[Contact API] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
