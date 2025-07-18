export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-6 lg:px-20 py-10 text-sm text-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h4 className="text-xl font-bold text-[#4C33FF] mb-2">
            SMA KP 1 Paseh
          </h4>
          <p className="max-w-xs">
            SMA KP 1 Paseh adalah tempat mencetak generasi bangsa yang siap
            bersaing di dunia internasional.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold mb-1">Navigasi</h5>
          <a href="#" className="hover:text-[#4C33FF]">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-[#4C33FF]">
            Program
          </a>
          <a href="#" className="hover:text-[#4C33FF]">
            Berita
          </a>
          <a href="#" className="hover:text-[#4C33FF]">
            Kontak
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold mb-1">Kontak</h5>
          <p>Paseh, Indonesia</p>
          <p>Email: info@smapkp1paseh.ac.id</p>
          <p>Telp: (0411) 123-456</p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SMA KP 1 Paseh. All rights reserved.
      </div>
    </footer>
  );
}
