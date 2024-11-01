import { useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import Banner from "./components/Banner";
import Section01 from "./components/Section01";
//
import "./style.css";
import "./styles/base/reset.scss";
import "./styles/layouts/banner.scss";
import "./styles/layouts/section01.scss";

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
      <main>
        <Banner />
        <Section01 />
      </main>
    </div>
  );
}

export default App;
