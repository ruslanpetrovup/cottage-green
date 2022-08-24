import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Houses from "../components/Houses";
import CallMe from "../components/CallMe";
import Footer from "../components/Footer";
import "../styles/main.scss";

const Rent = () => {
  const [cottage, setCottage] = useState([]);
  axios.get("https://cottage-green.herokuapp.com/catalog/get").then((res) => {
    // console.dir(res.data);
    setCottage(res.data);
  });
  return (
    <>
      <Header />
      <Houses cottages={cottage} />
      <Footer />
      <CallMe />
    </>
  );
};
export default Rent;
