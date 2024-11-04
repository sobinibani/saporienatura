import { useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import Banner from "./components/Banner";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Footer from "./components/Footer";
//
import "./style.css";
import "./styles/base/reset.scss";
import "./styles/layouts/banner.scss";
import "./styles/layouts/section01.scss";
import "./styles/layouts/section02.scss";
import "./styles/layouts/section03.scss";
import "./styles/layouts/section04.scss";
import "./styles/layouts/footer.scss";

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
        <Section02 />
        <Section03 />
        <Section04 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
