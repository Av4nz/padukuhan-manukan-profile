import React from "react";
import Image from "next/image";
import PopulationCard from "@/components/ui/PopulationCard";

const stats = [
  { title: "Jumlah Penduduk", value: 702 },
  { title: "Jumlah Kepala Keluarga", value: 210 },
  { title: "Jumlah Laki-Laki", value: 350 },
  { title: "Jumlah Perempuan", value: 352 },
];

const InfoUmumSection = () => {
  return (
    <section
      id="jumlah-penduduk-dan-kepala-keluarga"
      className="py-12 px-4 lg:px-16 bg-white"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Jumlah Penduduk dan Kepala Keluarga
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <PopulationCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoUmumSection;
