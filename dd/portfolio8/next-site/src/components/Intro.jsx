import React from "react";
import Image from "next/image";

import { introText } from "../constants";

const Intro = () => (
  <section id="intro">
    <div className="intro__inner">
      <h1 className="intro__title">{introText.title}</h1>
      <div className="intro__lines" aria-hidden="true">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="intro__text">
        <div className="text">
          <div>{introText.desc[0]}</div>
          <div>{introText.desc[1]}</div>
          <div>{introText.desc[2]}</div>
        </div>
        <div className="img">
          <Image
            src="/assets/img/about.jpg"
            alt="어바웃"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="intro__lines bottom" aria-hidden="true">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  </section>
);

export default Intro;
