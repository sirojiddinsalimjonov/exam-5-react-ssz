
import {Link} from 'react-router-dom'
import HeaderButton from "../../HeaderBuuton/HeaderButton";
import Johori from "./../../../Assets/Images/johori.jpg";
import Zira from "./../../../Assets/Images/zira.jpg";
import Kamaz from "./../../../Assets/Images/kamaz.jpg";
import Newjohori from "./../../../Assets/Images/newjohori.jpg";
import Mosh from "./../../../Assets/Images/mosh.jpg";
function Products () {
    return(
        <section className="Products">
        <div className="container">
          <div className="link__pro">
            <Link className="link__protext">
              Объявления <p className="chizu">/</p>
            </Link>
            <Link className="link__protext">
              Ташкент Недвижимость <p className="chizu">/</p>
            </Link>
            <Link className="link__protext">
              Ташкент Квартиры <p className="chizu">/</p>
            </Link>
            <Link className="link__protext">
              Ташкент Продажа <p className="chizu">/</p>
            </Link>
            <Link className="link__protext">Новостройки Ташкент</Link>
          </div>
          {/* {product.map((item) => ( */}
          <div className="item__content">
            <h3 className="item__titles">
              {/* {item.title} */}
              Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5
              
            </h3>
            <div className="pro__contain">
              <div className="pro__image">
                <div className="image__kop">
                  <img src={Johori} alt="" className="image__left" />
                  <img src={Zira} alt="" className="image__left" />
                  <img src={Kamaz} alt="" className="image__left" />
                  <img src={Newjohori} alt="" className="image__left" />
                  <img src={Mosh} alt="" className="image__left" />
                </div>
                <img src={Kamaz} alt="" width={456} height={456} />
              </div>
              <div className="pro__text">
                <span className="pro__span">
                  <p className="pro__artiku">Артикул: 4418970</p>
                  <p className="pro__data">
                    обновлено: 28.04.17 добавлено: 28.04.17{" "}
                  </p>
                </span>
                <h3 className="pro__price">70 000 у.е.$</h3>
                <Link className="pro__tashkent">
                  Ташкент, Ташкентская область, Юнусабадский район{" "}
                </Link>
                <div className="pro__tel">
                  <h3 className="pro__telfon">99891 166 ****</h3>
                  <button className="pro__pakazat">Покозать польностю</button>
                </div>
                <div className="pro__tel">
                  <h3 className="pro__telfon">99891 166 ****</h3>
                  <button className="pro__pakazat">Покозать польностю</button>
                </div>
                <span className="span__aftor">
                  <p className="aftor">Автор обьявлении: </p>
                  <Link to={"/profile"} className="aftor__name">
                    Salimjonov Sirojiddin
                  </Link>
                </span>
                <span className="napisat">
                  <button className="napisat__button">Написать автору</button>
                  <button className="predlajat__button">
                    Предложить свою цену
                  </button>
                </span>
                <div class="table">
                  <div class="table-left">
                    <div class="table-item">
                      <h4 class="table-item__title komnat">
                        Количество комнат:
                      </h4>
                      <h4 class="table-item__text">6</h4>
                    </div>
                    <div class="table-item">
                      <h4 class="table-item__title">Этажность дома:</h4>
                      <h4 class="table-item__text">6</h4>
                    </div>
                    <div class="table-item">
                      <h4 class="table-item__title">Планировка</h4>
                      <h4 class="table-item__text special">Раздельная</h4>
                    </div>
                    <div class="table-item">
                      <h4 class="table-item__title">Санузел</h4>
                      <h4 class="table-item__text special bole">
                        2 санузла и более
                      </h4>
                    </div>
                  </div>
                  <div class="table-center">
                    <div class="table-item">
                      <h4 class="table-item__title">Общая площадь:</h4>
                      <h4 class="table-item__text">40 м2</h4>
                    </div>
                    <div class="table-item">
                      <h4 class="table-item__title sostyan">
                        Состояние квартиры:
                      </h4>
                      <h4 class="table-item__text">Первая сдача</h4>
                    </div>
                    <div class="table-item">
                      <h4 class="table-item__title">Год постройки/сдачи</h4>
                      <h4 class="table-item__text special">Сдача в 2017</h4>
                    </div>
                    <div class="table-item small">
                      <h4 class="table-item__title mebl">Меблирована</h4>
                      <h4 class="table-item__text special da">Да</h4>
                    </div>
                  </div>
                  <div class="table-right">
                    <div class="table-item">
                      <h4 class="table-item__title">Этаж:</h4>
                      <h4 class="table-item__text">32</h4>
                    </div>
                    <div class="table-item">
                      <h4 class="table-item__title">Этаж:</h4>
                      <h4 class="table-item__text">32</h4>
                    </div>
                    <div class="table-item">
                      <h4 class="table-item__title remont">Ремонт</h4>
                      <h4 class="table-item__text proyekt">Авторский проект</h4>
                    </div>
                    <div class="table-item small">
                      <h4 class="table-item__title poto">Высота потолков</h4>
                      <h4 class="table-item__text">32</h4>
                    </div>
                  </div>
                </div>
                <div class="table-bottom">
                  <div class="items__border">
                    <h4 class="table-item__title yst">Рядом есть</h4>
                    <h4 class=" special">
                      Больница, поликлиника, Детская, площадка, Детский сад,
                      Остановки, Парк, зелёная зона, Развлекательные заведения,
                      Рестораны, кафе
                    </h4>
                  </div>
                </div>
                <h3 className="title1">
                  Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме.
                  Новостройка Голден Хаус жылой комплекс Етти Чинор Очень
                  качественный и дорогой ремонт. Комнаты полнастю разделные
                  болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт
                  шыкарный обсалютно новый.
                </h3>
                <h3 className="title2">
                  Ремонт делолся из очень дорогова материяла. Дорогая
                  класическая кухонная мебель. Джаккузи,Тёплые полы в каждой
                  комнате. Дорогие люстры вовсех комнатах решодки на окнах.
                  Теретория охранается. Всё предусмотренно для детей деские
                  площядки качели итд. Торг наместе. Торопитесь продаю нужны
                  денги. Первый золотой этаж и паследний в этом коплексе.
                  Торопитесь.
                </h3>
                <div className="prosmotr">
                  <p className="prosmotr__div">Просмотры:10958 </p>
                  <p className="prosmotr__poj"> Пожаловатся</p>
                </div>
              </div>
            </div>
          </div>

          {/* ))}  */}
        </div>
      </section>
    )
}

export default Products;