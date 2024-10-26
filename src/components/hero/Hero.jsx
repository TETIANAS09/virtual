import React from "react";
import HeroImg from "../../assets/person.png";
import { SiGradleplaypublisher } from "react-icons/si";
import Video from "../../assets/video.mp4";
import Img from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <>
      <div className="py-8 my-2 sm:py-2 ">
        <div className="container min-h-[500px] flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 place-items-center relative z-10 text-center ">
            {/* text section */}
            <div data-aos="fade-right" className="space-y-2 order-2 sm:order-1">
              <h1 className="text-4xl  font-semibold bg-clip-text  text-transparent bg-gradient-to-r from-primary to-secondary py-4">
                Get Ready TO Enjoy VR
              </h1>
              <p className="text-sm sm:text-base">
                Discover a world of thrilling virtual reality experiences.From
                gaming and entertainment to education and training, VR offers a
                wide range of applications. Whether you're a casual gamer, a
                curious explorer, or a professional seeking innovative
                solutions, VR has something to offer everyone.
              </p>

              {/* buttons */}

              <div className="flex justify-center gap-8">
                <button className="btn">
                  <a href={Img} target="blank">
                    See More
                  </a>
                </button>

                <button>
                  <a
                    href={Video}
                    target="blank"
                    className="btn flex items-center gap-2 "
                  >
                    <SiGradleplaypublisher className="text-xl" />
                    See Demo
                  </a>
                </button>
              </div>
            </div>
            {/* img section */}
            <div data-aos="fade-left" className="order-1 sm:order-2 relative">
              <img
                src={HeroImg}
                alt="girl"
                className="w-full max-h-[400px] md: h-[380px]         object-cover"
              />

              <div className=" w-[200px] h-[200px] absolute -z-10    bg-gradient-to-r from-primary to-secondary rounded-full  top-0 left-0 blur-3xl "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
