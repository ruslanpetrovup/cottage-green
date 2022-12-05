import React, { useEffect, useState, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import plus from "../images/icons/plus.svg";
import dont from "../images/icons/dont.svg";
import axios from "axios";
import { CSSTransition } from "react-transition-group";

const CheckCatalog = () => {
  const [data, setCatalog] = useState([]);
  const [transtion, setTransition] = useState([]);
  const check = useRef();
  const iconCheck = useRef();
  const dontButton = useRef();
  const photoInput = useRef();
  useEffect(
    () => async () => {
      try {
        const response = await axios(`${process.env.REACT_APP_SERVER}/catalog/get`);

        setCatalog(response.data);
        const check = [];

        response.data.forEach((item) => {
          check.push({ _id: item._id, status: false });
        });
        setTransition(check);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  useEffect(() => {
    const check = [];
    data.forEach((item) => {
      check.push({ _id: item._id, status: false });
    });
    setTransition(check);
  }, [data]);

  const addCotalog = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("key", "fa617ab98f2d697a62f85df010136e12");
    formdata.append("image", e.target[1].files[0], e.target[1].value);
    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formdata
      );

      const result = await axios.post(`${process.env.REACT_APP_SERVER}/catalog/add`, {
        title: e.target[2].value,
        img: response.data.data.url,
        room: e.target[4].value,
        bed: e.target[5].value,
        people: e.target[6].value,
        stairs: e.target[7].value,
        price: e.target[3].value,
        desc: e.target[8].value,
      });

      setCatalog([...data, result.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const opacityHouse = ({ target }) => {
    const result = transtion.map((num) => {
      if (num._id === target.id) {
        return { _id: num._id, status: !num.status };
      }
      return num;
    });
    setTransition(result);
  };

  const editHouse = async (e) => {
    e.preventDefault();
    if (e.target[1].value === "") {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER}/catalog/edit/${e.target.dataset.key}`,
          {
            title: e.target[2].value,
            img: "",
            room: e.target[4].value,
            bed: e.target[5].value,
            people: e.target[6].value,
            stairs: e.target[7].value,
            price: e.target[3].value,
            desc: e.target[8].value,
          }
        );

        const mass = [];
        data.forEach((num) => {
          if (num._id === response.data._id) {
            mass.push(response.data);
          } else {
            mass.push(num);
          }
        });
        setCatalog(mass);
      } catch (error) {
        console.log(error);
      }
    } else {
      let formdata = new FormData();
      formdata.append("key", "fa617ab98f2d697a62f85df010136e12");
      formdata.append("image", e.target[1].files[0], e.target[1].value);

      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formdata
        );

        const result = await axios.post(
          `${process.env.REACT_APP_SERVER}/catalog/edit/${e.target.dataset.key}`,
          {
            title: e.target[2].value,
            img: response.data.data.url,
            room: e.target[4].value,
            bed: e.target[5].value,
            people: e.target[6].value,
            stairs: e.target[7].value,
            price: e.target[3].value,
            desc: e.target[8].value,
          }
        );

        const mass = [];
        data.forEach((num) => {
          if (num._id === result.data._id) {
            mass.push(result.data);
          } else {
            mass.push(num);
          }
        });
        setCatalog(mass);
      } catch (error) {
        console.log(error);
      }
    }
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
    dontButton.current.classList.add("active");

    iconCheck.current.classList.add("active");

    check.current.classList.add("active");

    check.current.src = URL.createObjectURL(target.files[0]);
  };

  const deletePhoto = ({ target }) => {
    photoInput.current.value = "";

    iconCheck.current.classList.remove("active");
    dontButton.current.classList.remove("active");
    check.current.src = "";
    check.current.classList.remove("active");
  };

  const deleteHouse = async ({ target }) => {
    try {
      const result = await axios.delete(
        `${process.env.SERVER}/catalog/delete/${target.dataset.key}`
      );
      const total = data.filter((num) => result.data._id !== num._id && num);
      setCatalog(total);
    } catch (error) {
      console.log(error);
    }
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
                <button className="check-add-photo-dont" onClick={deletePhoto}>
                  <img
                    className="check-add-photo-dont-icon"
                    alt="dont"
                    src={dont}
                  />
                </button>
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
              <div className="check-catalog-loader">
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
              </div>
            ) : (
              <ul className="check-catalog-list">
                {data.map((num, index) => (
                  <li
                    className="check-catalog-item"
                    data-key={num._id}
                    key={num._id}
                  >
                    <div className="check-catalog-item-content">
                      <img
                        className="check-catalog-img"
                        src={num.img}
                        alt="house"
                      />
                      <h2 className="check-catalog-head">{num.title}</h2>
                      <p className="check-catalog-text">{num.desc}</p>
                      <p className="check-catalog-price">{num.price}грн</p>
                      <div className="check-catalog-buttons">
                        <button
                          id={num._id}
                          className="check-catalog-edit"
                          onClick={opacityHouse}
                        >
                          Змінити
                        </button>
                        <button
                          data-key={num._id}
                          className="check-catalog-delete"
                          onClick={deleteHouse}
                        >
                          Видалити
                        </button>
                      </div>
                    </div>
                    <CSSTransition
                      in={transtion[index].status}
                      timeout={600}
                      classNames="alert"
                      unmountOnExit
                    >
                      <div className="check-catalog-item-edit">
                        <div className="check-add">
                          <form
                            className="check-add-form"
                            onSubmit={editHouse}
                            onInput={styleTest}
                            data-key={num._id}
                          >
                            <div className="check-add-photo">
                              <img
                                ref={check}
                                className="check-add-photo-back"
                                alt="phot"
                                src=""
                              />
                              <img
                                ref={iconCheck}
                                className="check-add-photo-icon"
                                src={plus}
                                alt="plus"
                              />
                              <button
                                ref={dontButton}
                                className="check-add-photo-dont"
                                onClick={deletePhoto}
                              >
                                <img
                                  className="check-add-photo-dont-icon"
                                  alt="dont"
                                  src={dont}
                                />
                              </button>
                              <input
                                ref={photoInput}
                                type="file"
                                onInput={photoSet}
                                className="check-add-photo-input"
                              />
                            </div>
                            <div className="check-add-form-thoomb">
                              <div className="check-add-form-first">
                                <div className="check-add-form-block-title">
                                  <input
                                    type="text"
                                    className="check-add-form-title"
                                  />
                                  <p className="check-add-form-block-text">
                                    Назва
                                  </p>
                                </div>
                                <div className="check-add-form-block-price">
                                  <input
                                    type="text"
                                    className="check-add-form-price"
                                  />
                                  <p className="check-add-form-block-text">
                                    Ціна
                                  </p>
                                </div>
                              </div>
                              <div className="check-add-form-second">
                                <div className="check-add-form-block-room">
                                  <input
                                    type="text"
                                    className="check-add-form-room"
                                  />
                                  <p className="check-add-form-block-text">
                                    Кімнати
                                  </p>
                                </div>
                                <div className="check-add-form-block-bed">
                                  <input
                                    type="text"
                                    className="check-add-form-bed"
                                  />
                                  <p className="check-add-form-block-text">
                                    Ліжка
                                  </p>
                                </div>
                                <div className="check-add-form-block-people">
                                  <input
                                    type="text"
                                    className="check-add-form-people"
                                  />
                                  <p className="check-add-form-block-text">
                                    Кл. людей
                                  </p>
                                </div>
                                <div className="check-add-form-block-stairs">
                                  <input
                                    type="text"
                                    className="check-add-form-stairs"
                                  />
                                  <p className="check-add-form-block-text">
                                    Поверховість
                                  </p>
                                </div>
                              </div>
                              <div className="check-add-form-block-desc">
                                <textarea className="check-add-form-desc"></textarea>
                                <p className="check-add-form-block-text">
                                  Опис
                                </p>
                              </div>
                              <button
                                type="submit"
                                className="check-add-form-button"
                              >
                                Змінити
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </CSSTransition>
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
