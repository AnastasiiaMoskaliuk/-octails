"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import Logo from "@/images/header/logo.svg";
import s from "./HeaderComponent.module.scss";
import Search from "./../images/header/search.svg";
import React, { useState, useEffect } from "react";
import BurgerMenuOpen from "./../images/header/burger-menu.svg";

const menuItem = [
  { title: "Home", type: "link", link: "#" },
  { title: "Favourite", type: "link", link: "#" },
];

const HeaderComponent = () => {
  const NavigationContent = (
    <ul className={s.header__nav__list}>
      {menuItem.map((item) => (
        <li key={item.title}>
          {item.type === "link" && <Link href={item.link}>{item.title}</Link>}
        </li>
      ))}
    </ul>
  );

  return (
    <header className={classNames(s.container, s.header)}>
      <div className={s.header__info}>
        <div className={s.header__logo}>
          <Link className={s.header__logo} href="/app/page.tsx" target="_blank">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className={s.header__nav}>{NavigationContent}</nav>
      </div>
      <div className={s.header__forms}>
        <form className={s.header__search} action="">
          <button className={s.header__search__button}>
            <Image
              className={s.header__search__svg}
              src={Search}
              alt="Search"
            />
            <div className={s.header__search__line}></div>
            <input
              className={s.header__search__input}
              type="Search |"
              autoComplete="off"
              name="searchQuery"
              placeholder="Search |"
            />
          </button>
        </form>
        <div className={s.header__thema}>
          <p className={s.header__thema__light}>Light</p>
          <button className={s.header__thema__button}></button>
          <p className={s.header__thema__dark}>Dark</p>
        </div>
        <button className={s.menu__open} type="button">
          <Image
            className={s.menu__open__img}
            src={BurgerMenuOpen}
            alt="Burger-menu"
          />
        </button>
      </div>
    </header>
  );
};
export default HeaderComponent;
