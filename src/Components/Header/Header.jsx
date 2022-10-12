import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "./../../Assets/Images/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import Ava from "./../../Assets/Images/ava.jpg";
import HeaderButton from "../HeaderBuuton/HeaderButton";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {i18next} from "./../../Lang/lang"

function Header() {
  const { setToken, token } = useContext(AuthContext);
  const hendleLogaut = () => {
    setToken(null);
  };
  const { t, i18n } = useTranslation();
  const hendleChangeLng = (lng) => {
 i18n.changeLanguage(lng)
 localStorage.setItem("lng", lng)
  }
  return (
    <>
      <Outlet />
      <header className="site__header">
        <div className="container">
          <div className="site__nav">
            <Link to={"/"} className="logo__span">
              <img src={Logo} alt="" />
              <p className="logo__text">
                {t('header.logo')}
              </p>
            </Link>
            <div className="list__nav">
              <Link to={"/top"} className="link yengi ">
                {t('header.Объявления')}
              </Link>
              <Link to={"./magazin"} className="link magazins">
              {t('header.Магазины')}
              </Link>
              <Link to={"./biznes"} className="link biznes">
              {t('header.Длябизнеса')}
              </Link>
              <Link to={"./pomosh"} className="link yordam">
              {t('header.Помощь')}
              </Link>

              <button  onClick={()=>hendleChangeLng("rus") && 'line'} className="ru"> {t('header.Рус')}</button>
              <button onClick={()=> hendleChangeLng("uz") && 'line'} className="uz">{t('header.Oz')}</button>
              {token ? (
                <Link to={"/profile"} className="ava__header">
                  <h2 className="sali">Темиров</h2>
                  <img className="ava__header-ava" src={Ava} alt="" />
                </Link>
              ) : (
                <Link className="btn" to={"/login"}>
                   {t('header.Вход')}
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
