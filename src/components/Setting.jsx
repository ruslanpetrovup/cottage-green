import React from "react";
import setting from "../images/icons/setting.svg";
import home from "../images/icons/home.svg";
import avatar from "../images/avatar.jpg";
const Setting = () => {
  const menuSetting = ({ target }) => {
    const windowProfile = document.querySelector(".setting-work-profile");
    const windowHouses = document.querySelector(".setting-work-houses");
    const mass = [windowProfile, windowHouses];
    mass.forEach((num) => {
      num.classList.remove("active");
    });
    if (target.dataset.name === "settings") {
      windowProfile.classList.add("active");
    } else {
      windowHouses.classList.add("active");
    }
  };
  return (
    <section className="setting">
      <div className="container">
        <div className="setting-block">
          <h1 className="setting-title">Ваш кабінет</h1>
          <div className="setting-content">
            <div className="setting-menu">
              <button
                className="setting-menu-button"
                onClick={menuSetting}
                data-name="settings"
              >
                <img
                  class="setting-menu-button-icon"
                  src={setting}
                  alt="icon"
                />
                Налаштування
              </button>
              <button
                className="setting-menu-button"
                onClick={menuSetting}
                data-name="houses"
              >
                <img class="setting-menu-button-icon" src={home} alt="icon" />
                Ваші бронювання
              </button>
            </div>
            <div className="setting-work">
              <div className="setting-work-profile active">
                <form className="setting-work-profile-form">
                  <input
                    type="text"
                    className="setting-work-profile-form-name"
                    placeholder="Микита"
                  />
                  <input
                    type="text"
                    className="setting-work-profile-form-name"
                    placeholder="Фесенко"
                  />
                  <button className="setting-work-profile-form-button">
                    Змінити
                  </button>
                </form>
                <div className="setting-work-profile-avatar">
                  <img
                    className="setting-work-profile-avatar-img"
                    src={avatar}
                    alt="avatar"
                  />
                  <button className="setting-work-profile-avatar-button">
                    Змінити фото
                  </button>
                </div>
              </div>
              <div className="setting-work-houses">
                <ul className="setting-work-houses-list">
                  <li className="setting-work-houses-item">
                    <h2 className="setting-work-houses-head">Коттедж спокій</h2>
                    <p className="setting-work-houses-text">
                      Ціна: 7000грн\ніч
                    </p>
                    <button className="setting-work-houses-button">
                      Більш детальніше
                    </button>
                  </li>
                  <li className="setting-work-houses-item">
                    <h2 className="setting-work-houses-head">
                      Коттедж Ластівка
                    </h2>
                    <p className="setting-work-houses-text">
                      Ціна: 3000грн\ніч
                    </p>
                    <button className="setting-work-houses-button">
                      Більш детальніше
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Setting;
