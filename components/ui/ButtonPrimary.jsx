import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const ButtonPrimary = ({ label, toSection, url, link }) => {
  const ButtonContent = () => (
    <span className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-900 transition duration-300 ease-in-out cursor-pointer font-semibold">
      {label}
    </span>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <ButtonContent />
      </a>
    );
  }

  if (link) {
    return (
      <Link href={link}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <ScrollLink to={toSection} spy={true} smooth={true} duration={500} offset={-50}>
      <ButtonContent />
    </ScrollLink>
  );
};

export default ButtonPrimary;
