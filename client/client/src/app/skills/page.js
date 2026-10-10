import Navbar from "@/components/layout/Navbar";
import Skills from "@/components/home/SkillsPreview";
import Footer from "@/components/layout/Footer";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Skills />
      </main>
      <Footer />
    </>
  );
}
