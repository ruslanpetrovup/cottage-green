import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import plus from "../images/icons/plus.svg";
import axios from "axios";

const CheckCatalog = () => {
  const [data, setCatalog] = useState([]);

  useEffect(() => {
    axios.get("https://cottage-green.herokuapp.com/catalog/get").then((res) => {
      setCatalog(res.data);
    });
  }, []);

  const deleteHouse = ({ target }) => {
    // console.dir(target.dataset.key);
    axios.delete(`http://localhost:3000/catalog/delete/${target.dataset.key}`);
  };

  const styleTest = ({ target }) => {
    if (target.type === "file") return;
    if (target.value !== "") {
      if (target.classList.contains("active")) return;
      target.classList.add("active");
      return;
    }
    target.classList.remove("active");
  };

  const photoSet = ({ target }) => {
    const check = document.querySelector(".check-add-photo-back");
    document.querySelector(".check-add-photo-icon").classList.add("active");
    check.classList.add("active");
    check.src = URL.createObjectURL(target.files[0]);
  };
  const addCotalog = (e) => {
    e.preventDefault();

    // console.dir(String(e.target[7].value))
    let formdata = new FormData();
    formdata.append("key", "fa617ab98f2d697a62f85df010136e12");
    formdata.append("image", e.target[0].files[0], e.target[0].value);
    axios.post("https://api.imgbb.com/1/upload", formdata).then((response) => {
      axios.post("https://cottage-green.herokuapp.com/catalog/add", {
        title: e.target[1].value,
        img: response.data.data.url,
        room: e.target[3].value,
        bed: e.target[4].value,
        people: e.target[5].value,
        stairs: e.target[6].value,
        price: e.target[2].value,
        desc: e.target[7].value,
      });
    });
  };
  return (
    <section className="check">
      <div className="container">
        <div className="check-block">
          <h1 className="check-head">Додавання каталогу</h1>
          <div className="check-add">
            <form
              className="check-add-form"
              onSubmit={addCotalog}
              onInput={styleTest}
            >
              <div className="check-add-photo">
                <img className="check-add-photo-back" alt="phot" src="" />
                <img className="check-add-photo-icon" src={plus} alt="plus" />
                <input
                  type="file"
                  onInput={photoSet}
                  className="check-add-photo-input"
                />
              </div>
              <div className="check-add-form-thoomb">
                <div className="check-add-form-first">
                  <div className="check-add-form-block-title">
                    <input type="text" className="check-add-form-title" />
                    <p className="check-add-form-block-text">Назва</p>
                  </div>
                  <div className="check-add-form-block-price">
                    <input type="text" className="check-add-form-price" />
                    <p className="check-add-form-block-text">Ціна</p>
                  </div>
                </div>
                <div className="check-add-form-second">
                  <div className="check-add-form-block-room">
                    <input type="text" className="check-add-form-room" />
                    <p className="check-add-form-block-text">Кімнати</p>
                  </div>
                  <div className="check-add-form-block-bed">
                    <input type="text" className="check-add-form-bed" />
                    <p className="check-add-form-block-text">Ліжка</p>
                  </div>
                  <div className="check-add-form-block-people">
                    <input type="text" className="check-add-form-people" />
                    <p className="check-add-form-block-text">Кл. людей</p>
                  </div>
                  <div className="check-add-form-block-stairs">
                    <input type="text" className="check-add-form-stairs" />
                    <p className="check-add-form-block-text">Поверховість</p>
                  </div>
                </div>
                <div className="check-add-form-block-desc">
                  <textarea className="check-add-form-desc"></textarea>
                  <p className="check-add-form-block-text">Опис</p>
                </div>
                <button type="submit" className="check-add-form-button">
                  Додати
                </button>
              </div>
            </form>
          </div>
          <div className="check-catalog">
            {data.length === 0 ? (
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <ul className="check-catalog-list">
                {data.map((num) => (
                  <li
                    className="check-catalog-item"
                    data-key={num._id}
                    key={num._id}
                  >
                    <img
                      className="check-catalog-img"
                      src={num.img}
                      alt="house"
                    />
                    <h2 className="check-catalog-head">{num.title}</h2>
                    <p className="check-catalog-text">{num.desc}</p>
                    <p className="check-catalog-price">{num.price}грн</p>
                    <div className="check-catalog-buttons">
                      <button className="check-catalog-edit">Змінити</button>
                      <button
                        data-key={num._id}
                        className="check-catalog-delete"
                        onClick={deleteHouse}
                      >
                        Видалити
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CheckCatalog;
