'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Google from '@/components/svg/google-logo'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    })
  }

  return (
    <div className={cn('max-w-md flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Selamat datang kembali</CardTitle>
          <CardDescription>Masuk dengan akun Apple atau Google Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" onClick={signIn}>
                  <Google />
                  Masuk dengan Google
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Atau lanjutkan dengan
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="nama@email.com" required />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Kata Sandi</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                      Lupa kata sandi?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Masuk
                </Button>
              </div>
              <div className="text-center text-sm">
                Belum punya akun?{' '}
                <Link href="/register" className="underline underline-offset-4">
                  Daftar
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Dengan mengklik lanjutkan, Anda setuju dengan <a href="#">Syarat Layanan</a> dan{' '}
        <a href="#">Kebijakan Privasi</a> kami.
      </div>
    </div>
  )
}
