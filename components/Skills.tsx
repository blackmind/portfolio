import React, { useState } from 'react';
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
        { name: "React", icon: FaReact, subtitle: "JavaScript Library" },
        { name: "Next.js", icon: SiNextdotjs, subtitle: "React Framework" },
        { name: "TypeScript", icon: SiTypescript, subtitle: "Programming Language" },
        { name: "JavaScript", icon: SiJavascript, subtitle: "Programming Language" },
        { name: "Tailwind", icon: SiTailwindcss, subtitle: "CSS Framework" },
        { name: "HTML5", icon: FaHtml5, subtitle: "Markup Language" },
        { name: "CSS", icon: FaCss3Alt, subtitle: "Style Sheet Language" },
    ],
    "Backend": [
        { name: ".NET", icon: SiDotnet, subtitle: "Development Platform" },
        { name: "C#", icon: SiCsharp, subtitle: "Programming Language" },
        { name: "SQL Server", icon: SiMicrosoftsqlserver, subtitle: "Database" },
        { name: "Postgres", icon: SiPostgresql, subtitle: "Database" },
        { name: "MySQL", icon: SiMysql, subtitle: "Database" },
        { name: "CosmosDB", icon: SiMongodb, subtitle: "NoSQL Database" },
        { name: "Redis", icon: SiRedis, subtitle: "In-Memory Database" },
        { name: "REST API", icon: TbApi, subtitle: "API Architecture" },
        { name: "Dapper.NET", icon: DiDatabase, subtitle: "Micro ORM" },
        { name: "PowerShell", icon: SiPowershell, subtitle: "Scripting Language" },
        { name: "Git", icon: FaGitAlt, subtitle: "Version Control" },
    ],
    "Cloud Services": [
        { name: "Docker", icon: FaDocker, subtitle: "Containerization Platform" },
        { name: "Kubernetes", icon: SiKubernetes, subtitle: "Container Orchestration" },
        { name: "Azure", icon: SiMicrosoftazure, subtitle: "Cloud Platform" },
        { name: "Azure App Services", icon: TbBrandAzure, subtitle: "Web Hosting Service" },
        { name: "Azure Service Bus", icon: TbBrandAzure, subtitle: "Message Queue Service" },
        { name: "Azure Storage", icon: MdStorage, subtitle: "Cloud Storage" },
        { name: "Azure App Insights", icon: TbBrandAzure, subtitle: "Application Monitoring" },
        { name: "Azure Logic Apps", icon: TbBrandAzure, subtitle: "Integration Service" },
        { name: "Azure Web Jobs", icon: TbBrandAzure, subtitle: "Background Processing" },
        { name: "AWS", icon: FaAws, subtitle: "Cloud Platform" },
    ],
    "Integrations": [
        { name: "Workato", logoImg: workatoLogo, subtitle: "Integration Platform" },
        { name: "n8n", icon: AiOutlineNodeIndex, subtitle: "Workflow Automation" },
        { name: "OAuth", icon: MdSecurity, subtitle: "Authorization Protocol" },
        { name: "Auth0", icon: SiAuth0, subtitle: "Identity Platform" },
        { name: "Salesforce", icon: FaSalesforce, subtitle: "CRM Platform" },
        { name: "DocuSign", icon: SiDocusign, subtitle: "eSignature Platform" },
    ],
    "Gaming": [
        { name: "Unity3D", icon: FaUnity, subtitle: "Game Engine" },
    ],
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState("Frontend");
    const categories = Object.keys(skills);

    return (
        <div className="w-full space-y-6">
            {/* Mobile Tabs */}
            <div className="lg:hidden w-full overflow-x-auto">
                <div className="flex space-x-2 p-2 min-w-max">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === category
                                ? "bg-purple-600 text-white"
                                : "bg-[#1A1A1A] text-gray-400 hover:bg-[#222222]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block space-y-6">
                {categories.map((category) => (
                    <div key={category} className="space-y-6">
                        <h2 className="text-2xl font-medium text-white">{category}</h2>
                        <div className="grid grid-cols-6 gap-3">
                            {skills[category].map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
                <div className="space-y-6">
                    <h2 className="text-2xl font-medium text-white">{activeTab}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {skills[activeTab].map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SkillCard = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-[#1A1A1A] rounded-xl p-3 hover:bg-[#222222] transition-colors"
    >
        <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {skill.logoImg ? (
                    <Image
                        src={skill.logoImg}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="text-purple-400"
                    />
                ) : (
                    <skill.icon className="w-6 h-6 text-purple-400" />
                )}
            </div>
            <div className="flex flex-col min-w-0">
                <span className="text-white text-sm font-medium truncate">
                    {skill.name}
                </span>
                <span className="text-gray-500 text-xs truncate sm:hidden md:block lg:block 2xl:block">
                    {skill.subtitle}
                </span>
            </div>
        </div>
    </motion.div>
);

export default Skills;