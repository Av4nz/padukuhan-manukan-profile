import React from "react";
import LainnyaCard from "../ui/LainnyaCard";

const InformasiLainnyaSection = () => {
  return (
    <section id="informasi-lainnya" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold">Informasi Lainnya</h1>
        <hr className="text-primary-900/50 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <LainnyaCard nama={"Profil Manukan"}/>
          <LainnyaCard nama={"Infografis"}/>
          <LainnyaCard nama={"Lembaga"}/>
        </div>
      </div>
    </section>
  );
};

export default InformasiLainnyaSection;
