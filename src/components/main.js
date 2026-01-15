'use client'

import Image from "next/image"
import Link from "next/link"
import profileImg from "../img/profile.png"
import { Mail } from "lucide-react"

export default function MainSection(){
    return(
        <div id="main" className=" flex flex-col md:flex-row px-8 md:px-12 py-6 items-center justify-center pt-10 gap-6 bg-blue-100/20 min-h-[90vh]">
            <div className="px-6">
                <h1>
                    <span className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">
                        Hi, I’m 
                        <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-transparent bg-clip-text"> Waqas Bashir </span>  
                    </span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold pt-3 text-blue-600">Full Stack, Mern Stack Developer</p>
                <p className="text-lg md:text-xl pt-4">I specialize in building modern, scalable, and user-focused web applications using the MERN stack and other cutting-edge technologies. My goal is to deliver elegant digital solutions that make an impact.</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center flex-start">
                    <button 
                    onClick={()=> document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                    className=" flex gap-2  items-center px-4 py-2 bg-blue-600 text-white hover:font-semibold rounded-md transition-all duration-300 ">
                        <Mail size={20}/>
                        Get in Touch
                    </button>
                    <Link href="/" className="px-4 py-2 font-semibold text-blue-600 border-blue-600 border-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300">View Resume</Link>
                </div>
            </div>
            <div>
                <div className=" w-76 h-76 rounded-full border-6 border-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 ">
                    <Image src={profileImg} width={150} height={150} alt="Waqas Bashir" className="w-full h-full rounded-full"/>
                </div>
            </div>
        </div>
    )
}