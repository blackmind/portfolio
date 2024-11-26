import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/MovingBorders";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaAws,
    FaUnity,
    FaSalesforce,
    FaChevronLeft,
    FaChevronRight
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

    const handlePrevTab = () => {
        const currentIndex = categories.indexOf(activeTab);
        const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
        setActiveTab(categories[prevIndex]);
    };

    const handleNextTab = () => {
        const currentIndex = categories.indexOf(activeTab);
        const nextIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
        setActiveTab(categories[nextIndex]);
    };

    return (
        <div className="w-full space-y-6">
            {/* Tabs Navigation - Both Mobile & Desktop */}
            <div className="w-full space-y-4">
                <div className="w-full overflow-x-auto bg-[#0F1521] p-4 rounded-lg">
                    <div className="flex min-w-max lg:justify-between w-full max-w-4xl mx-auto">
                        {categories.map((category) => (
                            activeTab === category ? (
                                <Button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    duration={15000}
                                    borderRadius="0.30rem"
                                    containerClassName="overflow-hidden rounded-lg"
                                    borderClassName="rounded-lg"
                                    className="px-8 py-3 !min-w-[140px] text-center text-white transition-all duration-300 rounded-lg"
                                    style={{
                                        background: "rgb(26, 36, 53)",
                                    }}
                                >
                                    {category}
                                </Button>
                            ) : (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className="px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 min-w-[140px] text-center bg-[#0F1521] text-gray-400 hover:bg-[#152033] hover:text-gray-300"
                                >
                                    {category}
                                </button>
                            )
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end space-x-2 px-4">
                    <button
                        onClick={handlePrevTab}
                        className="p-3 rounded-full bg-[#0F1521] text-gray-400 hover:bg-[#1A2435] hover:text-white transition-all duration-300"
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNextTab}
                        className="p-3 rounded-full bg-[#0F1521] text-gray-400 hover:bg-[#1A2435] hover:text-white transition-all duration-300"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Content Section - Desktop */}
            <div className="hidden lg:block">
                <div className="space-y-6">
                    <h2 className="text-2xl font-medium text-white">{activeTab}</h2>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-6 gap-3"
                    >
                        {skills[activeTab].map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Content Section - Mobile */}
            <div className="lg:hidden">
                <div className="space-y-6">
                    <h2 className="text-2xl font-medium text-white">{activeTab}</h2>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                    >
                        {skills[activeTab].map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </motion.div>
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