import { Link } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "../constants/index.js";
import { useState } from "react";
import DropDownMenu from "./NavbarDropdown.jsx";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const onToggleMenu = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white">
      <div className="sm:px-16 px-8 py-5">
        <nav className="flex justify-between items-center mx-auto max-w-screen-wide">
          <a href="/#hero">
            <img src={headerLogo} alt="logo" width="130" height="29" />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 font-montserrat leading-normal font-medium text-lg max-lg:hidden wide:mr-24">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div>
          {/* Mobile Hamburger Menu */}
          <div
            className="hidden cursor-pointer max-lg:block"
            onClick={onToggleMenu}
          >
            {showDropDown ? (
              <Icon icon="material-symbols:close" width="25" height="25" />
            ) : (
              <Icon icon="material-symbols:dehaze" width="25" height="25" />
            )}
          </div>
        </nav>
      </div>
      {/* Mobile Drop Down */}
      <DropDownMenu showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
    </header>
  );
};

export default Navbar;
