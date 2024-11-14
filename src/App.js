import { useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import Preloader from "./components/Preloader";
import Banner from "./components/Banner";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import Footer from "./components/Footer";
//
import "./style.css";

function App() {
  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App">
      <Preloader />
      <main>
        <Banner />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
