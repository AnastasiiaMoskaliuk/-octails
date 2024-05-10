import Image from "next/image";
import { CardData } from "../assets/data";
import s from "./CardCoctails.module.scss";
import Link from "next/link";

interface CardProps {
  cardData: CardData;
  onButtonClick: () => void;
}

const CardCoctails: React.FC<CardProps> = ({
  cardData,
  onButtonClick,
}) => {
  const { imageSrc, text } = cardData;

  return (
    <Link href={"./product"} className={s.cards}>
      <Image className={s.cards__img} src={imageSrc.url} alt={imageSrc.alt} />
      <div className={s.cards__context}>
      <h3 className={s.cards__title}>{text}</h3>
      <div className={s.cards__buttons}>
        <button type="button" className={s.cards__buttons__more}>Learn more</button>
        <button type="button" className={s.cards__buttons__add}>Add to</button>
      </div>
      </div>
    </Link>
  );
};

export default CardCoctails;
