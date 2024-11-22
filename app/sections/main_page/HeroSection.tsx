"use client";
import React from "react";
import Image from "next/image";

import ButtonComponent from "@/components/ButtonComponent";

import Coctails from "@/images/hero/Coctails.png";

const HeroSection = () => {
  return (
    <section className="container flex gap-[30px] flex-col justify-between md:flex-row items-center mt-[60px] mb-[40px] ">
      <div className="md:w-[55%] flex flex-col items-center gap-[40px] md:items-start">
        <h1 className="text-[#fd5103] text-center md:text-start text-[30px] font-semibold leading-[190%] md:text-[35px] md:leading-[161.538%] lg:text-[40px] lg:leading-[150%] lg:text-left ">
          A party without cocktails is not like a party
        </h1>
        <ButtonComponent
          typeButton="MainButton"
          text="Your coctails"
          tag="a"
        />
      </div>
      <Image
        className="w-[340px] lg:w-[450px]"
        src={Coctails}
        alt="Coctails"
      />
    </section>
  );
};

export default HeroSection;
