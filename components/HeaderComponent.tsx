"use client";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import ArrowMe from "./../images/header/arrow-up.svg";
import Image from "next/image";
import classNames from "classnames";
import Logo from "@/images/header/logo.svg";
import s from "./HeaderComponent.module.scss";
import Search from "./../images/header/search.svg";
import React, { useState, useEffect, FC } from "react";
import BurgerMenu from "./../images/header/burger-menu.svg";
import BurgermenuClose from "./../images/header/BurgerMenuClose.svg";
import SearchComponent from "./SearchComponent";

interface HeaderProps {
  className?: string;
}

interface MenuItem {
  title: string;
  link: string;
  type?: string;
  submenu?: MenuItem[];
}

interface NavigationListProps {
  items: MenuItem[];
  className?: string;
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

const HeaderComponent = () => {
  const HeaderLogo: FC<HeaderProps> = ({ className }) => (
    <Link href="">
      <Image src={Logo} alt="logo" />
    </Link>
  );

  const NavigationList: FC<NavigationListProps> = ({ items, className }) => (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );

  const [mobileMenuOpened, { open: openMobileMenu, close: closeMobileMenu }] =
    useDisclosure(false);

  return (
    <header className="container flex justify-between items-center pt-[20px] ">
      <HeaderLogo />
      <nav className="hidden lg:flex">
        <NavigationList items={MenuItem} className="flex gap-[60px]" />
      </nav>
      <div className="flex items-center justify-between ">
        <SearchComponent className="hidden lg:block" />
        <button className="lg:hidden" onClick={openMobileMenu} type="button">
          <Image src={BurgerMenu} alt="Burger Menu" width={24} height={24} />
        </button>
      </div>

      <Modal
        opened={mobileMenuOpened}
        onClose={() => ""}
        fullScreen
        radius={0}
        classNames={{
          header: "hidden",
          overlay: "bg-transparent",
          content: "h-[100%] lg:hidden",
        }}
        transitionProps={{ transition: "scale-x", duration: 200 }}
      >
        <div className="container flex flex-col gap-[40px] py-[20px] px-0 ">
          <div className="flex justify-between">
            <HeaderLogo />
            <button onClick={closeMobileMenu}>
              <Image src={BurgermenuClose} alt="Close" width={26} height={26} />
            </button>
          </div>

          <SearchComponent className="block lg:hidden" />

          <NavigationList
            items={MenuItem}
            className="flex flex-col gap-[15px] text-[28px] font-normal"
          />
        </div>
      </Modal>
    </header>
  );
};
export default HeaderComponent;
