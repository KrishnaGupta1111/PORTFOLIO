// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import metLogo from "./assets/company_logo/meta_logo.jpeg";
import vibrationsLogo from "./assets/company_logo/vibrations_logo.jpeg";

// Education Section Logo's
import glaLogo from "./assets/education_logo/bit.png";
import vpsLogo from "./assets/education_logo/mps.png";
import mpsLogo from "./assets/education_logo/mps.png";

// Project Section Logo's
import csprepLogo from "./assets/work_logo/proj1.png";
import movierecLogo from "./assets/work_logo/proj2.png";
import abcLogo from "./assets/work_logo/proj7.png";
import bcdLogo from "./assets/work_logo/proj4.png";
import cdeLogo from "./assets/work_logo/proj5.png";
import defLogo from "./assets/work_logo/movie_rec.png"
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },

      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend & Devops",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },

      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Docker", logo: "/assets/tech_logo/docker.png" },
      { name: "AWS", logo: "/assets/tech_logo/aws.png" },
      { name: "GitHub Action", logo: "/assets/tech_logo/gitactions.png" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "SQL", logo: mysqlLogo },
      { name: "Python", logo: pythonLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },

      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },

      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: metLogo,
    role: "Software Engineer Intern (SDE Intern)",
    company: "MetaBlock Technologies Pvt. Ltd.",
    date: "May 2025 - August 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, contributing to both frontend and backend development. Integrated custom AI-powered chatbots into websites to enhance user interaction and automate responses. Collaborated with cross-functional teams to design responsive user interfaces, implement RESTful APIs, and ensure optimal application performance in an agile development environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Express JS",
      "Socket.io",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: vibrationsLogo,
    role: "Head Coordinator",
    company: "Cultural Committee - VIBRATIONS",
    date: "Nov 2022 - Present",
    desc: "Managed college cultural fests and various cultural events. Developed strong leadership, communication, time management, public speaking, and team collaboration skills while ensuring smooth event execution and audience engagement.",
    skills: [
      "Leadership",
      "Management",
      "Teamwork",
      "Communication",

      "Problem-solving",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "BIT Mesra",
    date: "Nov 2022 - July 2026",
    grade: "7.36 CGPA",
    desc: "I am currently pursuing a B.Tech in Computer Science and Engineering from BIT Mesra. I’ve built a strong foundation in core subjects like OOPs, Data Structures & Algorithms, DBMS, OS, Computer Networks, Compiler Design, AI/ML, and Blockchain. Alongside academics, I’ve developed interpersonal and teamwork skills through hands-on projects and collaborative activities.",
    degree: "Bachelor of Technology - B.Tech (CSE)",
  },
  {
    id: 1,
    img: mpsLogo,
    school: "MPS International School, Jaipur",
    date: "Apr 2021 - Mar 2022",
    grade: "89.6%",
    desc: "Completed my Class 12th from CBSE board with PCM and Computer Science, gaining a strong academic foundation.",
    degree: " Class 12th (CBSE)",
  },
  {
    id: 2,
    img: mpsLogo,
    school: "MPS International School, Jaipur",
    date: "Apr 2019 - Mar 2020",
    grade: "96.4%",
    desc: "Completed my Class 10th from CBSE board with excellent academic performance.",
    degree: "Class 10th (CBSE)",
  },
  
];

export const projects = [
  {
    id: 0,
    title: "CineBook - Movie Ticket Booking Platform",
    description:
      "A full-stack movie ticket booking web application that allows users to browse movies, check showtimes, and book seats in real-time. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), CineBook features secure user authentication, dynamic show listings, and smooth UI/UX — providing an experience similar to BookMyShow.",
    image: csprepLogo,
    tags: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "TailwindCSS",
      "JWT",
      "Stripe Payment",
      "Inngest",
      "Cloudinary",
    ],
    github: "https://github.com/KrishnaGupta1111/MovieBooking",
    webapp: "https://cinebookk.vercel.app/",
  },
  {
    id: 1,
    title: "ConciseDocs - AI Powered PDF Summarizer",
    description:
      "An AI-powered web application that enables users to upload PDFs and receive concise, accurate summaries. Built with Next.js and TypeScript, it uses LangChain for document parsing and OpenAI for summarization. ConciseDocs offers a seamless experience for students, researchers, and professionals to extract key insights from lengthy documents instantly.",
    image: movierecLogo,
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "LangChain",
      "OpenAI",
      "Tailwind CSS",
      "Gemini AI",

      "Stripe Payment Gateway",

      "PDF Parsing",
      "Clerk Auth",
    ],
    github: "https://github.com/KrishnaGupta1111/ConciseDocs",
    webapp: "https://concisedocs.vercel.app/",
  },
  {
    id: 2,
    title: "ChatScape - Real-Time Chat Application",
    description:
      "A full-stack real-time chat application built with the MERN stack, featuring instant messaging, WebRTC-based audio and video calling, and secure JWT authentication. ChatScape uses Socket.IO for real-time communication, offering a smooth and interactive user experience with features like live typing indicators, online status, and chat history.",
    image: abcLogo,
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "WebRTC",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/KrishnaGupta1111/ChatScape",
    webapp: "https://chatscape11.vercel.app/",
  },
  {
    id: 3,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: defLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "",
  },

  {
    id: 4,
    title: "Imaginex : AI Powered Text-to-Image Generator",
    description:
      "Imaginex is a full-stack SaaS application that allows users to generate high-quality images from text prompts using the power of Gemini AI. Designed with a clean and intuitive UI, Imaginex offers a seamless user experience for both casual users and creative professionals.",
    image: bcdLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github:
      "https://github.com/KrishnaGupta1111/Imaginex---AI-Powered-Text-to-Image-Generator-",
    webapp: "https://imaginexx.vercel.app/",
  },
  {
    id: 5,
    title: "BlogBytes - AI Blog Generation Blog Website",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: cdeLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github:
      "https://github.com/KrishnaGupta1111/BlogBytes-AI-Powered-Blogging-Platform-",
    webapp: "https://blogbytesai.vercel.app/",
  },
  
];
