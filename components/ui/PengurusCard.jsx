import React from "react";
import Image from "next/image";

const PengurusCard = ({ image, nama, posisi }) => {
  return (
    <div className="shadow rounded-2xl w-full h-[28rem] sm:h-[24rem] lg:h-[28rem] relative overflow-hidden flex">
      <Image
        src={image}
        alt={nama}
        width={500}
        height={500}
        className="w-full h-full bg-center bg-cover object-cover object-center"
      />
      <div className="absolute w-full bg-linear-to-t from-black to-transparent bottom-0 left-0 h-[40%]" />
      <div className="absolute bottom-0 left-0 w-full h-[40%] flex flex-col justify-end p-6">
        <h4 className="text-white font-semibold text-2xl">
          {nama || "Nama Pengurus"}
        </h4>
        <p className="text-white font-light text-lg">
          {posisi || "Posisi Pengurus"}
        </p>
      </div>
    </div>
  );
};

export default PengurusCard;
