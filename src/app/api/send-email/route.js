// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, lastName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    const message1 = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM}>`,
      to: email,
      subject: "New Quote Request",
      text: `Name: ${name} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(message1);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
