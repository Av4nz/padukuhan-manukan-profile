import Head from "next/head";
import SectionDivider from "@/components/layout/SectionDivider";
import CarouselSection from "@/components/sections/home-page/CarouselSection";
import SambutanSection from "@/components/sections/home-page/SambutanSection";
import KegiatanSection from "@/components/sections/home-page/KegiatanSection";
import FasilitasSection from "@/components/sections/home-page/FasilitasSection";
import InformasiLainnyaSection from "@/components/sections/home-page/InformasiLainnyaSection";

export default function Home() {
  return (
    <>
      <Head></Head>
      <main className="text-black">
        <CarouselSection />
        <SambutanSection />
        <SectionDivider />
        <KegiatanSection />
        <SectionDivider />
        <FasilitasSection />
        <SectionDivider />
        <InformasiLainnyaSection />
      </main>
    </>
  );
}
