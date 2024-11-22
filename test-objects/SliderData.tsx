import { StaticImageData } from "next/image";
import A1 from "./../images/coctailCards/A1.png";
import AJ from "./../images/coctailCards/AJ.png";
import ABC from "./../images/coctailCards/ABC.png";
import Ace from "./../images/coctailCards/Ace.png";
import ATT from "./../images/coctailCards/ATT.png";
import ACID from "./../images/coctailCards/ACID.png";
import Affair from "./../images/coctailCards/Affair.png";
import Apello from "./../images/coctailCards/Apello.png";
import AmarettoSunrise from "./../images/coctailCards/AmarettoSunrise.png";

export interface CardData {
  id: number;
  imageSrc: {
    url: StaticImageData;
    alt: string;
  };
  text: string;
}

const data: CardData[] = [
  {
    id: 1,
    imageSrc: {
      url: A1,
      alt: "Negroni Image",
    },
    text: "Negroni",
  },
  {
    id: 2,
    imageSrc: {
      url: ABC,
      alt: "Negroni Image",
    },
    text: "Margarita",
  },
  {
    id: 3,
    imageSrc: {
      url: AJ,
      alt: "Negroni Image",
    },
    text: " Bellini",
  },
  {
    id: 4,
    imageSrc: {
      url: Ace,
      alt: "Negroni Image",
    },
    text: "Piña Colada",
  },
  {
    id: 5,
    imageSrc: {
      url: ACID,
      alt: "Negroni Image",
    },
    text: "Mimosa",
  },
  {
    id: 6,
    imageSrc: {
      url: Affair,
      alt: "Negroni Image",
    },
    text: "White Lady",
  },
  {
    id: 7,
    imageSrc: {
      url: AmarettoSunrise,
      alt: "Negroni Image",
    },
    text: "Cosmopolitan",
  },
  {
    id: 8,
    imageSrc: {
      url: Apello,
      alt: "Negroni Image",
    },
    text: "Aviation",
  },
  {
    id: 9,
    imageSrc: {
      url: ATT,
      alt: "Negroni Image",
    },
    text: "Manhattan",
  },
];

export default data;
