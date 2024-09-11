"use client";
import Image from "next/image";
import { Select } from "@mantine/core";

import heroData from "@/test-objects/HeroData";

import Coctails from "./../../images/hero/Coctails.png";
import { root } from "postcss";

const HeroSection = () => {
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
              className=" md:text-[#5F6775] md:text-[18px] text-start md:font-bold lg:text-[24px] hover:transform hover:scale-110"
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
       className="md:hidden mt-[20px] "
        data={heroData}
        defaultValue="A"
        styles={(theme) => ({
          root: {
            width: '93px',
            borderRadius: '6px',
            border: '1px solid #fd5103',
            '&:hover': { backgroundColor: '#fd5103' },
            transition: 'background-color 0.3s ease',
          },
          item: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#fd5103',
              color: 'white',
              transition: 'background-color 0.3s ease',
            },
            '&[data-selected]': {
              backgroundColor: '#fd5103',
              color: 'white',
            },
          },
          dropdown: {
            backgroundColor: 'white',
          },
          input: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#fd5103',
            fontSize: '18px',
            border: '1px solid #fd5103',
            '&:focus': {
              borderColor: '#fd5103',
            },
            '&[data-selected]': {
              backgroundColor: '#fd5103',
              color: 'white',
            },
          },
        })}
      />
    </section>
  );
};

export default HeroSection;
