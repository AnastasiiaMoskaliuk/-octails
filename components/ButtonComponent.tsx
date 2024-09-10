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

  const bgColor1 = "bg-[#fe7031]";
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
    if (typeButton === "WishButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          href={href}
          onClick={handleButtonClick}
          className={`${className} ${borderColor} ${animation} ${padding} ${textSize} ${bgColor2} ${textColor1} flex flex-row items-center justify-center rounded font-bold ${opacity}`}
        >
          {text}
          {isActive ? (
            <svg
              className={`${animation} fill-[#fe7031] ml-[8px] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9994 4.10638C8.47019 0.752766 3.26381 2.13881 1.35872 5.87633C0.313178 7.92755 0.298896 10.5787 1.84178 13.3885C3.37099 16.1735 6.41989 19.113 11.5156 21.9295L11.9993 22.1969L12.4831 21.9295C17.579 19.113 20.6281 16.1735 22.1574 13.3886C23.7004 10.5787 23.6861 7.92756 22.6406 5.87633C20.7355 2.13874 15.5289 0.752817 11.9994 4.10638Z"
              />
            </svg>
          ) : (
            <svg
              className={`${animation} fill-[#fe7031] ml-[8px] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9994 19.9077C7.4003 17.2883 4.83525 14.6848 3.59488 12.4259C2.32537 10.1139 2.43614 8.16664 3.14059 6.78459C4.58857 3.94386 8.70616 3.03548 11.2149 6.20846L11.9993 7.20051L12.7837 6.20851C15.2929 3.0354 19.4108 3.94392 20.8587 6.78459C21.5632 8.16662 21.6739 10.1139 20.4043 12.4259C19.1638 14.6848 16.5986 17.2883 11.9994 19.9077ZM11.9994 4.10638C8.47019 0.752766 3.26381 2.13881 1.35872 5.87633C0.313178 7.92755 0.298896 10.5787 1.84178 13.3885C3.37099 16.1735 6.41989 19.113 11.5156 21.9295L11.9993 22.1969L12.4831 21.9295C17.579 19.113 20.6281 16.1735 22.1574 13.3886C23.7004 10.5787 23.6861 7.92756 22.6406 5.87633C20.7355 2.13874 15.5289 0.752817 11.9994 4.10638Z"
              />
            </svg>
          )}
        </Tag>
      );
    } else if (typeButton === "MainButton") {
      return (
        <Tag
          type={type}
          target={target}
          disabled={disabled}
          onClick={onClick}
          href={href}
          className={`${className} ${bgColor1} ${animation} ${padding} ${textSize} ${textColor2} flex flex-row items-center justify-center rounded font-bold ${activeBgColor1} ${hoverBgColor1} ${opacity}`}
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
