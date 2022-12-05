import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-test.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          <div className="footer-content">
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
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-item-link">
                  Головна
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/rent" className="footer-item-link">
                  Забронювати
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/comments" className="footer-item-link">
                  Відгуки
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/contacts" className="footer-item-link">
                  Контакти
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/admin" className="footer-item-link">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-author">
            <p className="footer-author-own">
              Ⓒ Company property Cottage
              <span className="footer-author-own-span"> Green</span>
            </p>
            <p className="footer-author-year">2022 - 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
