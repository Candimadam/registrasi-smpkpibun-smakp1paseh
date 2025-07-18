export function AlumniSection() {
  const alumni = [
    {
      name: "Akane Kurokawa ST",
      year: 2009,
      description:
        "Liberti adalah seorang alumi yang bersekolah di Inggris saat ini dan dikenal secara tekal alumni yang berprestasi.",
      image:
        "https://us.oricon-group.com/upimg/detail/1000/1268/img660/0fa2c8ab06f10d6d27431d88a620163b.jpg",
    },
    {
      name: "Aquamarine Hoshino ST",
      year: 2014,
      description:
        "Liberti adalah seorang alumi yang bersekolah di Inggris saat ini dan dikenal secara tekal alumni yang berprestasi.",
      image:
        "https://i.pinimg.com/736x/23/84/6f/23846f6415382094e38d8560d7a8ee7b.jpg",
    },
  ];

  return (
    <section className="bg-white px-6 lg:px-20 py-20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
        Profil Alumni <span className="text-[#4C33FF]">SMA KP 1</span> Paseh
      </h2>
      <p className="mt-2 text-gray-600">Profil Alumni SMA KP 1 Paseh.</p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {alumni.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-6 items-center text-left"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 object-cover rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A]">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Angkatan {item.year}</p>
              <p className="text-sm text-gray-700 mb-2">{item.description}</p>
              <a href="#" className="text-xs text-[#4C33FF] font-medium">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
