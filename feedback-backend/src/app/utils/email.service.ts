import nodemailer from "nodemailer";
import config from "../config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.email_user,
    pass: config.email_pass,
  },
});

export const sendTeamEmail = async (team: string, feedback: any) => {
  const teamEmails: Record<string, string> = {
    Technical: "tech@company.com",
    Billing: "billing@company.com",
    Support: "support@company.com",
    General: "info@company.com",
  };

  const mailOptions = {
    from: config.email_user,
    to: teamEmails[team],
    subject: `New ${feedback.priority} Priority Feedback`,
    text: `
New Feedback Received

Name: ${feedback.name}
Email: ${feedback.email}
Category: ${feedback.category}
Priority: ${feedback.priority}
Sentiment: ${feedback.sentiment}
Message:
${feedback.message}
    `,
  };

  await transporter.sendMail(mailOptions);
};
