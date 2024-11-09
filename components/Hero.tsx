import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100">
            Senior Technical Project Manager | Cloud Architect | Software
            Development Leader
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Priyank, a Fullstack Developer based in USA.
          </p>
          <TextGenerateEffect
            words="With over 14 years of experience, I bring a deep technical and
            managerial skillset to drive complex software projects from
            inception to deployment. Starting as a .NET and JavaScript
            developer, I've grown into a seasoned technical project manager,
            leading cross-functional teams and delivering innovative solutions
            across HR Tech, Cybersecurity, and Mobile Gaming. I specialize in
            cloud transformation, with extensive expertise in Microsoft Azure,
            and excel at managing large, distributed teams to deliver scalable,
            high-performance applications. My hands-on experience spans
            full-stack web development, system architecture, and QA automation,
            ensuring that each project meets business goals with precision and
            efficiency. My portfolio showcases key projects like Energage
            Platform, where I modernized legacy systems and built subscription
            services managing $25M+ in revenue, and NetTrust, a proactive
            cybersecurity solution for threat detection. My diverse background,
            award-winning leadership, and continuous focus on innovation make me
            a reliable partner for advancing technical projects and empowering
            teams. Let's connect to build future-ready solutions and transform
            ideas into impactful digital products!"
            className="text-center text-[10px] md:text-lg lg:text-lg"
          />

          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100">
            With over 14 years of experience, I bring a deep technical and
            managerial skillset to drive complex software projects from
            inception to deployment. Starting as a .NET and JavaScript
            developer, I've grown into a seasoned technical project manager,
            leading cross-functional teams and delivering innovative solutions
            across HR Tech, Cybersecurity, and Mobile Gaming. I specialize in
            cloud transformation, with extensive expertise in Microsoft Azure,
            and excel at managing large, distributed teams to deliver scalable,
            high-performance applications. My hands-on experience spans
            full-stack web development, system architecture, and QA automation,
            ensuring that each project meets business goals with precision and
            efficiency. My portfolio showcases key projects like Energage
            Platform, where I modernized legacy systems and built subscription
            services managing $25M+ in revenue, and NetTrust, a proactive
            cybersecurity solution for threat detection. My diverse background,
            award-winning leadership, and continuous focus on innovation make me
            a reliable partner for advancing technical projects and empowering
            teams. Let's connect to build future-ready solutions and transform
            ideas into impactful digital products!
          </p> */}

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
