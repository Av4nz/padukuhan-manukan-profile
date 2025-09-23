import React from "react";
import GambaranUmumCard from "../../ui/GambaranUmumCard";
import image1 from "@/public/images/static/profil/gambaran-umum1.png"
import image2 from "@/public/images/static/profil/gambaran-umum2.jpeg"
import image3 from "@/public/images/static/profil/gambaran-umum3.png"

const GambaranUmumSection = () => {
  const images = [image1, image2, image3];

  return (
    <section
      id="gambaran-umum-wilayah"
      className="py-12 px-4 lg:px-16 bg-white"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Gambaran Umum Wilayah
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <GambaranUmumCard key={index} image={img} />
          ))}
        </div>
        <div className="mt-8 md:grid md:grid-cols-2 gap-4">
          <p>
            <b>Luas wilayah:</b> ±49,6 Ha<br />
            <b>Sebelah Utara:</b> Padukuhan Tiyasan Condongcatur<br />
            <b>Sebelah Timur:</b> Padukuhan Pondok Condongcatur<br />
            <b>Sebelah Selatan:</b> Padukuhan Sangrahan Condongcatur <br />
            <b>Sebelah Barat:</b> Wilayah Kalurahan Sinduharjo
          </p>
          <br className="md:hidden"/>
          <p>
            Secara administratif terdiri dari 4 RW yaitu: <br />
            <b>RW 03:</b> RT 01 dan RT 02 <br />
            <b>RW 04:</b> RT 04, RT 05, dan RT 06 <br />
            <b>RW 05:</b> RT 07 dan RT 08 <br />
            <b>RW 64:</b> RT 09 dan RT 03
          </p>
        </div>
      </div>
    </section>
  );
};

export default GambaranUmumSection;
