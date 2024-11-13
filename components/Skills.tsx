"use client";

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
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
    ],
    "Backend": [
        { name: ".NET", icon: SiDotnet },
        { name: "C#", icon: SiCsharp },
        { name: "SQL Server", icon: SiMicrosoftsqlserver },
        { name: "Postgres", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "CosmosDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "REST API", icon: TbApi },
        { name: "Dapper.NET", icon: DiDatabase },
        { name: "PowerShell", icon: SiPowershell },
        { name: "Git", icon: FaGitAlt },
    ],
    "Cloud Services": [
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Azure", icon: SiMicrosoftazure },
        { name: "Azure App Services", icon: TbBrandAzure },
        { name: "Azure Service Bus", icon: TbBrandAzure },
        { name: "Azure Storage", icon: MdStorage },
        { name: "Azure App Insights", icon: TbBrandAzure },
        { name: "Azure Logic Apps", icon: TbBrandAzure },
        { name: "Azure Web Jobs", icon: TbBrandAzure },
        { name: "AWS", icon: FaAws },
    ],
    "Integrations": [
        { name: "Workato", logoImg: workatoLogo },
        { name: "n8n", icon: AiOutlineNodeIndex },
        { name: "OAuth", icon: MdSecurity },
        { name: "Auth0", icon: SiAuth0 },
        { name: "Salesforce", icon: FaSalesforce },
        { name: "DocuSign", icon: SiDocusign },
    ],
    "Gaming": [
        { name: "Unity3D", icon: FaUnity },
    ],
};

const Skills = () => {
    return (
        <div className="py-20 w-full">
            <h1 className="heading">
                Skills & <span className="text-purple">Expertise</span>
            </h1>

            <div className="mt-6 w-full">
                <table className="w-full text-left text-white border-collapse">
                    <tbody>
                        {Object.entries(skills).map(([section, skillsArray]) => (
                            <tr key={section} className="border-b border-white/[0.1]">
                                <td className="p-4 text-lg font-medium w-min whitespace-nowrap">{section}: </td>
                                <td className="p-4">
                                    <div className="flex flex-wrap gap-2">
                                        {skillsArray.map((skill, index) => (
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
                                                className="flex items-center gap-1 bg-[#13162D] rounded-lg px-2 py-1 border border-white/[0.1] hover:border-purple/80 transition-colors cursor-pointer"
                                            >
                                                {skill.logoImg ? (
                                                    <Image
                                                        src={skill.logoImg}
                                                        alt={skill.name}
                                                        width={18}
                                                        height={18}
                                                        className="text-purple"
                                                    />
                                                ) : (
                                                    <skill.icon className="w-4 h-4 text-purple" />
                                                )}
                                                <span className="text-white/80 text-xs md:text-sm">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Skills;
