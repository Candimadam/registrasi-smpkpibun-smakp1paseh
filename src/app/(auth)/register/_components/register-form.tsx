'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { User, EyeOffIcon, EyeIcon, Loader2Icon } from 'lucide-react'
import Link from 'next/link'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

const registerSchema = z
  .object({
    email: z.email('Email tidak valid').min(1, 'Email tidak boleh kosong'),
    nama: z.string().min(1, 'Nama tidak boleh kosong'),
    password: z
      .string()
      .min(8, 'Kata sandi harus minimal 8 karakter')
      .max(128, 'Kata sandi terlalu panjang'),
    confirmPassword: z.string().min(1, 'Konfirmasi kata sandi tidak boleh kosong'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Kata sandi dan konfirmasi kata sandi harus sama',
    path: ['confirmPassword'],
  })

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      nama: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const { data, error } = await authClient.signUp.email({
      name: values.nama,
      email: values.email,
      password: values.password,
      callbackURL: '/registration-form',
    })

    if (error) {
      toast.error(error.message)
      return
    }

    if (data) {
      toast.info('Akun berhasil dibuat! Verifikasi email Anda untuk melanjutkan')
      router.push('/login')
    }
  }

  return (
    <Card className="max-w-md w-full shadow-lg">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
          <User className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">Buat Akun Baru</CardTitle>
        <p className="text-muted-foreground">
          Daftarkan diri untuk mengakses sistem pendaftaran siswa
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="contoh@gmail.com" />
                  </FormControl>
                  <FormDescription>
                    Gunakan email aktif untuk verifikasi pendaftaran.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Nama Lengkap" />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Kata Sandi</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="* * * * * *"
                        {...field}
                        type={showConfirmPassword ? 'text' : 'password'}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full h-12 text-base"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <User className="w-4 h-4" />
              )}
              {form.formState.isSubmitting ? 'Memproses...' : 'Daftar Akun'}
            </Button>
          </form>
        </Form>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Masuk di sini
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
