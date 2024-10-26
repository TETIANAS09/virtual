import React from "react";
import LinksMenu from "../Links";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <span id="contact"></span>
      <div className="bg-gradient-to-r from-primary to-secondary min-h-[350px]">
        <div className="container">
          <div className="pt-6 grid  grid-cols-1 md:grid-cols-2 justify-items-center  gap-0 lg:gap-20 ">
            <div data-aos="fade-right" className=" px-4 flex flex-col ">
              <h2 className="sm:text-3xl text-2xl font-bold text-center md:text-left mb-2  gap-3 ">
                Metaverse
              </h2>
              <p
                className=" text-center md:text-left max-w-[280px] font-parisienne  font-bold text-xl lg:text-2xl mb-2 tracking-wider bg-clip-text  text-transparent bg-gradient-to-r from-black to-fuchsia-900
   "
              >
                Come join us and discover the magic of virtual reality!
              </p>

              {/* Contacts */}
              <div className="py-2 flex flex-col ">
                <div className="flex items-center gap-3  mb-3 justify-center md:justify-start font-semibold cursor-pointer hover:scale-125 ">
                  <FaMobileAlt className="text-xl " />
                  <p className="text-sm lg:text-lg">+1-951-777-7777</p>
                </div>
                <div className="flex items-center gap-3 mb-3 font-semibold  cursor-pointer hover:scale-125">
                  <FaMapMarkerAlt className="text-xl  " />
                  <p className="text-sm lg:text-lg">
                    Los Angeles. Hidden Hills 777
                  </p>
                </div>
              </div>
            </div>
            {/* Links */}
            <div
              data-aos="fade-left"
              className="py-2 font-bold text-xl  lg:py-8 "
            >
              <ul className="space-y-2 text-center">
                {LinksMenu.map(({ id, name, link }) => (
                  <li key={id} className="hover:translate-x-3 duration-300 ">
                    <a
                      href={link}
                      className="cursor-pointer hover:border-b-2 hover:border-secondary transition-colors duration-500 md:tracking-wider"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* social */}

          <div className="flex justify-around items-center gap-5 py-10">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="social-icons" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icons" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icons" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="social-icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
