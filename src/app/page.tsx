import { WhyUsSection } from "./_components/alasan";
import { AlumniSection } from "./_components/alumni";
import { NewsSection } from "./_components/berita";
import { ExtracurricularSection } from "./_components/ekskul";
import { Footer } from "./_components/footer";
import { GallerySection } from "./_components/gallery";
import { MajorSection } from "./_components/jurusan";
import { HomeNavbar } from "./_components/navbar";
import { ProfileSection } from "./_components/profil";
import { HomeSection } from "./_components/tentang";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <HomeSection />
      <WhyUsSection />
      <ProfileSection />
      <MajorSection />
      <ExtracurricularSection />
      <NewsSection />
      <GallerySection />
      <AlumniSection />
      <Footer />
    </div>
  );
}
