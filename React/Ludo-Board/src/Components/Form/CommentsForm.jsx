import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  return errors;
};

export default function Comments({ addComment }) {
  //   let [formData, setFormData] = useState({
  //     username: "",
  //     comment: "",
  //     rating: "",
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      comment: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   let handleInput = (event) => {
  //     setFormData((currData) => {
  //       return { ...currData, [event.target.name]: event.target.value };
  //     });
  //   };

  //   let [isValid, SetIsValid] = useState(true);

  //   let handleSubmit = (event) => {
  //     if (!formData.username) {
  //       console.log("username is null!");
  //       SetIsValid(false);
  //       event.preventDefault();
  //       return;
  //     }
  //     console.log(formData);
  //     addComment(formData);
  //     setFormData({ username: "", comment: "", rating: "" });
  //   };

  return (
    <div>
      <h4>Write your comment!!</h4>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username : </label>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br />
        <br />
        <label htmlFor="comments">comment : </label>
        <textarea
          name="comment"
          id="comments"
          rows={4}
          placeholder="Add your comment here!"
          value={formik.values.comment}
          onChange={formik.handleChange}
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
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
        />
        <br />
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
