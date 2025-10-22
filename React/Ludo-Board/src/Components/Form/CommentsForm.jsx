import { useState } from "react";

export default function Comments({ addComment }) {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: "",
  });

  let handleInput = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    addComment(formData);
    setFormData({ username: "", comment: "", rating: "" });
  };

  return (
    <div>
      <h4>Write your comment!!</h4>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">username : </label>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInput}
        />
        <br />
        <br />
        <label htmlFor="comments">comment : </label>
        <textarea
          name="comment"
          id="comments"
          rows={4}
          placeholder="Add your comment here!"
          value={formData.comment}
          onChange={handleInput}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">rating : </label>
        <input
          type="number"
          placeholder="rate"
          min={1}
          max={5}
          name="rating"
          value={formData.rating}
          onChange={handleInput}
          id="rating"
        />
        <br />
        <br />
        <button>Post</button>
      </form>
    </div>
  );
}
