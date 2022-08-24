import React from "react";

const CheckCatalog = () => {
  return (
    <section className="check">
      <div className="container">
        <div className="check-block">
          <h1 className="check-head">Додавання каталогу</h1>
          <div className="check-add">
            <div className="check-add-photo">
              <input type="file" className="check-add-photo-input" />
            </div>
            <form className="check-add-form">
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
              <button type="submit" className="check-add-form-button">
                Додати
              </button>
            </form>
          </div>
          <div className="check-catalog"></div>
        </div>
      </div>
    </section>
  );
};
export default CheckCatalog;
