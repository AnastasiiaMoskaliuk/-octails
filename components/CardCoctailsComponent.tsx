import Image from "next/image";
import React, { FC } from "react";

import { CardData } from "@/test-objects/SliderData";
import ButtonComponent from "@/components/ButtonComponent";

interface CardCoctailsProps {
  cardData: CardData;
}

const CardCoctails: FC<CardCoctailsProps> = ({ cardData }) => {
  const { id, imageSrc, text } = cardData;

  return (
    <div className="flex flex-col items-center gap-12 w-[280px] rounded border border-[#fd5103] md:w-[335px] md:gap-5 lg:w-[395px]">
      <Image
        src={imageSrc.url}
        width={280}
        height={280}
        alt={imageSrc.alt}
        className="object-cover w-[280px] h-[280px] md:w-[335px] md:h-[394px] lg:w-[395px] lg:h-[395px]"
      />
      <div className="flex flex-col items-center gap-4 pb-6 md:gap-6 md:pb-5 lg:gap-7 lg:pb-7">
        <h3 className="text-[#202025] text-[26px] font-extrabold leading-[1.61538] md:text-[28px] lg:text-[32px]">
          {text}
        </h3>
        <ButtonComponent
          typeButton="MainButton"
          text="Learn more"
          tag="a"
        />
      </div>
    </div>
  );
};

export default CardCoctails;
