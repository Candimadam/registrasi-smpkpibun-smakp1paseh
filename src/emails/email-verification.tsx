import { Html, Button, Heading, Text, Link } from '@react-email/components'
import { addDays, format } from 'date-fns'
import { id as localeId } from 'date-fns/locale'
import * as React from 'react'

interface EmailVerificationProps {
  user: {
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date
    updatedAt: Date
    id: string
  }
  url: string
}

export const EmailVerification: React.FC<EmailVerificationProps> & {
  PreviewProps?: EmailVerificationProps
} = ({ user, url }) => {
  return (
    <Html>
      <div
        style={{
          maxWidth: 480,
          margin: '40px auto',
          border: '1px solid #eaeaea',
          borderRadius: 8,
          padding: 24,
          fontFamily: 'sans-serif',
          background: '#fff',
        }}
      >
        <Heading
          as="h2"
          style={{ textAlign: 'center', fontWeight: 600, fontSize: 24, marginBottom: 24 }}
        >
          Verifikasi Email
        </Heading>
        <Text style={{ fontSize: 16, color: '#222', marginBottom: 12 }}>
          Halo <b>{user.name}</b>,
        </Text>
        <Text style={{ fontSize: 15, color: '#222', marginBottom: 20 }}>
          Terima kasih telah melakukan pendaftaran sistem registrasi <b>SMP KP1 IBUN</b> atau{' '}
          <b>SMA KP1 PASEH</b>. Silakan verifikasi alamat email Anda untuk menyelesaikan proses
          registrasi.
        </Text>
        <Button
          href={url}
          style={{
            background: '#2563eb',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            display: 'block',
            margin: '0 auto 18px auto',
            textAlign: 'center',
          }}
        >
          Verifikasi Email
        </Button>
        <Text style={{ fontSize: 13, color: '#444', margin: '18px 0 0 0' }}>
          Atau salin dan tempel tautan berikut ke browser Anda:
          <br />
          <Link href={url} style={{ color: '#2563eb', wordBreak: 'break-all' }}>
            {url}
          </Link>
        </Text>
        <Text style={{ fontSize: 13, color: '#444', margin: '18px 0 0 0' }}>
          <b>Email terdaftar:</b> {user.email}
        </Text>
        <Text style={{ fontSize: 12, color: '#888', marginTop: 24 }}>
          Akun dibuat pada:{' '}
          <b>{format(new Date(user.createdAt), 'dd MMMM yyyy, HH:mm', { locale: localeId })}</b>
          <br />
          Terakhir diperbarui:{' '}
          <b>{format(new Date(user.updatedAt), 'dd MMMM yyyy, HH:mm', { locale: localeId })}</b>
        </Text>
        <Text style={{ fontSize: 12, color: '#888', marginTop: 24 }}>
          Jika Anda tidak pernah membuat akun dengan email <b>{user.email}</b>, abaikan email ini.
        </Text>
      </div>
    </Html>
  )
}

EmailVerification.PreviewProps = {
  user: {
    name: 'John Doe',
    email: 'test@gmail.com',
    emailVerified: false,
    image: 'https://github.com/shadcn.png',
    createdAt: addDays(new Date(), -1),
    updatedAt: addDays(new Date(), 1),
    id: '7cOSNor2c84fD6fSsZmBYjTvXdD3hz4v',
  },
  url: 'http://localhost:3000/api/auth/verify-email?token=random-token&callbackURL=/registration-form',
}

export default EmailVerification
