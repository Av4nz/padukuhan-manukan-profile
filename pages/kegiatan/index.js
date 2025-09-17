import React from "react";
import Head from "next/head";
import KegiatanSection from "@/components/sections/kegiatan-page/KegiatanSection";

const Kegiatan = () => {
  return (
    <>
      <Head></Head>
      <main className="text-black">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-8">
            Kegiatan padukuhan Manukan
          </h1>
          
        </div>
        <KegiatanSection />
      </main>
    </>
  );
};

export default Kegiatan;
