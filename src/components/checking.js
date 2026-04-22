'use client'
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, Code, Database, Server, Globe, Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Zap, Target, Download, ArrowRight, CheckCircle2, Eye } from 'lucide-react';

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          WAQAS BASHIR
        </div>
        <div className="hidden md:flex gap-8">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            👋 Available for Freelance
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Waqas Bashir
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-gray-700">
            Full Stack, Mern Stack Developer
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            I specialize in building modern, scalable, and user-focused web applications using the MERN stack. 
            Transforming ideas into elegant digital solutions that deliver real value.
          </p>

          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
            >
              <Download size={20} />
              View Resume
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com" className="p-3 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-110">
              <Github size={24} className="text-gray-700" />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-110">
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a href="https://twitter.com" className="p-3 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-110">
              <Twitter size={24} className="text-blue-400" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-7xl font-bold">
                  WB
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-lg shadow-xl">
              <p className="text-3xl font-bold text-blue-600">3+</p>
              <p className="text-sm text-gray-600">Years Exp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  const highlights = [
    { icon: TrendingUp, title: 'Innovation', desc: 'Bringing creative solutions with cutting-edge technology' },
    { icon: Users, title: 'Collaboration', desc: 'Strong team player with excellent communication skills' },
    { icon: Zap, title: 'Quick Learner', desc: 'Rapidly adapting to new technologies and frameworks' },
    { icon: Target, title: 'Goal-Oriented', desc: 'Delivering projects on time with exceptional quality' },
  ];

  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> with experience in building modern, scalable web applications. I focus on writing clean, maintainable code while delivering exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on expertise across the MERN stack, I specialize in crafting responsive frontends with React and Next.js, developing robust backends with Node.js and Express, and designing efficient databases with MongoDB.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I value collaboration and continuous learning. I enjoy solving complex problems and turning ideas into impactful digital products that users love.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-600 font-medium">Projects</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600">3+</p>
                <p className="text-sm text-gray-600 font-medium">Years Exp</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">100%</p>
                <p className="text-sm text-gray-600 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all">
                <item.icon className="text-blue-600 mb-3" size={32} />
                <h4 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 88, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 78, category: 'Database' },
    { name: 'RESTful APIs', level: 85, category: 'Backend' },
    { name: 'Git & GitHub', level: 88, category: 'Tools' },
    { name: 'Firebase', level: 75, category: 'Tools' },
  ];

  return (
    <section id="skills" className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Technologies I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-2 inline-block">{skill.category}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Git', 'Firebase', 'Vercel', 'REST APIs'].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Section
function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'Mirco Pathways',
      period: 'Oct 2021 - Nov 2023',
      location: 'Remote',
      responsibilities: [
        'Developed responsive web interfaces using React.js and Tailwind CSS',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance resulting in 40% faster load times',
        'Participated in code reviews and implemented best practices'
      ],
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git']
    },
    {
      role: 'Full Stack Developer',
      company: 'Freelance & Personal Projects',
      period: 'Jan 2022 - Jan 2025',
      location: 'Remote',
      responsibilities: [
        'Built full-stack applications using MERN stack for various clients',
        'Designed and developed RESTful APIs with Node.js and Express',
        'Implemented authentication systems and database management',
        'Delivered projects on time with 100% client satisfaction'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js']
    }
  ];

  return (
    <section id="experience" className="px-8 md:px-16 lg:px-24 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right">
                    <p className="flex items-center gap-1"><Calendar size={16} /> {exp.period}</p>
                    <p className="flex items-center gap-1"><MapPin size={16} /> {exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: 'Weather App',
      description: 'A modern React-based weather application that provides real-time weather data, forecasts, and location-based information using OpenWeather API.',
      image: '🌤️',
      tags: ['React.js', 'API', 'Tailwind CSS'],
      links: { live: '#', github: '#' }
    },
    {
      title: 'Digital Art - Freelancer Dashboard',
      description: 'Complete dashboard for freelancers to manage projects, track time, handle invoices, and communicate with clients all in one place.',
      image: '📊',
      tags: ['Next.js', 'MongoDB', 'Node.js'],
      links: { live: '#', github: '#' }
    },
    {
      title: 'Brag Brus Website',
      description: 'A modern, responsive e-commerce website with product catalog, shopping cart, user authentication, and secure payment integration.',
      image: '🛍️',
      tags: ['React', 'Express', 'Stripe', 'MongoDB'],
      links: { live: '#', github: '#' }
    }
  ];

  return (
    <section id="projects" className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.links.live} className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold">
                    <Eye size={18} /> Live Demo
                  </a>
                  <a href={project.links.github} className="flex items-center gap-1 text-gray-600 hover:text-gray-700 font-semibold">
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Let's discuss your next project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <Mail className="mx-auto mb-3 text-blue-600" size={32} />
            <h4 className="font-bold text-gray-800 mb-2">Email</h4>
            <p className="text-gray-600 text-sm">waqas@example.com</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <MapPin className="mx-auto mb-3 text-blue-600" size={32} />
            <h4 className="font-bold text-gray-800 mb-2">Location</h4>
            <p className="text-gray-600 text-sm">Rawalpindi, Pakistan</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <Briefcase className="mx-auto mb-3 text-blue-600" size={32} />
            <h4 className="font-bold text-gray-800 mb-2">Availability</h4>
            <p className="text-gray-600 text-sm">Open for projects</p>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all text-lg">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Waqas Bashir</h3>
            <p className="text-gray-400">Full Stack Developer specializing in modern web applications</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Waqas Bashir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}