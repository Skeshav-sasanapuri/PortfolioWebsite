import { SimpleNavbarWithHoverEffects } from "@/components/blocks/navbars/simple-navbar-with-hover-effects"
import HeroLanding from "@/components/portfolio/hero-landing"
import ProjectsSection from "@/components/portfolio/projects-section"
import ResearchSection from "@/components/portfolio/research-section"
import SkillsExperience from "@/components/portfolio/skills-experience"
import AboutSection from "@/components/portfolio/about-section"
import ContactSection from "@/components/portfolio/contact-section"
import { CenteredWithLogo } from "@/components/blocks/footers/centered-with-logo"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SimpleNavbarWithHoverEffects />
      <HeroLanding />
      <ProjectsSection />
      <ResearchSection />
      <SkillsExperience />
      <AboutSection />
      <ContactSection />
      <CenteredWithLogo />
    </main>
  )
}