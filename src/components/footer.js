'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-gray-900 px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold text-white pb-3">Waqas Bashir</h3>
                    <p className="text-gray-400">passionate Full Stack Developer with a focus on building modern, scalable, and user friendly web applications. </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white pb-3">Quick Links</h3>
                    <div className="space-y-2">
                        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((links)=>(
                            <button 
                            key={links} 
                            onClick={()=>{
                                const element = document.getElementById(links.toLowerCase());
                                if (element){
                                    element.scrollIntoView({behavior: 'smooth'});
                                }
                            }}
                            className="block text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {links}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white ">Connect With Me</h3>
                    <div className="flex gap-4 pt-3">
                        <Link href="https://www.linkedin.com/in/muhammad-waqas-bashir/" 
                            className="w-10 h-10 p-2 bg-gray-400/20 rounded-full hover:bg-blue-600 text-white hover:scale-110 transition-all duration-300">
                            <Linkedin size={24} />
                        </Link>

                        <Link href="https://github.com/Waqas106" 
                            className="w-10 h-10 p-2 bg-gray-400/20 rounded-full hover:bg-blue-600 text-white hover:scale-110 transition-all duration-300">
                            <Github size={24} />
                        </Link>

                        <Link href="mailto:m.waqasbashir33@gmail.com" 
                            className="w-10 h-10 p-2 bg-gray-400/20 rounded-full hover:bg-blue-600 text-white hover:scale-110 transition-all duration-300">
                            <Mail size={24} />
                        </Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="flex flex-wrap justify-between text-sm text-gray-400 text-center">
                <p>Designed and Developed with &hearts; by Waqas</p>
                <p>&copy; 2025. All rights Reserved</p>
            </div>
        </footer>
    )
}