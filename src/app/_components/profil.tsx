export function ProfileSection() {
  return (
    <section className="bg-white px-6 lg:px-20 py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
          Profil <span className="text-[#4C33FF]">SMA KP 1</span> Paseh
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://us.oricon-group.com/upimg/detail/1000/1268/img660/0fa2c8ab06f10d6d27431d88a620163b.jpg" // Ganti dengan foto kepala sekolah asli
            alt="Kepala Sekolah"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1A1A1A] mb-4">
            Sambutan Kepala Sekolah SMA KP 1 Paseh
          </h3>
          <p className="text-gray-600 mb-4">
            sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan berprestasi di segala
            bidang yang dapat bersaing di dunia internasional
          </p>
          <p className="text-gray-600 mb-6">
            dan Sekolah adalah tempat anak-anak mendapatkan dukungan untuk melengkapi
            pembelajarannya di sekolah
          </p>
          <button className="px-6 py-3 bg-[#4C33FF] text-white rounded-full hover:bg-[#3826cc] transition text-sm">
            Baca Selanjutnya <span className="ml-2">▶</span>
          </button>
        </div>
      </div>
    </section>
  )
}
