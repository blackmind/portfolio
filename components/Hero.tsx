import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BlurReveal from "./ui/BlurReveal";
import MyPhoto from "./ui/MyPhoto";
import Skills from "./Skills";
import { FaLocationPin } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-20">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="white"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
        </div>


      </div>
      <div className="pb-20 pt-20 flex flex-wrap justify-center items-center flex-col md:flex-row">
        <div className="flex-grow sm:w-full xl:w-1/2 md:w-1/2 lg:w-1/2 2xl:w-1/2">
          <MyPhoto />
        </div>
        <div className="flex-grow sm:w-full xl:w-1/2 md:w-1/2 lg:w-1/2 2xl:w-1/2">
          <h2 className="text-4xl font-bold ">
            Building tomorrow's solutions with enterprise-grade excellence.
          </h2>

          <div className="py-4">
            <h3 className="py-2">
              Hi! I&apos;m Priyank.
            </h3>

            <p className="py-2">
              Fullstack technical project manager bridging business vision with technical excellence.
            </p>
            <div className="flex items-center">
              <FaLocationPin /> &nbsp;Pennsylvania, USA
            </div>

          </div>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a href={info.link} key={info.id} target="_blank">

                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <img src={info.img} alt="icons" width={20} height={20} />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
