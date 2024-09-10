import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

import Twitter from "./../images/footer/twitter.svg";
import Facebook from "./../images/footer/facebook.svg";
import LinkedIn from "./../images/footer/linkedin.svg";
import Instagram from "./../images/footer/instagram.svg";
import LogoFooter from "./../images/footer/LogoFooter.svg";

import ButtonComponent from "./ButtonComponent";

interface FooterProps {
  className?: string;
}

const FooterComponent = () => {
  const FooterLogo: FC<FooterProps> = ({ className }) => (
    <Link href="">
      <Image className="pb-[10px]" src={LogoFooter} alt="logo" />
    </Link>
  );

  const ContactInfo: FC<FooterProps> = ({ className }) => (
    <div className="flex flex-col text-[#ffffff] ">
      <Link
        href="https://www.google.com/maps/place/Shepherd's+Pub+Zwickau/@50.7180707,12.3743547,12z/data=!4m10!1m2!2m1!1scocktail!3m6!1s0x47a72c89112b837b:0x3ab75332fbcd1572!8m2!3d50.7180707!4d12.4567522!15sCghjb2NrdGFpbFoKIghjb2NrdGFpbJIBA2JhcuABAA!16s%2Fg%2F1pzx_kcbt?entry=ttu"
        target="_blank"
      >
        08060 Zwickau Marienthaler Str. 98,
      </Link>
      <Link href="mailto: info@coctails.com">info@coctails.com</Link>

      <Link href="tel:+380961111111">+38 096 111 11 11</Link>
    </div>
  );

  const LinkNetworks: FC<FooterProps> = ({ className }) => (
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="text-[#ffffff] text-[14px] font-bold uppercase mt-[20px] mb-[20px] lg:text-[18px]">
        Приєднуйтесь
      </h2>
      <div className="flex gap-[10px]">
        <Link
          href=""
          className="flex justify-center items-center w-[50px] h-[50px] bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[#fd0303] hover:scale-110 transition-transform"
        >
          <Image src={Instagram} alt="Instagram" />
        </Link>
        <Link
          href=""
          className="flex justify-center items-center w-[50px] h-[50px] bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[#fd0303] hover:scale-110 transition-transform"
        >
          <Image src={Twitter} alt="Twitter" />
        </Link>
        <Link
          href=""
          className="flex justify-center items-center w-[50px] h-[50px] bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[#fd0303] hover:scale-110 transition-transform"
        >
          <Image src={Facebook} alt="Facrbook" />
        </Link>
        <Link
          href=""
          className="flex justify-center items-center w-[50px] h-[50px] bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[#fd0303] hover:scale-110 transition-transform"
        >
          <Image src={LinkedIn} alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );

  return (
    <footer className="bg-[#fe7031]">
      <div className="container flex flex-col items-center py-[60px] gap-[50px] md:flex-row md:items-start md:justify-between">
        <div>
          <FooterLogo />
          <ContactInfo />
        </div>

        <LinkNetworks />

        <div className="w-[100%] lg:w-auto">
          <h2 className="text-center text-[#ffffff] text-[14px] font-bold uppercase mt-[20px] mb-[20px] lg:text-[18px] lg:text-start  ">
            Підпишись на розсилку
          </h2>
          <div className="flex justify-center flex-col items-center md:flex-col md:items-center lg:flex-row lg:flex-nowrap lg:items-start">
            <input
              className="w-[290px] h-[50px] mb-[20px] text-black pl-[15px] text-[rgba(255,255,255,0.6)] border-none outline-none text-[16px] font-[400] rounded-[4px] border-[1px] border-[rgba(255,255,255,0.3)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] lg:w-[250px] lg:mr-[12px]"
              type="email"
              name="em"
              id="email"
              required
              placeholder="example@gmail.com"
              autoComplete="off"
              pattern=".*[@]gmail[.]com$"
            />
            <ButtonComponent
              typeButton="FollowButton"
              text="Підписатись"
              type="button"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
