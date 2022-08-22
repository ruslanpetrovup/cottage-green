import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import CallMe from "../components/CallMe.jsx";
import Footer from "../components/Footer";
import "../styles/main.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
      <CallMe />
    </>
  );
};
export default Home;
