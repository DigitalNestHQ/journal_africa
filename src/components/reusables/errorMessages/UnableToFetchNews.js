import React from 'react'

export const UnableToFetchNews = () => {
    return (
        <div className="my-5 text-center" style={{padding: '4rem', lineHeight:'0.7rem'}}>
          <h3>News not available</h3>
          <p className="lead">You are offline</p>
        </div>
    )
}


export default UnableToFetchNews;