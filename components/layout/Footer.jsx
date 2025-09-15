import React, { useState } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = ({ currentYear }) => {
  const router = useRouter();

  const menuItems = [
    { title: "Beranda", path: "/" },
    { title: "Profil", path: "/profil" },
    { title: "Infografis", path: "/infografis" },
    { title: "Lembaga", path: "/lembaga" },
    { title: "Kegiatan", path: "/kegiatan" },
  ];

  const handleClick = (path) => {
    router.push(path);
  };

  const renderNavLink = (item) => {
    return (
      <Link
        href={item.path}
        className="hover:underline"
        onClick={() => handleClick(item.path)}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <footer id="kontak" className="w-full text-white mt-auto">
      <div className="w-full h-[300px] md:h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3984241747967!2d110.39727877595405!3d-7.747495576813814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59ed439103cf%3A0xae0b0a5a5562014e!2sKWT%20(Kelompok%20Wanita%20Tani)%20Kuntani%20Manukan%20Condongcatur!5e0!3m2!1sen!2sid!4v1756738038210!5m2!1sen!2sid"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          alt="Lokasi Padukuhan Manukan"
        ></iframe>
      </div>
      <div className="bg-primary-900 px-4 py-6">
        <div className="max-w-[1240px] flex flex-col md:flex-row gap-4 mx-auto">
          <div className="flex flex-col md:w-[50%]">
            <h3 className="md:text-3xl text-2xl font-semibold mb-2">
              Padukuhan Manukan
            </h3>
            <p>
              Kelurahan Condongcatur, Kecamatan Depok, Kabupaten Sleman,
              Provinsi Daerah Istimewa Yogyakarta
            </p>
          </div>
          <div className="flex flex-col md:w-[25%]">
            <h3 className="md:text-3xl text-2xl font-semibold mb-2">
              Navigasi
            </h3>
            <ul className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <li key={index} className="cursor-pointer hover:font-medium">
                  {renderNavLink(item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:w-[25%]">
            <h3 className="md:text-3xl text-2xl font-semibold mb-2">Kontak</h3>
            <div className="flex flex-row gap-2">
              <div className="bg-white p-2 rounded">
                <a href="https://www.facebook.com/share/g/1FSQ92D9RX/">
                  <FaFacebookF className="text-black" size={25} />
                </a>
              </div>
              <div className="bg-white p-2 rounded">
                <a href="http://wa.me/6285643965751">
                  <FaWhatsapp className="text-black" size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1B1B] py-2">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-sm font-light">
            &copy; {currentYear} Padukuhan Manukan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
