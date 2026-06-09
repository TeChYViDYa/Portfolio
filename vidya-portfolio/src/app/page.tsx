import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ValuesSection from '@/components/sections/ValuesSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <hr className="border-t border-[#E5E5E5] max-w-[1200px] mx-auto" />
        <AboutSection />
        <hr className="border-t border-[#E5E5E5] max-w-[1200px] mx-auto" />
        <SkillsSection />
        <hr className="border-t border-[#E5E5E5] max-w-[1200px] mx-auto" />
        <ProjectsSection />
        <hr className="border-t border-[#E5E5E5] max-w-[1200px] mx-auto" />
        <ExperienceSection />
        <hr className="border-t border-[#E5E5E5] max-w-[1200px] mx-auto" />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
