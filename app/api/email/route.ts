import * as sgMail from "@sendgrid/mail";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  console.log(name);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "info@hassamsohail.com",
    from: "marketing@hassamsohail.com", // Change to your recipient
    subject: "Contact Form",
    html: `<ul>
          <li>Name: ${name}</li>
          
          <li>phone: ${phone}</li>
          <li>email: ${email}</li>
          <li>Message: ${message}</li>
          </ul>`,
  };
  await sgMail.send(msg).catch((err) => console.log(err));
  //   console.log(email_sent);
  return new Response(JSON.stringify({ success: "Email Sent" }));
}
