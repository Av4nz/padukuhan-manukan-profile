import React from "react";
import Head from "next/head";
import SectionDivider from "@/components/layout/SectionDivider";
import DeskripsiInfografisSection from "@/components/sections/infografis-page/DeskripsiInfografisSection";
import InfoUmumSection from "@/components/sections/infografis-page/InfoUmumSection";
import PersebaranSection from "@/components/sections/infografis-page/PersebaranSection";

const Inforgrafis = () => {
  return (
    <>
      <Head>
        <title>Infografis Padukuhan Manukan</title>
        <meta
          name="description"
          content="Infografis Padukuhan Manukan yang berisi informasi umum dan persebaran wilayah."
        />
        <meta name="author" content="Padukuhan Manukan" />
        <link rel="icon" href="/manukan-logo.ico" />
      </Head>
      <main className="text-black">
        <DeskripsiInfografisSection />
        <SectionDivider />
        <InfoUmumSection />
        <SectionDivider />
        <PersebaranSection />
      </main>
    </>
  );
};

export default Inforgrafis;
