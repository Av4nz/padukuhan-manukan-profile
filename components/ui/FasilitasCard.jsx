import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";

const FasilitasCard = ({ image, name, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(image);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Modal = () => (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-[90%] max-h-[90%]">
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={handleModalToggle}
        >
          <FaTimes />
        </button>
        <Image
          src={imageSrc}
          alt={name || "Nama Fasilitas"}
          width={900}
          height={800}
          className="w-full h-auto object-contain"
          onError={() => setImageSrc(placeholderImage)}
        />
        <div className="p-4 text-center">
          <h4 className="text-black font-semibold text-xl">
            {name || "Nama Fasilitas"}
          </h4>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-primary-700 rounded-3xl p-2">
      <div
        className="rounded-2xl w-full h-[28rem] sm:h-[20rem] lg:h-[20rem] relative overflow-hidden cursor-pointer"
        onClick={handleModalToggle}
      >
        <div className="w-full h-[80%] sm:h-[80%] lg:h-[80%] overflow-hidden">
          <Image
            src={imageSrc}
            alt={name || "Nama Fasilitas"}
            width={500}
            height={400}
            className="w-full h-full bg-center bg-cover object-cover object-center"
            onError={() => setImageSrc(placeholderImage)}
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
      >
        <a
          className={`transition-all duration-300 ${
            isHovered ? "underline" : "text-white"
          } flex items-center w-full`}
          href={url}
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
      {isModalOpen && createPortal(<Modal />, document.body)}
    </div>
  );
};

export default FasilitasCard;
