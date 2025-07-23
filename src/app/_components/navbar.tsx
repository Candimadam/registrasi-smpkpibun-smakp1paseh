'use client'

import { Button } from '@/components/ui/button'
import { UserDropdown } from '@/components/user-dropdown'
import { authClient } from '@/lib/auth-client'
import { LogInIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = authClient.useSession()

  return (
    <nav className="sticky top-0 flex items-center justify-between py-2 px-6 bg-background h-14">
      <Link href="/">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Sekolah Merdeka</h3>
      </Link>
      {session ? (
        <UserDropdown user={session.user} />
      ) : (
        <Button asChild variant="outline">
          <Link href="/login">
            <LogInIcon />
            Masuk
          </Link>
        </Button>
      )}
    </nav>
  )
}
