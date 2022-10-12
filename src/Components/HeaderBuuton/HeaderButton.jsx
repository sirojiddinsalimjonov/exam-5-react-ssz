import "./HeaderButton.scss";

import { Link } from "react-router-dom";
import Logo from './../../Assets/Images/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import Ava from './../../Assets/Images/ava.jpg'
import Qora from './../../Assets/Images/qora.svg'


function HeaderButton() {
    
  return (
    <>
    
  
      <section className="header__buton">
        <div className="container">
          <div className="button__content">
              <div className="input_waraper">
                <span className="text1__content">
                <h2 className="wrap__text1">
                  Любая категория
                  </h2>
                  <img className="svg__input" src={Qora} alt="" />

            
                </span>

            <h2 className="text2">Что будем искать ?</h2>
            <span className="text1__content1">
                <h2 className="wrap__text2">
                  Любая категория
                  </h2>
            <img className="svg__input" src={Qora} alt="" />
                
                </span>
                <button className="nayti__button">Найти</button>
              </div>
            <button className="button__dabv">
                <p className="button__plus">+</p>
            <p className="plus__text">  Добавить обьявления</p>
            </button>
          </div>
        </div>
      </section>
    
    </>
  );
}


export default HeaderButton;