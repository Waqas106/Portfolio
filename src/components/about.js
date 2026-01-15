import { Lightbulb, Users, RefreshCcw  } from "lucide-react"

export default function About(){
const highlights=[
    {icon:Lightbulb, name:'Innovation', des:'Creative problem-solving with cutting-edge solutions' },
    {icon:Users, name:'Collaboration', des:'Strong team player with excellent communication skills'},
    {icon:RefreshCcw, name:'Adaptability', des:'Quick to learn, adjust, and deliver in evolving environments.'},
    {icon:Lightbulb, name:'Problem Solving', des:'Turning complex challenges into simple, effective solutions.'},
]

    return(
        <section id="about" className="px-8 md:px-12 py-4 bg-gray-300/5">
            <div className=" py-2  text-center">
               <h2 className="text-3xl font-bold pb-2">About Me</h2>
               <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 mx-auto"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-x-6  pt-10">
               <div className="py-4 space-y-4">
                   <p className="text-lg">I am a passionate Full Stack Developer with a focus on building modern, scalable, and user friendly web applications. My goal is to create digital solutions that are both technically strong and simple for users to interact with.</p>
                   <p className="text-lg">With hands on expertise across the MERN stack, from crafting clean and responsive frontends to developing secure and efficient backends. I believe in clean code, best practices, and modern design principles that make every project reliable and future ready.</p>
                   <p className="text-lg">Beyond coding, I value collaboration and continuous learning. I enjoy solving problems, sharing ideas, and turning concepts into meaningful digital experiences that create real impact.</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index)=>(
                    <div key={index} className="px-6 py-3 bg-white rounded-xl shadow-lg hover:scale-102">
                        <highlight.icon size={38}  className="p-2 mb-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-md"/>
                        <h4 className="font-semibold text-md pb-2">{highlight.name}</h4>
                        <p>{highlight.des}</p>
                    </div>
                ))}
               </div>
            </div>
        </section>
    )
}