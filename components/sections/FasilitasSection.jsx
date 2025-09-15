import React from "react";
import FasilitasCard from "../ui/FasilitasCard";

const FasilitasSection = () => {
  return (
    <section id="fasilitas" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">Fasilitas</h2>
        <hr className="text-primary-900/50 my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <FasilitasCard />
        </div>
      </div>
    </section>
  );
};

export default FasilitasSection;
