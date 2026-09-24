const nodemailer = require("nodemailer");

/**
 * Configure Nodemailer Transporter
 * Supports Gmail (App Password) or custom SMTP
 */
const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  // 1. Gmail Service configuration
  if (process.env.EMAIL_SERVICE === "gmail" || (!process.env.SMTP_HOST && user && pass)) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: pass,
      },
    });
  }

  // 2. Custom SMTP host configuration (e.g. Hostinger, SendGrid, Mailgun)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return null;
};

/**
 * Send Contact Notification Email to Kunal
 */
const sendContactNotification = async (messageData) => {
  const { name, email, subject, message, ipAddress } = messageData;
  const recipient = process.env.NOTIFICATION_EMAIL || process.env.EMAIL_TO || "kunalsharma9637@gmail.com";

  console.log("=========================================");
  console.log(`[Notification Service] Incoming contact inquiry:`);
  console.log(`  Name:    ${name}`);
  console.log(`  Email:   ${email}`);
  console.log(`  Subject: ${subject}`);
  console.log(`  Date:    ${new Date().toLocaleString()}`);
  console.log("=========================================");

  const transporter = createTransporter();

  if (!transporter) {
    console.warn(
      "[Notification Service] Email credentials (EMAIL_USER & EMAIL_PASS) not configured in .env."
    );
    console.warn(
      `[Notification Service] Message was successfully stored in the database. To enable live email dispatch, add your Gmail App Password to server/.env`
    );
    return { delivered: false, simulated: true };
  }

  try {
    const mailOptions = {
      from: `"Kunal Sharma Portfolio" <${process.env.EMAIL_USER || process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: `${name} <${email}>`,
      subject: `📬 Portfolio Contact: ${subject} (${name})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0f19; color: #f1f5f9; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%); padding: 20px 24px; text-align: left; }
            .header h1 { margin: 0; font-size: 20px; color: #ffffff; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.85); font-family: monospace; }
            .content { padding: 24px; }
            .field { margin-bottom: 18px; }
            .field-label { font-size: 11px; text-transform: uppercase; color: #94a3b8; font-family: monospace; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #ffffff; font-weight: 500; }
            .field-value a { color: #38bdf8; text-decoration: none; }
            .message-box { background-color: #0d121f; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
            .footer { padding: 16px 24px; background-color: #090d16; border-top: 1px solid #1f2937; font-size: 12px; color: #64748b; display: flex; justify-content: space-between; align-items: center; }
            .btn { display: inline-block; background-color: #06b6d4; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 13px; font-weight: 600; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>portfolio // contact-webhook</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Sender Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject}</div>
              </div>
              <div class="field">
                <div class="field-label">Message Content</div>
                <div class="message-box">${message}</div>
              </div>
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" class="btn">Reply Directly to ${name}</a>
            </div>
            <div class="footer">
              <span>Timestamp: ${new Date().toLocaleString()}</span>
              <span>IP: ${ipAddress || "127.0.0.1"}</span>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Notification Service] Email successfully delivered! Message ID: ${info.messageId}`);
    return { delivered: true, messageId: info.messageId };
  } catch (error) {
    console.error(`[Notification Service Error] Failed to send email: ${error.message}`);
    return { delivered: false, error: error.message };
  }
};

module.exports = { sendContactNotification };