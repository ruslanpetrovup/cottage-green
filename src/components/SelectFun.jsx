import React from "react";

const SelectFun = ({ children, select }) => {
  const selectB = ({ target }) => {
    document.querySelectorAll(".selectfun-button").forEach((num) => {
      num.classList.remove("active");
    });
    target.classList.add("active");
    select(target.dataset.key);
  };
  return (
    <section className="selectfun">
      <div className="container">
        <div className="selectfun-block">
          <div className="selectfun-menu">
            <ul className="selectfun-list">
              <li className="selectfun-item">
                <button
                  className="selectfun-button active"
                  data-key="0"
                  onClick={selectB}
                >
                  Будинки
                </button>
              </li>
              <li className="selectfun-item">
                <button
                  className="selectfun-button"
                  data-key="1"
                  onClick={selectB}
                >
                  Коментарі
                </button>
              </li>
            </ul>
          </div>
          <div className="selectfun-content">{children}</div>
        </div>
      </div>
    </section>
  );
};
export default SelectFun;
