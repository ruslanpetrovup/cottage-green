import React, { useState } from "react";
import icon from "../images/icons/phone.svg";
import close from "../images/icons/close.svg";
import second from "../images/seconds.gif";

const CallMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="callme" onClick={openModal}>
        <div className="callme-block">
          <img className="callme-img" src={icon} alt="callme" />
        </div>
        <div className="callme-thoomb">
          <p className="callme-thoomb-text">Call Me</p>
        </div>
      </div>
      <div className={`callme-backdrop ${isOpen ? "active" : ""}`}>
        <div className="callme-backdrop-block">
          <button className="callme-backdrop-block-close" onClick={openModal}>
            <img
              className="callme-backdrop-block-close-icon"
              src={close}
              alt="close"
            />
          </button>
          <h2 className="callme-backdrop-block-title">
            Ми вам зателефонуємо протягом 5 хвилин
          </h2>
          <img
            className="callme-backdrop-block-second"
            src={second}
            alt="second"
          />
          <form className="callme-backdrop-block-form">
            <input
              className="callme-backdrop-block-form-phone"
              type="text"
              placeholder="Ваш номер телефону"
            />
            <button className="callme-backdrop-block-form-submit">
              Зателефонувати
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CallMe;
