import React, { useState } from "react";

import { headerNav } from "../constants";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="heading" aria-level="1">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            portfolio<em>next.js</em>
          </a>
        </div>
        <nav className={`header__nav ${show ? "show" : ""}`}>
          <ul>
            {headerNav.map((nav) => (
              <li key={nav.id}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
