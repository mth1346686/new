const nodemailer = require('nodemailer');

// Nodemailer
const sendEmail = async (options) => {
  // 1) Create transporter ( service that will send email like "gmail","Mailgun", "mialtrap", sendGrid)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // إيميلك
    pass: process.env.EMAIL_PASSWORD, // App Password مش الباسورد العادي
  },
});

  // 2) Define email options (like from, to, subject, email content)
  const mailOpts = {
    from: 'base url',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Send email
  try {
    const info = await transporter.sendMail(mailOpts);

    console.log("✅ Message sent: %s", info.messageId);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

module.exports = sendEmail;
