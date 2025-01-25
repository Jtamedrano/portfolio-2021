import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phoneNumber, message, bundleTitle } = body;
  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message},\nBundle: ${bundleTitle}`,
  };

  try {
    await transporter.sendMail(mailData);
    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending message", { status: 500 });
  }
}
