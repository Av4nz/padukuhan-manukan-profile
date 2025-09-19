import React from "react";
import Head from "next/head";
import SectionDivider from "@/components/layout/SectionDivider";
import DeskripsiProfilSection from "@/components/sections/profil-page/DeskripsiProfilSection";
import GambaranUmumSection from "@/components/sections/profil-page/GambaranUmumSection";
import StrukturPemerintahanSection from "@/components/sections/profil-page/StrukturPemerintahanSection";

const Profil = () => {
  return (
    <>
      <Head>
        <title>Profil Padukuhan Manukan</title>
        <meta
          name="description"
          content="Profil Padukuhan Manukan yang berisi deskripsi, gambaran umum, dan struktur pemerintahan."
        />
        <meta name="author" content="Padukuhan Manukan" />
        <link rel="icon" href="/manukan-logo.ico" />
      </Head>
      <main className="text-black">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-8">
            Profil Padukuhan Manukan
          </h1>
        </div>
        <DeskripsiProfilSection />
        <SectionDivider />
        <GambaranUmumSection />
        <SectionDivider />
        <StrukturPemerintahanSection />
      </main>
    </>
  );
};

export default Profil;
