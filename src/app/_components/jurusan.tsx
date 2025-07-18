export function MajorSection() {
  const majors = [
    'TEKNIK Komputer Dan Jaringan',
    'Perhotelan',
    'Rekayasa perangkat lunak',
    'Arsitektur',
    'Teknik Elektronika Industri',
    'Teknik Audio Video',
    'Teknik Instalasi Tenaga Listrik',
    'Kendaraan Ringan Otomotif',
    'Pemodelan dan Informasi Bangunan',
    'Teknik Pengelasan',
  ]

  return (
    <section className="bg-white px-6 lg:px-20 py-20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
        Jurusan Di <span className="text-[#4C33FF]">SMA KP 1</span> Paseh
      </h2>
      <p className="mt-2 text-gray-600">Pilihan program yang kalian minati di SMA KP 1 Paseh.</p>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {majors.map((major, index) => (
          <div
            key={index}
            className="bg-[#4C33FF] text-white rounded-lg p-5 text-left flex flex-col justify-between min-h-[130px] shadow-md hover:shadow-lg transition"
          >
            <div className="text-sm font-semibold mb-2">{major}</div>
            <div className="text-xs text-white/80">Details</div>
          </div>
        ))}
      </div>
    </section>
  )
}
