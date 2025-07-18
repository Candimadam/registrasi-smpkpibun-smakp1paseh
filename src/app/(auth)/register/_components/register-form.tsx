import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Google from "@/components/svg/google-logo"
import Apple from "@/components/svg/apple-logo"
import Link from "next/link"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("max-w-md flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Buat akun baru</CardTitle>
          <CardDescription>
            Daftar dengan akun Apple atau Google Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <Apple />
                  Daftar dengan Apple
                </Button>
                <Button variant="outline" className="w-full">
                  <Google />
                  Daftar dengan Google
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Atau daftar dengan email
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Kata Sandi</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirm-password">Konfirmasi Kata Sandi</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Daftar
                </Button>
              </div>
              <div className="text-center text-sm">
                Sudah punya akun?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Masuk
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Dengan mendaftar, Anda setuju dengan <a href="#">Syarat Layanan</a>{" "}
        dan <a href="#">Kebijakan Privasi</a> kami.
      </div>
    </div>
  )
}
