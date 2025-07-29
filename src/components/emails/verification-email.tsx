import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

interface VerificationEmailTemplateProps {
  inviteLink: string
}

export default function VerificationEmailTemplate({ inviteLink }: VerificationEmailTemplateProps) {
  const previewText = `Verifikasi Alamat Email Anda.`

  return (
    <Html lang="id">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-screen font-sans">
          <Container className="mx-auto my-10 max-w-[480px] rounded-xl shadow-lg border border-solid border-[#eaeaea] p-8 bg-white">
            <Section className="flex flex-col items-center">
              <Row>
                <Column className="w-[80%]">
                  <Img
                    alt="React Email logo"
                    height="42"
                    src="https://react.email/static/logo-without-background.png"
                  />
                </Column>
                <Column align="right">
                  <Row align="right">
                    <Column>
                      <Link href="#">
                        <Img
                          alt="X"
                          className="mx-[4px]"
                          height="36"
                          src="https://react.email/static/x-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="#">
                        <Img
                          alt="Instagram"
                          className="mx-[4px]"
                          height="36"
                          src="https://react.email/static/instagram-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="#">
                        <Img
                          alt="Facebook"
                          className="mx-[4px]"
                          height="36"
                          src="https://react.email/static/facebook-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Heading
                as="h1"
                className="mb-2 text-center text-[28px] font-bold text-indigo-700 tracking-tight"
              >
                Verifikasi Email Anda
              </Heading>
              <Text className="mb-6 text-center text-[16px] text-gray-700">
                Terima kasih telah mendaftar di <b>sistem registrasi SMP/SMA KP1</b>! Klik tombol di
                bawah untuk memverifikasi alamat email Anda dan mulai menggunakan layanan kami.
              </Text>
              <Button
                className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
                href={inviteLink}
              >
                Verifikasi Sekarang
              </Button>
              <Text className="text-[13px] text-gray-500 text-center mb-2">
                Atau salin dan tempel URL ini ke browser Anda:
              </Text>
              <Link
                href={inviteLink}
                className="text-center text-blue-600 break-all text-[13px] underline"
              >
                {inviteLink}
              </Link>
            </Section>
            <Hr className="my-8 border-t border-gray-200" />
            <Text className="text-[12px] text-gray-400 text-center">
              Jika Anda tidak merasa melakukan pendaftaran, abaikan email ini.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

VerificationEmailTemplate.PreviewProps = {
  inviteLink: 'http://localhost:3000',
}
