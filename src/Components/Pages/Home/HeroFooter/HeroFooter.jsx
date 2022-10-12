import "./HeroFooter.scss";
import { Link } from "react-router-dom";
import Komp from './../../../../Assets/Images/card.png'
import Popka from './../../../../Assets/Images/popka.png'
import Kreslo from './../../../../Assets/Images/kreslo.png'
    import Rytstr from './../../../../Assets/Images/rytstr.svg'

function HeroFooter() {
  return (
    <>
      <section className="hero__slider">
        <div className="container">
          <div className="content__flex">
          <div className="wraper__hf">
            <div className="card__hero">
              <p className="card__top">Техника Apple по доступным ценам</p>
              <Link className="cards__link">
                <p className="card__link">987 обьявлениий</p>
                <img src={Rytstr} alt="" />
              
              </Link>
            </div>
              <img className="card__image" src={Komp} alt="" />
              <div className="left__color">
              </div>
          </div>
          <div className=" pink">
            <div className="card__hero ">
              <p className="card__top">Техника Apple по доступным ценам</p>
              <Link className="cards__link">
                <p className="card__link">987 обьявлениий</p>
                    <img src={Rytstr} alt="" />
              
              </Link>
            </div>
              <img className="card__image" src={Popka} alt="" />
              <div className="hero__blue">
              </div>
          </div>
          <div className=" yellow ">
            <div className="card__hero ">
              <p className="card__top">Техника Apple по доступным ценам</p>
              <Link className="cards__link">
                <p className="card__link">987 обьявлениий</p>
                <img src={Rytstr} alt="" />
                
              </Link>
            </div>
              <img className="card__image" src={Kreslo} alt="" />
              <div className="hero__green">
              </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroFooter;
{
  /* <img src={Backs} alt="" />
                    <img src={Backs2} alt="" />
                    <img src={Backs3} alt="" /> */
}
