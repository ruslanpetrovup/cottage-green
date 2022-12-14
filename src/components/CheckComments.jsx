import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";

const CheckComments = () => {
  const [comment, setComment] = useState([]);

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
    },
    []
  );

  const deleteComment = async ({ target }) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER}/comment/delete/${target.dataset.id}`
      );

      const edit = comment.filter((num) => num._id !== target.dataset.id);
      setComment(edit);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="checkcomments">
      <div className="container">
        {comment.length === 0 ? (
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="checkcomments-loading"
            visible={true}
          />
        ) : (
          <ul className="checkcomments-list">
            {comment.map((num, index) => (
              <li className="checkcomments-item" key={index}>
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
                <div className="comment-item-buttons">
                  <button
                    className="comment-item-delete"
                    data-id={num._id}
                    onClick={deleteComment}
                  >
                    ????????????????
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CheckComments;
