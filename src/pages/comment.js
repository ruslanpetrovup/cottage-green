import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommentList from "../components/CommentList";
import CallMe from "../components/CallMe";
import "../styles/main.scss";

const Comment = () => {
  useEffect(() => {
    document.title = "Відгуки";
  }, []);
  return (
    <>
      <Header />
      <CommentList />
      <Footer />
      <CallMe />
    </>
  );
};
export default Comment;
