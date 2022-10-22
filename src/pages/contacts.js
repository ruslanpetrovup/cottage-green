import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contant";
import CallMe from "../components/CallMe";
import "../styles/main.scss";

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакти";
  }, []);
  return (
    <>
      <Header />
      <Contact />
      <Footer />
      <CallMe />
    </>
  );
};

export default Contacts;
