import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import room from "../images/icons/rooms.svg";
import bed from "../images/icons/bed.svg";
import people from "../images/icons/people.svg";
import stairs from "../images/icons/stairs.svg";
import Typewriter from "typewriter-effect/dist/core";
import { TailSpin } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchCatalog } from "../store/slices/cottageSlice";

const Houses = () => {
  const dispatch = useDispatch();
  const cottages = useSelector((state) => state.catalog.catalog);
  const app = useRef();
  useEffect(() => {
    dispatch(fetchCatalog());

    var typewriter = new Typewriter(app.current, {
      loop: true,
    });

    typewriter
      .typeString("- це можливість відпочити від міської метушні")
      .pauseFor(5500)
      .deleteAll()
      .pauseFor(5500)
      .start();
  }, []);

  return (
    <section className="houses">
      <div className="houses-backdrop">
        <div className="container">
          <div className="houses-content">
            <div className="houses-description">
              <h1 className="houses-title">
                Cottage<span className="houses-title-span">Green</span>
                <p ref={app} id="rep" className="houses-title-text"></p>
              </h1>
            </div>
            <div className="houses-list-block">
              {cottages.length !== 0 ? (
                <ul className="houses-list">
                  {cottages.map((num) => (
                    <li className="houses-item" key={num._id}>
                      <img className="houses-img" alt="house" src={num.img} />

                      <div className="houses-item-block">
                        <h2 className="houses-item-title">{num.title}</h2>
                        <div className="houses-item-text-list">
                          <p className="houses-item-text">
                            <img
                              className="houses-item-text-icon"
                              src={room}
                              alt="room"
                            />
                            : {num.room}
                          </p>
                          <p className="houses-item-text">
                            <img
                              className="houses-item-text-icon"
                              src={bed}
                              alt="bed"
                            />
                            : {num.bed}
                          </p>
                          <p className="houses-item-text">
                            <img
                              className="houses-item-text-icon"
                              src={people}
                              alt="people"
                            />
                            : {num.people}
                          </p>
                          <p className="houses-item-text">
                            <img
                              className="houses-item-text-icon"
                              src={stairs}
                              alt="stairs"
                            />
                            : {num.stairs}
                          </p>
                        </div>
                        <p className="houses-item-des">{num.desc}</p>
                        <p className="houses-item-prise">
                          Ціна: {num.price}грн\ніч
                        </p>
                        <Link
                          to={`/house/${num._id}`}
                          className="houses-item-buy"
                        >
                          Забронювати
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Houses;
