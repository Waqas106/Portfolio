'use client'

import Image from "next/image"
import Link from "next/link"
import profileImg from "../img/profile.png"
import { Mail, Code, ExternalLink, Linkedin, Github, Database,ChevronDown } from "lucide-react"

export default function MainSection(){
    return(
        <div id="main" className="relative flex flex-col md:flex-row px-8 md:px-16 lg:px-24 py-20 items-center justify-between min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>


            <div className={`relative z-10 max-w-2xl transition-all duration-1000 transform translate-x-0 opacity-100`}>
                <div className="inline-block px-4 py-2 mb-6 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </div>

                <h1 className="mb-4">
                  <span className="block text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                    Hi, I'm
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                      Waqas Bashir
                    </span>
                  </span>
                </h1>
        
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-6 flex items-center flex-wrap gap-2">
                  <Code className="text-blue-600" size={28} />
                  Full Stack Developer
                </p>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Crafting elegant, scalable web applications with the <span className="font-semibold text-blue-600">MERN stack</span>. 
                  Transforming ideas into seamless digital experiences that users love and businesses rely on.
                </p>

                <div className="flex gap-4 mb-8">
                  <Link href="https://github.com/Waqas106" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                    <Github size={24} className="text-gray-700" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/muhammad-waqas-bashir/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                    <Linkedin size={24} className="text-blue-600" />
                  </Link>
                  {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                    <Twitter size={24} className="text-blue-400" />
                  </a> */}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                    className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                    Get in Touch
                  </button>
                  <button 
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-300">
                    <ExternalLink size={20} />
                    View Resume
                  </button>
                </div>
            </div>
            <div className="relative z-10 mt-12 md:mt-0 transition-all duration-1000 transform translate-x-0 opacity-100">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-blue-600 overflow-hidden">
                    <div className="w-full h-full ">
                      <Image src={profileImg} width={150} height={150} alt="Waqas Bashir" className="w-full h-full rounded-full"/>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 p-3 bg-white rounded-lg shadow-lg animate-float">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 bg-white rounded-lg shadow-lg animate-float animation-delay-2000">
                  <Database className="text-indigo-600" size={24} />
                </div>
            </div>                
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="text-blue-600" size={32} />
            </div>
        </div>
    )
}