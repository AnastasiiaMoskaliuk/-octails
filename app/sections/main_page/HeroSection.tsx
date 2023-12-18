"use client";
import Image from "next/image";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import Coctails from "./../../../images/hero/Coctails.png";
import Select from "react-select";

const HeroSection = () => {
  const options = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "F", label: "F" },
    { value: "G", label: "G" },
    { value: "H", label: "H" },
    { value: "I", label: "I" },
    { value: "J", label: "J" },
    { value: "K", label: "K" },
    { value: "L", label: "L" },
    { value: "M", label: "M" },
    { value: "N", label: "N" },
    { value: "O", label: "O" },
    { value: "P", label: "P" },
    { value: "Q", label: "Q" },
    { value: "R", label: "R" },
    { value: "S", label: "S" },
    { value: "T", label: "T" },
    { value: "U", label: "U" },
    { value: "V", label: "V" },
    { value: "W", label: "W" },
    { value: "X", label: "X" },
    { value: "Y", label: "Y" },
    { value: "Z", label: "Z" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "0", label: "0" },
  ];
  const defaultOption = options[0];

  return (
    <section className={classNames(s.container, s.hero)}>
      <div className={s.hero__content}>
        <div className={s.hero__context}>
          <div className={s.hero__info}>
            <h1 className={s.hero__title}>
              A party without cocktails is not like a party
            </h1>
            <Image
              className={s.hero__img__mobile}
              src={Coctails}
              alt="Coctails"
            />
          </div>
          <div className={s.hero__change}>
            <p className={s.hero__paragraph}>
              Search your favorite cocktail by ABC
            </p>
            <div className={s.hero__change__link}>
              {options.map((option, index) => (
                <button className={s.hero__change__cards} key={index}>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Image className={s.hero__img} src={Coctails} alt="Coctails" />
      </div>
      <div className={s.mobile__search}>
        <div className={s.mobile__dropdown}>
          <Select
            classNamePrefix="custom-select"
            options={options}
            menuPlacement="auto"
            menuPosition="fixed"
            maxMenuHeight={90}
            defaultValue={defaultOption}
            styles={{
              control: (provided, state) => ({
                ...provided,
                border: "1px solid #fd5103",
                borderRadius: "4px",
                width: "93px",
                fontSize: "16px",
                color: state.isDisabled ? "#ffffff" : "#fd5103",
                backgroundColor: state.isDisabled ? "#fd5103" : "transparent",
              }),
              option: (provided, state) => ({
                ...provided,
                fontSize: "10px",
                color: state.isSelected ? "#ffffff" : "#000000",
                backgroundColor: state.isSelected ? "#fd5103" : "transparent",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#fd5103",
                fontWeight: "700",
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
              dropdownIndicator: (provided, state) => ({
                ...provided,
                color: "#fd5103",
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
