import s from "./MainTitleComponent.module.scss";
import React, {FC} from "react";
import classNames from "classnames";

interface MainTitleProps {
  title: string;
  className?: string;
}

const MainTitleComponent: FC<MainTitleProps> = ({ title, className }) => {
  return (
    <div className={`${className} `}>
      <h2 className="text-center text-[22px] font-semibold md:text-[32px] md:font-bold lg:text-[42px]">{title}</h2>
    </div>
  );
};

export default MainTitleComponent;
