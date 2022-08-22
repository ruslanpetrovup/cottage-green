import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-test.png";
import close from "../images/icons/close.svg";

const Header = () => {
  const [windowLog, setWindowLog] = useState(false);
  const openWindowLog = () => {
    setWindowLog(!windowLog);
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
            <button className="header-sing-singin" onClick={openWindowLog}>
              Вхід
            </button>
            <button className="header-sing-register">Реєстрація</button>
          </div>
        </div>
        <div className={`window-singin ${windowLog ? "active" : ""}`}>
          <div className="window-input">
            <h2 className="window-title">Вхід до кабінету</h2>
            <form className="window-form">
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
              <button className="window-form-submit">Увійти</button>
            </form>
            <button className="window-close" onClick={openWindowLog}>
              <img className="window-close-icon" src={close} alt="close" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
