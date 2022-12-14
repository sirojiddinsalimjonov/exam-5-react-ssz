import HeaderButton from "../../HeaderBuuton/HeaderButton";
import Hero from "../Home/Hero/Hero";
import "./Magazin.scss";
import Qalam from "./../../../Assets/Images/qalam.svg";
import { Link } from "react-router-dom";
import {useRef} from "react"
function Magazin(){
  return (
    <section className="magazinsssssssss">
      <HeaderButton />
      <div className="container">
        <div className="magazin__text">
          <h2 className="magazin__text1">Добавить обьявления бесплатно</h2>
          <h2 className="magazin__text2">
            Для добавления вашего обьявлении вы должны выбрать категорию
          </h2>
        </div>
      </div>
      <Hero />
      <div className="container">
        <div className="vibrali">
          <h2 className="vibrali__text">
            Вы выбрали:{" "}
            <mark className="vibrali__mark">
              Недвижимость » Дома » Аренда долгосрочная
            </mark>
          </h2>
          <button className="vibrali__button">
            <img className="qalem" src={Qalam} alt="" />
            <p className="qalem__teks">Изменить</p>
          </button>
        </div>
        <div className="magazin__container">
          <div className="magazin__chenas">
            <span className="input__border">
              <p className="magache">Цена</p>
              <input  className="magazin" type="number" />
            </span>
            <select  className="selekt">
              <option>Сум</option>
              <option>Dollor</option>
              <option>Yevro</option>
            </select>
            <span className="select__span-check">
              <input  type="checkbox" />
              <p className="checkbox__text mls">Договорная</p>
            </span>
          </div>
          <div className="">
            <p className="magache">Количество комнат*</p>
            <input className="magazin " type="number" />
            <input className="magazin ml" type="number" />
            <input className="magazin ml" type="number" />
          </div>
          <div className="rospolojeniya">
            <div className="rospolojeniya__content">
              <p className="magache">Расположение*</p>

              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">В городе</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">В пригороде</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">В сельской местности</p>
              </span>
            </div>
            <div className="rospolojeniya__content ml1 mt1">
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Вдоль трассы</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Возле водоема, реки</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">В предгорьях</p>
              </span>
            </div>
            <div className="rospolojeniya__content ml1 mb1">
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">В дачном массиве</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">На закрытой территории</p>
              </span>
            </div>
          </div>
          <div className="etaj">
            <div className="">
              <p className="magache">Количество комнат*</p>
              <input className="magazin " type="number" />
            </div>
            <div className="ml">
              <p className="magache">Количество комнат*</p>
              <input className="magazin " type="text" />
            </div>
            <div className="ml">
              <p className="magache">Количество комнат*</p>
              <input className="magazin " type="number" />
            </div>
          </div>
          <div className="rospolojeniya">
            <div className="rospolojeniya__content">
              <p className="magache">Состояние дома</p>

              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Авторский проект</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Средний ремонт</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Евроремонт</p>
              </span>
            </div>
            <div className="rospolojeniya__content ml1 mt1">
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Требует ремонта</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Предчистовая отделка реки</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Не достроен</p>
              </span>
            </div>
            <div className="rospolojeniya__content ml1 mb1">
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Черновая отделка</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Под снос</p>
              </span>
            </div>
          </div>
          <div className="uzb__span">
            <div className="spansss">
              <p className="domasos">Состояние дома</p>

              <select className="selekt selekt__butos">
                <option>Коттедж</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div className="spansss">
              <p className="domasos sosse">Состояние дома</p>
              <select className="selekt selekt__butos1">
                <option>Есть возможность подключения</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className="rospolojeniya">
            <div className="rospolojeniya__content">
              <p className="magache"> Отопление</p>

              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text"> Центральное</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text"> На газе</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">На твердом топливе</p>
              </span>
            </div>
            <div className="rospolojeniya__content ml1 mt1">
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text"> На жидком топлив </p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Электрическое</p>
              </span>
              <span className="select__span-check">
                <input type="checkbox" />
                <p className="checkbox__text">Смешанное</p>
              </span>
            </div>
            <div className="rospolojeniya__content ml1 mb1">
              <span className="select__span-check mt3">
                <input type="checkbox" />
                <p className="checkbox__text">Без отопления</p>
              </span>
            </div>
          </div>
          <p className="magache mt4"> Электричество</p>
          <p className="yest__area">Есть возможность подключения</p>
          <input className="magazin wodth" type="text" />
          <p className="textarea">9000 знаков осталос</p>

          <div className="file__input">
          <span className="file__logot">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot mt5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5 mt5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5 mt5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5 mt5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
         <span className="file__logot ml5 mt5">
               <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M38.64 7.72684H32.6725L29.8734 0.702454H12.1266L9.3275 7.72684H8.40175V4.21465H4.20087V7.72684H3.36C1.50762 7.72684 0 9.23972 0 11.0986V31.7257C0 33.5986 1.51725 35.1211 3.38363 35.1211H38.6164C40.4827 35.1211 42 33.5986 42 31.7257V11.0986C42 9.23972 40.4924 7.72684 38.64 7.72684ZM5.59766 7.72684H6.99941V5.62128H5.59766V7.72684ZM40.5988 31.7257C40.5988 32.8267 39.7107 33.7188 38.617 33.7188H3.38422C2.29047 33.7188 1.40234 32.8232 1.40234 31.7257V11.0985C1.40234 10.0141 2.27997 9.13346 3.36059 9.13346H10.2748L13.074 2.10907H28.9272L31.7263 9.13346H38.6406C39.7212 9.13346 40.5988 10.0141 40.5988 11.0985V31.7257Z"
                  fill="black"
                />
                <path
                  d="M21.0006 7.0235C14.0522 7.0235 8.40234 12.6966 8.40234 19.67C8.40234 26.6391 14.0522 32.3122 21.0006 32.3122C27.949 32.3122 33.5988 26.6391 33.5988 19.67C33.5988 12.6966 27.949 7.0235 21.0006 7.0235ZM20.9997 30.9055C14.8231 30.9055 9.79883 25.8638 9.79883 19.67C9.79883 13.4719 14.8231 8.43011 20.9997 8.43011C27.1763 8.43011 32.2006 13.4719 32.2006 19.67C32.2006 25.8638 27.1763 30.9055 20.9997 30.9055Z"
                  fill="black"
                />
                <path
                  d="M20.9994 11.239C16.368 11.239 12.5977 15.019 12.5977 19.67C12.5977 24.3176 16.368 28.0967 20.9994 28.0967C25.6308 28.0967 29.4012 24.3176 29.4012 19.67C29.4012 15.019 25.6308 11.239 20.9994 11.239ZM21 26.6944C17.1412 26.6944 14 23.5422 14 19.67C14 15.7934 17.1412 12.6456 21 12.6456C24.8588 12.6456 28 15.7934 28 19.67C28 23.5422 24.8588 26.6944 21 26.6944Z"
                  fill="black"
                />
                <path
                  d="M36.4012 10.5357C34.8559 10.5357 33.5977 11.7983 33.5977 13.3446C33.5977 14.8952 34.8559 16.1579 36.4012 16.1579C37.942 16.1579 39.2003 14.8952 39.2003 13.3446C39.2003 11.7983 37.942 10.5357 36.4012 10.5357ZM36.4018 14.7512C35.6291 14.7512 35 14.1199 35 13.3446C35 12.5736 35.6291 11.9423 36.4018 11.9423C37.17 11.9423 37.7991 12.5736 37.7991 13.3446C37.7991 14.1199 37.17 14.7512 36.4018 14.7512Z"
                  fill="black"
                />
              </g>
            </svg>
         </span>
          </div>

          <div className="uzb__span">
            <div className="spansss">
              <p className="domasos">Состояние дома</p>

              <select className="selekt selekt__butos">
                <option>Ташкент</option>
                <option>Samarqand</option>
                <option>Buxara</option>
              </select>
            </div>

            <div className="spansss">
              <p className="domasos sosse">Состояние дома</p>
              <select className="selekt selekt__butos1">
                <option>Мирза Улугбекский район</option>
                <option>Almazarskiy район</option>
                <option>Keles район</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <iframe
            className="iframes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="653"
            height="376"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
          <h3 className="tel__magazintext">Телефонный номер</h3>
          <input type="number" className="tel__magazin" />
          <h3 className="tel__magazintext emss">Email-адрес</h3>
          <input type="email" className="tel__magazin" />
          <h3 className="tel__magazintext emss">Контактный лицо</h3>
          <input type="text" className="tel__magazin" />

          <div className="btss__prospotr">
            <button className="mg__btn">Добавить обьявления бесплатно</button>
            <Link className="редпросмотр">Предпросмотр</Link>
          </div>
        </div>
      </div>
    </section>
  );
  }

export default Magazin;
