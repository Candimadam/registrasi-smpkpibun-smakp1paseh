export function NewsSection() {
  const news = new Array(8).fill({
    title: "Pendaftaran SMA KP 1 Paseh Telah Dibuka !",
    image:
      "https://almasoem.sch.id/wp-content/uploads/2021/10/07-gedung-007.jpg",
    link: "#",
  });

  return (
    <section className="bg-white px-6 lg:px-20 py-20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
        Berita Terbaru Di <span className="text-[#4C33FF]">SMA KP 1</span> Paseh
      </h2>
      <p className="mt-2 text-gray-600">
        Berita Terbaru Tentang SMA KP 1 Paseh.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow hover:shadow-lg overflow-hidden text-left"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-[#1A1A1A] text-sm mb-2">
                {item.title}
              </h3>
              <a
                href={item.link}
                className="text-xs text-[#4C33FF] font-medium"
              >
                Baca selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="px-6 py-3 bg-[#4C33FF] text-white rounded-full hover:bg-[#3826cc] transition text-sm">
          Semua Berita
        </button>
      </div>
    </section>
  );
}
