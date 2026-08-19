'use client';

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { contactData } from "../data/mock-data";

export default function Footer() {
const contactLinks=[
  {icon: Github, link:"https://github.com/Waqas106"},
  {icon: Linkedin, link:"https://linkedin.com/in/muhammad-waqas-bashir"},
  {icon: Mail, link:"mailto:m.waqasbashir33@gmail.com"},
]
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/50">
      <span className="ghost-word absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.5rem] sm:text-[6rem] md:text-[9rem]">
        Waqas
      </span>
      <div className="relative mx-auto flex max-w-6xl flex-col md:flex-row items-center md:justify-between gap-5 px-4 py-10 text-center">
        <div className="items-center md:items-start!"> 
        <p className="font-display text-lg font-bold">Waqas Bashir</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Full Stack Developer building scalable, user-friendly web and desktop applications.
        </p>
        </div>
        <div> 
        <div className="flex gap-3">
          {contactLinks.map((ctn, i) => (
            <Link
              key={i}
              href={ctn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground"
            >
              <ctn.icon className="size-4" />
            </Link>
          ))}
        </div>
        <p className="relative  py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Waqas Bashir. All rights reserved.
      </p>
        </div>
      </div>
      
    </footer>
  );
}