import Image from "next/image";
import classNames from "classnames";
import s from "./FooterComponent.module.scss";
import Twitter from "./../images/footer/twitter.svg";
import Facebook from "./../images/footer/facebook.svg";
import LinkedIn from "./../images/footer/linkedin.svg";
import Instagram from "./../images/footer/instagram.svg";
import LogoFooter from "./../images/footer/LogoFooter.svg";

const FooterComponent = () => {
  return (
    <footer className={s.footer}>
      <div className={classNames(s.container, s.footer__container)}>
        <div className={s.footer__adress__container}>
          <a href="#">
            <Image className={s.footer__logo} src={LogoFooter} alt="Logo" />
          </a>
          <ul>
            <li>
              <a
                className={s.footer__adress}
                href="https://www.google.com/maps/place/Shepherd's+Pub+Zwickau/@50.7180707,12.3743547,12z/data=!4m10!1m2!2m1!1scocktail!3m6!1s0x47a72c89112b837b:0x3ab75332fbcd1572!8m2!3d50.7180707!4d12.4567522!15sCghjb2NrdGFpbFoKIghjb2NrdGFpbJIBA2JhcuABAA!16s%2Fg%2F1pzx_kcbt?entry=ttu"
                target="_blank"
              >
                08060 Zwickau Marienthaler Str. 98,
              </a>
            </li>
            <li>
              <a
                className={s.footer__contacts}
                href="mailto: info@coctails.com"
              >
                info@coctails.com
              </a>
            </li>
            <li>
              <a className={s.footer__contacts} href="tel:+380961111111">
                +38 096 111 11 11
              </a>
            </li>
          </ul>
        </div>

        <div className={s.footer__list__network}>
          <h2 className={s.footer__text}>Приєднуйтесь</h2>
          <div className={s.footer__network}>
            <a href="" className={s.footer__img}>
              <Image
                className={s.footer__img__network}
                src={Instagram}
                alt="Instagram"
              />
            </a>
            <a href="" className={s.footer__img}>
              <Image
                className={s.footer__img__network}
                src={Twitter}
                alt="Twitter"
              />
            </a>
            <a href="" className={s.footer__img}>
              <Image
                className={s.footer__img__network}
                src={Facebook}
                alt="Facrbook"
              />
            </a>
            <a href="" className={s.footer__img}>
              <Image
                className={s.footer__img__network}
                src={LinkedIn}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        <div className={s.footer__email}>
          <h2 className={s.footer__text}>Підпишись на розсилку</h2>
          <div className={s.footer__form}>
            <input
              className={s.footer__form__input}
              type="email"
              name="em"
              id="email"
              required
              placeholder="example@gmail.com"
              autoComplete="off"
              pattern=".*[@]gmail[.]com$"
            />
            <button className={s.footer__form__btn}>Підписатись</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
