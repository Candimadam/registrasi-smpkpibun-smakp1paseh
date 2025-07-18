import Facebook from '@/components/svg/facebook-logo'
import Instagram from '@/components/svg/instagram-logo'
import YouTube from '@/components/svg/youtube-logo'

export function HomeSection() {
  return (
    <section className="w-full mt-7 px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center bg-white">
      {/* Left Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
          <span className="text-[#4C33FF]">
            Sekolah Menengah Atas <br />
            KP 1
          </span>{' '}
          Paseh
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan berprestasi di segala
          bidang yang dapat bersaing di dunia internasional
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-[#4C33FF] text-white rounded-full hover:bg-[#3826cc] transition">
            Mulai
          </button>
          <button className="px-6 py-3 border border-[#4C33FF] text-[#4C33FF] rounded-full hover:bg-[#f2f0ff] transition">
            Video <span className="ml-2">▶</span>
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          We are in Socials Media :
          <span className="flex items-center gap-2 mt-1">
            <Facebook className="size-8" />
            <Instagram className="size-8" />
            <YouTube className="size-9" />
          </span>
        </p>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 mt-12 lg:mt-0 relative flex justify-center">
        <div className="w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.smadwiwarna.sch.id/wp-content/uploads/2020/07/1556532236-23314091-ghost-MHL-0924-1-1.jpg" // Ganti ke path lokal bila perlu
            alt="School Corridor"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Bubble Top Right */}
        <div className="absolute top-4 right-10 bg-white px-4 py-2 rounded-lg shadow text-sm max-w-xs">
          ⭐⭐⭐⭐⭐ <br />
          "Sekolahnya bersih dan lingkungan nyaman."
        </div>
        {/* Bubble Bottom Left */}
        <div className="absolute bottom-6 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm max-w-xs">
          "Belajar itu Menyenangkan Kuncinya Jangan Pernah Menyerah Oleh Apapun Itu"
        </div>
      </div>
    </section>
  )
}
