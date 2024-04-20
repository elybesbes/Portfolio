import Education from "../Education";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Experience from "../Experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <Experience/>
      <MyPortfolio />
      <Education />
      <ContactMe />
      <Footer />
    </>
  );
}
