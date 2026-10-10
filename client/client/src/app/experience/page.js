import Navbar from "@/components/layout/Navbar";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import Footer from "@/components/layout/Footer";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main>
        <ExperiencePreview />
      </main>

      <Footer />
    </>
  );
}

