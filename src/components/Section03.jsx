import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image from "../assets/images/section03.jpg";

const Section03 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ani3 = gsap.timeline({
      paused: true, // 애니메이션을 처음에 멈춘 상태로
    });

    ani3.from(".se-03 .circle", {
      bottom: "90%",
      stagger: {
        amount: 1,
        from: "left",
      },
      duration: 2.5,
      ease: "bounce.out",
    });

    ScrollTrigger.create({
      animation: ani3,
      trigger: ".se-03",
      start: "top bottom", // 트리거 시작 지점
      end: "bottom top", // 트리거 종료 지점
      toggleActions: "play none play none", // 스크롤 시 애니메이션 재실행
      onEnter: () => ani3.restart(), // 아래로 스크롤할 때 애니메이션 재시작
      // onLeaveBack: () => ani3.restart(), // 위로 스크롤할 때 애니메이션 재시작
    });
  }, []);

  return (
    <section className="se-03">
      <div className="inner">
        <div className="content">
          <p className="name">Sapore naturale in ogni boccone</p>
          <div className="explanation">
            <div class="exWrap">
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
            </div>
            <div class="exWrap">
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
            </div>
          </div>

          <div className="contentBottom">
            <div className="imgFrame">
              <div className="imgWrap">
                <img src={image} alt="se03img" />
              </div>
            </div>

            <div className="aniFrame">
              <p>
                SEMPLICEMENTE
                <span>SANO!</span>
              </p>
              <ul>
                <li className="circle">GLUTEN FREE</li>
                <li className="circle">COLESTEROLO FREE</li>
                <li className="circle">SENZA CONSERVANT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
