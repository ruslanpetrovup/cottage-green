import React, { useEffect, useState, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import Typewriter from "typewriter-effect/dist/core";
import { useSelector } from "react-redux";

import axios from "axios";

const CommentList = () => {
  const [comment, setComment] = useState([]);
  const buttonMessage = useRef();
  const commentDesc = useRef();
  const user = useSelector((state) => state.user.data);

  useEffect(
    () => async () => {
      try {
        const response = await axios(
          `${process.env.REACT_APP_SERVER}/comment/get`
        );
        setComment(response.data);
      } catch (error) {
        console.log(error);
      }
      const app = commentDesc.current;
      let typewriter = new Typewriter(app, {
        loop: true,
      });

      typewriter
        .typeString(
          "Тут ви можете поділитися своїми емоціями після відпочинку в CottageGreen."
        )
        .pauseFor(5500)
        .deleteAll()
        .pauseFor(5500)
        .start();
    },
    []
  );

  const addComment = async (e) => {
    e.preventDefault();

    if (Object.keys(user).length === 0) {
      buttonMessage.current.classList.add("active");
      setTimeout(() => {
        buttonMessage.current.classList.remove("active");
      }, 5000);
      return;
    }
    if (e.target[0].value.length < 2) return;
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/comment/add`,
        {
          avatar: user.avatar,
          name: user.name,
          secondname: user.secondname,
          comment: e.target[0].value,
        }
      );
      e.target[0].value = "";
      setComment([...comment, result.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="comment">
      <div className="container">
        <div className="comment-block">
          <h1 className="comment-title">Відгуки</h1>
          <p className="comment-desc" ref={commentDesc}>
            Тут ви можете поділитися своїми емоціями після відпочинку в
            CottageGreen.
          </p>
          <div className="comment-submit">
            <form className="comment-sumbit-form" onSubmit={addComment}>
              <textarea
                type="text"
                className="comment-submit-form-input"
              ></textarea>
              <div className="comment-submit-button-block">
                <p
                  ref={buttonMessage}
                  className="comment-submit-button-message"
                >
                  Для написання повідомлення вам потрібно зареєструватися або
                  увійти до свого облікового запису
                </p>
                <button type="submit" className="comment-sumbit-button">
                  Надіслати
                </button>
              </div>
            </form>
          </div>
          <div className="comment-list">
            {comment.length === 0 ? (
              <div className="comment-loader">
                <TailSpin
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <ul className="comment-info">
                {comment.map((num, index) => (
                  <li className="comment-item" key={index}>
                    <div className="comment-item-profile">
                      <img
                        className="comment-item-profile-img"
                        src={num.avatar}
                        alt="avatar"
                      />
                      <p className="comment-item-profile-name">{num.name}</p>
                      <p className="comment-item-profile-secondname">
                        {num.secondname}
                      </p>
                    </div>
                    <div className="comment-item-text">
                      <p className="comment-item-text-com">{num.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommentList;
