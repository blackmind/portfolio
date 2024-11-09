"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceYears from "./ExperienceYears";

const transition = { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Temp text";

export default function BlurReveal() {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
    >
      <motion.p
        className="text-zinc-400 text-lg mb-8 italic"
        transition={transition}
        variants={variants}
      >
        With over <ExperienceYears /> years of experience, I bring a deep
        technical and managerial skillset to drive complex software projects
        from inception to deployment. Starting as a .NET and JavaScript
        developer, I've grown into a seasoned technical project manager, leading
        cross-functional teams and delivering innovative solutions across HR
        Tech, Cybersecurity, and Mobile Gaming.
      </motion.p>
      <motion.p
        className="text-zinc-400 text-lg mb-8 italic"
        transition={transition}
        variants={variants}
      >
        I specialize in cloud transformation, with extensive expertise in
        Microsoft Azure, and excel at managing large, distributed teams to
        deliver scalable, high-performance applications. My hands-on experience
        spans full-stack web development, system architecture, and QA
        automation, ensuring that each project meets business goals with
        precision and efficiency.
      </motion.p>
      <motion.p
        className="text-zinc-400 text-lg mb-8 italic"
        transition={transition}
        variants={variants}
      >
        My portfolio showcases key projects like Energage Platform, where I
        modernized legacy systems and built subscription services managing $25M+
        in revenue, and NetTrust, a proactive cybersecurity solution for threat
        detection. My diverse background, award-winning leadership, and
        continuous focus on innovation make me a reliable partner for advancing
        technical projects and empowering teams. Let's connect to build
        future-ready solutions and transform ideas into impactful digital
        products!
      </motion.p>
    </motion.div>
  );
}
