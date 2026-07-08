import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "../components/Research";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Achievements from "@/components/Achievements";
import Leadership from "../components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <CompetitiveProgramming />
      <Achievements />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}