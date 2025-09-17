import React from "react";
import Image from "next/image";

const StrukturPemerintahanSection = () => {
  return (
    <section
      id="struktur-pemerintahan"
      className="py-12 px-4 lg:px-16 bg-white"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Struktur Pemerintahan
        </h2>
        <div className="mt-8 flex items-center justify-center">
          <div className="shadow rounded-2xl w-full aspect-[2.3/1] relative overflow-hidden flex">
            <Image
              src={null}
              alt="Gambaran Umum Wilayah"
              fill
              className="w-full h-full bg-center bg-cover object-cover object-center"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturPemerintahanSection;
