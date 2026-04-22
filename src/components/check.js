'use client'
import React, { useState, useEffect } from 'react';
import { Mail, Lightbulb, Users, RefreshCcw, Zap, Github, Linkedin, Twitter, ExternalLink, Code, Database, Layout, Server, ChevronDown } from 'lucide-react';

// Enhanced Main Section with animations
function MainSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="main" className="relative flex flex-col md:flex-row px-8 md:px-16 lg:px-24 py-20 items-center justify-between min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className={`relative z-10 max-w-2xl transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
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

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
            <Github size={24} className="text-gray-700" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
            <Linkedin size={24} className="text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
            <Twitter size={24} className="text-blue-400" />
          </a>
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

      {/* Enhanced Profile Image */}
      <div className={`relative z-10 mt-12 md:mt-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-blue-600 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white">
                WB
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 p-3 bg-white rounded-lg shadow-lg animate-float">
            <Code className="text-blue-600" size={24} />
          </div>
          <div className="absolute -bottom-4 -left-4 p-3 bg-white rounded-lg shadow-lg animate-float animation-delay-2000">
            <Database className="text-indigo-600" size={24} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-blue-600" size={32} />
      </div>
    </div>
  );
}

// Enhanced About Section
function About() {
  const highlights = [
    { icon: Lightbulb, name: 'Innovation', des: 'Creative problem-solving with cutting-edge solutions', color: 'from-yellow-400 to-orange-500' },
    { icon: Users, name: 'Collaboration', des: 'Strong team player with excellent communication skills', color: 'from-green-400 to-teal-500' },
    { icon: RefreshCcw, name: 'Adaptability', des: 'Quick to learn, adjust, and deliver in evolving environments', color: 'from-blue-400 to-indigo-500' },
    { icon: Zap, name: 'Problem Solving', des: 'Turning complex challenges into simple, effective solutions', color: 'from-purple-400 to-pink-500' },
  ];

  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative pl-6 border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> with a focus on building modern, scalable, and user-friendly web applications. My goal is to create digital solutions that are both technically robust and delightfully simple for users.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-4 border-indigo-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                With hands-on expertise across the <span className="font-semibold text-indigo-600">MERN stack</span>, I craft clean, responsive frontends and develop secure, efficient backends. I believe in clean code, best practices, and modern design principles.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-4 border-purple-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond coding, I value <span className="font-semibold text-purple-600">collaboration and continuous learning</span>. I enjoy solving problems, sharing ideas, and turning concepts into meaningful digital experiences that create real impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600">3+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">100%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 mb-4 bg-gradient-to-r ${highlight.color} rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                  <highlight.icon size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">{highlight.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Skills Section
function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      color: 'from-blue-500 to-indigo-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 88 },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 82 },
        { name: 'RESTful APIs', level: 85 },
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 78 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Firebase', level: 75 },
        { name: 'Vercel Deployment', level: 80 },
      ]
    }
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 
    'JavaScript', 'TypeScript', 'Git', 'REST APIs', 'Firebase', 'Vercel'
  ];

  return (
    <section id="skills" className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I master to create exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className={`inline-flex p-4 mb-6 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}>
                <category.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-200 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full font-medium hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-xl text-blue-100 mb-10">
          Have a project in mind? Let's create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:waqas@example.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail size={24} />
            Send Email
          </a>
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Linkedin size={24} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function EnhancedPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      
      <MainSection />
      <About />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-8 text-center">
        <p className="text-gray-400">
          © 2026 Waqas Bashir. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}