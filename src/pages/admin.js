import React, { useState } from "react";
import Header from "../components/Header";
import CheckCatalog from "../components/CheckCatalog";
import SelectFun from "../components/SelectFun";
import CheckComments from "../components/CheckComments";
import "../styles/main.scss";
const Admin = () => {
  const [numb, setNumb] = useState(0);
  const [comp] = useState([<CheckCatalog />, <CheckComments />]);
  const selectC = (num) => {
    setNumb(Number(num));
  };
  return (
    <>
      <Header />
      <SelectFun select={selectC}>{comp[numb]}</SelectFun>
    </>
  );
};
export default Admin;
