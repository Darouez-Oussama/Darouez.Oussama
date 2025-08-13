import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { CommunityInvolvement } from "@/components/community-involvement" // Added import for new Community Involvement component
import { Projects } from "@/components/projects"
import { Awards } from "@/components/awards"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CommunityInvolvement /> {/* Added Community Involvement section after Experience */}
        <Projects />
        <Awards />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}
