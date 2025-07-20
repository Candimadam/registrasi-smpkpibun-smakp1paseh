'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock, LogIn } from 'lucide-react'
import Google from '@/components/svg/google-logo'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/registration-form',
    })

    if (error) {
      toast.error('Gagal masuk dengan Google. Silakan coba lagi.', {
        description: error.message,
      })
      return
    }
  }

  return (
    <Card className="max-w-md w-full shadow-lg">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
          <LogIn className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">Masuk ke Akun</CardTitle>
        <p className="text-muted-foreground">Masuk untuk mengakses sistem pendaftaran siswa</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <Button onClick={handleGoogleLogin} variant="outline" className="w-full h-12 text-base">
          <Google />
          Masuk dengan Google
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground uppercase">
          <div className="h-[1px] w-full bg-primary/20"></div>
          <span>Atau</span>
          <div className="h-[1px] w-full bg-primary/20"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="nama@sekolah.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Kata Sandi</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base">
            Masuk
          </Button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Belum punya akun?{' '}
            <Link href="/register" className="text-primary hover:underline font-medium">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
