import React, { useEffect } from "react";
import Header from "../components/Header";
import Houses from "../components/Houses";
import CallMe from "../components/CallMe";
import Footer from "../components/Footer";
import "../styles/main.scss";

const Rent = () => {
  useEffect(() => {
    document.title = "Забронювати";
  }, []);
  return (
    <>
      <Header />
      <Houses />
      <Footer />
      <CallMe />
    </>
  );
};
export default Rent;
