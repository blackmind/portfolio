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
    title: "TopWorkplaces.com",
    des: "Led the development of TopWorkplaces.com, a premier employer recognition platform that has recognized over 17,000 organizations. Architected a scalable survey and analytics engine processing millions of employee feedback responses annually. Implemented sophisticated data visualization dashboards for workplace culture insights and competitive benchmarking. The platform powers recognition programs for 60+ prestigious media publishers including The Washington Post, The Boston Globe, and The San Diego Union-Tribune, helping organizations gain national visibility as employers of choice. Key achievements include building real-time survey analytics, automated recognition badge generation, and secure data handling for sensitive employee feedback.",
    img: "/topworkplaces.png",
    iconLists: [
      "/azure.svg",
      "/react.svg",
      "/dotnet.svg",
      "/sql.svg",
      "/redis.svg",
    ],
    link: "https://www.topworkplaces.com/",
  },
  {
    id: 2,
    title: "Energage Platform - HR Tech",
    des: "Led migration of on-premise applications to Azure Cloud and modernized legacy systems. Spearheaded subscription management services handling $25M+ in revenue, and enhanced QA automation with TestCafe and Selenium.",
    img: "/energage-platform.png",
    iconLists: [
      "/azure.svg",
      "/dotnet.svg",
      "/react.svg",
      "/sql.svg",
      "/testcafe.svg",
    ],
    link: "https://www.energage.com/platform/",
  },
  {
    id: 3,
    title: "Raptivity OEM Platform Modernization",
    des: "Architected and led the modernization of Raptivity's OEM platform, a comprehensive interactive learning content creation tool. Implemented a scalable Service-Oriented Architecture (SOA) with enhanced security features including token-based authorization and TLS encryption. Developed a centralized licensing management system and integrated Tin Can API for advanced analytics. The modernized platform provides educational institutions and enterprises with SCORM-compliant e-learning interactions, improved deployment workflows, and seamless Active Directory integration. Key achievements include significant performance improvements, reduced latency in content delivery, and enhanced cross-platform compatibility through HTML5 implementation.",
    img: "/raptivity.webp",
    iconLists: [
      "/dotnet.svg",
      "/aws.svg",
      "/sql.svg",
      "/html5.svg",
      "/rest-api.svg",
    ],
    link: "https://www.raptivity.com/",
  },
  {
    id: 4,
    title: "DDI - Pinpoint ATS Integration",
    des: "Architected and led the modernization of DDI's assessment integration platform using Workato, enabling seamless connectivity between customer ATS systems and DDI's Pinpoint application. Implemented OAuth 2.0 SSO authentication, designed scalable REST APIs, and established automated workflows for assessment requests, user management, and result notifications. Built dedicated customer workspaces with template-based recipes, robust error handling, and comprehensive logging. The solution serves major enterprises like Walmart and Nationwide, providing secure, real-time assessment data synchronization while maintaining strict security standards and SLAs.",
    img: "/ddi-logo.svg",
    iconLists: [
      "/workato.svg",
      "/azure.svg",
      "/oauth.svg",
      "/rest-api.svg",
      "/git.svg",
    ],
    link: "https://www.ddiworld.com/",
  },
  {
    id: 5,
    title: "NetTrust - Cyber Security",
    des: "Developed a malware detection system for proactive threat mitigation. Integrated Active Directory and LDAP, implemented PDF reporting, and designed key analytics modules for data breach prevention.",
    img: "/nettrust.svg",
    iconLists: [
      "/csharp.svg",
      "/winforms.svg",
      "/wcf.svg",
      "/mysql.svg",
      "/qualys.svg",
    ],
    link: "https://www.taassera.com/",
  },
  // {
  //   id: 6,
  //   title: "Buzzinga - Mobile Adventure Puzzle Game",
  //   des: "Designed and led the development of a mobile puzzle game, Buzzinga. Created cloud-based messaging for gameplay and optimized Unity3D assets to enhance user interaction on iOS and Android.",
  //   img: "/buzzinga.svg",
  //   iconLists: [
  //     "/unity.svg",
  //     "/csharp.svg",
  //     "/googleappengine.svg",
  //     "/restapi.svg",
  //     "/nosql.svg",
  //   ],
  //   link: "https://apptronixstudios.com/",
  // },
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
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
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
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
