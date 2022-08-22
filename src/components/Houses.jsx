import React from "react";
import room from "../images/icons/rooms.svg";
import bed from "../images/icons/bed.svg";
import people from "../images/icons/people.svg";
import stairs from "../images/icons/stairs.svg";
import Typewriter from "typewriter-effect/dist/core";

const Houses = ({ cottages }) => {
  var app = document.getElementById("rep");

  var typewriter = new Typewriter(app, {
    loop: true,
  });

  typewriter
    .typeString("- це можливість відпочити від міської метушні")
    .pauseFor(5500)
    .deleteAll()
    .pauseFor(5500)
    .start();
  return (
    <section className="houses">
      <div className="houses-backdrop">
        <div className="container">
          <div className="houses-content">
            <div className="houses-description">
              <h1 className="houses-title">
                Cottage<span className="houses-title-span">Green</span>
                <p id="rep" className="houses-title-text"></p>
              </h1>
            </div>
            <div className="houses-list-block">
              <ul className="houses-list">
                {cottages.map((num) => (
                  <li className="houses-item">
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
                      <p className="houses-item-des">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Tempora aliquam quam, architecto molestiae omnis
                        voluptatibus nihil quis rerum possimus natus voluptas
                        neque labore sint quasi laborum hic excepturi aspernatur
                        quaerat fugiat dolores amet atque dolore fugit ipsa!
                        Nostrum, natus vero?
                      </p>
                      <p className="houses-item-prise">
                        Ціна: {num.prise}грн\ніч
                      </p>
                      <button className="houses-item-buy">Забронювати</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Houses;
