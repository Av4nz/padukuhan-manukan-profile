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
      <Head>
        <title>Webiste Padukuhan Manukan</title>
        <meta
          name="description"
          content="Website resmi Padukuhan Manukan yang berisi profil, fasilitas, infografis, lembaga, dan kegiatan yang ada di Padukuhan Manukan."
        />
        <meta name="author" content="Padukuhan Manukan" />
        <link rel="icon" href="/manukan-logo.ico" />

        <meta property="og:title" content="Padukuhan Manukan" />
        <meta
          property="og:description"
          content="Website resmi Padukuhan Manukan yang berisi profil, fasilitas, infografis, lembaga, dan kegiatan yang ada di Padukuhan Manukan."
        />
        <meta property="og:image" content="/manukan-logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://padukuhan-manukan.netlify.app/" />
      </Head>
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
