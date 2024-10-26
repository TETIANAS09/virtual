import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import LinksMenu from "../Links";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <span id="home"></span>
      <header className="max-w-full ">
        <nav className="container py-1 md:py-0">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <div>
              <img src={Logo} alt="logo" className="w-20 h-16 " />
            </div>
            {/* menu */}

            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {LinksMenu.map(({ id, name, link }) => (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <DarkMode />
              </ul>
            </div>

            {/* Mobile View Sidebar */}
            <div className="md:hidden block">
              <div className="flex items-center gap-4">
                <DarkMode />
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer "
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer "
                    size={30}
                  />
                )}
              </div>
              {showMenu && (
                <ul className="flex flex-col  z-50 items-center  bg-brandlight py-10 absolute  top-16 left-0 w-full glass h-[430px]">
                  {LinksMenu.map(({ id, name, link }) => (
                    <li key={id} className=" px-9 py-6 ">
                      <a
                        href={link}
                        onClick={() => {
                          toggleMenu();
                        }}
                        className="text-2xl font-semibold hover:text-primary hover:border-b-2 hover:border-secondary transition-colors duration-500"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
