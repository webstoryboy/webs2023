"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[1].value;
    const password = e.target[2].value;

    signIn("credentials", { email, password });
  };

  return (
    <main id="main" className="container">
      <div className="login__inner">
        <h2>로그인</h2>
        <p>
          로그인을 하시면 게시글 및 댓글 작성이 가능합니다.
          <br />
          회원가입을 하면 로그인이 가능합니다.
        </p>
        <div className="login__form btStyle bmStyle">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="blind">로그인 영역</legend>
              <div>
                <label htmlFor="youEmail" className="blind required">
                  이메일
                </label>
                <input
                  type="email"
                  id="youEmail"
                  name="youEmail"
                  className="inputStyle"
                  placeholder="이메일"
                  required
                />
              </div>
              <div>
                <label htmlFor="youPass" className="blind required">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="youPass"
                  name="youPass"
                  className="inputStyle"
                  placeholder="비밀번호"
                  autoComplete="false"
                  required
                />
              </div>
              <button type="submit" className="btnStyle2 mt20">
                로그인
              </button>
            </fieldset>
          </form>
          <button
            onClick={() => signIn("google")}
            type="submit"
            className="btnStyle2 mt10"
          >
            구글 로그인
          </button>
        </div>
        <div className="login__footer">
          <ul className="listStyle">
            <li>
              회원가입을 하지 않았다면 회원가입을 먼저 해주세요!{" "}
              <a href="join.html">회원가입</a>
            </li>
            <li>
              아이디가 기억이 나지 않는다면! <a href="#">아이디 찾기</a>
            </li>
            <li>
              비밀번호가 기억이 나지 않는다면! <a href="#">비밀번호 찾기</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Login;
