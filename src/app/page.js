import About from "@/components/about.js";
import Contact from "@/components/contact.js";
import Experience from "@/components/experience.js";
import Footer from "@/components/footer.js";
import Header from "@/components/header.js";
import MainSection from "@/components/main.js";
import Projects from "@/components/projects.js";
import Skills from "@/components/skills.js";

export default function Home() {
  return (
    <>
    <Header/>
    <MainSection/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
