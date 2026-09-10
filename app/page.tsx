import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "../components/Research";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <CompetitiveProgramming />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}