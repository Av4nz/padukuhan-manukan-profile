import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Hero1 from "@/public/images/static/hero/hero1.webp";
import Hero2 from "@/public/images/static/hero/hero2.webp";
import Hero3 from "@/public/images/static/hero/hero3.webp";
import Hero4 from "@/public/images/static/hero/hero4.webp";

const CarouselSection = () => {
  const images = [Hero1, Hero2, Hero3, Hero4];

  return (
    <section className="relative h-[calc(100vh-88px)] md:h-[600px] w-full overflow-hidden flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => {
          const images = document.querySelectorAll(".carousel-zoom");
          images.forEach((img) => {
            img.style.animation = "none";
            img.offsetHeight;
            img.style.animation = "";
          });
        }}
        className="!overflow-x-hidden !rounded-none w-full h-full carousel-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              className="flex w-full h-full bg-center bg-cover object-cover object-center -z-10 carousel-zoom"
              src={image || null}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute w-full h-full bg-black/60 -z-10" />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev hidden md:block text-white z-10" />
        <div className="swiper-button-next hidden md:block text-white z-10" />
      </Swiper>
      <div className="absolute max-w-[1240px] h-full flex items-center justify-center flex-col z-1 text-white pointer-events-none">
        <h1 className="text-center flex flex-col gap-2">
          <span className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Selamat Datang
          </span>
          <span className="text-xl sm:text-3xl md:text-4xl font-medium">
            Website Padukuhan Manukan
          </span>
        </h1>
      </div>
    </section>
  );
};

export default CarouselSection;
