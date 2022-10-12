import "./Footer.scss";
import { Link } from "react-router-dom";
import LogoFooter from "./../../Assets/Images/logo-gren.svg";
import Apple from "./../../Assets/Images/apples.svg";
import Google from "./../../Assets/Images/google.svg";
import Strbtn from "./../../Assets/Images/strbtn.svg";
import Rytstr from "./../../Assets/Images/rytstr.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="wraper__footer">
          <div className="container">
            <div className="content__footer">
              <span className="footer__logo">
                <img src={LogoFooter} alt="" />
                <p className="logo__deck">
                  Продай, найди, купи все что пожелаешь…
                </p>
              </span>

              <h2 className="footer__center-text">
                Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
                обяления
              </h2>
              <div className="button__footer">
                <button className="btn__foot">
                  <img className="border" src={Apple} alt="" />
                  <div className="text__apple">
                    <p className="top__text">Aviable on the</p>
                    <p className="button__text">Apple Store</p>
                  </div>
                </button>
                <button className="btn__foot goog">
                  <img className="border" src={Google} alt="" />
                  <div className="text__apple ">
                    <p className="top__text">Android App on</p>
                    <p className="button__text">G00GLE PLAY</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__link">
          <div className="footer__link-back">
            <div className="container">
              <div className="container__link">
                <div className="content__link">
                  <div className="avtomobil">
                    <span className="span__left">
                      <svg
                        className="svg"
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"
                          fill="#FF5469"
                        />
                      </svg>

                      <h2 className="text__link">Автомобили</h2>
                    </span>

                    <Link className="list__link-text"> Легковые авто</Link>
                    <Link className="list__link-text"> Мото</Link>
                    <Link className="list__link-text">Автобусы</Link>
                    <Link className="list__link-text"> Грузовые авто</Link>
                    <Link className="list__link-text"> Сельхозтехника</Link>
                    <Link className="list__link-text">
                      Запчасти и Аксессуары
                    </Link>
                    <Link className="list__link-text">
                      Прицепы и Спецтехника
                    </Link>
                    <Link className="list__link-text">
                      Водный и Другой транспортa
                    </Link>
                  </div>
                  <div className="avtomobil">
                    <span className="span__left">
                      <svg
                        className="svg"
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"
                          fill="#7ED321"
                        />
                      </svg>

                      <h2 className="text__link">Дом и Сад</h2>
                    </span>
                    <Link className="list__link-text">
                      Товары для интерьера
                    </Link>
                    <Link className="list__link-text"> Товары для сада</Link>
                    <Link className="list__link-text">Растения</Link>
                    <Link className="list__link-text"> Продукты питания</Link>
                    <Link className="list__link-text">
                      Посуда и Кухонная утварь
                    </Link>
                    <Link className="list__link-text">
                      Хоз.инвентарь и Бытовая химия
                    </Link>
                    <Link className="list__link-text">
                      Канцтовары и Расходные
                    </Link>
                  </div>
                </div>

                <div className="content__link">
                  <div className="avtomobil">
                    <span className="span__left">
                      <span className="svg">
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"
                            fill="#F8E71C"
                          />
                        </svg>
                      </span>
                      <h2 className="text__link">Недвижимость</h2>
                    </span>
                    <Link className="list__link-text"> Легковые авто</Link>
                    <Link className="list__link-text"> Мото</Link>
                    <Link className="list__link-text">Автобусы</Link>
                    <Link className="list__link-text"> Грузовые авто</Link>
                    <Link className="list__link-text"> Сельхозтехника</Link>
                    <Link className="list__link-text">
                      Запчасти и Аксессуары
                    </Link>
                    <Link className="list__link-text">
                      Прицепы и Спецтехника
                    </Link>
                    <Link className="list__link-text">
                      Водный и Другой транспортa
                    </Link>
                    <Link className="list__link-text"> Сельхозтехника</Link>
                    <Link className="list__link-text">
                      Запчасти и Аксессуары
                    </Link>
                    <Link className="list__link-text">
                      Прицепы и Спецтехника
                    </Link>
                    <Link className="list__link-text">
                      Водный и Другой транспортa
                    </Link>
                  </div>
                  <div className="avtomobil">
                    <span className="span__left">
                      <span className="svg">
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"
                            fill="#BD10E0"
                          />
                        </svg>
                      </span>
                      <h2 className="text__link">Товары стройки и ремонта</h2>
                    </span>
                    <Link className="list__link-text">
                      Товары для интерьера
                    </Link>
                    <Link className="list__link-text"> Товары для сада</Link>
                    <Link className="list__link-text">Растения</Link>
                    <Link className="list__link-text"> Продукты питания</Link>
                  </div>
                </div>
                <div className="content__link">
                  <div className="avtomobil">
                    <span className="span__left">
                      <span className="svg">
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"
                            fill="#FF5469"
                          />
                        </svg>
                      </span>
                      <h2 className="text__link">Электроника </h2>
                    </span>
                    <Link className="list__link-text"> Легковые авто</Link>
                    <Link className="list__link-text"> Мото</Link>
                    <Link className="list__link-text">Автобусы</Link>
                    <Link className="list__link-text"> Грузовые авто</Link>
                    <Link className="list__link-text"> Сельхозтехника</Link>
                    <Link className="list__link-text">
                      Запчасти и Аксессуары
                    </Link>
                    <Link className="list__link-text">
                      Прицепы и Спецтехника
                    </Link>
                    <Link className="list__link-text">
                      Водный и Другой транспортa
                    </Link>
                    <Link className="list__link-text"> Грузовые авто</Link>
                    <Link className="list__link-text"> Сельхозтехника</Link>
                    <Link className="list__link-text">
                      Запчасти и Аксессуары
                    </Link>
                  </div>
                  <div className="avtomobil">
                    <span className="span__left">
                      <span className="svg">
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"
                            fill="#50E3C2"
                          />
                        </svg>
                      </span>
                      <h2 className="text__link">Хобби, Отдых и Спорт</h2>
                    </span>
                    <Link className="list__link-text">
                      Товары для интерьера
                    </Link>
                    <Link className="list__link-text"> Товары для сада</Link>
                    <Link className="list__link-text">Растения</Link>
                    <Link className="list__link-text"> Продукты питания</Link>
                    <Link className="list__link-text">
                      Посуда и Кухонная утварь
                    </Link>
                    <Link className="list__link-text">
                      Хоз.инвентарь и Бытовая химия
                    </Link>
                    <Link className="list__link-text">
                      Канцтовары и Расходные
                    </Link>
                  </div>

                  <div className="select__footer">
                    <h2 className="select__footer-text">Покозать еще</h2>
                    <img className="svg__pokaz" src={Strbtn} alt="" />
                  </div>
                </div>
                <div className="content__link">
                  <div className="avtomobil">
                    <span className="span__left">
                      <span className="svg">
                        <svg
                          width="6"
                          height="9"
                          viewBox="0 0 6 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.13576 0L0 1.05072L3.72847 4.5L0 7.94834L1.13576 9L6 4.5L1.13576 0Z"
                            fill="#4A90E2"
                          />
                        </svg>
                      </span>
                      <h2 className="text__link">Личные вещи</h2>
                    </span>
                    <Link className="list__link-text"> Легковые авто</Link>
                    <Link className="list__link-text"> Мото</Link>
                    <Link className="list__link-text">Автобусы</Link>
                    <Link className="list__link-text"> Грузовые авто</Link>
                    <Link className="list__link-text"> Сельхозтехника</Link>
                    <Link className="list__link-text">
                      Запчасти и Аксессуары
                    </Link>
                    <Link className="list__link-text">
                      Прицепы и Спецтехника
                    </Link>
                  </div>
                  <div className="avtomobil">
                    <span className="span__left">
                      <span className="svg">
                        <img src={Rytstr} alt="" />
                      </span>
                      <h2 className="text__link"> Бизнес и услуги</h2>
                    </span>
                    <Link className="list__link-text">
                      Товарrofka интерьера
                    </Link>
                    <Link className="list__link-text"> Товары для сада</Link>
                    <Link className="list__link-text">Растения</Link>
                    <Link className="list__link-text"> Продукты питания</Link>
                    <Link className="list__link-text">
                      Товары для интерьера
                    </Link>
                    <Link className="list__link-text"> Товары для сада</Link>
                    <Link className="list__link-text">Растения</Link>
                    <Link className="list__link-text"> Продукты питания</Link>
                    <Link className="list__link-text">
                      Посуда и Кухонная утварь
                    </Link>
                    <Link className="list__link-text">
                      Хоз.инвентарь и Бытовая химия
                    </Link>
                    <Link className="list__link-text">
                      Канцтовары и Расходные
                    </Link>
                    <Link className="list__link-text">
                      Товары для интерьера
                    </Link>
                    <Link className="list__link-text"> Товары для сада</Link>
                    <Link className="list__link-text">Растения</Link>
                    <Link className="list__link-text"> Продукты питания</Link>
                    <Link className="list__link-text">
                      Посуда и Кухонная утварь
                    </Link>
                    <Link className="list__link-text">
                      Хоз.инвентарь и Бытовая химия
                    </Link>
                    <Link className="list__link-text">
                      Канцтовары и Расходные
                    </Link>
                    <Link className="list__link-text">
                      Товары для интерьера
                    </Link>
                    <Link className="list__link-text"> Товары для сада</Link>
                    <Link className="list__link-text">Растения</Link>
                    <Link className="list__link-text"> Продукты питания</Link>
                    <Link className="list__link-text">
                      Посуда и Кухонная утварь
                    </Link>
                    <Link className="list__link-text">
                      Хоз.инвентарь и Бытовая химия
                    </Link>
                    <Link className="list__link-text">
                      Канцтовары и Расходные
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="link__footer-nav container">
              <Link className="navlink__footer"> Подать объявление </Link>
              <Link className="navlink__footer">Объявления </Link>
              <Link className="navlink__footer"> Магазины </Link>
              <Link className="navlink__footer">Помощь </Link>
              <Link className="navlink__footer"> Безопасность </Link>
              <Link className="navlink__footer"> Реклама на сайте </Link>
              <Link className="navlink__footer"> О компании</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
