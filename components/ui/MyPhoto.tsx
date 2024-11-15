"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaUnity,
  FaSalesforce
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiCsharp,
  SiMicrosoftazure,
  SiRedis,
  SiKubernetes,
  SiMicrosoftsqlserver,
  SiPowershell,
  SiAuth0,
  SiMongodb,
  SiDocusign,
  SiPostgresql,
  SiMysql
} from "react-icons/si";
import { TbApi, TbBrandAzure } from "react-icons/tb";
import { MdSecurity, MdStorage } from "react-icons/md";
import { DiDatabase } from "react-icons/di";
import { AiOutlineNodeIndex } from "react-icons/ai";

const workatoLogo = "/workato-logo.png";

const skills = {
  "Frontend": [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind", icon: SiTailwindcss },
    // { name: "HTML5", icon: FaHtml5 },
    // { name: "CSS", icon: FaCss3Alt },
  ],
  "Backend": [
    { name: ".NET", icon: SiDotnet },
    { name: "C#", icon: SiCsharp },
    { name: "SQL Server", icon: SiMicrosoftsqlserver },
    { name: "Postgres", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "CosmosDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },
    // { name: "REST API", icon: TbApi },
    // { name: "Dapper.NET", icon: DiDatabase },
    // { name: "PowerShell", icon: SiPowershell },
    // { name: "Git", icon: FaGitAlt },
  ],
  "Cloud Services": [
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Azure", icon: SiMicrosoftazure },
    // { name: "Azure App Services", icon: TbBrandAzure },
    // { name: "Azure Service Bus", icon: TbBrandAzure },
    // { name: "Azure Storage", icon: MdStorage },
    // { name: "Azure App Insights", icon: TbBrandAzure },
    // { name: "Azure Logic Apps", icon: TbBrandAzure },
    // { name: "Azure Web Jobs", icon: TbBrandAzure },
    // { name: "AWS", icon: FaAws },
  ],
  "Integrations": [
    { name: "Workato", logoImg: workatoLogo },
    { name: "n8n", icon: AiOutlineNodeIndex },
    // { name: "OAuth", icon: MdSecurity },
    // { name: "Auth0", icon: SiAuth0 },
    // { name: "Salesforce", icon: FaSalesforce },
    // { name: "DocuSign", icon: SiDocusign },
  ],
  "Gaming": [
    { name: "Unity3D", icon: FaUnity },
  ],
};

const MyPhoto = () => {
  const flatSkills = Object.values(skills).flat();
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[288px] h-[288px] xl:w-[496px] xl:h-[496px] mix-blend-lighten"
        >
          <Image
            src="/priyank-professional-no-bg.png"
            priority
            quality={100}
            fill
            alt="Profile Picture of Priyank Khamitkar"
            className="object-contain rounded-full aspect-square  [mask-image:radial-gradient(circle_at_center,white_60%,transparent_70%)]"
          />
        </motion.div>
        {/* {flatSkills.map((skill, index) => {
          return (
            <motion.div
              className="box"
              initial={{ offsetDistance: "0%", scale: 1 }}
              animate={{ offsetDistance: "100%", scale: 1 }}
              transition={{
                duration: 7,
                // ease: "easeInOut",
                repeat: Infinity,
                // repeatType: "loop",
                delay: 0.4 * index,
              }}>
              {skill.logoImg ? (
                <Image
                  src={skill.logoImg}
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="text-purple"
                />
              ) : (
                <skill.icon className="w-6 h-6 text-purple" />
              )}
            </motion.div>
          );
        })} */}
      </motion.div>
    </div>
  );
};

export default MyPhoto;