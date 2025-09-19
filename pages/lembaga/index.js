import React from "react";
import Head from "next/head";
import SectionDivider from "@/components/layout/SectionDivider";
import LembagaSection from "@/components/sections/lembaga-page/LembagaSection";

const Lembaga = () => {
  return (
    <>
      <Head>
        <title>Lembaga Padukuhan Manukan</title>
        <meta
          name="description"
          content="Lembaga dan kelompok masyarakat yang ada di Padukuhan Manukan."
        />
        <meta name="author" content="Padukuhan Manukan" />
        <link rel="icon" href="/manukan-logo.ico" />
      </Head>
      <main className="text-black">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-8">
            Lembaga dan Kelompok Masyarakat
          </h1>
        </div>
        <LembagaSection />
      </main>
    </>
  );
};

export default Lembaga;
