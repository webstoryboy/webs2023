import React from "react";
import Image from "next/image";

const Title = ({ attr }) => {
  return (
    <div className="intro__inner center">
      <Image
        src={attr.img}
        alt="게시판 이미지"
        width={200}
        height={200}
        priority={true}
      />
      <h2>{attr.title}</h2>
      <p className="intro__text">{attr.desc}</p>
    </div>
  );
};

export default Title;
