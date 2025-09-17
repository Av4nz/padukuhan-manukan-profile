import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Logo from "@/public/manukan-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-primary-900 text-white p-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <a href="/" className="flex font-semibold text-xl gap-2 items-center">
          <Image
            src={Logo || null}
            alt="Logo Padukuhan Manukan"
            width={500}
            height={500}
            className="w-12"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
            }}
          />
          Padukuhan<br /> Manukan
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
