import Head from "next/head";
import { getLatestKegiatan } from "@/lib/kegiatan";
import SectionDivider from "@/components/layout/SectionDivider";
import CarouselSection from "@/components/sections/home-page/CarouselSection";
import SambutanSection from "@/components/sections/home-page/SambutanSection";
import KegiatanSection from "@/components/sections/home-page/KegiatanSection";
import FasilitasSection from "@/components/sections/home-page/FasilitasSection";
import InformasiLainnyaSection from "@/components/sections/home-page/InformasiLainnyaSection";

export async function getStaticProps() {
  const latestKegiatan = getLatestKegiatan(4);

  const serialized = latestKegiatan.map((item) => ({
    ...item,
    date: item.date
      ? new Date(item.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null,
    image: item.image || null,
  }));

  return {
    props: {
      latestKegiatan: serialized,
    },
  };
}

export default function Home({latestKegiatan}) {
  return (
    <>
      <Head></Head>
      <main className="text-black">
        <CarouselSection />
        <SambutanSection />
        <SectionDivider />
        <KegiatanSection latestKegiatan={latestKegiatan} />
        <SectionDivider />
        <FasilitasSection />
        <SectionDivider />
        <InformasiLainnyaSection />
      </main>
    </>
  );
}
