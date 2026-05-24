const nodemailer = require("nodemailer");

/**
 * Sends an email using Nodemailer.
 * If SMTP credentials are not configured in environment variables, it sets up
 * a temporary Ethereal test account and logs the preview URL.
 * 
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text content
 * @param {string} options.html - HTML content
 * @returns {Promise<Object>} Information about the sent email including preview URL if applicable
 */
async function sendEmail({ to, subject, text, html }) {
  let transporter;

  // Check if SMTP is configured in environment variables
  const isConfigured = 
    process.env.SMTP_USER && 
    process.env.SMTP_USER !== "your-email@gmail.com" && 
    process.env.SMTP_PASS;

  if (isConfigured) {
    console.log("📨 Sending email using configured SMTP server:", process.env.SMTP_HOST || "smtp.gmail.com");
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    // Fallback: Create ethereal test account for local testing
    console.log("⚠️ SMTP credentials not configured in backend/.env. Creating temporary Ethereal Email account...");
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } catch (err) {
      console.error("❌ Failed to create Ethereal test account. Email will be logged to console only.", err.message);
      // Mock email sending fallback
      console.log("\n================ [MOCK EMAIL] ================");
      console.log(`TO:      ${to}`);
      console.log(`SUBJECT: ${subject}`);
      console.log(`CONTENT: ${text}`);
      console.log("==============================================\n");
      return { previewUrl: "console_only", messageId: "mock_id" };
    }
  }

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER || '"Portfolio Admin" <noreply@portfolio.com>',
    to,
    subject,
    text,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("✅ Email sent successfully! MessageId:", info.messageId);

  // If using Ethereal email, retrieve and return the preview URL
  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log("🔗 Ethereal Preview URL:", previewUrl);
    return { messageId: info.messageId, previewUrl };
  }

  return { messageId: info.messageId };
}

module.exports = sendEmail;
