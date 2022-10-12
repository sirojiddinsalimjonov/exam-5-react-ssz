import "./Hero.scss";
import Strl from "./../../../../Assets/Images/str-left.svg";
import Strr from "./../../../../Assets/Images/str-rayt.svg";
import Samalyot from "./../../../../Assets/Images/samalyot.svg";
import Uy from "./../../../../Assets/Images/uy.svg";
import Kampyuter from "./../../../../Assets/Images/kampyuter.svg";
import Popka from "./../../../../Assets/Images/popka.svg";
import Padarka from "./../../../../Assets/Images/padarka.svg";
import Tog from "./../../../../Assets/Images/tog.svg";
import Remont from "./../../../../Assets/Images/remont.svg";
import Ot from "./../../../../Assets/Images/ot.svg";
import Odam from "./../../../../Assets/Images/odam.svg";

function Hero() {
  return (
    <>
      <section className="hero">
        <img className="svg1q" src={Strl} alt="" />
        <div className="containers">
          <div className="hero__content">
            <div className="content__hero">
              <img className="svg1" src={Samalyot} alt="" />
              <p className="hero__text">Автомобили</p>
            </div>
            <div className="content__hero  ">
              <img className="svg1 uy" src={Uy} alt="" />

              <p className="hero__text">Недвижимость</p>
            </div>
            <div className="content__hero">
              <img className="svg1 not" src={Kampyuter} alt="" />

              <p className="hero__text"> Электроника</p>
            </div>
            <div className="content__hero">
              <img className="svg1 pops" src={Popka} alt="" />

              <p className="hero__text"> Работа</p>
            </div>
            <div className="content__hero">
              <img className="svg1 pad" src={Padarka} alt="" />

              <p className="hero__text"> Личные вещи</p>
            </div>
            <div className="content__hero">
              <img className="svg1 tog" src={Tog} alt="" />

              <p className="hero__text"> Дом и Сад</p>
            </div>
            <div className="content__hero">
              <img className="svg1 str" src={Remont} alt="" />

              <p className="hero__text"> Стройка и ремонт</p>
            </div>
            <div className="content__hero">
              <img className="svg1 hob" src={Ot} alt="" />

              <p className="hero__text"> Хобби и Спорт</p>
            </div>
            <div className="content__hero">
              <img className="svg1 boy" src={Odam} alt="" />

              <p className="hero__text"> Бизнес и услуги</p>
            </div>
          </div>
        </div>
        <img className="strr" src={Strr} alt="" />
      </section>
    </>
  );
}

export default Hero;
