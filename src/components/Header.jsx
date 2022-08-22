import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-test.png";

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};
export default Header;
