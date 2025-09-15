import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const LainnyaCard = ({ image, nama }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="shadow rounded-2xl w-full h-[16rem] sm:h-[18rem] md:h-[18rem] relative overflow-hidden flex group cursor-pointer">
      <Image
        src={image || null}
        alt={nama}
        width={500}
        height={500}
        className="w-full h-full bg-center bg-cover object-cover object-center transform transition-transform group-hover:scale-110 duration-300 z-0"
        onError={(e) => {
          e.target.src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
        }}
      />
      <div className="absolute w-full h-full bg-black/40 z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] flex flex-col justify-end p-6 z-[2]">
        <div className="flex items-center">
          <h4 className="text-white font-semibold text-2xl hover:underline">
            {nama || "Informasi"}
          </h4>
          <FaArrowRight size={20} className="text-white ml-2"/>
        </div>
      </div>
    </div>
  );
};

export default LainnyaCard;
