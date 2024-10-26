import React from "react";
import ImgGroup from "../../assets/Group.png";
import VideoButton from "../../assets/video.mp4";
import Img from "../../assets/hero.jpeg";
import { SiGradleplaypublisher } from "react-icons/si";

const Products = () => {
  return (
    <>
      <span id="products"></span>
      <div className="py-6 mb-4 sm:py-2">
        <div className="container min-h-[500px]  flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center text-center  ">
            {/* images section */}
            <div
              data-aos="fade-right"
              className="  order-1 sm:order-1 relative"
            >
              <img
                src={ImgGroup}
                alt="people"
                className="w-full max-w-[400px] "
              />
              <div className=" w-[300px] h-[300px]  absolute -z-10    bg-gradient-to-r from-primary to-secondary rounded-full  top-0 left-0 blur-3xl "></div>
            </div>

            {/* text section */}
            <div data-aos="fade-left" className="space-y-5 order-2 sm:order-2">
              <h1 className="text-4xl  font-semibold bg-clip-text  text-transparent bg-gradient-to-r from-primary to-secondary">
                Get Ready TO Enjoy VR
              </h1>
              <p className="text-sm sm:text-base">
                VR isn't just a medium; it's a portal to new realities. Step
                into the shoes of historical figures, explore distant galaxies,
                or even become a superhero. VR lets you experience the world in
                ways you never thought possible."
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
                    href={VideoButton}
                    target="blank"
                    className="btn flex items-center gap-2 "
                  >
                    <SiGradleplaypublisher className="text-xl" />
                    See Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
