import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import About from "@/components/about.js";
import Services from "@/components/Services.js";
import Skills from "@/components/skills.js";
import Experience from "@/components/experience.js";
import Education from "@/components/Education.js";
import Projects from "@/components/projects.js";
import CaseStudies from "@/components/CaseStudies.js";
import Testimonials from "@/components/Testimonials.js";
import Faq from "@/components/Faq.js";
import Contact from "@/components/contact.js";
import Footer from "@/components/footer.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        {/* <CaseStudies /> */}
        {/* <Testimonials /> */}
        {/* <Faq /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
