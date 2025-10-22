import { useState } from "react";
import "./ShowCmnt.css";
import CommentsForm from "./CommentsForm.jsx";

export default function ShowComment() {
  let [comments, setComments] = useState([
    {
      username: "adsf",
      comment: "adsfasd",
      rating: "7",
    },
  ]);

  let addComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All comments </h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>remark : {comment.comment}</span>&nbsp;
            <span>(rated {comment.rating})</span>
            <br />
            <span>
              <i>-@{comment.username}</i>
            </span>
          </div>
        ))}
        <hr />
      </div>
      <CommentsForm addComment={addComment} />
    </>
  );
}
