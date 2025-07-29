'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { authClient } from '@/lib/auth-client'
import { ShieldX, Home, LogIn, LogOutIcon } from 'lucide-react'
import Link from 'next/link'

export default function UnauthorizedPage() {
  const { data: session, isPending } = authClient.useSession()

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-lg border">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <ShieldX className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Akses Tidak Diizinkan</CardTitle>
          <CardDescription className="mt-2">
            Anda tidak memiliki izin untuk mengakses halaman ini
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Sistem Pendaftaran SMP/SMA KP1</h3>
            <p className="text-sm text-muted-foreground">
              Silakan logout kemudian login dengan akun yang memiliki akses yang sesuai atau hubungi
              administrator sekolah.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {isPending ? (
              <Skeleton className="h-9 flex-1 rounded-md" />
            ) : session ? (
              <Button variant="outline" className="flex-1" onClick={() => authClient.signOut()}>
                <LogOutIcon />
                Keluar
              </Button>
            ) : (
              <Button asChild className="flex-1">
                <Link href="/login">
                  <LogIn />
                  Masuk
                </Link>
              </Button>
            )}
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/">
                <Home />
                Beranda
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Jika Anda merasa ini adalah kesalahan, silakan hubungi tim IT sekolah.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
