import React, { useEffect, useState, useCallback } from "react";
import room from "../images/icons/rooms.svg";
import bed from "../images/icons/bed.svg";
import people from "../images/icons/people.svg";
import stairs from "../images/icons/stairs.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "./Slider";

const House = () => {
  const { id } = useParams();
  const [num, setNum] = useState("");
  const [data, setData] = useState({});
  const checkNum = ({ target }) => {
    setNum(target.src);
  };

  useEffect(() => {
    window.scrollTo(window.scrollX, 0);
    axios
      .get(`https://cottage-green.herokuapp.com/catalog/getOne/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, [id]);

  return (
    <section className="house">
      <div className="container">
        <div className="house-block">
          <div className="house-image">
            <Slider
              imgs={[data.img, data.img]}
              classT="house-img"
              numberT={checkNum}
            />
          </div>
          <div className="house-content">
            <h2 className="house-title">{data.title}</h2>
            <div className="houses-item-text-list">
              <p className="houses-item-text">
                <img className="houses-item-text-icon" src={room} alt="room" />:
                {data.room}
                {}
              </p>
              <p className="houses-item-text">
                <img className="houses-item-text-icon" src={bed} alt="bed" />:
                {data.bed}
                {}
              </p>
              <p className="houses-item-text">
                <img
                  className="houses-item-text-icon"
                  src={people}
                  alt="people"
                />
                : {data.people}
              </p>
              <p className="houses-item-text">
                <img
                  className="houses-item-text-icon"
                  src={stairs}
                  alt="stairs"
                />
                : {data.stairs}
              </p>
            </div>
            <div className="house-button-block">
              <button className="house-button">Забронювати</button>
            </div>
          </div>
        </div>
        <div className="house-desc">
          <h2 className="house-desc-title">Опис</h2>
          <p className="house-desc-text">{data.desc}</p>
        </div>
        <div
          className={`house-backdrop ${num !== "" ? "active" : ""}`}
          onClick={() => {
            document
              .querySelector(".house-backdrop")
              .classList.remove("active");
            setTimeout(() => {
              setNum("");
            }, 250);
          }}
        >
          <div className="house-modal">
            <img className="house-modal-img" src={num} alt="modal" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default House;
