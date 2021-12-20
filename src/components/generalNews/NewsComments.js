import React, { useEffect, useState, useContext } from 'react'
import commentsContext from '../../context/comments/commentsContext'
import Moment from 'react-moment'

const NewsComments = ({ slug }) => {
  const [commentLength, setCommentLength] = useState(3)
  const context = useContext(commentsContext)
  const { comment_loading, getComments, newsComment } = context

  const handleComment = () => {
    setCommentLength((prev) => prev + 2)
  }

  useEffect(() => {
    getComments(slug)
    console.log('comment-effect')
    //eslint-disable-next-line
  }, [slug])

  if (comment_loading || newsComment === null) {
    return <div></div>
  }

  return (
    <div className="comments-comments">
      <h5 className="comment-form-header">Comments</h5>
      {!comment_loading && newsComment.length === 0 ? (
        <p>Be the first to comment on this post</p>
      ) : (
        newsComment.slice(0, commentLength).map((eachComment) => (
          <div className="comments-comments-container" key={eachComment.id}>
            <div className="comment-details">
              <h5 className="comment-name">{eachComment.name}</h5>
              <p className="comment-text">{eachComment.comment}</p>
            </div>
            <p className="comment-date">
              <Moment format="MMMM Do YYYY">{eachComment.created_at}</Moment>
            </p>
          </div>
        ))
      )}
      <div className="comment-load-more">
        <button className="load-more" onClick={handleComment}>
          Load More...
        </button>
      </div>
    </div>
  )
}

export default NewsComments
