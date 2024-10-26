import React from "react";
import { MdOutlinePriceChange } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import Video_1 from "../../assets/whywe/video.mp4";
import Video_2 from "../../assets/whywe/we-3.mp4";
import Video_3 from "../../assets/whywe/we-2.mp4";

const VideoIcon = () => (
  <CiVideoOn className="text-5xl text-primary group-hover:text-black group-active:text-black duration-300" />
);
const StarIcon = () => (
  <CiStar className="text-5xl text-primary group-hover:text-black group-active:text-black duration-300" />
);
const PriceIcon = () => (
  <MdOutlinePriceChange className="text-5xl text-primary group-hover:text-black group-active:text-black duration-300" />
);

const CardData = [
  {
    name: "Captivating Videos",
    icon: <VideoIcon />,
    link: Video_1,
    description: "Immersive Experiences Tailored to Your Needs.",
  },
  {
    name: "Successful Projects",
    icon: <StarIcon />,
    link: Video_2,
    description: "Expert Team and Proven Track Record.",
  },
  {
    name: "Unique Offerings",
    icon: <PriceIcon />,
    link: Video_3,
    description: "Innovative Solutions and Competitive Pricing.",
  },
];

const WhyWe = () => {
  return (
    <>
      <span id="whywe"></span>
      <div className="container py-4 my-2 sm:min-h-[400px] ">
        <div data-aos="zoom-in">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center bg-clip-text  text-transparent bg-gradient-to-r from-primary to-secondary mb-5 tracking-widest">
            Why We?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {CardData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 300}
                key={index}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-fuchsia-300 shadow-xl dark:bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
                <a
                  href={`${data.link} `}
                  target="_blank"
                  className="inline-block text-lg font-semibold py-2 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWe;
