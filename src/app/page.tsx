import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fighters from "@/components/Fighters";
import Results from "@/components/Results";
import Articles from "@/components/Articles";
import About from "@/components/About";
import News from "@/components/News";
import BestMoments from "@/components/BestMoments";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Articles />
      <Fighters />
      <Results />
      <News />
      <BestMoments />
      <Shop />
      <About />
      <Footer />
    </main>
  );
}
