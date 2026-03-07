import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fighters from "@/components/Fighters";
import Results from "@/components/Results";
import About from "@/components/About";
import News from "@/components/News";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Events /> */}
      <Fighters />
      <Results />
      <About />
      <News />
      <Shop />
      <Footer />
    </main>
  );
}
