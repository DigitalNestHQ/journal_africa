// import React, { useContext, useEffect, useState } from "react";
// import authContext from "../../context/auth/authContext";
// import "./allNews.css";
// import { postNewComment } from '../../context/news/NewsApi'
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
// import { ExploreMore } from "../homepage/ExploreMore";
// import axios from "axios";

// const CommentForm = (props) => {
//   const [commentAdded, setCommentAdded] = useState(false)
//   const userContext = useContext(authContext);
//   const { isAuthenticated, user } = userContext;
//   const [subscribeToNewsLetter, setSubscribeToNewsLetter] = useState(false);
//   const history=useHistory()
//   const [newComment, setNewComment] = useState({
//     name: null,
//     comment: null,
//     email: null,
//     post_id: props.post_id,
//     post_title: props.post_title,
//   });

//   useEffect(() => {
//     // if there is a logged in user, auto fill their information
//     if(isAuthenticated && user){
//       setNewComment({
//         ...newComment,
//         name: `${user.firstname} ${user.lastname}`,
//         email: user.email
//       })
//     }
//   }, [isAuthenticated, user])

//   const handleChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     postNewComment(newComment)
//     .then((res)=>{
//       if(subscribeToNewsLetter){
//         handleNewLetterSubscription()
//       }
//       setCommentAdded(true)
//     })
//     .catch((err)=>alert("err"))
//   }

  
//   if(commentAdded){
//     setTimeout(() => {
//       setCommentAdded(false)
//     }, 5000);

//     return(
//       <>
//       <div className="col-6 p-0 mb-5">
//       {
//         subscribeToNewsLetter ? (
//           <p className="small">
//             You have sucessfully subscribed to our newsletter and your comment has been posted successfully
//         </p>
//         ):(
//           <p className="small">
//             Comment posted successfully
//           </p>
//         )
//       }
//         <Link to="/" className="btn btn-sm comment-btn-explore text-whte small">Explore more news</Link>
//       </div>
//       </>
//     )
//   }
//   // function that handles news letter subscription
//   const handleNewLetterSubscription = async() =>{
//     const url = "https://api.tv24africa.com/api/v1/newsletter";
//     const response = await axios.post(url, newComment.email)
//   }
//   // function that set the checkbox true or false
//   const handleNewLetterCheckBox = () =>{
//     return setSubscribeToNewsLetter(!subscribeToNewsLetter)
//   }

//   return (
//     <form className="comment-form p-0 col-lg-8" onSubmit={handleSubmit}>
//         <textarea
//         name="comment"
//         id="comment"
//         cols="5"
//         rows="4"
//         placeholder="Comment"
//         onChange={handleChange}
//         required
//         className="form-control"
//         ></textarea>
//         {// if the current user is not logged in collect that names
//           !isAuthenticated && (
//           <>
//             <input 
//               type="text" 
//               name="name" 
//               placeholder="Name*"
//               minLength="2" 
//               onChange={handleChange} 
//               className="form-control" 
//               required
//             />
//           <input 
//               type="email" 
//               name="email" 
//               placeholder="Email*"
//               minLength="2" 
//               onChange={handleChange} 
//               className="form-control" 
//               required
//           />
//           </>
//           )
//         }
//           {/* <div className="checkbox disabled">
//             <label><input type="checkbox" value="" onChange={()=>handleNewLetterCheckBox()}/> Notify me of new posts by email.</label>
//           </div> */}
//         <input type="submit" value="Post Comment" className="btn-submit" />
//     </form>
//   );
// };

// export default CommentForm;
