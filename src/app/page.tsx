import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Fighters from "@/components/Fighters";
import Results from "@/components/Results";
import About from "@/components/About";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Fighters />
      <Results />
      <About />
      <News />
      <Footer />
    </main>
  );
}
