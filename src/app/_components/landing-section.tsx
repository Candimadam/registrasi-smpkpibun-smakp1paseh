'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  Award,
  ArrowRight,
  Download,
  Phone,
  LightbulbIcon,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Link from 'next/link'

export function LandingSection() {
  const timeline = [
    {
      phase: 'Pendaftaran',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-02-28'),
      description: 'Buka pendaftaran online dan offline',
    },
    {
      phase: 'Seleksi Berkas',
      startDate: new Date('2025-03-01'),
      endDate: new Date('2025-03-15'),
      description: 'Verifikasi dan evaluasi berkas pendaftaran',
    },
    {
      phase: 'Tes Akademik',
      startDate: new Date('2025-03-20'),
      endDate: new Date('2025-03-22'),
      description: 'Tes tertulis mata pelajaran inti',
    },
    {
      phase: 'Pengumuman',
      startDate: new Date('2025-03-30'),
      endDate: new Date('2025-03-30'),
      description: 'Pengumuman hasil seleksi',
    },
  ]

  const requirements = [
    'Ijazah SMP/MTs atau surat keterangan lulus',
    'Rapor semester 1-5 SMP/MTs',
    'Surat keterangan berkelakuan baik',
    'Surat keterangan sehat dari dokter',
    'Pas foto 3x4 (6 lembar) dan 2x3 (4 lembar)',
    'Fotocopy kartu keluarga dan akta kelahiran',
    'Surat keterangan tidak mampu (jika ada)',
  ]

  const fees = [
    { item: 'Formulir Pendaftaran', amount: 'Rp 50.000' },
    { item: 'Uang Pangkal', amount: 'Rp 2.500.000' },
    { item: 'SPP per bulan', amount: 'Rp 300.000' },
    { item: 'Seragam & Buku', amount: 'Rp 800.000' },
  ]

  return (
    <section id="penerimaan">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4 text-foreground">
            Penerimaan <span className="text-blue-500">Siswa Baru</span>
          </h2>
          <p className="leading-7 text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan keluarga besar SMA Merdeka dan raih masa depan gemilang melalui
            pendidikan berkualitas.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-foreground">360</div>
            <div className="text-muted-foreground">Kuota Siswa Baru</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-500" />
            </div>
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-muted-foreground">Tingkat Kelulusan</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-foreground">60</div>
            <div className="text-muted-foreground">Hari Tersisa</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <Card className="card-soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Timeline Pendaftaran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => {
                    const today = new Date()
                    const isActive = today >= item.startDate && today <= item.endDate
                    const isDone = today > item.endDate

                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isActive
                                ? 'bg-blue-500 text-white'
                                : isDone
                                  ? 'bg-orange-500 text-white'
                                  : 'bg-neutral-200 text-neutral-500'
                            }`}
                          >
                            {isDone ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : (
                              <span className="text-sm font-bold">{index + 1}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-foreground">{item.phase}</h4>
                            {isActive && (
                              <Badge className="bg-orange-500 text-orange-500/100">Aktif</Badge>
                            )}
                            {isDone && <Badge className="bg-blue-500 text-white">Selesai</Badge>}
                          </div>
                          <p className="text-sm text-blue-500 font-medium mb-1">
                            {format(item.startDate, 'dd MMM yyyy', { locale: id })} -{' '}
                            {format(item.endDate, 'dd MMM yyyy', { locale: id })}
                          </p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-4">
              <Button variant="cta" size="lg" className="w-full group" asChild>
                <Link href="/registration-form">
                  <FileText className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Daftar Online Sekarang
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Brosur
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>

          {/* Requirements & Fees */}
          <div className="space-y-8">
            {/* Requirements */}
            <Card className="card-soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-500" />
                  Persyaratan Pendaftaran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fees */}
            <Card className="card-soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                  Informasi Biaya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fees.map((fee, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0"
                    >
                      <span className="text-sm text-foreground">{fee.item}</span>
                      <span className="font-semibold text-blue-500">{fee.amount}</span>
                    </div>
                  ))}
                  <Alert variant="info">
                    <LightbulbIcon />
                    <AlertTitle>Program Beasiswa Tersedia</AlertTitle>
                    <AlertDescription>
                      Tersedia program beasiswa untuk siswa berprestasi dan kurang mampu.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Siap Menjadi Bagian dari SMA Merdeka?</h3>
            <p className="mb-6 text-white/90">
              Jangan sampai kehabisan kuota! Daftar sekarang dan raih masa depan gemilang bersama
              kami.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-500 hover:bg-white/90 group"
              asChild
            >
              <Link href="/registration-form">
                Mulai Pendaftaran
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
