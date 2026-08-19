// Centralized mock data file for portfolio
// Add or delete items here to update your portfolio

export const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Innovative Solutions & Development',
    duration: 'Jan 2026 - Present',
    des: [
      "Contributed to backend development using Node.js and Express.js, supporting API integration and efficient data handling.",
      "Designed and implemented a complete product module, including form handling, data submission, and dynamic UI rendering.",
      "Integrated frontend applications with backend APIs to enable seamless real-time data flow and robust client–server communication.",
      "Managed data retrieval and presentation on the frontend, ensuring accurate rendering and an optimized user experience."
    ],
    tech: [
      "Next.js",
      "React.js",
      "React Query",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Git/GitHub"
    ]
  },
  {
    title: 'Front-end Developer Intern',
    company: 'Elevvo Pathways',
    duration: 'July 2025 - Aug 2025',
    des: [
      "Developed and optimized responsive user interfaces using React.js, Next.js, and Tailwind CSS, ensuring seamless cross-device performance.",
      "Built landing pages and admin dashboards with a focus on modern UI/UX best practices for improved user experience.",
      "Integrated RESTful APIs to enable dynamic data handling and efficient client–server communication.",
      "Deployed production-ready applications on Vercel and managed collaborative workflows using Git and GitHub.",
      "Enhanced problem-solving and debugging skills through active participation in code reviews and real-time feedback."
    ],
    tech: [
      "JavaScript(ES6+)",
      "React.js",
      "Tailwind CSS",
      "Git/GitHub"
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Ezitech Institute',
    duration: 'March 2025 - June 2025',
    des: [
      "Applied core concepts of Node.js, Express.js, and MongoDB to develop functional backend services.",
      "Designed and implemented RESTful APIs with complete CRUD operations.",
      "Integrated frontend and backend to ensure smooth data flow and real-time interaction.",
      "Collaborated in a team environment, maintaining clean, modular, and scalable code practices."
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js"
    ]
  }
];

export const projectsData = [
  {
    image: "/LandVenture.png",
    title: "LandVenture – Premium Land Marketplace",
    des: [
      "A modern real estate marketplace platform tailored for the Pakistan market, enabling buyers, sellers, and agents to list, discover, and inquire about premium land properties. Features role-based dashboards, advanced property filters, and a scalable architecture built for production."
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Zod",
      "Vercel",
      "Lucide React",
    ],
  },
  {
    image: "/carServices.png",
    title: "FIXnGO – Car Services Booking Platform",
    des: [
      "A full-featured car services booking platform that connects vehicle owners with trusted service providers. Users can browse services, book appointments, track service status in real-time, and manage their vehicle history — all through a clean and intuitive interface."
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    image: "/Lungs-Cancer.png",
    title: "AI-Powered Lung Cancer Detection System",
    des: [
      "A web-based AI system for detecting lung cancer from CT scan images using deep learning techniques. The platform enables users to upload scans, receive automated predictions, and visualize results with highlighted regions for better interpretability."
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "TensorFlow/Keras",
      "Python",
      "Grad-CAM"
    ],
  },
  {
    image: "/Project.png",
    title: "Project Management Platform",
    des: [
      "A full-stack project management platform that helps teams organize tasks, track progress, and collaborate efficiently. Built with a clean dashboard, secure authentication, and scalable backend architecture."
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker"
    ],
    liveLink: "https://project-management-platform-mocha.vercel.app/",
    github: "https://github.com/Waqas106/Project-Management-Platform"
  },
  {
    image: "/dashpilot.png",
    title: "DashPilot – Freelancer Dashboard App",
    des: [
      "DashPilot is a responsive Freelancer Dashboard app built with React.js, offering project management, earnings tracking, and real-time notifications. It delivers a clean, modern interface with smooth navigation and dynamic user experience."
    ],
    technologies: [
      "JavaScript (ES6+)",
      "React.js",
      "CSS",
      "React Router",
    ],
    liveLink: "https://waqas106.github.io/DashPilot-Freelancer-Dashboard/",
    github: "https://github.com/Waqas106/DashPilot-Freelancer-Dashboard"
  },
  {
    image: "/weather.png",
    title: "Weather App",
    des: [
      "A modern React-based weather app that automatically detects your location and displays real-time weather updates. It features a clean, responsive interface powered by the OpenWeather API for accurate forecasts."
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Axios",
      "OpenWeather API"
    ],
    liveLink: "weather-app-one-xi-51.vercel.app",
    github: "https://github.com/Waqas106/Weather_App"
  }
];

export const skillsData = [
  { name: 'React.js', prof: 'Advanced', width: 'w-4/5', category: 'Frontend' },
  { name: 'Next.js', prof: 'Proficient', width: 'w-3/4', category: 'Frontend' },
  { name: 'Tailwind Css', prof: 'Advanced', width: 'w-5/6', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', prof: 'Proficient', width: 'w-3/4', category: 'Frontend' },
  { name: 'Node.js', prof: 'Intermediate', width: 'w-2/3', category: 'Backend' },
  { name: 'Express.js', prof: 'Intermediate', width: 'w-2/3', category: 'Backend' },
  { name: 'MongoDB', prof: 'Intermediate', width: 'w-2/3', category: 'Database' },
  { name: 'RESTful APIs', prof: 'Proficient', width: 'w-3/4', category: 'Backend' },
  { name: 'Git & GitHub', prof: 'Intermediate', width: 'w-2/3', category: 'Tools' },
  { name: 'Deployment(Vercel/Railway)', prof: 'Intermediate', width: 'w-2/3', category: 'Tools' },
  { name: 'Docker', prof: 'Beginner', width: 'w-1/3', category: 'Tools' }
];

export const aboutData = {
  highlights: [
    { name: 'Innovation', des: 'Creative problem-solving with cutting-edge solutions' },
    { name: 'Collaboration', des: 'Strong team player with excellent communication skills' },
    { name: 'Adaptability', des: 'Quick to learn, adjust, and deliver in evolving environments.' },
    { name: 'Problem Solving', des: 'Turning complex challenges into simple, effective solutions.' }
  ],
  description: [
    "I am a passionate Full Stack Developer with a focus on building modern, scalable, and user friendly web applications. My goal is to create digital solutions that are both technically strong and simple for users to interact with.",
    "With hands on expertise across the MERN stack, from crafting clean and responsive frontends to developing secure and efficient backends. I believe in clean code, best practices, and modern design principles that make every project reliable and future ready.",
    "Beyond coding, I value collaboration and continuous learning. I enjoy solving problems, sharing ideas, and turning concepts into meaningful digital experiences that create real impact."
  ]
};

export const contactData = {
  email: "m.waqasbashir33@gmail.com",
  phone: "0302-5237694",
  location: "Islamabad, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-waqas-bashir/",
  github: "https://github.com/Waqas106"
};

export const educationData = [
  {
    degree: "BS Information Technology",
    school: "National University of Modern Languages",
    period: "2022 – 2026",
    year: "2022",
    detail: "Focused on software engineering, databases and web technologies. Final year project: AI-based lung cancer detection system."
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "Punjab Group of Colleges",
    period: "2019 – 2021",
    year: "2019",
    detail: "Foundation in programming, mathematics and computing concepts that led into full stack development."
  }
];

export const heroData = {
  name: "Waqas Bashir",
  role: "Full Stack Developer",
  tagline: "Crafting elegant, scalable web applications with the MERN stack. Transforming ideas into seamless digital experiences that users love and businesses rely on.",
  socialLinks: {
    github: "https://github.com/Waqas106",
    linkedin: "https://www.linkedin.com/in/muhammad-waqas-bashir/",
    email: "mailto:m.waqasbashir33@gmail.com"
  }
};
