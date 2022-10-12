import { useState, useEffect } from "react";
import { Link} from 'react-router-dom'
import Strbtn from "./../../../../Assets/Images/strbtn.svg"

function MainToo() {
  const [product, setProduct] = useState([]);
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
      <section className="section__main">
        <div className="container">
          <div className="text__main">
            <Link className="text__novi liks">Просмотренные</Link>
            <Link className="text__layt liks">Выбор редакции</Link>
            <Link className="text__layt liks">Сниженные цены</Link>
          </div>
          <div className="item__container">
            {product.slice(6, 10).map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="item__main">
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
            <button className="main__bottom-text">
              Покозать еще

          <img className="svg__pokaz" src={Strbtn} alt="" />

              </button>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default MainToo;
