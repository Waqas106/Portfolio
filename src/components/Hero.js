'use client';

import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/img/profile-pic.png";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const contactLinks = [
    {icon:Github, link: "https://github.com/Waqas106"},
    { icon: Linkedin, link: "https://www.linkedin.com/in/muhammad-waqas-bashir/" },
    { icon: Mail, link: "mailto:waqasbashir106@gmail.com" }
  ]
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-10 md:pt-32">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--electric), transparent 65%)" }}
      />
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 md:grid-cols-2">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" /> Welcome to my portfolio
          </span>

          <div className="relative mt-6">
            <span className="ghost-word absolute -top-10 -left-2 text-[5.5rem] sm:text-[8rem] md:text-[9rem]">
              Code
            </span>
            <p className="relative text-lg text-muted-foreground">Hi, I&apos;m</p>
            <h1 className="relative text-5xl leading-[0.95] font-bold sm:text-6xl md:text-7xl">
              Waqas
              <br />
              <span className="text-gradient-navy">Bashir</span>
            </h1>
            <p className="relative mt-3 font-display text-lg font-semibold text-primary">
              &lt;/&gt; Full Stack Developer
            </p>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Crafting elegant, scalable web applications with the{" "}
            <span className="font-semibold text-foreground">MERN stack</span>. Transforming ideas into
            seamless digital experiences that users love and businesses rely on.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-navy"
            >
              <FileText className="size-4" /> View Work <ArrowRight className="size-4" />
            </a>
            <a
              href=""
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <FileText className="size-4" /> Get Resume 
            </a>
          </div>

          <div className="mt-6 flex gap-3">
           {contactLinks.map(( ctn,i) => (
                         <Link
                           key={i}
                           href={ctn.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground"
                         >
                           <ctn.icon className="size-4" />
                         </Link>
                       ))}
          </div>
        </div>

        <div className="relative">
          <span className="ghost-outline absolute top-6 -left-6 hidden text-[7rem] md:block">Dev</span>
          <span className="ghost-outline absolute bottom-4 -right-8 hidden text-[7rem] md:block">Dev</span>

          <Image
            src={profileImg}
            alt="Waqas Bashir, full stack developer"
            width={1024}
            height={1280}
            className="relative z-10 mx-auto w-full max-w-md object-contain drop-shadow-[0_30px_60px_rgba(10,26,63,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
