"use client";
import Link from "next/link";
import ArrowMe from "./../images/header/arrow-up.svg";
import Image from "next/image";
import classNames from "classnames";
import Modal from "react-modal";
import Logo from "@/images/header/logo.svg";
import s from "./HeaderComponent.module.scss";
import Search from "./../images/header/search.svg";
import React, { useState, useEffect } from "react";
import BurgerMenuOpen from "./../images/header/burger-menu.svg";
import BurgermenuClose from "./../images/header/BurgerMenuClose.svg";

interface NavigationListProps {
  items: MenuItem[];
  className: string;
}

interface MenuItem {
  title: string;
  type: string;
  link: string;
  submenu?: { title: string; link: string }[];
}

const MenuItem: MenuItem[] = [
  { title: "Home", type: "link", link: "#" },
  {
    title: "Favorite",
    type: "submenu",
    link: "",
    submenu: [
      { title: "Favorite cocktails", link: "#" },
      { title: "Favorite ingredients", link: "#" },
    ],
  },
];

const MenuItemComponent: React.FC<MenuItem> = ({
  title,
  type,
  link,
  submenu,
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isFavoriteMenuOpen, setFavoriteMenuOpen] = useState(false);
  const [isArrowRotated, setArrowRotated] = useState(false);


  const handleSubMenuShow = () => {
    setShowSubMenu(true);
    setArrowRotated(true);
    setFavoriteMenuOpen(true)
  };

  const handleSubMenuHide = () => {
    setShowSubMenu(false);
    setArrowRotated(false);
    setFavoriteMenuOpen(false)
  };

  return (
    <li
      key={title}
      onMouseEnter={type === "submenu" ? handleSubMenuShow : undefined}
      onMouseLeave={type === "submenu" ? handleSubMenuHide : undefined}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {type === "link" && (
        <Link href={link}>
          <span>{title}</span>
        </Link>
      )}
      {type === "submenu" && submenu && (
        <>
          <span onMouseEnter={handleSubMenuShow}>{title}</span>
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              display: showSubMenu ? "block" : "none",
            }}
          >
            {submenu.map((subitem) => (
              <li key={subitem.title}>
                <Link href={subitem.link}>{subitem.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {type === "submenu" && (
        <span    className={classNames(s.arrow, {
          [s.arrow__rotated]: isArrowRotated && isFavoriteMenuOpen,
        })}>
          <Image src={ArrowMe} alt="⌵" />
        </span>
      )}
    </li>
  );
};

const NavigationList: React.FC<NavigationListProps> = ({
  items,
  className,
}) => (
  <ul className={className}>
    {items.map((item: MenuItem) => (
      <MenuItemComponent {...item} key={item.title} />
    ))}
  </ul>
);

const HeaderComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setModalIsOpen(false);
    }
  }, [windowWidth]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <header className={classNames(s.container, s.header)}>
      <div className={s.header__info}>
        <div className={s.header__logo}>
          <Link className={s.header__logo} href="/app/page.tsx" target="_blank">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className={s.header__nav}>
          <NavigationList items={MenuItem} className={s.header__nav__list} />
        </nav>
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
        <button className={s.menu__open} type="button" onClick={openModal}>
          <Image
            className={s.menu__open__img}
            src={BurgerMenuOpen}
            alt="Burger-menu"
          />
        </button>
      </div>

      <Modal
        className={s.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className={classNames(s.container, s.modal__container)}>
          <div className={s.modal__thema}>
            <p className={s.modal__thema__light}>Light</p>
            <button className={s.modal__thema__button}></button>
            <p className={s.modal__thema__dark}>Dark</p>
          </div>

          <form className={s.modal__search} action="">
            <button className={s.modal__search__button}>
              <Image
                className={s.modal__search__svg}
                src={Search}
                alt="Search"
              />
              <div className={s.modal__search__line}></div>
              <input
                className={s.modal__search__input}
                type="Search |"
                autoComplete="off"
                name="searchQuery"
                placeholder="Search |"
              />
            </button>
          </form>
          <nav className={s.modal__nav}>
            <NavigationList items={MenuItem} className={s.modal__nav__list} />
          </nav>
        </div>
        <button className={s.modal__close} onClick={closeModal}>
          <Image
            className={s.modal__close__img}
            src={BurgermenuClose}
            alt="close"
            width={20}
            height={20}
          />
        </button>
      </Modal>
    </header>
  );
};
export default HeaderComponent;
