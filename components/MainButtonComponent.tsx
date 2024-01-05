import s from "./MainButtonComponent.module.scss";
import React from "react";
import classNames from "classnames";

interface MainButtonProps {
  text: string;
  className?: string;
  padding?: string;
  width?:number;
  height?:number;
  borderRadius?: number;
  border?:string;

}

const MainButtonComponent: React.FC<MainButtonProps> = ({ text, className }) => {
    return (
      <div className={classNames(s.main, className)}>
        <button type="button" className={s.main__title}>{text}</button>
      </div>
    );
  };
  
  export default MainButtonComponent;