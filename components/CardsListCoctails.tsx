import Image from "next/image";
import { CardData } from "../assets/data";
import s from "./CardsListCoctails.module.scss";

interface CardProps {
  cardData: CardData;
  onButtonClick: () => void;
}

const CardsListCoctails: React.FC<CardProps> = ({
  cardData,
  onButtonClick,
}) => {
  const { imageSrc, text } = cardData;

  return (
    <div className={s.cards}>
      <Image className={s.cards__img} src={imageSrc.url} alt={imageSrc.alt} />
      <div className={s.cards__context}>
      <h3 className={s.cards__title}>{text}</h3>
      <div className={s.cards__buttons}>
        <button className={s.cards__buttons__more}>Learn more</button>
        <button className={s.cards__buttons__add}>Add to</button>
      </div>
      </div>
    </div>
  );
};

export default CardsListCoctails;
