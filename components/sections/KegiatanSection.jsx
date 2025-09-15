import React from "react";
import KegiatanMiniCard from "../ui/KegiatanMiniCard";
import ButtonPrimary from "../ui/ButtonPrimary";

const KegiatanSection = () => {
  return (
    <section id="kegiatan" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Kegiatan di Manukan
          </h2>
          <div className="hidden md:block">
            <ButtonPrimary label={"Lihat Lainnya"} />
          </div>
        </div>

        <hr className="text-primary-900/50 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <KegiatanMiniCard />
          <KegiatanMiniCard />
          <KegiatanMiniCard />
          <KegiatanMiniCard />
        </div>
        <div className="flex justify-center mt-12 md:hidden">
          <ButtonPrimary label={"Lihat Lainnya"} />
        </div>
      </div>
    </section>
  );
};

export default KegiatanSection;
