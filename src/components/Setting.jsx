import React, { useState, useEffect, useRef } from "react";
import setting from "../images/icons/setting.svg";
import home from "../images/icons/home.svg";
import axios from "axios";
const Setting = () => {
  const [data, setData] = useState({});
  const windowProfile = useRef();
  const windowHouses = useRef();
  const name = useRef();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  const menuSetting = ({ target }) => {
    const mass = [windowProfile.current, windowHouses.current];
    mass.forEach((num) => {
      num.classList.remove("active");
    });
    if (target.dataset.name === "settings") {
      windowProfile.current.classList.add("active");
    } else {
      windowHouses.current.classList.add("active");
    }
  };
  const editName = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cottage-green.herokuapp.com/user/edit-name",
        {
          token: localStorage.getItem("token"),
          name: e.target[0].value,
          secondname: e.target[1].value,
        }
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    // localStorage.setItem("data", JSON.stringify(res.data));
    e.target[0].value = "";
    window.location.reload(false);

    name.current.innerText = e.target[0].value;
  };
  const editAvatar = async (e) => {
    let formdata = new FormData();
    formdata.append("key", "fa617ab98f2d697a62f85df010136e12");

    formdata.append("image", e.target[0].files[0], e.target[0].value);

    try {
      const result = await axios.post(
        "https://api.imgbb.com/1/upload",
        formdata
      );
      await axios.post("https://cottage-green.herokuapp.com/user/edit-name", {
        token: localStorage.getItem("token"),
        avatar: result.data.data.url,
      });
    } catch (error) {
      console.log(error);
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
                  className="setting-menu-button-icon"
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
              <div ref={windowProfile} className="setting-work-profile active">
                <form className="setting-work-profile-form" onSubmit={editName}>
                  <div className="setting-work-profile-form-block">
                    <input
                      type="text"
                      className="setting-work-profile-form-name"
                    />
                    <p
                      ref={name}
                      id="name"
                      className="setting-work-profile-form-text"
                    >
                      {data.name}
                    </p>
                  </div>
                  <div className="setting-work-profile-form-block">
                    <input
                      type="text"
                      className="setting-work-profile-form-name"
                    />
                    <p
                      id="secondname"
                      className="setting-work-profile-form-text"
                    >
                      {data.secondname}
                    </p>
                  </div>
                  <button
                    className="setting-work-profile-form-button"
                    type="submit"
                  >
                    Змінити
                  </button>
                </form>
                <div className="setting-work-profile-avatar">
                  <img
                    className="setting-work-profile-avatar-img"
                    src={data.avatar}
                    alt="avatar"
                  />
                  <button
                    onClick={editAvatar}
                    className="setting-work-profile-avatar-button"
                  >
                    Змінити фото
                  </button>
                </div>
              </div>
              <div ref={windowHouses} className="setting-work-houses">
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
