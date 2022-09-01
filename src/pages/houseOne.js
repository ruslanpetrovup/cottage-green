import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallMe from "../components/CallMe";
import House from "../components/House";
import "../styles/main.scss";
import CommentList from "./../components/CommentList";

const HouseOne = () => {
  return (
    <>
      <Header />
      <House />
      <CommentList />
      <Footer />
      <CallMe />
    </>
  );
};

export default HouseOne;
