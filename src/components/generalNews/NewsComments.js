import React from 'react'
import { Card } from 'react-bootstrap';

export const NewsComments = ({comments}) => {
    console.log('from newscomments', comments)
    return (
        <>
            <section className="comment--feed my-5  p-2 p-lg-0">
                <h4 className="m-0 mb-3">Comments</h4>
                {/* { 
                    comments && comments.map((comment)=>{
                        <Card>
                            <Card.Header className="h5">Ayodele Samuel Adebayo</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p className="font-italic">
                                    {' '}
                                    What an interesting news.
                                    {' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Posted on <cite title="Source Title">March 12 2021</cite>
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>   

                    })
                } 
                {
                    comments.length == 0 ? <><p className="h6 mt-5 lead">Drop a comment</p></> : ""
                }
                
                */}

                {/*  if there is no comment display drop a comment else return the comments */}
                {
                    comments && comments.length == 0 ? <><p className="h6 mt-5 lead">Drop a comment</p></> :
                     comments && comments.map((comment)=>{
                        <Card>
                            <Card.Header className="h5">Ayodele Samuel Adebayo</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p className="font-italic">
                                    {' '}
                                    What an interesting news.
                                    {' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Posted on <cite title="Source Title">March 12 2021</cite>
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card> })
                }
            </section>
        </>
    )
}

export default NewsComments;