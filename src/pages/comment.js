import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommentList from "../components/CommentList";
import "../styles/main.scss";

const Comment = () => {
  return (
    <>
      <Header />
      <CommentList />
      <Footer />
    </>
  );
};
export default Comment;
