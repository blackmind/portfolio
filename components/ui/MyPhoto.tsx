"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MyPhoto = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[288px] h-[288px] xl:w-[496px] xl:h-[496px] mix-blend-lighten absolute ml-28 mt-1 xl:ml-1 xl:mt-0"
        >
          <Image
            src="/priyank-professional-no-bg.png"
            priority
            quality={100}
            fill
            alt="Profile Picture of Priyank Khamitkar"
            className="object-contain rounded-full aspect-square [mask-image:radial-gradient(circle_at_center,white_55%,transparent_70%)]"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl: w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default MyPhoto;
