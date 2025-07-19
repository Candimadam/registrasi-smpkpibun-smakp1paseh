'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserAvatar } from '@/components/user-avatar'
import {
  CheckIcon,
  DoorOpenIcon,
  FilePenLineIcon,
  FileUserIcon,
  LayoutDashboardIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
  SunMoonIcon,
} from 'lucide-react'
import { User } from 'better-auth'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'

interface UserDropdownProps {
  user: User
}

export const UserDropdown = ({ user }: UserDropdownProps) => {
  const router = useRouter()
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          imageUrl={user.image ?? undefined}
          fallbackText={user.name}
          className="h-8 w-8"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={15}
        align="end"
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      >
        <DropdownMenuLabel>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserAvatar
              imageUrl={user.image ?? undefined}
              fallbackText={user.name}
              className="h-8 w-8"
            />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="text-muted-foreground truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => router.push('/registration-status')}>
            <FileUserIcon className="mr-2 h-4 w-4" />
            Status Registrasi
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => router.push('/registration-form')}>
            <FilePenLineIcon className="mr-2 h-4 w-4" />
            Formulir Pendaftaran
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => router.push('/dashboard')}>
            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
            Dashboard
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoonIcon className="mr-2 h-4 w-4" />
              Tema
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onSelect={() => setTheme('light')}
                  className="flex items-center justify-between"
                  disabled={theme === 'light'}
                >
                  <div className="flex items-center">
                    <SunIcon className="mr-2 h-4 w-4" />
                    Terang
                  </div>
                  <CheckIcon
                    className={`ml-2 h-4 w-4 ${theme === 'light' ? 'visible' : 'invisible'}`}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setTheme('dark')}
                  className="flex items-center justify-between"
                  disabled={theme === 'dark'}
                >
                  <div className="flex items-center">
                    <MoonIcon className="mr-2 h-4 w-4" />
                    Gelap
                  </div>
                  <CheckIcon
                    className={`ml-2 h-4 w-4 ${theme === 'dark' ? 'visible' : 'invisible'}`}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setTheme('system')}
                  className="flex items-center justify-between"
                  disabled={theme === 'system'}
                >
                  <div className="flex items-center">
                    <MonitorIcon className="mr-2 h-4 w-4" />
                    Sistem
                  </div>
                  <CheckIcon
                    className={`ml-2 h-4 w-4 ${theme === 'system' ? 'visible' : 'invisible'}`}
                  />
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem
            variant="destructive"
            onSelect={async () => {
              await authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push('/login')
                  },
                },
              })
            }}
          >
            <DoorOpenIcon className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
