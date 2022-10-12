
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/authContext";
import Home from "../Home/Home";
import Header from "../../Header/Header";
import "./Login.scss";
import { darkScrollbar } from "@mui/material";

function Login() {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate("/");
  const emailRef = useRef('');
  const passwordRef = useRef('');


  const hendeleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value
    })
        if(emailRef.current.value.length > 0 && passwordRef.current.value.length > 0){

         
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }).then(res => res.json())
            .then(data => { 
              if(data.token) {
                setToken(data)
                  
                navigate( '/')
              }else {
                alert('email or password error')
              }
            })
            .catch(err => console.log(err))

            return;
        } 
            
        alert('Barcha fieldlarni toldirish shart') 
  };

  return (
    <>
      <section className="login__section">
        <div className="container">
          <div className="login__content">
            <div className="form__content">
                <h2 className="formtop__text">
                Ваша регистрация завершена!
                </h2>
                <h2 className="form__textp">Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</h2>

              <form className="form" onSubmit={hendeleSubmit}>
                <p className="input__tel">Введите email  или номер телефона</p>
                <input
                className="input__form"
                  ref={emailRef}
                  type="text"
                  placeholder="99891 167 27 23"
                />
                <p className="input__pas">Пароль</p>
                <input
                className="input__form"
                  ref={passwordRef}
                  type="password"
                  placeholder="***********"
                />
                <button className="submit" type="submit">Войти</button>
              </form>
            <div className="border__logindiv">
            <span className="left__border">________________</span>
            <p className="ili__border">или</p>
            <span className="rayt__border">________________</span>
            </div>
            <button className="parolss">Восстоновить ваше пароль</button>

            </div>
            <div className="bech">
            <div className="back__content">
              <div className="text__baack">
                <h2 className="kivi">kivi</h2>
                <p className="kivi__text">
                  Откройте для себя целую плошадку для продаже
                </p>
                <button className="kivi__buton">Как это делать?</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
