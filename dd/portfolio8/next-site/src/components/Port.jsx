"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port__inner">
        <div className="port__title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, index) => (
            <div
              className={`port__item p${index + 1}`}
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <span className="num">{port.num}.</span>
              <Image src={port.img} alt={port.title} width={420} height={320} />
              <h3>{port.title}</h3>
              <p>{port.desc}</p>
              <a href="/">사이트 보기</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
