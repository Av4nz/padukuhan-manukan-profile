import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonWhite from "../ui/ButtonWhite";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const toggleNav = () => setNav(!nav);

  const menuItems = [
    { title: "Beranda", path: "/" },
    { title: "Profil", path: "/profil" },
    { title: "Infografis", path: "/infografis" },
    { title: "Lembaga", path: "/lembaga" },
    { title: "Kegiatan", path: "/kegiatan" },
  ];

  const handleClick = (path) => {
    setNav(false);
    router.push(path);
  };

  const renderNavLink = (item) => {
    return (
      <Link
        href={item.path}
        className="hover:text-sky-200 font-medium"
        onClick={() => handleClick(item.path)}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <nav className="text-white relative">
      <ul
        className="hidden md:flex space-x-6 justify-between"
      >
        {menuItems.map((item, index) => (
          <li key={index} className="cursor-pointer">
            {renderNavLink(item)}
          </li>
        ))}
        <ButtonWhite label="Login" link="/admin" />
      </ul>

      <div className="md:hidden flex items-center" onClick={toggleNav}>
        <button className="cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed left-0 w-full transition-all duration-500 ease-in-out ${
          nav ? "top-[88px] opacity-100 " : "top-[-100%] opacity-0"
        } z-[40]`}
      >
        <ul className="bg-primary-900 text-white">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-4 px-6 border-b border-white last:border-b-0"
            >
              {renderNavLink(item)}
            </li>
          ))}
          <li className="py-6 px-6 border-b border-white last:border-b-0">
            <ButtonWhite label="Login" link="/admin" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
