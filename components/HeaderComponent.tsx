"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import Modal from "react-modal";
import Logo from "@/images/header/logo.svg";
import s from "./HeaderComponent.module.scss";
import Search from "./../images/header/search.svg";
import React, { useState, useEffect } from "react";
import BurgerMenuOpen from "./../images/header/burger-menu.svg";
import BurgermenuClose from "./../images/header/BurgerMenuClose.svg";

const menuItem = [
  { title: "Home", type: "link", link: "#" },
  { title: "Favorite", type: "link", link: "#" }
];

const favoriteItem = [
  { title: "Favorite cocktails", link: "#"},
  { title: "Favorite ingredients", link: "#"}
]

const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
};

const HeaderComponent = () => {
  const { modalIsOpen, openModal, closeModal } = useModal();

  const NavigationContent = (
    <ul className={s.header__nav__list}>
      {menuItem.map((item) => (
        <li key={item.title}>
          {item.type === "link" && <Link href={item.link}>{item.title}</Link>}
        </li>
      ))}
    </ul>
  );
  const ModalContent = (
    <>
      {NavigationContent}

    </>
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
        <button className={s.menu__open} type="button" onClick={openModal} >
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
        <div className={s.modal__container}>
          {ModalContent }
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

        <div className={s.modal__thema}>
          <p className={s.modal__thema__light}>Light</p>
          <button className={s.modal__thema__button}></button>
          <p className={s.modal__thema__dark}>Dark</p>
        </div>
          </div>
        <button className={s.modal__close} onClick={closeModal}>
          <Image src={BurgermenuClose} alt="close" width={20} height={20} />

        </button>
      </Modal>
    </header>
  );

};
export default HeaderComponent;