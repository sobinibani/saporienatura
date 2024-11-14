import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BreadCard from "./BreadCard";
import breadImg1 from "../assets/images/bread01.jpg";
import breadImg2 from "../assets/images/bread02.jpg";
import breadImg3 from "../assets/images/bread03.jpg";
import breadImg4 from "../assets/images/bread04.jpg";
import breadImg5 from "../assets/images/bread05.jpg";
import breadImg6 from "../assets/images/bread06.jpg";

const Section01 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // 반응형 설정을 위해 ScrollTrigger.matchMedia 사용
    ScrollTrigger.matchMedia({
      // 700px 이상일 때만 애니메이션 활성화
      "(min-width: 700px)": function () {
        gsap.utils.toArray(".column1").forEach((item) => {
          gsap.to(item, {
            yPercent: 10,
            duration: 10,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 10,
              toggleActions: "play none reverse none",
            },
          });
        });

        gsap.utils.toArray(".column2, .column3").forEach((item) => {
          gsap.to(item, {
            yPercent: -5,
            duration: 10,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 10,
              toggleActions: "play none reverse none",
            },
          });
        });
      },
      // 700px 미만일 때는 애니메이션 비활성화
      "(max-width: 699px)": function () {
        // 빈 함수로 두면 애니메이션이 적용되지 않음
      },
    });

    return () => {
      // Clean up ScrollTrigger to avoid memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="se-01">
      <div className="inner">
        <div className="column column1">
          <BreadCard
            name="Amaretto Classico"
            price="6,00 €"
            image={breadImg1}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno,
            confezionati singolarmente."
          />
          <BreadCard
            name="Mandorlotto Classico"
            price="6,00 €"
            image={breadImg4}
            exItemText="Busta da 200 gr. contenente 5 mandorlotti da 40 gr. ciscuno, confezionati singolarmente."
          />
        </div>
        <div className="column column2">
          <div className="textCard">
            <p>Prova i nostri</p>
            <p>AMARETTI E MANDORLOTTI</p>
          </div>
          <BreadCard
            name="Amaretto al Pistacchio"
            price="7,00 €"
            image={breadImg2}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
          <div className="textCard">
            <p>Mandorle 100% Italiane</p>
            <p>NATURA PURA IN OGNI MORSO</p>
          </div>
          <BreadCard
            name="Amaretto alla Liquirizia"
            price="6,00 €"
            image={breadImg5}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
        </div>
        <div className="column column3">
          <BreadCard
            name="Mandorlotto all'Amarena"
            price="7,00 €"
            image={breadImg3}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
          <BreadCard
            name="Amaretto all'Amarena"
            price="7,00 €"
            image={breadImg6}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
        </div>
      </div>
    </section>
  );
};

export default Section01;
