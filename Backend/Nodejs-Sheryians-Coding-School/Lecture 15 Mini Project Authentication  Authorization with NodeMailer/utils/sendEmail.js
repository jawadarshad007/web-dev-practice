// utils/sendEmail.js
require('dotenv').config();
const nodemailer = require('nodemailer');

// Reusable sendEmail function
async function sendEmail(to, subject, html) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.APP_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to,
      subject,
      html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

module.exports = sendEmail;
