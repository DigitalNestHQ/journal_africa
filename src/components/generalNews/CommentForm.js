import React, { useContext, useState } from "react";
import authContext from "../../context/auth/authContext";
import "./allNews.css";
import { postNewComment } from '../../context/news/NewsApi'

const CommentForm = (props) => {
  const userContext = useContext(authContext);
  const { isAuthenticated, user } = userContext;
  const [newComment, setNewComment] = useState({
    name: isAuthenticated ? user.firstname + " " +user.lastname : "sam",
    comment: '',
    post_id: props.post_id,
    post_title: props.post_title,
  });

  const handleChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    console.log(newComment)
    e.preventDefault()
    postNewComment(newComment)
  }

  console.log(user)

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {
        !isAuthenticated && (
          <>
            <label htmlFor="name">Name</label>
            <input 
            type="text" name="name" 
            minLength="2" onChange={handleChange} 
            className="form-control" required/>
            {/* Email not included in the endpoint params */}
            {/* <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange}/> */}
          </>
        )
      }
        <label htmlFor="comment">Your Comment</label>
        <textarea
        name="comment"
        id="comment"
        cols="5"
        rows="4"
        placeholder="Write comment"
        onChange={handleChange}
        required
        className="form-control"
        ></textarea>
        <input type="submit" value="Add Comment" className="btn-submit" />
    </form>
  );
};

export default CommentForm;
