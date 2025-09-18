import React from "react";
import Image from "next/image";
import DoughnutChart from "@/components/charts/DoughnutChart";
import wilayahData from "@/data/sebaran_wilayah.json";

const PersebaranSection = () => {
  const labels = wilayahData.map((item) => item.title);
  const values = wilayahData.map((item) => item.value);

  return (
    <section id="persebaran" className="py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Persebaran
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-auto my-auto w-full h-[350px] md:h-[400px]">
            <DoughnutChart labels={[...labels]} data={[...values]} />
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
          <div className="shadow rounded-2xl w-full aspect-[2/1] md:aspect-[2.5/1] relative overflow-hidden flex">
            <Image
              src={null}
              alt="Panorama Padukuhan Manukan"
              width={500}
              height={500}
              className="w-full h-full bg-center bg-cover object-cover object-center"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Berdasarkan Pekerjaan
          </h3>
          <div className="shadow rounded-2xl w-full aspect-[2/1] md:aspect-[2.5/1] relative overflow-hidden flex">
            <Image
              src={null}
              alt="Panorama Padukuhan Manukan"
              width={500}
              height={500}
              className="w-full h-full bg-center bg-cover object-cover object-center"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersebaranSection;
