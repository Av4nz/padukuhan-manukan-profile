import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/static/hero/hero1.webp";

const DeskripsiProfilSection = () => {
  return (
    <section id="deskripsi-profil" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center rounded-2xl overflow-hidden max-h-[350px]">
            <Image
              src={Hero1}
              alt="Panorama Padukuhan Manukan"
              width={1200}
              height={600}
              className="w-full h-full bg-center bg-cover object-cover object-center"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
              }}
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-2xl md:text-4xl font-bold">
              Deskripsi
            </h2>
            <p className="mt-4 text-justify">
                Padukuhan Manukan adalah salah satu wilayah di Kalurahan Condongcatur, Sleman, Yogyakarta, yang dikenal dengan kehidupan masyarakat yang aktif dan terorganisir serta fasilitas dasar yang lengkap untuk menunjang keseharian warganya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeskripsiProfilSection;
