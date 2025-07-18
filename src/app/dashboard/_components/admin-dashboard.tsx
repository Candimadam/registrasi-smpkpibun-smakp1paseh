'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Search, Users, FileCheck, AlertCircle } from 'lucide-react'

// Mock data
const mockStudents = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    school: 'SD Negeri 1 Jakarta',
    jenjang: 'SMP',
    phone: '081234567890',
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
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    school: 'SMP Negeri 2 Bandung',
    jenjang: 'SMA',
    phone: '081987654321',
    documents: {
      formulir: true,
      skl: true,
      kk: true,
      nisn: true,
      ktp: true,
      akta: true,
      ijazah: true,
      kartuSosial: false,
      sktm: true,
    },
  },
  {
    id: 3,
    name: 'Budi Santoso',
    school: 'SD Islam Al-Ikhlas',
    jenjang: 'SMP',
    phone: '081456789012',
    documents: {
      formulir: true,
      skl: true,
      kk: false,
      nisn: true,
      ktp: false,
      akta: true,
      ijazah: false,
      kartuSosial: false,
      sktm: false,
    },
  },
]

const documentLabels = [
  { key: 'formulir', label: 'Formulir' },
  { key: 'skl', label: 'SKL' },
  { key: 'kk', label: 'KK' },
  { key: 'nisn', label: 'NISN' },
  { key: 'ktp', label: 'KTP Ortu' },
  { key: 'akta', label: 'Akta' },
  { key: 'ijazah', label: 'Ijazah' },
  { key: 'kartuSosial', label: 'Kartu Sosial' },
  { key: 'sktm', label: 'SKTM' },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [students, setStudents] = useState(mockStudents)

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.school.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const updateDocument = (studentId: number, docKey: string, value: boolean) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
              ...student,
              documents: {
                ...student.documents,
                [docKey]: value,
              },
            }
          : student
      )
    )
  }

  const getCompletionRate = (documents: any) => {
    const total = Object.keys(documents).length
    const completed = Object.values(documents).filter(Boolean).length
    return Math.round((completed / total) * 100)
  }

  const getCompletionBadge = (rate: number) => {
    if (rate === 100) return <Badge className="bg-success text-success-foreground">Lengkap</Badge>
    if (rate >= 70)
      return <Badge className="bg-primary text-primary-foreground">Hampir Lengkap</Badge>
    return <Badge variant="destructive">Belum Lengkap</Badge>
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Admin</h1>
          <p className="text-muted-foreground text-lg">
            Kelola pendaftaran siswa dan verifikasi dokumen
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Pendaftar</p>
                <p className="text-2xl font-bold">{students.length}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari berdasarkan nama atau sekolah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="w-5 h-5" />
            Data Pendaftar & Verifikasi Dokumen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Sekolah Asal</TableHead>
                  <TableHead>Jenjang</TableHead>
                  <TableHead>No. Telepon</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Dokumen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => {
                  const completionRate = getCompletionRate(student.documents)
                  return (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.school}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{student.jenjang}</Badge>
                      </TableCell>
                      <TableCell>{student.phone}</TableCell>
                      <TableCell>{getCompletionBadge(completionRate)}</TableCell>
                      <TableCell>
                        <div className="grid grid-cols-3 gap-2 max-w-sm">
                          {documentLabels.map((doc) => (
                            <div key={doc.key} className="flex items-center space-x-2">
                              <Checkbox
                                id={`${student.id}-${doc.key}`}
                                checked={
                                  student.documents[doc.key as keyof typeof student.documents]
                                }
                                onCheckedChange={(checked) =>
                                  updateDocument(student.id, doc.key, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`${student.id}-${doc.key}`}
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {doc.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Pendaftar SMP</p>
                <p className="text-2xl font-bold">
                  {students.filter((s) => s.jenjang === 'SMP').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Pendaftar SMA</p>
                <p className="text-2xl font-bold">
                  {students.filter((s) => s.jenjang === 'SMA').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Dokumen Belum Lengkap</p>
                <p className="text-2xl font-bold">
                  {students.filter((s) => getCompletionRate(s.documents) < 100).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
