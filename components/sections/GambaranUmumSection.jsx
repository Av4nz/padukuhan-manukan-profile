import React from "react";
import GambaranUmumCard from "../ui/GambaranUmumCard";

const GambaranUmumSection = () => {
  return (
    <section
      id="gambaran-umum-wilayah"
      className="py-12 px-4 lg:px-16 bg-white"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Gambaran Umum Wilayah
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <GambaranUmumCard />
            <GambaranUmumCard />
            <GambaranUmumCard />
        </div>
      </div>
    </section>
  );
};

export default GambaranUmumSection;
