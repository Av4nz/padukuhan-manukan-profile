import React from "react";
import LainnyaCard from "../ui/LainnyaCard";

const InformasiLainnyaSection = () => {
  const informasi = [
    { nama: "Profil Manukan", path: "/profil", image: null},
    { nama: "Infografis", path: "/infografis", image: null},
    { nama: "Lembaga", path: "/lembaga", image: null},
  ]
  return (
    <section id="informasi-lainnya" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">Informasi Lainnya</h2>
        <hr className="text-primary-900/50 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {informasi.map((item, index) => (
            <LainnyaCard key={index} image={item.image} nama={item.nama} path={item.path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformasiLainnyaSection;
