export function GallerySection() {
  const photos = [
    {
      title: 'Meja Karya Salah satu Siswa',
      desc: 'SMA KP 1 Paseh',
      image: 'https://almasoem.sch.id/wp-content/uploads/2021/10/07-gedung-007.jpg',
    },
    {
      title: 'Reuni Akbar Ang 23',
      desc: 'Alumni SMA KP 1 Paseh',
      image: 'https://almasoem.sch.id/wp-content/uploads/2021/10/07-gedung-007.jpg',
    },
    {
      title: 'Perpustakaan Baru',
      desc: 'Perpustakaan SMA KP 1 Paseh',
      image: 'https://almasoem.sch.id/wp-content/uploads/2021/10/07-gedung-007.jpg',
    },
  ]

  return (
    <section className="bg-[#341EFF] px-6 lg:px-20 py-20 text-center text-white">
      <h2 className="text-2xl lg:text-3xl font-bold mb-12">
        Foto Documentasi Kegiatan <br /> SMK Negeri Makassar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
            <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-4 py-3 text-left">
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-200">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
