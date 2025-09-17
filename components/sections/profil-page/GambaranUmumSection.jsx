import React from "react";
import GambaranUmumCard from "../../ui/GambaranUmumCard";

const GambaranUmumSection = () => {
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
          <GambaranUmumCard />
          <GambaranUmumCard />
          <GambaranUmumCard />
        </div>
        <div className="mt-8 text-justify md:grid md:grid-cols-2 gap-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            quos fuga nostrum rerum aliquid! Natus sequi veniam atque officia,
            est minima impedit vitae hic, quos deserunt numquam dignissimos
            magni similique laborum alias maxime. Architecto, voluptatum rem. Ab
            temporibus optio quam aspernatur et in magni laborum, sint dolor
            earum, aut repudiandae nihil blanditiis architecto iure repellendus,
            distinctio nesciunt quos obcaecati adipisci? Ratione cupiditate
            ipsam, corrupti quidem minus soluta asperiores quam eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi
            possimus, quia corporis illo recusandae natus impedit vel ratione,
            incidunt omnis fugit neque unde! Impedit rem minima error libero,
            odio tempore reprehenderit, alias in soluta exercitationem enim esse
            expedita pariatur dignissimos. Dicta, iusto! Quaerat fuga itaque
            mollitia ut corrupti vero deleniti commodi eius vel est. Veniam
            magnam illo distinctio consequatur!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GambaranUmumSection;
