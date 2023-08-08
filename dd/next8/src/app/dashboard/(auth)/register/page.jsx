"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e);
    const name = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    // console.log(name, email, password);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=AccountCreated");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <main id="main" className="container">
      <div className="login__inner">
        <h2>회원가입</h2>
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
                <label htmlFor="youName" className="blind required">
                  이메일
                </label>
                <input
                  type="text"
                  id="youName"
                  name="youName"
                  className="inputStyle"
                  placeholder="이름"
                  required
                />
              </div>
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
                회원가입
              </button>
            </fieldset>
          </form>
          {err && "something went wrong"}
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

export default Register;
