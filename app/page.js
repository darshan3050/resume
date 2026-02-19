import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <main className="bg-[#0d0d0f] text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
