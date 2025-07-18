"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

export function HomeNavbar() {
  const {
    data,
  } = authClient.useSession()
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full px-6 lg:px-20 py-4 flex items-center justify-between bg-white shadow-sm z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-[#4C33FF]">SMA KP 1</span> PASEH
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-[#1A1A1A]">
        <li>
          <a href="#beranda" className="hover:text-[#4C33FF]">
            Beranda
          </a>
        </li>
        <li className="group relative">
          <a href="#tentang-kami" className="hover:text-[#4C33FF]">
            Tentang Kami
          </a>
        </li>
        <li className="group relative">
          <a href="#program" className="hover:text-[#4C33FF]">
            Program
          </a>
        </li>
        <li className="group relative">
          <a href="#guru" className="hover:text-[#4C33FF]">
            Guru
          </a>
        </li>
        <li className="group relative">
          <a href="#siswa" className="hover:text-[#4C33FF]">
            Siswa
          </a>
        </li>
        <li>
          <a href="#berita" className="hover:text-[#4C33FF]">
            Berita
          </a>
        </li>
        <li className="group relative">
          <a href="#fitur" className="hover:text-[#4C33FF]">
            Fitur
          </a>
        </li>
      </ul>

      {/* Contact Button */}
      {data ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={data.user.image ?? "https://github.com/shadcn.png"} />
              <AvatarFallback>{data.user.name}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={async () => {
              await authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/login");
                  },
                },
              });
            }}>Keluar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild className="bg-[#4C33FF] text-white hover:bg-[#3826cc] transition text-sm px-5 py-2 rounded-full">
          <Link href="/login">Login</Link>
        </Button>
      )}
    </nav>
  );
}
