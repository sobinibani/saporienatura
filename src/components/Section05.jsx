import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/images/section5img1.jpg";
import img2 from "../assets/images/section5img2.jpg";
import img3 from "../assets/images/section5img3.jpg";
import img4 from "../assets/images/section5img4.jpg";

const Section05 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalRef = useRef(null);
  const slideFrameRef = useRef(null);
  const slideItemRef = useRef(null);
  const textWrapRef = useRef(null);

  useEffect(() => {
    const horizontal = horizontalRef.current;
    const slideFrame = slideFrameRef.current;
    const slideItem = slideItemRef.current;
    const textWrap = textWrapRef.current;

    // 모든 자식 요소의 width 값의 합 구하기
    const getTotalWidth = () => {
      return Array.from(slideFrame.children).reduce(
        (sum, child) => sum + child.offsetWidth,
        0
      );
    };

    const totalWidth = getTotalWidth();
    console.log("Total width:", totalWidth);
    console.log("slideItem.offsetWidth", slideItem.offsetWidth);
    const computedWidth = parseFloat(slideItem); // content만 포함된 width
    console.log("computedWidth", computedWidth);

    if (horizontal && slideFrame) {
      // 기본 슬라이드 애니메이션
      let scrollTween = gsap.to(slideFrame, {
        x: -totalWidth / 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: slideFrame,
          start: "bottom-=40 bottom",
          end: () => "+=" + totalWidth,
          pin: horizontal,
          anticipatePin: 1,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      // 텍스트 밑줄 애니메이션
      gsap.to(".linePath-marker", {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: horizontal,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none reverse none",
        },
      });

      // 화살표 애니메이션
      const arrow = gsap.timeline({ duration: 1 });
      arrow.from(".linePath-arrow.arrow1", {
        strokeDashoffset: 941.185,
      });
      arrow.from(".linePath-arrow.arrow2", {
        strokeDashoffset: 44.5308,
      });

      ScrollTrigger.create({
        animation: arrow,
        trigger: ".linePath-arrow.arrow1",
        containerAnimation: scrollTween,
        scrub: true,
        start: "left 130%",
        end: "left 15%",
        toggleActions: "play none reverse none",
      });
    }
  }, []);

  return (
    <section className="se-05" ref={horizontalRef}>
      <p className="topText">
        Dolcezza senza{" "}
        <span>
          compromessi.
          <div class="line">
            <svg
              class="svg-marker-line"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 521.1 17.37"
            >
              <path
                class="linePath-marker"
                d="M.07,8.91c56.94,1.06,116.38,2.57,170.98,3.36,2.14.02,5.04.02,8.21.03,7.58.08,24.79.26,44.41.46,19.62.22,41.64.44,58.85.54,9.95.02,19.9.1,29.85.06l14.93-.02,14.92-.11,7.46-.05,7.46-.12,14.91-.23,14.9-.36,7.45-.18,7.45-.26,14.89-.52,14.88-.69,7.44-.34c2.48-.12,4.96-.29,7.44-.43l14.86-.89c19.8-1.41,39.59-2.94,59.28-5.2"
                style={{
                  strokeDasharray: "520.927",
                  strokeDashoffset: "520.927",
                }}
              ></path>
            </svg>
          </div>
        </span>
      </p>
      <div className="slideFrame">
        <ul className="slideWrap" ref={slideFrameRef}>
          <li
            className="slideItem"
            style={{ height: "510px" }}
            ref={slideItemRef}
          >
            <div className="imgWrap">
              <img src={img1} alt="" aria-hidden />
            </div>
          </li>
          <li className="slideItem" style={{ height: "630px" }}>
            <div className="imgWrap">
              <img src={img2} alt="" aria-hidden />
            </div>
          </li>
          <li className="slideItem" style={{ height: "510px" }}>
            <div className="imgWrap">
              <img src={img3} alt="" aria-hidden />
            </div>
          </li>
          <li className="slideItem textWrap" ref={textWrapRef}>
            <svg
              class="svg-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 556.3 291.38"
            >
              <path
                class="linePath-arrow arrow1"
                d="M3.99.25c.19,3.05.46,6.45.63,9.79.22,3.34.27,6.62.53,9.4,2.35,35.59,8.25,71.06,20.13,104.52,5.95,16.71,13.4,32.85,22.59,47.94l7.2,11.11,7.85,10.65c5.41,6.92,11.34,13.42,17.71,19.47,11.03,10.42,23.29,19.62,36.52,27.09,6.61,3.75,13.42,7.12,20.42,10.06,7.01,2.9,14.2,5.35,21.49,7.35l-.23-.04,3.65,1.16c1.23.36,2.47.67,3.71.96,3.05.74,6.13,1.24,9.21,1.82,1.54.24,3.09.43,4.64.66l2.32.32,2.33.23c6.22.69,12.46.85,18.69.71,6.24-.11,12.43-.84,18.57-1.78,6.14-1.01,12.16-2.56,18.08-4.4,2.91-1.07,5.88-1.98,8.71-3.24,2.87-1.16,5.7-2.39,8.43-3.82,5.49-2.78,10.68-6.07,15.4-9.86,4.75-3.76,8.9-8.14,12.3-12.95,1.65-2.43,3.17-4.93,4.33-7.6.65-1.31,1.12-2.67,1.62-4.03.28-.69.42-1.36.61-2.04.16-.69.39-1.35.53-2.04,1.15-5.83,1.04-12.06-.58-17.89-5.69-25.17-28.64-24.84-38.43-18.08-4.3,2.8-7.97,6.81-10.85,11.31-2.86,4.53-4.92,9.61-6.02,14.87-1.04,5.24-1.2,10.69-.01,15.79.53,2.51,1.59,5.06,2.58,7.61l1.79,3.68c.66,1.2,1.4,2.36,2.09,3.55,5.95,9.26,14.5,16.91,24.11,22.94,9.61,6.07,20.15,10.87,31.07,14.68l13.46,4.5c4.53,1.38,9.14,2.48,13.7,3.73,4.54,1.35,9.21,2.13,13.85,3.1l6.96,1.42c2.32.46,4.69.69,7.03,1.05l7.04.98c2.35.32,4.68.71,7.05.85l14.16,1.15c9.47.28,18.95.7,28.41.15,37.91-1.23,75.46-9.94,110.35-24.73,3.53-1.55,7.07-3.39,10.64-5.12,1.78-.88,3.57-1.77,5.37-2.64,1.77-.9,3.48-1.94,5.22-2.87,3.47-1.9,6.92-3.72,10.34-5.35"
                fill="none"
                stroke="#ff3b00"
                stroke-miterlimit="10"
                stroke-width="8"
                style={{
                  strokeDasharray: "941.185",
                  strokeDashoffset: "0",
                }}
              ></path>
              <path
                class="linePath-arrow arrow2"
                d="M540.95,267.14l9.75-19.95-21.17-7.09"
                fill="none"
                stroke="#ff3b00"
                stroke-miterlimit="10"
                stroke-width="8"
                style={{
                  strokeDasharray: "44.5308",
                  strokeDashoffset: "0",
                }}
              ></path>
            </svg>
            <p>Filiera</p>
          </li>
          <li className="slideItem" style={{ height: "510px" }}>
            <div className="imgWrap">
              <img src={img4} alt="" aria-hidden />
            </div>
          </li>
        </ul>
      </div>
      <p className="bottomText">
        Assapora il Gusto Autentico della Calabria: Dolci alle Mandorle
        preparati con Passione!
      </p>
    </section>
  );
};

export default Section05;
