import React from "react";
import Header from "../components/Header";
import Houses from "../components/Houses";
import CallMe from "../components/CallMe";
import img1 from "../images/house.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import "../styles/main.scss";

const Rent = () => {
  const cottage = [
    {
      img: img1,
      title: "Коттедж спокій",
      room: "3",
      bed: "4",
      people: "6",
      stairs: "2",
      prise: "7000",
    },
    {
      img: img2,
      title: "Коттедж Ластівка",
      room: "2",
      bed: "3",
      people: "4",
      stairs: "1",
      prise: "4000",
    },
    {
      img: img3,
      title: "Коттедж Сокіл",
      room: "4",
      bed: "5",
      people: "7",
      stairs: "2",
      prise: "10000",
    },
    {
      img: img4,
      title: "Коттедж Орел",
      room: "2",
      bed: "3",
      people: "4",
      stairs: "1",
      prise: "6000",
    },
    {
      img: img5,
      title: "Коттедж Вогонь",
      room: "4",
      bed: "2",
      people: "6",
      stairs: "2",
      prise: "9000",
    },
  ];
  return (
    <>
      <Header />
      <Houses cottages={cottage} />
      <CallMe />
    </>
  );
};
export default Rent;
