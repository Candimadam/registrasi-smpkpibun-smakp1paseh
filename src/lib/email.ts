import nodemailer from 'nodemailer'

export const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GOOGLE_EMAIL,
    clientId: process.env.GOOGLE_EMAIL_CLIENT_ID,
    clientSecret: process.env.GOOGLE_EMAIL_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_EMAIL_REFRESH_TOKEN,
  },
})

export async function sendEmail(subject: string, to: string, html: string) {
  const info = await emailTransporter.sendMail({
    from: process.env.GOOGLE_EMAIL,
    to,
    subject,
    html,
  })

  console.info('Email sent:', {
    to,
    subject,
    messageId: info.messageId,
  })
}
