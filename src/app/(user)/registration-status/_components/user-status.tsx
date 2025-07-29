'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  User,
  School,
  Phone,
  FileCheck,
  CheckCircle,
  XCircle,
  CheckCircle2Icon,
  FileWarningIcon,
  LightbulbIcon,
} from 'lucide-react'

// Mock user data
const userData = {
  jenjang: 'SMP',
  namaLengkap: 'Ahmad Fauzi',
  jenisKelamin: 'Laki-laki',
  namaSekolahAsal: 'SD Negeri 1 Jakarta',
  tempatLahir: 'Jakarta',
  tanggalLahir: '15 Mei 2010',
  alamat:
    'Jl. Merdeka No. 123, RT 05/RW 02, Kelurahan Menteng, Kecamatan Menteng, Jakarta Pusat 10310',
  noTelepon: '081234567890',
  namaAyah: 'Budi Santoso',
  pekerjaanAyah: 'Guru',
  namaIbu: 'Siti Rahayu',
  pekerjaanIbu: 'Ibu Rumah Tangga',
  rekomendasiMasuk: 'Kepala Sekolah SD Negeri 1 Jakarta',
  documents: {
    formulir: true,
    skl: false,
    kk: true,
    nisn: true,
    ktp: false,
    akta: true,
    ijazah: false,
    kartuSosial: true,
    sktm: false,
  },
}

const documentList = [
  { key: 'formulir', label: 'Mengisi Formulir' },
  { key: 'skl', label: 'Surat Keterangan Lulus (SKL)/Menyusul' },
  { key: 'kk', label: 'Fc. Kartu Keluarga' },
  { key: 'nisn', label: 'Fc. NISN (Nomor Induk Siswa Nasional)' },
  { key: 'ktp', label: 'Fc. KTP Orang Tua' },
  { key: 'akta', label: 'Fc. Akta Kelahiran' },
  { key: 'ijazah', label: 'Fc. Ijazah (Menyusul)' },
  { key: 'kartuSosial', label: 'Fc. Kartu KPS/KKS/PKH/KIP/PIP/KIS' },
  { key: 'sktm', label: 'SKTM jika tidak memiliki kartu pada no. 8' },
]

export function UserStatus() {
  const getCompletionRate = () => {
    const total = Object.keys(userData.documents).length
    const completed = Object.values(userData.documents).filter(Boolean).length
    return Math.round((completed / total) * 100)
  }

  const completionRate = getCompletionRate()
  const completedDocs = Object.values(userData.documents).filter(Boolean).length
  const totalDocs = Object.keys(userData.documents).length

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Dashboard Siswa</h1>
        <p className="text-muted-foreground text-lg">
          Lihat data pendaftaran dan status kelengkapan dokumen Anda
        </p>
      </div>

      {/* Status Overview */}
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Status Pendaftaran
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">{completionRate}%</div>
              <p className="text-sm text-muted-foreground">Kelengkapan Dokumen</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-success">{completedDocs}</div>
              <p className="text-sm text-muted-foreground">Dokumen Terkumpul</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-warning">{totalDocs - completedDocs}</div>
              <p className="text-sm text-muted-foreground">Dokumen Belum</p>
            </div>
          </div>
          <div className="mt-6">
            {completionRate === 100 ? (
              <Alert variant="success">
                <CheckCircle2Icon />
                <AlertTitle>Dokumen Lengkap</AlertTitle>
                <AlertDescription>
                  Semua dokumen yang diperlukan telah dikumpulkan.
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <FileWarningIcon />
                <AlertTitle>Dokumen Belum Lengkap</AlertTitle>
                <AlertDescription>
                  Beberapa dokumen masih belum terkumpul. Silakan lengkapi dokumen Anda.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Student Data */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="w-5 h-5" />
            Data Pendaftaran
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Informasi Pribadi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Jenjang Pendidikan</p>
                <p className="font-medium">{userData.jenjang}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Nama Lengkap</p>
                <p className="font-medium">{userData.namaLengkap}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Jenis Kelamin</p>
                <p className="font-medium">{userData.jenisKelamin}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Tempat, Tanggal Lahir</p>
                <p className="font-medium">
                  {userData.tempatLahir}, {userData.tanggalLahir}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* School Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <School className="w-5 h-5" />
              Informasi Sekolah
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Nama Sekolah Asal</p>
              <p className="font-medium">{userData.namaSekolahAsal}</p>
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Informasi Kontak
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Nomor Telepon/HP</p>
                <p className="font-medium">{userData.noTelepon}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Alamat Lengkap</p>
                <p className="font-medium">{userData.alamat}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Parent Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi Orang Tua</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Data Ayah</h4>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Nama</p>
                  <p className="font-medium">{userData.namaAyah}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Pekerjaan</p>
                  <p className="font-medium">{userData.pekerjaanAyah}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Data Ibu</h4>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Nama</p>
                  <p className="font-medium">{userData.namaIbu}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Pekerjaan</p>
                  <p className="font-medium">{userData.pekerjaanIbu}</p>
                </div>
              </div>
            </div>
          </div>

          {userData.rekomendasiMasuk && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-2">Rekomendasi Masuk</h3>
                <p className="font-medium">{userData.rekomendasiMasuk}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Document Status */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Status Kelengkapan Dokumen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documentList.map((doc, index) => {
              const isCompleted = userData.documents[doc.key as keyof typeof userData.documents]
              return (
                <div
                  key={doc.key}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    isCompleted ? 'bg-success/10 border-success/20' : 'bg-muted/50 border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="font-medium">{doc.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-success" />
                        <Badge className="bg-success text-success-foreground">Terkumpul</Badge>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-muted-foreground" />
                        <Badge variant="outline">Belum</Badge>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <Alert variant="info" className="mt-6">
            <LightbulbIcon />
            <AlertTitle>Catatan Penting!</AlertTitle>
            <AlertDescription>
              Dokumen yang belum terkumpul dapat diserahkan langsung ke sekolah pada saat masuk.
              Pastikan semua dokumen sudah lengkap.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button onClick={() => (window.location.href = '/form')} variant="outline">
          Edit Data Pendaftaran
        </Button>
        <Button onClick={() => window.print()}>Cetak Data Pendaftaran</Button>
      </div>
    </div>
  )
}
