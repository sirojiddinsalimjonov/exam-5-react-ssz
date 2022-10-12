import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import "./Top.scss";
import Footer from "../../Footer/Footer";
import Kokstr from './../../../Assets/Images/kokstr.svg'
import Btn from './../../../Assets/Images/strbtn.svg'
import { useState, useEffect } from "react";
import Pin from './../../../Assets/Images/pin.svg'
function Top() {
  const [value, setValue] = React.useState([40, 60]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    function RangeSlider() {
      const [value, setValue] = React.useState([40, 60]);

      const handleChange = (event, newValue) => {
        setValue(newValue + "$");
      };
    }
  };
  const [product, setProduct] = useState([]);

  console.log();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="dokon">
        <div className="container">
          <div className="dokon__content">
            <div className="input__dokon">
             
              <input
                className="dokon__inputs"
                type="text"
                placeholder="Введите название обявления или  "
              />
              <Link className="dokon__link"> выберите из списка</Link>
            </div>
            <div className="dokon__bottons">
              <button className="button__dokons inte">Интерсное</button>
              <button className="button__dokons to">Топ</button>
              <button className="button__dokons pred">
                Отличные предложение
              </button>
              <button className="button__dokons sup">Супер цена</button>
              <button className="button__dokons gor">
                г.Ташкент
            <img className="gor__svf" src={Pin} alt="" />
              </button>
              <button className="button__dokons gor">
                г.Термез
               <img className="gor__svf" src={Pin} alt="" />
              </button>
              <button className="button__dokons gor">
                г.Термез
           <img className="gor__svf" src={Pin} alt="" />
              </button>
            </div>

            <div className="iks__button">
              <h3 className="iks__text">Вы сейчас в рубрике</h3>
              <span className="iks__buttons">
                <button className="elekt">
                  Электроника
                  <p className="iks">X</p>
                </button>
                <button className="elekt">
                  Мониторы
                  <p className="iks">X</p>
                </button>
             
              </span>
            </div>
            <div className="iks__button">
              <h3 className="vibr">Выберите цену от и до</h3>
              <Box sx={{ width: 1000, marginLeft: `41px` }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <div className="select__top">
              <span className="svg__selects">
                <p className="select__txt">Состояние</p>
              <img className="select__svg3" src={Btn} alt="" />
              </span>
              <span className="svg__selects z">
                <p className="select__txt">Тип объявщика</p>
                <img className="select__svg2" src={Btn} alt="" />

              </span>
              <span className="svg__selects x">
                <p className="select__txt">Ташкент Мирза улугбекский район</p>
                <img className="select__svg3" src={Btn} alt="" />

              </span>
              <button className="select__pereminit">Применить</button>
            </div>
            <div className=" item__container">
              {product.slice(2, 6).map((item) => (
                <div className="relativ">
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="item__main "
                  >
                    <img className="item__img" src={item.image} alt="" />
                    <div className="item__content abback">
                      <p className="position">TOP</p>
                      <h3 className="item__title">{item.title}</h3>
                      <p className="item__data">Вчера 22:55</p>
                      <h3 className="item__price">{item.price}$</h3>
                    </div>
                  </Link>
                </div>
              ))}
              {product.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="item__main zzz"
                >
                  <img className="item__img" src={item.image} alt="" />
                  <div className="item__content">
                    <h3 className="item__title">{item.title}</h3>
                    <p className="item__data">Вчера 22:55</p>
                    <h3 className="item__price">{item.price}$</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="main__bottom">
              <button className="main__bottom-text eshe">
                Покозать еще
             
              </button>
            </div>
            <div className="sechas">
              <span className="sechas__icon">
           
             
                <h2 className="sechas__text">СЕЙЧАС ИЩУТ</h2>
              </span>
              <div className="kupit">
                <div className="kupit__content">
                  <h2 className="kupit__text">купить Мясная продукция</h2>
                  <div className="kupit__span">
                  
                    <p className="kupit__deck">2 часа назад</p>
                  </div>
                </div>
                <div className="kupit__content">
                  <h2 className="kupit__text">купить Мясная продукция</h2>
                  <div className="kupit__span">
                  
                    <p className="kupit__deck">2 часа назад</p>
                  </div>
                </div>
                <div className="kupit__content">
                  <h2 className="kupit__text">купить Мясная продукция</h2>
                  <div className="kupit__span">
                  
                    <p className="kupit__deck">2 часа назад</p>
                  </div>
                </div>
                <div className="kupit__content">
                  <h2 className="kupit__text">купить Мясная продукция</h2>
                  <div className="kupit__span">
                
                    <p className="kupit__deck">2 часа назад</p>
                  </div>
                </div>{" "}
                <div className="kupit__content">
                  <h2 className="kupit__text">купить</h2>
                  <div className="kupit__span">
                
                    <p className="kupit__deck">2 час</p>
                  </div>
                </div>
              </div>
              <h2 className="samiy">САМОЕ ИНТЕРЕСНОЕ</h2>
              <div className="samiy__content">
                {product.slice(1, 4).map((item) => (
                  <div className="borders">
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      className="item__main "
                    >
                      <img className="item__img" src={item.image} alt="" />
                      <div className="item__content abback">
                        <h3 className="item__title">{item.title}</h3>
                        <p className="item__data">Вчера 22:55</p>
                        <h3 className="item__price">{item.price}$</h3>
                      </div>
                    </Link>
                  </div>
                ))}
          <img className="topdan" src={Kokstr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Top;
