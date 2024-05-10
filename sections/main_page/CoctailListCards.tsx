"use client";
import Image from "next/image";
import s from "./CoctailListCards.module.scss";
import MainTitleComponent from "../../components/MainTitleComponent";
import CardCoctails from "@/components/CardCoctails";
import data, { CardData } from "../../assets/data";
import { useState, useEffect } from "react";

const CoctailListCards = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className={s.container}>
      <MainTitleComponent title="Coctails" />

      <div className={s.card__container}>
        {data.map((card: CardData) => (
          <CardCoctails
            key={card.id}
            cardData={card}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </section>
  );
};

export default CoctailListCards;
