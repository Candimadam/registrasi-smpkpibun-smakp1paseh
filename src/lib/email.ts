import { Resend } from 'resend'
import { render } from '@react-email/render'
import VerificationEmailTemplate from '@/components/emails/verification-email'
import { env } from '@/env/server'

export const resend = new Resend(env.RESEND_API_KEY)

export const sendVerificationEmail = async ({
  email,
  verificationUrl,
}: {
  email: string
  verificationUrl: string
}) => {
  return await resend.emails.send({
    from: env.RESEND_EMAIL_FROM,
    to: [email],
    subject: 'Verifikasi Email Anda',
    html: await render(VerificationEmailTemplate({ inviteLink: verificationUrl })),
  })
}
