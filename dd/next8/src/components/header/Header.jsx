"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const menus = [
  {
    id: 1,
    title: "소개",
    url: "/about",
  },
  {
    id: 2,
    title: "회원가입",
    url: "/dashboard/register",
  },
  {
    id: 3,
    title: "게시판",
    url: "/board",
  },
  {
    id: 4,
    title: "블로그",
    url: "/blog",
  },
  {
    id: 5,
    title: "대시보드",
    url: "/dashboard",
  },
];

const Header = () => {
  const session = useSession();

  return (
    <header id="header">
      <div className="header__inner container">
        <div className="left">
          <Link href="/" className="star">
            <span className="blind">리스트보기</span>
          </Link>
        </div>
        <h1 className="logo">
          <Link href="/">Developer Blog</Link>
        </h1>
        <div className="right">
          <ul>
            <li>
              {session.status === "authenticated" && (
                <button href="/dashboard/login" onClick={signOut}>
                  로그아웃
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
      <nav className="nav__inner">
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
