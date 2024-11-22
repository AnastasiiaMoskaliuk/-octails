"use client";
import React, { useState } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  tag?: "a" | "button";
  type?: "submit" | "button" | "reset";
  typeButton: "MainButton" | "WishButton" | "FollowButton";
}

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  className,
  disabled,
  onClick,
  href,
  target,
  tag = "button",
  type = "submit",
  typeButton,
}) => {
  const [isActive, setIsActive] = useState(false);

  const Tag = tag;

  const bgColor1 = "bg-[#FD5103]";
  const bgColor2 = "bg-transparent";
  const bgColor3 = "bg-[#fd0303]";
  const textColor1 = "text-[#fe7031]";
  const textColor2 = "text-[#ffffff]";
  const opacity = "disabled:opacity-50";
  const hoverBgColor1 = "hover:bg-[#FD5103]";
  const hoverBgColor2 = "hover:bg-[#c81010]";
  const activeBgColor1 = "active:bg-[#FD5103]";
  const activeBgColor2 = "active:bg-[#c81010]";
  const animation = "transition duration-300 ease-in-out";
  const textSize = "text-[12px] md:text-[14px] lg:text-[16px]";
  const borderColor = "border solid border-1 border-[#fe7031]";
  const padding =
    "px-[24px] py-[9px] md:px-[32px] md:py-[11px] lg:px-[40px] lg:py-[14px]";
const padding2 = "py-[11px] px-[34px]"
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const buttonContent = () => {
     if (typeButton === "MainButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} ${bgColor1} ${animation} ${padding} ${textSize} ${textColor2} flex flex-row items-center justify-center rounded font-bold ${activeBgColor2} ${hoverBgColor2} ${opacity}`}
        >
          {text}
        </Tag>
      );
    } else if (typeButton === "FollowButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} ${bgColor3} ${animation} ${padding2} ${textSize} ${textColor2}  h-[52px] flex flex-row items-center justify-center rounded font-bold ${activeBgColor2} ${hoverBgColor2} ${opacity}`}
        >
          {text}
        </Tag>
      );
    } else {
      return null;
    }
  };

  return <>{buttonContent()}</>;
};

export default ButtonComponent;
