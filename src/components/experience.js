import { Calendar } from "lucide-react"

export default function Experience(){
    const experiences=[
        {
            title:'Front-end Developer Intern',
            company:'Elevvo Pathways',
            duration:'July 2025 - Aug 2025',
            des:[
                "Developed and optimized responsive user interfaces using React.js, Next.js, and Tailwind CSS, ensuring seamless cross-device performance.",
                "Built landing pages and admin dashboards with a focus on modern UI/UX best practices for improved user experience.",
                "Integrated RESTful APIs to enable dynamic data handling and efficient client–server communication.",
                "Deployed production-ready applications on Vercel and managed collaborative workflows using Git and GitHub.",
                "Enhanced problem-solving and debugging skills through active participation in code reviews and real-time feedback."
            ],
            tech:[
                "JavaScript(ES6+)",
                "React.js",
                "Tailwind CSS",
                "Git/GitHub"
            ]
        },
        {
            title:'Full Stack Developer',
            company:'Ezitech Institute',
            duration:'March 2025 - June 2025',
            des:[
                "Applied core concepts of Node.js, Express.js, and MongoDB to develop functional backend services.",
                "Designed and implemented RESTful APIs with complete CRUD operations.",
                "Integrated frontend and backend to ensure smooth data flow and real-time interaction.",
                "Collaborated in a team environment, maintaining clean, modular, and scalable code practices."
            ],
            tech:[
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js"
            ]
        }
    ]
    return(
        <section id="experience" className="px-8 md:px-12 py-14 bg-white">
            <div className=" py-2  text-center mb-12">
               <h2 className="text-3xl font-bold pb-3">Work Experience</h2>
               <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 mx-auto"/>
            </div>
            <div className="relative">
                
                <div className="absolute left-4 md:left-1/2 w-0.5 top-0 bottom-0 md:-translate-x-px bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 rounded-md"/>
                
                <div>
                    {experiences.map((exp, idx)=>(

                      <div key={idx} className={`relative flex mb-8 items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} `}> 

                        <div className="w-6 h-6 rounded-full absolute md:left-1/2 left-1 md:-translate-x-1/2 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700"/>

                        <div className="ml-6 md:ml-0 md:w-1/2 px-6 py-6 bg-blue-500/8 shadow-md rounded-xl space-y-2 ">
                            <h2 className="text-lg font-bold text-gray-900">{exp.title}</h2>
                            <div className="flex flex-col sm:flex-row justify-between font-semibold gap-2">
                                 <p className="text-blue-700">{exp.company}</p>
                                 <p className="flex text-blue-500 gap-1 items-center text-sm">
                                    <Calendar size={16}/>
                                    {exp.duration}
                                </p>
                            </div>
                            <ul className="pl-4 space-y-2 mb-4 text-gray-700 text-sm">
                                {exp.des.map((des, desidx)=>(
                                    <li key={desidx}
                                    className="list-disc marker:text-blue-600 "
                                    >
                                        {des}
                                    </li>
                                ))}
                            </ul>
                            <div className=" flex flex-wrap gap-2">
                                {exp.tech.map((tech, techidx)=>(
                                    <span key={techidx} 
                                    className="px-3 py-1 text-indigo-600 text-sm rounded-full bg-blue-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </section>
    )
}