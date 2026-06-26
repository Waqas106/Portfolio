'use client'

import Image from "next/image";
import Blog from "../img/blog.png"
import Dashpilot from "../img/dashpilot.png"
import Weather from "../img/weather.png"
import Project from "../img/Project.png"
import LungsCancer from "../img/Lungs-Cancer.png"
import FIXnGO from "../img/carServices.png"
import LandVenture from "../img/LandVenture.png"
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Projects(){
    const[showAll, setShowAll]= useState(false);

    const projects = [
    {
    image: LandVenture,
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
    image: FIXnGO,
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
    image: LungsCancer,
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
            image:Project,
            title:"Project Management Platform",
            des:[
                "A full-stack project management platform that helps teams organize tasks, track progress, and collaborate efficiently. Built with a clean dashboard, secure authentication, and scalable backend architecture."
            ],
            technologies:[
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Docker"
            ],
            liveLink:"https://project-management-platform-mocha.vercel.app/",
            Github:"https://github.com/Waqas106/Project-Management-Platform"
        },
        {
            image:Dashpilot,
            title:"DashPilot – Freelancer Dashboard App",
            des:[
                "DashPilot is a responsive Freelancer Dashboard app built with React.js, offering project management, earnings tracking, and real-time notifications. It delivers a clean, modern interface with smooth navigation and dynamic user experience."
            ],
            technologies:[
                "JavaScript (ES6+)",
                "React.js",
                "CSS",
                "React Router",
            ],
            liveLink:"https://waqas106.github.io/DashPilot-Freelancer-Dashboard/",
            Github:"https://github.com/Waqas106/DashPilot-Freelancer-Dashboard"
        },
        {
            image:Weather,
            title:"Weather App",
            des:[
                "A modern React-based weather app that automatically detects your location and displays real-time weather updates. It features a clean, responsive interface powered by the OpenWeather API for accurate forecasts."
            ],
            technologies:[
                "React.js",
                "Tailwind CSS",
                "Axios",
                "OpenWeather API"
            ],
            liveLink:"weather-app-one-xi-51.vercel.app",
            Github:"https://github.com/Waqas106/Weather_App"
        },
        // {
        //     image:Blog,
        //     title:"Blog Post Website",
        //     des:[
        //         'A single-page blog application with dynamic post filtering and a “Show More” feature for seamless content browsing. Built with clean UI and optimized logic to manage post display and responsive user experience.'
        //     ],
        //     technologies:[
        //         "JavaScript (ES6+)",
        //         "React.js",
        //         "CSS"
        //     ],
        //     Github:"https://github.com/Waqas106/Blog-Post-App"
        // },
        // {
        //     image:Cadedine,
        //     title:'Cafedine Website',
        //     des:[
        //         "Designed and developed a responsive restaurant website using modern design principles to showcase menu, gallery, and reservation features.",
        //         " Implemented dynamic content sections (menu filtering, image gallery) to improve user engagement and visual appeal."
        //     ],
        //     technologies:[
        //         "HTML",
        //         "CSS",
        //         "JavaScript"
        //     ],
        //     liveLink:"https://waqas106.github.io/Design-Cafedine-Website/",
        //     Github:"https://github.com/Waqas106/Design-Cafedine-Website"
        // }
    ]

    const visibleProjects = showAll? projects : projects.slice(0,3);

    return(
        <section id="projects" className="px-8 md:px-12 py-14 ">
            <div className=" py-2  text-center mb-12">
               <h2 className="text-3xl font-bold pb-3">Featured Projects</h2>
               <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 mx-auto"/>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {visibleProjects.map((project, index)=>(

                <div key={index} className={`flex flex-col gap-4 px-6 py-4 bg-white rounded-2xl shadow-xl ${index % 2 === 0? "md:flex-row" : "md:flex-row-reverse"}`}>
                    
                    <div className="w-full h-66 rounded-xl">
                        <Image src={project.image} alt={project.title} width={600} height={800} quality={100} 
                        className="w-full h-full object-fill"
                        />
                    </div>
                    <div className="space-x-4 p-4">
                        <h3 className="text-gray-900 font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-md text-gray-600">{project.des}</p>
                        <div className="flex flex-wrap gap-2 py-4">
                            {project.technologies.map((tech, techidx)=>(
                                <span 
                                key={techidx}
                                className="px-3 py-1 bg-blue-600/10 rounded-full text-sm text-blue-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            {project.liveLink && ( 
                            <button 
                            onClick={(e)=>window.open(project.liveLink , "_blank")}
                            className="flex gap-2 items-center px-3 py-2 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transform duration-300"
                            >
                                <ExternalLink size={18}/>
                                Live
                            </button>
                            )}
                            <button
                            onClick={()=>window.open(project.Github, "_blank")}
                            className=" flex gap-2 items-center px-3 py-2 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transform duration-300"
                            >
                                <Github size={18}/>
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
                ))}

                <div className="mx-auto pt-6">
                    <button 
                    onClick={()=> setShowAll(!showAll)}
                    className="px-4 py-2 justify-center bg-blue-600 text-white font-semibold cursor-pointer rounded-xl">
                        {showAll? "View Less": "View More"}
                    </button>
                </div>
            </div>
        </section>
    )
}