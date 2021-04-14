import React from 'react'
import { Card } from 'react-bootstrap';
import { formatDate } from '../../_helper/dateFormatter';

export const NewsComments = ({comments}) => {
    return (
        <>
            <section className="comment--feed">
                {/*  if there is no comment display drop a comment else return the comments */}
                {
                    comments && comments.length == 0 ? <><p className="drop-comment-text">Leave a Reply</p></> :
                     comments && comments.map((comment, index)=>{
                        return (
                        <Card key={index}>
                            <Card.Text className="h5 pl-0 text-capitalize commenter">{comment?.name}</Card.Text>
                            <span className="comment-date">Posted on {formatDate(comment?.created_at)}</span>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p className=" comment">
                                        {' '}
                                        {comment?.comment}
                                        {' '}
                                    </p>
                                    {/* <footer className="blockquote-foote comment-date">
                                    </footer> */}
                                </blockquote>
                                <hr style={{border: '1px #ddd solid', width: '100%'}}/>
                            </Card.Body>
                        </Card> 
                        )
                    })
                }
            </section>
        </>
    )
}

export default NewsComments;