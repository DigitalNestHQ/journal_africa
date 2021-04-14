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
    <form className="comment-form p-0 col-lg-8" onSubmit={handleSubmit}>
      {/* {
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
      } */}
        <textarea
        name="comment"
        id="comment"
        cols="5"
        rows="4"
        placeholder="Comment"
        onChange={handleChange}
        required
        className="form-control"
        ></textarea>
        <input 
            type="text" 
            name="name" 
            placeholder="Name*"
            minLength="2" 
            onChange={handleChange} 
            className="form-control" 
            required
        />
        <input 
            type="text" 
            name="name" 
            placeholder="Email*"
            minLength="2" 
            onChange={handleChange} 
            className="form-control" 
            required
        />
        <input 
            type="text" 
            name="name" 
            placeholder="Website"
            minLength="2" 
            onChange={handleChange} 
            className="form-control" 
            required
        />
          <div className="checkbox">
            <label><input type="checkbox" value=""/> Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" value=""/> Notify me of follow-up comments by email.</label>
          </div>
          <div className="checkbox disabled">
            <label><input type="checkbox" value=""/> Notify me of new posts by email.</label>
          </div>
        <input type="submit" value="Post Comment" className="btn-submit" />
    </form>
  );
};

export default CommentForm;
