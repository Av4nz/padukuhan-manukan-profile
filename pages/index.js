import Head from "next/head";
import SectionDivider from "@/components/layout/SectionDivider";
import CarouselSection from "@/components/sections/CarouselSection";
import SambutanSection from "@/components/sections/SambutanSection";
import KegiatanSection from "@/components/sections/KegiatanSection";
import FasilitasSection from "@/components/sections/FasilitasSection";

export default function Home() {
  return (
    <>
      <Head>

      </Head>
      <main className="text-black">
        <CarouselSection />
        <SambutanSection />
        <SectionDivider />
        <KegiatanSection />
        <SectionDivider />
        <FasilitasSection />

      </main>
    </>
  );
}
