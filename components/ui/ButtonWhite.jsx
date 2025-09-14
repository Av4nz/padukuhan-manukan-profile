import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const ButtonWhite = ({ label, toSection, url, link }) => {
  const ButtonContent = () => (
    <span className="bg-white text-black px-6 py-2 rounded-xl border border-gray-300 hover:border-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer font-semibold">
      {label}
    </span>
  );

  if (link) {
    return (
      <Link href={link}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <ScrollLink to={toSection} spy={true} smooth={true} duration={500}>
      <ButtonContent />
    </ScrollLink>
  );
};

export default ButtonWhite;
