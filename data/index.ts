import { FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiDotnet, SiMicrosoftazure, SiAzuredevops, SiOkta, SiMicrosoftsqlserver, SiCsharp, SiQualys, SiMongodb, SiKubernetes } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiGit } from "react-icons/di";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TopWorkplaces",
    heading: "TopWorkplaces.com",
    des: "Led the development of TopWorkplaces.com, a premier employer recognition platform that has recognized over 17,000 organizations. Architected a scalable survey and analytics engine processing millions of employee feedback responses annually. Implemented sophisticated data visualization dashboards for workplace culture insights and competitive benchmarking. The platform powers recognition programs for 60+ prestigious media publishers including The Washington Post, The Boston Globe, and The San Diego Union-Tribune, helping organizations gain national visibility as employers of choice. Key achievements include building real-time survey analytics, automated recognition badge generation, and secure data handling for sensitive employee feedback.",
    img: "/topworkplaces.png",
    iconLists: [SiNextdotjs, SiTypescript, SiDotnet, SiMongodb, SiTailwindcss],
    link: "https://www.topworkplaces.com/",
  },
  {
    id: 2,
    title: "Energage Platform - HR Tech",
    heading: "Energage.com",
    des: "Led migration of on-premise applications to Azure Cloud and modernized legacy systems. Spearheaded subscription management services handling $25M+ in revenue, and enhanced QA automation with TestCafe and Selenium.",
    img: "/energage-platform.png",
    iconLists: [SiDotnet, FaReact, SiMicrosoftazure, TbApi, SiMicrosoftsqlserver, FaDocker, SiKubernetes],
    link: "https://www.energage.com/platform/",
  },
  {
    id: 3,
    title: "DDI - Pinpoint ATS Integration",
    heading: "DDIworld.com",
    des: "Architected and led the modernization of DDI's assessment integration platform using Workato, enabling seamless connectivity between customer ATS systems and DDI's Pinpoint application. Implemented OAuth 2.0 SSO authentication, designed scalable REST APIs, and established automated workflows for assessment requests, user management, and result notifications. Built dedicated customer workspaces with template-based recipes, robust error handling, and comprehensive logging. The solution serves major enterprises like Walmart and Nationwide, providing secure, real-time assessment data synchronization while maintaining strict security standards and SLAs.",
    img: "/ddi-logo.svg",
    iconLists: [SiDotnet, SiMicrosoftazure, SiMicrosoftsqlserver, SiOkta, DiGit],
    link: "https://www.ddiworld.com/",
  },
  {
    id: 4,
    title: "Raptivity OEM Platform Modernization",
    heading: "Raptivity.com",
    des: "Architected and led the modernization of Raptivity's OEM platform, a comprehensive interactive learning content creation tool. Implemented a scalable Service-Oriented Architecture (SOA) with enhanced security features including token-based authorization and TLS encryption. Developed a centralized licensing management system and integrated Tin Can API for advanced analytics. The modernized platform provides educational institutions and enterprises with SCORM-compliant e-learning interactions, improved deployment workflows, and seamless Active Directory integration. Key achievements include significant performance improvements, reduced latency in content delivery, and enhanced cross-platform compatibility through HTML5 implementation.",
    img: "/raptivity.webp",
    iconLists: [SiDotnet, FaAws, SiMysql, FaHtml5, TbApi],
    link: "https://www.raptivity.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Priyank was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Priyank's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Priyank is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Priyank was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Priyank's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Priyank is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Priyank was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Priyank's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Priyank is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Priyank was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Priyank's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Priyank is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Priyank was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Priyank's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Priyank is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Energage",
    img: "/energage.svg",
    nameImg: "/energageName.svg",
  },
  {
    id: 2,
    name: "DDI World",
    img: "/ddi.svg",
    nameImg: "/ddiName.svg",
  },
  {
    id: 3,
    name: "TaaSera",
    img: "/taasera.svg",
    nameImg: "/taaseraName.svg",
  },
  {
    id: 4,
    name: "Raptivity",
    img: "/raptivity.svg",
    nameImg: "/raptivityName.svg",
  },
  {
    id: 5,
    name: "Investing Channel",
    img: "/investingChannel.svg",
    nameImg: "/investingChannelName.svg",
  },
  {
    id: 6,
    name: "Travel Ad Network",
    img: "/travelAdNetwork.svg",
    nameImg: "/travelAdNetworkName.svg",
  },
  {
    id: 7,
    name: "U.S. Gas and Electric",
    img: "/usGasElectric.svg",
    nameImg: "/usGasElectricName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Technical Project Manager",
    company: "Harbinger Group",
    desc: "Managed multiple large-scale projects, leading cross-functional teams of over 30 members, modernizing applications by migrating to Azure Cloud and implementing agile methodologies for optimized project delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Project Lead - Cyber Security",
    company: "Senior Technical Project Manager",
    desc: "Led a malware detection project for NetTrust, developing a system to identify attacks and implementing features such as analytics and PDF report generation. Recognized with the 'Excellence in Project Leadership' award.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Technical Lead - Game Development",
    company: "Apptronix Studios",
    desc: "Spearheaded development of the mobile adventure puzzle game 'Buzzinga,' overseeing design and Unity3D development, integrating cloud-based middleware, and optimizing touch-based inputs for iOS and Android.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Blue Shores Solutions Pvt. Ltd.",
    desc: "Developed and maintained robust applications using .NET, C#, and SQL, ensuring scalability and performance for enterprise-level solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/priyank-khamitkar",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/blackmind",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://twitter.com/pr1y4nk",
  },

];
