import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Hero from "./Hero/Hero";
import HeroFooter from "./HeroFooter/HeroFooter";
import { Link, useParams } from "react-router-dom";
import Main from "./Main/Main";
import MainToo from "./MainToo/MainToo";
import { useState, useEffect } from "react";
import Strbtn from "./../../../Assets/Images/strbtn.svg"

import {Outlet} from "react-router-dom"



function Home() {
    const [product, setProduct] = useState([]);
    const [pakazat, setPakazat] = useState()

    
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

    const Pakazat = () => {
      setPakazat((pakaValue) => pakaValue + 4)
    }
  return (
    <>
      <Hero />
      <Main />
      <div className="container item__container">
<Outlet/>

        {product.map((item) => (
          <Link  key={item.id} to={`/product/${item.id}`} className="item__main">
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
        <button onClick={Pakazat} className={`main__bottom-text ${pakazat === product.length ? 'out' : ''}`}>
          Покозать еще
          <img className="svg__pokaz" src={Strbtn} alt="" />
        </button>
      </div>
      <HeroFooter />
      <MainToo />
      <Footer />
    </>
  );
}

export default Home;
