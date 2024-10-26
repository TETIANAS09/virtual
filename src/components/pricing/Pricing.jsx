import React, { useState, useEffect } from "react";
import im1 from "../../assets/pricing/VR-1.png";
import im2 from "../../assets/pricing/vr-dev.png";
import im3 from "../../assets/pricing/vr-glass.png";
import im4 from "../../assets/pricing/vr-glasses.png";
import im5 from "../../assets/pricing/VR.png";
import im6 from "../../assets/pricing/vr_device.png";

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [im1, im2, im3, im4, im5, im6];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change the image every 3 seconds
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <span id="pricing"></span>
      <div className="py-2 my-2 sm:py-2 ">
        <div className="container min-h-[500px] flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center text-center  ">
            {/* images section */}
            <div data-aos="fade-left" className="  order-2 sm:order-2 slider ">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={activeIndex === index ? "active" : ""}
                />
              ))}
              <div className=" w-[200px] h-[200px]  absolute -z-10    bg-gradient-to-r from-primary to-secondary rounded-full  top-0 left-0 blur-3xl "></div>
            </div>

            {/* text section */}
            <div data-aos="fade-right" className="space-y-3 order-1 sm:order-1">
              <h1 className="text-4xl  font-semibold bg-clip-text  text-transparent bg-gradient-to-r from-primary to-secondary">
                Start Now !
              </h1>
              <p className="text-sm sm:text-base">
                Experience the future of virtual reality at an affordable price.
                Our flexible pricing plans cater to your needs, whether you're
                an individual user or a business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
