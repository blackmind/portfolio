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
          className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] mix-blend-lighten absolute ml-32 mt-6 xl:ml-7 xl:mt-6"
        >
          <Image
            src="/profile-sq-rounded.png"
            priority
            quality={100}
            fill
            alt="Profile Picture of Priyank Khamitkar"
            className="object-contain rounded-full aspect-square"
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
