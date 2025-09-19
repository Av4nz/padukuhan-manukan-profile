import React from "react";
import Image from "next/image";
import DoughnutChart from "@/components/charts/DoughnutChart";
import PopulationPyramidChart from "@/components/charts/PopulationPyramidChart";
import BarChart from "@/components/charts/BarChart";
import wilayahData from "@/data/sebaran_wilayah.json";
import usiaData from "@/data/usia_dan_jenis_kelamin.json";
import pekerjaanData from "@/data/pekerjaan.json";

const PersebaranSection = () => {
  const wilayahLabels = wilayahData.map((item) => item.title);
  const wilayahValues = wilayahData.map((item) => item.value);

  const usiaLabels = usiaData.map((item) => item.range)
  const maleData = usiaData.map((item) => item.laki_laki)
  const femaleData = usiaData.map((item) => item.perempuan)

  const pekerjaanLabels = pekerjaanData.map((item) => item.title)
  const pekerjaanValues = pekerjaanData.map((item) => item.value)

  return (
    <section id="persebaran" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Persebaran
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-auto my-auto w-full h-[350px] md:h-[400px]">
            <DoughnutChart labels={[...wilayahLabels]} data={[...wilayahValues]} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              Berdasarkan Wilayah
            </h3>
            <p className="mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat iure repellendus soluta illum vero incidunt, recusandae
              laudantium saepe cumque velit id corrupti consequatur at fugit
              ipsa eius voluptatem molestias exercitationem? Culpa asperiores ad
              consequuntur reiciendis accusamus nam quas, cupiditate distinctio
              dolore at omnis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deserunt reiciendis eligendi, neque illum quam
              rerum similique. Assumenda modi maiores facilis. Facilis quisquam
              quaerat voluptatem
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Berdasarkan Usia dan Jenis Kelamin
          </h3>
          <div className="mx-auto my-auto w-full h-[350px] md:h-[400px]">
            <PopulationPyramidChart labels={[...usiaLabels]} maleData={[...maleData]} femaleData={[...femaleData]} />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Berdasarkan Pekerjaan
          </h3>
          <div className="mx-auto my-auto w-full h-[350px] md:h-[400px]">
            <BarChart labels={[...pekerjaanLabels]} pekerjaanData={[...pekerjaanValues]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersebaranSection;
