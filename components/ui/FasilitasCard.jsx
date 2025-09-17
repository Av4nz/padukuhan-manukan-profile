import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

const FasilitasCard = ({ image, name, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };

  return (
    <div className="bg-primary-700 rounded-3xl p-2">
      <div className="rounded-2xl w-full h-[28rem] sm:h-[20rem] lg:h-[20rem] relative overflow-hidden">
        <div className="w-full h-[80%] sm:h-[80%] lg:h-[80%] overflow-hidden">
          <Image
            src={image || null}
            alt={name || "Nama Fasilitas"}
            width={400}
            height={400}
            className="w-full h-full bg-center bg-cover object-cover object-center"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-white flex items-center justify-center p-4">
          <h4 className="text-black font-semibold text-xl text-center">
            {name || "Nama Fasilitas"}
          </h4>
        </div>
      </div>
      <div
        className="px-4 pt-4 pb-2 text-white flex items-center justify-between cursor-pointer font-medium"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => url && handleClick(url)}
      >
        <a
          className={`transition-all duration-300 ${
            isHovered ? "underline" : "text-white"
          } flex items-center`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLocationDot size={20} className="inline mr-2" />
          Lihat Lokasi
        </a>
        <FaArrowRight
          className={`${
            isHovered ? "translate-x-2" : ""
          } transition-transform transform duration-300`}
          size={20}
        />
      </div>
    </div>
  );
};

export default FasilitasCard;
