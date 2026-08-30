/**
 * Central site configuration — single source of truth for site content.
 * All professional details are drawn from public/Bappi_Datta_Resume.pdf.
 */
export const SITE = {
  url: "https://example.com",
  name: "Bappi Datta",
  title: "Full-Stack Software Engineer",
  description:
    "Full-stack software engineer with 14+ years of experience building ERP and FinTech systems with C#, ASP.NET Core, React, and SQL Server.",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  status: "Open to new opportunities",
  resumeUrl: "/Bappi_Datta_Resume.pdf",
  analytics: {
    provider: null as "plausible" | "umami" | null,
    plausibleDomain: "example.com",
    umamiWebsiteId: "",
    umamiScriptUrl: "https://analytics.example.com/script.js",
  },
};

export const HERO = {
  headline: "I build software that ships — and stays shipped.",
  focus:
    "Full-stack engineering across .NET, React, and SQL Server — delivering ERP and FinTech systems on time, on budget, and built to last.",
  prompt: "~/whoami",
};

export const PROFILE = {
  years: "14+",
  philosophy:
    "I've spent 14+ years turning business requirements into working software across ERP and FinTech. I optimize for delivery — clear communication, pragmatic technology choices, and code the next engineer can understand. I've led teams as Scrum Master, worked onsite and remote, and delivered projects on time and within budget across diverse business domains.",
  expertise: [
    {
      area: "Full-Stack .NET Development",
      note: "C#, ASP.NET Core, ASP.NET MVC, Entity Framework, SQL Server",
    },
    {
      area: "Frontend Engineering",
      note: "React, Next.js, Bootstrap, JavaScript",
    },
    {
      area: "Backend & Data",
      note: "REST APIs, stored procedures, complex queries, reporting",
    },
    {
      area: "Java & Spring",
      note: "Spring MVC, Spring Boot, core banking systems",
    },
    {
      area: "Cloud & DevOps",
      note: "Azure migration, AWS, Docker, CI/CD with GitHub Actions",
    },
    {
      area: "Process & Leadership",
      note: "Agile, Scrum Master, CMMI Level 5, team management",
    },
  ],
  systems: [
    "ERP systems",
    "FinTech & microfinance solutions",
    "Core banking platforms",
    "Law-enforcement analytics tools",
    "Company websites & dashboards",
  ],
};

export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["C#", "JavaScript", "Java", "SQL"],
  },
  {
    category: ".NET",
    items: ["ASP.NET Core", "ASP.NET MVC", "Entity Framework", "WebForms"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Bootstrap"],
  },
  {
    category: "Data",
    items: ["SQL Server", "Stored Procedures", "Complex Queries", "Reporting"],
  },
  {
    category: "Java",
    items: ["Spring MVC", "Spring Boot"],
  },
  {
    category: "Cloud & Infra",
    items: ["Azure", "AWS", "Docker", "CI/CD with GitHub Actions", "Git"],
  },
  {
    category: "Process",
    items: ["Agile", "Scrum", "CMMI", "Project Management"],
  },
];

export const PRINCIPLES = [
  {
    title: "Deliver, then refine",
    body: "Projects succeed when they ship. I break work into increments that reach production, then improve continuously — the approach I've used to deliver on time and within budget across ERP and FinTech.",
  },
  {
    title: "Modernize without breaking",
    body: "I've moved production systems from ASP.NET WebForms and MVC to ASP.NET Core and React while keeping the business running — seamless integration beats a big-bang rewrite.",
  },
  {
    title: "Quality is built in",
    body: "Comprehensive unit tests with NUnit, integration tests with Selenium, and a process discipline that earned CMMI Level 5 compliance.",
  },
  {
    title: "Data first",
    body: "Well-designed stored procedures and carefully tuned queries are the backbone of reporting-heavy systems. I write SQL that scales with the business.",
  },
  {
    title: "Lead by enabling",
    body: "As Scrum Master and team lead, my job is to remove blockers and keep collaboration efficient — successful delivery is a team outcome.",
  },
  {
    title: "Keep learning",
    body: "From Java Spring to Next.js to Azure — I've repeatedly picked up new stacks and put them to work in production. Adaptability is a skill I practice deliberately.",
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Ethos Risk Services",
    period: "Apr 2024 — Present",
    location: "Florida, United States",
    summary:
      "Designing and modernizing features with ASP.NET Core, React, and SQL Server.",
    points: [
      "Design and implement innovative features using ASP.NET Core, React, and SQL Server that enhance the application.",
      "Transition existing features from ASP.NET MVC and WebForms to modern frameworks like ASP.NET Core and React, ensuring seamless integration and improved functionality.",
      "Ensure code quality and reliability with comprehensive unit tests in NUnit and integration tests with Selenium.",
      "Work closely with product owners, designers, and developers to deliver high-quality software solutions.",
    ],
    stack: ["ASP.NET Core", "React", "SQL Server", "NUnit", "Selenium"],
  },
  {
    role: "Lead Software Engineer",
    company: "Arunima Group",
    period: "Jan 2019 — Mar 2024",
    location: "Dhaka, Bangladesh",
    summary:
      "Led a software development team; owned APIs, frontend, and reporting end to end.",
    points: [
      "Developed APIs using ASP.NET Core, Entity Framework, and SQL Server.",
      "Built a user-friendly frontend with React and Bootstrap for enhanced usability.",
      "Wrote complex SQL queries, stored procedures, and functions for generating detailed reports.",
      "Migrated a module from an on-premises server to Azure, leveraging cloud technology for enhanced scalability and accessibility.",
      "Managed the software development team to ensure efficient collaboration and project completion.",
      "Developed the company website using Next.js.",
    ],
    stack: [
      "ASP.NET Core",
      "Entity Framework",
      "React",
      "SQL Server",
      "Azure",
      "Next.js",
    ],
  },
  {
    role: "Co-founder",
    company: "Ntitas IT Limited",
    period: "Apr 2016 — Dec 2018",
    location: "Dhaka, Bangladesh",
    summary:
      "Co-founded a software company delivering finance and technology solutions.",
    points: [
      "Developed customized financial solutions for a leading microfinance company in Bangladesh, improving the client's efficiency and profitability.",
      "The project was featured on nextbillion.net, a leading resource for news on global development and social impact.",
      "Created a mobile app and analytical tools for the Bangladesh Police, enhancing their ability to gather and analyze data for more effective law enforcement and crime prevention.",
      "Co-founded and played a key role in the development and growth of Ntitas, a software development company focused on innovative solutions in the finance and technology sectors.",
    ],
    stack: ["C#", "ASP.NET", "SQL Server", "Mobile"],
  },
  {
    role: "Sr. Analyst Programmer",
    company: "Southtech Group",
    period: "Apr 2013 — Mar 2016",
    location: "Dhaka, Bangladesh",
    summary:
      "Core banking development; Scrum Master; CMMI Level 5 process compliance.",
    points: [
      "Led the development of new features for existing core banking systems, improving functionality and usability for clients.",
      "Planned and implemented a web-based centralized core banking system using Java Spring, increasing efficiency and scalability.",
      "Acted as Scrum Master, guiding the team through agile development methodologies and ensuring successful project delivery.",
      "Maintained a focus on quality and process excellence, resulting in CMMI Level 5 compliance.",
    ],
    stack: ["Java", "Spring MVC", "SQL", "Agile/Scrum", "CMMI"],
  },
  {
    role: "Software Engineer",
    company: "Arunima Group",
    period: "Apr 2011 — Mar 2013",
    location: "Dhaka, Bangladesh",
    summary: "Full-stack developer building an ERP product.",
    points: [
      "Worked as a full-stack developer and developed an ERP using ASP.NET MVC and SQL Server.",
    ],
    stack: ["ASP.NET MVC", "SQL Server", "C#"],
  },
];

export const EDUCATION = [
  {
    degree: "B.Sc. Computer Science & Engineering",
    school: "Shahjalal University of Science and Technology",
    period: "2006 — 2010",
    location: "Sylhet, Bangladesh",
  },
];

export const COURSES = [
  {
    title: "Project Management Professionals (PMP)® Exam Preparation Course",
    provider: "PMaspire",
    period: "Aug 2021",
    location: "Dhaka, Bangladesh",
  },
];

export const AWARDS = [
  {
    title: "Runner-up, Code Warriors Challenge 2014",
    org: "BASIS, BITM",
    period: "2014",
  },
];

export const SOCIALS = [
  { name: "GitHub", url: "https://github.com/bappidatta", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/bappidatta",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:bappi.sust@gmail.com", icon: "mail" },
];
