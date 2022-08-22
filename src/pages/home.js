import React from "react";
import CallMe from "../components/CallMe.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import "../styles/main.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CallMe />
    </>
  );
};
export default Home;
