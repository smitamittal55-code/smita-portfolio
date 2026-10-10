import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsPreview from "@/components/home/SkillsPreview";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import EducationPreview from "@/components/home/EducationPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import InteractiveTerminal from "@/components/home/InteractiveTerminal";
import RecruiterMode from "@/components/home/RecruiterMode";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* About */}
        <AboutPreview />

        {/* Skills */}
        <SkillsPreview />

        {/* Experience */}
        <ExperiencePreview />

        {/* Education */}
        <EducationPreview />

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Interactive Terminal */}
        <InteractiveTerminal />

        {/* Recruiter Mode */}
        <RecruiterMode />

        {/* Contact */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

