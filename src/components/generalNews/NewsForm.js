import React, { useState, useEffect, useContext, useCallback } from 'react'
import commentsContext from '../../context/comments/commentsContext'
import authContext from '../../context/auth/authContext'

const NewsForm = ({ singleNews }) => {
  const [comments, setComments] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
  })
  const [notifyComment, setNotifyComment] = useState(false)
  const [saveEmail, setSaveEmail] = useState(false)
  const [notifyPost, setNotifyPost] = useState(false)
  const [button, setButton] = useState(true)
  const contextComment = useContext(commentsContext)
  const userContext = useContext(authContext)
  const { user, emailSub } = userContext
  const { comment_loading, postComments } = contextComment
  const { comment, name, email, website } = comments
  const onChange = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    postComments(name, comment, singleNews[0].id, singleNews[0].post_title)
    if (notifyPost || notifyComment) {
      emailSub(email)
    }
    setComments({
      comment: '',
      name: '',
      email: '',
      website: '',
    })
  }

  useEffect(() => {
    if (user) {
      setComments({
        comment: '',
        name: `${user.data.firstname} ${user.data.lastname}`,
        email: `${user.data.email}`,
        website: '',
      })
      setButton(false)
    }
  }, [user])

  return (
    <div className="comment-form">
      <h5 className="comment-form-header">Leave a reply</h5>
      <form className="post-comment-form" onSubmit={onSubmit}>
        <div className="post-group">
          <textarea
            placeholder="Comment"
            className="form-control area-input"
            rows={8}
            name="comment"
            value={comment}
            onChange={onChange}
            required
          />
        </div>
        <div className="post-group">
          <input
            type="text"
            placeholder="Name"
            className="form-control post-input"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="post-group">
          <input
            type="email"
            placeholder="Email"
            className="form-control post-input"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="post-group">
          <input
            type="text"
            placeholder="Website"
            className="form-control post-input"
            name="website"
            value={website}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group check-section">
          <input
            type="checkbox"
            name="agree"
            className="agree-checkbox"
            checked={saveEmail}
            onChange={() => setSaveEmail(true)}
          />
          <label htmlFor="agree" className="reg-agree-label">
            Save my name, email, and website in this browser for the next time I
            comment
          </label>
        </div>
        <div className="form-group check-section">
          <input
            type="checkbox"
            name="agree"
            className="agree-checkbox"
            checked={notifyComment}
            onChange={() => setNotifyComment(true)}
          />
          <label htmlFor="agree" className="reg-agree-label">
            Notify me of follow-up comments by email
          </label>
        </div>
        <div className="form-group check-section">
          <input
            type="checkbox"
            name="agree"
            className="agree-checkbox"
            checked={notifyPost}
            onChange={() => setNotifyPost(true)}
          />
          <label htmlFor="agree" className="reg-agree-label ">
            Notify me of new posts by email
          </label>
        </div>
        <div className="post-group check-section">
          <button
            className="post-comment-btn contact-form-btn"
            type="submit"
            disabled={button}
          >
            {comment_loading ? 'Loading...' : 'Post Comment'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsForm
