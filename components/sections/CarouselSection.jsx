import React from "react";
import { Carousel } from "flowbite-react";
import ButtonPrimary from "../ui/ButtonPrimary";
import Image from "next/image";

const CarouselSection = () => {

  return (
    <section className="relative h-[calc(100vh-80px)] md:h-[700px] w-full overflow-hidden flex justify-center items-center">

      <div className="absolute w-full h-full bg-black/60" />
      <div className="absolute max-w-[1240px] h-full flex items-center justify-center flex-col z-1 text-white">
        <h1 className="text-center mb-6">
          <span className="text-4xl md:text-6xl font-bold">KWT Kuntani</span>
          <br />
          <span className="text-xl md:text-3xl font-light">
            Kelompok Wanita Tani Kuntani
          </span>
        </h1>
        <div className="flex flex-row gap-4 mx-auto flex-wrap justify-center items-center">
          <ButtonPrimary label={"Lihat Produk"} toSection={"produk"} />
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
