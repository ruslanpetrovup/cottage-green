import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-block">
            <h1 className="hero-title">
              Cottage<span className="hero-title-span">Green</span>
            </h1>
            <p className="hero-text">
              <span className="hero-text-span1">Cottage</span>
              <span className="hero-text-span2">Green</span> - це відмінний
              варіант для відпочинку всією родиною або компанією друзів. Чудовий
              сервіс, дружній персонал. Наші співробітники завжди прийдуть на
              допомогу. Тут ви зможете возз'єднатися з природою. Бронюйте прямо
              зараз.
            </p>
            <Link to="/rent" className="hero-button">
              <div className="hero-button-thoomb"></div>
              <p className="hero-button-text">Забронювати</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
