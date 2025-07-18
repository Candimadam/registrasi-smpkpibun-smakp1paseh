'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { id } from 'date-fns/locale'
import { format, subYears } from 'date-fns'
import { FileText, CheckCircle, ChevronDownIcon, Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const requirements = [
  'Mengisi Formulir',
  'Surat Keterangan Lulus (SKL)/Menyusul',
  'Fc. Kartu Keluarga',
  'Fc. NISN (Nomor Induk Siswa Nasional)',
  'Fc. KTP Orang Tua',
  'Fc. Akta Kelahiran',
  'Fc. Ijazah (Menyusul)',
  'Fc. Kartu KPS/KKS/PKH/KIP/PIP/KIS',
  'SKTM jika tidak memiliki kartu pada no. 8',
]

export default function RegistrationForm() {
  const [jenjang, setJenjang] = useState('')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [jenisKelamin, setJenisKelamin] = useState('')
  const [namaSekolahAsal, setNamaSekolahAsal] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [alamat, setAlamat] = useState('')
  const [noTelepon, setNoTelepon] = useState('')
  const [namaAyah, setNamaAyah] = useState('')
  const [pekerjaanAyah, setPekerjaanAyah] = useState('')
  const [namaIbu, setNamaIbu] = useState('')
  const [pekerjaanIbu, setPekerjaanIbu] = useState('')
  const [rekomendasiMasuk, setRekomendasiMasuk] = useState('')

  const today = new Date()
  // SMP: 12–15 tahun
  const smpMax = subYears(today, 12)
  const smpMin = subYears(today, 15)

  // SMA: 15–18 tahun
  const smaMax = subYears(today, 15)
  const smaMin = subYears(today, 18)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Formulir Pendaftaran Siswa</h1>
        <p className="text-muted-foreground text-lg">
          Lengkapi formulir berikut untuk mendaftar sebagai siswa baru
        </p>
      </div>

      {/* Main Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Data Siswa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Jenjang Selection */}
            <div className="space-y-2">
              <Label htmlFor="jenjang">Jenjang Pendidikan</Label>
              <Select
                value={jenjang}
                onValueChange={(jenjang) => {
                  setJenjang(jenjang)
                  setDate(undefined) // Reset date when jenjang changes
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih jenjang pendidikan" className="w-full" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="smp">SMP (Sekolah Menengah Pertama)</SelectItem>
                  <SelectItem value="sma">SMA (Sekolah Menengah Atas)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Personal Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="namaLengkap">Nama Lengkap</Label>
                <Input
                  id="namaLengkap"
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
                <Select value={jenisKelamin} onValueChange={setJenisKelamin}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                    <SelectItem value="perempuan">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="namaSekolahAsal">Nama Sekolah Asal</Label>
                <Input
                  id="namaSekolahAsal"
                  value={namaSekolahAsal}
                  onChange={(e) => setNamaSekolahAsal(e.target.value)}
                  placeholder="Masukkan nama sekolah asal"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tempatLahir">Tempat Lahir</Label>
                <Input
                  id="tempatLahir"
                  value={tempatLahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                  placeholder="Masukkan tempat lahir"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="px-1">
                  Tanggal Lahir
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className="justify-between font-normal w-full"
                      disabled={!jenjang}
                    >
                      {date ? format(date, 'd MMMM yyyy', { locale: id }) : 'Pilih tanggal'}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date)
                        setOpen(false)
                      }}
                      disabled={(d) =>
                        jenjang === 'smp' ? d < smpMin || d > smpMax : d < smaMin || d > smaMax
                      }
                      locale={id}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="noTelepon">Nomor Telepon/HP</Label>
                <Input
                  id="noTelepon"
                  value={noTelepon}
                  onChange={(e) => setNoTelepon(e.target.value)}
                  placeholder="Masukkan nomor telepon"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="alamat">Alamat Lengkap</Label>
              <Textarea
                id="alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Masukkan alamat lengkap"
                rows={3}
                required
              />
            </div>

            {/* Parent Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Data Ayah</h3>
                <div className="space-y-2">
                  <Label htmlFor="namaAyah">Nama Ayah</Label>
                  <Input
                    id="namaAyah"
                    value={namaAyah}
                    onChange={(e) => setNamaAyah(e.target.value)}
                    placeholder="Masukkan nama ayah"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pekerjaanAyah">Pekerjaan Ayah</Label>
                  <Input
                    id="pekerjaanAyah"
                    value={pekerjaanAyah}
                    onChange={(e) => setPekerjaanAyah(e.target.value)}
                    placeholder="Masukkan pekerjaan ayah"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Data Ibu</h3>
                <div className="space-y-2">
                  <Label htmlFor="namaIbu">Nama Ibu</Label>
                  <Input
                    id="namaIbu"
                    value={namaIbu}
                    onChange={(e) => setNamaIbu(e.target.value)}
                    placeholder="Masukkan nama ibu"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pekerjaanIbu">Pekerjaan Ibu</Label>
                  <Input
                    id="pekerjaanIbu"
                    value={pekerjaanIbu}
                    onChange={(e) => setPekerjaanIbu(e.target.value)}
                    placeholder="Masukkan pekerjaan ibu"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rekomendasiMasuk">Rekomendasi Masuk Dari</Label>
              <Input
                id="rekomendasiMasuk"
                value={rekomendasiMasuk}
                onChange={(e) => setRekomendasiMasuk(e.target.value)}
                placeholder="Masukkan sumber rekomendasi (opsional)"
              />
            </div>

            <Button type="submit" className="w-full h-12 text-base">
              Kirim Formulir Pendaftaran
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Requirements Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Persyaratan yang Harus Dikumpulkan Ketika ke Sekolah
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="info">
            <Info />
            <AlertTitle>Catatan Penting!</AlertTitle>
            <AlertDescription>
              Persyaratan dikumpulkan ketika masuk sekolah. Pastikan semua dokumen sudah lengkap.
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm text-foreground">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
