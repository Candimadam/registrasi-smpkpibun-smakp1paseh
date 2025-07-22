'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { LogIn, LogInIcon, Loader2Icon, EyeOffIcon, EyeIcon } from 'lucide-react'
import Google from '@/components/svg/google-logo'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useState } from 'react'

const loginSchema = z.object({
  email: z.email('Email tidak valid').min(1, 'Email tidak boleh kosong'),
  password: z.string().min(1, 'Kata sandi tidak boleh kosong'),
})

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const { data, error } = await authClient.signIn.email({
      email: values.email,
      password: values.password,
      rememberMe: true,
      callbackURL: '/registration-form',
    })

    if (error) {
      toast.error('Gagal masuk ke akun', {
        description: error.message,
      })
      return
    }

    if (data) {
      toast.success(`Selamat datang, ${data.user.name}!`)
    }
  }

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/registration-form',
    })

    if (error) {
      toast.error('Gagal masuk dengan Google', {
        description: error.message,
      })
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="contoh@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kata Sandi</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="* * * * * *"
                        {...field}
                        type={showPassword ? 'text' : 'password'}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <LogInIcon />
              )}
              {form.formState.isSubmitting ? 'Memproses...' : 'Masuk'}
            </Button>
          </form>
        </Form>

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
