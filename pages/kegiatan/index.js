import React from "react";
import Head from "next/head";
import { getAllKegiatan } from "@/lib/kegiatan";
import KegiatanSection from "@/components/sections/kegiatan-page/KegiatanSection";

export async function getStaticProps() {
  const allKegiatan = getAllKegiatan(4);

  const serialized = allKegiatan.map((item) => ({
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
      allKegiatan: serialized,
    },
  };
}

const index = ({ allKegiatan }) => {
  return (
    <>
      <Head>
        <title>Kegiatan Padukuhan Manukan</title>
        <meta
          name="description"
          content="Kegiatan yang ada di Padukuhan Manukan."
        />
        <meta name="author" content="Padukuhan Manukan" />
        <link rel="icon" href="/manukan-logo.ico" />
      </Head>
      <main className="text-black">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-8">
            Kegiatan padukuhan Manukan
          </h1>
        </div>
        <KegiatanSection allKegiatan={allKegiatan}/>
      </main>
    </>
  );
};

export default index;
