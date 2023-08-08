import React from "react";
import Image from "next/image";
import Title from "@/components/title/Title";
import Link from "next/link";

const secTitle = {
  title: "블로그",
  img: "/img/join01.png",
  desc: "next.js를 통해서 블로그 만드는 방법을 배웁니다.",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  console.log(data);

  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
      <div className="blog__inner btStyle">
        <div className="blog__wrap">
          <div className="cards__inner col3 line2">
            {data.map((item) => (
              <div className="card" key={item._id}>
                <Link href={`/blog/${item._id}`}>
                  <Image
                    src="/img/blog02@2x.jpg"
                    alt="img"
                    width={360}
                    height={260}
                    priority={true}
                  />
                </Link>
                <div className="card__title">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
                <div className="card__info">
                  <Link href={`/blog/${item._id}`} className="more">
                    더보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
