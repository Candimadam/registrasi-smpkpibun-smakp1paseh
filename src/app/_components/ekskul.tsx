export function ExtracurricularSection() {
  const activities = [
    {
      title: 'Praja Muda Karana',
      year: 2002,
      icon: 'https://cdn-icons-png.flaticon.com/128/2795/2795602.png',
    },
    {
      title: 'Palang Merah Remaja',
      year: 2003,
      icon: 'https://cdn-icons-png.flaticon.com/128/11934/11934351.png',
    },
    {
      title: 'Pecinta Alam',
      year: 2008,
      icon: 'https://cdn-icons-png.flaticon.com/512/4273/4273625.png',
    },
    {
      title: 'Sinematografi',
      year: 2016,
      icon: 'https://cdn-icons-png.flaticon.com/512/10400/10400144.png',
    },
  ]

  return (
    <section className="bg-[#f5f3ff] px-6 lg:px-20 py-20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
        Ekstrakulikuler Di <span className="text-[#4C33FF]">SMA KP 1</span> Paseh
      </h2>
      <p className="mt-2 text-gray-600">Pilihan Ekstrakulikuler di SMA KP 1 Paseh.</p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((act, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow text-left flex flex-col items-start justify-between min-h-[180px]"
          >
            <img src={act.icon} alt={act.title} className="w-10 h-10 mb-4" />
            <h3 className="font-bold text-[#1A1A1A] text-base mb-1">{act.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              Pertama kali dibentuk team tahun {act.year}
            </p>
            <span className="text-xs text-gray-400">Details</span>
          </div>
        ))}
      </div>
    </section>
  )
}
