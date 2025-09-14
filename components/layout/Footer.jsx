import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="kontak" className="w-full text-white  mt-auto ">
      <div className="bg-primary-900 p-4">
        <div className="max-w-[1240px] flex flex-col md:flex-row gap-8 md:gap-0 mx-auto">
          <div className="w-full md:max-h-[400px]">
            <div className="w-full h-[350px] md:h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3984241747967!2d110.39727877595405!3d-7.747495576813814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59ed439103cf%3A0xae0b0a5a5562014e!2sKWT%20(Kelompok%20Wanita%20Tani)%20Kuntani%20Manukan%20Condongcatur!5e0!3m2!1sen!2sid!4v1756738038210!5m2!1sen!2sid"
                className="w-full h-full"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col md:px-12 md:pt-12">
            <h3 className="md:text-3xl text-2xl font-semibold mb-2">Alamat</h3>
            <p>Jl. Mangun Sudarmo, Manukan, Condongcatur, Depok, Sleman</p>
          </div>
          <div className="flex flex-col md:pt-12 md:px-12 flex-nowrap">
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
            &copy; {new Date().getFullYear()} KWT Kuntani. All rights reserved.
            Developed by{" "}
            <a href="" className="hover:text-blue-400">
              Tim KKN-M UNY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
