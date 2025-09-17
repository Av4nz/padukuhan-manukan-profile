import React, { useState } from "react";
import Image from "next/image";

const KegiatanCard = ({ image, children }) => {
  const [title, date, description] = React.Children.toArray(children);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="shadow rounded-2xl w-full h-[30rem] sm:h-[26rem] lg:h-[28rem] relative overflow-hidden flex flex-col cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-[60%]">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full bg-center bg-cover object-cover object-center"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
            }}
          />
        </div>
        <div className="bg-white w-full h-[40%] p-4 flex flex-col">
          <div className="flex justify-between gap-2">
            <h4 className="text-black font-semibold text-2xl mb-2 line-clamp-2">
              {title || "Judul Kegiatan"}
            </h4>
            <span className="text-slate-700 font-light items-end text-nowrap shrink-0">
              <p>{date || "DD Month YYYY"}</p>
            </span>
          </div>

          <p className="text-slate-800 font-light text-lg line-clamp-3 sm:line-clamp-2">
            {description || "Deskripsi singkat kegiatan..."}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-primary-700 p-4 border-b flex justify-between items-center z-5">
              <h3 className="text-2xl font-semibold text-white">
                {title || "Judul Kegiatan"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className="relative h-96 mb-4">
                <Image
                  src={image}
                  fill
                  className="object-cover object-center rounded-lg"
                  alt="Kegiatan"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="text-gray-600 mb-4">
                {date || "DD Month YYYY"}
              </div>
              <div className="prose max-w-none">
                <p>{description || "Deskripsi singkat kegiatan..."}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KegiatanCard;
