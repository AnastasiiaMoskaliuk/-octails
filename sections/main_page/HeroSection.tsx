"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Select } from "@mantine/core";

import heroData from "@/test-objects/HeroData";

import Coctails from "./../../images/hero/Coctails.png";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <section className="container flex flex-col justify-between md:flex-row items-center  mt-[60px] mb-[40px] ">
      <div className="md:w-[55%] flex flex-col items-center gap-[40px] md:items-start">
        <h1 className="text-[#fd5103] text-center md:text-start text-[30px] font-semibold leading-[190%] md:text-[35px] md:leading-[161.538%] lg:text-[40px] lg:leading-[150%] lg:text-left ">
          A party without cocktails is not like a party
        </h1>

        <Image
          className="w-auto h-auto md:hidden object-cover"
          src={Coctails}
          alt="Coctails"
        />

        <p className="text-[18px] font-medium leading-[200%] tracking-[0.28px] text-center md:leading-[200%] lg:text-[20px] lg:leading-[28px] lg:text-left">
          Search your favorite cocktail by ABC:
        </p>

        <div className="hidden md:flex md:w-[67%]  md:flex-row md:flex-wrap md:gap-[5px] lg:gap-[8px] lg:w-[70%]">
          {heroData.map((option, index) => (
            <button
  key={index}
  className={`md:text-[18px] text-start md:font-bold lg:text-[24px] 
    ${activeIndex === index ? "text-[#fd5103]" : "text-[#5F6775]"} 
    hover:transform hover:scale-110`} 
  onClick={() => handleButtonClick(index)} 
>
  {option.label}
</button>

      
          ))}
        </div>
      </div>
      <Image
        className="hidden md:block md:w-[340px] lg:w-[450px]"
        src={Coctails}
        alt="Coctails"
      />
      <Select
        className="md:hidden mt-[20px]"
        data={heroData}
        dropdownPosition="bottom"
        defaultValue="A"
        classNames={{
          root: "w-[93px] rounded-[6px] border border-[#fd5103] hover:bg-[#fd5103] transition-all duration-300 ease-in-out focus-within:border-[#fd5103] focus-within:ring-0",
          item: "flex items-center justify-center hover:bg-[#fd5103] hover:text-white transition-all duration-300 ease-in-out focus:bg-[#fd5103] focus:text-white focus:bg-none",
          dropdown: "bg-white",
          input:
            "text-center font-bold text-[#fd5103] text-[18px] border border-[#fd5103] focus:outline-none focus:border-[#fd5103] focus:ring-[#fd5103] focus:ring-2",
        }}
        styles={{
          item: {
            "&[data-selected]": {
              backgroundColor: "#fd5103",
              color: "white",
            },
            "&:hover": {
              "&[data-selected]": {
                backgroundColor: "#fd5103",
                color: "white",
              },
            },
          },
          input: {
            "&:focus": {
              backgroundColor: "#fd5103",
              color: "white",
            },
          },
        }}
      />
    </section>
  );
};

export default HeroSection;
