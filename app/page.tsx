import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Achievements />
      <Contact />
    </main>
  )
}
