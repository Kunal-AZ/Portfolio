/**
 * Email Notification Service (Placeholder & SMTP Ready)
 * Can be hooked with Nodemailer, Resend, or SendGrid when credentials are supplied.
 */

const sendContactNotification = async (messageData) => {
  const { name, email, subject, message } = messageData;

  // Log message dispatch in developer console
  console.log("-----------------------------------------");
  console.log(`[Notification Service] New Contact Received:`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log("-----------------------------------------");

  // If SMTP or third-party service environment variables are configured in future:
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    // Ready for transporter.sendMail(...)
    console.log("[Notification Service] Forwarding email via configured SMTP host...");
  }

  return { delivered: true, simulated: !process.env.SMTP_HOST };
};

module.exports = { sendContactNotification };
