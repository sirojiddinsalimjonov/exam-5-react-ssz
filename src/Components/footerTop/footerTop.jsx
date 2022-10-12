

import LogoFooter from "./../../Assets/Images/logo-gren.svg";
import Apple from "./../../Assets/Images/apples.svg";
import Google from "./../../Assets/Images/google.svg";
function FooterTop () {
    return(
        <>
        <div className="wraper__footer">
        <div className="container">
        <div className="content__footer">
              <span className="footer__logo">
                <img src={LogoFooter} alt="" />
                <p className="logo__deck">
                  Продай, найди, купи все что пожелаешь…
                </p>
              </span>

              <h2 className="footer__center-text">
                Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
                обяления
              </h2>
              <div className="button__footer">
                <button className="btn__foot">
                  <img className="border" src={Apple} alt="" />
                  <div className="text__apple">
                    <p className="top__text">Aviable on the</p>
                    <p className="button__text">Apple Store</p>
                  </div>
                </button>
                <button className="btn__foot goog">
                  <img className="border" src={Google} alt="" />
                  <div className="text__apple ">
                    <p className="top__text">Android App on</p>
                    <p className="button__text">G00GLE PLAY</p>
                  </div>
                </button>
              </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default FooterTop