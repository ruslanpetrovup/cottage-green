import React, { useEffect, useState } from "react";
import axios from "axios";

const CheckComments = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios.get("https://cottage-green.herokuapp.com/comment/get").then((res) => {
      setComment(res.data);
    });
  }, []);

  const deleteComment = ({ target }) => {
    axios
      .delete(
        `https://cottage-green.herokuapp.com/comment/delete/${target.dataset.id}`
      )
      .then((res) => {
        const edit = comment.filter((num) => num._id !== target.dataset.id);
        setComment(edit);
      });
  };
  return (
    <section className="checkcomments">
      <div className="container">
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
                  Видалити
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CheckComments;
