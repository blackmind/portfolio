"use client";

import { motion } from "framer-motion";
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
    SiDocusign
} from "react-icons/si";
import { TbApi, TbBrandAzure } from "react-icons/tb";
import { MdSecurity, MdStorage } from "react-icons/md";
import { DiDatabase } from "react-icons/di";

const skills = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: ".NET", icon: SiDotnet },
    { name: "C#", icon: SiCsharp },
    { name: "Azure App Services", icon: TbBrandAzure },
    { name: "CosmosDB", icon: SiMongodb },
    { name: "Azure Service Bus", icon: TbBrandAzure },
    { name: "AWS", icon: FaAws },
    { name: "SQL Server", icon: SiMicrosoftsqlserver },
    { name: "Azure Storage", icon: MdStorage },
    { name: "Redis", icon: SiRedis },
    { name: "Azure App Insights", icon: TbBrandAzure },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Azure Logic Apps", icon: TbBrandAzure },
    { name: "Git", icon: FaGitAlt },
    { name: "Azure Web Jobs", icon: TbBrandAzure },
    { name: "REST API", icon: TbApi },
    { name: "OAuth", icon: MdSecurity },
    { name: "Dapper.NET", icon: DiDatabase },
    { name: "PowerShell", icon: SiPowershell },
    { name: "Azure", icon: SiMicrosoftazure },
    { name: "Salesforce", icon: FaSalesforce },
    { name: "Auth0", icon: SiAuth0 },
    { name: "DocuSign", icon: SiDocusign },
    { name: "Unity3D", icon: FaUnity },
];

const Skills = () => {
    return (
        <div className="py-20 w-full">
            <h1 className="heading">
                Skills & <span className="text-purple">Expertise</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: [-1, 1, -1, 0],
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-[#13162D] rounded-xl px-4 py-2 border-2 border-white/[0.1] hover:border-purple/80 transition-colors cursor-pointer"
                        >
                            <Icon className="w-6 h-6 text-purple" />
                            <span className="text-white/80 text-sm md:text-base">
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills; 