import HeaderButton from "../../HeaderBuuton/HeaderButton";
import "./profile.scss";
import { Link } from "react-router-dom";
import Document from "./../../../Assets/Images/document.jpg";
import { Outlet } from "react-router-dom";
import FooterTop from "../../footerTop/footerTop";

function Profile() {
  return (
    <>
      <section className="profile c">
        <div className="container ">
          <HeaderButton />
          <div className="profile__header">
            <h3 className="profile__name">Здравствуйте Зухриддин Темиров</h3>
            <span className="summa__span">
              <p className="profile__summa">Ваш счет: 2 3000 сум</p>
              <button className="profile__popinit">
                <p className="profile__plus">+</p>
                <p className="pop"> Пополнить</p>
              </button>
            </span>
          </div>
        </div>
      </section>

      <section className="links__profile">
        <div className="container">
          <div className="link__profile">
            <Link to={"/profile"} className="link__link">
              Объявления
            </Link>
            <Link className="link__link">Сообщения</Link>
            <Link className="link__link">Платежи и счёт</Link>
            <Link to={"nastroyka"} className="link__link">
              Настройки
            </Link>
            <Link className="link__link"> Мой бизнес</Link>
          </div>

    <Outlet />
          <div className="boqa">
            <div className="item__header">
              <p className="foto">Фото </p>
              <p className="nazvaniya">Название</p>
              <p className="chena">Цена</p>
              <p className="data">Дата</p>
              <p className="deystvi">Действие</p>
            </div>
          </div>
          <div className="bukmarks">
            <div className="container bokmark__div">
              <div className="bookmrk">
                <span className="document">
                  <img className="document__img" src={Document} alt="" />
                  <h2 className="ducument__text">
                    Срочно нужен программист yii2
                  </h2>
                </span>
                <div className="center__document">
                  <div className="chenaa__document">
                    <p className="chena1">2 000 000</p>
                    <p className="chena2"> 6 000 000 сум</p>
                  </div>
                  <div className="data__document">
                    <p className="rshotka"> # 345 002</p>
                    <p className="gradus"> С: 28 июнь</p>
                    <p className="iyul"> По: 28 июль</p>
                  </div>
                </div>
                <div className="document__button">
                  <button className="podnya__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#41D481" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>
                    <p className="podnya__text">Поднять</p>
                  </button>
                  <button className="reklama__document">
                    <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#304FFF" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>

                    <p className="podnya__text">Рекламировать</p>
                  </button>
                  <Link className="link__nuqta"></Link>
                </div>
              </div>
            </div>
            <div className="container statistka">
              <p className="statistka__text">Статистика</p>
              <p className="pti prasmotr">Просмотры: 195 </p>
              <p className="pti tel"> Тел.: 200 </p>
              <p className="pti izbarno"> В Избранном: 0</p>
            </div>
          </div>
          <div className="bukmarks">
            <div className="container bokmark__div">
              <div className="bookmrk">
                <span className="document">
                  <img className="document__img" src={Document} alt="" />
                  <h2 className="ducument__text">
                    Срочно нужен программист yii2
                  </h2>
                </span>
                <div className="center__document">
                  <div className="chenaa__document">
                    <p className="chena1">2 000 000</p>
                    <p className="chena2"> 6 000 000 сум</p>
                  </div>
                  <div className="data__document">
                    <p className="rshotka"> # 345 002</p>
                    <p className="gradus"> С: 28 июнь</p>
                    <p className="iyul"> По: 28 июль</p>
                  </div>
                </div>
                <div className="document__button">
                  <button className="podnya__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#41D481" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>

                    <p className="podnya__text">Поднять</p>
                  </button>
                  <button className="reklama__document">
                 
                    <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#304FFF" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>

                    <p className="podnya__text">Рекламировать</p>
                    
                  </button>
                  <Link className="link__nuqta"></Link>
                </div>
              </div>
            </div>
            <div className="container statistka">
              <p className="statistka__text">Статистика</p>
              <p className="pti prasmotr">Просмотры: 195 </p>
              <p className="pti tel"> Тел.: 200 </p>
              <p className="pti izbarno"> В Избранном: 0</p>
            </div>
          </div>
          <div className="bukmarks">
            <div className="container bokmark__div">
              <div className="bookmrk">
                <span className="document">
                  <img className="document__img" src={Document} alt="" />
                  <h2 className="ducument__text">
                    Срочно нужен программист yii2
                  </h2>
                </span>
                <div className="center__document">
                  <div className="chenaa__document">
                    <p className="chena1">2 000 000</p>
                    <p className="chena2"> 6 000 000 сум</p>
                  </div>
                  <div className="data__document">
                    <p className="rshotka"> # 345 002</p>
                    <p className="gradus"> С: 28 июнь</p>
                    <p className="iyul"> По: 28 июль</p>
                  </div>
                </div>
                <div className="document__button">
                  <button className="podnya__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#41D481" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>
                    <p className="podnya__text">Поднять</p>
                  </button>
                  <button className="reklama__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#304FFF" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>

                    <p className="podnya__text">Рекламировать</p>
                  </button>
                  <Link className="link__nuqta"></Link>
                </div>
              </div>
            </div>
            <div className="container statistka">
              <p className="statistka__text">Статистика</p>
              <p className="pti prasmotr">Просмотры: 195 </p>
              <p className="pti tel"> Тел.: 200 </p>
              <p className="pti izbarno"> В Избранном: 0</p>
            </div>
          </div>
          <div className="bukmarks">
            <div className="container bokmark__div">
              <div className="bookmrk">
                <span className="document">
                  <img className="document__img" src={Document} alt="" />
                  <h2 className="ducument__text">
                    Срочно нужен программист yii2
                  </h2>
                </span>
                <div className="center__document">
                  <div className="chenaa__document">
                    <p className="chena1">2 000 000</p>
                    <p className="chena2"> 6 000 000 сум</p>
                  </div>
                  <div className="data__document">
                    <p className="rshotka"> # 345 002</p>
                    <p className="gradus"> С: 28 июнь</p>
                    <p className="iyul"> По: 28 июль</p>
                  </div>
                </div>
                <div className="document__button">
                  <button className="podnya__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#41D481" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>
                    <p className="podnya__text">Поднять</p>
                  </button>
                  <button className="reklama__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#304FFF" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>

                    <p className="podnya__text">Рекламировать</p>
                  </button>
                  <Link className="link__nuqta"></Link>
                </div>
              </div>
            </div>
            <div className="container statistka">
              <p className="statistka__text">Статистика</p>
              <p className="pti prasmotr">Просмотры: 195 </p>
              <p className="pti tel"> Тел.: 200 </p>
              <p className="pti izbarno"> В Избранном: 0</p>
            </div>
          </div>
          <div className="bukmarks">
            <div className="container bokmark__div">
              <div className="bookmrk">
                <span className="document">
                  <img className="document__img" src={Document} alt="" />
                  <h2 className="ducument__text">
                    Срочно нужен программист yii2
                  </h2>
                </span>
                <div className="center__document">
                  <div className="chenaa__document">
                    <p className="chena1">2 000 000</p>
                    <p className="chena2"> 6 000 000 сум</p>
                  </div>
                  <div className="data__document">
                    <p className="rshotka"> # 345 002</p>
                    <p className="gradus"> С: 28 июнь</p>
                    <p className="iyul"> По: 28 июль</p>
                  </div>
                </div>
                <div className="document__button">
                  <button className="podnya__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#41D481" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>
                    <p className="podnya__text">Поднять</p>
                  </button>
                  <button className="reklama__document">
                  <svg
                    className="podnya__svg 
                      "
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#304FFF" />
                      <path
                        d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                        fill="white"
                        
                      />
                      <mask
                        id="mask0_1804_14951"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="9"
                        width="16"
                        height="27"
                      >
                        <path
                          d="M17.2746 9.80913L10.7998 16.4986C10.4001 16.9121 10.4001 17.5749 10.7998 17.988C11.2 18.4014 11.8415 18.4014 12.2414 17.988L16.9806 13.0916V34.4474C16.9806 35.0322 17.4331 35.5 17.9991 35.5C18.5651 35.5 19.0178 35.0322 19.0178 34.4474V13.0916L23.7572 17.988C24.1569 18.4014 24.7985 18.4014 25.1982 17.988C25.3946 17.7855 25.5 17.5125 25.5 17.2471C25.5 16.9821 25.402 16.7092 25.1982 16.5066L18.7234 9.81674C18.3163 9.3957 17.667 9.3957 17.2746 9.80913Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1804_14951)"></g>
                    </svg>

                    <p className="podnya__text">Рекламировать</p>
                  </button>
                  <Link className="link__nuqta"></Link>
                </div>
              </div>
            </div>
            <div className="container statistka">
              <p className="statistka__text">Статистика</p>
              <p className="pti prasmotr">Просмотры: 195 </p>
              <p className="pti tel"> Тел.: 200 </p>
              <p className="pti izbarno"> В Избранном: 0</p>
            </div>
          </div>
        </div>
      </section>
      <FooterTop/>
    </>
  );
}

export default Profile;
