import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section04 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray(".word1").forEach((item) => {
      gsap.to(item, {
        y: -100,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none reverse none",
        },
      });
    });

    gsap.utils.toArray(".word2").forEach((item) => {
      gsap.to(item, {
        y: 100,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none reverse none",
        },
      });
    });
  }, []);

  return (
    <section className="se-04">
      <div className="inner">
        <ul>
          <li>MATERIE PRIME</li>
          <li>
            ECCELLENTI
            <span className="word word1" style={{ top: "100px", left: "0px" }}>
              MANDORLE
            </span>
            <span className="word word1" style={{ top: "60px", left: "40%" }}>
              PISTACCHIO
            </span>
            <span className="word word1" style={{ top: "0px", right: "0px" }}>
              AMARENA
            </span>
          </li>
          <li>PER UN GUSTO</li>
          <li>
            INCONFONDIBILE
            <span className="word word2" style={{ top: "-70px", left: "20%" }}>
              LIQURIZIA
            </span>
            <span className="word word2" style={{ top: "10%", left: "55%" }}>
              CLEMENTINE
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section04;
