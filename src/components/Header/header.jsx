import React, { useState } from "react";
import { Container } from "./header.style";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { useMenuContext } from "../../context/menu-context";

const Header = () => {
  const { showMenu, setShowMenu } = useMenuContext();
  return (
    <Container open={showMenu}>
      <div className="container">
        <header>
          <div className="header">
            {showMenu && (
              <div
                onClick={() => setShowMenu(false)}
                className="black-bg"
              ></div>
            )}
            <button
              id="nav-icon2"
              onClick={() => setShowMenu(!showMenu)}
              className={`btn header__menu ${showMenu && "open"}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <img src={logo} alt="" className="header__logo" />
            <nav className="header__nav">
              <Link className="header__nav--item">Biz haqimizda</Link>
              <Link className="header__nav--item">Kurslar</Link>
              <Link className="header__nav--item">Kontakt</Link>
            </nav>
            <button className="header__button btn">Kurslarni ko’rish</button>
          </div>
        </header>
      </div>
    </Container>
  );
};

export default Header;
