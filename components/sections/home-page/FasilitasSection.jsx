import React from "react";
import FasilitasCard from "../../ui/FasilitasCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const fasilitasList = [
  {
    name: "Masjid Agung",
    image: null,
    url: "https://maps.app.goo.gl/qQC6wdyWxUz77cAD7",
  },
  { name: "Rumah Sakit", image: null, url: null },
  { name: "Pusat Perbelanjaan", image: null, url: null },
  { name: "Sekolah Internasional", image: null, url: null },
  { name: "Taman Kota", image: null, url: null },
  { name: "Stasiun Kereta", image: null, url: null },
  { name: "Bandara Internasional", image: null, url: null },
];

const FasilitasSection = () => {
  return (
    <section id="fasilitas" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">Fasilitas</h2>
        <hr className="text-primary-900/50 my-4" />

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={15}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          className="fasilitas-swiper"
        >
          {fasilitasList.map((fasilitas, index) => (
            <SwiperSlide key={index} className="pb-12">
              <FasilitasCard
                name={fasilitas.name}
                image={fasilitas.image}
                url={fasilitas.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FasilitasSection;
