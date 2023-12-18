"use client";
import Image from "next/image";
import s from "./CoctailCards.module.scss";
import MainTitleComponent from "./../../../components/MainTitleComponent";
import CardsListCoctails from "@/components/CardsListCoctails";
import data, { CardData } from "./../../../assets/data";
import { useState, useEffect } from "react";

const CoctailCards = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className={s.container}>
      <MainTitleComponent title="Coctails" />

      <div className={s.card__container}>
        {data.map((card: CardData) => (
          <CardsListCoctails
            key={card.id}
            cardData={card}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </section>
  );
};

export default CoctailCards;
