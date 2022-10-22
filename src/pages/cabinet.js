import React, { useEffect } from "react";
import Header from "../components/Header";
import Setting from "../components/Setting";
import "../styles/main.scss";

const Cabinet = () => {
  useEffect(() => {
    document.title = "Ваш кабінет";
  }, []);
  return (
    <>
      <Header />
      <Setting />
    </>
  );
};

export default Cabinet;
