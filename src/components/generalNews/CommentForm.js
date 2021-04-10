import React, { useContext, useState } from "react";
import authContext from "../../context/auth/authContext";
import "./allNews.css";
import { postNewComment } from '../../context/news/NewsApi'
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ExploreMore } from "../homepage/ExploreMore";

const CommentForm = (props) => {
  const [commentAdded, setCommentAdded] = useState(false)
  const userContext = useContext(authContext);
  const { isAuthenticated, user } = userContext;
  const history=useHistory()
  const [newComment, setNewComment] = useState({
    name: isAuthenticated ? `${user.firstname} ${user.lastname}` : " ",
    comment: '',
    post_id: props.post_id,
    post_title: props.post_title,
  });

  const handleChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    // console.log(newComment)
    e.preventDefault()
    postNewComment(newComment)
    .then((res)=>setCommentAdded(true))
    .catch((err)=>alert("err"))
  }

  if(commentAdded){
    return(
      <>
        <p className="small">
          Comment posted successfully
        </p>
          <Link to="/" className="btn btn-sm  btn-danger text-white small">Explore more news</Link>
      </>
    )
  }
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {
        !isAuthenticated && (
          <>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Enter your name"
            minLength="2" 
            onChange={handleChange} 
            className="form-control" 
            required
            />
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
