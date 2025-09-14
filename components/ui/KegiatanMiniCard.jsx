import React, { Children } from 'react'
import Image from 'next/image';

const KegiatanMiniCard = ({ image, children }) => {
  const title = Children.toArray(children)[0];
  const date = Children.toArray(children)[1];
  return (
    <div
      className={`bg-white shadow-md rounded-2xl w-full h-[10rem] sm:h-[10rem] lg:h-[10rem] relative overflow-hidden flex`}
    >
      <div className="w-[40%] h-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full bg-center bg-cover object-cover object-center"
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
          }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-4">
        <h4 className="text-black font-semibold text-lg lg:text-xl mb-1 line-clamp-3">
          {title || "Nama Kegiatan"}
        </h4>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg text-end text-nowrap">
          {date || "Tanggal Kegiatan"}
        </p>
      </div>
    </div>
  );
}

export default KegiatanMiniCard
