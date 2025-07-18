export function WhyUsSection() {
  const features = [
    {
      title: 'Fasilitas Lengkap',
      description: 'Penunjang belajar dengan kualitas terbaik',
      icon: '💻',
    },
    {
      title: 'Lingkungan Nyaman',
      description: 'Berada di lingkungan yang nyaman dan asri',
      icon: '🏢',
    },
    {
      title: 'Pengajar Kompeten',
      description: 'Guru terbaik dengan pengalaman',
      icon: '👩‍🏫',
    },
    {
      title: 'Kerja Sama Luas',
      description: 'Dapat kesempatan kerja yang lebih terjamin',
      icon: '🤝',
    },
  ]

  return (
    <section className="bg-white px-6 lg:px-20 py-20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
        Kenapa Harus <span className="text-[#4C33FF]">SMA KP 1</span> Paseh?
      </h2>
      <p className="mt-2 text-gray-600">
        Alasan kenapa harus memilih untuk bergabung dengan SMA KP 1 Paseh.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-xl shadow p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-[#1A1A1A]">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
