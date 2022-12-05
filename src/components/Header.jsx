import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo-test.png";
import close from "../images/icons/close.svg";
import sprite from "../images/icons/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchToken,
  fetchLogin,
  fetchRegister,
  userClear,
} from "../store/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const local = useLocation();
  const [loginOn, setLoginOn] = useState(true);
  const infoUser = useSelector((state) => state.user.data);
  const token = useSelector((state) => state.user.token);
  const auth = useSelector((state) => state.user.auth);
  const userName = useSelector((state) => state.user.data.name);

  useEffect(() => {
    if (token) {
      dispatch(fetchToken(token));
    } else {
      dispatch(fetchToken(JSON.parse(localStorage.getItem("token"))));
    }
    if (token || JSON.parse(localStorage.getItem("token") || "")) {
      setLoginOn(true);
    } else {
      setLoginOn(false);
    }
  }, [token]);

  useEffect(() => {
    if (auth === "OK") {
      setWindowLog(false);
    }
  }, [auth]);

  const exitUser = () => {
    dispatch(userClear());
    setLoginOn(false);
    if (local.pathname === "/cabinet") {
      navigate("/");
    }
  };
  const [windowLog, setWindowLog] = useState(false);
  const [windowReg, setWindowReg] = useState(false);
  const openWindowLog = () => {
    setWindowLog(!windowLog);
  };
  const openWindowReg = () => {
    setWindowReg(!windowReg);
  };
  const registerUser = async (e) => {
    e.preventDefault();

    dispatch(
      fetchRegister({
        email: e.target[2].value,
        name: e.target[0].value,
        secondname: e.target[1].value,
        password: e.target[3].value,
      })
    );
  };
  const loginUser = async (e) => {
    e.preventDefault();
    dispatch(
      fetchLogin({
        email: e.target[0].value,
        password: e.target[1].value,
      })
    );
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <a
              className="header-logo-link"
              href="https://cottage-green.vercel.app/"
            >
              <img className="header-logo-img" src={logo} alt="logo" />

              <h1 className="header-logo-title">
                Cottage<span className="header-logo-title-span">Green</span>
              </h1>
            </a>
          </div>

          <ul className="header-menu">
            <li className="header-item">
              <Link to="/" className="header-item-link">
                Головна
              </Link>
            </li>
            <li className="header-item">
              <Link to="/rent" className="header-item-link">
                Забронювати
              </Link>
            </li>
            <li className="header-item">
              <Link to="/comments" className="header-item-link">
                Відгуки
              </Link>
            </li>
            <li className="header-item">
              <Link to="/contacts" className="header-item-link">
                Контакти
              </Link>
            </li>
          </ul>
          <div className="header-sing">
            {!loginOn ? (
              <div className="header-sing-logout">
                <button className="header-sing-singin" onClick={openWindowLog}>
                  Вхід
                </button>
                <button
                  className="header-sing-register"
                  onClick={openWindowReg}
                >
                  Реєстрація
                </button>
              </div>
            ) : (
              <div className="header-sing-login">
                <Link to="/cabinet" className="header-sing-login-cabinet">
                  {userName}
                  <svg className="header-sing-login-cabinet-icon">
                    <use href={`${sprite}#settings`}></use>
                  </svg>
                </Link>
                <button className="header-sing-login-close" onClick={exitUser}>
                  Вийти
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={`window-singin ${windowLog ? "active" : ""}`}>
          <div className="window-input">
            <h2 className="window-title">Вхід до кабінету</h2>
            <form className="window-form" onSubmit={loginUser}>
              <input
                className="window-form-email"
                type="email"
                placeholder="Ваша пошта"
              />
              <input
                className="window-form-password"
                type="password"
                placeholder="Ваш пароль"
              />
              <button className="window-form-submit" type="submit">
                Увійти
              </button>
            </form>
            <button className="window-close" onClick={openWindowLog}>
              <img className="window-close-icon" src={close} alt="close" />
            </button>
          </div>
        </div>

        <div className={`window-register ${windowReg ? "active" : ""}`}>
          <div className="window-register-input">
            <h2 className="window-register-title">Реєстрація до кабінету</h2>
            <form className="window-register-form" onSubmit={registerUser}>
              <input
                className="window-register-form-name"
                type="text"
                placeholder="Ім'я"
              />
              <input
                className="window-register-form-name"
                type="text"
                placeholder="Прізвище"
              />
              <input
                className="window-register-form-email"
                type="email"
                placeholder="Ваша пошта"
              />
              <input
                className="window-register-form-password"
                type="password"
                placeholder="Ваш пароль"
              />
              <button className="window-register-form-submit" type="submit">
                Зареєструватись
              </button>
            </form>
            <button className="window-register-close" onClick={openWindowReg}>
              <img
                className="window-register-close-icon"
                src={close}
                alt="close"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
