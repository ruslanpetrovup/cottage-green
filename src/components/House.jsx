import React, { useEffect, useState } from "react";
import room from "../images/icons/rooms.svg";
import bed from "../images/icons/bed.svg";
import people from "../images/icons/people.svg";
import stairs from "../images/icons/stairs.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

const House = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://cottage-green.herokuapp.com/catalog/getOne/${id}`)
      .then((res) => {
        console.dir(res);
        setData(res.data);
      });
  }, [id]);
  //   console.dir(localId.id);
  console.dir(data);

  return (
    <section className="house">
      <div className="container">
        <div className="house-block">
          <div className="house-image">
            <img className="house-img" src="" alt="house" />
          </div>
          <div className="house-content">
            <h2 className="house-title">Коттедж</h2>
            <div className="houses-item-text-list">
              <p className="houses-item-text">
                <img className="houses-item-text-icon" src={room} alt="room" />:{" "}
                {}
              </p>
              <p className="houses-item-text">
                <img className="houses-item-text-icon" src={bed} alt="bed" />:{" "}
                {}
              </p>
              <p className="houses-item-text">
                <img
                  className="houses-item-text-icon"
                  src={people}
                  alt="people"
                />
                : {}
              </p>
              <p className="houses-item-text">
                <img
                  className="houses-item-text-icon"
                  src={stairs}
                  alt="stairs"
                />
                : {}
              </p>
            </div>
          </div>
        </div>
        <div className="house-desc"></div>
      </div>
    </section>
  );
};
export default House;
