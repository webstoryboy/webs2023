import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <main id="main" className="container">
      <div
        className="blog__title"
        style={{
          background: "url(/img/blog02@2x.jpg) no-repeat center / cover",
        }}
      >
        <span className="cate">javascript</span>
        <h2 className="title">{data.title}</h2>
        <div className="info">
          <span className="author">글쓴이</span>
          <span className="date">2023-04-05</span>
          <div className="modify">
            <a href="#">수정</a>
            <a href="#">삭제</a>
          </div>
        </div>
      </div>

      <div className="blog__inner">
        <div className="left mt70">
          <div className="blog__contents">
            <h3>{data.title}</h3>
            <p>{data.content}</p>
          </div>
        </div>
        <div className="right mt70">
          <div className="blog__aside">
            <div className="intro">
              <Image src="/img/intro02.png" alt="me" width={200} height={260} />
              <p className="text">
                어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고
                생각합니다.
              </p>
            </div>
            <div className="cate">
              <h4>카테고리</h4>
            </div>
            <div className="cate">
              <h4>최신 글</h4>
            </div>
            <div className="cate">
              <h4>인기 글</h4>
            </div>
            <div className="cate">
              <h4>최신 댓글</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
